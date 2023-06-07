
import App from './App.vue'
import '@/assets/styles/root.scss';
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import VueApexCharts from "vue3-apexcharts";

const app = createApp(App)
registerPlugins(app)

app.use(VueApexCharts);
app.mount('#app')
