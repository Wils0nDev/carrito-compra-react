import { Component } from 'react'

const styles = {
    layout : {
        backgrounColor : '#FFF',
        color : '#0A283E',
        alignItems: 'center',
        display: 'flex',
        flexDirection:'column'

    },
    container:{
        width : '1200px',
        display: 'flex',
        flexWrap: 'wrap'
        
    }
}

class Layout extends Component {
    
    render(){
       
        return(
            
            <div style={styles.layout}>
                
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout