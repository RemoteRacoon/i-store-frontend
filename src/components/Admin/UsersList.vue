<template>
    <div>
        <table class="table">
            <thead class="thead-dark">
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users" :key="user.id">
                <th scope="row">{{user.id}}</th>
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
                <td>
                    <router-link :to="{name: 'user', params: {id: user.id}}">
                        <img class="watch" src="../../assets/visibility.svg" alt="">
                    </router-link>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "UsersList",
        data() {
            return {}
        },
        computed: {
            ...mapGetters('admin', [
                'users'
            ])
        }
    }
</script>

<style scoped lang="scss">
    .watch {
        transition: .6s;
    }
    .watch:hover {
        transform: scale(1.2);
    }
</style>