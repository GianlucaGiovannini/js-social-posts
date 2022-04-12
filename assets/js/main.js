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

const post = [{
        id: 1,
        autore: "Phill Mangione",
        foto: "https://picsum.photos/50/50",
        data: "12/06/2021",
        testo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum, nisi incidunt excepturi non officiis fuga. Molestiae, necessitatibus.",
        img_post: "https://picsum.photos/1280/600"
    },
    {
        id: 2,
        autore: "Sofia Perlari",
        foto: "https://picsum.photos/80/80",
        data: "12/06/2021",
        testo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum, nisi incidunt excepturi non officiis fuga. Molestiae, necessitatibus.",
        img_post: ""
    },
    {
        id: 3,
        autore: "Ambra Cusin",
        foto: "https://picsum.photos/90/90",
        data: "12/06/2021",
        testo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum, nisi incidunt excepturi non officiis fuga. Molestiae, necessitatibus.",
        img_post: "https://picsum.photos/1380/680"
    },
    {
        id: 4,
        autore: "Gianluca Giovannini",
        foto: "https://picsum.photos/100/100",
        data: "12/06/2021",
        testo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum, nisi incidunt excepturi non officiis fuga. Molestiae, necessitatibus.",
        img_post: ""
    },
    {
        id: 5,
        autore: "Matteo Sperlari",
        foto: "https://picsum.photos/110/110",
        data: "12/06/2021",
        testo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum, nisi incidunt excepturi non officiis fuga. Molestiae, necessitatibus.",
        img_post: "https://picsum.photos/1480/780"
    }
]

/* Milestone 2
    Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed. 
*/

// prendo dalla dom il nodo dove voglio inserire i miei post
const rowElement = document.querySelector(".row")



// credo l'elemento che andrà inseritoi nel nodo della dom

// creo una funzione che mi cicla gli oggetti dell'array e me li stampa a schermo
function generatePost(arrayPost, domElement) {

    arrayPost.forEach(element => {
        const postElementWithPhoto = `
    <div class="cols p-4">
        <div class="card p-3">
            <div class="card_user d-flex align-items-center mt-2">
                <div class="img_user">
                    <img class="rounded-circle" src="${element.foto}"   alt="img_user">
                </div>
                <!-- /.img_user -->
                <div class="user ms-3">
                    <div class="name fw-bold">${element.autore}</div>
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
`
        const postElementWithoutPhoto = `
    <div class="cols p-4">
        <div class="card p-3">
            <div class="card_user d-flex align-items-center mt-2">
                <div class="img_user">
                    <img class="rounded-circle" src="${element.foto}"   alt="img_user">
                </div>
                <!-- /.img_user -->
                <div class="user ms-3">
                    <div class="name fw-bold ">${element.autore}</div>
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
 `

        if (element.img_post == "") {
            domElement.insertAdjacentHTML("beforeend", postElementWithoutPhoto)

        } else {
            domElement.insertAdjacentHTML("beforeend", postElementWithPhoto)
        }

    });



}

generatePost(post, rowElement)

// creo la funzione per generare i numeri random dei like
function getRandomInteger() {
    return Math.floor(Math.random() * (1480 - 1 + 1)) + 1;
}

/* Milestone 3
    Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
*/

for (let i = 0; i < post.length; i++) {
    const postSingolo = post[i];
    //console.log(postSingolo.id)

    let buttonElement = document.getElementById(postSingolo.id)
        //console.log(buttonElement)
    let classLike = ".num_" + postSingolo.id
        //console.log(classLike)
    let spanElement = document.querySelector(classLike)
        //console.log(spanElement)

    buttonElement.addEventListener("click", () => {
        buttonElement.classList.toggle("active")


        spanElement.classList.toggle("active")

        const spanInnerHTML = Number(spanElement.innerHTML);


        if (spanElement.classList == "num_" + postSingolo.id + " active") {
            spanElement.innerHTML = Number(spanInnerHTML) + 1;
        } else {
            spanElement.innerHTML = Number(spanInnerHTML) - 1;
        }
    })

}