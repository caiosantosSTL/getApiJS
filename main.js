

const getInfo = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/1/'

    // promessas

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => console.log(err))
}

getInfo()