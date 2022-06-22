<template>
  <div>
    <!-- Header-->
    <div class="header">
      <div class="header-title">
        <h1>Invoice</h1>
        <p>There are 7 total invoices</p>
      </div>
      <div class="filter-dropdown d-none">
        filter by status
      </div>
      <div class="add-new-button">
        <button class="btn btn-addnew"><img src="../static/icon-plus.svg" alt=""> New Invoice</button>
      </div>
    </div>
    <invoice-list :invoiceItems='InvoiceItems'></invoice-list>

  </div>
</template>

<script>
import InvoiceList from '../components/InvoiceList.vue'
  export default {
    name: 'IndexPage',
    components:{
      InvoiceList
    },
    data(){
        return{
            InvoiceItems:{}
        }
    },
    methods:{
       async fetchInvoice(){
           var res = await fetch('http://localhost:3000/invoice');
           this.InvoiceItems = await res.json()
           console.log(res)
        }
    },
    mounted(){
        this.fetchInvoice()
    }
}

</script>
