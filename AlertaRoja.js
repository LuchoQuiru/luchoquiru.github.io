class alertaRoja extends HTMLElement{

    constructor(){
        super();
        this.innerHTML = `<p>Alerta Roja </p>`
    }
}

customElements.define("alerta-roja", alertaRoja);