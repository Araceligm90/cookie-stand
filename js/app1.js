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

        for (let i = 0; i = hours.length; i++) {
            let tokyoLi = document.createElement('li');
            tokyoLi.innerText = `${hours[i]}: ${this.totalCookieSale[i]} cookies`;
            parentElement.appendChild(tokyoLi);
        }
        let totalLi2 = document.createElement('h3');
        totalLi2.innerText = `Total ${this.total2}`;
        parentElement.appendChild(totalLi2);
    }

}
