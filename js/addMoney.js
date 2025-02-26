selectByGetElementById('add-money').addEventListener('click', (event) =>{
    event.preventDefault();
    if(selectByGetElementById('acount-nunber').value.length === 11 && parseIntNumber(selectByGetElementById('pin-number').value) === 1234){
        const amount = parseIntNumber(selectByGetElementById('amount').value);
        const mainBalance = parseIntNumber(selectByGetElementById('main-balance').innerText);
        const sum = amount + mainBalance;
        selectByGetElementById('main-balance').innerText = sum;
        selectByGetElementById('amount').value = '';
    }else{
        console.log('world')
    }
    
})