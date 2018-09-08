import {getRequest} from "./index";
import {searchSample, suggesstionSample} from "../sample";

/*

Key 1: 56f23ca837f94c44b4887a20ddec1ccf

Key 2: b0242ecf401b468083170f9d1defa5fe
 */

export const ApiService = {
    fetchSearchResults: (query) => {
        return getRequest('https://api.cognitive.microsoft.com/bing/v7.0/search?q=' + query);
    },
    fetchSuggesstions: (query) => {
        return getRequest('https://api.cognitive.microsoft.com/bing/v7.0/suggestions?q=' + query);
    }
}