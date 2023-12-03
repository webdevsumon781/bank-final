document.addEventListener("DOMContentLoaded", function() {
    var cardImg = document.querySelector('.card-img');
    var hiddenSection = document.getElementById('hiddenSection');
    var backSideShow = document.querySelector(".back-side");
    var cardImgHide = document.querySelector(".card-img");
    var frontSideHide = document.querySelector(".front-side");

    cardImg.addEventListener('click', function() {
       
      setTimeout(function() {
        cardImgHide .classList.add('card-img-hide'); // Make the section visible after 3 seconds
      }, 50); // Delay of .050 seconds (50 milliseconds)
      
      setTimeout(function() {
        frontSideHide .classList.add('front-side-hide'); // Make the section visible after 3 seconds
      }, 800); // Delay of .8 seconds (800 milliseconds)
      

      setTimeout(function() {
        backSideShow.classList.add('back-side-show') // Make the section visible after 3 seconds
      }, 800); // Delay of .8 seconds (800 milliseconds)
      

      setTimeout(function() {
        hiddenSection.style.display = 'block'; // Make the section visible after 3 seconds
      }, 2000); // Delay of 2 seconds (2000 milliseconds)
      
    });
  });
  




document.querySelector("#panelBtnOne").onclick = function(){
    document.querySelector("#panel1").style.display="none";
    document.querySelector("#panel2").style.display="block";
    document.querySelector("#panel3").style.display="none";
    document.querySelector("#panel4").style.display="none";

    document.querySelector(".blnc").innerHTML = "- 6.548,35";
    document.querySelector(".blnc").style.color="#F25959";
    document.querySelector(".doller-sign").style.color="#F25959";
};

document.querySelector("#panelBtnTwo").onclick = function(){
    document.querySelector("#panel1").style.display="none";
    document.querySelector("#panel2").style.display="none";
    document.querySelector("#panel3").style.display="block";
    document.querySelector("#panel4").style.display="none";

    document.querySelector(".blnc").innerHTML = "6.548,35";
    document.querySelector(".blnc").style.color="#fff";
    document.querySelector(".doller-sign").style.color="#fff";
};

document.querySelector("#panelBtnThree").onclick = function(){
    document.querySelector("#panel1").style.display="none";
    document.querySelector("#panel2").style.display="none";
    document.querySelector("#panel3").style.display="none";
    document.querySelector("#panel4").style.display="block";

    document.querySelector(".blnc").innerHTML = "6.548,35";
    document.querySelector(".blnc").style.color="#fff";
    document.querySelector(".doller-sign").style.color="#fff";
};

