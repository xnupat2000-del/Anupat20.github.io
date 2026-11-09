const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

// เปิดและปิดเมนูบนโทรศัพท์
menuToggle.addEventListener("click", () => {

  const isOpen = mainNav.classList.toggle("open");

  menuToggle.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

});

// เมื่อกดเมนูแล้วให้ปิดเมนูอัตโนมัติ
mainNav.querySelectorAll("a").forEach(link => {

  link.addEventListener("click", () => {

    mainNav.classList.remove("open");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

  });

});
