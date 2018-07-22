window.onload = () => {
    const endDate = 'August 17, 2018 09:30:00 GMT+0530';

    const daysSpan = document.getElementById('days');
    const hoursSpan = document.getElementById('hours');
    const minutesSpan = document.getElementById('minutes');
    const secondsSpan = document.getElementById('seconds');

    function initializeCountdown(deadline) {
        function updateClock() {
            const time = getRemainingTime(deadline);
            const timeTag = document.getElementById('countdown');

            timeTag.setAttribute(
                'datetime',
                `P${time.days}DT${time.hours}H${time.minutes}M${time.seconds}S`
            );

            daysSpan.innerHTML = zeroPad(time.days);
            hoursSpan.innerHTML = zeroPad(time.hours);
            minutesSpan.innerHTML = zeroPad(time.minutes);
            secondsSpan.innerHTML = zeroPad(time.seconds);
        }

        updateClock(); // run function once at first to avoid delay
        setInterval(updateClock, 1000);
    }

    initializeCountdown(endDate);
};

function zeroPad(number) {
    return (`0${number}`).slice(-2);
}

function getRemainingTime(deadline) {
    const t = Date.parse(deadline) - Date.parse(new Date());

    if (t < 0) {
        return {
            total: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }

    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const seconds = Math.floor((t / 1000) % 60);

    return {
        total: t,
        days,
        hours,
        minutes,
        seconds
    };
}
