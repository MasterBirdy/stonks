<template>
    <div class="parent">
        <Stock
            v-for="(value, stock) in stocks"
            :key="stock + value"
            :stock="stock"
        >
        </Stock>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "./Stock.vue";
export default {
    name: "Portfolio",
    components: {
        Stock
    },
    computed: {
        ...mapGetters(["stocks"])
    }
};
</script>

<style scoped>
.parent {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
}
</style>
