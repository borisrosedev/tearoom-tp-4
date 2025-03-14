


export default class LoginContainer {

    constructor() {
        const loginForm = document.getElementById('login-form')
        loginForm?.addEventListener('submit', this.onSubmit)
    }

    async onSubmit (event:any) {
        
    event.preventDefault()
    console.log('hello submit')
    //     const responseFromServer = fetch('http://localhost:3000/api/v1/user/login', {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({ ...data })
    //     })
    }
}