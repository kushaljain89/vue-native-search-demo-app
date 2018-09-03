export default {
    setSuggestions: (state, payload) => {
        state.suggestions = payload;
        state.loadingSuggestions = false;
    },
    setSearchData: (state, payload) => {
        state.searchData = payload.data;
        state.query = payload.query;
        state.loadingSearchData = false;
    },
    setLoadingSuggestions: (state, payload) => {
        state.loadingSuggestions = payload;
    },
    setLoadingSearchData: (state, payload) => {
        state.loadingSearchData = payload;
    },
    setRecents: (state, payload) => {
        state.recents = payload
    }
}