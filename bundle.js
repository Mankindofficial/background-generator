(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const input1 = document.querySelector(".color1");
const input2 = document.querySelector(".color2");
const h3 = document.querySelector("h3");
const body = document.querySelector("#bodyy");

const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const setRandomColor = () => {
	input1.value = getRandomColor();
	input2.value = getRandomColor();
	body.style.background = `linear-gradient(to right, ${input1.value}, ${input2.value})`;
	h3.textContent = body.style.background;
}

setRandomColor();

const changeBackground = () => {
	body.style.background = `linear-gradient(to right, ${input1.value}, ${input2.value})`;
	h3.textContent = body.style.background;
}

input1.addEventListener("input", changeBackground);
input2.addEventListener("input", changeBackground);
},{}]},{},[1]);
