document.addEventListener('DOMContentLoaded', function () {
    function handleClick() {
        const calendar = document.getElementById('calendar-container');
        const overlay = document.getElementById('overlay');

        if (calendar.style.display === 'none' || calendar.style.display === '') {
            calendar.style.display = 'block';
            overlay.style.display = 'block';

            // Add event listener only once
            document.body.addEventListener('click', handleOutsideClick);
        } else {
            closeCalendar();
        }
    }

    function closeCalendar() {
        const calendar = document.getElementById('calendar-container');
        const overlay = document.getElementById('overlay');

        calendar.style.display = 'none';
        overlay.style.display = 'none';

        // Remove the event listener when closing
        document.body.removeEventListener('click', handleOutsideClick);
    }

    function handleOutsideClick(event) {
        const calendar = document.getElementById('calendar-container');
        if (!calendar.contains(event.target) && event.target !== document.querySelector('.click-here-button')) {
            closeCalendar();
        }
    }

    const clickHereButton = document.querySelector('.click-here-button');
    if (clickHereButton) {
        clickHereButton.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevents event bubbling
            handleClick();
        });
    }

    const calendarContainer = document.getElementById('calendar-container');
    if (calendarContainer) {
        calendarContainer.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevents closing when clicking inside
        });
    }

    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.addEventListener('click', closeCalendar); // Closes when clicking outside
    }

    console.log("Google Calendar script loaded successfully!");
});