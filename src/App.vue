<template>
    <div id="app">
        <div class="container">
            <nav>
                <ul class="left-navigation">
                    <li>
                        <router-link to="/" exact>Stock Trader</router-link>
                    </li>
                    <li>
                        <router-link to="/portfolio">Portfolio</router-link>
                    </li>
                    <li>
                        <router-link to="/stocks">Stocks</router-link>
                    </li>
                </ul>
                <ul class="right-navigation">
                    <li>
                        <span class="click" @click="randomizePrices"
                            >End Day</span
                        >
                    </li>
                    <li
                        class="relative"
                        @click="showSaveAndLoad = !showSaveAndLoad"
                    >
                        Save & Load
                        <ul v-if="showSaveAndLoad" class="sublist">
                            <li>
                                <span class="click" @click="saveData"
                                    >Save Data</span
                                >
                            </li>
                            <li>
                                <span class="click" @click="loadData"
                                    >Load Data</span
                                >
                            </li>
                        </ul>
                    </li>
                    <li class="funds">Funds: {{ moneyString }}</li>
                </ul>
            </nav>
            <transition name="slide" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
    name: "app",
    data() {
        return {
            showSaveAndLoad: false
        };
    },
    computed: {
        ...mapGetters(["moneyString", "stocks", "yourStocks"])
    },
    methods: {
        ...mapMutations(["randomizePrices", "setData"]),
        saveData() {
            localStorage.setItem("stocksData", JSON.stringify(this.stocks));
        },
        loadData() {
            if (localStorage.getItem("stocksData")) {
                const data = JSON.parse(localStorage.getItem("stocksData"));
                this.setData(data);
            }
        }
    },
    mounted() {
        this.randomizePrices();
    }
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    margin: 0 4rem;
}
#app {
    font-family: "IBM Plex Sans", sans-serif;
}

nav {
    padding: 0 2rem;
    background-color: rgba(153, 224, 221, 0.562);
    border: 1px solid rgba(114, 177, 192, 0.74);
    border-radius: 10px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
}

ul {
    list-style: none;
    display: flex;
    align-items: baseline;
}

nav ul.left-navigation li:first-child {
    font-size: 1.4rem;
}

.funds {
    font-size: 1.3rem;
    font-weight: 600;
    color: rgb(12, 41, 8);
}

nav ul.left-navigation li {
    padding: 1rem 0;
    margin-right: 1.5rem;
    font-size: 1.15rem;
}

nav ul.right-navigation li {
    padding: 1rem 0;
    margin-left: 1.5rem;
    font-size: 1.15rem;
}

nav ul li a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.8);
}

.router-link-active {
    font-weight: 600;
    color: black;
}

.click {
    cursor: pointer;
}

.relative {
    position: relative;
    cursor: pointer;
}

.sublist {
    width: 100%;
    flex-direction: column;
    position: absolute;
    top: 100%;
    border: 1px solid rgba(114, 177, 192, 0.74);
}

nav ul li ul.sublist li {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-left: 0;
    padding: 0.5rem 0.25rem 0.5rem 0.25rem;
    font-size: 1.15rem;
    background-color: rgb(232, 250, 249);
    transition: background-color 0.3s ease;
}

nav ul li ul.sublist li:hover {
    background-color: rgb(204, 231, 230);
}

.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s ease-out;
    transform: translateY(0);
    opacity: 1;
}

.slide-enter,
.slide-leave-to {
    opacity: 0;
    transform: translateY(-15px);
}
</style>
