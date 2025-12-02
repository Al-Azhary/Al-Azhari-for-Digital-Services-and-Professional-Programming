// Dark Mode
const darkBtn = document.getElementById("darkModeBtn");
darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        darkBtn.innerHTML = '<i class="bi bi-sun"></i> وضع نهاري';
    } else {
        darkBtn.innerHTML = '<i class="bi bi-moon"></i> وضع ليلي';
    }
});

// Scroll Top
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
    scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Copy
function copyText(type){
    let text = type === "email" ? "abdelwhabhany62@gmail.com" : "966502069445+";
    navigator.clipboard.writeText(text).then(()=>{
        document.getElementById(type+"Message").textContent = "تم النسخ!";
        setTimeout(()=>{ document.getElementById(type+"Message").textContent = ""; }, 2000);
    });
}

// Order Form WhatsApp
const orderForm = document.getElementById("orderForm");
orderForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const name = document.getElementById("orderName").value;
    const email = document.getElementById("orderEmail").value;
    const serviceSelect = document.getElementById("orderService");
    const service = serviceSelect.options[serviceSelect.selectedIndex].text;
    const details = document.getElementById("orderDetails").value;

    let message = `الاسم: ${name}\nالبريد الإلكتروني: ${email}\nالخدمة المطلوبة: ${service}\nمواصفات الطلب:\n${details}`;
    let whatsappUrl = `https://wa.me/966502069445?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    document.getElementById("orderMessage").textContent = "تم فتح واتساب لإرسال الطلب!";
});
