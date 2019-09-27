import App from '@/App';
import Home from '@/modules/Home/page/Home';
import Login from '@/modules/Login/page/Login';

export default [
    {
        path: '/',
        component: App,
        key: 'app',
        routes: [
            {
                path: '/',
                component: Home,
                exact: true,
                key: 'home',
                loadData: Home.loadData,
            },
            {
                path: '/login',
                component: Login,
                exact: true,
                key: 'login',
                loadData: Login.loadData,
            },
        ]
    },
]