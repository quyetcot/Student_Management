<template>
  <v-container height="87vh" class="bg-grey-lighten-2 rounded-xl">
    <v-card height="84vh" class="rounded-xl">
      <v-tabs v-model="tab">
        <v-tab value="one">{{
          $t("student_profile.general-information")
        }}</v-tab>
        <v-tab value="two">{{
          $t("student_profile.parent-information")
        }}</v-tab>
      </v-tabs>

      <v-card-text>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="one">
            <GeneralProfile :profile="profile"></GeneralProfile>
          </v-tabs-window-item>

          <v-tabs-window-item value="two">
            <GeneralProfile :profile="profile"></GeneralProfile>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="bg-primary rounded-lg">{{ $t("button.return") }} </v-btn>
        <v-btn class="bg-primary rounded-lg">{{ $t("button.edit") }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import GeneralProfile from "./components/GeneralProfile.vue";

export default {
  data: () => ({
    tab: null,
    profile: {
      full_name: "Phan Quyết",
      date_of_birth: "20-04-2004",
      student_code: "PH38394",
      phone_number: "0379924489",
      email: "quyetpvph38394@fpt.edu.vn",
    },
  }),
  components: {
    GeneralProfile,
  },
};
</script>
