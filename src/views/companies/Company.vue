<template>
  <div class="company">
    <v-dialog v-model="dialog" width="800">
      <v-btn slot="activator" light flat>{{company.company_name}}</v-btn>

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>{{company.company_name}}</v-card-title>
        <!-- v-for="represent in company.represents" v-bind:key="represent.id" -->
        <v-card-text>
          <div class="caption grey--text">公司介绍</div>
          {{company.description}}
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          <p class="caption grey--text">采购人员</p>
          <div v-for="represent in company.represents" v-bind:key="represent.id">
            <v-layout row wrap justify-space-around>
              <v-flex xs12 md3>
                <div>{{represent.name}}</div>
              </v-flex>
              <v-flex xs12 md3>
                <div>{{represent.phone_number}}</div>
              </v-flex>
              <v-flex xs12 md3>
                <div>{{represent.land_phone}}</div>
              </v-flex>
              <v-flex xs12 md3>
                <div>{{represent.email}}</div>
              </v-flex>
            </v-layout>
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          <p class="caption grey--text">历史订单</p>
          <div v-for="quotation in company.quotations" v-bind:key="quotation.id">
            <v-layout row wrap justify-space-around>
              <v-flex xs12 md3>
                <div>{{quotation.created_at}}</div>
              </v-flex>
              <v-flex xs12 md3>
                <div>{{quotation.reminder}}</div>
              </v-flex>
              <v-flex xs12 md3>
                <div v-if="quotation.accept === 1">订单已确认</div>
                <div v-else>订单未确认</div>
              </v-flex>
              <v-flex xs12 md3>
                <div>{{quotation.updated_at}}</div>
              </v-flex>
            </v-layout>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="dialog = false">确定</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "Company",
  props: ["company"],
  data() {
    return {
      dialog: false
    };
  }
};
</script>

