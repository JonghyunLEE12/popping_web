"use client"; 

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";



function BridgePage({keyValue}) {
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
    // const appScheme = `popping.popping://`;

    const { name, platform, profileUrl, userId } = keyValue;
    
    // URLSearchParams를 사용하여 각 프로퍼티를 쿼리 파라미터로 추가
    const queryParams = new URLSearchParams({
      name: name || "",
      platform: platform || "",
      profileUrl: profileUrl || "",
      userId: userId ? userId.toString() : "",
    });

    // const appScheme = `popping.popping://?key=${encodeURIComponent(keyValue)}`;
    const appScheme = `popping.popping://?${queryParams.toString()}`;
    console.log("Redirecting to:", appScheme);
    

    setTimeout(() => {
      console.log("THIS IS APP SCHEME");
      console.log(appScheme);
      window.location.href = appScheme;
    },2000);
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
          <button className="appViewButton" id="appViewButton" 
          onClick={() => {
            const { name, platform, profileUrl, userId } = keyValue;

            const queryParams = new URLSearchParams({
              name: name || "",
              platform: platform || "",
              profileUrl: profileUrl || "",
              userId: userId ? userId.toString() : "",
            });
            const appScheme = `popping.popping://?${queryParams.toString()}`;
            console.log("Redirecting to:", appScheme);
            window.location.href = appScheme;
         }}>앱으로 보기</button>
        </div>
      </div>
    </>
  );
}

export default BridgePage;
