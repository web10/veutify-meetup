<template>
  <v-app >
    <v-navigation-drawer app v-model="sideNav">
    <v-list>
      <v-list-tile v-for="item in menuItems" :key="item.title">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          {{ item.title }}
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    </v-navigation-drawer>
    <v-toolbar app class="purple darken-1" dark>
      <v-toolbar-side-icon
        @click.native.stop="sideNav = !sideNav" class="hidden-md-and-up">
      </v-toolbar-side-icon>
      <v-toolbar-title>Meetup Now!</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-md-and-down">
        <v-btn flat  v-for="item in menuItems" :key="item.title">
          <v-icon left> {{item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

    </v-toolbar>


    <main>
      <router-view></router-view>
    </main>
    <v-spacer></v-spacer>
    <v-footer app class="pa-3, purple" dark>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false,
      menuItems: [
        {icon: 'supervisor_account', title: 'View Meetups'},
        {icon: 'room', title: 'Organize Meetup'},
        {icon: 'person', title: 'Profile'},
        {icon: 'face', title: 'Sign up'},
        {icon: 'lock_open', title: 'Sign in'}
      ]
    }
  }
}
</script>
