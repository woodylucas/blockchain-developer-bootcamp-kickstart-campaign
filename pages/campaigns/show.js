import React from "react";
import { Card } from "semantic-ui-react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";

const CampaignShow = ({
  minimumContribution,
  balance,
  requestCount,
  approversCount,
  manager,
}) => {
  const renderCards = () => {
    const items = [
      {
        header: manager,
        meta: "Address of Manager",
        description:
          "The manager created this campaign and create this request to withdraw money",
        style: { overflowWrap: "break-word" },
      },
    ];

    return <Card.Group items={items} />;
  };
  return (
    <Layout>
      <h3>Campaign Show</h3>
      {renderCards()}
    </Layout>
  );
};

CampaignShow.getInitialProps = async (ctx) => {
  const { query } = ctx;
  const campaign = Campaign(query.address);
  const summary = await campaign.methods.getSummary().call();
  return {
    minimumContribution: summary[0],
    balance: summary[1],
    requestCount: summary[2],
    approversCount: summary[3],
    manager: summary[4],
  };
};

export default CampaignShow;
