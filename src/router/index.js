import { createRouter, createWebHistory } from 'vue-router';

import DefaultLayout from '@/layouts/default/Default.vue';
import Home from '@/views/Home.vue';
import Email from '@/views/Media.vue';
import Chat from '@/views/Chat.vue';
import Calendar from '@/views/Calendar.vue';



const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: 'media',
        name: 'Media',
        component: Email,
      },
      {
        path: 'chat',
        name: 'Chat',
        component: Chat,
      },
      {
        path: 'calendar',
        name: 'Calendar',
        component: Calendar,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
