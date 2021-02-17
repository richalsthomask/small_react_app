import './design/homepage.css'
import React from 'react';
import Companyinfo from './companyinfo';
import axios from 'axios';

export default class Homepage extends React.Component{

    constructor(){
        super();

        this.state={
               popup:false,
        };
    }
    handlemouseenter=()=>{
        
        document.getElementById("view").style.left = "10%";
        document.getElementById("menu").style.right = "0%";
        
    }

    handlemouseleave=()=>{
        
        document.getElementById("view").style.left = "3%";
        document.getElementById("menu").style.right = "7%";
        
    }

    handleevent=()=>{
        this.setState({ popup: !this.state.popup });
    }

    togglepopup(){
        this.setState({popup:!this.state.popup});
    }
    butto(){
        axios.post("https://hoblist.com/movieList?category=movies&language=kannada&genre=all&sort=voting").then(response => console.log(response.data));
    }

    render(){
        return(
            <body Style="height:100vh;width:203vh;overflow-x:hidden;overflow-y:hidden;">
            <div id="menu" onMouseEnter={()=>{this.handlemouseenter()}} onMouseLeave={()=>{this.handlemouseleave()}} >
                <a Style="color:white;font-size:20px;">menu</a>
                <hr/>
                <div/>
                <a id="cinfo" onClick={()=>{this.handleevent()}}>Company Info</a>
            </div>
            <div id="view">
                    {
                        this.state.popup ?
                            <Companyinfo closepopup={this.togglepopup.bind(this)}/> : null
                    }

                    <button  Style="right:75%;top:10%;position:relative" onClick={()=>{this.butto()}}>click</button>
            </div>
                
            </body>
        );
    }


}
