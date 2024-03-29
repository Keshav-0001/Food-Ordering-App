import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo :{
name: "Dummy",
location:"Default"

      }
  
    };
    // console.log("Children1 constructor");
   
  }
   async componentDidMount() {
    // console.log("Children mount component");
const data = await fetch("https://api.github.com/users/Keshav-0001");
const json =  await data.json();
 console.log(json);

this.setState({

userInfo: json,

})
  }
  componentWillUnmount(){

    console.log("I am componetWillUnmount");
  }
  


 

  render() {
    const {name,location} = this.state.userInfo;
    // console.log("Children render");



    return (
      <div className="user-class">
        <h2>Welcome to the class based component </h2>
        <h3>{name}</h3>
        <h4>{location}</h4>
        

        {/* In class based component never update the state Variable directly */}

        
      </div>
    );
  }
}

export default UserClass;
