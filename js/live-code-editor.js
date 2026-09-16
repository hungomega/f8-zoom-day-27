const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const code = $("#code");
const preview = $("#preview");
const context_menu = $("#context-menu");
const delete_code = $("#delete-code");

code.oninput = function () {
    preview.srcdoc = code.value;
};
//The onbeforeunload event occurs when a document is about to be unloaded.
// window.onbeforeunload = function (event) {
//     if (code.value) {
//         event.preventDefault();
//     }
// };

// oncontectmenu là sự kiện khi click chuột phải
document.oncontextmenu = function (event) {
    console.log("chuột phải");
    event.preventDefault(); // ngăn chăn hành vi mặc đinh của trình duyệt
    context_menu.style.display = "block";

    // ý 6.3
    const menuWidth = context_menu.offsetWidth; // lấy độ rộng của context-menu
    const menuHeight = context_menu.offsetHeight;
    // xử lý tràn bên phải
    if (event.clientX + menuWidth > window.innerWidth) {
        context_menu.style.left = `${event.clientX - menuWidth}px`;
    } else {
        context_menu.style.left = `${event.clientX}px`;
    }
    //xử lý tràn dưới
    if (event.clientY + menuHeight > window.innerHeight) {
        context_menu.style.top = `${event.clientY - menuHeight}px`;
    } else {
        context_menu.style.top = `${event.clientY}px`;
    }
};

// xoá  code khi nhắn vào delete code
delete_code.onclick = function () {
    code.value = "";
    preview.srcdoc = "";
    context_menu.style.display = "none";
};

// click ra ngoai ẩn context-menu
document.onclick = function() {
    context_menu.style.display = "none";
};
// click bên trong preview ẩn context-menu
preview.onload = function () {
    //Lấy HTML bên trong iframe → bắt sự kiện click trên HTML đó.
    preview.contentDocument.onclick = function () {
        context_menu.style.display = "none";
    };
};