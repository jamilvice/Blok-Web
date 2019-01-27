var download = document.querySelector('article footer button:last-child');

download.addEventListener('click', function(){
  document.body.classList.toggle('download');
})


var pop = document.querySelector('.popup');

function bericht(){
    alert('Het verhaal is toegevoegd aan je downloads!');

}

pop.addEventListener('click', bericht);
