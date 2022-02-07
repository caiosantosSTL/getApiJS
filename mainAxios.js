

const getInfoAxios = async (getId) =>{
    try {
        url = `https://pokeapi.co/api/v2/pokemon/${getId}/`
        const res = await axios(url)
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}

getInfoAxios(2)