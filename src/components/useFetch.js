import axios from 'axios'

const useFetch = () => {

    const getData = async (url) => {
        try {
            let userData = await axios.get(url)
            return userData.data
        } catch (error) {
            console.log(error)
        }
    }

    return getData
}

export default useFetch