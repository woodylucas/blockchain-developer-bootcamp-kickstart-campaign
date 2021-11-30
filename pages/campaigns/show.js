import React from "react";
import Layout from "../../components/Layout";
import { Card } from "semantic-ui-react";
import Campaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";

const CampaignShow = ({
  minimumContribuition,
  balance,
  requestsCount,
  approversCount,
  manager,
}) => {
  const renderCards = () => {
    const items = [
      {
        header: manager,
        meta: "Address of Manager",
        description:
          "The manager created this campaign and can create request to withdraw money",
        style: { overflowWrap: "break-word" },
      },
      {
        header: minimumContribuition,
        meta: "Minimum Contribution (wei)",
        description:
          "You must contribute at least this much wei to become an approver",
      },
      {
        header: requestsCount,
        meta: "Number of Requests",
        description:
          "A reqeust tries to withdraw money from the contract. Request must be approved by approvers",
      },
      {
        header: approversCount,
        meta: "Number of Approvers",
        description:
          "Number of people who have already donated to this campaign",
      },
      {
        header: web3.utils.fromWei(balance, "ether"),
        meta: "Campaign Balance (ether)",
        description:
          "This is how much balance money this campaign has left to spend",
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
    minimumContribuition: summary[0],
    balance: summary[0],
    requestsCount: summary[2],
    approversCount: summary[3],
    manager: summary[4],
  };
};

export default CampaignShow;
