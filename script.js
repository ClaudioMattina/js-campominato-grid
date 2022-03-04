
/* collego il main nel js */
const main = document.querySelector("main");

/* collego nel js */
const grid = document.getElementById("grid");

/* ******************************************** FUNZIONIIIIIIII *********************************************** */

/* funzione che restituisce un div con le classi crete da me nel css */
const createSquare = () => {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("box");
    return squareDiv;
}

/* **************************************************************************************************************** */











for(i = 0; i < 100; i++){
    /* creo una varialbile che crei un elemento tramite la funzione che ho creato */
    const realSquare = createSquare();

    /* aggiungo funzionalità al click con l'eventlistener */
    /* che dice "al click aggiungi la classe clicked (classe che ho creato nel css)" */
    realSquare.addEventListener("click" , function(){
        realSquare.classList.toggle("clicked");
    })

    /* adesso inserisco lo square nel parent che volgio (in questo caso nel grid) */
    grid.appendChild(realSquare);
}


