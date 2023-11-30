import { useState } from "react"
import axios from "axios"
const useFetch = (url) => {

    const [infoApi, setInfoApi] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    const getApi = () => {
        setIsLoading(true)
        axios.get(url)
            .then(res => {
                setInfoApi(res.data)
                setHasError(false)
            })
            .catch(err => {
                console.log(err)
                setHasError(true)
            })
            .finally(() => setIsLoading(false))
    }

    return [infoApi, getApi, isLoading, hasError]
}

export default useFetch