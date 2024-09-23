document.getElementById('btn-1')
    .addEventListener('click', function(){
        const availableBalance = inputNumber('balance');
        const donatedMoney = inputValue('input-1');
        const balance = inputNumber('balance-1');

        if(donatedMoney > 0 && availableBalance > donatedMoney){
            const availableMoney = availableBalance - donatedMoney;
            element('balance').innerText = availableMoney;

            element('balance-1').innerText = balance + donatedMoney;


            const historyList = document.createElement('div');
            historyList.classList.add('border-2', 'rounded-lg');

            historyList.innerHTML = `
                <p class="text-secondary text-xl font-bold my-5 mx-10">${donatedMoney} Taka is Donated for Donate for Flood at Noakhali, Bangladesh</p>
                <p class="text-third mb-5 mx-10">Date: ${new Date()}</p>
            `;
            const historyContainer = element('history-list');
            historyContainer.appendChild(historyList);

            const modal = document.getElementById('my-modal');
            modal.showModal();

            document.getElementById('input-1').value = '';
        }
        else{
            alert('Please Type Valid Input')
        }
});


document.getElementById('btn-2')
    .addEventListener('click', function(){
        const availableBalance = inputNumber('balance');
        const donatedMoney = inputValue('input-2');
        const balance = inputNumber('balance-2');

        if(donatedMoney > 0 && availableBalance > donatedMoney){
            const availableMoney = availableBalance - donatedMoney;
            element('balance').innerText = availableMoney;

            element('balance-2').innerText = balance + donatedMoney;


            const historyList = document.createElement('div');
            historyList.classList.add('border-2', 'rounded-lg');

            historyList.innerHTML = `
                <p class="text-secondary text-xl font-bold my-5 mx-10">${donatedMoney} Taka is Donated for Donate for Flood Relief in Feni,Bangladesh</p>
                <p class="text-third mb-5 mx-10">Date: ${new Date()}</p>
            `;
            const historyContainer = element('history-list');
            historyContainer.appendChild(historyList);

            const modal = document.getElementById('my-modal');
            modal.showModal();

            document.getElementById('input-2').value = '';
        }
        else{
            alert('Please Type Valid Input')
        }
});


document.getElementById('btn-3')
    .addEventListener('click', function(){
        const availableBalance = inputNumber('balance');
        const donatedMoney = inputValue('input-3');
        const balance = inputNumber('balance-3');

        if(donatedMoney > 0 && availableBalance > donatedMoney){
            const availableMoney = availableBalance - donatedMoney;
            element('balance').innerText = availableMoney;

            element('balance-3').innerText = balance + donatedMoney;


            const historyList = document.createElement('div');
            historyList.classList.add('border-2', 'rounded-lg');

            historyList.innerHTML = `
                <p class="text-secondary text-xl font-bold my-5 mx-10">${donatedMoney} Taka is Donated for Aid for Injured in the Quota Movement</p>
                <p class="text-third mb-5 mx-10">Date: ${new Date()}</p>
            `;
            const historyContainer = element('history-list');
            historyContainer.appendChild(historyList);

            const modal = document.getElementById('my-modal');
            modal.showModal();

            document.getElementById('input-3').value = '';
        }
        else{
            alert('Please Type Valid Input')
        }
});


document.getElementById('btn-4')
    .addEventListener('click', function(){
        const availableBalance = inputNumber('balance');
        const donatedMoney = inputValue('input-4');
        const balance = inputNumber('balance-4');

        if(donatedMoney > 0 && availableBalance > donatedMoney){
            const availableMoney = availableBalance - donatedMoney;
            element('balance').innerText = availableMoney;

            element('balance-4').innerText = balance + donatedMoney;


            const historyList = document.createElement('div');
            historyList.classList.add('border-2', 'rounded-lg');

            historyList.innerHTML = `
                <p class="text-secondary text-xl font-bold my-5 mx-10">${donatedMoney} Taka is Donated for Donate for Child Labor in Bangladesh</p>
                <p class="text-third mb-5 mx-10">Date: ${new Date()}</p>
            `;
            const historyContainer = element('history-list');
            historyContainer.appendChild(historyList);

            const modal = document.getElementById('my-modal');
            modal.showModal();

            document.getElementById('input-4').value = '';
        }
        else{
            alert('Please Type Valid Input')
        }
});


document.getElementById('btn-5')
    .addEventListener('click', function(){
        const availableBalance = inputNumber('balance');
        const donatedMoney = inputValue('input-5');
        const balance = inputNumber('balance-5');

        if(donatedMoney > 0 && availableBalance > donatedMoney){
            const availableMoney = availableBalance - donatedMoney;
            element('balance').innerText = availableMoney;

            element('balance-5').innerText = balance + donatedMoney;


            const historyList = document.createElement('div');
            historyList.classList.add('border-2', 'rounded-lg');

            historyList.innerHTML = `
                <p class="text-secondary text-xl font-bold my-5 mx-10">${donatedMoney} Taka is Donated for Donate for poor people in Bangladesh</p>
                <p class="text-third mb-5 mx-10">Date: ${new Date()}</p>
            `;
            const historyContainer = element('history-list');
            historyContainer.appendChild(historyList);

            const modal = document.getElementById('my-modal');
            modal.showModal();

            document.getElementById('input-5').value = '';
        }
        else{
            alert('Please Type Valid Input')
        }
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

    const footerBg = document.getElementById('footer-bg');
    footerBg.classList.add('hidden');
});

donationBtn.addEventListener('click', function(){  
    donationBtn.classList.add('bg-primary');
    historyBtn.classList.remove('bg-primary');

    const historyList = document.getElementById('history-list');
    historyList.classList.add('hidden');

    const card = document.getElementById('card');
    card.classList.remove('hidden');

    const footerBg = document.getElementById('footer-bg');
    footerBg.classList.remove('hidden');
});

document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = 'blog.html';
});