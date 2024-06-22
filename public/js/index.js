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
  
  // Uso de la promesa
  
    

function formatearDatos(){
// Uso de la promesa
  hacerPeticion()
  .then(trabajos => {
    console.log("Datos de trabajos:", trabajos);
    // Aquí puedes hacer lo que necesites con los datos

    let imagen = trabajos.trabajos[1].imagen_url
    console.log(imagen)
    const post = document.getElementById('post')
    post.setAttribute('src', imagen)
    // for (let index = 0; index <= 18; index++) {
    //     // const element = array[index];
    //     console.log(0+index)
       
    //     console.log(imagen)
    // }
  })
  .catch(error => {
    console.error("Error al obtener los datos:", error);
  });
}

formatearDatos()
  