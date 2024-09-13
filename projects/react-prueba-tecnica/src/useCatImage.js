import { useState, useEffect } from "react"

const cat_prefix_image_url = 'https://caatas.com'

export function useCatImage ({fact}) {
    const [imageUrl, setImageurl] = useState()


    useEffect(() => {
        if (!fact) return     
        const threefirstWord = fact.split(' ', 3).join(' ')

        fetch(`https://cataas.com/cat/says/${threefirstWord}?fontSize=50&fontColor=red&
            json=true`)
            .then(res => res.json())
            .then(response => {
                const {url} = response
                setImageurl(url)
            })
    }, [fact])

    return {imageUrl: `${cat_prefix_image_url}${imageUrl}`}
}