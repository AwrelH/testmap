
//document.addEventListener('click', myRegion);

const regions = { alternatives : ['abruzzo', 'aosta', 'basilicata', 'calabria', 'campania',
                    'emilia-romagna', 'friuli-venezia-giulia', 'lazio',
                    'liguria', 'lombardia', 'marche','molise', 'piemonte',
                    'puglia', 'sardegna', 'sicilia', 'toscana', ' trentino',
                    'umbria', 'veneto' ]
}


let regionName = document.querySelectorAll('.bild');
document.getElementById('questionRow').innerHTML = `Click on ${regions.alternatives[1]}`;



let arr = regions.alternatives
function questions() {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        
    }
}
correct = 0;
incorrect = 0;
questions()