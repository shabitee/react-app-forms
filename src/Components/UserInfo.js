import { useState } from "react";
// import axios from "axios";

function UserInfo(){
    const [firstName, setFirstName]= useState("");
    const [surname, setSurName]= useState("");
    const [email, setEmail]= useState("");
    const [country, setCountry]= useState("UK");
    const [mobile, setMobile]= useState("");
    const [users, setUsers]= useState([]);

    

    const AddUserInfo = async(e) =>{
        e.preventDefault();
        const newUserInfo ={
           firstName, surname, email, country, mobile
    }
        console.log(newUserInfo);
        setUsers([...users, newUserInfo]);
        // Now send a POST request to the API server to store the user information
    //    const result = await axios.post(`http://localhost:3003/UserInfo`, newUserInfo)
    //    console.log(result.data);


      
};

    return(
        <div>
            <h2>Enter your details:</h2>
        <br/>
        <form onSubmit={AddUserInfo}>
        <input type="text" placeholder="First Name" name="First Name" onChange={(e) =>
        setFirstName(e.target.value)} />
        <br/>
        <input type="text" placeholder="Surname" name="Surname" onChange={(e) =>
        setSurName(e.target.value)} />
        <br/>
        <input type="text" placeholder="Email" name="Email" onChange={(e) =>
        setEmail(e.target.value)} />
        <br/>
        <input type="number" placeholder="Mobile Number" name="Mobile Number" onChange={(e) =>
        setMobile(e.target.value)} />
        <br/>
        <select name = "country" defaultValue={country} onChange={(e) =>
        setCountry(e.target.value)}>
        <option value = "UK">UK</option> 
        <option value = "US">US</option>
        <option value = "Canada">Canada</option>
        <option value = "Nigeria">Nigeria</option> 
        </select>
        <br/>
        <br/>
        <button type="submit">Submit</button>
        
 </form>

 <br/>
 <h2>Current User</h2>
 {users.map((user, index)=>{
    return(
        <div key={index}>
            <p>{user.firstName}</p>
            <p>{user.surname}</p>
            <p>{user.email}</p>
            <p>{user.country}</p>
            <p>{user.mobile}</p>
        </div>
    );

 })}
 
       
        </div>
        

    );



}


export default UserInfo;