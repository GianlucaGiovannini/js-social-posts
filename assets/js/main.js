/* Milestone 1
    Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
    id del post, numero progressivo da 1 a n
    nome autore,
    foto autore,
    data in formato americano (mm-gg-yyyy),
    testo del post,
    immagine (non tutti i post devono avere una immagine),
    numero di likes.
    Non è necessario creare date casuali 
*/
/*  BONUS DATA INVERTITA */

/**
 * ## Convertitore Date
 * @param {string} datastring il valore (stringa) di una data es (12/12/1920)
 * @returns {string} data invertita
 */
function convertitoreData(datastring) {
    const mesi = ["Gennario", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre", ]
    let data = new Date(datastring);
    return `${data.getDate()}/${mesi[data.getMonth()]}/${data.getFullYear()}`;
}

const post = [{
        id: 1,
        autoreNome: "Phill",
        autoreCognome: "Mangione",
        gender: "uomo",
        foto: "https://picsum.photos/50/50",
        data: "02/25/2021",
        testo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum, nisi incidunt excepturi non officiis fuga. Molestiae, necessitatibus.",
        img_post: "https://picsum.photos/1280/600",
        like: ""
    },
    {
        id: 2,
        autoreNome: "Sofia",
        autoreCognome: "Perlari",
        gender: "donna",
        foto: "https://picsum.photos/80/80",
        data: "04/13/2022",
        testo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum, nisi incidunt excepturi non officiis fuga. Molestiae, necessitatibus.",
        img_post: "",
        like: ""
    },
    {
        id: 3,
        autoreNome: "Ambra",
        autoreCognome: "Cusin",
        gender: "donna",
        foto: "",
        data: "06/12/2021",
        testo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum, nisi incidunt excepturi non officiis fuga. Molestiae, necessitatibus.",
        img_post: "https://picsum.photos/1380/680",
        like: ""
    },
    {
        id: 4,
        autoreNome: "Matteo",
        autoreCognome: "Sperlari",
        gender: "uomo",
        foto: "https://picsum.photos/100/100",
        data: "06/12/2021",
        testo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum, nisi incidunt excepturi non officiis fuga. Molestiae, necessitatibus.",
        img_post: "",
        like: ""
    },
    {
        id: 5,
        autoreNome: "Gianluca",
        autoreCognome: "Giovannini",
        gender: "uomo",
        foto: "https://picsum.photos/110/110",
        data: "06/12/2021",
        testo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum, nisi incidunt excepturi non officiis fuga. Molestiae, necessitatibus.",
        img_post: "https://picsum.photos/1480/780",
        like: ""
    },
    {
        id: 6,
        autoreNome: "Matteo",
        autoreCognome: "Giannetti",
        gender: "uomo",
        foto: "",
        data: "06/12/2021",
        testo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum, nisi incidunt excepturi non officiis fuga. Molestiae, necessitatibus.",
        img_post: "https://picsum.photos/1580/880",
        like: ""
    }
]

/* Milestone 2
    Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed. 
*/

// prendo dalla dom il nodo dove voglio inserire i miei post
const rowElement = document.querySelector(".row")



// credo l'elemento che andrà inseritoi nel nodo della dom

// creo una funzione che mi cicla gli oggetti dell'array e me li stampa a schermo
/**
 * ## Generatore di post
 * @param {array} arrayPost array contentente i dati del post
 * @param {node} domElement elemento della dom al quale si vuole appendere il post
 */
function generatePost(arrayPost, domElement) {

    arrayPost.forEach(element => {

        element.data = convertitoreData(element.data)

        // creo le iniziali di ogni singolo autore del post per metterle se serve come immagine nei post senza immagine
        const iniziali = element.autoreNome.charAt(0).toUpperCase() + element.autoreCognome.charAt(0).toUpperCase()

        // constante con elemento da inserire nell'html con foto
        const postElementWithPhoto = `
    <div class="cols p-4">
        <div class="card p-3">
            <div class="card_user d-flex align-items-center mt-2">
                <div id="img_user${element.id}" class="img_user">
                    <img class="rounded-circle" src="${element.foto}"   alt="img_user">
                </div>
                <!-- /.img_user -->
                <div class="user ms-3">
                    <div class="name fw-bold">${element.autoreNome} ${element.autoreCognome}</div>
                    <!-- /.name -->
                    <div class="date ">
                        ${element.data}
                    </div>
                </div>
                <!-- /.user -->
            </div>
            <!-- /.card_user -->
    
            <div class="card_body my-4">
                <div class="description mb-3">
                    ${element.testo}
                </div>
                <!-- /.description -->
                <div class="img ">
                    <img src="${element.img_post}" alt="foto post">
                </div>
            </div>
            <!-- /.card_body -->
    
            <div class="card_engagement d-flex justify-content-around mb-4">
                <button id="${element.id}" class="like">
                    <i class="fa-solid fa-thumbs-up"></i>
                    <span>Mi Piace</span>
                </button>
                <!-- /#like -->
                <div class="likers">
                    Piace a <span class="num_${element.id}">${getRandomInteger()}</span> persone
                </div>
                <!-- /.likers -->
            </div>
            <!-- /.card_engagement -->
        </div>
        <!-- /.card-->
    </div>
    <!-- /.cols -->
`;
        // constante con elemento da inserire nell'html senza foto
        const postElementWithoutPhoto = `
    <div class="cols p-4">
        <div class="card p-3">
            <div class="card_user d-flex align-items-center mt-2">
                <div id="img_user${element.id}" class="img_user">
                    <img class="rounded-circle" src="${element.foto}" alt="img_user">
                </div>
                <!-- /.img_user -->
                <div class="user ms-3">
                    <div class="name fw-bold ">${element.autoreNome} ${element.autoreCognome}</div>
                    <!-- /.name -->
                    <div class="date">
                        ${element.data}
                    </div>
                </div>
                <!-- /.user -->
            </div>
            <!-- /.card_user -->
    
            <div class="card_body my-4">
                <div class="description mb-3">
                    ${element.testo}
                </div>
                <!-- /.description -->
            </div>
            <!-- /.card_body -->
    
            <div class="card_engagement d-flex justify-content-around mb-4">
           <button id="${element.id}" class="like">
                    <i class="fa-solid fa-thumbs-up"></i>
                    <span>Mi Piace</span>
                </button>
                <!-- /.like -->
                <div class="likers">
                    Piace a <span class="num_${element.id}">${getRandomInteger()}</span> persone
                </div>
                <!-- /.likers -->
            </div>
            <!-- /.card_engagement -->
        </div>
        <!-- /.card-->
    </div>
    <!-- /.cols -->
 `;
        // condizione per capire l'oggetto nell'array ha una foto oppure no e quindi decidere quale elemento inserire nell'html
        if (element.img_post == "") {
            domElement.insertAdjacentHTML("beforeend", postElementWithoutPhoto)

        } else {
            domElement.insertAdjacentHTML("beforeend", postElementWithPhoto)
        }

        /* BONUS INIZIALI AL POSTO DELL'IMMAGINE PROFILO */

        // prendo tramite id il l'elemento della dom che modificherò se non ha un'immagine profilo
        const imgProfiloElement = document.getElementById("img_user" + element.id)

        if (element.foto == "") {
            //seleziono l'elemento
            const imgProfiloElement = document.getElementById("img_user" + element.id)


            imgProfiloElement.outerHTML = `<div id="img_user${element.id}" class="iniziali d-flex align-items-center justify-content-center rounded-circle">${iniziali}</div>`

            if (element.gender == "uomo") {
                const imgProfiloElement = document.getElementById("img_user" + element.id)
                imgProfiloElement.classList.add("bg_uomo")
            } else {
                const imgProfiloElement = document.getElementById("img_user" + element.id)
                imgProfiloElement.classList.add("bg_donna")
            }
        }
    });
}


// invoco la funzione che genera i post
generatePost(post, rowElement)

// creo la funzione per generare i numeri random dei like
function getRandomInteger() {
    return Math.floor(Math.random() * (1480 - 1 + 1)) + 1;
}

/* Milestone 3
    Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
*/

// ciclo gli oggetti dell'array per prendere il singolo oggetto 
for (let i = 0; i < post.length; i++) {
    const postSingolo = post[i];
    //console.log(postSingolo.id)

    // seleziono il bottone a cui applichero l'addEventListener
    let buttonElement = document.getElementById(postSingolo.id);
    //console.log(buttonElement)

    // creo una costante per poter selezionare lo span con i like ( devo fare questa cosa perché altrimenti non posso selezionare un numero tramite queryselector)
    let classLike = ".num_" + postSingolo.id;
    //console.log(classLike)

    // seleziono lo span a cui cambiero il numero di like
    let spanElement = document.querySelector(classLike);
    // console.log(spanElement)
    // assegno ad ogni oggetto dell'array post i like che ha nel post
    postSingolo.like = spanElement.innerHTML

    // Creo l'evento al click per il bottone 
    buttonElement.addEventListener("click", () => {
        // aggiungo e tolgo la classe che colora il bottone
        buttonElement.classList.toggle("active")

        // salvo in una costante il numero che contiene lo span con i like
        const spanInnerHTML = Number(spanElement.innerHTML);

        // credo una condizione per verificare se lo span ha o meno determinate classe per far rimuovere o aggiungere +1/-1 all'attuale numero di like che ha
        if (buttonElement.classList == "like" + " active") {
            spanElement.innerHTML = Number(spanInnerHTML) + 1;
            postSingolo.like = spanElement.innerHTML
            console.log(`il post con id:${postSingolo.id} ha ${postSingolo.like} like`)
        } else {
            spanElement.innerHTML = Number(spanInnerHTML) - 1;
            postSingolo.like = spanElement.innerHTML
            console.log(`il post con id:${postSingolo.id} ha ${postSingolo.like} like`)
        }
    })

}