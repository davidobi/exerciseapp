<template>
    <div id="signin">
        <gymlog-out-header></gymlog-out-header>

        <div class="login-layout">
            <div class="content">
                <div class="container">
                    <div class="vd_content-wrapper">
                        <div class="vd_container">
                            <div class="vd_content clearfix">
                                <div class="vd_content-section clearfix">
                                    <div class="vd_login-page">
                                        <div class="heading clearfix">
                                            <div class="logo">
                                                <h2 class="mgbt-xs-5">GYMLOG</h2>
                                            </div>
                                            <h4 class="text-center font-semibold vd_grey">LOGIN TO YOUR ACCOUNT</h4>
                                        </div>
                                        <div class="panel widget">
                                            <div class="panel-body">
                                                <div class="login-icon entypo-icon"> <i class="icon-key"></i> </div>
                                                <form class="form-horizontal" id="login-form" action="#" role="form">
                                                    <div class="alert alert-danger vd_hidden">
                                                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true"><i class="icon-cross"></i></button>
                                                        <span class="vd_alert-icon"><i class="fa fa-exclamation-circle vd_red"></i></span><strong>Oh snap!</strong>                                                        Change a few things up and try submitting again. </div>
                                                    <div class="alert alert-success vd_hidden">
                                                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true"><i class="icon-cross"></i></button>
                                                        <span class="vd_alert-icon"><i class="fa fa-check-circle vd_green"></i></span><strong>Well done!</strong>.
                                                    </div>
                                                    <div class="form-group  mgbt-xs-20">
                                                        <div class="col-md-12">
                                                            <div class="label-wrapper sr-only">
                                                                <label class="control-label" for="email">Email</label>
                                                            </div>
                                                            <div class="vd_input-wrapper" id="email-input-wrapper"> <span class="menu-icon"> <i class="fa fa-envelope"></i> </span>
                                                                <input type="email" placeholder="Email" id="email" ref="email" v-model="email" class="required" required>
                                                            </div>
                                                            <div class="label-wrapper">
                                                                <label class="control-label sr-only" for="password">Password</label>
                                                            </div>
                                                            <div class="vd_input-wrapper" id="password-input-wrapper"> <span class="menu-icon"> <i class="fa fa-lock"></i> </span>
                                                                <input type="password" placeholder="Password" id="password" ref="password" v-model="password" class="required" required>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="vd_login-error" class="alert alert-danger hidden"><i class="fa fa-exclamation-circle fa-fw"></i> Please fill the necessary
                                                        field </div>
                                                    <div class="form-group">
                                                        <div class="col-md-12 text-center mgbt-xs-5">
                                                            <button class="btn vd_bg-green vd_white width-100" type="button" @click="signin" id="login-submit">Login</button>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <div class="row">
                                                                <div class="col-xs-6">
                                                                    <div class="vd_checkbox">
                                                                        <input type="checkbox" id="checkbox-1" value="1">
                                                                        <label for="checkbox-1"> Remember me</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xs-6 text-right">
                                                                    <div class="">
                                                                        <router-link to="/signin">Forget Password? </router-link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <!-- Panel Widget -->
                                        <div class="register-panel text-center font-semibold">
                                            <router-link to="/signup">CREATE AN ACCOUNT<span class="menu-icon"><i class="fa fa-angle-double-right fa-fw"></i></span></router-link>
                                        </div>
                                    </div>
                                    <!-- vd_login-page -->

                                </div>
                                <!-- .vd_content-section -->

                            </div>
                            <!-- .vd_content -->
                        </div>
                        <!-- .vd_container -->
                    </div>
                </div>
            </div>
        </div>

        <gymlog-out-footer></gymlog-out-footer>
    </div>
</template>

<script>
    import Header from './outlayout/Header.vue'
    import Footer from './outlayout/Footer.vue'

    export default {
        data() {
            return {
                email: "",
                password: ""
            }
        },
        methods: {
            signin() {
                let email = this.email;
                let password = this.password;

                let router = this.$router;

                if (!email || !password){
                    alert("Please fill in Fields");
                }
                else {
                    axios.post('http://mestergymlog.herokuapp.com/api/v1/authenticate', {
                        email: email,
                        password: password
                    })
                        .then(function (response) {
                            console.log(response.data.auth_token);

                            localStorage.setItem('token', response.data.auth_token);

                            if (localStorage.getItem('token') != null) {
                                router.push('/dashboard');
                            }
                            else {
                                alert("Invalid Credentials");
                            }
                        })
                        .catch(function (error) {
                            console.log(error);
                            alert("Invalid Credentials");
                        });
                }
            }
        },
        components: {
            'gymlog-out-header': Header,
            'gymlog-out-footer': Footer,
        }
    }

</script>

<style></style>