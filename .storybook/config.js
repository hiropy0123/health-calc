import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.css";
import { configure, addDecorator } from '@storybook/vue';

Vue.use(Vuetify, {
  iconfont: "md"
});

addDecorator(() => ({
  template: "<v-app><story/></v-app>"
}));

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
