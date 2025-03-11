const h2 = document.createElement('h2');
h2.id="h2";
h2.textContent = "This content added by Javascript";
document.querySelector("body").appendChild(h2);

const originalColor = h2.style.color || "white";

h2.addEventListener("click", function() {
    if (h2.style.color === "chartreuse") {
        h2.style.color = originalColor;
    } else {
        h2.style.color = "chartreuse";
    }  
});