<template>
    <div id="outheader" class="front-layout">
        <header class="header-2" id="header">
            <div class="vd_top-menu-wrapper vd_bg-white light-top-menu">
                <div class="container">
                    <div class="vd_top-nav vd_nav-width  ">
                        <div class="vd_panel-header">
                            <div class="logo">
                                <router-link to="/">GYMLOG</router-link>
                            </div>
                            <!-- logo -->
                            <div class="vd_panel-menu visible-sm visible-xs">
                                <span class="menu visible-xs" data-action="submenu">
	                    <i class="fa fa-bars"></i>
                    </span>
                            </div>
                            <!-- vd_panel-menu -->
                        </div>
                        <!-- vd_panel-header -->

                    </div>
                    <div class="vd_container">
                        <div class="row">
                            <div class="col-sm-8 col-xs-12">
                                <div class="vd_mega-menu-wrapper horizontal-menu">
                                    <div class="vd_mega-menu">
                                        <ul class="mega-ul nav">
                                            <li class="mega-li">
                                                <router-link to="/" class="mega-link" data-waypoint="home">
                                                    <span class="menu-text"><i class="fa fa-home font-md hidden-xs"></i><span class="visible-xs">Home</span></span>
                                                </router-link>

                                            </li>
                                            <li class="mega-li">
                                                <router-link to="/about" class="mega-link" data-waypoint="about">
                                                    <span class="menu-text">About</span>
                                                </router-link>

                                            </li>
                                        </ul>
                                        <!-- Head menu search form ends -->
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 col-xs-12">
                                <div class="vd_mega-menu-wrapper">
                                    <div class="vd_mega-menu pull-right">
                                        <ul class="mega-ul">

                                            <li id="top-menu-1" class="one-icon mega-li">
                                                <router-link to="/signin" class="btn vd_btn vd_bg-yellow font-semibold">Login</router-link>
                                            </li>
                                            <li id="top-menu-2" class="one-icon mega-li">
                                                <router-link to="/signup" class="btn vd_btn  vd_bg-yellow font-semibold">Register</router-link>
                                            </li>

                                        </ul>
                                        <!-- Head menu search form ends -->
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <!-- container -->
            </div>
        </header>
    </div>
</template>

<script></script>

<style></style>