import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x941CEF10005C098e7795D3509536f5E48baeCB0b"
);

export default instance;
