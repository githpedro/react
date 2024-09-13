import './App.css'
import { useCatFact } from './useCatFact'
import { useCatImage } from "./useCatImage"

//const gato_endpoint = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`


export function App () {
    const {fact, refreshRandomFact} = useCatFact()
    const {imageUrl} = useCatImage({fact})


    const handleClick = async () =>{
        refreshRandomFact()
    }

    return (
        <main>

        <button onClick={handleClick}>Clic Me to Generate a New Fact</button>

        <h1>App</h1>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt={`Cat ${fact}`} />} 
        </main>

    )
}