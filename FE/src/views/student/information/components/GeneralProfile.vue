<template>
  <v-row >
    <v-col cols="2">
      <div class="text-center">
        <v-avatar color="grey" rounded="0" size="150">
          <v-img
            src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
            cover
          ></v-img>
        </v-avatar>
        <p>Ảnh đại diện</p>
      </div>
    </v-col>
    <v-col>
      <v-card color="blue-lighten-3" class="rounded-xl">
        <v-card-item>
          <div>
            <label for="" class="text-h6">{{ $t('student_profile.full_name') }}</label>
            <v-text-field
              v-model="profile.full_name"
              variant="solo"
              readonly
            ></v-text-field>
          </div>
          <div>
            <label for="" class="text-h6">{{ $t('student_profile.date_of_birth') }}</label>
            <v-text-field
              v-model="profile.date_of_birth"
              variant="solo"
              readonly
            ></v-text-field>
          </div>
          <div>
            <label for="" class="text-h6">{{ $t('student_profile.date_of_birth') }}</label>
            <v-text-field
              v-model="profile.date_of_birth"
              variant="solo"
              readonly
            ></v-text-field>
          </div>
          <div>
            <label for="" class="text-h6">{{ $t('student_profile.phone_number') }}</label>
            <v-text-field
              v-model="profile.phone_number"
              variant="solo"
              readonly
            ></v-text-field>
          </div>
          <div>
            <label for="" class="text-h6">{{ $t('student_profile.email') }}</label>
            <v-text-field
              v-model="profile.email"
              variant="solo"
              readonly
            ></v-text-field>
          </div>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
  }),
  props:{
    profile:{

    }
  }
};
</script>
