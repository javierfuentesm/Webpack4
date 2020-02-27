import React from "react";
import "../../css/sass.scss";
import "../../css/less.less";
import "../../css/stylus.styl";
const App = () => {
  async function prueba() {
    const { alerta } = await import("./alert.js");
    alerta('Este modulo ha cargado dinamicamente ')
  }

  return (
    <div>
      <p className="sass">esto es sass</p>
      <p className="less">esto es less</p>
      <p className="stylus">estos es stylus</p>
      <p className="post-css">estos es postcss</p>
      <button onClick={prueba}> Hola /</button> 
      <h1>Que Linda aplicacion en React.js</h1>
    </div>
  );
};
export default App;
