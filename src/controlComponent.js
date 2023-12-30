import { useState } from "react"

function Control(){
    const [temp,setTemp] = useState({});
    return(<>
    <label>Enter Name :   </label>
    <input type = 'text' onChange={(e)=>{setTemp({...temp,FirstName:e.target.value});}}></input>
    <br/>
    <label>Enter Experience :   </label>
    <input type = 'text' onChange={(e)=>{setTemp({...temp,MiddleName:e.target.value});}}></input>
    <br/>
    <label>Enter Image :   </label>
    <input type = 'text' onChange={(e)=>{setTemp({...temp,LastName:e.target.value});}}></input>
    <br/>    
    <h1>{"First : "+temp.FirstName}</h1>
    <h1>{"Middle : "+temp.MiddleName}</h1>
    <h1>{"Last : "+temp.LastName}</h1>
    </>)
}
export default Control;
