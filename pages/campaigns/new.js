import React, { useState } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";
import Layout from "../../components/Layout";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";

const CampaignNew = () => {
  const [minimumContribution, setMinimumContribution] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods.createCampaign(minimumContribution).send({
        from: accounts[0],
      });
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  return (
    <Layout>
      <h3>Create Campaign</h3>

      <Form onSubmit={handleSubmit} error={!!errorMessage}>
        <Form.Field>
          <label>Minimum Contribution</label>
          <Input
            label="wei"
            labelPosition="right"
            value={minimumContribution}
            onChange={(evt) => setMinimumContribution(evt.target.value)}
          />
        </Form.Field>
        <Message error header="Oops!" content={errorMessage} />
        <Button primary>Create!</Button>
      </Form>
    </Layout>
  );
};

export default CampaignNew;
