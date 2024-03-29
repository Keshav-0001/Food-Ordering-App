import UserClass from "./UserClass";
import User from "./User";
import React from "react";

// const About = () => {
//   return (
//     <div>
//       <h1>Hii this is about me page...Thankyou</h1>;sss{" "}
//       <User name="This is Functional component" />
//       <UserClass name="This is firsti class based component" />
//       <UserClass name="This is second class based components" />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent update");
  }

  componentDidMount() {
    // console.log("parent MountComponent");
  }

  render() {
    // console.log("render update");

    return (
      <div>
        <h2>Hii this is Keshav Choudhari....</h2>
        <UserClass name={"First children mount"} location={"Bhiwandi"} />
        <UserClass name={"second children mount"} location={"Bhiwandi"} />
      </div>
    );
  }
}

export default About;
