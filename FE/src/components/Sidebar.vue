<template>
  <v-navigation-drawer permanent>
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
        :to="item.link"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title
          class="text-uppercase"
          v-text="$t(item.title)"
        ></v-list-item-title>
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
          icon: "mdi-calendar",
          title: "menu.schedule-student",
          value: "schedule",
          link: "/student/schedule",
        },
        {
          icon: "mdi-home-city",
          title: "menu.academic-performance",
          value: "academic-performance",
          link: "",
        },
        {
          icon: "mdi-calendar",
          title: "menu.student-information",
          value: "student-information",
          link: "/student/student-profile",
        },
      ],
    };
  },
};
</script>
