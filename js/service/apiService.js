import {getRequest} from "./index";
import {searchSample, suggesstionSample} from "../sample";

export const ApiService = {
    fetchSearchResults: (query) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(searchSample.Demo.webPages.value)
            }, 2000)
        })
    },
    fetchSuggesstions: (query) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve((suggesstionSample.suggestionGroups.find(group => group.name === 'Web') || {}).searchSuggestions || [])
            }, 2000)
        })
    }
}