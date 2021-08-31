import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import Contacts from '../views/Contacts.vue'
// Nested routes

const routes = [
  {
    path : "/",
    component: Home,
  },
  {
    path: "/contacts",
    component: Contacts
  }
  // {  DOESENT WORK
  //   path : "*",
  //   redirect : "/"   // or direct it to an error page
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
