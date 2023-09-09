/*? no js js needed from me */
let result = document.querySelector("#screen");

const display = (a) => {
    if (a === 'clear') {
        result.value = ''
    } else if (a === 'delete') {
        result.value = result.value.slice(0, -1)
    } else if (a === 'action') {
        result.value = eval(result.value)
    } else {
        result.value += a
    }
}

