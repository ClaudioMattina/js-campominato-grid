


/* ******************************************** FUNZIONIIIIIIII *********************************************** */

/* funzione che restituisce un div con le classi crete da me nel css */
let createSquare = () => {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("box");
    return squareDiv;
}

/* **************************************************************************************************************** */


/* collego il main nel js */
let main = document.querySelector("main");

/* collego nel js il contenitore grid*/
let grid = document.getElementById("grid");

let gridVuota = document.getElementById("grid-vuota");

/* collego l'input nel js */
let inputDifficoltà = document.getElementById("difficoltà")

/* collego il bottone play con js */
let buttonPlay = document.getElementById("my-button");

/* aggiungo al bottone una funzionalità */ /* ovvero quella che al click del bottone si genera una griglia in base al valore della difficoltà */
buttonPlay.addEventListener("click", function() {

    /* aggiungo il reset */
     grid.innerHTML = "";

    if(inputDifficoltà.value == "facile"){


        /* CICLO FOR CHE CREA LA SERIE DI QUADRATINI */
        for(i = 0; i < 100; i++){
            /* creo una varialbile che crei un elemento tramite la funzione che ho creato */
            let realSquare = createSquare();
    
            /* aggiungo funzionalità al click con l'eventlistener */
            /* che dice "al click aggiungi la classe clicked (classe che ho creato nel css)" */
            realSquare.addEventListener("click" , function(){
            realSquare.classList.toggle("clicked");
            })
    
            /* adesso inserisco lo square nel parent che volgio (in questo caso nel grid) */
            grid.appendChild(realSquare);
        }
    }
    
    else if(inputDifficoltà.value == "medio"){
            /* CICLO FOR CHE CREA LA SERIE DI QUADRATINI */
            for(i = 0; i < 81; i++){
                /* creo una varialbile che crei un elemento tramite la funzione che ho creato */
                let realSquare = createSquare();
    
                
                realSquare.classList.add("box-media")
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
            let realSquare = createSquare();
    
           
            realSquare.classList.add("box-difficile")
            
            /* aggiungo funzionalità al click con l'eventlistener */
            /* che dice "al click aggiungi la classe clicked (classe che ho creato nel css)" */
            realSquare.addEventListener("click" , function(){
            realSquare.classList.toggle("clicked");
            })
            
            /* adesso inserisco lo square nel parent che volgio (in questo caso nel grid) */
            
            grid.appendChild(realSquare);
    }
    }

 
})






