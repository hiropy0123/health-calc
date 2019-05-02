<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title
          primary-title
          class="headline"
        >
          運動強度の目安 %HHR法
        </v-card-title>
        <v-card-text>
          <calculator-hhr />
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import CalculatorHhr from '~/components/CalculatorHhr'

export default {
  components: {
    CalculatorHhr
  }
}
</script>
