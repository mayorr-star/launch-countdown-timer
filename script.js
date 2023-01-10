const timers = document.querySelectorAll('p');

function countdown(){
    const currentDate = Date.now();
    const endDate = new Date('January 21, 2023').getTime();
    const dateDifference = endDate - currentDate;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    const timeDays = Math.floor(dateDifference / days);
    const timeHours = Math.floor((dateDifference % days) / hours);
    const timeMinutes = Math.floor((dateDifference % hours) / minutes);
    const timeSeconds = Math.floor((dateDifference % minutes) / seconds);

    for (let i = 0; i < timers.length; i++){
        const timer = timers[i];
        const timerId = timer.dataset.id;
        switch (true){
            case timerId === 'days':
                if (timeDays < 10){
                    timer.textContent = '0' + timeDays;
                }else{
                    timer.textContent = timeDays;
                }
                break;
            case timerId === 'hours':
                if (timeHours < 10){
                    timer.textContent = '0' + timeHours;
                }else{
                    timer.textContent = timeHours;
                }
                break;
            case timerId === 'minutes':
                if (timeMinutes < 10){
                    timer.textContent = '0' + timeMinutes;
                }else{
                    timer.textContent = timeMinutes;
                }
                break;
            default:
                if (timeSeconds < 10){
                    timer.textContent = '0' + timeSeconds;
                }else{
                    timer.textContent = timeSeconds;
                }
        }
    }
}
setInterval(countdown, 1000);