import React from 'react';
import './design/login.css';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

function redirecting(state)
{
return(
  <div>
    {state ?
    <Redirect to="/homepage"/>:null}
  </div>
);
}

export default class Login extends React.Component
{
      constructor(){
          super();

          this.state={
            name:'',
            password:'',
            redirect:false,
          };
      }

      
      handleclick=()=>{

        if(this.state.name===""||this.state.password==="")
        alert("name and password needs to be entered")
        else{
            if (localStorage.getItem('name') === this.state.name && localStorage.getItem('password') === this.state.password)
              this.setState({ redirect: true });
        }
      }
    render(){
        return(
            <div Style="text-align:center;background-image:url( magdalena-smolnicka-Y-G8GwcyOss-unsplash.jpg);background-repeat:no-repeat;background-size:cover;height:100vh;width:100%;" >
                {redirecting(this.state.redirect)}
            <img src="FACEBOOK_LINE-01-512.png" id="logo" /><div />
                <a id="login">Login</a><div/>
                <form   >
                  
                  <input type="text" id="name" placeholder="Enter Name" onChange={(e)=>{this.setState({name:e.target.value})}} />
                  <div/>
                  <input type="password" id="password" placeholder="Enter Password" onChange={(e)=>{this.setState({password:e.target.value}) } } />
                  <div/>
                    <input type="submit" id="submit" value="submit" onClick={()=>{this.handleclick()}} />
                    
                </form>
                <div/>
            <a Style="top:15%;position:relative;font-size:20px;background-color:rgba(255,255,0,.5);border-radius:4px">&nbsp;Not a member ?&nbsp;</a> <Link to="/Register"><button id="register">Register</button></Link>
                
                
            
            </div>
        );
    }
}

