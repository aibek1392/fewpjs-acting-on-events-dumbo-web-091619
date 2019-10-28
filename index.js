// Your code here
let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#000000";
dodger.style.backgroundColor = "#FF69B4";
// dodger.style.left; // "180px"
dodger.style.bottom = "100px";
dodger.style.left;  "180px";

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      let leftNumbers = dodger.style.left.replace("px", "");
      let left = parseInt(leftNumbers, 10);
  
      dodger.style.left = `${left - 20}px`;
    }
    
    // else if (e.key === "ArrowRight"){
    //     let rightNumbers = dodger.style.right.replace("px", "");
    //   let right = parseInt(rightNumbers, 10);
  
    //   dodger.style.right = `${right - 20}px`;
    // }
  });
  
  function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  document.addEventListener("keydown", function(e) {
    //   debugger
    if (e.key === "ArrowRight") {
      let rightNumbers = dodger.style.left.replace("px", "");
      let right = parseInt(rightNumbers, 10);
  
      dodger.style.left = `${right + 20}px`;
    }
})

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left + 20}px`;
    }
  }
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });