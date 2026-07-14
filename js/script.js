const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "rgba(15,23,42,.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    }else{

        header.style.background = "rgba(15,23,42,.75)";
        header.style.boxShadow = "none";

    }

});

const sections = document.querySelectorAll("section");

const reveal = () =>{

    const trigger = window.innerHeight * 0.85;

    sections.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top < trigger){

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.classList.add("top-button");

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        topButton.classList.add("active");

    }else{

        topButton.classList.remove("active");

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

const counters = document.querySelectorAll(".counter");

const animateCounter = (counter) => {

    const target = Number(counter.dataset.target);

    let current = 0;

    const increment = Math.ceil(target / 50);

    const update = () => {

        current += increment;

        if (current >= target) {

            counter.textContent = target + "+";

        } else {

            counter.textContent = current;

            requestAnimationFrame(update);

        }

    };

    update();

};

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            animateCounter(entry.target);

            observer.unobserve(entry.target);

        }

    });

});

counters.forEach(counter => observer.observe(counter));

const light = document.createElement("div");

light.classList.add("mouse-light");

document.body.appendChild(light);

window.addEventListener("mousemove",(e)=>{

    light.style.left = e.clientX + "px";

    light.style.top = e.clientY + "px";

});

const menuButton = document.getElementById("menu-button");

const menu = document.getElementById("menu");

menuButton.addEventListener("click",()=>{

    menu.classList.toggle("active");

});