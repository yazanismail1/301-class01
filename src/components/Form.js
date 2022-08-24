import React from "react";
import Form from 'react-bootstrap/Form';

class FilterForm extends React.Component {
    render() {
        return (
        <div>
        <Form className="mb-3">
        <Form.Label><h5>Select Number of Hornes:</h5></Form.Label>
        <Form.Select onChange={this.props.HornNums}>
          <option>Select Number of Horns</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="100">100</option>
        </Form.Select>
      </Form>
      </div>
        )
    }
}

export default FilterForm;
