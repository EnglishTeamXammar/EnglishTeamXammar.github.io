const contenido = [
    {
        tipo: "video",
        src: "https://youtu.be/jrIBc2sbm6M",
        titulo: "Padre Nuestro de lento a rapidó"
    },
    {
        tipo: "video",
        src: "https://youtu.be/nnB0sYRNzEw",
        titulo: "Good Morning"
    },
    {
        tipo:"video",
        src:"youtube.com/watch?v=kg2GrrYSgFM",
        titulo:"Cancion del abecedario"
    },
    {
        tipo:"audio",
        src:"././imgP/AUD-20260430-WA0001.mp3",
        titulo:"Presentacion"
    },
    {
        tipo:"imagen",
        src:"https://english4kidsonline.com/wp-content/uploads/2023/01/los-pronombres-en-ingles-768x480.jpg",  
        titulo:"web"
    },
    {
        tipo: "texto",
        texto: "sin informacion de clases de ingles"
    },
];

//convertidor YouTube
function convertirYoutube(url) {
    if (url.includes("youtu.be")) {
        const id = url.split("/").pop();
        return `https://www.youtube.com/embed/${id}`;
    }

    if (url.includes("watch?v=")) {
        const id = url.split("v=")[1].split("&")[0];
        return `https://www.youtube.com/embed/${id}`;
    }

    return url;
}


//contenedores (IMPORTANTE: coinciden con HTML)
const contVideos = document.getElementById("videos");
const contAudios = document.getElementById("audios");
const contImagenes = document.getElementById("imagenes");
const contTextos = document.getElementById("textos");


//render
function renderContenido() {

    contVideos.innerHTML = "";
    contAudios.innerHTML = "";
    contImagenes.innerHTML = "";
    contTextos.innerHTML = "";

    contenido.forEach(item => {

        //VIDEOS
        if (item.tipo === "video") {
            contVideos.innerHTML += `
                <div class="card">
                    <iframe src="${convertirYoutube(item.src)}" frameborder="0" allowfullscreen></iframe>
                    <p>${item.titulo}</p>
                </div>
            `;
        }
        //AUDIOS
        if(item.tipo === "audio"){
            contAudios.innerHTML += `
                <div class="card>
                    <audio controls>
                        <source src="${item.src}"type="audio/mp3">
                    </audio>
                    <p>${item.titulo}</p>
                </div>
            `;
        }

        //IMÁGENES
        if (item.tipo === "imagen") {
            contImagenes.innerHTML += `
                <div class="card">
                    <img src="${item.src}" alt="">
                    <p>${item.titulo}</p>
                </div>
            `;
        }

        //TEXTO
        if (item.tipo === "texto") {
            contTextos.innerHTML += `
                <div class="texto">
                    <p>${item.texto}</p>
                </div>
            `;
        }
    });
}

renderContenido();
