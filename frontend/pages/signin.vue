<template>
    <div>
        <form action="" @submit.prevent="loginFn">
            <input type="text" v-model="form.email">
            <input type="text" v-model="form.password">
            <button class="btn btn-primary" >Login</button>
        </form>
    </div>
</template>
<script>
export default{
    layout:'login',
    data(){
        return{
            form:{}
        }
    },
    methods:{
        async loginFn(){
        const options = {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body:JSON.stringify(this.form)
        };

        const res = await fetch('/api/user/auth',options)
        const data = await res.json()
        console.log("login response",data)
            console.log("Hello",this.form)
        }
    }
}
</script>
