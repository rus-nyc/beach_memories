document.addEventListener('DOMContentLoaded', function () {
    const calendar = document.getElementById('calendar-container');
    const overlay = document.getElementById('overlay');
    const clickHereButton = document.querySelector('.click-here-button');

    function handleClick() {
        if (!calendar || !overlay) return; // Ensure elements exist

        if (calendar.style.display === 'none' || calendar.style.display === '') {
            calendar.style.display = 'block';
            overlay.style.display = 'block';
            document.body.classList.add('blur');
            document.addEventListener('click', handleOutsideClick);
        } else {
            closeCalendar();
        }
    }

    function closeCalendar() {
        if (!calendar || !overlay) return;

        calendar.style.display = 'none';
        overlay.style.display = 'none';
        document.body.classList.remove('blur');
        document.removeEventListener('click', handleOutsideClick);
    }

    function handleOutsideClick(event) {
        if (!calendar.contains(event.target) && event.target !== clickHereButton) {
            closeCalendar();
        }
    }

    // Click event for button
    if (clickHereButton) {
        clickHereButton.addEventListener('click', function (event) {
            event.stopPropagation();
            handleClick();
        });
    }

    // Prevent closing when clicking inside the calendar
    if (calendar) {
        calendar.addEventListener('click', function (event) {
            event.stopPropagation();
        });
    }

    // Click event for overlay to close the calendar
    if (overlay) {
        overlay.addEventListener('click', closeCalendar);
    }

    console.log("Google Calendar script loaded successfully!");
});