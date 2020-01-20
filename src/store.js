import Vue from "vue";
import VueX from "vuex";

Vue.use(VueX);

export const store = new VueX.Store({
    state: {
        funds: 10000,
        stocks: {
            IBM: 100,
            Google: 200,
            Apple: 250,
            Twitter: 10
        },
        yourStocks: {}
    },
    getters: {
        moneyString: state => {
            return `$${state.funds
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
        },
        stocks: state => {
            return state.stocks;
        },
        yourStocks: state => {
            return state.yourStocks;
        }
    },
    mutations: {
        buyStock: (state, payload) => {
            const value = state.stocks[payload.stockName] * payload.purchase;
            if (state.funds >= value) {
                state.funds -= value;
                if (payload.stockName in state.yourStocks) {
                    state.yourStocks[payload.stockName] += payload.purchase;
                } else {
                    state.yourStocks[payload.stockName] = payload.purchase;
                }
            } else {
                alert("Not enough funds!");
            }
        },
        sellStock: (state, payload) => {
            let sellLoad = 0;
            if (state.yourStocks.hasOwnProperty(payload.stockName)) {
                state.yourStocks[payload.stockName] < payload.sellLoad
                    ? (sellLoad = state.yourStocks[payload.stockName])
                    : (sellLoad = payload.sellLoad);
                console.log(sellLoad);
                const value = state.stocks[payload.stockName] * sellLoad;
                state.yourStocks[payload.stockName] -= sellLoad;
                if (state.yourStocks[payload.stockName] === 0) {
                    delete state.yourStocks[payload.stockName];
                }
                state.funds += value;
            }
        },
        randomizePrices: state => {
            for (const prop in state.stocks) {
                const random = Math.floor(Math.random() * 20) - 10;
                state.stocks[prop] += random;
                if (state.stocks[prop] < 0) {
                    state.stocks[prop] = 0;
                }
            }
        },
        setData: (state, payload) => {
            for (const prop in payload) {
                state.stocks[prop] = payload[prop];
            }
        }
    }
});
