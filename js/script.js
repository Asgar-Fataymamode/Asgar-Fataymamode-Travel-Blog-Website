document.addEventListener("DOMContentLoaded", function() {
    const tipSections = document.querySelectorAll('.tip-section');

    tipSections.forEach(section => {
        section.addEventListener('click', function() {
            // Toggle the active class on the clicked section
            this.classList.toggle('active');

            // Find the tip content and toggle its visibility
            const content = this.querySelector('.tip-content');

            if (content.style.maxHeight) {
                // If the section is expanded, collapse it
                content.style.maxHeight = null;
            } else {
                // Expand the section
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});







document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.map-toggle');

    buttons.forEach(button => {
        // Store the original text content for later use
        const originalText = button.textContent;

        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const mapContainer = document.getElementById(targetId);

            // Toggle the visibility of the map container
            if (mapContainer.style.display === "none" || mapContainer.style.display === "") {
                mapContainer.style.display = "block";
                this.textContent = "Hide Map";
            } else {
                mapContainer.style.display = "none";
                this.textContent = originalText; // Revert to the original button text
            }
        });
    });
});












//for the contact section
const form=document.querySelector("form");
const fullName=document.getElementById("name");
const email=document.getElementById("email");
const phone=document.getElementById("phone");
const subject=document.getElementById("subject");
const message=document.getElementById("message");


function sendEmail(){

    const bodyMessage=`Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Subject: ${subject.value}<br> Message: ${message.value}<br>`;


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "asgarfataymamode@gmail.com",
        Password : "0D43BFF7D84CBAF045763673D9A2207542BD",
        To : 'asgarfataymamode@gmail.com',
        From : "asgarfataymamode@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => 
      {
        if (message=="OK"){
            Swal.fire({
                title: "Message sent!",
                text: "Thank you!",
                icon: "success"
              });
            form.reset();
        }
      }
    );
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
})






document.querySelectorAll('.country').forEach(countrySection => {
    const carousel = countrySection.querySelector('.carousel');
    const images = countrySection.querySelectorAll('.carousel-image');
    const prevButton = countrySection.querySelector('.carousel-prev');
    const nextButton = countrySection.querySelector('.carousel-next');

    let currentIndex = 1;
    const totalImages = images.length;

    if (totalImages === 0) return; // Skip if no images

    // Clone first and last images
    const firstClone = images[0].cloneNode(true);
    const lastClone = images[images.length - 1].cloneNode(true);

    firstClone.classList.add('clone');
    lastClone.classList.add('clone');

    carousel.appendChild(firstClone);
    carousel.insertBefore(lastClone, images[0]);

    carousel.style.transform = `translateX(-${100 * currentIndex}%)`;

    function updateCarousel() {
        carousel.style.transition = 'transform 0.5s ease-in-out';
        carousel.style.transform = `translateX(-${100 * currentIndex}%)`;

        if (currentIndex === totalImages + 1) {
            setTimeout(() => {
                carousel.style.transition = 'none';
                currentIndex = 1;
                carousel.style.transform = `translateX(-${100 * currentIndex}%)`;
            }, 500);
        } else if (currentIndex === 0) {
            setTimeout(() => {
                carousel.style.transition = 'none';
                currentIndex = totalImages;
                carousel.style.transform = `translateX(-${100 * currentIndex}%)`;
            }, 500);
        }
    }

    prevButton.addEventListener('click', () => {
        currentIndex--;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex++;
        updateCarousel();
    });

    updateCarousel(); // Initial setup
});















document.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section.content-section");
    const navLinks = document.querySelectorAll(".navbar a");

    let currentSectionId = '';

    // Get the current scroll position
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        // Check if the current scroll position is within the section boundaries
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSectionId = section.getAttribute("id");
        }
    });

    // Remove active class from all nav links
    navLinks.forEach(link => {
        link.classList.remove("active");
    });

    // Add active class to the corresponding nav link
    if (currentSectionId) {
        const activeLink = document.querySelector(`.navbar a[href="#${currentSectionId}"]`);
        if (activeLink) {
            activeLink.classList.add("active");
        }
    }
});









let answers = {};

function startQuiz() {
    document.getElementById('start-quiz-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('question1').classList.add('active');
}

function selectAnswer(questionNumber, answer) {
    
    answers[questionNumber] = answer;


    document.getElementById(`question${questionNumber}`).classList.remove('active');


    if (questionNumber < 7) {
        document.getElementById(`question${questionNumber + 1}`).classList.add('active');
    } else {
        calculateResult();
    }
}

function calculateResult() {

    let score = {
        UAE: 0,
        Malaysia: 0,
        Singapore: 0,
        China: 0,
        Saudi: 0,
        Turkey: 0,
        Italy: 0,
        Vatican: 0,
        Georgia: 0,
        France: 0,
        Switzerland: 0,
        Spain: 0,
        Belgium: 0,
        Iceland: 0,
        Austria: 0,
        Hungary: 0,
        Liechtenstein: 0,
        UK: 0,
        Germany: 0,
        Poland: 0,
        Czech: 0,
        Rodrigues: 0
    };


    if (answers[1] === 'A') { score.UAE += 2; score.Saudi += 2; }
    else if (answers[1] === 'B') { score.Malaysia += 2; score.Rodrigues += 2; score.Singapore += 2; }
    else if (answers[1] === 'C') { score.Iceland += 2; score.Switzerland += 2; score.Georgia += 2; }
    else if (answers[1] === 'D') { score.UK += 2; score.France += 2; score.Germany += 2; }

    if (answers[2] === 'A') { score.Malaysia += 2; score.Rodrigues += 2; score.UAE += 2; }
    else if (answers[2] === 'B') { score.China += 2; score.Vatican += 2; score.Turkey += 2; }
    else if (answers[2] === 'C') { score.Iceland += 2; score.Switzerland += 2; score.Austria += 2; }
    else if (answers[2] === 'D') { score.France += 2; score.Germany += 2; score.UK += 2; }

    if (answers[3] === 'A') { score.Italy += 3; score.Turkey += 3; score.France += 3; }
    else if (answers[3] === 'B') { score.Spain += 2; score.Belgium += 2; score.Poland += 2; }
    else if (answers[3] === 'C') { score.UK += 2; score.Austria += 2; score.Saudi += 2; }
    else if (answers[3] === 'D') { score.Rodrigues += 2; score.Singapore += 2; score.Malaysia += 2; }

    if (answers[4] === 'A') { score.Iceland += 2; score.Liechtenstein += 2; }
    else if (answers[4] === 'B') { score.Czech += 2; score.Poland += 2; score.Switzerland += 2; }
    else if (answers[4] === 'C') { score.Turkey += 2; score.UAE += 2; score.Malaysia += 2; }
    else if (answers[4] === 'D') { score.Georgia += 2; score.Hungary += 2; score.China += 2; }

    if (answers[5] === 'A') { score.Malaysia += 2; score.Rodrigues += 2; score.UAE += 2; }
    else if (answers[5] === 'B') { score.France += 2; score.Singapore += 2; score.UK += 2; }
    else if (answers[5] === 'C') { score.Switzerland += 2; score.Austria += 2; score.Georgia += 2; }
    else if (answers[5] === 'D') { score.Saudi += 2; score.UAE += 2; score.Turkey += 2; }

    if (answers[6] === 'A') { score.China += 2; score.Turkey += 2; }
    else if (answers[6] === 'B') { score.Georgia += 2; score.Czech += 2; score.Austria += 2; }
    else if (answers[6] === 'C') { score.UK += 2; score.Switzerland += 2; score.Germany += 2; }
    else if (answers[6] === 'D') { score.Malaysia += 2; score.Rodrigues += 2; score.UAE += 2; }

    if (answers[7] === 'A') { score.UAE += 2; score.Saudi += 2; score.Switzerland += 2; }
    else if (answers[7] === 'B') { score.Italy += 2; score.France += 2; score.Turkey += 2; }
    else if (answers[7] === 'C') { score.Hungary += 2; score.Georgia += 2; score.Poland += 2; }
    else if (answers[7] === 'D') { score.Liechtenstein += 2; score.Czech += 2; }

    const highestScore = Object.keys(score).reduce((a, b) => score[a] > score[b] ? a : b);

    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    document.getElementById('result-text').innerHTML = `<strong>${highestScore}</strong>!`;
}

function restartQuiz() {

    answers = {};
    document.getElementById('result').style.display = 'none';


    document.querySelectorAll('.flashcard').forEach(card => card.classList.remove('active'));


    document.getElementById('question1').classList.add('active');
    document.getElementById('quiz-container').style.display = 'block';
}





document.addEventListener("DOMContentLoaded", function() {
    const phrases = ["Exploring the world, one country at a time"];
    let i = 0;
    let j = 0;
    let currentPhrase = [];
    let isDeleting = false;
    let typingSpeed = 100; // Speed of typing
    let deletingSpeed = 30; // Speed of deleting, make this smaller for faster deletion

    function type() {
        let element = document.getElementById("typing");
        let cursorSpan = document.createElement('span');
        cursorSpan.className = 'typing-cursor';
        cursorSpan.innerHTML = '|';

        if (i < phrases.length) {
            if (!isDeleting && j <= phrases[i].length) {
                currentPhrase.push(phrases[i][j]);
                j++;
                element.innerHTML = currentPhrase.join('') + cursorSpan.outerHTML;
                setTimeout(type, typingSpeed); // Typing speed
            }

            if (isDeleting && j <= phrases[i].length) {
                currentPhrase.pop(phrases[i][j]);
                j--;
                element.innerHTML = currentPhrase.join('') + cursorSpan.outerHTML;
                setTimeout(type, deletingSpeed); // Deleting speed
            }

            if (j == phrases[i].length) {
                isDeleting = true;
            }

            if (isDeleting && j === 0) {
                currentPhrase = [];
                isDeleting = false;
                i++;
                if (i == phrases.length) {
                    i = 0;
                }
            }
        } else {
            if (!isDeleting) {
                setTimeout(type, typingSpeed);
            }
        }
    }

    type();
});




function toggleNavbar() {
    var navbarRight = document.getElementById("navbar-right");
    var navbarList = navbarRight.querySelector("ul");
    var hamburger = document.querySelector(".hamburger");
    var closeIcon = navbarRight.querySelector(".close-icon");

    navbarList.classList.toggle("show");
    navbarRight.classList.toggle("show");
    hamburger.classList.toggle("show");
    closeIcon.classList.toggle("show");
}


document.querySelectorAll('.navbar-right ul li a').forEach(function(link) {
    link.addEventListener('click', function() {
        var navbarRight = document.getElementById("navbar-right");
        var navbarList = navbarRight.querySelector("ul");
        var hamburger = document.querySelector(".hamburger");
        var closeIcon = navbarRight.querySelector(".close-icon");

        navbarList.classList.remove("show");
        navbarRight.classList.remove("show");
        hamburger.classList.remove("show");
        closeIcon.classList.remove("show");
    });
});





document.addEventListener("DOMContentLoaded", function () {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const sections = document.querySelectorAll('#about-me, #countries, #tips, #quiz, #contact');

    sections.forEach(section => {
        section.style.paddingTop = `${navbarHeight}px`;
        section.style.marginTop = `-${navbarHeight}px`;
    });
});



