// name our variables

const containerOne = document.getElementById('container');
const containerTwo = document.getElementById('container2');
const ratingText = document.getElementById('note');
const list = document.getElementById('list');
const vals= document.querySelectorAll('#numbers');
const submitBtn= document.getElementById('submitbtn');

vals.forEach(function (val) {
  val.addEventListener('click', valueClicked);

  function valueClicked(e) {
    const ratingValue = e.target.innerHTML;

    submitBtn.addEventListener('click', submitFunc);

    function submitFunc() {
     ratingText.innerHTML = "You selected " + ratingValue + " out of 5";
     containerOne.style.display = "none";
     containerTwo.style.display = "flex";

     setTimeout(timeOut, 3000);

      function timeOut() {
        containerOne.style.display = 'flex';
        containerTwo.style.display = 'none';
      }
    }
  }
})


//  if (ratingValue === '1') {
//         ratingText.innerHTML = "You Selected 1 out of 5";
//         containerOne.style.display = 'none';
//         containerTwo.style.display = 'flex';
//       } else if (ratingValue === '2') {
//         ratingText.innerHTML = "You Selected 2 out of 5";
//         containerOne.style.display = 'none';
//         containerTwo.style.display = 'flex';
//       } else if (ratingValue === '3') {
//         ratingText.innerHTML = "You Selected 3 out of 5";
//         containerOne.style.display = 'none';
//         containerTwo.style.display = 'flex';
//       } else if (ratingValue === '4') {
//         ratingText.innerHTML = "You Selected 4 out of 5";
//         containerOne.style.display = 'none';
//         containerTwo.style.display = 'flex';
//       } else if (ratingValue === '5') {
//         ratingText.innerHTML = "Wow, You Selected 5 out of 5";
//         containerOne.style.display = 'none';
//         containerTwo.style.display = 'flex';
//       } 



























// p.forEach(function (val) {
//   val.addEventListener('click', valueClicked);

//   function valueClicked(e) {
//     let ratingValue = e.target.innerHTML;
    
//     submitBtn.addEventListener('click', submitFunc () {
//       if (ratingValue ===1)
//     })

//   }
// })

// let arrays= Array.from(p);
// arrays.forEach(function(array) {
// // array.addEventListener('click', valueClicked);

// let x= 10;
// })

// function submitFunc() {
  
// }

// add a event listener for the p

  // p.forEach(function (val) {
  //   val.addEventListener('click', valueClicked);

  //   function valueClicked(e) {
  //     let ratingValue = e.target.innerHTML;
  //     console.log(ratingValue);
  //   }
  // })

  //  console.log(p);

    
    // if (ratingValue === 1) {
    //  console.log(one);
  //   containerOne.style.display = "none";
  //   containerTwo.style.display = "block";
  //   ratingText.textContent = "You Selected 1 out of 5";
  // 



