<template>
  <div id="inheader">
    <header class="header-1" id="header">
      <div class="vd_top-menu-wrapper">
        <div class="container ">
          <div class="vd_top-nav vd_nav-width">
            <div class="vd_panel-header">
              <div class="logo">
                <router-link to="/">GYMLOG</router-link>
              </div>
              <!-- logo -->
              <div class="vd_panel-menu  hidden-sm hidden-xs" data-intro="<strong>Minimize Left Navigation</strong><br/>Toggle navigation size to medium or small size. You can set both button or one button only. See full option at documentation."
                data-step=1>
                <span class="nav-medium-button menu" data-toggle="tooltip" data-placement="bottom" data-original-title="Medium Nav Toggle"
                  data-action="nav-left-medium">
                                 <i class="fa fa-bars"></i>
                                 </span>
                <span class="nav-small-button menu" data-toggle="tooltip" data-placement="bottom" data-original-title="Small Nav Toggle"
                  data-action="nav-left-small">
                                 <i class="fa fa-ellipsis-v"></i>
                                 </span>
              </div>
              <div class="vd_panel-menu left-pos visible-sm visible-xs">
                <span class="menu" data-action="toggle-navbar-left">
                                 <i class="fa fa-ellipsis-v"></i>
                                 </span>
              </div>
              <div class="vd_panel-menu visible-sm visible-xs">
                <span class="menu visible-xs" data-action="submenu">
                                 <i class="fa fa-bars"></i>
                                 </span>
                <span class="menu visible-sm visible-xs" data-action="toggle-navbar-right">
                                 <i class="fa fa-comments"></i>
                                 </span>
              </div>
              <!-- vd_panel-menu -->
            </div>
            <!-- vd_panel-header -->
          </div>
          <div class="vd_container">
            <div class="row">
              <div class="col-sm-5 col-xs-12">

              </div>
              <div class="col-sm-7 col-xs-12">
                <div class="vd_mega-menu-wrapper">
                  <div class="vd_mega-menu pull-right">
                    <ul class="mega-ul">
                      <li id="top-menu-profile" class="profile mega-li">
                        <a href="#" class="mega-link" @click="triggerDrop($event)" ref="trig">
                          <span class="mega-image">
                                             <img src="../../assets/img/avatar/avatar.jpg" alt="example image" />               
                                             </span>
                          <span class="mega-name">
                                             Joshua <i class="fa fa-caret-down fa-fw"></i> 
                                             </span>
                        </a>
                        <div class="vd_mega-menu-content  width-xs-2  left-xs left-sm" ref="targ">
                          <div class="child-menu">
                            <div class="content-list content-menu">
                              <ul class="list-wrapper pd-lr-10">
                                <li>
                                  <router-link to="/profile">
                                    <div class="menu-icon"><i class=" fa fa-user"></i></div>
                                    <div class="menu-text">Edit Profile</div>
                                  </router-link>
                                </li>
                                <li>
                                  <router-link to="/exercise">
                                    <div class="menu-icon"><i class=" fa fa-child"></i></div>
                                    <div class="menu-text">Exercises</div>
                                    <div class="menu-badge">
                                      <div class="badge vd_bg-red">0</div>
                                    </div>
                                  </router-link>
                                </li>
                                <li class="line"></li>
                                <li>
                                  <router-link to="/signin">
                                    <div class="menu-icon"><i class=" fa fa-sign-out"></i></div>
                                    <div class="menu-text">Sign Out</div>
                                  </router-link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
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
      <!-- vd_primary-menu-wrapper -->
    </header>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      triggerDrop(event) {
        //let trig = event.currentTarget
        let trig = this.$refs.trig
        let targ = this.$refs.targ

        //let href = trig.getAttribute('href')
        trig.setAttribute('class', 'open')
        targ.setAttribute('style', 'display:block')

        let cl = trig.getAttribute('class')
        let st = targ.getAttribute('style')
        console.log(cl, st)
      }
    }
  }

</script>

<style>

</style>