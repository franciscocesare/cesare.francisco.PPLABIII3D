
import Publicacion from './publicacion.js';

export default class PublicacionAuto extends Publicacion{
    constructor(id, titulo, descripcion, precio, transaccion, color, puertas, km, potencia){
        
        super(id, titulo, descripcion, precio);

        this.transaccion = transaccion;
        this.color = color;
        this.puertas = puertas;
        this.km = km;
        this.potencia = potencia;
    }

    set Transaccion(transaccion){          
        this.transaccion = transaccion;
    }
    get Transaccion(){       
        return this.transaccion;
    }
    set Color(color){          //actua como propiedad
        this.color = color;
    }
    get Color(){       
        return this.color;
    }
    set Puertas(puertas){          
        this.puertas = puertas;
    }
    get Puertas(){       
        return this.puertas;
    }
    set Km(km){          
        this.km = km;
    }
    get Km(){       
        return this.km;
    }


    set Potencia(potencia){          
        this.potencia = potencia;
    }
    get Potencia(){       
        return this.potencia;
    }

}