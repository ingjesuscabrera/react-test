function Eventos() {
    function handleClick() {
      console.log("El botón fue clickeado");
    }
  
    return <button onClick={handleClick}>Haz clic aquí</button>;
  }

  export default Eventos;