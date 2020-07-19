<template>
  <div class="nav">
    <div>name:{{name}}</div>
    <div class="nav">
      <span class="login" @click="loginOut">login out</span>
      <img class="avatar" :src="avatar" alt srcset />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Navbar",
  data() {
    return {};
  },
  components: {},
  computed: {
    ...mapGetters(["name", "avatar"])
  },
  methods: {
    async loginOut() {
      await this.$store.dispatch("loginOut");
      this.$router.push(`/login`);
    }
  }
};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.login {
  margin-right: 50px;
}
.login:hover {
  color: blue;
  cursor: pointer;
  text-decoration: underline;
  user-select: none;
}
</style>