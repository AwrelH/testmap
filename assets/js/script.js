

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




/*
****for loop for my regions****
*/
let arr = regions.alternatives
function questions() {
  
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        

    }

}

/**
 * random region
 */
let regionRandom = Math.floor(Math.random()* arr.length)
let nameTheRegion = regions.alternatives[regionRandom]

/*
****keep score****
****starting from 0
*/


questions()

/*
****Start function****
*/
function startGame() { }

let i = 0;
 let qBar = document.getElementById('questionRow');
 qBar.innerHTML = `Where is the following region<br> ${nameTheRegion}`;
/**
 * Eventlisteners to regions, alertmessage with data-title
 */
i = 0;
rightCount=0;
wrongCount=0;
let wrong = document.getElementById('wrong');
let right = document.getElementById('right');
wrong.innerHTML = `Incorrect:${i}`
right.innerHTML = `Correct:${i}`


// du ska se till att det kommer ny fråga + att poäng fördelas efter svar. Även ny fråga vid fel svar? 
let elements = document.querySelectorAll('.bild');

elements.forEach(region => {
    region.addEventListener('click', (e) => {
        console.log(e.target.getAttribute('data-title'))
    
    } )
    
});



elements.forEach(funk => funk.addEventListener('click', event => {
   console.log(event.target.getAttribute("data-title"));
   if (event.target.getAttribute("data-title") === nameTheRegion) {
    document.body.style.backgroundColor = 'yellow';
    right += 1;
     
    
    



   }}))