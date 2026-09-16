const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const slideshow = $(".slideshow");
const slide = $$(".slide-img");
const control = $(".control");
const btn = $(".btn");
let currentIndex = 0; // lưu chỉ số hiện tại
let oldSlide = slide[currentIndex]; // lưu lại slide cũ
const maxIndex = slide.length - 1; // số lượng slide
const pagination = $(".pagination");

// Khi nhấp vào thì trượt
control.onclick = function (event) {
    // khi control được click thì sẽ phát ra 1 sự kiện . Eventarget lúc này là <i></i> .closet sẽ đi ngược lên tìm phần tử có class là btn

    const ctrBtn = event.target.closest(".btn");
    oldSlide = slide[currentIndex]; // lưu lại slide cũ
    if (ctrBtn.matches(".btn-pre")) {
        if (currentIndex === 0) {
            currentIndex = maxIndex;
        } else {
            currentIndex -= 1;
        }
    } else if (ctrBtn.matches(".btn-next")) {
        if (currentIndex === maxIndex) {
            currentIndex = 0;
        } else {
            currentIndex += 1;
        }
    }
    truot();
};
function truot() {
    const offset = `${currentIndex * -100}%`;
    slideshow.style.translate = offset;
    updatePagination();
}


// 1. Dispatch event khi slide change
slideshow.ontransitionend = function () {
    const event = new CustomEvent("slideshow:change", {
        detail: {
            old: oldSlide,
            current: slide[currentIndex],
        },
    });
    document.dispatchEvent(event);
};
document.addEventListener("slideshow:change", function (event) {
    console.log("slide cũ:", event.detail.old);
    console.log("slide mới:", event.detail.current);
});

// autoPlay
function nextSlide() {
    oldSlide = slide[currentIndex];
    if (currentIndex === maxIndex) {
        currentIndex = 0;
    } else {
        currentIndex += 1;
    }
    truot();
}

let autoPlay = setInterval(nextSlide, 3000);
//   nextSlide();
slideshow.onmouseenter = () => {
    clearInterval(autoPlay); // đừng setInterval đang chạy
};
slideshow.onmouseleave = () => {
    autoPlay = setInterval(nextSlide, 3000); //  hàm có sẵn của JavaScript (Web API) cứ 3s lại gọi nextSlide
};

// Update phan dot
slide.forEach(() => {
    const span = document.createElement("span");
    span.classList.add("dot");
    pagination.appendChild(span);
});
const dots = $$(".dot");

function updatePagination() {
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
    });
}
