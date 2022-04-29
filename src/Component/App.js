import React, { Component, useState } from "react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils"; 
import "../App.css";
import Footer from './Footer';

const App = () => {
  const [data, setData] = useState([]);
  const [result,setResult]=useState()
  const [Tip,setTip]=useState()
  const [Eachperson,setEachperson]=useState(0)
  

 
  const handelChange=(e)=>{
     const Name=e.target.name;
     const values=e.target.valueAsNumber;
     setData({...data,[Name]:values})
    
  }
  
   const submit=(e)=>{
     e.preventDefault();
   
      const Amount=data.amount;
      const Tip=data.tip;
      setTip(Tip)
      const cal=(Amount*Tip)/100;
      const Total= Amount+cal;
      setEachperson(Total/data.Person)
      setResult(Total)
      setData("") 
   }
  return (

  <div className="tip-area">
    <div className="card">
        <h1>TIP CALCULATOR</h1>
      <form onSubmit={submit}>

        <label  htmlFor ="name">Bill Amount : </label>
        <input type="number" name="amount" value={data.amount||""} onChange={handelChange} placeholder="Rs" />
        <br />
        <label htmlFor="email" className="tt" >TIP : </label>
        <input type="number" name="tip" value={data.tip|| ""} placeholder="%" onChange={handelChange}/> <br />
        <label htmlFor="password" className="ttt" >Between : </label>
        <input type="number" name="Person" value={data.Person||""} onChange={handelChange}/><br/>
        <button className="button-tip">Calculate</button>
     </form>
       <div className="para-result">
           <p>Tip Amount : <span>{Tip}</span></p>
            <p>Total Price  : <span>{result}</span></p>
             <p>Each Person  : <span>{Eachperson}</span></p>
         </div>
      </div>
   <Footer/>
   </div>
  )
  }
  export default App
