export const Cuadrado = ({ children, isSelected, updateTablero, index }) =>{
    const clase = `cuadrado ${isSelected ? 'seleccionada' : ''}`
  
    const Click = () => {
      updateTablero(index)
    }
    return(
      <div onClick={Click} className={clase}>
        {children}
      </div>
    )
  }