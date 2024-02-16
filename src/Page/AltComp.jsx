import { useEffect, useState } from "react"


function AltComp(props) {

    const [altComp,setaltComp]=useState([])
    useEffect((e)=>{
        fetch(`http://localhost:8080/api/config/${props.compoid}/${props.compo}`).then(
            res=>res.json()
         ).then(
            data=>{
              console.log(data);
              setaltComp(data)
            } 
         ); 
    },[props.compoid, props.compo])
    return (
        <div>

           
            <div>
     <h1>{props.compo}</h1>
     <select id="">
     { altComp.map(altcmp=>(
 
 <option value="">{altcmp.sub_type}</option>
   
     ))}
     </select>

         </div>
        
        </div>
    )
}

export default AltComp