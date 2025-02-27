const  cashOutBox = document.getElementById('cashout-box');
const addMoneyBox = document.getElementById('add-money-box');

addMoneyBox.addEventListener('click', (event) =>{
    document.getElementById('cashout').style.display = 'none';
    document.getElementById('addmoney').style.display = 'block';
})
cashOutBox.addEventListener('click', (event) =>{
    document.getElementById('addmoney').style.display = 'none';
    document.getElementById('cashout').style.display = 'block';
})