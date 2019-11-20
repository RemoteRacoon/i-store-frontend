<template>
    <div></div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        name: "Logout",
        methods: {
            ...mapActions('auth', [
                'logout'
            ]),
        },
        created() {
            this.logout()
                .then(() => {
                    this.$router.push('/');
                })
        }
    }
</script>

<style scoped>

</style>