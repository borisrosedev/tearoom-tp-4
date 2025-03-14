import figureComponent from "../../components/figure/figure.component"

function landingPage() {
    return(
        `
            <main id="landing-main" class="tearoom-main landing__main">
            
                ${figureComponent({
                    id: "landing-figure",
                    src:"/assets/logo.webp",

                    alt: "Image du logo de l'application TeaRoom"
                })}
            
            </main>
        
        `
    )

}

export default landingPage