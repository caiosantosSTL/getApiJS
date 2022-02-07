const getInfoApi = (idPost) => {
    url = `https://pokeapi.co/api/v2/pokemon/${idPost}/`
    url2 = `https://jasonplaceholder.typicode.com/posts/${idPost} `
    fetch(url)
        .then(res => {
            return res.json()
        })
        .then(post => { console.log("out --- ", post.name) })
        .catch(err => console.log(err))

}

getInfoApi(1)

