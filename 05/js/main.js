let input = document.querySelector("input")
let btn = document.querySelector("button");

// elTextContent h2
let elMan = document.querySelector(".m-hour")
let elBike = document.querySelector(".b-hour")
let elCar = document.querySelector(".c-hour")
let elPlane = document.querySelector(".p-hour")

btn.addEventListener("click", () => {
    let man = input.value / 4;
    let bike = input.value / 20;
    let car = input.value / 100;
    let plane = (input.value / 800) > 1 ? input.value / 800  :  input.value / 800 * 60;

    elMan.textContent = man;
    elBike.textContent = bike;
    elCar.textContent = car;
    elPlane.textContent = plane; 
})


// input.addEventListener("keypress", (e) => {
//     if(e.key === 'Enter') {
//         input.value = 
//         console.log(e.key);
//     }
// })