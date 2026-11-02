document.addEventListener('DOMContentLoaded', function(){
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');
        menuIcon.addEventListener('click', function(){
            menu.classList.toggle('active');
        });
});


document.addEventListener('DOMContentLoaded',  () => {
    const btn = document.getElementById('btn');
    let nightMode = document.querySelector('html');
    btn.addEventListener('click', function(){
        style = window.getComputedStyle(nightMode);

        if (style.backgroundColor === 'rgb(0, 0, 0)') {
            nightMode.style.backgroundColor = 'rgb(255, 255, 255)';
            nightMode.style.color = 'rgb(0, 0, 0)';
            nightMode.style.transition = 'background-color 2s ease, color 1s ease';
            nightMode.style.transitionDelay = '0s, 1s';
            nightMode.style.transitionTimingFunction = 'ease-in-out';
            nightMode.style.vectorEffect = 'non-scaling-stroke';
        } else {
            nightMode.style.backgroundColor = 'rgb(0, 0, 0)';
            nightMode.style.color = 'rgb(255, 255, 255)';
            nightMode.style.transition = 'background-color 2s ease, color 1s ease';
            nightMode.style.transitionDelay = '0s, 1s';
            nightMode.style.transitionTimingFunction = 'ease-in-out';
            nightMode.style.vectorEffect = 'non-scaling-stroke';
        }
    });
}); 

document.addEventListener('DOMContentLoaded', () => {
    const alertButton = document.getElementById('alert');
    const alertMessage = document.getElementById('alert-message');
    const name = document.getElementById('name');
    const email = document.getElementById('f-email');
    const message = document.getElementById('f-message');
    alertButton.addEventListener('click', () => {
        if (name.value === '') {
            alert('Please fill in all required fields.');
            return;
        }
            if (alertButton) {
                alertMessage.style.display = 'flex';
                alertMessage.textContent = 'SALOM '+ name.value + ' ERTANGI DARSNING UY ISHLARINI QILDIZMI 🤣. QILGAN BOLSANGIZ OZI QANDAY VAZIFALAR BOR EDI TASHAB YUBORING 🤣😁';
            }
    })
})