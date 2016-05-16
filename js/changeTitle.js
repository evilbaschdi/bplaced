var titles = ['//sebastian walter', 'evil.baschdi'];

function changeTitle() {
  var millis = 6000,
      count = 0;
  titles.push(document.title);
  setInterval(
    function() {
      document.title = titles[count % titles.length];
      ++count;
    },
    millis);
};