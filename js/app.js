'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let tableBody = document.getElementById('table1');


// Function to get random number and round it.
function randNumb(min, max) {
  return min + Math.random() * (max - min);
}


// Constructor of Salmon Cookie Stores
function Locations(city, min, max, avgcookiesale, totalCookieSale, costumerEachHour, total) {
  this.city = city;
  this.min = min;
  this.max = max;
  this.avgcookiesale = avgcookiesale;
  this.totalCookieSale = totalCookieSale;
  this.costumerEachHour = costumerEachHour;
  this.total = total;
}

let location1 = new Locations('Seattle', 23, 65, 6.3, [], [], 0);
let location2 = new Locations('Tokyo', 3, 24, 1.2, [], [], 0);
let location3 = new Locations('Dubai', 11, 38, 3.7, [], [], 0);
let location4 = new Locations('Paris', 20, 38, 2.4, [], [], 0);
let location5 = new Locations('Lima', 2, 16, 4.6, [], [], 0);

Locations.prototype.cookieSale = function() {
  for (let i = 0; i < hours.length; i ++) {
    let cookieSoldXHour = Math.floor(this.avgcookiesale * randNumb(this.min, this.max));
    this.costumerEachHour.push(cookieSoldXHour);
    this.total += cookieSoldXHour;
  }
};

function topRow() {
  let tableTr1 = document.createElement('tr');
  let tableTh1 = document.createElement('th');
  tableTh1.textContent = '';
  tableTr1.appendChild(tableTh1);
  for (let i = 0; i < hours.length; i++) {
    let hoursInfo = document.createElement('th');
    hoursInfo.textContent=hours[i];
    tableTr1.appendChild(hoursInfo);
  }

  let topRowTotals = document.createElement('th');
  topRowTotals.innerText = 'Daily Total Cookies Sold';
  tableTr1.appendChild(topRowTotals);
  tableBody.appendChild(tableTr1);
}

Locations.prototype.render = function() {
  this.cookieSale();
  let cityTr = document.createElement('tr');
  let locationsTd = document.createElement('td');
  locationsTd.textContent = this.city;
  cityTr.appendChild(locationsTd);

  for (let i = 0; i < hours.length; i++) {
    let newTd = document.createElement('td');
    newTd.textContent = this.costumerEachHour[i];
    cityTr.appendChild(newTd);
  }
  let totalCell = document.createElement('td');
  totalCell.textContent = this.total;
  cityTr.appendChild(totalCell);
  tableBody.appendChild(cityTr);

};

topRow();

location1.render();
location2.render();
location3.render();
location4.render();
location5.render();
