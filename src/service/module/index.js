import fetch from "./../fetch";
// Method 1
export const cityGuess = () =>
    fetch("/v1/cities", {
        type: "guess"
    });
// Method 2
export default {
    // homeList(data = {}) {
    //     return fetch("api/api/index", data)
    // },
    // newList(data = {}) {
    //     return fetch('api/api/news', data)
    // }
    homeList: data => fetch("api/api/index", data),
    newList: data => fetch('api/api/news', data)
};