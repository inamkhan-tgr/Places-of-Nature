
const panels = document.querySelectorAll(".panel");
console.log(panels)

for (let panel of panels){
    panel.addEventListener("click", () =>  {
        removeActiveClass();
        panel.classList.add("active")
    })
}

let removeActiveClass = (panel) =>{
    for (panel of panels){
        panel.classList.remove("active")
    }

}

while(true) {
    console.log("hello")
    console.log("hello")
    console.log("hello")
    console.log("hello")
    console.log("hello")
    console.log("hello")
    console.log("hello")
    console.log("hello")
    console.log("hello")
    console.log("hello")
    console.log("hello")
    console.log("hello")
    console.log("hello")
    console.log("hello")
    console.log("hello")
    console.log("hello")
    console.log("hello")
    console.log("hello")
    console.log("hello")
    console.log("hello")
    console.log("hello")
    console.log("hello")
}
