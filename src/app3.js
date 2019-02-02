import React from 'react'


class App3 extends React.Component{

 
    state =  {
        name : "" , 
        fname : "",
        conumber :"",
        addres : ""
    }
    whenchange = (event) => {
        const {name , value} = event.target 
        this.setState({[name] : value})

    }


    render(){
        return(
            <div>
             <h1> NAME :  <input type = "text" name = "name" onChange={this.whenchange } /> </h1> 
           <h1>   FATHER NAME :    <input type = "text" name ="fname" onChange={this.whenchange } /> </h1>
                
           <h1> NAME :  <input type = "text" name = "conumber" onChange={this.whenchange } /> </h1> 
           <h1>   FATHER NAME :    <input type = "text" name ="addres" onChange={this.whenchange } /> </h1>
                

                <p> {this.state.name }</p>

                <p>{this.state.fname} </p>

                <p> {this.state.conumber}  </p>

                <p> {this.state.addres}</p>
            </div>
        )
    }

}


export default App3