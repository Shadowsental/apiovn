const url = 'https://www.swapi.tech/api/people/?name=';
const character = document.getElementById("inputCharacter");
const output = document.getElementById("output")

document.getElementById("btnJson").addEventListener("click", getApi);

function getApi() {
    fetch(url + character.value)
        .then(function (response) {
    return response.json();
})

.then(data => {
    output.innerHTML = ''

    for (let item in data.result) {
        let properties = data.result[item].properties

        output.innerHTML = JSON.stringify(properties, null, "-");

    }
})

.catch(error => console.log('error', error))
}