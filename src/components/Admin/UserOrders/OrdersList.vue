<template>
    <div class="container">
        <no-orders v-if="orders && orders.length === 0"></no-orders>

        <div v-if="errors" class="error text-danger font-weight-bold tex-center">
            {{errors}}
        </div>
        <table v-if="orders.length > 0" class="table table-striped">
            <thead class="thead-dark">
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Label</th>
                <th scope="col">Rent Rate</th>
                <th scope="col">State</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="order in orders" :key="order.id">
                <th scope="row">
                    {{order.id}}
                </th>
                <td>
                    {{order.label}}
                </td>
                <td>
                    {{order.rent_rate}} $
                </td>
                <td>
                    {{order.state}}
                </td>
                <td>
                    <confirm-button v-if="order.state === 'pending'"  :order_id="order.id"></confirm-button>
                    <span v-if="order.state === 'confirmed'" class="text-success font-weight-bold">confirmed</span>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import NoOrders from "./NoOrders";
    import ConfirmButton from "./ConfirmButton";

    export default {
        name: "OrdersList",
        data() {
            return {
                sending: false,
                errors: null,
            }

        },
        components: {NoOrders, ConfirmButton},
        beforeCreate() {
            this.$store.dispatch('admin/user', this.$route.params.id);
        },

        computed: {
            ...mapGetters('admin', [
                'orders',
            ])
        },

        watch: {
            orders(data) {
                // this.orders = data;
            }
        }
    }
</script>

<style scoped lang="scss">

    .confirm:hover {
        cursor: pointer;
    }
</style>