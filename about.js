console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form successfully submitted!');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function picMouseover() {
	alert('You da best!')
}

let rubberDuck = document.querySelector('img');
rubberDuck.addEventListener('mouseover', picMouseover);