<template>
  <v-container class="pa-0">
    <v-toolbar class="nav-secondary nav-secondary-main">
      <v-btn
          small
          color="blue lighten-2"
          dark
          to="/client/new">
        New Client
      </v-btn>
    </v-toolbar>
    <v-card class="pa-3">
      <v-layout wrap>
        <v-flex xs12 v-if="showClientList">
          <span class="headline text-xs-left">Clients</span>
          <table class="client-list">
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>DoB</th>
              <th>Social status</th>
            </tr>
            <tr v-for="(client, i) of clients" :key="client.id" :class="[ i%2 ? 'striped' : '']"
                @click="$router.replace(`/client/${client.id}`)">
              <td>{{getClientName(client)}}</td>
              <td>{{getClientGender(client.gender)}}</td>
              <td>{{client.dob}}</td>
              <td>{{client.social_status}}</td>
            </tr>
          </table>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>

  export default {
    data() {
      return {
        showClientList: true,
        showClientInfo: false,
        activeClient: null,
        active: null,
        socialStatusList: ['Single', 'Married'],
        name: '',
        gender: null,
        lastName: '',
        dob: ''
      };
    },
    computed: {
      clients: {
        get() {
          return this.$store.state.clientsList.clients;
        }
      }
    },
    methods: {
      getClientName(client) {
        return client.first_name + ' ' + client.last_name;
      },
      getClientGender(gender) {
        return gender.charAt(0);
      }
    }
  };
</script>

<style lang="scss">
  .client-list {
    border: 1px solid #bfbfbf;
    width: 100%;
    text-align: left;
    border-collapse: collapse;
    border-radius: 2px;

    td, th {
      border-right: 1px solid #bfbfbf;
      padding: 5px;
    }

    .striped {
      background: #eee;
    }

    th {
      background: #ddd;
      padding: 0 5px;
    }
  }
</style>
