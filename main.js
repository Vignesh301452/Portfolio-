/=========================== toggle icon navbar ===========================/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/=========================== scroll section active link ===========================/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /=========================== sticky navbar ===========================/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 150);

    /=========================== remove toggle icon and navbar ===========================/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}

var mixer = mixitup('.project-container');

/=========================== scroll reveal ===========================/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});


ScrollReveal().reveal('.home-content, heading, .home-img, ', { origin: 'top' });
ScrollReveal().reveal('.projects-box,', { origin: 'buttom' });
ScrollReveal().reveal('.home-content, .services-container, .project-container', { origin: 'left' });
ScrollReveal().reveal('.skills-content, .skills-row, .contact-container, .about-content', { origin: 'right' });

/=========================== home animation ===========================/
const typed = new Typed('.multiple-text', {
    strings: ['Developer', 'UI/UX Designer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

/=========================== Read more ===========================/
function toggleText() {
    var moreText = document.querySelector('.more-text');
    if (moreText.style.display === 'none') {
      moreText.style.display = 'inline';
    } else {
      moreText.style.display = 'none';
    }
  }

/=========================== Contact submitted ===========================/
function myFunction() {
    alert("Submitted");
}
