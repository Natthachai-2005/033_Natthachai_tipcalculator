"use client";
import { useState } from "react";


export default function Home() {

  const [bill, setBill] = useState('');
  const [tipPercent, setTipPercent] = useState(0);
  const [tipTotal, setTipTotal] = useState(0);
  const [billTotal, setBillTotal] = useState(0);

  const calculate = () => {
  const numBill = parseFloat(bill) || 0;
  const tip = (numBill * tipPercent) / 100;
  const total = numBill + tip;
  setTipTotal(tip);
  setBillTotal(total);



  };
  
  return (
    
    <div className="min-h-screen bg-pink-100">
      <h1 className="text-5xl font-bold text-center text-blue-700 px-10 py-10  bg-white shadow-lg">
        TIP CALCULATOR
      </h1>
      
      <h2 className= " text-3xl font-bold  text-yellow-700 p-20  ">
        Bill
        <br></br>
      <input
        type="number"
        placeholder="กรอกตัวเลขของคุณ"
        value={bill}
        onChange={(e)=>setBill(e.target.value)}
        className=" bg-white border rounded-lg px-4 py-2 text-xl text-black "
      />
      
      <h2 className=" text-3xl font-bold  text-green-500  py-5">
        Tip
      </h2>
      <button onClick={()=>setTipPercent(5)}className={`text-2xl text-white font-bold transition-all ${tipPercent === 5 ? 'bg-green-500 border rounded-lg px-4 py-4' : 'bg-red-300 border rounded-lg px-4 py-4'}`}>
          5%
      </button>

      
      <h2 className=" text-3xl font-bold  text-green-700 py-5">
        Tip Total
      </h2>
      <div className="bg-white text-2xl text-green-700 font-bold px-5 py-3 rounded-lg w-64 text-center"> {tipTotal.toLocaleString()}</div>


      <h2 className=" text-3xl font-bold  text-red-600 py-5">
        Bill Total 
      </h2>
      
       <div className="bg-white text-2xl text-red-600 font-bold rounded-lg w-64 text-center px- py-10"> {billTotal.toLocaleString()}</div>
      
      <br></br>
      <button onClick={calculate}className="bg-purple-500 text-xl text-white font-bold px-6 py-3 rounded-lg px-10 py-5">
          Calculator
      </button>
      
      </h2>
    </div>
  );
}
