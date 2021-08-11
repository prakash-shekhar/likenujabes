obj = DATA[decodeURI(location.hash.substr(1))]
var app = new Vue({
    el: '#app',
    data: {
        name: obj["name"],
        biography: obj["bio"],
        albums: obj["discography"],
        sources: obj["sources"]
    },
})