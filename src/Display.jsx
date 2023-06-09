import { useContext } from "react";
import { FormContext } from "./FormContext";
import mothericon from './assets/mother-icon.png'
import fathericon from './assets/father-icon.png'
import maleicon from './assets/male-icon.png'
import femaleicon from './assets/female-icon.png'
import daughtericon from './assets/daughter-icon.png'
import sonicon from './assets/son-icon.png'
import { Link } from "react-router-dom";

const Display = () => {
  const {gender,setGender,setYou,setSelectedMembers,setMother,setFather,setSon1,setSonCount,setDaughter1,setDaughterCount,setSpouse,sonCount,daughterCount,you,father,mother,son1,daughter1,spouse}=useContext(FormContext);
  const handleGenderChange = (event) => {
    const selectedGender = event.target.value;
    setGender(selectedGender);
    // setSelectedOptions([]);
  };
   const youCheckBoxChange =(event) => {
    const value = event.target.value;
    const checked = event.target.checked;
    if (checked) {
          setYou(value);
          // setSelectedMembers([...selectedMembers, value]);
          setSelectedMembers((prevMembers)=>[...prevMembers, {relation:'self',age:'',gender:gender}]);
        } else {
          setSelectedMembers((prevMembers)=>
          prevMembers.filter((member) => member.relation!== 'self')
          )
          setYou('');
        }
  }
  const motherCheckBoxChange =(event) => {
    const value = event.target.value;
    const checked = event.target.checked;
    if (checked) {
          setMother(value);
          console.log('mother selected')
          console.log(value)
          setSelectedMembers((prevMembers)=>[...prevMembers, {relation:value, age:'',gender:'female'}]);
        } else {
          setMother('');
          setSelectedMembers((prevMembers)=>
                    prevMembers.filter((member) => member.relation!== value)
                    )
        }
  }
  const fatherCheckBoxChange =(event) => {
    const value = event.target.value;
    const checked = event.target.checked;
    if (checked) {
          setFather(value);
          // setSelectedMembers([...selectedMembers, value]);
          setSelectedMembers((prevMembers)=>[...prevMembers, {relation:value,age:'',gender:'male'}])
          console.log('father selected')
        } else {
          console.log('father not selected')
          setSelectedMembers((prevMembers)=>prevMembers.filter((member)=>member.relation!== value))
          setFather('');
        }
  }
  const sonCheckBoxChange =(event) => {
    const value = event.target.value;
    const checked = event.target.checked;
    if (checked) {
          setSon1(value);
          setSonCount(1);
          setSelectedMembers((prevMembers) => [...prevMembers, { relation: 'son1', age: '', gender: 'male' }]);
          console.log('son1')
          console.log(value)

        } else {
          setSon1('');
          console.log('not selected')
          setSelectedMembers((prevMembers) =>
          prevMembers.filter((member) => !member.relation.startsWith('son'))
        );
          setSonCount(0)
        }
  }
  const daughterCheckBoxChange =(event) => {
    const value = event.target.value;
    const checked = event.target.checked;
    if (checked) {
          setDaughter1(value);
          setDaughterCount(1)
          setSelectedMembers((prevMembers) => [...prevMembers, { relation: 'daughter1', age: '', gender: 'female' }]);
          console.log('daughter1')
        } else {
          setDaughter1('');
          setSelectedMembers((prevMembers) =>
          prevMembers.filter((member) => !member.relation.startsWith('daughter'))
        );
        setDaughterCount(0)
        }
  }
  const spouseCheckBoxChange =(event) => {
    const value = event.target.value;
    const checked = event.target.checked;
    if (checked) {
          setSpouse(value);
          console.log('spouse selected')
              
          // setSelectedMembers([...selectedMembers, value]);
          setSelectedMembers((prevMembers)=>[...prevMembers, {relation:value,age:'',gender:'male'}])
        } else {
          setSelectedMembers((prevMembers)=>prevMembers.filter((member)=>member.relation!==value))
          setSpouse('');
        }
  }
 
  // const sonCountDecrease = () => { sonCount>0&& setSonCount(preCount=>preCount-1)};
  const sonCountDecrease = () => {
    if (sonCount > 1) {
      const updatedSonCount = sonCount - 1; // Store the updated sonCount in a separate variable
  
      setSonCount(updatedSonCount);
  
      setSelectedMembers((prevMembers) => {
        const relationsToRemove = [`son${sonCount}`];
        return prevMembers.filter((member) => !relationsToRemove.includes(member.relation));
      });
    }
  };
  const sonCountIncrease = () => {
    console.log('sonCount increase trying');
    console.log(sonCount);
    console.log(daughterCount);
    
    if (sonCount + daughterCount < 4) {
      setSonCount((prevCount) => prevCount + 1);
  
      switch (sonCount+1) {
        case 1:
          setSelectedMembers((prevMembers) => [...prevMembers, { relation: 'son1', age: '', gender: 'male' }]);
          break;
        case 2:
          setSelectedMembers((prevMembers) => [...prevMembers, { relation: 'son2', age: '', gender: 'male' }]);
          break;
        case 3:
          setSelectedMembers((prevMembers) => [...prevMembers, { relation: 'son3', age: '', gender: 'male' }]);
          break;
        case 4:
          setSelectedMembers((prevMembers) => [...prevMembers, { relation: 'son4', age: '', gender: 'male' }]);
          break;
        default:
          break;
      }
    }
  };
  
  // const daughterCountDecrease = () => {daughterCount>0&& setDaughterCount(preCount=>preCount-1)};
  const daughterCountDecrease = () => {
    if (daughterCount > 1) {
      const updatedDaughterCount = daughterCount - 1; // Store the updated sonCount in a separate variable
  
      setDaughterCount(updatedDaughterCount);
  
      setSelectedMembers((prevMembers) => {
        const relationsToRemove = [`daughter${daughterCount}`];
        return prevMembers.filter((member) => !relationsToRemove.includes(member.relation));
      });
    }
  };
  const daughterCountIncrease = () => {
    if (sonCount + daughterCount < 5) {
      setDaughterCount((prevCount) => {
        const newDaughterCount = prevCount + 1; // Store the updated sonCount in a new variable
  
        console.log('daughterCount increase');
  
        // Use the newDaughterCount variable in the switch statement
        switch (newDaughterCount) {
          case 1:
            setSelectedMembers((prevMembers) => [...prevMembers, { relation: 'daughter1', age: '', gender: 'female' }]);
            break;
          case 2:
            setSelectedMembers((prevMembers) => [...prevMembers, { relation: 'daughter2', age: '', gender: 'female' }]);
            break;
          case 3:
            setSelectedMembers((prevMembers) => [...prevMembers, { relation: 'daughter3', age: '', gender: 'female' }]);
            break;
          case 4:
            setSelectedMembers((prevMembers) => [...prevMembers, { relation: 'daughter4', age: '', gender: 'female' }]);
            break;
          default:
            break;
        }
  
        return newDaughterCount; // Return the updated daughterCount state
      });
    }
  };
  return (
    <div className='wrapper2'>
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
            type="checkbox"
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
            <div className='btn' onClick={sonCountDecrease}>-</div>
            <div>{sonCount}</div>
            <div className='btn' onClick={sonCountIncrease}>+</div></div>}
          </div>
        </div>
   </div>
   <div className='pt-5'>
        <div className="checkbox">
          <input
            type="checkbox"
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
            <div className='btn' onClick={daughterCountDecrease}>-</div>
            <div>{daughterCount}</div>
            <div className='btn' onClick={daughterCountIncrease} >+</div></div>}
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
          <Link to="/initial"><button >Previous</button></Link>
          <Link to="/age"><button >Next Step</button></Link>
     </div>
    </div>
  )
}

export default Display