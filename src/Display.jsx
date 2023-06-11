import { useContext } from "react";
import { FormContext } from "./FormContext";
import mothericon from './assets/mother-icon.png'
import fathericon from './assets/father-icon.png'
import maleicon from './assets/male-icon.png'
import femaleicon from './assets/female-icon.png'
import daughtericon from './assets/daughter-icon.png'
import sonicon from './assets/son-icon.png'
import {  useNavigate } from "react-router-dom";

const Display = () => {
  const {gender,sonCount,daughterCount,you,father,mother,son1,daughter1,spouse,handleGenderChange,spouseCheckBoxChange,youCheckBoxChange,sonCheckBoxChange,daughterCheckBoxChange,fatherCheckBoxChange,motherCheckBoxChange,sonCountIncrease,daughterCountDecrease,sonCountDecrease,daughterCountIncrease}=useContext(FormContext);
  const navigate=useNavigate()
  const handlePrevious=()=>{
    navigate(-1)
  }
  const handleFormSubmit=(e)=>{
    e.preventDefault()
   navigate('/age')
 }
   
  return (
    <div className='wrapper2'>
      <form onSubmit={handleFormSubmit}>
        <div>
          <h3>Selected gender: {gender}</h3>
          <div className='second-gender'>
          <div>
                <label>
                  <input
                    type="radio"
                    name="genderChange"
                    value="male"
                    checked={gender === 'male'}
                    onChange={handleGenderChange}
                  />
                  Male
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="genderChange"
                    value="female"
                    checked={gender === 'female'}
                    onChange={handleGenderChange}
                  />
                  Female
                </label>
              </div>
          </div>
        </div>
       
  <div className='wrapper-checkbox'>
     <div className='pt-3'>
          <div className="checkbox">
            <input
              type="checkbox"
              id="youCheckbox"
              value="you"
              checked={you==='you'}
              onChange={youCheckBoxChange}
              className="checkbox-input"
            />
            <label htmlFor="youCheckbox" className="checkbox-label d-flex flex-column justify-content-center align-items-center">
              <img src={maleicon} alt="You" className="checkbox-image" />
              You
            </label>
          </div>
          
          {gender==='male'?<div className="checkbox">
            <input
              type="checkbox"
              id="youCheckbox1"
              value="spouse"
              checked={spouse==='spouse'}
              onChange={spouseCheckBoxChange}
              className="checkbox-input"
            />
            <label htmlFor="youCheckbox1" className="checkbox-label d-flex flex-column justify-content-center align-items-center">
              <img src={femaleicon} alt="wife" className="checkbox-image" />
              Wife
            </label>
          </div>:<div className="checkbox">
            <input
              type="checkbox"
              id="youCheckbox1"
              value="spouse"
              checked={spouse==='spouse'}
              onChange={spouseCheckBoxChange}
              className="checkbox-input"
            />
            <label htmlFor="youCheckbox1" className="checkbox-label d-flex flex-column justify-content-center align-items-center">
              <img src={maleicon} alt="husband" className="checkbox-image" />
              Husband
            </label>
          </div>
          }
          <div className="checkbox">
            <input
              type="checkbox" disabled={daughterCount===4}
              id="youCheckbox2"
              value="son1"
              checked={son1==='son1'}
              // disabled={childSelection}
              onChange={sonCheckBoxChange}
              className="checkbox-input"
            />
            <label htmlFor="youCheckbox2" className="checkbox-label d-flex flex-column justify-content-center align-items-center">
              <img src={sonicon} alt="Son" className="checkbox-image" />
              Son
            </label>
            <div className='special'>
            {son1 && <div className='d-flex align-items-center justify-content-center'>
              {sonCount !==1 &&(<div className='btn' onClick={sonCountDecrease}>-</div>)}
              <div>{sonCount}</div>
              {daughterCount+sonCount !== 4 &&(<div className='btn' onClick={sonCountIncrease}>+</div>)}</div>}
            </div>
          </div>
     </div>
     <div className='pt-5'>
          <div className="checkbox">
            <input
              type="checkbox" disabled={sonCount===4}
              id="youCheckbox3"
              value="daughter1"
              checked={daughter1==='daughter1'}
              onChange={daughterCheckBoxChange}
              className="checkbox-input"
            />
            <label htmlFor="youCheckbox3" className="checkbox-label d-flex flex-column justify-content-center align-items-center">
              <img src={daughtericon} alt="You" className="checkbox-image" />
              Daughter
            </label>
            <div className='special'>
            {daughter1 && <div className='d-flex align-items-center justify-content-center'>
              {daughterCount !==1 &&(<div className='btn' onClick={daughterCountDecrease}>-</div>)}
              <div>{daughterCount}</div>
              {daughterCount+sonCount !== 4 &&(<div className="btn" onClick={daughterCountIncrease} >+</div>)}</div>}
            </div>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="youCheckbox4"
              value="father"
              checked={father==='father'}
              onChange={fatherCheckBoxChange}
              className="checkbox-input"
            />
            <label htmlFor="youCheckbox4" className="checkbox-label d-flex flex-column justify-content-center align-items-center">
              <img src={fathericon} alt="You" className="checkbox-image" />
              Father
            </label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="youCheckbox5"
              value="mother"
              checked={mother==='mother'}
              onChange={motherCheckBoxChange}
              className="checkbox-input"
            />
            <label htmlFor="youCheckbox5" className="checkbox-label d-flex flex-column justify-content-center align-items-center">
              <img src={mothericon} alt="Mother" className="checkbox-image" />
              Mother
            </label>
          </div>
     </div>
  </div>
       <div>
            <button onClick={handlePrevious}>Previous</button>
            <button type="submit" >Next Step</button>
       </div>
      </form>
    </div>
  )
}

export default Display