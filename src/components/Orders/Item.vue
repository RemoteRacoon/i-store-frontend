<template>
    <div class="mb-5">
        <div class="order">
            <div class="row">
                <span class="product col-3 mr-4">
                    product
                </span>
                <span class="col-3">{{order.label}}</span>
            </div>
            <div class="row">
                 <span class="rent col-3 mr-4">
                     rent rate
                </span>
                <span class="col-3">{{order.rent_rate}}</span>
            </div>
            <div class="row">
                 <span class="state col-3 mr-4">
                     status
                </span>
                <span class="col-3">{{order.state}}</span>
            </div>
        </div>
        <button :disabled="sending" @click="send_request" v-if="order.state === 'available'" class="btn p-0 mt-5 d-flex align-items-center">
            <span :class="classObject" class="mr-3"></span>
            <span>rent request</span>
        </button>
        <button :disabled="sending" @click="send_request" v-if="order.state === 'pending' || order.state === 'confirmed'"
                class="btn p-0 mt-5 d-flex align-items-center">
            <span :class="classObject" class="mr-3"></span>
            <span>reject order</span>
        </button>
        <div class="row">
            <div class="divider col-6"></div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: "Item",
        data() {
            return {
                sending: false,
            }
        },
        props: {
            order: {
                type: Object,
                required: true,
            },
        },
        computed: {
            classObject() {
                return {
                    'rent-request': this.order.state === 'available',
                    'reject-request': this.order.state === 'pending' || this.order.state === 'confirmed',
                }

            }
        },
        methods: {
            ...mapActions('orders', [
                'rent',
                'reject'
            ]),
            send_request() {
                let action = (this.order.state === 'available') ? 'rent' : 'reject';
                this.sending = true;
                if (action === 'reject') {
                    this.reject(this.order.id)
                        .then(() => {
                            this.sending = false;
                        });

                } else {
                    this.rent(this.order.id)
                        .then(() => {
                            this.sending = false;
                        })
                }
            }
        }

    }
</script>

<style scoped lang="scss">
    @import "~bootstrap/scss/functions";
    @import "~bootstrap/scss/variables";

    .divider {
        width: 100%;
        height: .1rem;
        margin-top: 1rem;
        background: rgba(10, 10, 10, .4);
        filter: blur(1px);
    }

    .product, .rent, .state {
        font-weight: bold;
    }

    .rent-request {
        width: .8rem;
        height: .8rem;
        background: $green;
        border-radius: 50%;
    }

    .reject-request {
        width: .8rem;
        height: .8rem;
        background: $dark;
        border-radius: 50%;
    }
</style>