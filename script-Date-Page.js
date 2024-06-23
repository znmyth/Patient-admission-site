// alert("hello world!!!!!!");
// new swiper(".swiper-container", {
//     loop:true,
//     slidesPerView:4,
//     spaceBetween:25,
//     pagination: {
//         el: ".swiper-pagination",
//     }
// })


  
// دریافت المان مدال
var modal = document.getElementById('registerModal');

// دریافت دکمه‌ای که باعث باز شدن مدال می‌شود
var btn = document.getElementById('myBtn'); // تغییر شناسه به myBtn

// دریافت المان <span> که باعث بسته شدن مدال می‌شود
var span = document.getElementsByClassName('close')[0];

// وقتی کاربر روی دکمه کلیک می‌کند، مدال باز می‌شود
btn.onclick = function() {
  modal.style.display = 'block';
}

// وقتی کاربر روی <span> (x) کلیک می‌کند، مدال بسته می‌شود
span.onclick = function() {
  modal.style.display = 'none';
}

// وقتی کاربر روی هر جایی خارج از مدال کلیک می‌کند، مدال بسته می‌شود
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}





  // اضافه کردن انیمیشن پس از بارگذاری صفحه
  document.addEventListener('DOMContentLoaded', function() {
    // بارگذاری انیمیشن Lottie
    var animation = lottie.loadAnimation({
      container: document.getElementById('lottieContainer'), // المانی که انیمیشن در آن نمایش داده می‌شود
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'Animation - 1718889290212.json' // مسیر فایل JSON انیمیشن
    });
  });






// تابع برای تغییر رنگ مستطیل هنگام کلیک
function changeRectangleColor(element) {
    // حذف کلاس 'clicked' از تمام مستطیل‌ها به جز المان فعلی
    document.querySelectorAll('.clickable-rectangle.clicked').forEach(clickedElement => {
      if (clickedElement !== element) {
        clickedElement.classList.remove('clicked');
      }
    });
  
    // تغییر کلاس 'clicked' برای المان فعلی
    element.classList.toggle('clicked');
  }
  
  // اضافه کردن Event Listener به هر دکمه با کلاس 'clickable-rectangle'
  document.querySelectorAll('.clickable-rectangle').forEach(button => {
    button.addEventListener('click', function() {
      changeRectangleColor(this);
    });
  });





// آرایه‌ای از ماه‌ها
const months = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
let currentMonthIndex = 2; // اندیس خرداد در آرایه

// تابعی برای نمایش ماه بعدی با محدودیت
function nextMonth() {
  if (currentMonthIndex < 4) { // اندیس مرداد در آرایه
    currentMonthIndex++;
    updateMonthDisplay();
  }
}

// تابعی برای نمایش ماه قبلی با محدودیت
function previousMonth() {
  if (currentMonthIndex > 2) { // اندیس خرداد در آرایه
    currentMonthIndex--;
    updateMonthDisplay();
  }
}

// تابعی برای به‌روزرسانی نمایش ماه
function updateMonthDisplay() {
  document.querySelector('.khordad-1403').textContent = months[currentMonthIndex] + ' 1403';
}

// اضافه کردن event listener به دکمه‌ها
document.querySelector('.next-month').addEventListener('click', nextMonth);
document.querySelector('.previous-month').addEventListener('click', previousMonth);

// به‌روزرسانی نمایش اولیه
updateMonthDisplay();













// var currentDate = new Date();

// function updateCalendar() {
//   var weekDays = document.getElementById('weekDays');
//   weekDays.innerHTML = ''; // Clear the current content
//   var dayNames = ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'];
  
//   for (var i = 0; i < 7; i++) {
//     var day = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + i - currentDate.getDay());
//     var div = document.createElement('div');
//     div.className = 'day' + (day.toDateString() === new Date().toDateString() ? ' today' : '');
//     div.innerHTML = '<strong>' + dayNames[day.getDay()] + '</strong><br>' + day.getDate() + '<br>12 نوبت خالی';
//     weekDays.appendChild(div);
//   }
// }

// document.getElementById('prevWeek').addEventListener('click', function() {
//   currentDate.setDate(currentDate.getDate() - 7);
//   updateCalendar();
// });

// document.getElementById('nextWeek').addEventListener('click', function() {
//   currentDate.setDate(currentDate.getDate() + 7);
//   updateCalendar();
// });

// updateCalendar(); // Initialize the calendar










// var currentDate = new Date();

// function updateCalendar() {
//   var weekDays = document.getElementById('weekDays');
//   weekDays.innerHTML = ''; // Clear the current content
//   var dayNames = ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'];
  
//   for (var i = 0; i < 7; i++) {
//     var day = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + i - currentDate.getDay());
//     var persianDate = day.toLocaleDateString('fa-IR-u-nu-latn'); // تبدیل تاریخ به شمسی
//     var dateParts = persianDate.split('/'); // جداسازی بخش‌های تاریخ شمسی
//     var div = document.createElement('div');
//     div.className = 'day' + (day.toDateString() === new Date().toDateString() ? ' today' : '');
//     div.innerHTML = '<strong>' + dayNames[day.getDay()] + '</strong><br>' + dateParts[2] + '<br>12 نوبت خالی'; // استفاده از روز شمسی
//     weekDays.appendChild(div);
//   }
  
// }

// document.getElementById('prevWeek').addEventListener('click', function() {
//   currentDate.setDate(currentDate.getDate() - 7);
//   updateCalendar();
// });

// document.getElementById('nextWeek').addEventListener('click', function() {
//   currentDate.setDate(currentDate.getDate() + 7);
//   updateCalendar();
// });

// updateCalendar(); // Initialize the calendar




// var currentDate = new Date();

// function convertDayIndex(jsDayIndex) {
//   // تبدیل اندیس یکشنبه (0) به شنبه (6)، دوشنبه (1) به یکشنبه (0)، و غیره
//   return (jsDayIndex + 7) % 7;
// }

// function getDayName(dayIndex) {
//   var dayNames = ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'];
//   return dayNames[dayIndex];
// }

// function updateCalendar() {
//   var weekDays = document.getElementById('weekDays');
//   weekDays.innerHTML = ''; // Clear the current content
  
//   for (var i = -1; i < 7; i++) {
//     var day = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + i - currentDate.getDay());
//     var persianDate = day.toLocaleDateString('fa-IR-u-nu-latn'); // تبدیل تاریخ به شمسی
//     var dateParts = persianDate.split('/'); // جداسازی بخش‌های تاریخ شمسی
//     var div = document.createElement('div');
//     div.className = 'day' + (day.toDateString() === new Date().toDateString() ? ' today' : '');
//     div.innerHTML = '<strong>' + getDayName(convertDayIndex(day.getDay())) + '</strong><br>' + dateParts[2] + '<br>12 نوبت خالی'; // استفاده از روز شمسی مطابق با آرایه فارسی
//     weekDays.appendChild(div);
//   }
// }

// document.getElementById('prevWeek').addEventListener('click', function() {
//   currentDate.setDate(currentDate.getDate() - 7);
//   updateCalendar();
// });

// document.getElementById('nextWeek').addEventListener('click', function() {
//   currentDate.setDate(currentDate.getDate() + 7);
//   updateCalendar();
// });

// updateCalendar(); // Initialize the calendar







// JavaScript
var currentDate = new Date();
var selectedElement = null; // نگه داشتن عنصر انتخاب شده

function convertDayIndex(jsDayIndex) {
  return (jsDayIndex + 7) % 7;
}

function getDayName(dayIndex) {
  var dayNames = ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'];
  return dayNames[dayIndex];
}

function selectDay(element) {
  if (selectedElement) {
    selectedElement.classList.remove('selectedDay');
  }
  selectedElement = element;
  selectedElement.classList.add('selectedDay');
}

function updateCalendar() {
  var weekDays = document.getElementById('weekDays');
  weekDays.innerHTML = '';
  
  for (var i = -1; i < 6; i++) {
    var day = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + i - currentDate.getDay());
    var persianDate = day.toLocaleDateString('fa-IR-u-nu-latn');
    var dateParts = persianDate.split('/');
    var div = document.createElement('div');
    div.className = 'day' + (day.toDateString() === new Date().toDateString() ? ' today' : '');
    div.innerHTML = '<strong>' + getDayName(convertDayIndex(day.getDay())) + '</strong><br>' + dateParts[2] + '<br>12 نوبت خالی';
    div.onclick = function() {
      selectDay(this);
    };
    weekDays.appendChild(div);
  }
}

document.getElementById('prevWeek').addEventListener('click', function() {
  currentDate.setDate(currentDate.getDate() - 7);
  updateCalendar();
});

document.getElementById('nextWeek').addEventListener('click', function() {
  currentDate.setDate(currentDate.getDate() + 7);
  updateCalendar();
});

updateCalendar(); // Initialize the calendar






// var currentDate = new Date();

// function updateCalendar() {
//   var weekDays = document.getElementById('weekDays');
//   weekDays.innerHTML = ''; // Clear the current content
//   var dayNames = ['جمعه', 'پنج‌شنبه', 'چهارشنبه', 'سه‌شنبه', 'دوشنبه', 'یکشنبه', 'شنبه'];
  
//   // تنظیم اندیس برای شروع از جمعه
//   var startDayIndex = currentDate.getDay();
//   var startIndex = (startDayIndex + 1) % 7;
  
//   for (var i = 0; i < 7; i++) {
//     var dayIndex = (startIndex + i) % 7;
//     var day = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - startDayIndex + dayIndex);
//     var persianDate = day.toLocaleDateString('fa-IR-u-nu-latn'); // تبدیل تاریخ به شمسی
//     var dateParts = persianDate.split('/'); // جداسازی بخش‌های تاریخ شمسی
//     var div = document.createElement('div');
//     div.className = 'day' + (day.toDateString() === new Date().toDateString() ? ' today' : '');
//     div.innerHTML = '<strong>' + dayNames[dayIndex] + '</strong><br>' + dateParts[2] + '<br>12 نوبت خالی'; // استفاده از روز شمسی
//     weekDays.appendChild(div);
//   }
// }

// document.getElementById('prevWeek').addEventListener('click', function() {
//   currentDate.setDate(currentDate.getDate() - 7);
//   updateCalendar();
// });

// document.getElementById('nextWeek').addEventListener('click', function() {
//   currentDate.setDate(currentDate.getDate() + 7);
//   updateCalendar();
// });

// updateCalendar(); // Initialize the calendar










// var currentDate = new Date();

// function updateCalendar() {
//   var weekDays = document.getElementById('weekDays');
//   weekDays.innerHTML = ''; // Clear the current content
//   var dayNames = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه'].reverse();
  
//   // تنظیم اندیس برای شروع از جمعه
//   var startDayIndex = currentDate.getDay();
//   var startIndex = (startDayIndex + 1) % 7;
  
//   for (var i = 0; i < 7; i++) {
//     var dayIndex = (startIndex + i) % 7;
//     var day = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - startDayIndex + dayIndex);
//     var persianDate = day.toLocaleDateString('fa-IR-u-nu-latn'); // تبدیل تاریخ به شمسی
//     var dateParts = persianDate.split('/'); // جداسازی بخش‌های تاریخ شمسی
//     var div = document.createElement('div');
//     div.className = 'day' + (day.toDateString() === new Date().toDateString() ? ' today' : '');
//     div.innerHTML = '<strong>' + dayNames[dayIndex] + '</strong><br>' + dateParts[2] + '<br>12 نوبت خالی'; // استفاده از روز شمسی
//     weekDays.appendChild(div);
//   }
// }

// document.getElementById('nextWeek').addEventListener('click', function() {
//   currentDate.setDate(currentDate.getDate() + 7);
//   updateCalendar();
// });

// document.getElementById('prevWeek').addEventListener('click', function() {
//   currentDate.setDate(currentDate.getDate() - 7);
//   updateCalendar();
// });

// updateCalendar(); // Initialize the calendar