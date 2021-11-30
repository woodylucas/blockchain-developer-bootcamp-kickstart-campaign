import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x95A3Ef5312cCb5c404f6503a0df9060f3263BA05"
);

export default instance;
