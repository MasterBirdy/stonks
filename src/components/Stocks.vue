<template>
    <div class="parent">
        <Stock
            v-for="(quantity, stock) in yourStocks"
            :key="stock"
            :stock="stock"
            :value="stocks[stock]"
            :quantity="quantity"
        >
        </Stock>
        <p v-if="Object.entries(yourStocks).length === 0">Nothing here! :(</p>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "./Stock.vue";
export default {
    name: "Stocks",
    components: {
        Stock
    },
    computed: {
        ...mapGetters(["stocks", "yourStocks"])
    }
};
</script>

<style>
.parent {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
}
</style>
