/*-------------------------------------
| Fancy Comment Heading (c2 + tab)
-------------------------------------*/
// alert('You linked to me.');

// single line comment
/*
    multiline Comments
    look
    like
    this
*/
console.log('This is only seen by us.');

// wait for page to load before we try and use the orbs
window.onload = function() {

    // grabbing orbs and assigning to a handle (variable)
    var orbs = document.querySelectorAll('.orb');

    console.log(orbs);
    console.log(orbs[0]);
    console.log(orbs[1]);
    console.log(orbs[2]);
    console.log(orbs[3]);

    /* Orb1 Management -------------------------------*/
    orbs[0].addEventListener('click', function(){
        console.log('Ouch you clicked me.');
        orbs[0].classList.toggle('on');
    });
    orbs[0].addEventListener('mouseover', function(){
        console.log('Ouch you mouseovered me.');
        orbs[0].src = './img/sun.png';
    });
    orbs[0].addEventListener('mouseout', function(){
        console.log('Ouch you mouseoutted me.');
        orbs[0].src = './img/moon.png';
    });

}; // this is where window load ends
