<template>
    <div class="px-3 pt-4">
    <v-row>
        <v-col>
            <v-card>
            
          <v-card-actions>
              <h3>Doctors</h3>
              <v-spacer></v-spacer>
               <v-btn fab>
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
          </v-card-actions>
        </v-card>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Calories
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
        </v-col>
    </v-row>
        
       

    
    </div>
</template>

<script>
export default {
    name:'DoctorDepartment',
    data:()=>{
        return {
            desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          }
          ]
        }
    }

}
</script>