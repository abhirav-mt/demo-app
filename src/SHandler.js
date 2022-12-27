import React, { useEffect, useState } from 'react';
import fetchData from './fetchData';

function setInnerHTML(elm, html, setStyle) {
    elm.innerHTML = html;
    
    Array.from(elm.querySelectorAll("script"))
      .forEach( oldScriptEl => {
          console.log("appending scripts: ", oldScriptEl);
        const newScriptEl = document.createElement("script");
        
        Array.from(oldScriptEl.attributes).forEach( attr => {
          newScriptEl.setAttribute(attr.name, attr.value) 
        });
        
        console.log("appending scripts 2: ", oldScriptEl.innerHTML);
        const scriptText = document.createTextNode(oldScriptEl.innerHTML);
        newScriptEl.appendChild(scriptText);
        
        console.log("appending scripts new script: ", newScriptEl);
        console.log("appending scripts parentNode: ", oldScriptEl.parentNode);
        oldScriptEl.parentNode.replaceChild(newScriptEl, oldScriptEl);
    });

    Array.from(elm.querySelectorAll("link"))
    .forEach( oldScriptEl => {
      const newScriptEl = document.createElement("link");
      console.log("appending links: ", oldScriptEl);
      
      Array.from(oldScriptEl.attributes).forEach( attr => {
        newScriptEl.setAttribute(attr.name, attr.value) 
      });

      newScriptEl.setAttribute("onload", ()=>{ setStyle(true)}) 
      
      const scriptText = document.createTextNode(oldScriptEl.innerHTML);
      newScriptEl.appendChild(scriptText);
      document.head.appendChild(newScriptEl);
    //   oldScriptEl.parentNode.replaceChild(newScriptEl, oldScriptEl);
  });
  }

const SHandler = () => {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
     }
    const [loading, setLoading] = useState(true);
    const target = React.useRef();
    const [data, updateData]=useState({});
    const [isStyle, setStyle] = useState(false);

    useEffect(()=>{
        if(isStyle) {
            target.current.getElementsByClassName("innerDiv")[0].style= 'display:block'
        }
    },[isStyle])

    useEffect(()=>{
        (async function() {
        //    await sleep(1000);
          const serverData = await fetchData("http://localhost:3015/?widgetId=1605475769949310080");
          updateData(serverData);
          target.current.getElementsByClassName("innerDiv")[0].innerHTML=serverData;
          setInnerHTML(target.current.getElementsByClassName("innerDiv")[0], serverData, setStyle);
          setLoading(false);
        })();
        // 
        // fetchData("http://localhost:3015/?widgetId=1605475769949310080").then(res => {updateData(res); setLoading(false);});
      },[]);


    //   if (loading) {
    //     return <></>;
    //   }


    // console.log("data received from server: ", data);


    return  (<div id ='testDoc' ref={target}>
    what makes you beautiful
    <div className ="innerDiv" style={{display: "none"}}>
    
    </div>
    </div>)
}

const ButtonHandler =() =>{

}

export default SHandler;