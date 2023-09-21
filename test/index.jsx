import { Ripple } from "../index";
import { jsml } from "../src/jsml.js";
import { s } from "@mdshad/sel";

new Ripple(($) => {
  
const [NavBar] = new Nav($); 
  

  $.Ri.Nav = new Nav($);

  $.render = () => {
    return <div class="main fluid">
      <$.NavBar></$.NavBar>
    </div>;
  };

  
}, "#root");



function Nav(PREVIOUS_STATE){
  return new Ripple(($)=>{
    $.navStyle = {
      height: "100px",
      width: "100%",
    }

    const [Title] = title();
    $.render = ()=>{
      return <div>
      
        <div class="nav cntr" style={$.navStyle}>
        <Title></Title> 
          <button style={{marginLeft:"auto"}} onclick={()=>{
          

            $.navStyle = {
              width: "400px",
              height: "300px",
              margin: "auto",
              bottom: "0",
            }
          }}>OPEN MODAL</button>
        </div>
      </div>
    }
  });
}


function title(){
  return new Ripple(($)=>{
    $.render = ()=>{
      return   <b style={{marginLeft:"auto"}}>TITLE</b>
    }
  })
}


