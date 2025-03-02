import BridgeProvider from "@/provider/bridge_provider";
import BridgePage from "./bridge_page/BridgePage";
import { makeMetadata } from "./utils/meta_data";

const bridgeProvider = new BridgeProvider();

export async function generateMetadata({ searchParams }) {
  // searchParams는 이미 일반 객체이므로 직접 접근합니다.
  const key = searchParams.key;
  const keyValue = await bridgeProvider.getMetaDataByKey(key);

  console.log("THIS IS KEY VALUE >>>>>");
  console.log(keyValue.name);
  console.log('###');

  return makeMetadata(
    `${keyValue.name} 님이 팝핑 친구 요청을 보냈어요!`,
    `팝핑에서 확인해보세요!`,
    'poppging.com'
  );
}

export default async function Home({ searchParams }) {
  return (
    <div id="Home">
      <BridgePage />
    </div>
  );
}
