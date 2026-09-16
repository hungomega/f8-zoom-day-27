const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//tạo 1 danh sách bạn bè để hiển thị ra màn hình
const Players = [
    {
        id: 1,
        name: "Nguyen Van A",
        age: 21,
        job: "Frontend Developer",
        image: "./img/tender1.png",
    },
    {
        id: 2,
        name: "Đặng Ngọc Sơn",
        age: 22,
        job: "Fullstack Developer",
        image: "./img/tender6.webp",
    },
    {
        id: 3,
        name: "Tran Van C",
        age: 23,
        job: "Embedded Developer",
        image: "./img/tender3.png",
    },
    {
        id: 4,
        name: "Nguyễn Văn D",
        age: 24,
        job: "UI/UX Designer",
        image: "./img/tender4.jpg",
    },
    {
        id: 5,
        name: "Nguyễn Hữu Hùng",
        age: 25,
        job: "Fullstack Developer",
        image: "./img/tender5.jpg",
    },
];
const disliked = [];
const liked = []; // quẹt phải thì thêm vào mảng này, quẹt trái thì thêm vào mảng disliked

const list = $(".list");

let touchStartX = 0; // vị trí bắt đầu khi chạm vào màn hình
let isTouching = false;
let currentIndex = Players.length - 1;

list.ontouchstart = function (e) {
    touchStartX = e.touches[0].clientX;
    isTouching = true;
};

list.ontouchmove = function (e) {
    if (!isTouching) return; // nhấc chuột trên đt lên là ngừng kéo

    const friend = Players[currentIndex];
    const item = list.querySelector(`li[data-id="${friend.id}"]`);
    const distance = e.touches[0].clientX - touchStartX;

    const rotation = distance / 10; // tính góc xoay dựa trên khoảng cách kéo

    item.style.transform = `translateX(${distance}px) rotate(${rotation}deg)`;
    if (distance < 0) {
        item.classList.add("swipe-left");
        item.classList.remove("swipe-right");
    } else {
        item.classList.add("swipe-right");
        item.classList.remove("swipe-left");
    }
};

list.ontouchend = function (e) {
    isTouching = false;

    const friend = Players[currentIndex];
    const item = list.querySelector(`li[data-id="${friend.id}"]`);
    const distance = e.changedTouches[0].clientX - touchStartX;

    item.style.transition = "transform 0.3s";

    // nếu kéo quá 100px thì ẩn đi, còn không thì trả về vị trí cũ
    if (Math.abs(distance) > 50) {
        item.style.transform = `translateX(${distance > 0 ? 500 : -500}px) rotate(${distance > 0 ? 30 : -30}deg)`;

        if (distance > 0) {
            liked.push(friend);
            console.log("Liked:", friend.name);

        } else {
            disliked.push(friend);
        }

        // đợi 300ms để ẩn đi, đồng thời giảm currentIndex đi 1
        setTimeout(() => {
            item.remove();
            currentIndex--;
            if (currentIndex < 0) {
                list.innerHTML = "<h2>Hết người rồi 😢</h2>";
            }
        }, 300);
    } else {
        item.style.transform = "translateX(0) rotate(0deg)";
        item.classList.remove("swipe-left", "swipe-right");
    }
};

function renderPlayers() {
    Players.forEach((player) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <img src="${player.image}" alt="${player.name}" />
            <div class="info">
                <h3>${player.name}</h3>
                <p>Age: ${player.age}</p>
                <p>Job: ${player.job}</p>
            </div>
        `;
        li.dataset.id = player.id;
        li.className = "item";

        list.appendChild(li);
    });
}

renderPlayers();
