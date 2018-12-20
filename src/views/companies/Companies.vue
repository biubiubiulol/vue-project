<template>
  <div>
    <h1 class="grey--text subheading">新增公司</h1>
    <v-container fluid>
      <v-card flat class="pa-3" v-for="company in companies" v-bind:key="company.id">
        <v-layout row wrap justify-space-around>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">公司名称</div>
            <div>
              <Company v-bind:company="company"></Company>
            </div>
          </v-flex>
          <v-flex xs12 md6>
            <div class="caption grey--text">简介</div>
            <div>{{company.description}}</div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import Company from "@/views/companies/Company.vue";
export default {
  name: "Companies",
  
  components: { Company },
  data() {
    return {
      companies: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.axios.get("http://127.0.0.1/api/companies").then(response => {
        this.companies = response.data.data;
      });
    }
  }
};
</script>

