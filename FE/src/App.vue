<template>
  <v-app>
    <v-main>
      <v-row no-gutters>
        <v-col>
          <Sidebar />
        </v-col>
        <v-col>
          <Navbar />
          <RouterView></RouterView>
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
