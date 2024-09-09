import { useEffect, useState } from "react"
import './App.css'
import { getRandomFact } from "./facts"


//const gato_endpoint = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`
const cat_prefix_image_url = 'https://caatas.com'

export function App () {
    const [fact, setFact] = useState()
    const [imageUrl, setImageurl] = useState()

    useEffect(() =>{
        getRandomFact(setFact).then(setFact)
    }, [])

    useEffect(() => {
        if (!fact) return     
        const threefirstWord = fact.split(' ', 3).join(' ')

        fetch(`https://cataas.com/cat/says/${threefirstWord}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const {url} = response
                setImageurl(url)
            })
    }, [fact])

    const handleClick = async () =>{
        const newFact = await getRandomFact()
        setFact(newFact)
    }

    return (
        <main>

        <button onClick={handleClick}>Clic Me to Generate a New Fact</button>

        <h1>App</h1>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={`${cat_prefix_image_url}${imageUrl}`} alt={`Cat about API of ${fact}`} />} 
        </main>

    )
}