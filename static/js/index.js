var select = document.querySelector('.certi');

var images = select.querySelectorAll('img');
var modal = document.getElementById('myModal');

var modalImg = document.getElementById('img01');

var caption = document.getElementById('caption');

var imgarray = Array.from(images)

imgarray.forEach(function(img1) {
    img1.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        caption.innerHTML = this.alt;
    };
});


  
  // Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";  
}  