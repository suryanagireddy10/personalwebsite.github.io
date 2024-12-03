document.addEventListener('DOMContentLoaded', function () {
    const greeting = document.getElementById('greeting');
    const currentTime = new Date().getHours();

    if (currentTime < 12) {
        greeting.innerText = 'Good Morning! I\'m Surya Nagireddy, a passionate web developer.';
    } else if (currentTime < 18) {
        greeting.innerText = 'Good Afternoon! I\'m Surya Nagireddy, a passionate web developer.';
    } else {
        greeting.innerText = 'Good Evening! I\'m Surya Nagireddy, a passionate web developer.';
    }
});