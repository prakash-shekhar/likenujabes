obj = DATA[decodeURI(location.hash.substr(1))]
similar = []
collaborators = []

for (const prop in DATA){
    if(DATA[prop]["Similar"]){
        similar.push(prop)
    }
    if(DATA[prop]["Collaborator"]){
        collaborators.push(prop)
    }
}

var app = new Vue({
    el: '#app',
    data: {
        similar: similar,
        collaborators: collaborators,
        name: obj["name"],
        biography: obj["bio"],
        albums: obj["discography"],
        sources: obj["sources"]
    },
})