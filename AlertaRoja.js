class alertaRoja extends HTMLElement{

    constructor(){
        super();
        this.innerHTML = `<p> Pelicula malarda: Alerta Roja </p>`
    }
}

customElements.define("alerta-roja", alertaRoja);