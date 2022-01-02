<template>
   <v-row class="px-3 pt-4">
       <v-col  sm=12 md=6 lg=4 :key="d" v-for="d in departments">
        
            <v-card link :to="d">
                <v-card-title>{{d}}</v-card-title>
                <v-card-text>{{d}}</v-card-text>
           </v-card>
        
          
       </v-col>
   </v-row>
   
</template>

<script>



export default {
    name:'Home',
    data:()=>{
        return {
            departments:['DoctorDepartment','PatientDepartment','NurseDepartment','VaccineDepartment']
        }
    }
}
</script>

