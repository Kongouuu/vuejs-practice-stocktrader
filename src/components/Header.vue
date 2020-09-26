<template>
    <div style="margin-bottom: 30px">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link to="/" class="navbar-brand">Navbar</router-link>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <router-link class="nav-item" to="/portfolio" activeClass="active" tag="li">
                    <a class="nav-link">Portfolio</a>
                </router-link>
                <router-link class="nav-item" to="/stocks" activeClass="active" tag="li">
                    <a class="nav-link">Stocks</a>
                </router-link>
                </ul>
                
                <ul class="navbar-nav navbar-right">
                    <li class="nav-item" ><a class="nav-link" style="cursor: pointer" @click="endDay">End Day</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Save & Load
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" style="cursor: pointer" @click="saveData">Save Data</a>
                            <a class="dropdown-item" style="cursor: pointer" @click="loadData">Load Data</a>     
                        </div>
                    </li>
                     <li class="nav-item" ><strong class="nav-link">Funds: {{ funds | currency }}</strong></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        computed: {
            funds() {
                return this.$store.getters.funds
            }
        },
        methods: {
            ...mapActions([
                'randomizeStocks',
                'load'
            ]),
            endDay() {
                this.randomizeStocks();
            },
            saveData() {
                const data = {
                    funds: this.$store.getters.funds,
                    stockPortfolio: this.$store.getters.stockPortfolio,
                    stocks: this.$store.getters.stocks
                };
                // Put overrides data, but that is fine for this project
                this.$http.put('data.json',data);
            },
            loadData() {
                this.load();
            }
        }
    }
</script>