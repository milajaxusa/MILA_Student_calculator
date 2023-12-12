// Mude essas variáveis de acordo com a mensalidade correta

let studentMounthly = 1166.66
let dependentMounthly = 400

// não mude daqui pra baixo

const studentYearly = studentMounthly * 12
const dependentYearly = dependentMounthly * 12

$('#student_mouthly').text(valueFormatter(studentMounthly))
$('#student_yearly').text(valueFormatter(studentYearly))

$('#dependent_monthly').text(valueFormatter(dependentMounthly))
$('#dependent_yearly').text(valueFormatter(dependentYearly))

function valueFormatter(value) {
    return parseFloat(value).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
}