<template>
  <v-container class="pa-0">
    <v-toolbar class="nav-secondary nav-secondary-main">
      <div>
        <v-layout
            row
            text-xs-left>
          <v-flex
              mr-2>
            <div>
              <v-btn small
                     color="blue lighten-2"
                     dark
                     @click="saveClientData"
                     v-if="!isNew">Edit
              </v-btn>
            </div>
          </v-flex>
          <v-flex
              mr-2>
            <div>
              <v-btn
                  right
                  small
                  to="/">
                Close
              </v-btn>
            </div>
          </v-flex>
        </v-layout>
      </div>
    </v-toolbar>
    <v-card class="pa-3">
      <v-layout
          wrap>
        <v-flex xs12>
          <div class="headline text-xs-left">{{getClientName(client)}}</div>
          <div class="subheading font-weight-light" color="grey lighten-2" v-if="!isNew">
            Date of Birth: {{client.dob}}
          </div>
          <v-tabs
              v-model="active"
              color="grey lighten-2"
              slider-color="grey"
          >
            <v-tab ripple>
              Client
            </v-tab>
            <v-tab ripple>
              Personal Data
            </v-tab>
            <v-tab-item>
              <v-card class="pa-1">
                <v-card-text class="title pb-0">Personal Information</v-card-text>
                <v-form
                    ref="form"
                    lazy-validation
                    class="pa-3"
                >
                  <v-text-field
                      v-model="client.first_name"
                      :counter="10"
                      label="First Name"
                      required
                  ></v-text-field>

                  <v-text-field
                      v-model="client.last_name"
                      :counter="10"
                      label="Last Name"
                      required
                  ></v-text-field>

                  <v-radio-group v-model="client.gender" row>
                    <v-radio
                        label="Male"
                        value="Male"
                    ></v-radio>
                    <v-radio
                        label="Female"
                        value="Female"
                    ></v-radio>
                  </v-radio-group>

                  <v-flex xs12 sm6 md4>
                    <v-menu
                        ref="menu"
                        :close-on-content-click="false"
                        v-model="menu"
                        :nudge-right="40"
                        :return-value.sync="client.dob"
                        lazy
                        transition="scale-transition"
                        offset-y
                        full-width
                        min-width="290px"
                    >
                      <v-text-field
                          slot="activator"
                          v-model="client.dob"
                          label="Date of Birth"
                          prepend-icon="event"
                          readonly
                      ></v-text-field>
                      <v-date-picker v-model="client.dob" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                        <v-btn flat color="primary" @click="$refs.menu.save(client.dob)">OK</v-btn>
                      </v-date-picker>
                    </v-menu>
                  </v-flex>

                </v-form>
              </v-card>

            </v-tab-item>
            <v-tab-item>
              <v-card pa-1>
                <v-card-text class="title pb-0">Personal Data</v-card-text>
                <v-form
                    ref="form"
                    lazy-validation
                    class="pa-3"
                >
                  <v-select v-model="client.social_status"
                            :items="socialStatusList"
                            label="Social status"
                            hide-details>
                  </v-select>
                </v-form>
              </v-card>
            </v-tab-item>
          </v-tabs>
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
        client: {
          first_name: '',
          gender: null,
          last_name: '',
          dob: '',
          social_status: ''
        },
        menu: false
      };
    },
    created() {
      if (!this.isNew && this.$route.params.id) {
        const client = this.$store.state.clientsList.clients.find((client) => client.id == this.$route.params.id);
        this.client = Object.assign(client);
      }
    },
    computed: {
      isNew() {
        return this.$route.params.id === 'new';
      }
    },
    methods: {
      getClientName(client) {
        if (client) {
          return client.first_name + ' ' + client.last_name;
        }
      },
      getClientGender(gender) {
        return gender.charAt(0);
      },
      saveClientData() {
        this.$store.dispatch('updateUser', this.client);
        this.$router.replace({path: '/'})
      }
    }
  };
</script>