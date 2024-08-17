// use to show the navbar content on clicking hamburger
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav_elements').classList.toggle('show');
    document.querySelector('.nav-right').style.display = 'none';
    document.querySelector('.login-signup').style.display = 'flex';
  });
//   click close button to close the side bar
  document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.nav_elements').classList.remove('show');
    document.querySelector('.nav-right').style.display = 'flex';
    document.querySelector('.login-signup').style.display = 'none';
  });

 document.addEventListener("DOMContentLoaded", function() {
    const calendarIcon = document.getElementById("calendarIcon");
    const datetimeDropdown = document.getElementById("datetimeDropdown");
    const selectedDatetime = document.getElementById("selectedDatetime");
    const dateInput = document.getElementById("dateInput");
    const timeInput = document.getElementById("timeInput");
    const setDatetimeButton = document.getElementById("setDatetime");

    // Toggle dropdown visibility
    calendarIcon.addEventListener("click", function() {
        datetimeDropdown.style.display = datetimeDropdown.style.display === "none" || datetimeDropdown.style.display === "" ? "flex" : "none";
    });

    // Hide dropdown when clicking outside
    document.addEventListener("click", function(event) {
        if (!datetimeDropdown.contains(event.target) && !calendarIcon.contains(event.target)) {
            datetimeDropdown.style.display = "none";
        }
    });

    // Set date and time to display
    setDatetimeButton.addEventListener("click", function() {
        const selectedDate = dateInput.value;
        const selectedTime = timeInput.value;

        if (selectedDate && selectedTime) {
            const formattedDate = new Date(selectedDate + ' ' + selectedTime).toLocaleString("en-GB", {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            });

            selectedDatetime.textContent = formattedDate;
            datetimeDropdown.style.display = "none";
        } else {
            alert("Please select both date and time.");
        }
    });
});


//accrdion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}