import { useContext } from "react"
import { FormContext } from "./FormContext"
import { Link } from "react-router-dom";

const Age = () => {
  const {selectedMembers,setSelectedMembers}=useContext(FormContext)
  const ageRange = {
    father: { min: 18, max: 100 },
    mother: { min: 18, max: 100 },
    son: { min: 0, max: 30 },
    daughter: { min: 0, max: 30 },
    daughter1:{ min: 0, max: 30 },
    daughter2:{ min: 0, max: 30 },
    daughter3:{ min: 0, max: 30 },
    spouse: { min: 18, max: 100 },
    you: { min: 18, max: 100 },
  };
  const formatAge = (relation, age) => {
    if (relation === 'son' || relation === 'daughter'|| relation === 'daughter1') {
      if (age < 1) {
        const months = Math.round(age * 12);
        return `${months} months`;
      } else {
        return `${Math.floor(age)} years`;
      }
    } else {
      return `${Math.floor(age)} years`;
    }
  };

  const handleAgeChange = (index, event) => {
    const { value } = event.target;
    const member = selectedMembers[index];
    const ageLimits = ageRange[member.relation];
    const newAge = parseFloat(value);

    if (ageLimits && newAge >= ageLimits.min && newAge <= ageLimits.max) {
      setSelectedMembers((prevMembers) => {
        const updatedMembers = [...prevMembers];
        updatedMembers[index] = { ...member, age: newAge };
        return updatedMembers;
      });
    }
  };

  const renderAgeOptions = (relation) => {
    const ageLimits = ageRange[relation];
    const options = [];

    if (relation === 'son' || relation === 'daughter' || relation === 'daughter1') {
      for (let i = 0; i <= 11; i++) {
        options.push(
          <option key={i} value={i / 12}>
            {i} months
          </option>
        );
      }
    }

    if (ageLimits) {
      for (let i = ageLimits.min; i <= ageLimits.max; i++) {
        options.push(
          <option key={i} value={i}>
            {i} years
          </option>
        );
      }
    }

    return options;
  };
  
  return (
    <div>
      <div>
      {selectedMembers.map((member, index) => (
        <div key={index}>
          {member.relation && (
            <>
              <span>{member.relation}</span>
              <select value={member.age} onChange={(e) => handleAgeChange(index, e)}>
                <option value="">Select Age</option>
                {renderAgeOptions(member.relation)}
              </select>
              <span>Age: {formatAge(member.relation, member.age)}</span>
            </>
          )}
        </div>
      ))}
    </div>
    <div>
          <Link to="/display"><button>Previous</button></Link>
          <Link to="/pincode"><button>Next Step</button></Link>
     </div>
    </div>
  )
}

export default Age