var imageDials = document.querySelectorAll('div.choices img');
var linkTheme = document.querySelector('link.theme');

console.log(imageDials);
console.log(imageDials[0].dataset.theme);
console.log(imageDials[1].dataset.theme);
console.log(imageDials[2].dataset.theme);


imageDials.forEach(function(item){
    item.addEventListener('click', function() {
        console.log('Looped Version');

        // Add Class to chosen one.
        // no matter which one is on, turn em all off.
        imageDials[0].classList.remove('chosen');
        imageDials[1].classList.remove('chosen');
        imageDials[2].classList.remove('chosen');

        // add to the chosen one
        item.classList.add('chosen');

        // change theme stylesheet
        var whichTheme = item.dataset.theme;
        linkTheme.href = whichTheme;
    });
});
