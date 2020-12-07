// document.body.addEventListener("click", handleClick);
// function handleClick(event){
//     if (event.target.innerHTML === "Dark Theme"){
//         document.body.classList.toggle("dark");
//         // document.getElementById("button").style.background='#494342';
//     }
// }
let btnNote = document.querySelector('.but1');
let btnDark = document.querySelector('.but2');
let btnSave = document.querySelector('.but3');
let btnCancel = document.querySelector('.but4');
let textarea = document.querySelector('.main');
let notearea = document.querySelector('.aside');
let textbox = document.querySelector('.flex-mid');

btnDark.addEventListener('click', () => btnNote.style.backgroundColor="#494342")
btnDark.addEventListener('click', () => btnSave.style.backgroundColor="#494342")
btnDark.addEventListener('click', () => btnCancel.style.backgroundColor="#494342")
btnDark.addEventListener('click', () => textarea.style.backgroundColor="#494342")
btnDark.addEventListener('click', () => notearea.style.backgroundColor="#494342")
btnDark.addEventListener('click', () => btnDark.style.backgroundColor="#494342")

btnCancel.addEventListener('click', () => textbox.style.display ='none');
btnCancel.addEventListener('click', () => btnCancel.style.display ='none');
btnCancel.addEventListener('click', () => btnSave.style.display ='none');

let inputs = document.querySelectorAll('textarea');
btnNote.addEventListener('click', () => {
    inputs.forEach(textarea => textarea.value = '');
});
