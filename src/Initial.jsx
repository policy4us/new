import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import maleicon from './assets/male-icon.png';
import femaleicon from './assets/female-icon.png';
const Initial = () => {
    const [gender, setGender] = useState('');
useEffect(() => {
    const storedGender = localStorage.getItem('gender');
    if (storedGender) {
            setGender(storedGender);
        }
  },[])
  useEffect(()=> {
    localStorage.setItem('gender', gender);
  },[gender])
  const handleGenderChange = (event) => {
    const selectedGender = event.target.value;
    setGender(selectedGender);
  };
  return (
<div className='flx'>
      <h2>Step 1: Select Gender</h2>
      <div className="first-stage mt-2">
          <div className='first-icons'>
          <div>
          <label className='d-flex flex-column justify-content-center align-items-center'>
    <input
      type="radio"
      name="gender"
      value="male"
      checked={gender === 'male'}
      onChange={handleGenderChange}
      style={{ display: 'none' }} // Hide the default radio button
    />
    <img
      src={maleicon} //  path to male image
      alt="Male"
      className={gender === 'male' ? 'selected' : ''} // Add a class to indicate the selected image
    />
  Male</label>
</div>
<div>
  <label className='d-flex flex-column justify-content-center align-items-center'>
    <input
      type="radio"
      name="gender"
      value="female"
      checked={gender === 'female'}
      onChange={handleGenderChange}
      style={{ display: 'none' }} // Hide the default radio button
    />
    <img
      src={femaleicon} // path to female image
      alt="Fmale"
      className={gender === 'female' ? 'selected' : ''} // Add a class to indicate the selected image
    />Female
  </label>
</div>
          </div>
          <Link to="/display"><button className='btn btn-danger mt-5'>GET STARTED</button></Link>
      </div>
    </div>
    
  )
}

export default Initial