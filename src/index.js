import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types'
 import App2 from "./app2"

import App3 from './app3';

 /*
function Displayname ()
{
    render() 
    {
     return(
        <div>
    <ul>
    {this.props.nameli.map(( n ,index) =>
            <li key = {index}>
                {n}
            </li>
        )
    }
    </ul>
    <button onClick={this.props.plzchange}>  click me </button>
    </div>
    )

    }
}

*/

class Cities extends React.Component {
 
    static proptypes = {
        names:PropTypes.oneOfType([PropTypes.string ,PropTypes.array])

    }
    render()
    {
  
        return(
          
                <div>      
         <ul>   {this.props.names.map((name , index)=>
            
                <li key ={index}>  {name} </li> )}
           </ul>
             <button onClick={this.props.plzchange } >  click  </button>
             <button onClick={this.props.change } >  repeat  </button>

           
         </div>
        )

        }
    }





class Welcome extends React.Component{
    

    change = ()=>{ this.setState(() => ({
          
        names : ["ibrar " , "nadia " , "khkohar"] ,
      }) ) 
  }

    state = {
        names : ["ibrar " , "nadia " , "khkohar"] , 
       // father: ["abdul " , "taqiaq" , "usman"]
  
    }

   plzchange = ()=>{ this.setState(() => ({
          
        names :["irfan" , "amir "]
      }) ) 
  }


    render()
    {
       // const val = ["ibrar " , "usman " , "shga" , "father " ]
       // const val1 = ["ibrar " , "usman " ]
     return(
      <div>
       <ul>
    

          <Cities names ={this.state.names } plzchange = {this.plzchange}/>
          
        <App2/>
        <App3/>
                


         </ul>
     </div>
     )
}


}




ReactDom.render(  <Welcome/>,document.getElementById('root'))






