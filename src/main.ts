import { createApp } from 'vue'
import { Button, Col, Row, Tab, Tabs, Pagination,Search} from 'vant'
import App from './App.vue'
const app = createApp(App)

app.use(Button)
app.use(Col)
app.use(Row)
app.use(Tab)
app.use(Tabs)
app.use(Pagination)
app.use(Search)
app.mount('#app')
