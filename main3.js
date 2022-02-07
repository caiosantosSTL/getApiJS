const getAsyncInfo = async (idPost) => {
    url = `https://pokeapi.co/api/v2/pokemon/${idPost}/`
    try {
        const res = await fetch(url)
        const post = await res.json()

        console.log(post)
    } catch (error) {
        console.log(error);
    }
}

getAsyncInfo(3)