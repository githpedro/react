import { useEffect, useState } from "react"

const gato_random_fact = 'https://catfact.ninja/fact';
//const gato_endpoint = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`
export function App () {
    const [fact, setFact] = useState()
    const [imageUrl, setImageurl] = useState()

    useEffect(() => {
        fetch(gato_random_fact)
            .then(res => res.json())
            .then(data => { 
                const {fact} = data
                setFact(fact)
            
                const threefirstWord = fact.split(' ', 3).join(' ')

                fetch(gato_random_fact)
                    .then(res => res.json())
                    .then(response => {
                        const {url} = response
                    })
            })
    }, [])

    return (
        <main>

        <h1>App</h1>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt="cat" />} 
        </main>

    )
}