<template>
    <div class="row">
        <div class="col-md-10 offset-md-1">
            <h1 class="text-center">Portfolio</h1>
            <hr>
            <div class="row">
                <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
            </div>
        </div>
    </div>
</template>

<script>
    import Stock from './Stock.vue';
    import {mapGetters} from 'vuex';

    export default {
        components: {
            'app-stock': Stock
        },
        computed: {
            ...mapGetters({
                stocks: 'stockPortfolio',
                funds: 'funds'
            })
        }
    }
</script>