import { useState, useContext, useEffect } from "react";
import { FormContext } from "./FormContext";
import { Link } from "react-router-dom";

const Pincode = () => {
  const {
    father,
    mother,
    yourName,
    mobileNumber,
    contactForm,
    fatherPincode,
    setFatherPincode,
    setYourName,
    setMobileNumber,
    pincode,
    setPincode,
    samePincode,
    setSamePincode,
    setContactForm,
    youAge,
    gender,
    you,
    proposerAge,
    setProposerAge
  } = useContext(FormContext);

const renderAge =()=>
{
  const options = [];
  for(let i = 18; i <=100;i++){
    options.push(
    <option value={i}>{i}years</option>)
  }
  return options
}

useEffect(() =>{
if(youAge){
  setProposerAge(youAge)
}
},[youAge,setProposerAge])


  const handleFatherPincodeChange = (e) => {
    if (!samePincode) {
      setFatherPincode(e.target.value);
    }
  };
  const handleSamePincodeChange = (e) => {
    setSamePincode(e.target.checked);
    if (e.target.checked) {
      setFatherPincode(pincode);
    } else {
      setFatherPincode("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setContactForm([{fullName:yourName,age:proposerAge,gender,mobileNumber,pincode,fatherPincode}])
    console.log(contactForm)
  }

  return (
    <div className="container wrap-pin d-flex flex-column justify-content-center">
      <form onSubmit={handleSubmit}>
      <h2 className="text-center mb-5 mt-3">Where do you live</h2>
      <label>Enter your full name</label>
      <input
        type="text"
        value={yourName}
        onChange={(e) =>{
           setYourName(e.target.value)
         }}
      />
      <label>Enter your mobile number</label>
      <input
        type="text"
        value={mobileNumber}
        onChange={(e) => {
          setMobileNumber(e.target.value)
          }
        } />
      <label>Where do you live?</label>
      <input
        type="text"
        value={pincode}
        onChange={(e) => {
          setPincode(e.target.value)
        }
        }
      />
      {!youAge&&(
        <>
        <label>Enter proposer age</label>
        <select value={proposerAge} onChange={(e) => setProposerAge(e.target.value)}>
          {proposerAge&&<option value="">Select age</option>}
          {renderAge()}
        </select>
        </>

      )}
      {((father || mother) && youAge) && (
        <>
          <label>Where your parents live</label>
          <input
            type="text"
            value={fatherPincode}
            onChange={handleFatherPincodeChange}
          />
          <label>
            <input
              type="checkbox"
              checked={samePincode}
              onChange={handleSamePincodeChange}
            />{" "}
            Same as mine
          </label>
        </>
      )}
      <div className="d-flex justify-content-between">
        <Link to="/age">
          <button className="btn btn-danger mt-5 mb-3">Previous</button>
        </Link>
        
          <button className="btn btn-danger mt-5 mb-3" type="submit">Continue</button>
       
      </div>
      </form>
    </div>
  );
};

export default Pincode;
