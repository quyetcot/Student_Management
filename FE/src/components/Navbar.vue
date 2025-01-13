<template>
  <v-app-bar color="" prominent>
    <v-toolbar-title>Xin chào</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-badge :content="80" class="pt-1">
      <v-btn icon="mdi-bell-outline" variant="text"></v-btn>
</v-badge>
   
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">
          <v-avatar
            image="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
          ></v-avatar>
         <span class="ml-2"> Nguyễn Văn A</span>
        </v-btn>
      </template>

      <v-list>
        <v-list-item :to="routePaths.STUDENT_PROFILE">
          <v-list-item-title>{{ $t("menu_user.profile") }}</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>{{ $t("menu_user.logout") }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script>
import routePaths from '@/router/student/routePaths';
export default {
  name: "Navbar",
  data(){
    return{
      routePaths:{
        STUDENT_PROFILE:routePaths.STUDENT_PROFILE
      }
    }
  }
};
</script>
