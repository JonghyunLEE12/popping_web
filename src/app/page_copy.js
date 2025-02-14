import BridgePage from "./bridge_page/BridgePage";
import { makeMetadata } from "./utils/meta_data";
import BridgeProvider from "./bridge_page/provider/BridgeProvider";
import { headers } from 'next/headers';


const bridgeProvider = new BridgeProvider();


export async function generateMetadata({searchParams}) {



  const userAgent = headers().get('user-agent') || '';
  const botRegex = /(Googlebot|Naver-Snippet|KakaoBot|bot|spider|crawler|googlebot|bingbot|yandexbot|facebookexternalhit|twitterbot|linkedinbot)/i;


  const obj = await bridgeProvider.getMetaDataByKey(searchParams.key);


  // 봇 판별
  if (!botRegex.test(userAgent)) {
    // 클릭 수 조회
    await bridgeProvider.postDeepLinkKey(searchParams.key);
  }


  return makeMetadata(
    obj.title,
    obj.desc,
    // `fashionandstyle://open?type=${encodeURIComponent(obj.type)}&id=${encodeURIComponent(obj.id)}&utm_source=${obj.utmInfo['utm_source']}&utm_medium=${obj.utmInfo['utm_medium']}&utm_campaign=${obj.utmInfo['utm_campaign']}&utm_content=${obj.utmInfo['utm_content']}&utm_info=${encodeURIComponent(JSON.stringify(obj.utmInfo))}`,
    `https://app.fashionandstyle.com/?key=${searchParams.key}&utm_source=${searchParams.utm_source}&utm_medium=${searchParams.utm_medium}&utm_campaign=${searchParams.utm_campaign}&utm_content=${searchParams.utm_content}`,
    obj.image,
  );
};

export default async function Home({searchParams}) {

  const obj = await bridgeProvider.getMetaDataByKey(searchParams.key);
  
  const deepkey = searchParams.key;
  
  // console.log('deepkey KEY >>>');
  // console.log(deepkey);
  return (
    <div id="Home">
      <BridgePage type={obj.type} id={obj.contentId} utmInfo={obj.utmInfo} deepLinkKey={deepkey}/>
    </div>
  );
}
