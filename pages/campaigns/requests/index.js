import React from "react";
import { Button, Table } from "semantic-ui-react";
import { Link } from "../../../routes";
import Layout from "../../../components/Layout";
import Campaign from "../../../ethereum/campaign";

const RequestIndex = ({ address }) => {
  const { Header, Row, HeaderCell, Body } = Table;
  return (
    <Layout>
      <h3>Requests</h3>
      <Link route={`/campaigns/${address}/requests/new`}>
        <a>
          <Button primary>Add Request</Button>
        </a>
      </Link>
      <Table>
        <Header>
          <Row>
            <HeaderCell>ID</HeaderCell>
            <HeaderCell>Description</HeaderCell>
            <HeaderCell>Amount</HeaderCell>
            <HeaderCell>Recipient</HeaderCell>
            <HeaderCell>Approval Count</HeaderCell>
            <HeaderCell>Approve</HeaderCell>
            <HeaderCell>Finalize</HeaderCell>
          </Row>
        </Header>
      </Table>
    </Layout>
  );
};

RequestIndex.getInitialProps = async (ctx) => {
  const { query } = ctx;
  const address = Campaign(query.address);
  const requestCount = await campaign.methods.getRequestsCount().call();

  const request = await Promise.all(
    Array(parseInt(requestCount))
      .fill()
      .map((element, index) => {
        return campaign.methods.requests(index).call();
      })
  );
  return { address: query.address, requests, requestCount };
};

export default RequestIndex;
