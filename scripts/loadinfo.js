function SetInfo(browsertitle, ogimg) {
    if (localStorage.getItem("title") == "null" || localStorage.getItem("title") == null) {
        document.title = browsertitle;
    } else {
        document.title = localStorage.getItem("title");
    }

    if (localStorage.getItem("imgurl") == "none" ) {
        let link = document.createElement('link');
        link.rel = "icon";
        link.type = "image/png";
        link.href = ogimg;
        document.getElementsByTagName("head")[0].appendChild(link);
    } else {
        var faviconLink = document.querySelector("link[rel*='icon']");
        if (faviconLink) {
            faviconLink.href = localStorage.getItem("imgurl");
        } else {
            faviconLink = document.createElement("link");
            faviconLink.rel = "icon";
            faviconLink.href = localStorage.getItem("imgurl");
            document.getElementsByTagName("head")[0].appendChild(faviconLink);
        }
    }
}
