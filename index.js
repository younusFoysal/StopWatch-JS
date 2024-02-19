let count = 0;
let minuites = 0;
let hours = 0;
let countInterval = undefined;
let timeStarted = false;

const counter =() => {
  if(!timeStarted) {
    countInterval = setInterval(() => {
      count++;
      if(count == 60) {
        minuites++;
        count = 0;
      }
      if(minuites == 60) {
        hours++;
        minuites = 0;
      }
      document.querySelector('.count').innerHTML = `
      <span class="p-7 bg-purple-500 rounded-2xl shadow-lg">${hours < 10 ? '0'+hours : hours}</span>
      <span>:</span>
      <span class="p-7 bg-purple-500 rounded-2xl shadow-lg">${minuites < 10 ? '0'+minuites : minuites}</span>
      <span>:</span>
      <span class="p-7 bg-purple-500 rounded-2xl shadow-lg">${count < 10 ? '0'+count : count}</span>
      `;
    }, 1000);
    timeStarted = true;
    startbutt.innerText = 'Stop';
    startbutt.classList.add('bg-red-500');
  } else {
    clearInterval(countInterval);
    timeStarted = false;
    startbutt.innerText = 'Start';
    startbutt.classList.remove('bg-red-500');
  }
  
}

const startbutt = document.querySelector('.start');
const resetbutt = document.querySelector('.reset');
startbutt.addEventListener('click', counter);
resetbutt.addEventListener('click', ()=> {
  count = 0;
  minuites = 0;
  hours = 0;
  document.querySelector('.count').innerHTML = `
      <span class="p-7 bg-purple-500 rounded-2xl shadow-lg">${hours < 10 ? '0'+hours : hours}</span>
      <span>:</span>
      <span class="p-7 bg-purple-500 rounded-2xl shadow-lg">${minuites < 10 ? '0'+minuites : minuites}</span>
      <span>:</span>
      <span class="p-7 bg-purple-500 rounded-2xl shadow-lg">${count < 10 ? '0'+count : count}</span>
      `;
})
