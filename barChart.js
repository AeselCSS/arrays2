"use strict";

// VISUALIZE THE QUEUE
window.addEventListener("load", startApp);

function startApp() {
  setInterval(createChartBars, 1000);
}

// const queue = [
//   32, 11, 24, 27, 4, 19, 15, 2, 9, 28, 1, 30, 22, 10, 6, 13, 23, 31, 7, 13, 22, 11, 4, 17, 4, 29, 15, 6, 9, 28, 1, 5, 9,
//   13, 6, 3, 15, 21, 7, 16,
// ];

// Calculate the height of the bar based on the number of customers in the queue
function calculateBarHeight(numberOfCustomers) {
  const maxBarHeight = 160;
  const maxCustomers = 32;
  const barHeight = (numberOfCustomers / maxCustomers) * maxBarHeight;
  return barHeight;
}

// Set the height of the bar with the given height in pixels
function setBarHeight(bar, height) {
  bar.style.height = `${height}px`;
}

// Get the bar with the given bar number
function targetBar(barNumber) {
  return document.querySelector(`.bar:nth-child(${barNumber})`);
}

// Update the bar with the given bar number and the bar height based on the number of customers
function updateBar(barNumber, numberOfCustomers) {
  const bar = targetBar(barNumber);
  const barHeight = calculateBarHeight(numberOfCustomers);
  setBarHeight(bar, barHeight);
}

// Update all bars in the queue by looping through the queue and updating each bar
function updateBarChart() {
  for (let i = 0; i < queue.length; i++) {
    updateBar(i + 1, queue[i]);
  }
}

// DATA HANDLING
const queue = [];

// add a number between 1 and 32 to the queue
function addToQueue() {
  const randomNumber = Math.floor(Math.random() * 32) + 1;
  queue.push(randomNumber);
  console.log(randomNumber);
}

// remove the first number in the queue if the queue is longer than 40
function queueHandler() {
  addToQueue();
  if (queue.length === 41) {
    queue.shift();
  }
  console.log(queue);
}

// DATA & VISUALS
// Create a bar chart based on the queue
function createChartBars() {
  queueHandler();
  updateBarChart();
}
