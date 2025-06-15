// panic-redirect.js

(function() {
  // Check the stored panic flag
  var isPanic = localStorage.getItem('panic') === 'true';

  // If panic is active, redirect
  if (isPanic) {
    // Replace with your target URL
    var targetUrl = 'index.html?panic=true';
    window.location.replace(targetUrl);
  }
})();
