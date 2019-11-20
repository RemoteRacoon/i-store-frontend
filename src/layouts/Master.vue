<template>
    <div class="app" id="app">

        <div class="menu row text-dark bg-light d-flex justify-content-between">
            <div class="other-links">
                <ul class="navbar-nav flex-row">
                    <li class="nav-item mr-4">
                        <router-link class="nav-link" :to="{name: 'products'}">
                            Products
                        </router-link>
                    </li>
                    <li class="nav-item mr-4" v-if="!token">
                        <router-link class="nav-link" :to="{name: 'register'}">
                            Register
                        </router-link>
                    </li>
                    <li class="nav-item mr-4" v-if="!token">
                        <router-link class="nav-link" :to="{name: 'login'}">
                            Log in
                        </router-link>
                    </li>
                    <li class="nav-item mr-4" v-if="token">
                        <router-link class="nav-link" :to="{name: 'logout'}">
                            Log out
                        </router-link>
                    </li>
                    <li class="nav-item mr-4" v-if="role === 'admin'">
                        <router-link class="nav-link" :to="{name: 'admin'}">
                            admin panel
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="home-link">
                <ul class="navbar-nav flex-row ">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="(role === 'user') ? {name: 'home'} : {name : 'admin'}">
                            <img src="https://image.flaticon.com/icons/svg/17/17004.svg" width="25px" height="25px"
                                 alt="">
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>

        <router-view></router-view>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "Master",

        data() {
            return {}
        },
        computed: {
            ...mapGetters('auth', [
                'token',
                'role',
            ]),
        }

    }
</script>

<style scoped lang="scss">
    .nav-link {
        color: rgba(10,10,10,.7);
        font-size: 1.1rem;
    }
    .menu {
        max-width: 1920px;
        margin: auto;
        padding-left: 5rem;
        padding-right: 5rem;
    }

</style>