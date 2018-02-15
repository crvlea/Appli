// on vérifie que notre navigateur supporte les service workers
if('serviceWorker' in navigator) {
  // si oui, on essaie d'enregistrer notre service worker
  try {
    navigator.serviceWorker.register('service-worker.js');
  }
  catch (error) {
    // si ça échoue, on écrit un message d'erreur
    console.log('Error while registering the service worker.');
    console.log(error);
  }
}

// var clickme = document.getElementById('click');
// clickme.addEventListener('click', menu, false);
//
// function menu() {
//     var burger = document.getElementById('menuDeroulant');
//     burger.style.visibility = "visible";
//
// };
//
// var clickme = document.getElementById('click');
// clickme.addEventListener('click', body, false);
//
// function Fermermenu() {
//     var fermer = document.getElementById('menuDeroulant');
//     fermer.style.visibility = "hidden";
//
// };

$('.menuB').click(function(){
  $('#menuDeroulant').fadeIn();
});

$('section').click(function(){
  $('#menuDeroulant').fadeOut();
});
