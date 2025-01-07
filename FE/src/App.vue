<template>
  <v-app>
    <v-main>
      <v-row no-gutters>
        <Sidebar></Sidebar>
        <v-col>
          <Navbar></Navbar>
          <v-container>
           <RouterView></RouterView>
          </v-container>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  components: {
    Sidebar,
    Navbar,
  },
};
</script>
