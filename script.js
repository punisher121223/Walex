// لیست آدرس‌های ولت‌های والکس (به صورت نمونه و فرضی)
const wallexWallets = [
    "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa", // آدرس بیت‌کوین فرضی
    "0x32Be343B94f860124dC4fEe278FDCBD38C102D88", // آدرس اتریوم فرضی
    "r3kmLJN5D28dHuH8vZNUZpMC43pEHpaocV" // آدرس ریپل فرضی
];

// نمایش ولت‌ها در صفحه
function displayWallets() {
    const walletList = document.getElementById("walletList");
    let html = "<ul>";
    wallexWallets.forEach(wallet => {
        html += `<li>${wallet}</li>`;
    });
    html += "</ul>";
    walletList.innerHTML = html;
}

// وقتی صفحه لود می‌شه، ولت‌ها رو نشون بده
window.onload = displayWallets;
