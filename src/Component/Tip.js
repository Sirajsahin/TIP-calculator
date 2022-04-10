import React, { Component, useState } from "react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import "../App.css";
// import Hello from './components/Hello.js'

const Tip = () => {
  const [data, setData] = useState([]);
  const [result,setResult]=useState()
  const [Tip,setTip]=useState()
  const [Eachperson,setEachperson]=useState(0)
  // const final=data.name.concat(data.Email).concat(data.Pass);
  // console.log(data)
  // console.log("this is "+result)
  const handelChange=(e)=>{
    const Name=e.target.name;
   const values=e.target.valueAsNumber;
  //  console.log(e.target.value)
   setData(()=>({...data,[Name]:values}))
  //  console.log(data.amount)
  }
   const submit=(e)=>{
     e.preventDefault();
    //  const Amount=parseInt(data.amount);
    //  const Tip=parseInt(data.tip);
    const Amount=data.amount;
    const Tip=data.tip;
    setTip(Tip)
     const cal=(Amount*Tip)/100;
    //  console.log(cal)
     const Total= Amount+cal;
     setEachperson(Total/data.Person)
    //  console.log(Total)
     setResult(Total)
    //  console.log(Total)
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
        <p>   Total Price  : <span>{result}</span></p>
        <p>   Each Person  : <span>{Eachperson}</span></p>
        </div>
        
        </div>
        </div>
  )
  }
  export default Tip