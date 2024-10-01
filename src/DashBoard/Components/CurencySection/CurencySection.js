import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { BsInfoCircle } from "react-icons/bs";

const CurencySection = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [currencyName, setCurrencyName] = useState([]);
  const [currencyRate, setCurrencyRate] = useState([]);
  const [key, setKey] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState(false);
  const [isNegitive, setIsNegitive] = useState("");

  // exchange rate API .................................................
  useEffect(() => {
    checkRate();
  }, []);

  const checkRate = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/currency");
      setCurrencyName(Object.getOwnPropertyNames(res.data));
      setCurrencyRate(Object.values(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  // calculate currency rate fuction ......................................
  const totalCalculate = () => {
    const rate = amount * currencyRate[key];
    setCurrency(rate);
  };

  // Calculate Total Fuction Data..........................................

  useEffect(() => {
    if (showResult) {
      totalCalculate();
    }
  }, [amount, key]);

  const getExchageRate = async (e) => {
    e.preventDefault();
    try {
      if (amount < 0) {
        setError(true);
        setIsNegitive("Value Must Be Greater Then '0'");
      } else {
        setError(false);
        setIsNegitive("");
        setShowResult(true);
        totalCalculate();
      }
    } catch (error) {
      console.log(error);
    }
  };

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
              <input
                id="country"
                value={"AUD"}
                name="country"
                className=" form-control"
              />
            </div>
            <div className="col-md-4">
              <label
                htmlFor="inputPassword6"
                className="col-form-label currency-label"
              >
                To
              </label>
              <select
                name="country"
                className=" form-control"
                onChange={async (e) => {
                  setKey(e.target.value);
                }}
              >
                {currencyName.map((currency, key) => {
                  return (
                    <>
                      <option value={key}>{currency}</option>
                    </>
                  );
                })}
              </select>
            </div>
          </div>
          {showResult ? (
            <div className="mt-3">
              <div className="result-start">
                {`${amount} Australian Dollars = `}
              </div>
              <div className="result">
                {`${
                  Math.round(currency * 100) / 100 + " " + currencyName[key]
                }`}
              </div>
            </div>
          ) : (
            ""
          )}
          {/* justify-content-center */}
          <div className="currency-button-div  mt-4 pb-4">
            {error ? (
              <div
                style={{
                  color: "red",
                  fontWeight: "600",
                }}
              >
                {isNegitive}
              </div>
            ) : (
              <div class="alert alert-info" style={{ fontSize: "10px", position: 'inherit' }}>
                <BsInfoCircle /> We use the mid-market rate for our Converter.
              </div>
            )}

            <button type="submit" className=" btn convert_button">
              View transfer quote
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CurencySection;
