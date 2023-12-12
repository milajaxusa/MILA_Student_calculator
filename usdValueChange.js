let udsValueMonthly = 0
let usdValueDependent = 0
let total

let intervalId = null

function usdChangeValue(value, type) {
    if (intervalId !== null) {
        clearInterval(intervalId)
    }

    if (type === 'mounth') {
        udsValueMonthly = studentMounthly * value
    } else if (type === 'dependent') {
        usdValueDependent = dependentMounthly * value
    }

    usdUpdateValue(udsValueMonthly + usdValueDependent)
}

function usdUpdateValue(newValue) {
    total = newValue
    let actualNumber = 0
    const intervalDuration = 25

    intervalId = setInterval(looping, intervalDuration)

    function looping() {
        actualNumber = addNumberAnimation(actualNumber, newValue)
        $('#usd_display').text('$' + valueFormatter(actualNumber))

        if (actualNumber >= newValue) {
            clearInterval(intervalId)
        }
    }

    updateCoinValue()
}

function addNumberAnimation(animatedNumber, newNumber) {
    const stepValue = Math.ceil((newNumber - animatedNumber) / 10)
    const value = animatedNumber + stepValue

    if (value >= newNumber) {
        return newNumber
    } else {
        return value
    }
}