import React, { Component } from "react";
import {Textfield,Button} from 'react-mdl';


class Signin extends Component {
  render() {
    return (


      <div className="userName">
      <br/>
      <h2>User Name</h2>
      <Textfield
    onChange={() => {}}
    label="Text..."
    style={{width: '200px'}}
    />
<h2> Password</h2>
    <Textfield
    onChange={() => {}}
    pattern="-?[0-9]*(\.[0-9]+)?"
    error="Input is not a number!"
    label="Number..."
    style={{width: '200px'}}
    />
<br/>
<nbsp/>
<Button raised accent ripple>تسجيل دخول</Button>
<nbsp/>
<br/>
      </div>




    );
  }
}

export default Signin;
