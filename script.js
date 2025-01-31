document.addEventListener('DOMContentLoaded', function () {
    function handleClick() {
        const calendar = document.getElementById('calendar-container');
        const overlay = document.getElementById('overlay');

        if (calendar.style.display === 'none' || calendar.style.display === '') {
            calendar.style.display = 'block';
            overlay.style.display = 'block';
            document.addEventListener('click', handleOutsideClick);
        } else {
            closeCalendar();
        }
    }

    function closeCalendar() {
        const calendar = document.getElementById('calendar-container');
        const overlay = document.getElementById('overlay');

        calendar.style.display = 'none';
        overlay.style.display = 'none';
        document.removeEventListener('click', handleOutsideClick);
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
            event.stopPropagation();
            handleClick();
        });
    }

    const calendarContainer = document.getElementById('calendar-container');
    if (calendarContainer) {
        calendarContainer.addEventListener('click', function (event) {
            event.stopPropagation();
        });
    }

    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.addEventListener('click', closeCalendar);
    }

    console.log("Google Calendar script loaded successfully!");
});