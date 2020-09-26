import initStocks from '../../data/stocks';

const state = {
    stocks: []
};

const getters = {
    stocks(state) {
        return state.stocks;
    }
};

const mutations = {
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks;
    },
    // It is better to keep the number within a range so price will not stuck around 0 or infinity
    'RND_STOCKS' (state) {
        state.stocks.forEach( stock => {
            var tmp = 0.3;
            if(stock.price < 60) {
                tmp = 0.1;
            } else if (stock.price > 200) {
                tmp = 0.5;
            }
            stock.price = stock.price + Math.round(stock.price * (0.61 * Math.random() - tmp));
        })
    }
};

const actions = {
    initStocks ({commit}) {
        commit('SET_STOCKS',initStocks);
    },
    randomizeStocks ({commit}) {
        commit('RND_STOCKS');
    }
}


export default {
    state,
    getters,
    mutations,
    actions
}