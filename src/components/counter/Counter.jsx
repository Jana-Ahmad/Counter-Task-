import { useState } from "react";
import style from "./Counter.module.css"

function Counter({firstName,lastName,counts}){

     let setCounts;
     [counts,setCounts]=useState(0);

    const changeCounts=()=>{
    setCounts(counts+1);
    
}
return (

<div className={style.button}>
<button onClick={changeCounts}>{firstName}{lastName}{counts}</button>
</div>


);

}

export default  Counter;
