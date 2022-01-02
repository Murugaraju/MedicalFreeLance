import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from './components/main/Main'


Vue.use(VueRouter)
export const router =  new VueRouter({
     
      linkExactActiveClass: 'active',
      routes: [    
        {path:'/',redirect:'/Home'},
        {
          path: '/',
          name: 'main',
          component: Main,
          children:[
              {
                path:'Home',
                name:'Home',
                component: () => import('./components/main/Home'),
                meta: { title: 'Home' },
            
              },
              {
                path:'DoctorDepartment',
                component: () => import('./components/main/doctorDepartment/DoctorDepartment'),
                meta: { title: 'DoctorDepartment' }
              },
              {
                path:'PatientDepartment',
                component: () => import('./components/main/patientDepartment/PatientDepartment'),
                meta: { title: 'PatientDepartment' }
              },
              {
                path:'NurseDepartment',
                component: () => import('./components/main/nurseDepartment/NurseDepartment'),
                meta: { title: 'NurseDepartment' }
              },
              {
                path:'VaccineDepartment',
                component: () => import('./components/main/vaccineDepartment/VaccineDepartment'),
                meta: { title: 'VaccineDepartment' }
              }
             
          ]
          
        },
        
        // otherwise redirect to main
        { path: '*', redirect: '/' }
      ]
    })