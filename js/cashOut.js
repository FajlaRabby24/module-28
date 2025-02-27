document.getElementById('cashout-btn').addEventListener('click', (event) => {
    event.preventDefault();

    const pinNumber = selectByGetElementById('cashout-pin');
    const accountNumber = selectByGetElementById('acount-nunber');
    const amount = selectByGetElementById('cashout-amount');
    const mainBalance = selectByGetElementById('main-balance');
    if (accountNumber.value.length === 11 && parseIntNumber(pinNumber.value) === 1234) {
        const substract = parseIntNumber(mainBalance.innerText) - parseIntNumber(amount.value);
        mainBalance.innerText = substract;
        amount.value = '';
    }
    else {
        alert('Something went wrong!')
    }
})