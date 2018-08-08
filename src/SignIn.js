import React, { Component } from "react";
import {Textfield,Button} from 'react-mdl';


class Signin extends Component {
  render() {
    return (


      <div className="userName">
      <div className="name">
      <br/>
      <p>اسم المستخدم</p>
      <Textfield
    onChange={() => {}}
    label="Text..."
    style={{width: '200px'}}
    />
<p> كلمة المرور</p>
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
      <br/>
      </div>




    );
  }
}

export default Signin;
