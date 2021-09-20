export default {
    name: 'lobby',
    component: () => import(/* webpackChunkName: "lobby" */ '../layouts/LobbyLayout.vue')
}