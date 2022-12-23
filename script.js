function submit(event) {
    event.preventDefault();
    let fName = document.querySelector('[name="fname"]');
    console.log(`Imie: ${fName.value}`);
    let lName = document.querySelector('[name="lname"]');
    console.log(`Nazwisko: ${lName.value}`);
}

let form = document.getElementById('form');

form.addEventListener('submit', submit);