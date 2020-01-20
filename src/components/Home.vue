<template>
    <div class="homeParent">
        <h1>
            Trade or view your portfolio!
        </h1>
        <p>
            You may save & load your data.
        </p>
        <p>
            Click on "End Day" to begin a new Day!
        </p>
        <hr />
        <h2>Your Funds: {{ moneyString }}</h2>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "Home",
    computed: {
        ...mapGetters(["moneyString"])
    }
};
</script>

<style scoped>
.homeParent {
    border-radius: 10px;
    border: 3px solid rgba(207, 206, 206, 0.692);
    padding: 3rem 2.5rem;
}

h1 {
    margin-bottom: 0.5rem;
}
p {
    line-height: 2;
}
hr {
    margin: 1rem 0;
    color: grey;
}
</style>
