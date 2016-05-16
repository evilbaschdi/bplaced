var text = ['//sebastian walter', 'evil.baschdi'];
var counter = 0;
var elem = document.getElementById('changeHeadline');
setInterval(change, 6000);

function change() {
  elem.innerHTML = text[counter];  
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}
