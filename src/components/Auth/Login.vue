<template>
    <div class="login container">
        <div class="card">
            <div class="card-header">LOGIN</div>
            <div class="card-body mt-5">
                <form @submit.prevent="send">
                    <div class="form-group row align-items-center">
                        <label for="username" class="label col-md-4 text-md-right">
                            Username
                        </label>
                        <div class="col-md-6">
                            <input v-model="fields.username" type="text" id="username" class="input-field form-control">
                        </div>
                        <span v-if="errors && errors.username" class="col-6 offset-4 error-field text-danger">
                                {{errors.username[0]}}
                        </span>
                    </div>

                    <div class="form-group row align-items-center">
                        <label for="password" class="label col-md-4 text-md-right">
                            Password
                        </label>
                        <div class="col-md-6">
                            <input v-model="fields.password" type="password" id="password"
                                   class="input-field form-control">
                        </div>
                        <span v-if="errors && errors.password" class="col-6 offset-4 error-field text-danger">
                                {{errors.password[0]}}
                        </span>
                    </div>

                    <div class="form-group row">
                        <div class="col-md-6 offset-4">
                            <button class="submit btn btn-primary w-25 form-control" :disabled="sending">Sign in
                            </button>
                        </div>
                    </div>
                    <span v-if="errors && errors.message" class="col-6 offset-4 error-field text-danger">
                        {{errors.message}}
                    </span>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: "Login",
        data() {
            return {
                fields: {
                    username: null,
                    password: null,
                },
                errors: null,
                sending: false,
            }
        },
        methods: {
            ...mapActions('auth', [
                'login',
            ]),
            send() {
                this.sending = true;
                this.errors = null;
                this.login(this.fields)
                    .then(resp => {
                        this.sending = false;
                        this.$router.push((resp === 'user') ? {name: 'home'} : {name: 'admin'});
                    }).catch(err => {
                    this.sending = false;
                    if (typeof (err) === 'string') {
                        this.errors = {};
                        this.errors.message = "Invalid username or password.";
                    } else {
                        this.errors = err;
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .submit:focus {
        background: rgba(10, 10, 10, .9) !important;
        color: white;
        outline: none !important;
        box-shadow: none !important;
        border: none !important;
    }

    .login {
        padding-top: 10rem;
    }
</style>