const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navbar = document.querySelectorAll('a');

let nav1 = navbar[0];
nav1.textContent = "Services";

let nav2 = navbar[1];
nav2.textContent = "Product";

let nav3 = navbar[2];
nav3.textContent = "Vision";

let nav4 = navbar[3];
nav4.textContent = "Features";

let nav5 = navbar[4];
nav5.textContent = "About";

let nav6 = navbar[5];
nav6.textContent = "Contact";

let ctaText = document.querySelector('h1');


ctaText.innerHTML = 'Dom <br/> Is <br/> Awesome';

let ctaButton = document.querySelector('button');
ctaButton.textContent = "Get Started";

let ctaImg = document.querySelector('#cta-img');
ctaImg.src = 'img/header-img.png';

let topContent = document.querySelectorAll('.top-content h4');
let topContentp = document.querySelectorAll('.top-content p');

let features1 = topContent[0];
features1.textContent = "Features";

let features2 = topContentp[0];
features2.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let about1 = topContent[1];
about1.textContent = "About";

let about2 = topContentp[1];
about2.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let middleImg = document.querySelector('#middle-img');
middleImg.src = ('img/mid-page-accent.jpg');

let botContent = document.querySelectorAll('.bottom-content h4');
let botContentp = document.querySelectorAll('.bottom-content p');

let services1 = botContent[0];
services1.textContent = "Services"

let services2 = botContentp[0];
services2.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let product1 = botContent[1];
product1.textContent = "Product"

let product2 = botContentp[1];
product2.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let vision1 = botContent[2];
vision1.textContent = "Vision";

let vision2 = botContentp[2];
vision2.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let contact1 = document.querySelector('.contact h4');
contact1.textContent = "Contact";

let contacts = document.querySelectorAll('.contact p');

let contact2 = contacts[0];
contact2.innerHTML = '123 Way 456 Street <br/> Somewhere, USA';

let contact3 = contacts[1];
contact3.textContent = "1 (888) 888-8888";

let contact4 = contacts[2];
contact4.textContent = "sales@greatidea.io";

let footer1 = document.querySelector('footer');
footer1.textContent = "Copyright Great Idea! 2018";



let newNav1 = document.createElement('a');
newNav1.textContent = 'Mission Statement';

let newNav2 = document.createElement('a');
newNav2.textContent = 'Our Team';

let parentNav = document.querySelector('nav');
parentNav.append(newNav1);
parentNav.append(newNav2);

let navColor = document.querySelectorAll('a');
navColor.forEach(text => {
    text.style.color = 'green';
})

let navBackground = document.querySelector('header');
navBackground.style.backgroundColor = 'lightblue';

let footerBackground = document.querySelector('footer')
footerBackground.style.backgroundColor = 'lightgreen';