const API_BASE = 'http://127.0.0.1:3000';
const fetch = require('node-fetch');

describe('Publice Api testing', function(){
    it('POST /user/auth', async function(){
        var formData = {
            email:"mrudulcap@gmail.com",
            password:"Main123#"
        };
        const options = {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body:JSON.stringify(formData)
        };

        const res = await fetch(`${API_BASE}/user/auth`,options)
        const data = await res.json()
        console.log("login response",data)
    })
})
