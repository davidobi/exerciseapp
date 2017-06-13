<template>
  <div id="sidebar">
    <div class="vd_navbar vd_nav-width vd_navbar-tabs-menu vd_navbar-left  ">

      <div class="navbar-menu clearfix">
        <div class="vd_panel-menu hidden-xs">
          <span data-original-title="Expand All" data-toggle="tooltip" data-placement="bottom" data-action="expand-all" class="menu"
            data-intro="<strong>Expand Button</strong><br/>To expand all menu on left navigation menu." data-step=4>
                              <i class="fa fa-sort-amount-asc"></i>
                              </span>
        </div>
        <h3 class="menu-title hide-nav-medium hide-nav-small">Logs</h3>
        <div class="vd_menu">
          <ul>
            <li>
                <a href="javascript:void(0);" ref="trig" @click="triggerDrop($event)">
                  <span class="menu-icon"><i class="fa fa-dashboard"></i></span>
                  <span class="menu-text">Dashboard</span>
                  <span class="menu-badge"><span class="badge vd_bg-black-30"><i class="fa fa-angle-down"></i></span></span>
                </a>
                <div class="child-menu" ref="targ">
                  <ul>
                    <li>
                      <router-link to="/dashboard">
                        <span class="menu-text">Dashboard</span>
                      </router-link>
                    </li>
                  </ul>
                </div>
            </li>
            <li>
              <router-link to="/exercise">
                <span class="menu-icon"><i class="fa fa-child"></i></span>
                <span class="menu-text">Exercise</span>
                <span class="menu-badge"><span class="badge vd_bg-red">12</span></span>
              </router-link>
            </li>
          </ul>
          <!-- Head menu search form ends -->
        </div>
      </div>
      <div class="navbar-spacing clearfix">
      </div>
      <div class="vd_menu vd_navbar-bottom-widget">
        <ul>
          <li>
            <router-link to="/signin">
              <span class="menu-icon"><i class="fa fa-sign-out"></i></span>
              <span class="menu-text">Logout</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

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