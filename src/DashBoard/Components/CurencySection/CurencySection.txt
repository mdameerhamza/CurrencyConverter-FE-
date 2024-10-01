import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const CurencySection = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [currencyName, setCurrencyName] = useState([]);
  const [currencyRate, setCurrencyRate] = useState([]);
  const [key, setKey] = useState(0);
  const [error, setError] = useState(false);
  const [isNegitive, setIsNegitive] = useState("")
  

// exchange rate API ................................
  useEffect(() => {
    checkRate()
  }, [])

  const checkRate = async () => {

    try {
      const res = await axios.get("http://localhost:5000/api/currency");
      setCurrencyName(Object.getOwnPropertyNames(res.data))
      setCurrencyRate(Object.values(res.data))
      console.log('new req',res);
      // setCurrency(res)
    } catch (error) {
     console.log(error); 
    }
  };
  
  // Calculate Total Fuction Data..........................................
  const getExchageRate = async(e) => {
    e.preventDefault()
    try {
    if (amount < 0) {
      setError(true);
      setIsNegitive("Value Must Be Greater Then '0'")
    } else {
      setIsNegitive('')
      const rate = amount * currencyRate[key]
      setCurrency(rate)
      Swal.fire({
       title: `${amount} AUD = ${(Math.round(rate * 100) / 100) + " " + currencyName[key]}`,
       confirmButtonColor: "#F8214B",
 
     })
    }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="col-md-12 mt-md-3">
      <div className="exchange-portion ">
        <form onSubmit={getExchageRate}>
        <div className=" row g-3 align-items-center d-flex">
          <div className="col-md-4">
            <label
              htmlFor="inputPassword6"
              className="col-form-label currency-label"

            >
              Amount
            </label>
            <input
            required
              type="number"
              inputMode="decimal"
              placeholder="Enter Amount In Numbers"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className=" form-control amount-input__NumberInput-sc-1gq6pic-1 "
            />
          </div>
          <div className="col-md-4">
            <label
              htmlFor="inputPassword6"
              className="col-form-label currency-label"
            >
              From
            </label>
            <input id="country" value={"AUD"} name="country" className=" form-control"/>
              {/* <option value="" selected>
                AUD
              </option>
            </input> */}
          </div>
          <div className="col-md-4">
            <label
              htmlFor="inputPassword6"
              className="col-form-label currency-label"
            >
              To
            </label>
            <select name="country" className=" form-control" onChange={(e)=>{
              setKey(e.target.value)
            }}>
            {
              currencyName.map((currency, key)=>{
                return(
                <>
                  <option value={key}>{currency}</option>
                </>
                )
              })
            }
             </select>
        
          </div>
        </div>
        <div className="justify-content-between d-flex  mt-5">
         
            <div style={{
              color: 'white',
              fontWeight: "600",
              
            }}>
              {isNegitive}
         </div>
   
           
          <button type="submit" className=" btn convert_button">
            Convert
          </button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default CurencySection;
