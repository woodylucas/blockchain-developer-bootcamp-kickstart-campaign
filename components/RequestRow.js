import React, { useState } from "react";
import { Table, Button } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import Campaign from "../ethereum/campaign";
import { Router } from "../routes";

const RequestRow = ({ id, request, address, approversCount }) => {
  const { Row, Cell } = Table;
  const [approveLoading, setApproveLoading] = useState(false);
  const [finalizeLoading, setFinalizeLoading] = useState(false);

  const readyToFinalize = request.approvalCount > approversCount / 2;

  const handleApprove = async () => {
    const campaign = Campaign(address);
    const accounts = await web3.eth.getAccounts();
    setApproveLoading(true);
    try {
      await campaign.methods.approveRequest(id).send({
        from: accounts[0],
      });
    } catch (error) {
      console.log(error.message);
    }
    setApproveLoading(false);
    Router.replaceRoute(`/campaigns/${address}/requests`);
  };

  const handleFinalize = async () => {
    const campaign = Campaign(address);
    const accounts = await web3.eth.getAccounts();
    setFinalizeLoading(true);
    try {
      await campaign.methods.finalizeRequest(id).send({
        from: accounts[0],
        value: request.value,
      });
    } catch (error) {
      console.log(error.message);
    }
    setFinalizeLoading(false);
    Router.replaceRoute(`/campaigns/${address}/requests`);
  };

  return (
    <Row
      disabled={request.complete}
      positive={readyToFinalize && !request.complete}
    >
      <Cell>{id}</Cell>
      <Cell>{request.description}</Cell>
      <Cell>{web3.utils.fromWei(request.value, "ether")}</Cell>
      <Cell>{request.recipient}</Cell>
      <Cell>
        {request.approvalCount}/{approversCount}
      </Cell>
      <Cell>
        {request.complete ? null : (
          <Button color="green" basic onClick={handleApprove}>
            Approve
          </Button>
        )}
      </Cell>
      <Cell>
        {request.complete ? null : (
          <Button color="teal" basic onClick={handleFinalize}>
            Finalize
          </Button>
        )}
      </Cell>
    </Row>
  );
};

export default RequestRow;
