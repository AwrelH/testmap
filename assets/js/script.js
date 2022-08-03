/*
****the regions****
*/
const regions = {
    alternatives: ['abruzzo', 'aosta', 'basilicata', 'calabria', 'campania',
        'emilia-romagna', 'friuli-venezia-giulia', 'lazio',
        'liguria', 'lombardia', 'marche', 'molise', 'piemonte',
        'puglia', 'sardegna', 'sicilia', 'toscana', ' trentino',
        'umbria', 'veneto']
}

/*
****getting document information class of bild****
*/
//let regionName = document.querySelectorAll('.bild');
//ADD questions to questionrow
document.getElementById('questionRow').innerHTML = `Where is the following region<br> ${regions.alternatives[i]}`;

/*
****for loop for my regions****
*/
let arr = regions.alternatives
function questions() {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])

    }
}



/*
****keep score****
****starting from 0
*/
correct = 0;
incorrect = 0;
ind = 0;

questions()

/*
****Start function****
*/
function startGame() { }

/**
 * Eventlisteners to regions, alertmessage with data-title
 */

let elements = document.querySelectorAll('.bild');
elements.forEach(funk => funk.addEventListener('click', event => {
   console.log(event.target.getAttribute("data-title"));
   alert(event.target.getAttribute('data-title'))
  }));

//let funk = function() {
//    let attribute = this.getAttribute("data-title");
//    alert(attribute);}
    




//for (let i = 0; i < elements.length; i++) {
//    elements[i].addEventListener('click', funk, false)
    
       
    
//}