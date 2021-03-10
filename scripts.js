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

//12pm
const twelveBtn = document.getElementById('twelve-button')
const twelveSave = document.getElementById('twelve-save') 

twelveBtn.addEventListener('click', () => {
    let twelveTask = document.getElementById('twelve-input').value;
    localStorage.setItem('twelve-am-task', twelveTask )

    renderTaskTwelve();
})

function renderTaskTwelve () {
    let twelveData = localStorage.getItem('twelve-am-task')
    twelveSave.textContent = twelveData
}

renderTaskTwelve();

//1pm
const oneBtn = document.getElementById('one-button')
const oneSave = document.getElementById('one-save') 

oneBtn.addEventListener('click', () => {
    let oneTask = document.getElementById('one-input').value;
    localStorage.setItem('one-am-task', oneTask )

    renderTaskOne();
})

function renderTaskOne () {
    let oneData = localStorage.getItem('one-am-task')
    oneSave.textContent = oneData
}

renderTaskOne();

//2pm
const twoBtn = document.getElementById('two-button')
const twoSave = document.getElementById('two-save') 

twoBtn.addEventListener('click', () => {
    let twoTask = document.getElementById('two-input').value;
    localStorage.setItem('two-am-task', twoTask )

    renderTaskTwo();
})

function renderTaskTwo () {
    let twoData = localStorage.getItem('two-am-task')
    twoSave.textContent = twoData
}

renderTaskTwo();

//3pm
const threeBtn = document.getElementById('three-button')
const threeSave = document.getElementById('three-save') 

threeBtn.addEventListener('click', () => {
    let threeTask = document.getElementById('three-input').value;
    localStorage.setItem('three-am-task', threeTask )

    renderTaskThree();
})

function renderTaskThree () {
    let threeData = localStorage.getItem('three-am-task')
    threeSave.textContent = threeData
}

renderTaskThree();

//4pm
const fourBtn = document.getElementById('four-button')
const fourSave = document.getElementById('four-save') 

fourBtn.addEventListener('click', () => {
    let fourTask = document.getElementById('four-input').value;
    localStorage.setItem('four-am-task', fourTask )

    renderTaskFour();
})

function renderTaskFour () {
    let fourData = localStorage.getItem('four-am-task')
    fourSave.textContent = fourData
}

renderTaskFour();

//5pm
const fiveBtn = document.getElementById('five-button')
const fiveSave = document.getElementById('five-save') 

fiveBtn.addEventListener('click', () => {
    let fiveTask = document.getElementById('five-input').value;
    localStorage.setItem('five-am-task', fiveTask )

    renderTaskFive();
})

function renderTaskFive () {
    let fiveData = localStorage.getItem('five-am-task')
    fiveSave.textContent = fiveData
}

renderTaskFive();