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