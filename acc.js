const signinTab = document.getElementById('signinTab');
const signupTab = document.getElementById('signupTab');
const signinForm = document.getElementById('signinForm');
const signupForm = document.getElementById('signupForm');
const profileView = document.getElementById('profileView');
const tabs = document.querySelector('.tabs');

const infoTitle = document.querySelector('.info h1');
const infoText = document.querySelector('.info p');

const infoContent = {
    signin: {
        title: "Welcome Back!",
        text: "Sign in to explore Khmer heritage<br>and manage your museum tickets."
    },
    signup: {
        title: "Join Harmony",
        text: "Create an account to explore Khmer<br>heritage and book your museum visit."
    }
};

signinTab.addEventListener('click', () => {
    signinTab.classList.add('active');
    signupTab.classList.remove('active');
    signinForm.classList.remove('hidden');
    signupForm.classList.add('hidden');

    infoTitle.textContent = infoContent.signin.title;
    infoText.innerHTML = infoContent.signin.text;
});

signupTab.addEventListener('click', () => {
    signupTab.classList.add('active');
    signinTab.classList.remove('active');
    signupForm.classList.remove('hidden');
    signinForm.classList.add('hidden');

    infoTitle.textContent = infoContent.signup.title;
    infoText.innerHTML = infoContent.signup.text;
});

signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('siEmail').value;
    showProfile(email.split('@')[0], email);
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('suName').value;
    const email = document.getElementById('suEmail').value;
    showProfile(name, email);
});

function showProfile(name, email) {
    document.getElementById('profileName').textContent = name;
    document.getElementById('profileEmail').textContent = email;

    document.querySelector('.info').classList.add('hidden');
    document.querySelector('.account-header').classList.add('hidden');
    tabs.classList.add('hidden');
    signinForm.classList.add('hidden');
    signupForm.classList.add('hidden');
    profileView.classList.remove('hidden');
}

document.getElementById('logoutBtn').addEventListener('click', () => {
    profileView.classList.add('hidden');
    document.querySelector('.info').classList.remove('hidden');
    document.querySelector('.account-header').classList.remove('hidden');
    tabs.classList.remove('hidden');
    signinTab.click();
});