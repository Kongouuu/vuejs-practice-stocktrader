<template>
    <div class="col-md-6">
        <div class="card border-success" style="margin-top:30px">
            <div class="card-header text-success">
                <h3 style="display:inline;">{{ stock.name }} </h3>
                <small>(Price: {{ stock.price }}) | Quantity: {{ stock.quantity }}</small>
            </div>
            <div class="card-body">
                <div class="float-left">
                    <input type="number" class="form-control" v-model="quantity">
                </div>
                <div class="float-right">
                    <button class="btn btn-success" @click="showModal=true" :disabled="isDisabled">Sell</button>
                </div>
            </div>
        </div>

        <!-- use the modal component, pass in the prop -->
       <app-modal v-if="showModal" :quantity="quantity" :price="stock.price" :funds="funds" @cancel="cancel" @sell="sellStock"></app-modal>
    </div>
</template>

<script>
    import Modal from "./Modal.vue"
    export default {
        props: ['stock'],
        components: {
            'app-modal': Modal
        },
        data() {
            return {
                quantity: 0,
                showModal: false
            }
        },
        methods: {
            sellStock() {
                this.showModal = false;
                const order = {
                    id: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.$store.dispatch('sellStock',order);
                this.quantity = 0;
            },
            cancel() {
                this.showModal = false;
                this.quantity =0;
            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            },
            isDisabled(){
                return this.quantity<=0 || this.quantity % 1 !== 0 || Number(this.quantity) > this.stock.quantity;
            }
        }
    }
</script>