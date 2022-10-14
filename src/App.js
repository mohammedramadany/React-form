
import './App.css';
import {useState} from 'react';






function App() {
  const [values,setValues]=useState({
    firstName:"",
    lastName:"",
    email :"",
    phone:"",
    experience:"",
    address:"",
    });
   const onUserSubmit=(e)=>{
    e.preventDefault();
     console.log(values);
  }
  const onValueChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setValues(userValues=>({...userValues,[name]:value}));
  }
  
  return (
    <>

    <div className="container">
      <div className="card">
      <div className="card-header">
    Employee Information
  </div>
    <form onSubmit={onUserSubmit}>
    <label>First Name</label>
    <input type="text" name="firstName" placeholder="Enter your first name" className="form-control" onChange={onValueChange} /><br/>
    <label>Last Name</label>

    <input type="text" name="lastName" placeholder="Enter your last name" className="form-control" onChange={onValueChange}/><br/>
    <label>Email address</label>

    <input type="email" name="email" placeholder="Enter your email" className="form-control" onChange={onValueChange} /><br/>
    <label>Phone</label>

    <input type="text" name="phone" placeholder="Enter your phone number" className="form-control" onChange={onValueChange} /><br/>
    <label>Experience</label>

    <input type="text" name="experience" placeholder="Enter your experience" className="form-control" onChange={onValueChange} /><br/>
    <label>Address</label>

    <input type="text" name="address" placeholder="Enter your address" className="form-control" onChange={onValueChange} /><br/>
    <button type="submit" className="btn btn-primary btn-lg"> Submit</button>
    </form>
    </div>
    </div>
    </>
  );
}

export default App;
