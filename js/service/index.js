export const getRequest = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'get',
            headers: {
                "Ocp-Apim-Subscription-Key": "56f23ca837f94c44b4887a20ddec1ccf"
            }
        }).then(response => {
            resolve(response.json())
        }).catch(err => reject(err))
    })
};