const cbutton = document.querySelector('.cbutton');
const cateP = document.querySelectorAll(".cate-jobs-p input");

const cateT = document.querySelectorAll('.cate-time input');

const catePost = document.querySelectorAll('[name=posted-time]');

const range = document.querySelector('#num');

//* Logic to Reset all values in filter section
function reset() {
    for (checkbox of cateP) {
        checkbox.checked = false;
    }
    for (radio of cateT) {
        radio.checked = false;
    }
    for (budget of catePost) {
        // console.log(budget.value);
        budget.value = budget[0]
    }
    range.textContent = 0;
}

