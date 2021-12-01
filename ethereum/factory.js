import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x6B88b4E1aA823cE6d6374353814845bC42BbF3D1"
);

export default instance;
