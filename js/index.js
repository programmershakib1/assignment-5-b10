document.getElementById('btn-1')
    .addEventListener('click', function(){
        const input1 = document.getElementById('input-1').value;
        const input1Number = parseFloat(input1);
        const moneyButton1 = parseFloat(document.getElementById('money-button-1').innerText);
        const moneyButton1Update = input1Number + moneyButton1;
        document.getElementById('money-button-1').innerText = moneyButton1Update;
        const moneyHome = parseFloat(document.getElementById('money-home').innerText);
        const moneyHomeUpdate = moneyHome - input1Number;
        document.getElementById('money-home').innerText = moneyHomeUpdate;


        const historyList = document.createElement('div');
        historyList.classList.add('border', 'rounded-lg');

        historyList.innerHTML = `
                <p class="text-secondary my-5 ml-10">${input1} Taka is Donated for Donate for Flood at Noakhali, Bangladesh</p>
                <p class="mb-5 ml-10">${new Date().toLocaleDateString()}</p>
        `;
        const historyContainer = document.getElementById('history-list');
        historyContainer.appendChild(historyList);
});


document.getElementById('btn-2')
    .addEventListener('click', function(){
        const input2 = document.getElementById('input-2').value;
        const input2Number = parseFloat(input2);
        const moneyButton2 = parseFloat(document.getElementById('money-button-2').innerText);
        const moneyButton2Update = input2Number + moneyButton2;
        document.getElementById('money-button-2').innerText = moneyButton2Update;
        const moneyHome = parseFloat(document.getElementById('money-home').innerText);
        const moneyHomeUpdate = moneyHome - input2Number;
        document.getElementById('money-home').innerText = moneyHomeUpdate;
});


document.getElementById('btn-3')
    .addEventListener('click', function(){
        const input3 = document.getElementById('input-3').value;
        const input3Number = parseFloat(input3);
        const moneyButton3 = parseFloat(document.getElementById('money-button-3').innerText);
        const money3 = input3Number + moneyButton3;
        document.getElementById('money-button-3').innerText = money3;
        const moneyHome = parseFloat(document.getElementById('money-home').innerText);
        const moneyHomeUpdate = moneyHome - input3Number;
        document.getElementById('money-home').innerText = moneyHomeUpdate;
});


const historyBtn = document.getElementById('history-btn');
const donationBtn = document.getElementById('donation-btn');
historyBtn.addEventListener('click', function(){  
    historyBtn.classList.add('bg-primary');
    donationBtn.classList.remove('bg-primary');
    donationBtn.classList.add('border-solid', 'border-2');

    const card = document.getElementById('card');
    card.classList.add('hidden');
    const historyList = document.getElementById('history-list');
    historyList.classList.remove('hidden');
});

donationBtn.addEventListener('click', function(){  
    donationBtn.classList.add('bg-primary');
    historyBtn.classList.remove('bg-primary');

    const card = document.getElementById('card');
    card.classList.remove('hidden');
});

document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = 'blog.html';
});