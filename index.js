const audio = document.getElementById('bg-music');
const toggle = document.getElementById('soundToggle');
let isPlaying = false;

toggle.addEventListener('click', () => {
    if (!isPlaying) {
        audio.play();
        toggle.innerHTML = '<i class="ti ti-volume"></i>';
    } else {
        audio.pause();
        toggle.innerHTML = '<i class="ti ti-volume-3"></i>';
    }
    isPlaying = !isPlaying;
});
const heading1 = document.querySelector('.home h1:nth-of-type(1)');
const heading2 = document.querySelector('.home h1:nth-of-type(2)');
const greeting = document.querySelector('.greeting');
const quote = document.querySelector('.home-quote p');

function playHomeAnimation() {

    [heading1, heading2, greeting, quote].forEach(el => {
        el.classList.remove('play-right', 'play-right-delay', 'play-rise', 'play-left');
        void el.offsetWidth;
    });

    heading1.classList.add('play-right');
    heading2.classList.add('play-right-delay');
    greeting.classList.add('play-rise');
    quote.classList.add('play-left');
}


window.addEventListener('DOMContentLoaded', playHomeAnimation);


document.querySelectorAll('a[href="#home"]').forEach(link => {
    link.addEventListener('click', playHomeAnimation);
});


const homeSection = document.querySelector('#home');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            playHomeAnimation();
        }
    });
}, { threshold: 0.6 });

observer.observe(homeSection);

const translations = {
    translate1: {
        englishTitle: "Museum Concept",
        khmerTitle: "គំនិតសារមន្ទីរ",
        english: `A modern cultural museum combining traditional Khmer architectural elements with contemporary design and technology — built to preserve and introduce Khmer culture, history, art, and heritage to Cambodian and international visitors alike.`,
        khmer: `សារមន្ទីរវប្បធម៌ទំនើបមួយ ដែលរួមបញ្ចូល ធាតុស្ថាបត្យកម្មខ្មែរប្រពៃណី ជាមួយនឹង ការរចនា និងបច្ចេកវិទ្យាទំនើប។ សារមន្ទីរនេះត្រូវបានបង្កើតឡើងក្នុងគោលបំណង អភិរក្ស និងណែនាំវប្បធម៌ ប្រវត្តិសាស្ត្រ សិល្បៈ និងមរតកខ្មែរ ដល់ភ្ញៀវទេសចរជាតិ និងអន្តរជាតិ។`
    },

    translate2: {
        englishTitle: "Ganesha",
        khmerTitle: "ព្រះគណេស",
        english: `The museum's central cultural attraction, representing wisdom, knowledge, creativity, and prosperity. Visitors explore its history, symbolism, and artistic representations through sculptures, information displays, and curated exhibitions.`,
        khmer: `ព្រះគណេសគឺជា វត្ថុទាក់ទាញផ្នែកវប្បធម៌ដ៏សំខាន់របស់សារមន្ទីរ ដែលតំណាងឱ្យ ប្រាជ្ញា ចំណេះដឹង ភាពច្នៃប្រឌិត និងភាពរុងរឿង។ អ្នកទស្សនាអាចស្វែងយល់អំពីប្រវត្តិ អត្ថន័យ និងនិមិត្តសញ្ញារបស់ព្រះគណេស តាមរយៈ រូបចម្លាក់ ផ្ទាំងព័ត៌មាន និងការតាំងពិព័រណ៍ដែលបានរៀបចំយ៉ាងយកចិត្តទុកដាក់។`
    },

    translate3: {
        englishTitle: "Khmer Architectural Building",
        khmerTitle: "អគារស្ថាបត្យកម្មខ្មែរ",
        english: `A space built with Khmer-inspired decorations and architectural details, home to a coffee shop, souvenir shop, and local handicraft stores — sculptures, postcards, books, and Cambodian products for visitors to take home.`,
        khmer: `ជាអគារដែលតុបតែង និងរចនាឡើងដោយប្រើ លំនាំ និងព័ត៌មានលម្អិតតាមបែបស្ថាបត្យកម្មខ្មែរ។ អគារនេះមាន ហាងកាហ្វេ ហាងលក់វត្ថុអនុស្សាវរីយ៍ និងហាងលក់សិប្បកម្មក្នុងស្រុក ដែលមានដូចជា រូបចម្លាក់ កាតប៉ុស្តាល់ សៀវភៅ និងផលិតផលខ្មែរ សម្រាប់អ្នកទស្សនាទិញយកទៅជាអនុស្សាវរីយ៍។`
    },

    translate4: {
        englishTitle: "Exhibition Galleries",
        khmerTitle: "វិចិត្រសាលតាំងពិព័រណ៍",
        english: `Curved and circular exhibition spaces displaying ancient artifacts, Khmer sculptures, traditional artworks, Ganesha sculptures, and modern interpretations of Khmer art.`,
        khmer: `សាលតាំងពិព័រណ៍ដែលមានរាងកោង និងរាងមូល ត្រូវបានរៀបចំសម្រាប់ដាក់តាំង វត្ថុបុរាណ រូបចម្លាក់ខ្មែរ ស្នាដៃសិល្បៈប្រពៃណី រូបចម្លាក់ព្រះគណេស និងស្នាដៃសិល្បៈខ្មែរបែបទំនើប។ ទីកន្លែងនេះផ្តល់ឱ្យអ្នកទស្សនានូវបទពិសោធន៍ស្វែងយល់អំពីសិល្បៈ និងមរតកខ្មែរ តាមរយៈការរចនាបែបទំនើប និងអន្តរកម្ម។`
    },

    translate5: {
        englishTitle: "Garden & Outdoor Area",
        khmerTitle: "សួនច្បារ និងតំបន់ខាងក្រៅ",
        english: `Green spaces, trees, walking paths, and outdoor sculptures create a peaceful environment — a place to relax after exploring the exhibitions, anchored by a landmark sculpture in the central garden.`,
        khmer: `តំបន់បៃតងដែលមាន ដើមឈើ ផ្លូវដើរ និងរូបចម្លាក់ខាងក្រៅ បង្កើតបរិយាកាសស្ងប់ស្ងាត់ និងស្រស់ស្រាយ។ វាជាកន្លែងសម្រាប់អ្នកទស្សនា សម្រាក និងរីករាយជាមួយបរិយាកាស បន្ទាប់ពីទស្សនាសាលតាំងពិព័រណ៍។ សួនច្បារកណ្ដាលមាន រូបចម្លាក់សំខាន់មួយ ដែលក្លាយជាចំណុចសម្គាល់ដ៏ទាក់ទាញរបស់សារមន្ទីរ។`
    },

    translate6: {
        englishTitle: "Technology & Security",
        khmerTitle: "បច្ចេកវិទ្យា និងសុវត្ថិភាព",
        english: `PIR motion sensors protect valuable artifacts — detecting unusual movement in restricted exhibition areas and alerting museum staff in real time, blending technology with cultural preservation.`,
        khmer: `ប្រព័ន្ធ ឧបករណ៍ចាប់សញ្ញាចលនា PIR (PIR Motion Sensors) ត្រូវបានប្រើប្រាស់ដើម្បីការពារវត្ថុបុរាណ និងវត្ថុមានតម្លៃ។ ឧបករណ៍នេះអាច រកឃើញចលនាមិនប្រក្រតីនៅក្នុងតំបន់តាំងពិព័រណ៍ដែលមានការកំណត់ការចូល និងផ្ញើការជូនដំណឹងទៅកាន់បុគ្គលិកសារមន្ទីរភ្លាមៗ។ វាជាការរួមបញ្ចូលគ្នារវាង បច្ចេកវិទ្យាទំនើប និងការអភិរក្សវប្បធម៌ ដើម្បីធានាសុវត្ថិភាពដល់មរតកខ្មែរ។`
    }
};

Object.keys(translations).forEach(function (buttonId) {

    const button = document.getElementById(buttonId);
    if (!button) return;

    button.onclick = function () {

        const card = button.closest(".info-card");
        const title = card.querySelector("h3");
        const text = card.querySelector("p");

        if (button.textContent === "Khmer") {

            title.textContent = translations[buttonId].khmerTitle;
            text.textContent = translations[buttonId].khmer;

            title.classList.add("khmer-title");
            text.classList.add("khmer-text");

            button.textContent = "English";

        } else {

            title.textContent = translations[buttonId].englishTitle;
            text.textContent = translations[buttonId].english;

            title.classList.remove("khmer-title");
            text.classList.remove("khmer-text");

            button.textContent = "Khmer";
        }

    };

});

const footerYear = document.getElementById('footer-year');
if (footerYear) footerYear.textContent = new Date().getFullYear();


const securityImages = [
    "sensor1.jpg",
    "sensor2.jpg",
    "sensor3.jpg"
];

const securityImage = document.getElementById("threeimg5");

const securitySlider = securityImage?.parentElement;

const previousButton = securitySlider?.querySelector(".prev");
const nextButton = securitySlider?.querySelector(".next");

let securityCurrentImage = 0;

function showSecurityImage() {

    if (!securityImage) return;

    securityImage.style.backgroundImage =
        `url("${securityImages[securityCurrentImage]}")`;

}



if (previousButton) {

    previousButton.addEventListener("click", () => {

        securityCurrentImage--;

        if (securityCurrentImage < 0) {
            securityCurrentImage = securityImages.length - 1;
        }

        showSecurityImage();

    });

}



if (nextButton) {

    nextButton.addEventListener("click", () => {

        securityCurrentImage++;

        if (securityCurrentImage >= securityImages.length) {
            securityCurrentImage = 0;
        }

        showSecurityImage();

    });

}


showSecurityImage();