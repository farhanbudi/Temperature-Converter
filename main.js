
function convert() {
    let temp = document.querySelector('#input').value;
    const from = document.querySelector('#temperature-from').value;
    const to = document.querySelector('#temperature-to').value;
    document.querySelector('#output').value = convert_temperature(temp, from, to)
}

function convert_temperature(temp, from, to) {
    if (from == 'celcius') {
        if (to == 'reamur') {
            temp = temp*4/5;
        } else if (to == 'fahrenheit') {
            temp = (temp*9/5) + 32;
        }
    } else if (from == 'reamur') {
        if (to == 'celcius') {
            temp = temp*5/4;
        } else if (to == 'fahrenheit') {
            temp = (temp*9/4) + 32;
        }
    } else {
        if (to == 'celcius') {
            temp = (temp-32)*5/9;
        } else if (to == 'reamur') {
            temp = (temp-32)*4/9;
        }
    }
    return temp
};

function changeBg() {
    document.querySelector('body').style.backgroundColor = document.querySelector('#bg-input').value;
};

module.exports = convert_temperature;
