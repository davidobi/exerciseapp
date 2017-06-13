<template>
    <div id="exercise" class="full-layout nav-right-hide nav-right-start-hide nav-top-fixed responsive clearfix" data-active="exercise">
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
                                                <router-link to="/exercise">Exercise</router-link>
                                            </li>
                                            <li class="active">Gym</li>
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
                                        <h1>Exercise</h1>
                                        <small class="subtitle">Gyming Activities</small>
                                        <div class="vd_panel-menu  hidden-xs">

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
                                                <div class="panel widget light-widget">
                                                    <div class="panel-heading no-title"> </div>
                                                    <div class="panel-body">
                                                        <h2 class="mgbt-xs-20">Add Exercise</h2>
                                                        <p ref="msg"></p>
                                                        <form class="form-horizontal" action="#" role="form" id="register-form-2">
                                                            <div class="alert alert-danger vd_hidden">
                                                                <button type="button" class="close" data-dismiss="alert" aria-hidden="true"><i class="icon-cross"></i></button>
                                                                <span class="vd_alert-icon"><i class="fa fa-exclamation-circle vd_red"></i></span><strong>Oh snap!</strong>                                                                Change a few things up and try submitting again. </div>
                                                            <div class="alert alert-success vd_hidden">
                                                                <button type="button" class="close" data-dismiss="alert" aria-hidden="true"><i class="icon-cross"></i></button>
                                                                <span class="vd_alert-icon"><i class="fa fa-check-circle vd_green"></i></span><strong>Well done!</strong>.
                                                            </div>
                                                            <div class="form-group">
                                                                <div class="col-md-12">
                                                                    <div class="label-wrapper">
                                                                        <label class="control-label"><span class="menu-icon"> <i class="fa fa-child"></i> </span> Target Body Part and Equipment <span class="vd_red">*</span></label>
                                                                    </div>
                                                                    <div class="vd_input-wrapper" id="first-name-input-wrapper">
                                                                        <select class="required" required v-model="targetBodyPartAndEquipment" id="targetBodyPartAndEquipment">
                                                                            <option value="0"> Choose Body Part or Equipment</option>
                                                                            <option :value="bpNeq.id" v-for="bpNeq in bpNeqs">{{ bpNeq.body_part }}, {{ bpNeq.equipment_name }}</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <!--<div class="col-md-6">
                                                                    <div class="label-wrapper">
                                                                        <label class="control-label"><span class="menu-icon"> <i class="fa fa-gears"></i> </span> Equipment <span class="vd_red">*</span></label>
                                                                    </div>
                                                                    <div class="vd_input-wrapper" id="first-name-input-wrapper">
                                                                        <select class="required" required name="equipment" id="equipment">
                                                                            <option value="0">Choose Equipment</option>
                                                                            <option value="1">Dumbells</option>
                                                                            <option value="2">Lift</option>
                                                                        </select>
                                                                    </div>
                                                                </div>-->
                                                            </div>
                                                            <div class="form-group">
                                                                <div class="col-md-6">
                                                                    <div class="label-wrapper">
                                                                        <label class="control-label"><span class="menu-icon"> <i class="fa fa-sun-o"></i> </span> Weight or Intensity <span class="vd_red">*</span></label>
                                                                    </div>
                                                                    <div class="vd_input-wrapper" id="first-name-input-wrapper">
                                                                        <select class="required" required v-model="weightOrIntensity" id="weightOrIntensity">
                                                                            <option value="0">Choose Weight/Intensity</option>
                                                                            <option value="10">10kg</option>
                                                                            <option value="20">20kg</option>
                                                                            <option value="30">30kg</option>
                                                                            <option value="40">40kg</option>
                                                                            <option value="50">50kg</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="label-wrapper">
                                                                        <label class="control-label"><span class="menu-icon"> <i class="fa fa-gear"></i> </span> Sets <span class="vd_red">*</span></label>
                                                                    </div>
                                                                    <div class="vd_input-wrapper" id="first-name-input-wrapper">
                                                                        <input type="number" v-model="sets" class="form-control" min="0">
                                                                        <!--<select class="required" required name="sets" id="sets">
                                                                            <option value="0">Choose Sets</option>
                                                                            <option value="1">5</option>
                                                                            <option value="2">10</option>
                                                                        </select>-->
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="vd_login-error" class="alert alert-danger hidden"><i class="fa fa-exclamation-circle fa-fw"></i> Please fill the
                                                                necessary field </div>
                                                            <div class="form-group">

                                                                <div class="col-md-12 mgbt-xs-5">
                                                                    <button class="btn vd_bg-green vd_white" type="button" id="submit-register" @click="addExercise" name="submit-register">Add Exercise</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
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

    import axios from 'axios';

    export default {
        data() {
            return {
                bpNeqs: [],
                targetBodyPartAndEquipment: "",
                weightOrIntensity: "",
                sets: 0
            }
        },
        mounted() {
            let bodyPartsAndEquipments = [];
            let app = this;

            axios.get('http://mestergymlog.herokuapp.com/api/v1/equipments.json', {
                headers: { 'Authorization': localStorage.getItem('token') }
            })
                .then(function (response) {
                    console.log('from response: ', response.data);

                    bodyPartsAndEquipments.push(response.data);
                    console.log('from bodyPartsAndEquipments variable in axios: ', bodyPartsAndEquipments);

                    app.bpNeq(bodyPartsAndEquipments);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        methods: {
            bpNeq(a) {
                let app = this;

                console.log('from bNeq: ', a);
                //app.bpNeqs = a;//note: contains an array of array, hence a[0] below
                app.bpNeqs = a[0];
                console.log('app.bNeqs: ', app.bpNeqs);
            },
            addExercise() {
                //let app = this;

                let targetBodyPartAndEquipment = this.targetBodyPartAndEquipment;
                let weightOrIntensity = this.weightOrIntensity;
                let sets = this.sets;

                //alert(targetBodyPartAndEquipment + ": " + weightOrIntensity + ": " + sets);

                if (!targetBodyPartAndEquipment || !weightOrIntensity || !sets){
                    alert("Please Fill in Fields");
                }
                else {
                    const config = { headers: { 'Authorization': localStorage.getItem('token') } };
                    axios.post('http://mestergymlog.herokuapp.com/api/v1/user_exercises.json', {
                        equipment_id: targetBodyPartAndEquipment,
                        sets: sets,
                        weight_lifted: weightOrIntensity
                    }, config)
                        .then(function (response) {
                            console.log(response);
                            alert("Exercise Added Successfully");
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                }
            }
        },
        components: {
            'gymlog-in-header': Header,
            'gymlog-in-sidebar': Sidebar,
            'gymlog-in-footer': Footer
        }
    }

</script>

<style>

</style>