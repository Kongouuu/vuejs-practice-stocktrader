<template>
    <div class="row">
        <div class="col-md-10 offset-md-1">
            <h1 class="text-center">The Stocks</h1>
            <hr>
            <div class="row">
                <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
            </div>
        </div>
    </div>
</template>

<script>
    import Stock from './Stock.vue';

    export default {
        components: {
            'app-stock': Stock
        },
        computed: {
            stocks() {
                return this.$store.getters.stocks;
            }
        }
    }
</script>