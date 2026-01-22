// efek scroll navbar
window.addEventListener("scroll", () => {
    document.querySelector(".navbar")
        .classList.toggle("shadow", window.scrollY > 50);
});
