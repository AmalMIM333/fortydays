import React, { Component } from "react";

import {Grid, Cell,Row,Col ,Image,Thumbnail,Button} from 'react-bootstrap';


class Courses extends Component {
  render() {
    return (
<div className = "coursess">
      <Grid>
      <Row>
        <Col xs={1} md={2}>
          <Thumbnail src="https://placekitten.com/150/150" alt="150">
            <h3>Thumbnail label</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Button</Button>
            </p>
          </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
          <Thumbnail src="https://placekitten.com/150/150" alt="242x200">
            <h3>Thumbnail label</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Button</Button><nbsp/>
            </p>
          </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
          <Thumbnail src="https://placekitten.com/150/150" alt="242x200">
            <h3>Thumbnail label</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Button</Button><nbsp/>
            </p>
          </Thumbnail>
        </Col>
      </Row>
    </Grid>

    </div>

    );
  }
}

export default Courses;
