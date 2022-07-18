const API_BASE = 'http://127.0.0.1:3000';
const fetch = require('node-fetch');

describe('Publice Api testing', function () {
    // it('POST /user/auth', async function(){
    //     var formData = {
    //         email:"mrudulcap@gmail.com",
    //         password:"Main123#"
    //     };
    //     const options = {
    //         method:'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //             // 'Content-Type': 'application/x-www-form-urlencoded',
    //           },
    //         body:JSON.stringify(formData)
    //     };

    //     const res = await fetch(`${API_BASE}/user/auth`,options)
    //     const data = await res.json()
    //     console.log("login response",data)
    // })
    it('GET /invoice/bill', async function(){
        const res = await fetch(`${API_BASE}/invoice/bill/13`)
        const data = await res.json();
        console.log(data)
    });

    // ----
    it('POST /invoice/register', async function () {
        var formData = {
            invoice_id: "KP001",
            client_name: "Jon Snow",
            status: 2,
            client_email: "jonsnow@gmail.com",
            invoice_date: "",
            invoice_due_date: "",
            description: "Re-branding",
            address: "testing North ",
            city: "7 kingdoms",
            post_code: "8852852",
            bill_items: [{
                    id: 1,
                    invoice_id: 1,
                    item_name: "text size ",
                    qty: 2,
                    price: 1500,
                    total: 3000,
                },
                {
                    id: 2,
                    invoice_id: 1,
                    item_name: "image corrections",
                    qty: 2,
                    price: 1500,
                    total: 3000,
                }
            ]
        };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }
        const res = await fetch(`${API_BASE}/invoice/new-bill`, options)
        const data = await res.json()
        console.log("new invoice", data)
    })
})