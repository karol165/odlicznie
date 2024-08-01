function updateCountdown() {
    const ferieStart = new Date('Febrauary 17, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = ferieStart - now;

    const months = (distance / (1000 * 60 * 60 * 24 * 30.44)).toFixed(3);
    const days = (distance / (1000 * 60 * 60 * 24)).toFixed(1   );
    const hours = (distance / (1000 * 60 * 60)).toFixed(2);
    const minutes = (distance / (1000 * 60)).toFixed(1);
    const seconds = (distance / 1000).toFixed(3);

    document.getElementById('countdown').innerHTML = `${months} misiąca CZYLI <br>${days} dni CZYLI <br> ${hours} godzin CZYLI <br> ${minutes} minut CZYLI <br> ${seconds} sekund`;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = 'Ferie zimowe już się rozpoczęły!';
    }
}

const countdownInterval = setInterval(updateCountdown, 1);
