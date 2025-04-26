import { createApp } from 'vue'
import App from './App.vue'
import Maska from 'maska'
import moment from 'moment'

const app = createApp(App) //Criamos uma váriavel para configurar a aplicação
app.use(Maska) //Utilizamos o plugin que queremos e adicionamos antes de monta a aplicação. npm install maska@v1.5.0
//Maska é uma lib do tipo plugin para usar pelo próprio Vue. Por isso usamos 'use' do Vue.

//Recomendável para uma criação de uma propriedade global, utilização de '$'
app.config.globalProperties.$momentGlobal = moment //Criação de uma propriedade global para a aplicação inteira do Vue.js.
//Moment não é um plugin e não foi criado especificamente para o Vue. Por isso não usamos 'use' utilizamos uma abordagem diferente de implementação
//Moment foi criado para usar com Js.

app.config.globalProperties.$momentGlobal.locale('pt-br') //Aplicando o pt-br para todos os componentes que usarem '$momentGlobal', para alterar o idioma para o português.


app.mount('#app') //Depois, montamos a aplicação