


export default class LoginContainer {

    constructor() {
        const loginForm = document.getElementById('login-form')
        loginForm?.addEventListener('submit', this.onSubmit)
    }

    async onSubmit (event:any) {
        
        
        event.preventDefault()
        
        
        const emailValue = (document.getElementById('email') as HTMLInputElement).value
        const passwordValue = (document.getElementById('password') as HTMLInputElement).value
        
        if(!emailValue || !passwordValue){
            return
        }


        try {
            const responseFromServer = await fetch('http://localhost:3000/api/v1/user/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email:emailValue, password: passwordValue   })
            })

            const token = await responseFromServer.json()
            console.log(token)
        } catch(err) {
            console.log(err)
        }
     
    }
}