<template>
    <div class="mt-5">
        <div class="orders">
            <orders></orders>
        </div>
    </div>
</template>

<script>
    import Orders from "../Orders/Orders";
    export default {
        name: "Home",
        components: {Orders},
        created() {
        },
        data() {
            return {

            }
        },

    }
</script>

<style scoped>

</style>