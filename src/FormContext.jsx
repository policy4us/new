import  { createContext, useEffect, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [gender, setGender] = useState('');
    const [you, setYou] = useState('you');
    const [mother, setMother] = useState('');
    const [father, setFather] = useState('');
    const [son4, setSon4] = useState(''); 
    const [son1,setSon1]=useState('')
    const [son2,setSon2]=useState('')
    const [son3,setSon3]=useState('')
    const [daughter4, setDaughter4] = useState('');
    const [daughter1,setDaughter1]=useState('')
    const [daughter2,setDaughter2]=useState('')
    const [daughter3,setDaughter3]=useState('')
    const [spouse, setSpouse] = useState('');
    // const [selectedOptions, setSelectedOptions] = useState([]);
  const [motherAge,setMotherAge] = useState('');
    const [fatherAge,setFatherAge] = useState('');
    const [son4Age,setSon4Age] = useState('');
    const [daughter4Age,setDaughter4Age] = useState('');
    const [spouseAge,setSpouseAge] = useState('');
    const [youAge,setYouAge] = useState('');
    const [son1Age,setSon1Age] = useState('');
    const [son2Age,setSon2Age] = useState('');
    const [son3Age,setSon3Age] = useState('');
    const [daughter1Age,setDaughter1Age]=useState('')
    const [daughter2Age,setDaughter2Age]=useState('')
    const [daughter3Age,setDaughter3Age]=useState('')
    // const [age, setAge] = useState('');
    const [sonCount,setSonCount]=useState('')
    const [daughterCount, setDaughterCount]=useState('')
    const [selectedMembers,setSelectedMembers]=useState([{relation:'self',age:'',gender:'male'}]);
    const [pincode,setPincode]=useState('')
    useEffect(() => {
        const storedPincode=localStorage.getItem('pincode');
        const storedGender = localStorage.getItem('gender');
        const storedYou = localStorage.getItem('you');
        const storedMother = localStorage.getItem('mother');
        const storedFather = localStorage.getItem('father');
        const storedSon4 = localStorage.getItem('son4');
        const storedSon1 = localStorage.getItem('son1');
        const storedSon2 = localStorage.getItem('son2');
        const storedSon3 = localStorage.getItem('son3');
        const storedDaughter1 = localStorage.getItem('daughter1');
        const storedDaughter2 = localStorage.getItem('daughter2');
        const storedDaughter3 = localStorage.getItem('daughter3');
        const storedDaughter4 = localStorage.getItem('daughter4');
        const storedSpouse = localStorage.getItem('spouse');
        const storedMotherAge = localStorage.getItem('motherAge');
        const storedFatherAge = localStorage.getItem('fatherAge');
        const storedSon1Age = localStorage.getItem('son1Age');
        const storedDaughter1Age = localStorage.getItem('daughter1Age');
        const storedSpouseAge = localStorage.getItem('spouseAge');
        const storedYouAge = localStorage.getItem('youAge');
        const storedSon2Age = localStorage.getItem('son2Age');
        const storedSon3Age = localStorage.getItem('son3Age');
        const storedSon4Age = localStorage.getItem('son4Age');
        const storedDaughter2Age = localStorage.getItem('daughter2Age');
        const storedDaughter3Age = localStorage.getItem('daughter3Age');  
        const storedDaughter4Age = localStorage.getItem('daughter4Age');
        const storedDaughterCount=parseInt(localStorage.getItem('daughterCount'));
        const storedSonCount=parseInt(localStorage.getItem('sonCount'));
        const storedMembers = localStorage.getItem('selectedMembers');
        if (storedPincode) {
          setPincode(storedPincode);
        }
        if (storedGender) {
          setGender(storedGender);
        }
        if (storedYou) {
          setYou(storedYou);
          setSelectedMembers((prevMemers)=>[...prevMemers, {relation:'self',age:'',gender:'male'}])
        }
        if (storedMother) {
          setMother(storedMother);
          setSelectedMembers((prevMemberrs)=>[...prevMemberrs,{relation:storedMother,age:'',gender:'female'}])
        }
        if (storedFather) {
          setFather(storedFather);
          (prevMembers => [
            ...prevMembers,
            { relation: storedFather, age: '', gender: 'male' }
          ]);
    }
        if (storedSon1) {
          setSon1(storedSon1);
          setSelectedMembers((prevMembers)=>[...prevMembers, {relation:storedSon1,age:'',gender:'male'}])
        }
         if (storedSon4) {
          setSelectedMembers((prevMembers)=>[...prevMembers,{relation:storedSon4,age:'',gender:'male'}])
         }
         if (storedSon2) {
          setSelectedMembers((prevMembers)=>[...prevMembers,{relation:storedSon2,age:'',gender:'male'}])
         }
         if (storedSon3) {
          setSelectedMembers((prevMembers)=>[...prevMembers,{relation:storedSon3,age:'',gender:'male'}])
         }
        if (storedDaughter4) {
          setSelectedMembers((prevMembers)=>[...prevMembers, {relation:storedDaughter4,age:'',gender:'female'}])
        }
        if (storedDaughter1) {
          setDaughter1(storedDaughter1);
          setSelectedMembers((prevMembers)=>[...prevMembers,{relation:storedDaughter1,age:'',gender:'female'}])
        }
        if (storedDaughter2) {
          setSelectedMembers((prevMembers)=>[...prevMembers,{relation:storedDaughter2,age:'',gender:'female'}])
        }
        if (storedDaughter3) {
          setSelectedMembers((prevMembers)=>[...prevMembers,{relation:storedDaughter3,age:'',gender:'female'}])
        }
        if (storedSpouse) {
          setSpouse(storedSpouse);
          setSelectedMembers((prevMembers)=>[...prevMembers, {relation:storedSpouse,age:'',gender:'female'}])
        }
        if (storedMotherAge) {
           setMotherAge(storedMotherAge);
       }
       if (storedFatherAge) {
             setFatherAge(storedFatherAge);
       }
       if (storedSpouseAge) {
        setSpouseAge(storedSpouseAge);
       }
       if (storedSon4Age) {
        setSon4Age(storedSon4Age);
       }
       if (storedDaughter4Age) {
        setDaughter4Age(storedDaughter4Age);
       }
       if (storedYouAge) {
        setYouAge(storedYouAge);
       }
       if (storedSon1Age) {
        setSon1Age(storedSon1Age);
       }
       if (storedSon2Age) {
        setSon2Age(storedSon2Age);
       }
        if (storedSon3Age) {
        setSon3Age(storedSon3Age);
       }
       if (storedDaughter1Age) {
        setDaughter1Age(storedDaughter1Age);
       }
       if (storedDaughter2Age) {
        setDaughter2Age(storedDaughter2Age);
       }
       if (storedDaughter3Age) {
        setDaughter3Age(storedDaughter3Age);
       }
        if (storedDaughterCount) {
          setDaughterCount(storedDaughterCount);
       }
       if (storedSonCount) {
        setSonCount(storedSonCount);
       }
     if (storedMembers) {
            const parsedMembers = JSON.parse(storedMembers);
            setSelectedMembers(parsedMembers);
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem('pincode',pincode)
        localStorage.setItem('gender', gender);
        localStorage.setItem('you', you);
        localStorage.setItem('mother', mother);
        localStorage.setItem('father', father);
        localStorage.setItem('son4', son4);
        localStorage.setItem('son1', son1);
        localStorage.setItem('son2', son2);
        localStorage.setItem('son3', son3);
        localStorage.setItem('daughter4', daughter4);
        localStorage.setItem('daughter1', daughter1);
        localStorage.setItem('daughter2', daughter2);
        localStorage.setItem('daughter3', daughter3);
        localStorage.setItem('spouse', spouse);
        localStorage.setItem('motherAge', motherAge);
        localStorage.setItem('fatherAge', fatherAge);
        localStorage.setItem('son4Age', son4Age);
        localStorage.setItem('daughter4Age', daughter4Age);
        localStorage.setItem('spouseAge', spouseAge);
        localStorage.setItem('youAge', youAge);
        localStorage.setItem('son1Age', son1Age);
        localStorage.setItem('son2Age', son2Age);
        localStorage.setItem('son3Age', son3Age);
        localStorage.setItem('daughter1Age', daughter1Age);
        localStorage.setItem('daughter2Age', daughter2Age);
        localStorage.setItem('daughter3Age', daughter3Age);
        localStorage.setItem('sonCount', sonCount);
        localStorage.setItem('daughterCount',daughterCount);
        localStorage.setItem('selectedMembers', JSON.stringify(selectedMembers));
      }, [gender,you,mother,father,son4,son1,son2,son3,daughter4,daughter1,daughter2,daughter3,spouse,motherAge,fatherAge,son4Age,daughter4Age,spouseAge,youAge,son1Age,son2Age,son3Age,daughter1Age,daughter2Age,daughter3Age,sonCount,daughterCount  ,selectedMembers,pincode]);
    
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
            }
             else {
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
        if (sonCount + daughterCount < 4) {
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
    <FormContext.Provider
      value={{
        gender,setGender,you,setYou,son1,setSon1,son2,setSon2,son3,setSon3,son4,setSon4,mother,setMother,father,setFather,spouse,setSpouse,daughter1,setDaughter1,daughter2,setDaughter2,daughter3,setDaughter3,daughter4,setDaughter4,selectedMembers,setSelectedMembers,sonCount,setSonCount,daughterCount,setDaughterCount,motherAge,setMotherAge,fatherAge,spouseAge,setSpouseAge,son4Age,daughter4Age,youAge,setYouAge,setSon1Age,setSon2Age,setSon3Age,son1Age,son2Age,son3Age,daughter1Age,setDaughter1Age,daughter2Age,setDaughter2Age,daughter3Age,setDaughter3Age,setFatherAge,setSon4Age,setDaughter4Age,handleGenderChange,daughterCountDecrease,daughterCountIncrease,sonCountIncrease,sonCountDecrease,daughterCheckBoxChange, sonCheckBoxChange,motherCheckBoxChange, fatherCheckBoxChange,youCheckBoxChange,spouseCheckBoxChange
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
