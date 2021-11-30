import React, { useState } from "react";
import { Form, Input, Message, Button } from "semantic-ui-react";
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import { Router } from "../routes";

const ContributeForm = ({ address }) => {
  const [term, setTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const campaign = Campaign(address);
    setIsLoading(true);
    setErrorMessage("");

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(term, "ether"),
      });
      Router.replaceRoute(`/campaigns/${address}`);
    } catch (error) {
      setErrorMessage(error.message);
    }

    setIsLoading(false);
    setTerm("");
  };
  return (
    <div>
      <Form onSubmit={handleSubmit} error={!!errorMessage}>
        <Form.Field>
          <label>Amount to Contribute</label>
          <Input
            value={term}
            onChange={(evt) => setTerm(evt.target.value)}
            label="ether"
            labelPosition="right"
          ></Input>
        </Form.Field>
        <Message error header="Oops!" content={errorMessage} />
        <Button primary loading={isLoading}>
          Contribute
        </Button>
      </Form>
    </div>
  );
};

export default ContributeForm;
