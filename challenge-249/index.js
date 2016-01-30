let data = "9.20 8.03 10.02 8.08 8.14 8.10 8.31 8.28 8.35 8.34 8.39 8.45 8.38 8.38 8.32 8.36 8.28 8.28 8.38 8.48 8.49 8.54 8.73 8.72 8.76 8.74 8.87 8.82 8.81 8.82 8.85 8.85 8.86 8.63 8.70 8.68 8.72 8.77 8.69 8.65 8.70 8.98 8.98 8.87 8.71 9.17 9.34 9.28 8.98 9.02 9.16 9.15 9.07 9.14 9.13 9.10 9.16 9.06 9.10 9.15 9.11 8.72 8.86 8.83 8.70 8.69 8.73 8.73 8.67 8.70 8.69 8.81 8.82 8.83 8.91 8.80 8.97 8.86 8.81 8.87 8.82 8.78 8.82 8.77 8.54 8.32 8.33 8.32 8.51 8.53 8.52 8.41 8.55 8.31 8.38 8.34 8.34 8.19 8.17 8.16"

let arr = data.split(' ').map(Number);
let prices = [Math.max(...arr), 0];
let index = 0;

for(let i in arr) {
    arr[i] < prices[0] ? (prices = [arr[i], 0], index = i):(prices, index);
    let j = index + 1;
    do {
        j++;
        arr[j] > prices[1] ? (prices = [arr[i], arr[j]]):(prices);
    } while (j < arr.length);
}

prices = prices.join(', ');

const body = document.getElementsByTagName('body')[0];
body.innerHTML = '<div>'+prices+'</div>';
