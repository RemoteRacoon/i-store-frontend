<template>
    <div class="container">
<!--        <ul class="navbar nav">-->
<!--            <li class="nav-item">-->
<!--                <router-link class="nav-link">Home</router-link>-->
<!--            </li>-->
<!--            <li class="nav-item">-->
<!--                <router-link class="nav-link">Login</router-link>-->
<!--            </li>-->
<!--            <li class="nav-item">-->
<!--                <router-link class="nav-link">Logout</router-link>-->
<!--            </li>-->
<!--            <li class="nav-item">-->
<!--                <router-link class="nav-link">Products List</router-link>-->
<!--            </li>-->
<!--        </ul>-->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Master"
    }
</script>

<style scoped lang="scss">

</style>