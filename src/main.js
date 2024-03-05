import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'; // Chemin relatif vers le fichier de configuration de route



const app = createApp(App);
app.use(router);

//createApp(App).mount('#app')

app.mount('#app');
