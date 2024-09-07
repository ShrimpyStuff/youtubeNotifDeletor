function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function deleteNotifs() {
    for (i=0; i < document.querySelectorAll("ytd-menu-renderer.ytd-notification-renderer > yt-icon-button#button").length; i++) {
        await document.querySelector("ytd-menu-renderer.ytd-notification-renderer > yt-icon-button#button > button").click()
        await timeout(100);
        await document.querySelector("#items > ytd-menu-service-item-renderer.style-scope.ytd-menu-popup-renderer.iron-selected > tp-yt-paper-item").click()
        await timeout(500);
    }
}
