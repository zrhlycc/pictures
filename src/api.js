import axios from 'axios'

const searchImage = async(term) => {
    const url = 'http://api.unsplash.com/search/photos/?client_id=G25PBI_4eMlPgyyen3VPQ5YLE0sifGhhzoOOQVa368g'
    const response = await axios.get(url, {
        params: {
            query: 'cars'
        }
    })

    console.log(term)
    console.log(response.data.results)

    return response.data.results

}

export default searchImage
