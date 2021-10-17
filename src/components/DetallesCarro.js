import { Component } from "react";

const styles = {
  detallecarro: {
    display: "flex",
    flexDirection: "column ",
    position: "absolute",
    backgroundColor: "#FFF",
    boxShadow: " 5px 5px 5px rgb(0,0,0,0.3)",
    borderRadius: "5px",
    width: "300px",
    right: 50,
  },
  detallecarroUl: {
    padding: "0",
    margin: "0",
    alignItems: 'center'
  },

  detallecarroLi: {
    display : 'flex',
    flexFlow : 'row wrap',
    justifyContent: 'space-around',
    borderBottom: "2px solid #ccc",
    listStyle: "none",
    padding: "10px",
    margin: "0",
  },

  imagen : {
    width: '20%'
}
};

class DetallesCarro extends Component {
  render() {
    const { carro } = this.props;
    
    return (
    
    
        <div style={styles.detallecarro}>
        <ul style={styles.detallecarroUl}>
          {
            carro.map((c,index) => 
                <li key={index.toString()} style={styles.detallecarroLi}> 
                 <img alt={c.name}  src={c.img} style={styles.imagen} />
                 <p> { c.name} </p>  <p><strong> {c.cantidad} </strong></p>
                
                </li>
            )}
        </ul>
      </div>    
    );
  }
}

export default DetallesCarro;
