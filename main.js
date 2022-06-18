let hours = document.getElementsById('hours');
let minutes = document.getElementsById('minutes');
let seconds = document.getElementsById('seconds');
let ampm = document.getElementsById('ampm');

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

hours.innerHtml = h;
minutes.innerHtml = m;
seconds.innerHtml = s;