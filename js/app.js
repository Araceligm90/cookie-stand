'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

let seattle = {
    min: 23,
    max: 65,
    avgcookiesale: 6.3,
    totalCookieSale1: [],
    calcHourlyCookies: function() {
        // for each hour in hours push totalsale into totalcookiesale. totalsale should be inside the curly braces of the for loop
        for (let i = 0; i < hours.length; i++) {
            let totalSale = this.seattleCostumers(this.min, this.max) * this.avgcookiesale;
            console.log(totalSale);
            this.totalCookieSale1.push(totalSale);
            console.log(this.totalCookieSale1);
        }
    },
    seattleCostumers: function(min, max) {
        return min + Math.random() * (max - min);
    }
};


let tokyo = {
    min: 3,
    max: 24,
    avgcookiesale: 1.2,
    totalCookieSale2: [],
    calcHourlyCookies: function() {
        for (let i = 0; i < hours.length; i++) {
            let totalSale = this.tokyoCostumers(this.min, this.max) * this.avgcookiesale;
            console.log(totalSale);
            this.totalCookieSale2.push(totalSale);
            console.log(this.totalCookieSale2);
    }
},
    tokyoCostumbers: function(min, max) {
        return min + Math.random() * (max - min);
    }
};


let dubai = {
    min: 11,
    max: 38,
    avgcookiesale: 3.7,
    totalCookieSale3: [],
    calcHourlyCookies: function() {
        for (let i = 0; i < hours.length; i++) {
            let totalSale = this.dubaiCostumers(this.min, this.max) * this.avgcookiesale;
            console.log(totalSale);
            this.totalCookieSale3.push(totalSale);
            console.log(this.totalCookieSale3);
        }
    },
    dubaiCostumbers: function (min, max) {
        return min + Math.random() * (max - min);
    }
};

let paris = {
    min: 20,
    max: 38, 
    avgcookiesale: 2.4,
    totalCookieSale4: [],
    calcHourlyCookies: function() {
        for (let i = 0; i < hours.length; i++) {
            let totalSale = this.parisCostumers(this.min, this.max) * this.avgcookiesale;
            console.log(totalSale);
            this.totalCookieSale4.push(totalSale);
            console.log(this.totalCookieSale4);
        }
    },
    parisCostumers: function (min, max) {
        return min + Math.random() * (max - min);
    }
};

let lima = {
    min: 2,
    max: 16,
    avgcookiesale: 4.6,
    totalCookieSale5: [],
    calcHourlyCookies: function() {
        for (let i = 0; i < hours.length; i++) {
            let totalSale = this.limaCostumers(this.min, this.max) * this.avgcookiesale;
            console.log(totalSale);
            this.totalCookieSale5.push(totalSale);
            console.log(this.totalCookieSale5);
        }
    },
    limaCostumers: function (min, max) {
        return min + Math.random() * (max - min);
    }
};

lima.calcHourlyCookies();

let parentElement = document.getElementById("CookieSale");
let cookieSaleLi = document.createElement('li');
cookieSaleLi.innerText = totalCookieSale1, totalCookieSale2, totalCookieSale3, totalCookieSale4, totalCookieSale5;
parentElement.appendChild(cookieSaleLi);


// for (let i = 0; i < totalCookieSale1.length; i++) {
//     let saleOne = totalCookieSale1[i];
//     let newLi = document.createElement('li');
//     newLi.innerText = 'hELO';
// }