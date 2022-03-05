


/* ******************************************** FUNZIONIIIIIIII *********************************************** */

/* funzione che restituisce un div con le classi crete da me nel css */
const createSquare = () => {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("box");
    return squareDiv;
}

/* **************************************************************************************************************** */


/* collego il main nel js */
const main = document.querySelector("main");

/* collego nel js il contenitore grid*/
const grid = document.getElementById("grid");

/* collego l'input nel js */
const inputDifficoltà = document.getElementById("difficoltà")

/* collego il bottone play con js */
const buttonPlay = document.getElementById("my-button");



/* aggiungo una funzionalità al click del bottone play */
buttonPlay.addEventListener("click", function() {

    /* al click del pulzante play, rimuove la classe d-none */
    main.classList.remove("d-none")
    /* e aggiunge la classe(d-block) */
    main.classList.add("d-block")

})


if(inputDifficoltà.value == "facile"){

    /* CICLO FOR CHE CREA LA SERIE DI QUADRATINI */
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
}

else if(inputDifficoltà.value == "intermedio"){
        /* CICLO FOR CHE CREA LA SERIE DI QUADRATINI */
        for(i = 0; i < 81; i++){
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
}

else {
      /* CICLO FOR CHE CREA LA SERIE DI QUADRATINI */
      for(i = 0; i < 49; i++){
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
}