<template>
  <v-app>
    <v-toolbar class="main-nav">
      <div style="padding-left: 278px;">
        <v-btn icon class="btn-toggle-view">
          <v-icon color="grey darken-3" style="font-size: 48px;">view_module</v-icon>
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <div>
        <v-layout
            row
            align-center
            text-xs-center>
          <v-flex>
            <v-layout row>
              <v-flex xs12>
                <div
                    class="title"
                    style="word-wrap: break-word;">John Galt
                </div>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12>
                <div
                    class="subheading"
                    style="word-wrap: break-word;">
                  <router-link to="/logout">Log out</router-link>
                </div>
                <slot/>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex
              style="max-width: 48px;"
              mr-2>
            <v-btn flat icon class="icon-border" color="grey darken-1">
              <v-icon dark>person</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </div>
    </v-toolbar>
    <v-navigation-drawer fixed
                         clipped
                         app
                         disable-route-watcher
                         v-model="drawer"
                         mobile-break-point="960"
                         :class="{
        'mt64': $vuetify.breakpoint.mdAndUp,
        'mt48': $vuetify.breakpoint.smAndDown }">
      <v-toolbar class="main-nav">
        <v-toolbar-title class="headline text-uppercase">
          <v-btn flat icon>
            <v-icon dark>menu</v-icon>
          </v-btn>
          <span>FDFC</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-toolbar class="nav-secondary">
        <v-toolbar-title class="title">
          <span>Clients</span>
        </v-toolbar-title>
      </v-toolbar>
      <v-list class="pa-0 nav-subtitle">
        <v-list-group
            no-action v-model="activeMenu">
          <v-list-tile slot="activator">
            <v-list-tile-title>Clients</v-list-tile-title>
          </v-list-tile>
          <v-list-tile to="/process">
            <v-list-tile-content>
              <v-list-tile-title>In Process</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="/my">
            <v-list-tile-content>
              <v-list-tile-title>My Clients</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile value to="/">
            <v-list-tile-content>
              <v-list-tile-title>All Clients</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer></v-footer>

  </v-app>
</template>

<script>
  import ClientsList from './components/ClientsList.vue';

  export default {
    name: 'App',
    components: {
      ClientsList,
    },
    data() {
      return {
        drawer: true,
        activeMenu: true
      };
    }
  };
</script>

<style lang="scss">
  .icon-border {
    border: 1px solid #a2a2a2;
  }

  .main-nav,
  .nav-secondary {
    padding-left: 0 !important;
    border-bottom: 1px solid #d9d9d9;
    box-shadow: none !important;
  }

  .v-navigation-drawer {
    margin-top: 0 !important;
  }

  .v-toolbar--fixed {
    z-index: 10 !important;
  }

  .nav-secondary {
    border-bottom: 0;

    .v-toolbar__content {
      height: 40px !important;
      padding: 16px !important;
    }
  }

  .nav-secondary-main {
    margin-top: 0 !important;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid #d9d9d9;
  }

  .v-text-field {
    max-width: 350px !important;
  }

  .btn-toggle-view {
    width: 50px;
    height: 50px;
  }
</style>
