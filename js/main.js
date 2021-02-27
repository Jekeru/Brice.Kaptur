var myFullpage = new fullpage('#fullpage', {
    licenseKey: 'w06QrxE#f6',
    //Navigation
    menu: '#nav-main-slider',
    lockAnchors: false,
    anchors: ['head', 'WelcomeToRadioCampus', 'SiteWebResponsive', 'Leternelretour', 'CadreModulaire', 'FestivalderueFeta',
        'Sonar',
        'RiposteKitchenCustom', 'SansTitre', 'PortesOuvertesESADOrleans', 'BlackBlockParty', 'Dulisibleausensible',
        'Mondedapresmusiquededemain', 'FusionEstivale',
        'Tarmac3000', 'D-Clic', 'VRJAPON', 'video', 'footer'
    ],
    //Scrolling
    scrollOverflow: true,
    //Design
    controlArrows: false,
    fixedElements: '#nav-main-brice, #fixed-arrayslide',
    //Custom selectors
    sectionSelector: '.section',
    slideSelector: '.slide',
});

document.querySelector('.moveSlideRight').addEventListener('click', function (e) {
    e.preventDefault();
    fullpage_api.moveSlideRight();
});

document.querySelector('.moveSlideLeft').addEventListener('click', function (e) {
    e.preventDefault();
    fullpage_api.moveSlideLeft();
});

document.querySelector('.moveSlideDown').addEventListener('click', function (e) {
    e.preventDefault();
    fullpage_api.moveSectionDown();
});