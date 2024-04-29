
var images = document.querySelectorAll('.image');


for (var i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        
        alert(this.getAttribute('src'));
    };
}