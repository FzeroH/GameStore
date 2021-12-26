import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faSearch, faCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faSearch, faCircle);

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(router)
    .mount('#app')
