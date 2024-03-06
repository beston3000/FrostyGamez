function SetTitle(text) {
    if (event.key === "Enter") {
        alert("Successfully Changed Browser Title");
        localStorage.setItem("title", text.value);
    }
}

function ResetTitle() {
    localStorage.setItem("title", "null");
    alert("Successfully Reset Browser Title");
}

function SetFavicon (event, inputElement) {
    if (event.key === "Enter") {
        var url = inputElement.value;
        localStorage.setItem("imgurl", url);
        alert("Successfully Changed Browser Title");
        UpdateFavicon(url);
    }
}

function ResetFavicon () {
    localStorage.setItem("imgurl", "none")
    alert("Successfully Reset Browser Favicon");
}

function UpdateFavicon(url) {
    var faviconLink = document.querySelector("link[rel*='icon']");
        if (faviconLink) {
            faviconLink.href = url;
        } else {
            faviconLink = document.createElement("link");
            faviconLink.rel = "icon";
            faviconLink.href = url;
            document.getElementsByTagName("head")[0].appendChild(faviconLink);
        }
}