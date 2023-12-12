const exchangerateAPI = 'b0e8563d1ccf7ae77fc9f5c4' //Esconda isso caso o plano da API fique pago

const converterInput = $('#converter-coin')
const resultInput = $('#converter-value')

// adicionar moedas disponíveis em options 
$.ajax({
    url: 'https://v6.exchangerate-api.com/v6/' + exchangerateAPI + '/codes',
    method: 'GET',
    success: function(data) {
        updateDatalist(data.supported_codes)
    },
    error: function(err) {
        console.error('Error:', err)
    }
})

function updateDatalist(codes) {
    var datalist = $('#moedasSelect')
    
    datalist.empty()
    codes.forEach(function(code) {
        datalist.append('<option value="' + code + '">' + code + '</option>')
    })
}

//comparação de moedas
let conversion_rates

$.ajax({
    url: 'https://v6.exchangerate-api.com/v6/' + exchangerateAPI + '/latest/USD',
    method: 'GET',
    success: function(data) {
        conversion_rates = data.conversion_rates
    },
    error: function(err) {
        console.error('Error:', err)
    }
})

converterInput.on('input', updateCoinValue)

function updateCoinValue() {
    const selectedCoin = converterInput.val().split(',')[0]

    if (selectedCoin in conversion_rates && total > 0) {
        const coinConvertedInUSD = parseFloat(total * conversion_rates[selectedCoin])
        resultInput.val(valueFormatter(coinConvertedInUSD))

    } else {
        resultInput.val('')
    }
}