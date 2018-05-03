(function($) {

    //$(".button-collapse").sideNav();
    // ReSharper disable once PossiblyUnassignedProperty
    $('.parallax').parallax();
})(jQuery); // end of jQuery name space
var text = ['//sebastian walter', 'evil.baschdi'];
var counter = 0;
var changeHeadline = document.getElementById('changeHeadline');
var changeTitle = document.getElementById('changeTitle');
setInterval(change, 6000);

function change() {
    changeHeadline.innerHTML = text[counter];
    changeTitle.innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;
    }
}