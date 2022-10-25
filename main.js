    class Nuevo {
        constructor(id, nombre, precio,) {
            this.id = id;
            this.nombre = nombre;
            this.precio = precio;
        }
    }
        
    const nuevoDestino = () => {
        let nombre = document.getElementById("origen");
                    
        let destinoNuevo = new Nuevo(nombre);
        listaDestino.push(destinoNuevo);
        localStorage.setItem("nuevos", JSON.stringify(listaDestino));

        if(localStorage.getItem("nuevo") == null) {
            listaDestino.push(destinoNuevo);
                localStorage.setItem("nuevo", JSON.stringify(listaDestino));
            } else {
                const listaStorage = JSON.parse(localStorage.getItem("nuevo"));
                listaStorage.push(destinoNuevo);
                localStorage.setItem("nuevo", JSON.stringify(listaStorage));
            }
                      
        return listaDestino
    }

    let bton = document.getElementById("boton");

    bton.addEventListener("click", (e)=> {
        e.preventDefault();
        let nombre = document.getElementById("boton");
                
        console.log (localStorage.setItem("origen", nombre));
        
    })

