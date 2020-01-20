<template>
    <div class="myParent" :class="{ blue: isStocks }">
        <div class="header" :class="{ blue: isStocks }">
            <h4 :class="{ blue: isStocks }">{{ stock }}</h4>
            <span class="price" :class="{ blue: isStocks }"
                >(Price: <strong>{{ stocks[stock] }}</strong
                >)</span
            >
            <span class="price" v-if="isStocks" :class="{ blue: isStocks }"
                >(Quantity:
                <strong>{{
                    yourStocks.hasOwnProperty(stock) ? yourStocks[stock] : 0
                }}</strong
                >)</span
            >
        </div>
        <div class="stockMain">
            <input
                :class="{ blue: isStocks }"
                type="number"
                placeholder="Quantity"
                v-model="currentPurchase"
            />
            <button v-if="isPortfolio" @click="buy">
                Buy
            </button>
            <button v-if="isStocks" :class="{ blue: isStocks }" @click="sell">
                Sell
            </button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "Stock",
    data() {
        return {
            currentPurchase: ""
        };
    },
    props: {
        stock: String
    },
    computed: {
        ...mapGetters(["stocks", "yourStocks"]),
        isPortfolio() {
            return this.$router.currentRoute.name === "portfolio";
        },
        isStocks() {
            return this.$router.currentRoute.name === "stocks";
        }
    },
    methods: {
        buy() {
            if (this.currentPurchase !== "") {
                this.$store.commit("buyStock", {
                    stockName: this.stock,
                    purchase: parseInt(this.currentPurchase)
                });
            }
            this.currentPurchase = "";
        },
        sell() {
            if (this.currentPurchase !== "") {
                this.$store.commit("sellStock", {
                    stockName: this.stock,
                    sellLoad: parseInt(this.currentPurchase)
                });
            }
            this.currentPurchase = "";
        }
    }
};
</script>

<style scoped>
.myParent {
    border-radius: 5px;
    border: 1px solid rgb(97, 180, 97);
}

.header {
    display: flex;
    background-color: rgb(167, 240, 167);
    padding: 0.5rem 1rem;
    align-items: baseline;
    border-radius: 5px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
h4 {
    font-size: 1.15rem;
    font-weight: 600;
    color: rgb(33, 107, 33);
}

.price {
    font-size: 0.78rem;
    color: rgb(33, 107, 33);
    margin-left: 0.5rem;
}

.stockMain {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
}

input {
    border-radius: 5px;
    border: 1px solid rgb(70, 155, 70);
    padding: 0.25rem 0.5rem;
    font-family: "IBM Plex Sans", sans-serif;
    outline: none;
    appearance: none;
}

button {
    padding: 0.75rem;
    background-color: rgb(70, 155, 70);
    border: 0;
    border-radius: 5px;
    font-family: "IBM Plex Sans", sans-serif;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: white;
    cursor: pointer;
}

.myParent.blue,
input.blue {
    border-color: rgba(114, 177, 192, 0.74);
}

.header.blue {
    background-color: rgba(153, 224, 221, 0.562);
}

h4.blue,
.price.blue {
    color: rgb(21, 85, 110);
}

button.blue {
    background-color: rgb(21, 85, 110);
}
</style>
