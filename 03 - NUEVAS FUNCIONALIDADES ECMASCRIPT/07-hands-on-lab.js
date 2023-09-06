/* ----------------------------- // Hands on lab ---------------------------- */

class TicketManager{
    #precioBaseDeGanancia = 0.15;
    constructor(){
        this.eventos = [];
    }

    getEventos(){
        return this.eventos;
    }

    agregarEvento(nombre, lugar, precio, capacidad = 500000, fecha = new Date()){
        const evento = {
            id: this.#nuevoId() + 1,
            nombre,
            lugar,
            precio: precio + this.#precioBaseDeGanancia,
            capacidad,
            fecha,
            participantes: []
        };
        this.eventos.push(evento);
    }

    #nuevoId(){
        let maxId = 0;
        this.eventos.map((evento) => {
            if(evento.id > maxId) maxId = evento.id;
        });
        return maxId;
    }id

    agregarUsuario = (idEvento, usuario) =>{
        const evento = this.#getEvento(idEvento);
        if(evento) {
            if(!evento.participantes.includes(usuario)) evento.participantes.push(usuario);
        } else {
            console.log('Este evento no existe!');
        }
    }

    #getEvento(idEvento){
        return this.eventos.find((evento) => evento.id === idEvento)
    }

    ponerEventoEnGira(idEvento, nuevaCiudad, nuevaFecha){
        const evento = this.#getEvento(idEvento);
        if (evento){
            const nuevoEvento = {
                ...evento,
                id: this.#nuevoId() + 1,
                lugar: nuevaCiudad,
                fecha: nuevaFecha,
                participantes: []
            };
            this.eventos.push(nuevoEvento);
        } else {
            console.log('Este evento no existe!');
        }
    }
}

const ticketManager = new TicketManager();

ticketManager.agregarEvento('Boca vs river', 'La Bombonera', 20000);
ticketManager.agregarEvento('Recital NTVG', 'Velez', 20000);
console.log(ticketManager.getEventos());
ticketManager.agregarUsuario(2, 'Pablo');
ticketManager.agregarUsuario(1, 'Lucas');
console.log(ticketManager.getEventos());
ticketManager.ponerEventoEnGira(2, 'Estadio Racing', "30-05-2023");
console.log(ticketManager.getEventos());