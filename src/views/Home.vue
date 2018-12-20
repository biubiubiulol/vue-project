<template>
  <div class="home">
    <h1 class="grey--text subheading">系统主页</h1>
    <v-container fluid>
      <v-layout row wrap justify-space-around>
        <v-flex xs12 md5>
          <v-card flat>
            <v-card-title primary-title>
              <h3>订单数量统计</h3>
            </v-card-title>
            <BarChart></BarChart>
          </v-card>
        </v-flex>
        <v-flex xs12 md5>
          <v-card flat>
            <v-card-title primary-title>
              <h3>应收账款统计</h3>
            </v-card-title>
            <BarChart></BarChart>
          </v-card>
        </v-flex>
       
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import BarChart from "@/components/chart/BarChart.vue";
export default {
  
  components: {
    BarChart
  },
  data() {
    return {};
  }
};
</script>
