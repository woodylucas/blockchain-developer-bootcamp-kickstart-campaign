import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x21E6A1b124FE6489e159Aec318440D23E6f686db"
);

export default instance;
