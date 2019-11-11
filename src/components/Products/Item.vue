<template>
    <div class="mb-4">
        <div class="card">
            <div class="card-header">
                <div class="text-secondary text-capitalize">
                    {{item.label}}
                </div>
            </div>
            <div class="card-body">
                <strong class="h4 text-primary mr-3">Rent Rate</strong>
                {{RentRate}}
            </div>
        </div>
    </div>
</template>

<script>
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
        }
    }
</script>

<style scoped>

</style>