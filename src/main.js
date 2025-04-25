import { createApp } from 'vue'
import App from './App.vue'
import Maska from 'maska'

const app = createApp(App) //Criamos uma váriavel para configurar a aplicação
app.use(Maska) //Utilizamos o plugin que queremos e adicionamos antes de monta a aplicação. npm install maska@v1.5.0
app.mount('#app') //Depois, montamos a aplicação