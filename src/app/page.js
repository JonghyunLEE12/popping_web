import BridgeProvider from "@/provider/bridge_provider";
import BridgePage from "./bridge_page/BridgePage";
import { makeMetadata } from "./utils/meta_data";

const bridgeProvider = new BridgeProvider();

export async function generateMetadata({ searchParams }) {
  // searchParams는 이미 일반 객체이므로 직접 접근합니다.
  const key = searchParams.key;
  const keyValue = await bridgeProvider.getMetaDataByKey(key);



  return makeMetadata(
    `${keyValue.name} 님이 팝핑 친구 요청을 보냈어요!`,
    `팝핑에서 확인해보세요!`,
    'poppging.com'
  );
}

export default async function Home({ searchParams }) {
  const key = searchParams.key;
  const keyValue = await bridgeProvider.getMetaDataByKey(key);

  console.log("THIS IS KEY VALUE ON VIEW >>>>>");
  console.log(keyValue);
 
  console.log('###');
  return (
    <div id="Home">
      <BridgePage keyValue={keyValue}/>
    </div>
  );
}
