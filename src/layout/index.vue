<template>
  <div class="app-warpper">
    <Sidebar class="sidebar-container" />
    <div class="main-container">
      <Navbar class="navbar-container" />
      <AppMain />
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from "./components";
export default {
  name: "Layout",
  components: {
    Navbar,
    Sidebar,
    AppMain
  }
};
</script>
<style scoped>
.app-warpper {
  height: 100%;
}
.sidebar-container {
  width: 210px !important;
  height: 100%;
  position: fixed;
  background-color: #304156;
}
.main-container {
  height: 100%;
  margin-left: 210px;
}
.navbar-container {
  height: 50px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
</style>