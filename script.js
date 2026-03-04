const stickyBar = document.getElementById("stickyBar");
const mainHeader = document.getElementById("mainHeader");

window.addEventListener("scroll", () => {

    if (window.scrollY > window.innerHeight * 0.6) {
        stickyBar.classList.add("show");
        mainHeader.classList.add("shifted");
    } else {
        stickyBar.classList.remove("show");
        mainHeader.classList.remove("shifted");
    }

});

const faqItems = document.querySelectorAll(".faq-question");

faqItems.forEach(item => {
    item.addEventListener("click", () => {
        const parent = item.parentElement;

        document.querySelectorAll(".faq-item").forEach(faq => {
            faq.classList.remove("active");
        });

        parent.classList.add("active");
    });
});




const slider = document.getElementById("appSlider");
const nextBtn = document.getElementById("appNext");
const prevBtn = document.getElementById("appPrev");

nextBtn.addEventListener("click", () => {
    slider.scrollBy({
        left: 320,
        behavior: "smooth"
    });
});

prevBtn.addEventListener("click", () => {
    slider.scrollBy({
        left: -320,
        behavior: "smooth"
    });
});

// Image Slider
const images = [
    "https://images.unsplash.com/photo-1581092334516-5d7c94b1d5a1",
    "https://images.unsplash.com/photo-1581091870627-3b5de42c04b6",
    "https://images.unsplash.com/photo-1509395176047-4a66953fd231"
];

let currentIndex = 0;
const processImg = document.getElementById("processImg");

document.getElementById("procNext").onclick = () => {
    currentIndex = (currentIndex + 1) % images.length;
    processImg.src = images[currentIndex];
};

document.getElementById("procPrev").onclick = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    processImg.src = images[currentIndex];
};

// Tabs
const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelector(".tab.active").classList.remove("active");
        tab.classList.add("active");
    });
});


const container = document.querySelector(".zoom-container");
const image = document.querySelector(".main-image");

container.addEventListener("mousemove", function (e) {

    const rect = container.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width * 100;
    const y = (e.clientY - rect.top) / rect.height * 100;

    image.style.transformOrigin = `${x}% ${y}%`;
    image.style.transform = "scale(2)";
});

container.addEventListener("mouseleave", function () {
    image.style.transform = "scale(1)";
});