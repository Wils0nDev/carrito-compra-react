import { Component } from "react";
import Productos from "./components/Productos";
import Layout from "./components/Layout";
import Titulo from "./components/Title";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    productos: [
      { name: "Tomate", price: 1500, img: "/productos/tomate.jpg" },
      { name: "Arbejas", price: 2500, img: "/productos/arbejas.jpg" },
      { name: "Lechuga", price: 500, img: "/productos/lechuga.jpg" },
    ],
    carro: [
      // { name: "Tomate", price: 1500, img: "/productos/tomate.jpg", cantidad: 1 },
    ],

    esCarroVisible: false,
  };

  mostrarCarroVisible = () => {
    this.setState({ esCarroVisible: !this.state.esCarroVisible });
  };
  agregarAlCarro = (producto) => {
    
    const { carro } = this.state;
    if (carro.find((p) => p.name === producto.name)) {
      
      const newCarro = carro.map((pr)=>{
       
        return pr.name === producto.name ? { ...pr, cantidad: pr.cantidad + 1, } : pr
  
      });

      console.log(newCarro)
      return this.setState({ carro: newCarro });
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      }),
    });

    


  };
  render() {

    const { esCarroVisible } = this.state;

    return (
      <div>
        <Navbar
          carro={this.state.carro}
          esCarroVisible={esCarroVisible}
          mostrarCarroVisible={this.mostrarCarroVisible}
        />
        <Layout>
          <Titulo />
          <div>
            <Productos
              agregarAlCarro={this.agregarAlCarro}
              productos={this.state.productos}
            />
          </div>
        </Layout>
      </div>
    );
  }
}
export default App;
