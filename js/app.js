// const app = document.createElement('div');
// app.id = "app";
// document.body.appendChild(app);
// for (let i = 0; i < 8; i++) {
//     const card = document.createElement('div');
//     app.appendChild(card);
//     card.style.width="10rem";
//     card.style.height="10rem";
//     card.classList.add("blue");
// }
// // const cards = document.querySelectorAll('div');
// // for (const e of cards) {
// //     // e.style.display="flex";
// //     // e.style.justifyContent="space-around";
// //     e.addEventListener('click', ()=>{
// //         e.classList.toggle('green')
// //         // if (e.classList.contains="blue") {
// //         //     e.classList.add="green";
// //         //     e.classList.remove="blue";
// //         // }
// //         // else if(e.classList.contains="green"){
// //         //     e.classList.add("red");
// //         //     e.classList.remove("green");
// //         // }
// //     })
  
// // }

// const block = document.querySelectorAll('.blue')

// for (let i = 0; i < cards.length; i++) {
//     block[i].addEventListener('click', () => {
//         block[i].classList.toggle('green')
//     })
// }


const block = document.querySelectorAll('.block')
const selected = document.querySelector('.select-cards');
let count = 0+++
;

for (let i = 0; i < block.length; i++) {
    block[i].addEventListener('click', () => {
        block[i].classList.toggle('toggle');
        if (block[i].classList.contains('toggle')) {
            selected.textContent=count++;
        }
        else{
            selected.textContent=count--;
        }
    })

}