<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="auto">
        <el-menu :collapse="isCollapse" class="el-menu-vertical-demo">
          <el-menu-item index="1">
            <el-icon>
              <el-icon-menu />
            </el-icon>
            <span>导航1</span>
          </el-menu-item>
          <el-menu-item index="2">
            <el-icon>
              <el-icon-menu />
            </el-icon>
            <span>导航2</span>
          </el-menu-item>
          <el-menu-item index="3">
            <el-icon>
              <el-icon-menu />
            </el-icon>
            <span>导航3</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <span @click="toggle">
            <el-icon-expand v-if="isCollapse"></el-icon-expand>
            <el-icon-fold v-else></el-icon-fold>
          </span>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    let isCollapse = ref(true)
    let toggle = () => {
      isCollapse.value = !isCollapse.value
      console.log(isCollapse)
    }
    return {
      isCollapse,
      toggle
    }
  }
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>