import axios from "axios";

class BridgeProvider {
  constructor() {
    this.BASE_URL = "http://ec2-43-201-22-25.ap-northeast-2.compute.amazonaws.com:8080";
    this.AXIOS = axios.create({
      baseURL: this.BASE_URL,
      timeout: 3000,
    });
  }

  async getMetaDataByKey(keyValue) {
    console.log("Key value:", keyValue);
    const endpoint = `/friends/invitations/info/${keyValue}`;
    try {
      const response = await this.AXIOS.get(endpoint);
      console.log("Response data:", response.data);
      return response.data;
    } catch (e) {
      console.error("Error in getMetaDataByKey:", e.message);
      // 순환 참조가 없는 새로운 Error 객체로 던집니다.
      throw new Error(e.message || "Error fetching metadata");
    }
  }
}

export default BridgeProvider;
