<template>
    <div class="container mt-5">
        <users-list></users-list>

    </div>
</template>

<script>
    import UsersList from './UsersList';
    export default {
        name: "AdminPage",
        components: {UsersList},
    }
</script>

<style scoped>

</style>