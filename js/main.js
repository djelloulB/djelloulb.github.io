// Get the modal
var modal = document.querySelectorAll("#realisations div.modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
//var img = document.getElementById('myImg');
var img = document.getElementsByClassName('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.querySelectorAll("#realisations .caption");
// Fonction onclick
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
