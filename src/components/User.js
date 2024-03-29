import { useState } from "react";



const User = () => {


const [count,setCount] = useState(0);

let  updatedValue = () => {

setCount(count +1 );

}


  return (
    <div className="user-class">
      <h3> Hii keshav choudhari</h3>
      <h2>This is class based components</h2>
      <h1>Count : {count}</h1>
      <button onClick={updatedValue} onMouseOver={updatedValue}>Click me</button>
    </div>
  );
};

export default User;
