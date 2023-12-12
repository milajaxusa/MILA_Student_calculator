const NumericInput = $('#mouths_numeric-input, #dependents_numeric-input')
const sliderPoints = $('.mounth_slider-point, .dependent_slider-point')

sliderPoints.on('click', function () {
    const value = $(this).data('value')
    const type = $(this).attr('class').split('_')[0]

    if (type === 'mounth') {
        $('#mouths_numeric-input').val(value)
    } else if (type === 'dependent') {
        $('#dependents_numeric-input').val(value)
    }

    NumericInput.val(value)
    updateSliderColors(value, type)
    usdChangeValue(value, type)
})

function updateSliderColors(value, type) {
    sliderPoints.each(function () {
        const thisType = $(this).attr('class').split('_')[0]

        if (thisType === type) {
            const pointValue = parseInt($(this).data('value'))
            $(this).css('background-color', pointValue <= value ? '#000000' : '#a0a0a0')
        }

        if (type === 'mounth') {
            let percentage = (100 / 12) * value;
            let rest = 100 - percentage;

            $('.mounth_slider-line').css('background', 'linear-gradient(to right, #000 0%, #000 ' + percentage + '%, #a0a0a0 ' + percentage + '%, #a0a0a0 ' + rest + '%)');
        } else if (type === 'dependent') {
            let percentage = (100 / 6) * value
            let rest = 100 - percentage
            $('.dependent_slider-line').css('background', 'linear-gradient(to right, #000 0%, #000 ' + percentage + '%, #a0a0a0 ' + percentage + '%, #a0a0a0 ' + rest + '%)')
        }
    })
}
