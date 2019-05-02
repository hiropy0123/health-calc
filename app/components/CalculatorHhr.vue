<template>
  <v-form v-model="valid">
    <v-container>
      <v-layout>
        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="age"
            :rules="ageRules"
            label="あなたの年齢"
            required
          />
        </v-flex>

        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="moderateHR"
            :rules="moderateRules"
            label="安静時心拍数"
            required
          />
        </v-flex>

        <v-flex
          xs12
          md4
        >
          <v-layout>
            <v-flex md10>
              <v-slider
                v-model="intensity"
                label="運動強度"
                :max="100"
                :min="0"
              />
            </v-flex>
            <v-flex md2>
              <v-text-field
                v-model="intensity"
                class="text-md-right"
                hide-details
                single-line
                type="number"
              />
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-card>
        <v-card-title>
          <h3>{{ targetHR }}</h3>
        </v-card-title>
      </v-card>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    age: '',
    ageRules: [
      v => !!v || '年齢を入力してください',
      v => /^(\d{1,2})$/.test(v) || '半角英数字で入力（0-99）'
    ],
    moderateHR: '',
    moderateRules: [
      v => !!v || '安静時の心拍数を入力してください',
      v => /^([3-9]\d)$|^(1\d{2})$/.test(v) || '半角英数字で入力（30-199）'
    ],
    intensity: 50,
    // email: '',
    // emailRules: [
    //   v => !!v || 'E-mail is required',
    //   v => /.+@.+/.test(v) || 'E-mail must be valid'
    // ]
  }),
  computed: {
    targetHR() {
      let hr;
      hr = (220 - Number(this.age) - Number(this.moderateHR)) * this.intensity * 0.01 + Number(this.moderateHR)
      return hr
    }
  },
}
</script>
