const inputfelt = document.querySelector('input')
const valutaer = document.getElementById('userSelectValue')
const heading = document.getElementById('userResponse')

valutaer.addEventListener(
    'change', function() {
        const valgtvaluta = valutaer.value

        console.log('valgt valuta', valgtvaluta)
    }
)
inputfelt.addEventListener('input', function(event) {
    console.log('antalpenge', inputfelt.value)
    const selectedValue = parseFloat(valutaer.value);
    const userInput = inputfelt.value
    const result = userInput / selectedValue;
    heading.textContent = result
}
)
