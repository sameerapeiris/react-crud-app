import React from "react";
import ListGroup from "reactstrap/lib/ListGroup";
import Input from "reactstrap/lib/Input";
import FormGroup from "reactstrap/lib/FormGroup";
import Form from "reactstrap/lib/Form";
import Label from "reactstrap/lib/Label";
import ListGroupItem from "reactstrap/lib/ListGroupItem";
import Button from "reactstrap/lib/Button";

const AddUser = () => {
  return (
    <React.Fragment>
      <ListGroup className={`mt-4 mb-3`}>
        <ListGroupItem
          style={{ backgroundColor: "#818181", color: "#fff" }}
          className={`d-flex`}
        >
          <h4>Add User</h4>
          <Button className={`btn-info ml-auto`}>Add user</Button>
        </ListGroupItem>
      </ListGroup>
      <Form>
        <FormGroup>
          <Label>Add User</Label>
          <Input type={`text`}></Input>
        </FormGroup>
      </Form>
    </React.Fragment>
  );
};

export default AddUser;
