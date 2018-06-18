var imageDials = document.querySelectorAll('div.choices img');
var linkTheme = document.querySelector('link.theme');

console.log(imageDials);
console.log(imageDials[0].dataset.theme);
console.log(imageDials[1].dataset.theme);
console.log(imageDials[2].dataset.theme);


imageDials[0].addEventListener('click', function() {
    console.log('You clicked me!!!');

    // Add Class to chosen one.
    // no matter which one is on, turn em all off.
    imageDials[0].classList.remove('chosen');
    imageDials[1].classList.remove('chosen');
    imageDials[2].classList.remove('chosen');

    // add to the chosen one
    imageDials[0].classList.add('chosen');

    // change theme stylesheet
    var whichTheme = imageDials[0].dataset.theme;
    linkTheme.href = whichTheme;

});


imageDials[1].addEventListener('click', function() {
    console.log('You clicked me!!!');

    // Add Class to chosen one.
    // no matter which one is on, turn em all off.
    imageDials[0].classList.remove('chosen');
    imageDials[1].classList.remove('chosen');
    imageDials[2].classList.remove('chosen');

    // add to the chosen one
    imageDials[1].classList.add('chosen');

    // change theme stylesheet
    var whichTheme = imageDials[1].dataset.theme;
    linkTheme.href = whichTheme;

});


imageDials[2].addEventListener('click', function() {
    console.log('You clicked me!!!');

    // Add Class to chosen one.
    // no matter which one is on, turn em all off.
    imageDials[0].classList.remove('chosen');
    imageDials[1].classList.remove('chosen');
    imageDials[2].classList.remove('chosen');

    // add to the chosen one
    imageDials[2].classList.add('chosen');

    // change theme stylesheet
    var whichTheme = imageDials[2].dataset.theme;
    linkTheme.href = whichTheme;

});
