export function getMetaInfo(originKey) {
    let title;
    let description;
    
    title = "POPPING";
    description = "POPPING 앱에서 만나요!";
  
    return { title, description };
  }
  
  export function makeMetadata(title, description, url, image = "", date = new Date().toISOString()) {
    const keyValue = url.split('?')[1];
    return {
      title: title,
      description: description,
      icons: {
        icon: "img/app_logo.png",
      },
      openGraph: {
        type: "website",
        url: url,
        title: title,
        description: description,
        siteName: "POPPING|팝핑",
        images: [image],
      },
      robots: "index, follow",
      other: {
        copyright:
          "Copyrights © 2025 POPPING|팝핑 All Rights Reserved",
        author: "POPPING|팝핑",
        keywords: description,
        date: date,
        build: new Date().toISOString(),
      },
      alternates: {
        canonical: url,
      },
      appLinks : {
      },
      facebook : {

      }
    };
  }
  