"use client"; 

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";



function BridgePage({type,id,utmInfo,deepLinkKey}) {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
 

  useEffect(() => {
    handlePageLoad();
  }, []);

  useEffect(() => {
    handlePageLoad();
  }, [router]);


  const handlePageLoad = async() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const externalUrl = 'https://popping-web.vercel.app';
    const appScheme = `popping://`;

    setTimeout(() => {
      window.location.href = appScheme;
    });
  };
  

  return (
    <>
      <div id="BridgePage">
        <div>
          <div id="appLogoDiv">
            <h2>POPPING</h2>
          </div>
        </div>
        <div id="moveToApp">
          <button className="appViewButton" id="appViewButton" onClick={() => { window.location.href = "popping://";}}>앱으로 보기</button>
        </div>
      </div>
    </>
  );
}

export default BridgePage;
