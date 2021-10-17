import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import DetallesCarro from "./DetallesCarro"
const styles = {
  carro: {
    backgroundColor: "#359A2C",
    color: "#FFF",
    border: "none",
    borderRadius: "15px",
    padding: "15px",
    cursor: "pointer",
  },
  bubble: {
    position: "relative",
    left: 12,
    top: 20,
  },
};
class Carro extends Component {

  render() {
    

    const { carro , esCarroVisible , mostrarCarroVisible} = this.props;
    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0);
    return (
      <div>
        
          <span style={styles.bubble}>
              { cantidad !== 0 ?  <BubbleAlert value={cantidad} /> : '' } 

          </span>

        <button style={styles.carro}  onClick={ carro.length > 0 ?  mostrarCarroVisible : '' } >Carro</button>
        { esCarroVisible  ? 
        <DetallesCarro  carro={carro}
        esCarroVisible= {esCarroVisible}
         /> : '' }
      </div>
    );
    
  }
}

export default Carro;