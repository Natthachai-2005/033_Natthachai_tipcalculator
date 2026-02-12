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
      
      <h1 className="text-5xl font-bold text-center text-blue-700 px-10 py-10 bg-white shadow-lg">
        TIP CALCULATOR
      </h1>

      <div className="text-3xl font-bold text-yellow-700 p-10 space-y-6">
        
        {/* Bill */}
        <div>
          <label>Bill</label>
          <br />
          <input
            type="number"
            placeholder="กรอกตัวเลขของคุณ"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            className="bg-white border rounded-lg px-4 py-2 text-xl text-black mt-2"
          />
        </div>

        {/* Tip */}
        <div>
          <div className="text-green-500">Tip</div>
          <button
            onClick={() => setTipPercent(5)}
            className={`text-2xl text-white font-bold transition-all border rounded-lg px-4 py-4 mt-2
              ${tipPercent === 5 ? 'bg-green-500' : 'bg-red-300'}`}
          >
            5%
          </button>
        </div>

        {/* Tip Total */}
        <div>
          <div className="text-green-700">Tip Total</div>
          <div className="bg-white text-2xl text-green-700 font-bold px-5 py-3 rounded-lg w-64 text-center mt-2">
            {tipTotal.toLocaleString()}
          </div>
        </div>

        {/* Bill Total */}
        <div>
          <div className="text-red-600">Bill Total</div>
          <div className="bg-white text-2xl text-red-600 font-bold rounded-lg w-64 text-center px-5 py-10 mt-2">
            {billTotal.toLocaleString()}
          </div>
        </div>

        {/* Button */}
        <button
          onClick={calculate}
          className="bg-purple-500 text-xl text-white font-bold px-10 py-5 rounded-lg"
        >
          Calculator
        </button>

      </div>
    </div>
  );
}
