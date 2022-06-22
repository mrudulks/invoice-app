<template>
  <div class="InvoiceList_Wrapper">
    <a href="#" class="InvoiceItem" v-for="item in invoiceItems" :key="item.id">
      <h3><span>#</span>{{ item.id }}</h3>
      <div class="InvoiceItem_due">
        {{ item.invoiceDate }}
      </div>
      <div class="InvoiceItem_client">
        {{ item.clientName }}
      </div>
      <div class="InvoiceItem_total d-flex">
        <span class="me-2">&#8377;</span>
        {{ item.payment }}
      </div>
      <div class="InvoiceItem_status" :class="checkStatus(item.status)">
        <div class="InvoiceStatus_circle"></div>
        <div class="InvoiceStatus_text">
          <div v-if="item.status==1">Paid</div>
          <div v-else-if="item.status==2">Pending</div>
          <div v-else>draft</div>
        </div>
      </div>
      <div class="InvoiceItem_arrow">
          <nuxt-link :to="'/Invoice/'+item.id">
          <img src="../static/icon-arrow-right.svg" alt=""></nuxt-link>
        
      </div>
    </a>

  </div>
</template>
<script>
export default{
    props:['invoiceItems'],
    data(){
        return{
            InvoiceList:{}
        }
    },
    methods:{
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
    }
}

</script>

