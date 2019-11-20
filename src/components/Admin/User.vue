<template>
    <div class="orders-list">
        <orders-list></orders-list>
    </div>
</template>

<script>
    import OrdersList from "./UserOrders/OrdersList";

    export default {
        name: "User",
        components: {OrdersList},


    }
</script>

<style scoped lang="scss">
    .orders-list {
        padding-top: 10rem;
    }
</style>