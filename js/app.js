'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

let seattle = {
    min: 23,
    max: 65,
    avgcookiesale: 6.3,
    totalCookieSale1: [],
    customersEachHour: [],
    total: 0,
    
    seattleCostumers: function(min, max) {
        return Math.floor(min + Math.random() * (max - min));
    },
    calcHourlyCookies: function() {
        // for each hour in hours push totalsale into totalcookiesale. totalsale should be inside the curly braces of the for loop
        for (let i = 0; i < hours.length; i++) {
            let totalSale = this.seattleCostumers(this.min, this.max) * this.avgcookiesale;
            Math.ceil(totalSale);
            console.log(totalSale);
            this.totalCookieSale1.push(totalSale);
            console.log(this.totalCookieSale1);
        }
        for (let j = 0; j < hours.length; j++) {
            this.total += this.totalCookieSale1[j];
        }
    },

    displayHourlyTotals: function() {
        let parentElement = document.getElementById("seattle");
        let titleLi = document.createElement('h2');
        titleLi.innerText = 'Seattle';
        parentElement.appendChild(titleLi);
        
        for (let i = 0; i < hours.length; i++) {
            let seattleLi = document.createElement('li');
            seattleLi.innerText = `${hours[i]}: ${this.totalCookieSale1[i]} cookies`;
            parentElement.appendChild(seattleLi);  
        }
        let totalLi = document.createElement('h3');
        totalLi.innerText = `Total ${this.total}`;
        parentElement.appendChild(totalLi);
    }
    
        // call the cookieshours function inside the render
        // create for loop base off the hours, that will create list items and in that list you will give it text content that is going to equal cookiesperhour [i]
        //apend the list items to the 'stores' element aka parent element 
};

let tokyo = {
    min: 3,
    max: 24,
    avgcookiesale: 1.2,
    totalCookieSale2: [],
    customersEachHour: [],
    total2: 0,

    tokyoCostumers: function(min, max) {
        return Math.floor(min + Math.random() * (max - min));
    },
    calcHourlyCookies2: function() {
        for (let i = 0; i < hours.length; i++) {
            let totalSale2 = this.tokyoCostumers(this.min, this.max) * this.avgcookiesale;
            console.log(totalSale2);
            this.totalCookieSale2.push(totalSale2);
            console.log(this.totalCookieSale2);
        }
        for (let j = 0; j < hours.length; j++) {
            this.total2 += this.totalCookieSale2[j];
        }
    },

    displayHourlyTotals2: function() {
        let parentElement = document.getElementById("tokyo");
        let titleLi2 = document.createElement('h2');
        titleLi2.innerText = 'Tokyo';
        parentElement.appendChild(titleLi2);

        for (let i = 0; i < hours.length; i++) {
            let tokyoLi = document.createElement('li');
            tokyoLi.innerText = `${hours[i]}: ${this.totalCookieSale2[i]} cookies`;
            parentElement.appendChild(tokyoLi);
        }
        let totalLi2 = document.createElement('h3');
        totalLi2.innerText = `Total ${this.total2}`;
        parentElement.appendChild(totalLi2);
    }
};


let dubai = {
    min: 11,
    max: 38,
    avgcookiesale: 3.7,
    totalCookieSale3: [],
    customersEachHour: [],
    total3: 0,

    dubaiCustomers: function(min, max) {
        return Math.floor(min + Math.random() * (max - min));
    },
    calcHourlyCookies3: function() {
        for (let i = 0; i < hours.length; i++) {
            let totalSale3 = this.dubaiCustomers(this.min, this.max) * this.avgcookiesale;
            Math.ceil(totalSale3);
            console.log(totalSale3);
            this.totalCookieSale3.push(totalSale3);
            console.log(this.totalCookieSale3);
        }
        for (let j = 0; j < hours.length; j++) {
            this.total3 += this.totalCookieSale3[j];
        }
    },

    displayHourlyTotals3: function() {
        let parentElement = document.getElementById("dubai");
        let titleLi3 = document.createElement('h2');
        titleLi3.innerText = 'Dubai';
        parentElement.appendChild(titleLi3);

        for (let i = 0; i < hours.length; i++) {
            let dubaiLi = document.createElement('li');
            dubaiLi.innerText = `${hours[i]}: ${this.totalCookieSale3[i]} cookies.`;
            parentElement.appendChild(dubaiLi);
        }
        let totalLi3 = document.createElement('h3');
        totalLi3.innerText = `Total ${this.total3}`;
        parentElement.appendChild(totalLi3);
    }
};

let paris = {
    min: 20,
    max: 38, 
    avgcookiesale: 2.4,
    totalCookieSale4: [],
    customersEachHour: [],
    total4: 0,

    parisCustomers: function(min, max) {
        return Math.floor(min + Math.random() * (max - min));
    },
    calcHourlyCookie4: function() {
        for (let i = 0; i < hours.length; i++) {
            let totalSale4 = this.parisCustomers(this.min, this.max) * this.avgcookiesale;
            console.log(totalSale4);
            this.totalCookieSale4.push(totalSale4);
            console.log(this.totalCookieSale4);
        }
        for (let j = 0; j < hours.length; j++) {
            this.total4 += this.totalCookieSale4[j];
        }
    },

    displayHourlyTotals4: function() {
        let parentElement = document.getElementById("paris");
        let titleLi4 = document.createElement('h2');
        titleLi4.innerText = 'Paris';
        parentElement.appendChild(titleLi4);

    for (let i = 0; i < hours.length; i++) {
        let parisLi = document.createElement('li');
        parisLi.innerText = `${hours[i]}: ${this.totalCookieSale4[i]} cookies.`;
        parentElement.appendChild(parisLi);
    }
    let totalLi4 = document.createElement('h3');
    totalLi4.innerText = `Total ${this.total4}`;
    parentElement.appendChild(totalLi4);
    }   
};

let lima = {
    min: 2,
    max: 16,
    avgcookiesale: 4.6,
    totalCookieSale5: [],
    customersEachHour: [],
    total5: 0,

    limaCustomers: function(min, max) {
        return Math.floor(min + Math.random() * (max - min));
    },
    calcHourlyCookies5: function() {
        for (let i = 0; i < hours.length; i++) {
            let totalSale5 = this.limaCustomers(this.min, this.max) * this.avgcookiesale;
            console.log(totalSale5);
            this.totalCookieSale5.push(totalSale5);
            console.log(this.totalCookieSale5);
        }
        for (let j = 0; j < hours.length; j++) {
            this.total5 += this.totalCookieSale5[j];
        }
    },

    displayHourlyTotals5: function() {
        let parentElement = document.getElementById("lima");
        let titleLi5 = document.createElement('h2');
        titleLi5.innerText = 'Lima';
        parentElement.append(titleLi5);

        for (let i = 0; i < hours.length; i++) {
            let limaLi = document.createElement('li');
            limaLi.innerText = `${hours[i]}: ${this.totalCookieSale5[i]} cookies`;
            parentElement.appendChild(limaLi);  
        }
        let totalLi5 = document.createElement('h3');
        totalLi5.innerText = `Total ${this.total5}`;
        parentElement.appendChild(totalLi5);
    }
};



seattle.calcHourlyCookies();
seattle.displayHourlyTotals();

tokyo.calcHourlyCookies2();
tokyo.displayHourlyTotals2();

dubai.calcHourlyCookies3();
dubai.displayHourlyTotals3();

paris.calcHourlyCookie4();
paris.displayHourlyTotals4();

lima.calcHourlyCookies5();
lima.displayHourlyTotals5();




//  let parentElement = document.getElementById("stores");
//         let storesLi = document.createElement('li');
//         storesLi.innerText = totalCookieSale1, totalCookieSale2, totalCookieSale3, totalCookieSale4, totalCookieSale5;
//         parentElement.appendChild(storesLi);  