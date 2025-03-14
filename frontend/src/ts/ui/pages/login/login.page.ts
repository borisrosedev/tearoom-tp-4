export default function loginPage () {
    return `
    
        <main id="login-main" class="tearoom-main">
            <section>
            <form id="login-form">
                <section>
                    <article>
                        <label for="email"></label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Entrer votre email"
                            class="input is-primary"
                        />
                    </article>
                         <article>
                        <label for="password"></label>
                        <input
                            id="password"
                            type=password"
                            placeholder="Entrer votre mot de passe"
                            class="input is-primary"
                        />
                    </article>
                </section>
                <section>
                    <button id="submit-button" class="button is-primary">Valider</submit>
                    <button id="reset-button" class="button is-danger">Réinitialiser</button>
                </section>
            
            </form>
            </section>
        </main>
    
    
    `
}