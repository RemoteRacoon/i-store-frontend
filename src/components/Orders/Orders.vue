<template>
    <div class="user-orders container">
        <div class="h1 mb-5">
            Welcome back, {{name}}
        </div>

        <item v-for="order in orders" :key="order.id" :order="order">

        </item>
    </div>
</template>

<script>

    import Item from './Item';
    import {mapGetters} from 'vuex';

    export default {
        name: "Orders",
        components: {Item},
        computed: {
            ...mapGetters('user', [
                'orders',
            ]),
            ...mapGetters('auth', [
                'name'
            ]),
        }
    }
</script>

<style scoped lang="scss">
    .user-orders {
        font-size: 1.2rem !important;
    }
</style>