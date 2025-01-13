<template>
  <v-navigation-drawer
    permanent
    
  >
    <v-list-item
      prepend-avatar="https://i.pinimg.com/736x/9f/62/88/9f62881241737d130bb6b32f90e0886c.jpg"
      title="Student Management"
      height="7vh"
    >
      
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        v-for="(item, i) in menuListStudent"
        :key="i"
        :value="item.value"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title  class="text-uppercase" v-text="$t(item.title)"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: "Sidebar",
  data() {
    return {
      drawer: true,
      rail: true,
      menuListStudent: [
        {
          icon: "mdi-school",
          title: "menu.list-course",
          value: "list-course",
        },
        {
          icon: "mdi-plus-box-multiple-outline",
          title: "menu.register-course",
          value: "register-course",
        },
        {
          icon: "mdi-home-city",
          title: "menu.academic-performance",
          value: "academic-performance",
        },
      ],
    };
  },
};
</script>
