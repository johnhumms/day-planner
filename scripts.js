//Moment JS for time at top
var time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(time);

//9 am
const nineBtn = document.getElementById('button') //make button visible
const nineSave = document.getElementById('nine-save') 

nineBtn.addEventListener('click', () => {
    let nineTask = document.getElementById('nine-input').value; //.value targets value inside the box
    localStorage.setItem('nine-am-task', nineTask )

    renderTaskNine();
    })

    function renderTaskNine () {
        let nineData = localStorage.getItem('nine-am-task')
        nineSave.textContent = nineData
}

renderTaskNine();


//10am
const tenBtn = document.getElementById('ten-button')
const tenSave = document.getElementById('ten-save') 

tenBtn.addEventListener('click', () => {
    let tenTask = document.getElementById('ten-input').value;
    localStorage.setItem('ten-am-task', tenTask )

    renderTaskTen();
})

function renderTaskTen () {
    let tenData = localStorage.getItem('ten-am-task')
    tenSave.textContent = tenData
}

renderTaskTen();

//11am
const elevenBtn = document.getElementById('eleven-button')
const elevenSave = document.getElementById('eleven-save') 

elevenBtn.addEventListener('click', () => {
    let elevenTask = document.getElementById('eleven-input').value;
    localStorage.setItem('eleven-am-task', elevenTask )

    renderTaskEleven();
})

function renderTaskEleven () {
    let elevenData = localStorage.getItem('eleven-am-task')
    elevenSave.textContent = elevenData
}

renderTaskEleven();