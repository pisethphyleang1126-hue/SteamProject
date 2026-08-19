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


const CUSTOMERS_KEY = 'museumCustomers'; 
const SESSION_KEY = 'museumCurrentUser';   



function getCustomers() {
    try {
        const data = localStorage.getItem(CUSTOMERS_KEY);
        return data ? JSON.parse(data) : [];
    } catch (err) {
        console.error('Could not read customers from storage:', err);
        return [];
    }
}

function saveCustomers(customers) {
    try {
        localStorage.setItem(CUSTOMERS_KEY, JSON.stringify(customers));
    } catch (err) {
        console.error('Could not save customers to storage:', err);
    }
}

function findCustomerByEmail(email) {
    return getCustomers().find(c => c.email.toLowerCase() === email.toLowerCase());
}

function setSession(email) {
    localStorage.setItem(SESSION_KEY, email);
}

function clearSession() {
    localStorage.removeItem(SESSION_KEY);
}

function getSessionEmail() {
    return localStorage.getItem(SESSION_KEY);
}


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

    const email = document.getElementById('siEmail').value.trim();
    const password = document.getElementById('siPassword').value;

    const existing = findCustomerByEmail(email);

    if (!existing) {
        alert("No account found with that email. Please sign up first.");
        return;
    }

    if (existing.password !== password) {
        alert("Incorrect password. Please try again.");
        return;
    }

    setSession(existing.email);
    showProfile(existing.name, existing.email);
    signinForm.reset();
});



signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('suName').value.trim();
    const email = document.getElementById('suEmail').value.trim();
    const password = document.getElementById('suPassword').value;

    if (findCustomerByEmail(email)) {
        alert("An account with that email already exists. Please sign in instead.");
        return;
    }

    const customers = getCustomers();
    customers.push({ name, email, password });
    saveCustomers(customers);

    setSession(email);
    showProfile(name, email);
    signupForm.reset();
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

function showAuthForms() {
    profileView.classList.add('hidden');
    document.querySelector('.info').classList.remove('hidden');
    document.querySelector('.account-header').classList.remove('hidden');
    tabs.classList.remove('hidden');
    signinTab.click();
}

document.getElementById('logoutBtn').addEventListener('click', () => {
    clearSession();
    showAuthForms();
});



window.addEventListener('DOMContentLoaded', () => {
    const sessionEmail = getSessionEmail();
    if (!sessionEmail) return;

    const customer = findCustomerByEmail(sessionEmail);
    if (customer) {
        showProfile(customer.name, customer.email);
    } else {
       
        clearSession();
    }
});