<template>
    <div class="container mt-5">
        <div class="h3 text-uppercase text-center">Products List</div>
        <div class="items-list">
            <item v-for="item in prods" :item="item" :key="item.id"></item>
        </div>
    </div>
</template>

<script>
    import Item from './Item';
    import {mapActions} from 'vuex';
    export default {
        name: "Products",
        components: {Item},
        data() {
            return {
                prods: null,
            }
        },
        methods: {
            ...mapActions('products', [
                'index'
            ])
        },
        created() {
            this.index().then(resp => {
                this.prods = resp;
            })
        }
    }
</script>

<style scoped lang="scss">
    .items-list {
        margin-top: 4rem;
    }
</style>