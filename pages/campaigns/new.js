import React, { useState } from "react";
import { Form, Button, Input } from "semantic-ui-react";
import Layout from "../../components/Layout";
const CampaignNew = () => {
  const [minimumContribution, setMinimumContribution] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  return (
    <Layout>
      <h3>Create Campaign</h3>

      <Form>
        <Form.Field>
          <label>Minimum Contribution</label>
          <Input
            label="wei"
            labelPosition="right"
            value={minimumContribution}
            onChange={(evt) => setMinimumContribution(evt.target.value)}
          />
        </Form.Field>
        <Button primary>Create!</Button>
      </Form>
    </Layout>
  );
};

export default CampaignNew;
