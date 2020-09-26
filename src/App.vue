<template>
    <div>
        <app-header></app-header>
        <div class="container">   
            <transition name="slide-fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
    components: {
        'app-header': Header
    },
    created() {
        this.$store.dispatch('initStocks');
    }
}

</script>

<style>
    .slide-fade-enter-active {
    transition: all .3s ease;
    }
    .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
    }
</style>
