<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="rail"
    permanent
    @click="rail = false"
  >
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
      title="John Leider"
      nav
    >
      <template v-slot:append>
        <v-btn
          icon="mdi-chevron-left"
          variant="text"
          @click.stop="rail = !rail"
        ></v-btn>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item.value"
        color="primary"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="$t(item.title)"></v-list-item-title>
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
      items: [
        {
          icon: "mdi-home-city",
          title: "menu.student-information",
          value: "student-information",
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
