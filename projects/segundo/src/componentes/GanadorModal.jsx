import { Cuadrado } from "./Cuadrado"
export function GanadorModal ({ganador, reiniciarJuego}) {
    if ( ganador === null ) return null

    const ganadorTexto = ganador === false ? 'Empate' : 'Ha Ganado:'

    return (
        <section className='ganador'>
            <div className='texto'>
            <h2>
                {ganadorTexto}
            </h2>

            <header className='victoria'>
                {ganador && <Cuadrado>{ganador}</Cuadrado>}
            </header>

            <footer>
                <button onClick={reiniciarJuego}>Empezar de nuevo</button>
            </footer>
            </div>
        </section>
    )
}