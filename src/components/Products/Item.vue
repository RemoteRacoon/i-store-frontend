<template>
    <div class="mb-4">
        <div class="card">
            <div class="card-header">
                <div class="text-dark text-capitalize">
                    {{item.label}}
                </div>
            </div>
            <div class="card-body">
                <strong class="h4 text-secondary mr-3">Rent Rate</strong>
                <span class="font-weight-bold rent-rate">{{RentRate}}</span>
                <router-link class="btn btn-success mt-3 d-block w-25"
                             :to="{name: 'make-order', params: {product_id : item.id}}">
                    Add to Cart
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: "Item",
        props: {
            item: {
                type: Object,
                required: true
            }
        },
        computed: {
            /**
             * @return {string}
             */
            RentRate() {
                return this.item.rent_rate + " $";
            }
        },

        methods: {
            ...mapActions('products', [
                'addToCart',
            ]),
            add(id) {
                this.addToCart(id)
                    .then(resp => {
                        this.$router.push('make-order');
                    }).catch(() => {
                    this.$router.push('login');
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    .rent-rate {
        font-size: 24px;
    }
</style>