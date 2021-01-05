
// Clock Version 1.0.0

function time_ticker() {
 
  // Get the current date and time
  let current_time = new Date();
  // Elements for the clock
  let html_clock = document.querySelector('.clock');
  let html_time = document.querySelector('.clock__time');
  let hour_format = html_clock.dataset.hourFormat;
 // get the hours, minutes and seconds from current_time
  let h = current_time.getHours();
  let m = current_time.getMinutes();
  let s = current_time.getSeconds();
  let time_of_day = 'am';

  // Convert from 24 format if dataset is 12
  if (hour_format === '12') {
    if (h === 0) {
        h = 12;
    }
    if (h > 12) {
      h = h - 12;
      time_of_day = 'pm'
    }
  } 

  // Add 0 before if number is less than 10 (not on h if format is 12 hr)
  if (hour_format !== '12') {
    h = (h < 10) ? '0' + h : h;
  }
  m = (m < 10) ? '0' + m : m;
  s = (s < 10) ? '0' + s : s;

// Check time of day is am or pm
  if (h > 12 && hour_format !== '12') {
    time_of_day = 'pm';
  } 
  // Create time
  let time = `${h}:${m}:${s}<span class="clock__tod">${time_of_day}</span>`;

  // Insert into HTML Element
  html_time.innerHTML = time;

  // Update time every second
  setTimeout(time_ticker, 1000);
}

// run
time_ticker();