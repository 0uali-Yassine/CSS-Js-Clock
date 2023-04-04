let hours = document.querySelector('.hoursHand');
let minutes = document.querySelector('.minutesHand');
let seconds = document.querySelector('.secondsHand');
let text = document.querySelector('.dat');
let clock = ()=>{
    let now = new Date();
    let second = now.getSeconds();
    let secoundDegree = ((second/60)*360)+90;
    seconds.style.transform = `rotate(${secoundDegree}deg)`;

    let minute = now.getMinutes();
    let minuteDegree = ((minute/60)*360)+90;
    minutes.style.transform = `rotate(${minuteDegree}deg)`;

    let hour = now.getHours();
    let hoursDegree = ((hour/12)*360)+90;
    hours.style.transform = `rotate(${hoursDegree}deg)`;
    text.innerText = now;
}
setInterval(clock,1000);
