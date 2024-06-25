// انتظار برای بارگذاری کامل DOM
document.addEventListener('DOMContentLoaded', function () {
    // یافتن تمام عناصر با کلاس 'dropdown-toggle'
    var dropdownToggles = document.querySelectorAll('.nav-link.dropdown-toggle');

    // اضافه کردن event listener به هر عنصر
    dropdownToggles.forEach(function (toggle) {
        toggle.addEventListener('click', function (event) {
            // جلوگیری از عملکرد پیش‌فرض لینک
            event.preventDefault();

            // یافتن منوی کشویی مربوط به این عنصر
            var dropdownMenu = this.closest('.dropdown').querySelector('.dropdown-menu');

            // نمایش یا پنهان کردن منوی کشویی
            if (dropdownMenu.style.display === 'block') {
                dropdownMenu.style.display = 'none';
            } else {
                dropdownMenu.style.display = 'block';
            }
        });
    });

    // بستن منوهای کشویی هنگام کلیک بیرون از آن‌ها
    window.addEventListener('click', function (event) {
        if (!event.target.matches('.dropdown-toggle')) {
            var dropdownMenus = document.querySelectorAll('.dropdown-menu');
            dropdownMenus.forEach(function (menu) {
                if (menu.style.display === 'block') {
                    menu.style.display = 'none';
                }
            });
        }
    });
});


















let currentPage = 1; // شماره صفحه فعلی
const totalPages = 2; // تعداد کل صفحات

function changePage(pageNumber) {
  currentPage = pageNumber;

  if (currentPage < 1) {
    currentPage = totalPages;
  } else if (currentPage > totalPages) {
    currentPage = 1;
  }

  updateContent(currentPage);
}

function updateContent(pageNumber) {
  document.querySelectorAll('.content-page').forEach(page => {
    page.classList.remove('active');
  });

  const pageId = `content-page-${pageNumber}`;
  document.getElementById(pageId).classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
  updateContent(currentPage);
});












function expandText() {
  var dots = document.querySelector('.tab-yar');
  var moreText = document.getElementById("more-text");

  if (dots.style.overflow === "hidden") {
    dots.style.overflow = "visible";
    dots.style.whiteSpace = "normal";
    moreText.style.display = "inline";
  } else {
    dots.style.overflow = "hidden";
    dots.style.whiteSpace = "nowrap";
    moreText.style.display = "none";
  }
}








// اضافه کردن event listener به هر عنصر
document.querySelectorAll('a span').forEach(function(el) {
  el.addEventListener('click', function() {
    // حذف کلاس active از تمام عناصر
    document.querySelectorAll('a span.active').forEach(function(activeEl) {
      activeEl.classList.remove('active');
    });
    // اضافه کردن کلاس active به عنصر کلیک شده
    this.classList.add('active');
  });
});