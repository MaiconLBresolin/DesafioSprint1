const $ = document.querySelector.bind(document);
const form = $(".card"); 
const sucessform = $(".pagetwo");
const button = $(".button");
const goback = $("#gobackbutton")

const submit = (x) => {
	x.preventDefault()
	form.style.display = "none"
	sucessform.style.display = "flex"
} 

const submitgoback = () => {
	form.style.display = "flex"
	sucessform.style.display = "none"
} 

button.addEventListener("click", submit)
goback.addEventListener("click", submitgoback)
