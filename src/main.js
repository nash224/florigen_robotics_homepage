import { createApp } from 'vue'
import App from './App.vue'

// stores
import Vuex from 'vuex';
import MainStore from '@/store';

import 'vue-fullpage.js/dist/style.css'


const app = createApp(App);

const store = new Vuex.Store({
	modules: {
	  main: MainStore
	}
});

app.use(store);

app.mount('#app');
