<template>
  <v-app >
    <v-navigation-drawer app v-model="sideNav" temporary>
    <v-list>
      <v-list-tile v-for="item in menuItems" :key="item.title" :to='item.link'>
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
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Meetup Now!</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-md-and-down">
        <!-- :to attribute added , now all link active -->
        <v-btn flat  v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-icon left> {{item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

    </v-toolbar>


    <main class="mt-5">
      <router-view class="mt-5"></router-view>
    </main>
    <v-spacer></v-spacer>
    <v-footer app class="pa-3 purple center" dark>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false,
      // Add url or name . I added chose name
      menuItems: [
        { icon: 'supervisor_account', title: 'View Meetups', name: 'Meetups', link: '/meetups' },
        { icon: 'room', title: 'Organize Meetup', name: 'CreateMeetup', link: 'meetup/new' },
        { icon: 'person', title: 'Profile', name: 'Profile', link: '/profile' },
        { icon: 'face', title: 'Sign up', name: 'Signup', link: 'signup' },
        { icon: 'lock_open', title: 'Sign in', name: 'Signin', link: 'signin' }
      ]
    }
  }
}
</script>
