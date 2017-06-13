<template>
    <div id="profile" class="full-layout nav-right-hide nav-right-start-hide nav-top-fixed responsive clearfix" data-active="profile">
        <div class="vd_body">
            <gymlog-in-header></gymlog-in-header>

            <div class="content">
                <div class="container">

                    <gymlog-in-sidebar></gymlog-in-sidebar>

                    <div class="vd_content-wrapper">
                        <div class="vd_container">
                            <div class="vd_content clearfix">
                                <div class="vd_head-section clearfix">
                                    <div class="vd_panel-header">
                                        <ul class="breadcrumb">
                                            <li><router-link to="/profile">Profile</router-link> </li>
                                            <li class="active">Overview</li>
                                        </ul>
                                        <div class="vd_panel-menu hidden-sm hidden-xs" data-intro="<strong>Expand Control</strong><br/>To expand content page horizontally, vertically, or Both. If you just need one button just simply remove the other button code."
                                            data-step=5 data-position="left">
                                            <div data-action="remove-navbar" data-original-title="Remove Navigation Bar Toggle" data-toggle="tooltip" data-placement="bottom"
                                                class="remove-navbar-button menu"> <i class="fa fa-arrows-h"></i> </div>
                                            <div data-action="remove-header" data-original-title="Remove Top Menu Toggle" data-toggle="tooltip" data-placement="bottom"
                                                class="remove-header-button menu"> <i class="fa fa-arrows-v"></i> </div>
                                            <div data-action="fullscreen" data-original-title="Remove Navigation Bar and Top Menu Toggle" data-toggle="tooltip" data-placement="bottom"
                                                class="fullscreen-button menu"> <i class="glyphicon glyphicon-fullscreen"></i> </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- vd_head-section -->
                                <div class="vd_title-section clearfix">
                                    <div class="vd_panel-header">
                                        <h1>Profile</h1>
                                        <small class="subtitle">Edit Profile</small>
                                        <div class="vd_panel-menu  hidden-xs">
                                            <div class="menu no-bg vd_red" data-original-title="Add Exercise" data-toggle="tooltip" data-placement="bottom"
                                                @click="goToExercise"> <span class="menu-icon font-md"><i class="fa fa-plus"></i></span>                                                </div>
                                        </div>
                                        <!-- vd_panel-menu -->
                                    </div>
                                    <!-- vd_panel-header -->
                                </div>
                                <!-- vd_title-section -->
                                <div class="vd_content-section clearfix">
                                    <div class="row">
                                        <!--col-md-7 -->
                                        <div class="col-md-12">
                                            <div class="row">
                                                
                                            </div>
                                            <!-- .row -->
                                        </div>
                                        <!-- .col-md-5 -->
                                    </div>
                                </div>
                                <!-- .vd_content-section -->
                            </div>
                            <!-- .vd_content -->
                        </div>
                        <!-- .vd_container -->
                    </div>
                </div>
            </div>

            <gymlog-in-footer></gymlog-in-footer>
        </div>
    </div>
</template>

<script>
    import Header from './inlayout/Header.vue'
    import Sidebar from './inlayout/Sidebar.vue'
    import Footer from './inlayout/Footer.vue'

    export default {
        data() {
            return {

            }
        },
        components: {
            'gymlog-in-header': Header,
            'gymlog-in-sidebar': Sidebar,
            'gymlog-in-footer': Footer
        },
        methods:{
            goToExercise(){
                this.$router.push('/exercise')
            }
        }
    }

</script>

<style>
    
</style>