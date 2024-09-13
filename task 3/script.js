const trafficLightEl1 = document.querySelector('#trafficLight1');
const trafficLightEl2 = document.querySelector('#trafficLight2');
const trafficLightEl3 = document.querySelector('#trafficLight3');

function makeGreen() {
    trafficLightEl1.style.background = ('green');
    trafficLightEl1.removeEventListener('click', makeGreen);
    trafficLightEl1.addEventListener('click', makeYellow);
    trafficLightEl3.style.background = ('black');
}

trafficLightEl1.addEventListener('click', makeGreen);

function makeYellow() {
    trafficLightEl2.style.background = ('yellow');
    trafficLightEl2.removeEventListener('click', makeYellow);
    trafficLightEl2.addEventListener('click', makeRed);
    trafficLightEl1.style.background = ('black');
}




function makeRed() {
    trafficLightEl3.style.background = ('red');
    trafficLightEl3.removeEventListener('click', makeRed);
    trafficLightEl3.addEventListener('click', makeGreen);
    trafficLightEl2.style.background = ('black');
}