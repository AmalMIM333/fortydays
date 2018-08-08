import React, { Component } from "react";

import {Grid, Cell,Row,Col ,Image,Thumbnail,Button} from 'react-bootstrap';


class Courses extends Component {
  render() {
    return (
<div className = "coursess">
      <Image src="https://www.eccouncil.org/wp-content/uploads/2011/05/Ethical-hacking-02-1.jpg" className="imageSize" thumbnail />
        <Image src="https://www.eccouncil.org/wp-content/uploads/2011/05/Ethical-hacking-02-1.jpg" className="imageSize" thumbnail />
          <Image src="https://www.eccouncil.org/wp-content/uploads/2011/05/Ethical-hacking-02-1.jpg" className="imageSize" thumbnail />

<div className="detials">
<h3>المخترق</h3> 
            <p>يهدفُ المسار إلى تقديم أساسيّات الإختراق الأخلاقيللمتدرّب، إضافةً إلى تقنيّاتٍ في اختراق التطبيقات دون الخادم</p>
            <p>
              <Button bsStyle="primary">التسجيل</Button><nbsp/>
            </p>
</div>

    </div>



    );
  }
}

export default Courses;
