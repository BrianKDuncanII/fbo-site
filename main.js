function togglePage(pageID) {
    var creditsPage = document.getElementById('credits-page');
    var homePage = document.getElementById('main-page');
    var supportPage = document.getElementById('support-page');
    var aboutPage = document.getElementById('about-page');
    var downloadPage = document.getElementById('download-page');
    var forumsPage = document.getElementById('forums-page');

    var creditsButton = document.getElementById('creditsButton');
    var homeButton = document.getElementById('homeButton');
    var supportButton = document.getElementById('supportButton');
    var aboutButton = document.getElementById('aboutButton');
    var downloadButton = document.getElementById('downloadButton');
    var forumsButton = document.getElementById('forumsButton');

    creditsPage.hidden = true;
    homePage.hidden = true;
    supportPage.hidden = true;
    aboutPage.hidden = true;
    downloadPage.hidden = true;
    forumsPage.hidden = true;

    homeButton.classList.remove('active');
    creditsButton.classList.remove('active');
    supportButton.classList.remove('active');
    aboutButton.classList.remove('active');
    downloadButton.classList.remove('active');
    forumsButton.classList.remove('active');

    if(pageID == 'credits-page') {
        creditsPage.hidden = false;
        creditsButton.classList.add('active');
    } else if(pageID == 'main-page') {
        homePage.hidden = false;
        homeButton.classList.add('active');
    } else if(pageID == "support-page") {
        supportPage.hidden = false;
        supportButton.classList.add('active');
    } else if(pageID == "about-page") {
        aboutPage.hidden = false;
        aboutButton.classList.add('active');
    } else if(pageID == "download-page") {
        downloadPage.hidden = false;
        downloadButton.classList.add('active');
    } else if(pageID == "forums-page") {
        forumsPage.hidden = false;
        forumsButton.classList.add('active');
    }
}

tippy('#discord-icon', {
    content: "FBO Discord",
});

tippy('#patreon-icon', {
    content: "FBO Patreon",
});