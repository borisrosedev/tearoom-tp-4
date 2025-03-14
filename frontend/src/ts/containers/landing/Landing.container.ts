


export default class LandingContainer {
    landingMain: HTMLElement
    constructor(){
        this.landingMain = document.getElementById('landing-main') as HTMLElement
        this.onInit()
    }

    onInit() {
      setTimeout(() => {
            this.landingMain.innerHTML = ""
            this.landingMain.innerHTML += '<a class="button is-primary animate__animated animate__slideInUp" href="#login">Accéder à la page de connexion</a>'
        }, 3000);  
    }

}