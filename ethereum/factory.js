import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x65dBC05395ec4A83dB5B46b11359b5396a503464"
);

export default instance;
