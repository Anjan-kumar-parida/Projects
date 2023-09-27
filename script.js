let hr = min = sec = ms = '0' + 0;
let startTimer;


//taking the buttons as variable
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

//assigning listner event to buttons
startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

function start(){
    
    startTimer = setInterval(() => {
        ms++;
        ms = ms < 10 ? '0' + ms : ms;

        if(ms == 100){
            sec++;
            sec = sec < 10 ? '0' + sec : sec;
            ms = '0' + 0;

            if(sec == 60){
                min++;
                min = min < 10 ? '0' + min : min;
                sec = '0' + 0;

                if(min == 60){
                    hr++;
                    hr = hr < 10 ? '0' + hr : hr;
                    min = '0' + 0;
                }
            }
        }

        putValue();
    },10);
}

function stop(){
    clearInterval(startTimer);
}

function reset(){
    clearInterval(startTimer);
    hr = min = sec = ms = '0' + 0;
    putValue()
}

//displaying the values in DOM
function putValue(){
    document.querySelector('.milisecond').innerHTML = ms;
    document.querySelector('.second').innerHTML = sec;
    document.querySelector('.minute').innerHTML = min;
    document.querySelector('.hour').innerHTML = hr;
}
