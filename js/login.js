document.getElementById('login-btn').addEventListener('click', (event) => {
    event.preventDefault();
    const pinNumber = document.getElementById('pin-number');
    const accountNumber = document.getElementById('acount-nunber');
    if (parseIntNumber(pinNumber.value) === 1234 && accountNumber.value.length === 11) {
        window.location = './main.html'
    } else {
        alert('Something went wrong!')
    }
})