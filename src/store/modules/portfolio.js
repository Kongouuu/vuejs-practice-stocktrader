const state = {
    funds: 10000,
    stocks: []
};

const getters = {
    stockPortfolio (state, getters) {
        // 从本地(portfolio)的stocks用map建立一个新的阵列
        // array.map(x => {}) 里x为array里面的数据
        return state.stocks.map(p_stock => {
            // 这里getters.stocks是隔壁的stocks，
            // 从portfolio.stocks开始寻找stocks.stocks里相对应的id
            const record = getters.stocks.find(element => element.id == p_stock.id);
            // 为上方使用map返回的阵列中添加以下内容
            return {
                // p_stock (portfolio) 为本地
                id: p_stock.id,
                // quantity取portfolio的，也就是用户的quantity
                quantity: p_stock.quantity,
                // name是一样的
                name: record.name,
                // price为更新后的stocks里面的price
                price: record.price
            }
        });
    },
    funds (state) {
        return state.funds;
    }
};

const mutations = {
    'BUY_STOCK'(state, order) {
        // 购买时，record为用户库存中与订单中相对应的stock
        const record = state.stocks.find(element => element.id == order.id);
        // 如果用户之前购买过，则只加数量
        if (record) {
            record.quantity +=  Number(order.quantity);
        } else {
            // 如果用户没有买过，则添加这项stock
            state.stocks.push({
                id: order.id,
                quantity: Number(order.quantity)
            })
        }
        console.log(order.id);
        // 从用户钱包扣钱
        // 游戏结束不在这里判定
        state.funds -= order.stockPrice * order.quantity;
    },

    'SELL_STOCK' (state, order) {
        // 选定要卖的stock
        const record = state.stocks.find(element => element.id == order.id);
        // 如果没有卖完，那就在阵列保留
        if(record.quantity > order.quantity) {
            record.quantity -= order.quantity;
        } else {
            // 如果刚好卖完，那就把stock从阵列里删除
            state.stocks.splice(state.stocks.indexOf(record),1)
        }
        // 输入限制会在页面中进行，不会有卖的比库存多的情况
        state.funds += order.stockPrice * order.quantity;
    },
    'SET_PORTFOLIO' (state, portfolio) {
        state.funds = portfolio.funds;
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
    }
};

const actions = {
    buyStock ({commit}, order) {
        commit('BUY_STOCK', order);
    },
    sellStock ({commit}, order) {
        commit('SELL_STOCK', order);
    }
}


export default {
    state,
    getters,
    mutations,
    actions
}