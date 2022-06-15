const numbers = document.querySelectorAll("li");
const show = document.querySelectorAll(".show");
const hide = document.querySelectorAll(".hide");
console.log(numbers);

function hideItems(){
    hide.forEach(x=>{
        x.classList.remove("hide");
    })
}

function showItems(){
    show.forEach(x=>{
        x.classList.add("hide");
    })
    document.getElementById("message").innerText=`You selected ${this.textContent} out of 5`;
}

numbers.forEach(number =>{
    number.addEventListener("click",showItems);
    number.addEventListener("click",hideItems);
})