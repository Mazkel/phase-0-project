const h2 = document.createElement('h2');
h2.id="h2";
h2.textContent = "This content added by Javascript";
document.querySelector("body").appendChild(h2);

document.querySelector('h1').insertAdjacentElement("afterend", h2,)

const originalColor = h2.style.color || "white";

h2.addEventListener("click", function() {
    if (h2.style.color === "chartreuse") {
        h2.style.color = originalColor;
    } else {
        h2.style.color = "chartreuse";
    }  
});

const container = document.querySelector('.container')
const p = document.createElement('p')
p.className= "p"
p.textContent = "Hi, im Silongo and this is my personal website. I've learned HTML, CSS, and JS, and I'm also using DOM to create this sentence."
container.appendChild(p)

const h3 = container.querySelector('#bio')
h3.insertAdjacentElement("afterend", p)