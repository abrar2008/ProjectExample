import React from 'react'

function Welcome(props) {

    return <h1> welcome {props.name}  </h1>
        
}

function as (){
    return(

        <div>
            {<Welcome name = "usman"/>}
        </div>
    )
}


class App2 extends React.Component {
  

    
    /*  
    state = {
           text :"abrar"
       }

       changefun =  (event) =>
       {
           this.setState({text:event.target.value})
       }
*/
    render(){
        return (
            
                < div>

                <input type = "text" onChange= {this.changefun}  />
                           <p>{this.state.text }</p>
                </div>
             
              
           
        )
    }

}

export default App2
