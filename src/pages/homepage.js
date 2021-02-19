import './design/homepage.css'
import React,{Component} from 'react';
import Companyinfo from './companyinfo';
import axios from 'axios';
import jfile from './jsonfile';

export default class Homepage extends React.Component{

    constructor(){
        super();

        this.state={
               popup:false,
               
        };
    }
    

    handleevent=()=>{
        this.setState({ popup: !this.state.popup });
    }

    togglepopup(){
        this.setState({popup:!this.state.popup});
    }
   
    butto() {
        
        return jfile.map((value, index) => {
            
            
            return <div Style="height:40%;width:98%;padding:1%;text-align:center">
                
                     <div Style="float:left;height:100%;width:10%;">

                    <div Style="background-image:url(download.png);background-size:cover;height:20%;width:39%;left:15%;position:relative;"></div>

                    <h3 Style="right:17%;position:relative;font-size:30px">
                        
                        {value.totalVoted}
                        
                    </h3>

                    <div Style="background-image:url(download1.jpg);background-size:cover;height:20%;width:39%;left:13%;position:relative;">

                    </div>

                    <h5 Style="right:16%;position:relative;font-size:20px;bottom:5%;">
                        votes
                        
                    </h5>

                     </div>
                <div  Style="float:left;height:100%;width:15%;">
                    
                    <img id="poster" src={value.poster} Style="height:100%;width:100%" ></img>

                     </div>

                <div Style="float:right;height:100%;width:75%;text-align:left;">

                         <a Style="font-style:italic;font-size:30px;left:5%;position:relative">
                             
                             {value.title}
                             
                            </a>
                            
                    <br/><br/>

                    <a Style="font-size:20px;position:relative;left:30px;color:grey;">
                        Genre&nbsp;:
                    </a>
                    
                    <a Style="font-size:20px;position:relative;left:30px;">
                        &nbsp;{value.genre}
                    </a>
                    
                    <br/>

                    <a Style="font-size:20px;position:relative;left:30px;color:grey;">
                        Director&nbsp;:&nbsp;
                    </a>
                    
                    <a Style="font-size:20px;position:relative;left:30px;">
                        {value.director}&nbsp;,&nbsp;
                    </a>
                    
                    <br/>

                    <a Style="font-size:20px;position:relative;left:30px;color:grey;">
                        Starring&nbsp;:&nbsp;
                    </a>
                    
                    <a Style="font-size:20px;position:relative;left:30px;">
                        {value.stars}&nbsp;,&nbsp;
                    </a>
                    
                    <br/>

                    <a Style="font-size:20px;position:relative;left:30px;color:grey;">
                        Language&nbsp;:&nbsp;
                    </a>
                    
                    <a Style="font-size:20px;position:relative;left:30px;">
                        {value.language}
                    </a>
                    
                    <br/>

                    <a Style="font-size:20px;position:relative;left:30px;color:blue">
                        Views&nbsp;:&nbsp;{value.pageViews}&nbsp;|&nbsp;Voted by&nbsp;{value.totalVoted}&nbsp;people
                    </a>
                    
                    <br /><br />
                    
                    <a id="button" href={"https://www.youtube.com/results?search_query=trailer+".concat(value.title)} target="_blank">Watch Trailer</a>
                     </div>
                  
                
                </div>
            
        })
        
    }

    render(){
        return(
            <body Style="height:100vh;width:100%;">
                <div Style="width:100%;background-color:black;height:5%;"  >
                    
                    <a Style="color:white;font-size:20px;" >menu</a>
                    <span Style="padding-left:10px;padding-right:10px;width:5px;border-right:5px solid white"></span>
                    &nbsp;&nbsp;&nbsp;
                    <a id="cinfo" onClick={() => { this.handleevent() }}>Company Info</a>
                </div>
                <div Style="height:95%;width:100%;overflow-y:auto;" id="view">
                {this.butto()}
                    {
                        this.state.popup ?
                            <Companyinfo closepopup={this.togglepopup.bind(this)} /> : null
                    }
                    
                </div>
                
            </body>
        );
    }


}
