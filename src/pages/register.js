import React from 'react';
import './design/register.css';
import { Link } from 'react-router-dom';

export default class Register extends React.Component{

    constructor(){
        super();
        this.state={

            name:'',
            email:'',
            phone:0,
            password1:'',
            password2:'',
            profession:''
        };
    }

    handleclick=()=>{

        if(this.state.name===""||this.state.email==""||this.state.phone==""||this.state.password1==""||this.state.password2=="")
          alert("All the fields need to be filled");

        else if(this.state.password1!==this.state.password2)
         alert("password doesn't match");

         else{
            localStorage.setItem('name', this.state.name);
            localStorage.setItem('email', this.state.email);
            localStorage.setItem('phone', this.state.phone);
            localStorage.setItem('password', this.state.password1);
            localStorage.setItem('profession', this.state.profession);
         }
    }
    render(){
        return(

            <div Style="text-align:center;background-image:url( magdalena-smolnicka-Y-G8GwcyOss-unsplash.jpg);background-repeat:no-repeat;background-size:cover;height:100vh;width:100%;" >

                <img src="FACEBOOK_LINE-01-512.png" id="logo" /><div />
                <a id="registerline">Register</a><div />

                <input type="text" class="r"  placeholder="Enter Name" onChange={(e) => { this.setState({ name: e.target.value }) }} />
                <div />
                <input type="email" class="r"  placeholder="Enter email" onChange={(e) => { this.setState({ email: e.target.value }) }} />
                <div />
                <input type="number" class="r"  placeholder="Enter phone number" onChange={(e) => { this.setState({ phone: e.target.value }) }} />
                <div />
                <input type="password" class="r" Style="width:16.5%;background-color:rgba(200,200,200,.5);" placeholder="Enter password" onChange={(e) => { this.setState({ password1: e.target.value }) }} />
                
                <input type="password" class="r" Style="width:16.5%;background-color:rgba(200,200,200,.5);" placeholder="confirm password" onChange={(e) => { this.setState({ password2: e.target.value }) }} />
                <div />
                <select name="Profession" id="rselect" >
                    <option value="profession1">Profession1</option>
                    <option value="profession2">Profession2</option>
                    <option value="profession3">Profession3</option>
                </select>

                <div/>

                <button onClick={()=>{this.handleclick()}} id="rbutton">Register</button>
                <div/><div/>
                Have an account ?&nbsp;

                <Link to="/Login">login</Link>

            </div>
        );
    }
}

