import { useEffect, useState } from "react"
import './App.css'

const gato_random_fact = 'https://catfact.ninja/fact';
//const gato_endpoint = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`
const cat_prefix_image_url = 'https://caatas.com'

export function App () {
    const [fact, setFact] = useState()
    const [imageUrl, setImageurl] = useState()

    useEffect(() => {
        fetch(gato_random_fact)
            .then(res => res.json())
            .then(data => { 
                const {fact} = data
                setFact(fact)
            })
    }, [])

    useEffect(() => {
        if (!fact) return     
        const threefirstWord = fact.split(' ', 3).join(' ')

        fetch(`https://cataas.com/cat/says/${threefirstWord}?fontSize=50&fontColor=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const {url} = response
                setImageurl(url)
            })
    }, [fact])

    return (
        <main>

        <h1>App</h1>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={`${cat_prefix_image_url}${imageUrl}`} alt={`Cat about API of ${fact}`} />} 
        </main>

    )
}