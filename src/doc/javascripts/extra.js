window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const parentPage = urlParams.get('parent');
    // if (parentPage == Null) {
    //     return;
    // }
    const allowedSites = ["oshop-network"];
    if (allowedSites.includes(parentPage)) {
        let element = document.getElementsByTagName("body")[0];
        element.classList.add(parentPage);
    } 

});