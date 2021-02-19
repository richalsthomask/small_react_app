import React from 'react';


export default class Companyinfo extends React.Component{

    render(){
        return(
            <div Style="width:100vh;height:100vh;position:relative;">
                <div align="center"
               Style = "position:fixed;height:50%;width:40%;top:25%;bottom:25%;left:30%;right:30%;background-color:rgba(210,210,210,1);border-radius:10px; border:2px solid black">
                            <div  align = "right" >

            <button
                Style = "background-color:rgba(0,0,0,0);align-items:right;height:60px;border:5px;"
                onClick = {this.props.closepopup} >
            
                  <p Style="width:30px;font-size:25px;bottom:14px;position:relative;">&#10008;</p>

            </button> 

            </div>
 

            <br/><br/>

            <b Style="font-size:large">

            {"Company : Geeksynergy Technologies Pvt Ltd "}

            </b>
              
                
            
            <br/><br/>

            <b Style="font-size:large">

            {"Address : Sanjayanagar, Bengaluru-56"}

            </b>
           
            <br/><br/>

            <b Style="font-size:large">

            {"Phone : XXXXXXXXX09"}

            </b>
            <br/><br/>
            <b Style="font-size:large">

            {"Email :"}&nbsp;<a href="">@gmail.com</a>

            </b>


            <br/><br/>

            


                        </div>
            </div>
        );
    }
}