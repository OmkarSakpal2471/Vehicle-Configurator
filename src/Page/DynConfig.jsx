import { useEffect, useState } from "react"
import AltComp from "./AltComp";

function DynConfig(props) {
    const [compname,setCompname]=useState([]);
    useEffect(()=>{
     fetch(`http://localhost:8080/api/${props.sltdata}/${props.Model_id}`).then(
        res=>res.json()
     ).then(
        data=>{
          console.log(data)
           setCompname(data);
        }

     )
    },[props.sltdata, props.Model_id]);
    return (
        <div>
        {
        compname.map((cmp)=>(
          <AltComp compo={cmp} compoid={props.Model_id} ></AltComp>
        )
        )
      }
        </div>
    )
}
export default DynConfig