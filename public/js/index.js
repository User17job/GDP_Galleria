const Poster = document.getElementById('poster');
const Poster2 = document.getElementById('poster2');

const post = document.getElementById('post')
const Titulo = document.getElementById('titulo')

// datos a cambiar 
const navLink       =document.getElementById('nav-liink');
const navBtn        =document.getElementById('nav--btn');
const navBtn1       =document.getElementById('nav--btn1');
const navBtn2       =document.getElementById('nav--btn3');
const presentation  =document.getElementById('presentation');
const welcome       =document.getElementById('welcome');
const por           =document.getElementById('by');
const wrapper1Title =document.getElementById('wrapper1Title');
const wrapper2Title =document.getElementById('wrapper2Title');
const footerText    =document.getElementById('footerText');
const footerForm    =document.getElementById('footerForm');
const formSubmitBtn =document.getElementById('formSubmitBtn');
// form
const inputName     = document.getElementById('name');
const inputEmail    = document.getElementById('email');
const inputCommet   = document.getElementById('comment');

const modaltitle    = document.getElementById('staticBackdropLabel');
const bye           = document.querySelector('.bye');
// let Lang=true;
let  nombre       ;
let  descripcion  ;
let  herramientas ;
let  linkProyecto ;
let  imagen       ;
let  name         ;
let  description  ;
let  by           ;        

const english = document.getElementById("EN");
const spanish = document.getElementById("ES");

english.addEventListener("click", () => {
  formatearDatosSpanish(1)
//
navLink.innerText      ="Socials";
navBtn.innerText       ='Contact us';
navBtn1.innerText      ='Contact us';
navBtn2.innerText      ='Contact us';
presentation.innerText ="Gallery of projects";
welcome.innerText      ="Explore our collection of projects made with dedication and dedication for a greater visualization of our skills.";
por.innerText          ="© By user17job";
bye.innerText          ="© By user17job";
wrapper1Title.innerText="Projects";
wrapper2Title.innerText="Ideas for ask for our services";
footerText.innerText   ="Explore our projects Gallery and connet with us throught our socials media.";
//
footerForm.innerText   ="Get in touch";
inputName.setAttribute('placeholder', 'Name');
inputCommet.setAttribute('placeholder', 'Comment');
formSubmitBtn.innerText="Send";

//
    
  });
  spanish.addEventListener("click", () => {
    formatearDatosSpanish(2)
    navLink.innerText      ="Redes";
    navBtn.innerText       ='Contactanos';
    navBtn1.innerText      ='Contactanos';
    navBtn2.innerText      ='Contactanos';
    presentation.innerText ="Galeria de proyectos";
    welcome.innerText      ="Explora nuestra colección de proyectos hechos con dedicacion y entrega para una mayor visualizacion de nuestras habilidades.";
    por.innerText          ="© Por user17job";
    bye.innerText          ="© Por user17job";
    wrapper1Title.innerText="Proyectos";
    wrapper2Title.innerText="Ideas para solicitar nuestros servicios";
    footerText.innerText   ="Explora nuestra galeria de proyectos y conecta con nosotros a traves de nuestras redes sociales";
    //
    footerForm.innerText   ="Contactanos";
    inputName.setAttribute('placeholder', 'Nombre');
    inputCommet.setAttribute('placeholder', 'Comentario');
    formSubmitBtn.innerText="Enviar";
    

  });
  
function hacerPeticion() {
    return new Promise((resolve, reject) => {
      const url = "https://gdpapi-user17job.up.railway.app/api/trabajos/";
  
      // Realizar la petición HTTP
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Error en la petición: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          // Almacenar los datos en la variable "trabajos"
          const trabajos = data;
          resolve(trabajos);
        })
        .catch(error => {
          reject(error);
        });
    });
}
  
function formatearDatosSpanish(lang){
// Uso de la promesa
  hacerPeticion()
  .then(trabajos => {
    console.log("Datos de trabajos:", trabajos);
  if(lang===2){
    Poster.innerHTML=''; 
    Poster2.innerHTML='';
    for (let i = 0; i <= 13; i++) {
      nombre       = trabajos.trabajos[i].nombre;
      descripcion  = trabajos.trabajos[i].descripcion;
      herramientas = trabajos.trabajos[i].herramientas;
      linkProyecto = trabajos.trabajos[i].link;
      imagen       = trabajos.trabajos[i].imagen_url;
      name         = trabajos.trabajos[i].name;
      description  = trabajos.trabajos[i].description;
      by           = trabajos.trabajos[i].by;
  

      //data-bs-toggle="modal" data-bs-target="#staticBackdrop2
    Poster.innerHTML+=`
      <div class="wrapper1--project">
        <!-- modal button -->
            <button class="wrapper1--project__info project-info1" id="project-info" value="${i}">...</button>
            <figure class="wrapper1--project__figure">
            <img src="${imagen}" id="post" alt="${nombre}-image">
            </figure>
          <div class="more" id="titulo"><h4>${nombre}</h4>
            <div class="btns">
              <button class="btn-Visitar" type="button">
              <a href="${linkProyecto}"  target="_blank" class="text-dark">Visitar</a>
              </button>
            </div>
          </div>
      </div>
    `;
  }
  for (let i = 1; i <= 7; i++) {
    nombre       = trabajos.trabajos[i+13].nombre;
    descripcion  = trabajos.trabajos[i+13].descripcion;
    herramientas = trabajos.trabajos[i+13].herramientas;
    linkProyecto = trabajos.trabajos[i+13].link;
    imagen       = trabajos.trabajos[i+13].imagen_url;
    name         = trabajos.trabajos[i+13].name;
    description  = trabajos.trabajos[i+13].description;
    by           = trabajos.trabajos[i+13].by;

    Poster2.innerHTML+=`
      <div class="wrapper1--project " >
        <!-- modal button -->
            <button class="wrapper1--project__info  project-info2" id="project-info" value="${i+13}">...</button>
            <figure class="wrapper1--project__figure">
            <img src="${imagen}" id="post" alt="${nombre}-image">
            </figure>
          <div class="more" id="titulo"><h4>${nombre}</h4>
            <div class="btns">
              <!--<button class="btn-Visitar" type="button">
              <a href="${linkProyecto}"  target="_blank" class="text-dark">Visitar</a>
              </button>-->
            </div>
          </div>
      </div>
      `;
  }

  
  const info1 = document.querySelectorAll('.project-info1');
  const info2 = document.querySelectorAll('.project-info2');


if(trabajos){
  info1.forEach((elemento) => {
    elemento.addEventListener("click", () => {
      let coun = elemento.value;
      nombre       = trabajos.trabajos[coun].nombre;
      descripcion  = trabajos.trabajos[coun].descripcion;
      herramientas = trabajos.trabajos[coun].herramientas;
      linkProyecto = trabajos.trabajos[coun].link;
      imagen       = trabajos.trabajos[coun].imagen_url;
      name         = trabajos.trabajos[coun].name;
      description  = trabajos.trabajos[coun].description;
      by           = trabajos.trabajos[coun].by;


      Swal.fire({
        title: `${nombre}-info`,
        imageUrl: imagen,
        width:600,
        imageWidth: 450,
        imageHeight: 400,
  
        html: `
        <ul class="text-start">
          <li><strong>Nombre:</strong> ${nombre}</li>
          <li><strong>Descripcion:</strong> ${descripcion}</li>
          <li><strong>Herramientas:</strong> ${herramientas}</li>
          <li><strong>Link:</strong><a href=${linkProyecto} target='_blank'>Click</a></li>
          <li><strong>BY:</strong> ${by}</li>
        </ul>

        `
      });

    });
  });
}
if(trabajos){
  info2.forEach((elemento) => {
    elemento.addEventListener("click", () => {
      let coun = elemento.value;
      nombre       = trabajos.trabajos[coun].nombre;
      descripcion  = trabajos.trabajos[coun].descripcion;
      herramientas = trabajos.trabajos[coun].herramientas;
      linkProyecto = trabajos.trabajos[coun].link;
      imagen       = trabajos.trabajos[coun].imagen_url;
      name         = trabajos.trabajos[coun].name;
      description  = trabajos.trabajos[coun].description;
      by           = trabajos.trabajos[coun].by;

      Swal.fire({
        title: `${nombre}-info`,
        imageUrl: linkProyecto,
        width:800,
        imageWidth: 570,
        imageHeight: 2100,
  
        html: `
        <ul class="text-start">
          <li><strong>Nombre:</strong> ${nombre}</li>
          <li><strong>Descripcion:</strong> ${descripcion}</li>
          <li><strong>Herramientas:</strong> ${herramientas}</li>
          <li><strong>BY:</strong> ${by}</li>
        </ul>

        `
      });

    });
  });
}


  }else{
  
    Poster.innerHTML=''; 
    Poster2.innerHTML='';
    for (let i = 0; i <= 13; i++) {
      nombre       = trabajos.trabajos[i].nombre;
      descripcion  = trabajos.trabajos[i].descripcion;
      herramientas = trabajos.trabajos[i].herramientas;
      linkProyecto = trabajos.trabajos[i].link;
      imagen       = trabajos.trabajos[i].imagen_url;
      name         = trabajos.trabajos[i].name;
      description  = trabajos.trabajos[i].description;
      by           = trabajos.trabajos[i].by;
  

      //data-bs-toggle="modal" data-bs-target="#staticBackdrop2
    Poster.innerHTML+=`
      <div class="wrapper1--project">
        <!-- modal button -->
            <button class="wrapper1--project__info project-info1" id="project-info" value="${i}">...</button>
            <figure class="wrapper1--project__figure">
            <img src="${imagen}" id="post" alt="${name}-image">
            </figure>
          <div class="more" id="titulo"><h4>${name}</h4>
            <div class="btns">
              <button class="btn-Visitar" type="button">
              <a href="${linkProyecto}"  target="_blank" class="text-dark">Visit</a>
              </button>
            </div>
          </div>
      </div>
    `;
  }
  for (let i = 1; i <= 7; i++) {
    nombre      = trabajos.trabajos[i+13].nombre;
    descripcion  = trabajos.trabajos[i+13].descripcion;
    herramientas = trabajos.trabajos[i+13].herramientas;
    linkProyecto = trabajos.trabajos[i+13].link;
    imagen       = trabajos.trabajos[i+13].imagen_url;
    name         = trabajos.trabajos[i+13].name;
    description  = trabajos.trabajos[i+13].description;
    by           = trabajos.trabajos[i+13].by;

    Poster2.innerHTML+=`
      <div class="wrapper1--project " >
        <!-- modal button -->
            <button class="wrapper1--project__info  project-info2" id="project-info" value="${i+13}">...</button>
            <figure class="wrapper1--project__figure">
            <img src="${imagen}" id="post" alt="${name}-image">
            </figure>
          <div class="more" id="titulo"><h4>${name}</h4>
            <div class="btns">
              <!--<button class="btn-Visitar" type="button">
              <a href="${linkProyecto}"  target="_blank" class="text-dark">Visit</a>
              </button>-->
            </div>
          </div>
      </div>
      `;
  }

  
  const info1 = document.querySelectorAll('.project-info1');
  const info2 = document.querySelectorAll('.project-info2');


if(trabajos){
  info1.forEach((elemento) => {
    elemento.addEventListener("click", () => {
      let coun = elemento.value;
      nombre       = trabajos.trabajos[coun].nombre;
      descripcion  = trabajos.trabajos[coun].descripcion;
      herramientas = trabajos.trabajos[coun].herramientas;
      linkProyecto = trabajos.trabajos[coun].link;
      imagen       = trabajos.trabajos[coun].imagen_url;
      name         = trabajos.trabajos[coun].name;
      description  = trabajos.trabajos[coun].description;
      by           = trabajos.trabajos[coun].by;


      Swal.fire({
        title: `${name}-info`,
        imageUrl: imagen,
        width:600,
        imageWidth: 450,
        imageHeight: 400,
  
        html: `
        <ul class="text-start">
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Description:</strong> ${description}</li>
          <li><strong>Tools:</strong> ${herramientas}</li>
          <li><strong>Link:</strong><a href=${linkProyecto} target='_blank'>Click</a></li>
          <li><strong>BY:</strong>${by}</li>
        </ul>

        `
      });

    });
  });
}
if(trabajos){
  info2.forEach((elemento) => {
    elemento.addEventListener("click", () => {
      let coun = elemento.value;
      nombre       = trabajos.trabajos[coun].nombre;
      descripcion  = trabajos.trabajos[coun].descripcion;
      herramientas = trabajos.trabajos[coun].herramientas;
      linkProyecto = trabajos.trabajos[coun].link;
      imagen       = trabajos.trabajos[coun].imagen_url;
      name         = trabajos.trabajos[coun].name;
      description  = trabajos.trabajos[coun].description;
      by           = trabajos.trabajos[coun].by;

      Swal.fire({
        title: `${name}-info`,
        imageUrl: linkProyecto,
        width:800,
        imageWidth: 570,
        imageHeight: 2100,
  
        html: `
        <ul class="text-start">
          <li><strong>name:</strong> ${name}</li>
          <li><strong>Description:</strong> ${description}</li>
          <li><strong>Tools:</strong> what the project need</li>
          <li><strong>BY:</strong> ${by}</li>
        </ul>

        `
      });

    });
  });
}

  }



  })
  .catch(error => {
    console.error("Error al obtener los datos:", error);
  });
}

formatearDatosSpanish(2)
  
