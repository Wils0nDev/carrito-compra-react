import {Component} from 'react'
import  Logo  from './Logo'
import  Carro  from './Carro'

const styles = {
    navbar : {
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        height: '100px',
        justifyContent:'space-between',
        postion : 'relative',
        padding: '0px 50px',
        boxShadow: ' 0 2px 30px rgb(0,0,0,0.1)'
    },
}



class Navbar extends Component {

    
    render() { 
        const { esCarroVisible , mostrarCarroVisible } = this.props
        const { carro } = this.props
        return  ( 

        <nav style={styles.navbar}>
            <Logo />
            <Carro carro={carro}
            esCarroVisible = {esCarroVisible}
            mostrarCarroVisible = {mostrarCarroVisible}
            />
        </nav>
        
        );
    }
}
 
export default Navbar;