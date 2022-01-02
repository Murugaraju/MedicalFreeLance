<template>
    <fragment>
      <v-card>
     <v-navigation-drawer
      v-model="drawer"
      app
      
      id="navigation-drawer"
    >
    <v-list-item :style="{height:'64px'}">
        <v-list-item-content>
          <v-list-item-title class="text-h5">
            Departments
          </v-list-item-title>
        
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list >
        <v-list-item  to='DoctorDepartment'>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Doctor department</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to='PatientDepartment'>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Patient department</v-list-item-title>
          </v-list-item-content>
        </v-list-item>  
        <v-list-item to='NurseDepartment'>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Nurse department</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to='VaccineDepartment'>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Vaccine department</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
       
      </v-list>
    </v-navigation-drawer>
    </v-card>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn fab text  @click="navigateToHome">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-toolbar-title>Hospital Name</v-toolbar-title>
      <v-spacer></v-spacer>
     <div>
      <v-icon>mdi-account</v-icon>
      <span>Name (Admin)</span>
     </div>
     <v-btn fab text>
        <v-icon>mdi-logout</v-icon>
     </v-btn>
      
      
    </v-app-bar>

    </fragment>
</template>
<script>
export default {
    name:"Navbar",
    props: {
      source: String,
    },
    data:()=>{ return{
          drawer: null,
    }
    },
    methods:{
      navigateToHome(){
        console.log("came",this.$router)
        this.$router.push({name:"Home"});
      
      },
    }
    
}
</script>

<style scoped>
  #navigation-drawer{
    right-margin:0
  }
</style>