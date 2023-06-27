//Selectors

//Show Day 
let dayEl = document.querySelector("#currentDay");

//Containers
let hour9 = document.querySelector("#hour-9");
let hour10 = document.querySelector("#hour-10");
let hour11 = document.querySelector("#hour-11");
let hour12 = document.querySelector("#hour-12");
let hour1 = document.querySelector("#hour-1");
let hour2 = document.querySelector("#hour-2");
let hour3 = document.querySelector("#hour-3");
let hour4 = document.querySelector("#hour-4");
let hour5 = document.querySelector("#hour-5");

//Buttons
let save9 = document.querySelector(".saveBtn");
let save10 = document.querySelector("#btn-10");
let save11 = document.querySelector("#btn-11");
let save12 = document.querySelector("#btn-12");
let save13 = document.querySelector("#btn-13");
let save14 = document.querySelector("#btn-14");
let save15 = document.querySelector("#btn-15");
let save16 = document.querySelector("#btn-16");
let save17 = document.querySelector("#btn-17");

//Text Areas
let text9 = document.querySelector("#text-9");
let text10 = document.querySelector("#text-10");
let text11 = document.querySelector("#text-11");
let text12 = document.querySelector("#text-12");
let text13 = document.querySelector("#text-13");
let text14 = document.querySelector("#text-14");
let text15 = document.querySelector("#text-15");
let text16 = document.querySelector("#text-16");
let text17 = document.querySelector("#text-17");


//Main Code
$(function () {

  //Save Button Event Listeners

  save9.addEventListener("click", function () {
    let entry1 = document.getElementById("text-9").value;
    localStorage.setItem("hour-9", entry1);
  });

  save10.addEventListener("click", function () {
    let entry2 = document.getElementById("text-10").value;
    localStorage.setItem("hour-10", entry2);
  });

  save11.addEventListener("click", function () {
    let entry3 = document.getElementById("text-11").value;
    localStorage.setItem("hour-11", entry3);
  });

  save12.addEventListener("click", function () {
    let entry4 = document.getElementById("text-12").value;
    localStorage.setItem("hour-12", entry4);
  });

  save13.addEventListener("click", function () {
    let entry5 = document.getElementById("text-13").value;
    localStorage.setItem("hour-1", entry5);
  });

  save14.addEventListener("click", function () {
    let entry6 = document.getElementById("text-14").value;
    localStorage.setItem("hour-2", entry6);
  });

  save15.addEventListener("click", function () {
    let entry7 = document.getElementById("text-15").value;
    localStorage.setItem("hour-3", entry7);
  });

  save16.addEventListener("click", function () {
    let entry8 = document.getElementById("text-16").value;
    localStorage.setItem("hour-4", entry8);
  });

  save17.addEventListener("click", function () {
    let entry9 = document.getElementById("text-17").value;
    localStorage.setItem("hour-5", entry9);
  });



  //Current Time
  let currentTime = dayjs().hour();
  console.log(currentTime);


  //Container Values
  hour9.value = 9;
  hour10.value = 10;
  hour11.value = 11;
  hour12.value = 12;
  hour1.value = 13;
  hour2.value = 14;
  hour3.value = 15;
  hour4.value = 16;
  hour5.value = 17;


  //Container CurrentTime Comparisons
  if (hour9.value === currentTime) {
    hour9.classList.add("present");
  } else if (hour9.value < currentTime) {
    hour9.classList.add("past");
  } else if (hour9.value > currentTime) {
    hour9.classList.add("future");
  }

  if (hour10.value === currentTime) {
    hour10.classList.add("present");
  } else if (hour10.value < currentTime) {
    hour10.classList.add("past");
  } else if (hour10.value > currentTime) {
    hour10.classList.add("future");
  }

  if (hour11.value === currentTime) {
    hour11.classList.add("present");
  } else if (hour11.value < currentTime) {
    hour11.classList.add("past");
  } else if (hour11.value > currentTime) {
    hour11.classList.add("future");
  }

  if (hour12.value === currentTime) {
    hour12.classList.add("present");
  } else if (hour12.value < currentTime) {
    hour12.classList.add("past");
  } else if (hour12.value > currentTime) {
    hour12.classList.add("future");
  }

  if (hour1.value === currentTime) {
    hour1.classList.add("present");
  } else if (hour1.value < currentTime) {
    hour1.classList.add("past");
  } else if (hour1.value > currentTime) {
    hour1.classList.add("future");
  }

  if (hour2.value === currentTime) {
    hour2.classList.add("present");
  } else if (hour2.value < currentTime) {
    hour2.classList.add("past");
  } else if (hour2.value > currentTime) {
    hour2.classList.add("future");
  }

  if (hour3.value === currentTime) {
    hour3.classList.add("present");
  } else if (hour3.value < currentTime) {
    hour3.classList.add("past");
  } else if (hour3.value > currentTime) {
    hour3.classList.add("future");
  }

  if (hour4.value === currentTime) {
    hour4.classList.add("present");
  } else if (hour4.value < currentTime) {
    hour4.classList.add("past");
  } else if (hour4.value > currentTime) {
    hour4.classList.add("future");
  }

  if (hour5.value === currentTime) {
    hour5.classList.add("present");
  } else if (hour5.value < currentTime) {
    hour5.classList.add("past");
  } else if (hour5.value > currentTime) {
    hour5.classList.add("future");
  }


  // Local Storage
  var getResponse9 = localStorage.getItem("hour-9");
  text9.textContent = getResponse9;

  var getResponse10 = localStorage.getItem("hour-10");
  text10.textContent = getResponse10;

  var getResponse11 = localStorage.getItem("hour-11");
  text11.textContent = getResponse11;

  var getResponse12 = localStorage.getItem("hour-12");
  text12.textContent = getResponse12;

  var getResponse13 = localStorage.getItem("hour-1");
  text13.textContent = getResponse13;

  var getResponse14 = localStorage.getItem("hour-2");
  text14.textContent = getResponse14;

  var getResponse15 = localStorage.getItem("hour-3");
  text15.textContent = getResponse15;

  var getResponse16 = localStorage.getItem("hour-4");
  text16.textContent = getResponse16;

  var getResponse17 = localStorage.getItem("hour-5");
  text17.textContent = getResponse17;

  //Show Day 
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D'));

});


