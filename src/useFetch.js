import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setPending] = useState(true)
    const [error, setError] = useState(null)
    useEffect(()=>{
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, {signal: abortCont.signal}).then(res=>{
                if(!res.ok){
                    throw Error('xxxxx ')
                }
                /* console.log(res) */
                return res.json()
            }).then(data=>{
                setData(data)
                setPending(false)
                setError(null)
            }).catch(err=>{
                if(err.name === 'AbortError'){
                    console.log('fetch aborted')
                }else{
                    setError(err.message)
                    setPending(false)
                }
            })
        },1000)
    },[url])

    return {data, isPending, error}
}

export  default useFetch