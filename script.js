document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle calendar display
    function handleClick() {
        const calendar = document.getElementById('calendar-container');
        const overlay = document.getElementById('overlay');
        const contentWrapper = document.querySelector('.content-wrapper');

        if (calendar.style.display === 'none' || calendar.style.display === '') {
            calendar.style.display = 'block';
            overlay.style.display = 'block';
            if (contentWrapper) {
                contentWrapper.classList.add('blur');
            }
            document.addEventListener('click', handleOutsideClick);
        } else {
            closeCalendar();
        }
    }

    // Function to close calendar
    function closeCalendar() {
        const calendar = document.getElementById('calendar-container');
        const overlay = document.getElementById('overlay');
        const contentWrapper = document.querySelector('.content-wrapper');

        calendar.style.display = 'none';
        overlay.style.display = 'none';
        if (contentWrapper) {
            contentWrapper.classList.remove('blur');
        }
        document.removeEventListener('click', handleOutsideClick);
    }

    // Function to handle clicks outside the calendar
    function handleOutsideClick(event) {
        const calendar = document.getElementById('calendar-container');
        if (!calendar.contains(event.target) && event.target !== document.querySelector('.click-here-button')) {
            closeCalendar();
        }
    }

    // Assign handleClick to the button
    const clickHereButton = document.querySelector('.click-here-button');
    if (clickHereButton) {
        clickHereButton.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent this click from triggering the outside click handler
            handleClick();
        });
    }

    // Prevent closing when clicking inside the calendar
    const calendarContainer = document.getElementById('calendar-container');
    if (calendarContainer) {
        calendarContainer.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent this click from triggering the outside click handler
        });
    }

    // Existing code for other functionalities
    const tabLinks = document.querySelectorAll('.tab-links');
    const tabContents = document.querySelectorAll('.tab-contents');

    tabLinks.forEach(link => {
        link.addEventListener('click', function() {
            tabLinks.forEach(tabLink => {
                tabLink.classList.remove('active-link');
            });
            tabContents.forEach(content => {
                content.style.display = 'none';
            });

            this.classList.add('active-link');
            const tabContentId = this.textContent.toLowerCase().replace(/\s+/g, '-'); // Replace spaces with hyphens for IDs
            const tabContent = document.getElementById(tabContentId);
            if (tabContent) {
                tabContent.style.display = 'block';
            }
        });
    });

    document.querySelectorAll('.amenities-list div').forEach(service => {
        service.addEventListener('mouseenter', () => {
            gsap.to(service, {
                background: 'linear-gradient(270deg, #ffeac2 10%, #91eff6 100%)',
                y: -20,
                duration: 0.8
            });
        });

        service.addEventListener('mouseleave', () => {
            gsap.to(service, {
                background: '#e4ebcf',
                y: 0, 
                duration: 0.8
            });
        });
    });

    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('nav-links');
    const closeBtn = document.querySelector('.close');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    document.body.addEventListener('click', (event) => {
        if (!navLinks.contains(event.target) && !burger.contains(event.target)) {
            burger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            burger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    }

    gsap.from(".nav-links", {
        opacity: 0,
        duration: 9,
        ease: "power1.out",
        yoyo: true
    });

    gsap.from(".name", {
        opacity: 0,
        duration: 9,
        ease: "power1.out",
        yoyo: true
    });
});