import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { Cuadrado } from './componentes/Cuadrado'
import { turnos } from './constantes'
import { descubrirGanador } from './logic/tablero'
import { GanadorModal } from './componentes/GanadorModal'


function App() {
  const [tablero, setTablero] = useState(Array(9).fill(null))
  const [turno, setTurno] = useState(turnos.X)
  //null es que nadie gana, false sería un empate
  const [ganador, setGanador] = useState(null)

  const reiniciarJuego = () => {
    setTablero(Array(9).fill(null))
    setTurno(turnos.X)
    setGanador(null)
  }


  const updateTablero = (index) =>{
    // no actualizamos posición si ya tiene algo

    if(tablero[index] || ganador) return

    const nuevoTablero = [...tablero]
    nuevoTablero[index] = turno
    setTablero(nuevoTablero)
    //cambiar el turno
    const nuevoTurno = turno === turnos.X ? turnos.O : turnos.X 
    setTurno(nuevoTurno)
    //revisar si hay un ganador
    const nuevoGanador = descubrirGanador(nuevoTablero)
    if (nuevoGanador) {
      confetti()
      setGanador(nuevoGanador) //actualiza el estado, pero no bloquea la ejecución del código 
    }
  }

  return (
    <main className='tablero'>
      <h1>3 en Raya</h1>
      <button onClick={reiniciarJuego}>Reiniciar el Juego</button>
      <section className='juego'>
        {
          tablero.map((_, index) =>{
            return (
              <Cuadrado
                key={index}
                index={index}
                updateTablero={updateTablero}
              >
                {tablero[index]}
              </Cuadrado>
            )
          })
        }
      </section>

      <section className='turno'>
        <Cuadrado isSelected={turno === turnos.X}>
          {turnos.X}
        </Cuadrado>
        <Cuadrado isSelected={turno === turnos.O}>
          {turnos.O}
        </Cuadrado>
      </section>

      <GanadorModal reiniciarJuego={reiniciarJuego} ganador={ganador}></GanadorModal>
    </main>
  )
}



export default App
