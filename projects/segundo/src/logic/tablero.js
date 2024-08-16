import { combinacionesGanadoras } from "../constantes"

export const descubrirGanador = (tableroDescubierto) => {
    for(const combo of combinacionesGanadoras){
      const [a, b, c] = combo
      if (
        tableroDescubierto[a] &&
        tableroDescubierto[a] === tableroDescubierto[b] &&
        tableroDescubierto[b] === tableroDescubierto[c]
      ) {
        return tableroDescubierto[a]
      }
    }
  }

export const comprobarFinal = (nuevoTablero) => {
    return nuevoTablero.every((square) => square !== null)
}