import { useState, useContext } from "react";
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
    gender
  } = useContext(FormContext);


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
    setContactForm([{fullName:yourName,age:youAge,gender,mobileNumber,pincode,fatherPincode}])
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

      {(father || mother) && (
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
