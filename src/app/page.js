import BridgePage from "./bridge_page/BridgePage";
import { makeMetadata } from "./utils/meta_data";




export async function generateMetadata({searchParams}) {

  return makeMetadata(
    '타이틀',
    '디스크립션',
    `poppging.com`,
  );
};

export default async function Home({searchParams}) {
  
  return (
    <div id="Home">
      <BridgePage/>
    </div>
  );
}
