const email = document.querySelector("#email");
const pw = document.querySelector("#pw");
const form = document.getElementById("right-form");

form.addEventListener('submit', function (e) {
    e.preventDefault(); 
});

const isRequired = value => value ===''? true : false ;
const isBetween = (lenght,min,max) => lenght <= max && lenght >= min ? true:false;
const isEmailValid = email => {
    const pattern = '^([a-zA-Z0-9_-]+@[a-zA-Z]+\.[a-zA-Z]{1,36})*';
}