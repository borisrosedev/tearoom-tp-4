import loginPage from "./src/ts/ui/pages/login/login.page"
import './styles.scss'

window.onpopstate = () => router(window.location.hash)


const router = function (h:string ){

    const root = document.getElementById('root') as HTMLElement
    switch(h){
        case "":
            root.innerHTML += loginPage()
            break;
        default:
            break;
    }

}

router(window.location.hash)