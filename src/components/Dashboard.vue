<template>
    <div id="dashboard" class="full-layout nav-right-hide nav-right-start-hide nav-top-fixed responsive clearfix" data-active="dashboard "
        data-smooth-scrolling="1">
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
                                            <li>
                                                <router-link to="/">Dashboard</router-link>
                                            </li>
                                            <li class="active">Stats</li>
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
                                        <h1>Dashboard</h1>
                                        <small class="subtitle">Overview of all Exercise Activities</small>
                                        <div class="vd_panel-menu  hidden-xs">
                                            <div class="menu no-bg vd_red" data-original-title="Add Exercise" data-toggle="tooltip" data-placement="bottom" @click="goToExercise">
                                                <span class="menu-icon font-md"><i class="fa fa-plus"></i></span> </div>
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
                                                <div class="col-xs-6">
                                                    <div class="vd_status-widget vd_bg-red  widget">
                                                        <div class="vd_panel-menu">
                                                            <div data-action="refresh" data-original-title="Refresh" data-rel="tooltip" class=" menu entypo-icon smaller-font"> <i class="icon-cycle"></i> </div>
                                                        </div>
                                                        <!-- vd_panel-menu -->
                                                        <a class="panel-body" href="#">
                                                            <div class="clearfix">
                                                                <span class="menu-icon">
                                                      <i class="fa fa-child"></i>
                                                      </span>
                                                                <span class="menu-value">
                                                      60kg
                                                      </span>
                                                            </div>
                                                            <div class="menu-text clearfix">
                                                                New Weight
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <!--col-xs-6 -->
                                                <div class="col-xs-6">
                                                    <div class="vd_status-widget vd_bg-blue widget">
                                                        <div class="vd_panel-menu">
                                                            <div data-action="refresh" data-original-title="Refresh" data-rel="tooltip" class=" menu entypo-icon smaller-font"> <i class="icon-cycle"></i> </div>
                                                        </div>
                                                        <!-- vd_panel-menu -->
                                                        <a class="panel-body" href="#">
                                                            <div class="clearfix">
                                                                <span class="menu-icon">
                                                      <i class="fa fa-tasks"></i>
                                                      </span>
                                                                <span class="menu-value">
                                                      12
                                                      </span>
                                                            </div>
                                                            <div class="menu-text clearfix">
                                                                Exercises
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <!--col-xs-6 -->
                                            </div>
                                            <!-- .row -->
                                        </div>
                                        <!-- .col-md-5 -->
                                    </div>

                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="panel widget">
                                                <div class="panel-heading vd_bg-red">
                                                    <h3 class="panel-title"> <span class="menu-icon"> <i class="icon-pie"></i> </span> User Exercises
                                                    </h3>
                                                    <div class="vd_panel-menu">
                                                        <div data-action="minimize" data-original-title="Minimize" data-toggle="tooltip" data-placement="bottom" class=" menu entypo-icon">
                                                            <i class="icon-minus3"></i> </div>
                                                        <div data-action="refresh" data-original-title="Refresh" data-toggle="tooltip" data-placement="bottom" class=" menu entypo-icon smaller-font">
                                                            <i class="icon-cycle"></i> </div>
                                                        <div data-original-title="Config" data-toggle="tooltip" data-placement="bottom" class=" menu entypo-icon smaller-font">
                                                            <div class="menu-trigger" data-action="click-trigger"> <i class="icon-cog"></i> </div>
                                                            <div data-action="click-target" class="vd_mega-menu-content  width-xs-2  left-xs">
                                                                <div class="child-menu">
                                                                    <div class="content-list content-menu">
                                                                        <ul class="list-wrapper pd-lr-10">
                                                                            <li>
                                                                                <a href="#">
                                                                                    <div class="menu-icon"><i class=" fa fa-user"></i></div>
                                                                                    <div class="menu-text">User Menu</div>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">
                                                                                    <div class="menu-icon"><i class=" icon-trophy"></i></div>
                                                                                    <div class="menu-text">Panel Menu</div>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">
                                                                                    <div class="menu-icon"><i class=" fa fa-envelope"></i></div>
                                                                                    <div class="menu-text">Other Menu</div>
                                                                                </a>
                                                                            </li>
                                                                            <li class="line"></li>
                                                                            <li>
                                                                                <a href="#">
                                                                                    <div class="menu-icon"><i class=" fa fa-tasks"></i></div>
                                                                                    <div class="menu-text"> Tasks</div>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">
                                                                                    <div class="menu-icon"><i class=" icon-lock"></i></div>
                                                                                    <div class="menu-text">Privacy</div>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-action="close" data-original-title="Close" data-toggle="tooltip" data-placement="bottom" class=" menu entypo-icon">
                                                            <i class="icon-cross"></i> </div>
                                                    </div>
                                                    <!-- vd_panel-menu -->

                                                </div>
                                                <div class="panel-body">
                                                    <div v-for="ex in exercises">
                                                        
                                                        <h2>
                                                            &raquo; <em class="vd_soft-grey">{{ ex.created_at | formatDate }}...</em>

                                                            <!--<img class="img-circle" :src="ex.equipment_image.equipment_image.thumbnail.url" >: -->
                                                            <!--{{ ex.body_part }}, <span class="font-semibold">{{ ex.equipment_name }}</span>-->
                                                            <!--<em class="vd_soft-grey">{{ ex.weight_lifted }} for {{ ex.sets }} times</em>
                                                            <em class="vd_soft-grey">{{ ex.created_at }}</em>-->
                                                        </h2>
                                                        <p>
                                                            <img class="img-circle" :src="ex.equipment_image.equipment_image.thumbnail.url" >
                                                            {{ ex.equipment_name }} for  <span class="font-semibold"> {{ ex.body_part }}:</span>
                                                            <em class="vd_soft-grey">You lifted {{ ex.weight_lifted }}kg for {{ ex.sets }} times</em>
                                                        </p>
                                                        <hr>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Panel Widget -->
                                        </div>
                                    </div>
                                    <!-- row -->
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

    import Vue from 'vue';
    import moment from 'moment';
    import axios from 'axios';

    Vue.filter('formatDate', function(value){
        if(value){
            //return moment(String(value)).format('MMMM Do YYYY hh:mm a');
            return moment(String(value)).fromNow();
        }
    });

    export default {
        data() {
            return {
                exercises: []
            }
        },
        mounted() {
            let userExercises = [];
            let app = this;

            axios.get('http://mestergymlog.herokuapp.com/api/v1/user_exercises.json', {
                headers: { 'Authorization': localStorage.getItem('token') }
            })
                .then(function (response) {
                    console.log('from response: ', response.data);

                    userExercises.push(response.data);
                    app.userExercises(userExercises);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        components: {
            'gymlog-in-header': Header,
            'gymlog-in-sidebar': Sidebar,
            'gymlog-in-footer': Footer
        },
        methods: {
            goToExercise() {
                this.$router.push('/exercise')
            },
            userExercises(a) {
                let app = this;

                console.log('from user exercises: ', a);
                app.exercises = a[0];
                console.log('from app.exercises: ', app.exercises);
            }
        }
    }

</script>

<style>

</style>