<template>
  <div>
    <a href="#" class="btn-goback"> <img src="../../static/icon-arrow-left.svg" alt="">Go Back</a>
    <div class="Invoice_header">
      <span>Status</span>
      <div class="InvoiceItem_status" :class="checkStatus(invoice.status)">
        <div class="InvoiceStatus_circle"></div>
        <div class="InvoiceStatus_text">
          <div v-if="invoice.status==1">Paid</div>
          <div v-else-if="invoice.status==2">Pending</div>
          <div v-else>draft</div>
        </div>
      </div>
      <div class="Invoice_header_buttons">
        <button class="btn btn-edit">Edit</button>
        <button class="btn btn-danger">Delete</button>
        <button class="btn btn-mark">Mark as Paid</button>
      </div>
    </div>
    <div class="InvoiceBody_Wrapper">
      <div>
        <h1 class="head"><span>#</span>{{ invoice.id }}</h1>
        <span>Landing Page Design</span>
      </div>
      <div>

      </div>
      <address class="sender_address">
        <span>19 Union Terrace</span>
        <span>London</span>
        <span>E1 3EZ</span>
        <span> Kingdom</span>
      </address>
      <div>
        <span>Invoice Date</span>
        <h1 class="head">{{ invoice.invoiceDate }}</h1>
      </div>
      <div>
        <span>Bill To</span>
        <h1 class="head">{{ invoice.clientName }}</h1>
      </div>
      <div>
        <span>Sent to</span>
        <h1 class="head">{{ invoice.clientEmail }}</h1>
      </div>

      <div>
        <span>Payment Due</span>
        <h1 class="head">31 Oct 2021</h1>
      </div>
    </div>
  </div>
</template>
<script>
export default{
    data(){
        return{
            invoice:{}
        }
    },
    methods:{
        async invoiceFetch(){
            const res = await fetch('http://localhost:3000/invoice/'+this.invoiceId)
            this.invoice = await res.json() 
        },
          checkStatus(i){
            if(i==1){
                return "paid"
            }
            else if(i==2){
                return "pending"
            }
            else{
                return "draft"
            }
        }
    },
    mounted(){
        this.invoiceFetch()
    },
    computed:{
        invoiceId(){
            return this.$route.params.invoice
        }
    }
}
</script>

