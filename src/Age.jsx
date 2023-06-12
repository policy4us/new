import { useContext } from "react"
import { FormContext } from "./FormContext"
import { Link, useNavigate } from "react-router-dom";

const Age = () => {
  const{selectedMembers,setSelectedMembers,setFatherAge,setMotherAge,setSpouseAge,setSon1Age,setSon2Age,setSon3Age,setSon4Age,setDaughter1Age,setDaughter2Age,setDaughter3Age,setDaughter4Age,setYouAge}=useContext(FormContext)
  const ageRange = {
    father: { min: 18, max: 100 },
    mother: { min: 18, max: 100 },
    son1: { min: 0, max: 30 },
    son2: { min: 0, max: 30 },
    son3: { min: 0, max: 30 },
    son4: { min: 0, max: 30 },
    daughter4: { min: 0, max: 30 },
    daughter1:{ min: 0, max: 30 },
    daughter2:{ min: 0, max: 30 },
    daughter3:{ min: 0, max: 30 },
    spouse: { min: 18, max: 100 },
    self: { min: 18, max: 100 },
  };
  const formatAge = (relation, age) => {
    if (relation === 'son1' || relation === 'son2'|| relation === 'daughter1'|| relation === 'daughter2' || relation === 'daughter3' ||relation === 'daughter4' || relation === 'son3' || relation === 'son4') {
      if (age < 1) {
        const months = Math.floor(age * 12);
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
    const x=member.relation;
    switch(x){
      case 'father':setFatherAge(value);
      break
      case 'mother':setMotherAge(value)
      break;
      case'son1':setSon1Age(value)
      break;
      case'son2':setSon2Age(value)
      break;
      case'son3':setSon3Age(value)
      break;
      case'son4':setSon4Age(value)
      break;
      case 'daughter4':setDaughter4Age(value)
      break;
      case 'daughter1':setDaughter1Age(value)
      break;
      case 'daughter2':setDaughter2Age(value)
      break;
      case 'daughter3':setDaughter3Age(value)
      break;
      case'spouse':setSpouseAge(value)
      break;
      case 'self':setYouAge(value)
      break;
    }

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
  
    if (
      relation === 'son1' ||
      relation === 'son2' ||
      relation === 'daughter1' ||
      relation === 'daughter2' ||
      relation === 'daughter3' ||
      relation === 'daughter4' ||
      relation === 'son3' ||
      relation === 'son4'
    ) {
      for (let i = 1; i <= 11; i++) {
        options.push(
          <option key={`${i}`} value={i / 12}>
            {i} months
          </option>
        );
      }
    }
  
    if (ageLimits) {
      for (let i = ageLimits.min; i <= ageLimits.max; i++) {
        if(i===0){
          continue;
        }else{
        options.push(
          <option key={`${i}`} value={i}>
            {i} years
          </option>
        );}
      }
    }
  
    return options;
  };
  
  // const navigate = useNavigate()
  // const previous=()=>{
  //   navigate(-1)
  // }
  const handleFormSubmit=(e)=>{
    e.preventDefault();
    const newArray = selectedMembers.map(obj => {
      return {
        ...obj,
        relation: obj.relation.replace(/\d+$/, '')
      };
    });
    
    console.log(newArray);

  }
  
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        {selectedMembers.map((member,index) =>
        <>
        <table>
           <tbody>
              <tr key={member}>
                {member.relation==='self'?<td>you</td>:<td>{member.relation}</td>}
                <td>
                <select value={member.age} onChange={(e) => handleAgeChange(index,e)}>
                    <option value="">Select Age</option>
                    {renderAgeOptions(member.relation)}</select>
                </td>
              </tr>
           </tbody>
        </table>
        </>
        )}
        <div>
            <Link to="/display"><button >Previous</button></Link>
            <Link to="/pincode"><button type ="submit">Next Step</button></Link>
       </div>
      </form>
    </div>
  )
}

export default Age