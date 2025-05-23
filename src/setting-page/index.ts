//@ts-ignore
import ModuleComponent from './module.vue';

export default {
  id: 'ext-oidc-provider',
  name: 'OIDC Provider',
  icon: 'fingerprint',
  routes: [
    {
      path: '',
      redirect: '/ext-oidc-provider/client-management' // Add this redirect
    },
    {
      path: ':page',
      component: ModuleComponent,
      props: (route) => ({
        page: route.params.page || 'client-management'
      })
    }
  ],
}

