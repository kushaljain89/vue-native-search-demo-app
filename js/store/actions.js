import {AsyncStorage} from "react-native"
import {ApiService} from "../service/apiService";

export default {
    fetchSuggestions: ({commit}, payload) => {
        console.log('fetching suggestions for ', payload);
        commit('setLoadingSuggestions', true);
        ApiService.fetchSuggesstions(payload).then(data => {
            commit('setSuggestions', data)
        }).catch(err => commit('setLoadingSuggestions', false))
    },
    fetchSearchData: ({commit, dispatch}, payload) => {
        commit('setLoadingSearchData', true);
        ApiService.fetchSearchResults(payload).then(data => {
            commit('setSearchData', {data, query: payload})
            dispatch('addToRecents', payload);
        }).catch(err => commit('setLoadingSearchData', false))
    },
    resetRecents: ({commit}) => {
        commit('setRecents', []);
        AsyncStorage.removeItem('recents')
    },
    addToRecents: ({commit, state}, payload) => {
        if (!state.recents.find(search => search.query === payload)) {
            const newRecents = [...state.recents.slice(state.recents.length >= 4 ? state.recents.length - 4 : 0), {
                displayText: payload,
                query: payload
            }];
            console.log(newRecents, payload);
            commit('setRecents', newRecents);
            AsyncStorage.setItem('recents', JSON.stringify(newRecents))
        }
    },
    fetchRecentsFromLocal: ({commit}) => {
        AsyncStorage.getItem('recents').then(value => {
            console.log('found this', value);
            commit('setRecents', value ? JSON.parse(value) : []);
        });
    }
}