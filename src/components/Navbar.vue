<template>
  <div>
    <v-toolbar flat app color="blue" height="40">
      <v-toolbar-side-icon class="white--text" @click="drawer =! drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <h1 class="white--text">久通销售系统</h1>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="white--text">你好，用户名</span>
      <v-btn flat class="white--text">
        <v-icon left>exit_to_app</v-icon>注销
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer class="white lighten-2"  v-model="drawer" app temporary>
      <v-list>
        <v-list-tile v-for="item in items" :key="item.title" router :to="item.url">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "主页", icon: "dashboard", url: "/" },
        { title: "生成报价单", icon: "question_answer", url: "/quotations" },
        { title: "生成合同", icon: "question_answer", url: "/contracts" },
        { title: "新增公司", icon: "perm_contact_calendar", url: "/companies" },
        { title: "查询历史报价", icon: "history", url: "/histories" }
      ]
    };
  }
};
</script>
