<template>
    <div>
        <button :disabled="sending" @click="submit(order.id)"
                class="confirm btn text-success font-weight-bold">confirm
        </button>
    </div>
</template>

<script>
    export default {
        name: "ConfirmButton",
        data() {
            return {
                sending: false,
            }
        },
        props: {
            order_id: {
                type: Number,
                required: true,
            }
        },
        methods: {
            ...mapActions('admin', [
                'confirm'
            ]),
            submit(order_id) {
                this.sending = true;
                this.errors = null;
                this.confirm(order_id)
                    .then(() => {
                        this.sending = false;
                    }).catch(() => {
                });
            }
        },
    }
</script>

<style scoped>

</style>