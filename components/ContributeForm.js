import React from "react";
import { Form, Input, Message, Button } from "semantic-ui-react";

const ContributeForm = () => {
  return (
    <div>
      <Form>
        <Form.Field>
          <label>Amount to Contribute</label>
          <Input label="ether" labelPosition="right"></Input>
        </Form.Field>
        <Button primary>Contribute</Button>
      </Form>
    </div>
  );
};

export default ContributeForm;
