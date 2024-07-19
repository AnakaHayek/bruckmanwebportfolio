let phoneHandler = () => {
    document.getElementById('contactInfo').style.display = 'block';
    document.querySelector('p').innerHTML = 'Stranger danger! Try again!';
};

let emailHandler = () => {
    document.getElementById('contactInfo').style.display = 'block';
    document.querySelector('p').innerHTML = 'Reach out to me at haileybruckman@gmail.com!';
};

let faxHandler = () => {
    document.getElementById('contactInfo').style.display = 'block';
    document.querySelector('p').innerHTML = 'Fax is unavailable at this time. Please try again later.';
};

let hideContact = () => {
    document.getElementById('contactInfo').style.display = 'none';
};

document.getElementById('phone').onclick = phoneHandler;

document.getElementById('email').onclick = emailHandler;
   

document.getElementById('fax').onclick = faxHandler;
    

document.getElementById('close').onclick = hideContact;