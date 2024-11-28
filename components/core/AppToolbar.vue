<template>
  <div>
    <v-app-bar :elevation="0" fixed class="mt-0 px-2 toolbar-class mx-auto mt-4" rounded="xl" color="#FFDFE8">
      <v-app-bar-nav-icon class="d-md-none d-lg-none d-sm-flex d-flex" @click="drawerAction"></v-app-bar-nav-icon>
      <NuxtLink to="/" class="px-2" style="text-decoration: none; color: black">
        <div class="d-flex">
          <v-img width="140" alt="logo" src="/assets/img/manas-logo.png" class="mr-2"></v-img>
          <!-- <v-chip style="display: inline; background-color: white" variant="outlined" color="black" size="small"
            class="align-center pt-1">IN</v-chip> -->
        </div>
      </NuxtLink>

      <v-spacer></v-spacer>
      <div class="mx-4 d-none d-sm-none d-md-flex d-lg-flex">
        <template v-for="(item, index) in navbarData" :key="index">
          <v-btn rounded size="small" style="text-transform: capitalize" :to="item.path" class="mx-1"
            v-if="item.visible">{{ item.name }}</v-btn>
        </template>
      </div>

      <ClientOnly>

        <v-btn rounded href="" class="d-md-flex d-lg-flex d-sm-flex d-none mr-3" target="_blank" color="#5D57A1" style="
          border: 1.5px solid #1e1e1e;
          color: white;
          font-size: 12px;
          text-transform: capitalize;
          font-weight: 600;
        " variant="flat">Resume</v-btn>
      </ClientOnly>
    </v-app-bar>
    <div class="w-100">
      <div
        style="max-width:1000px; height: 72px; display: flex; align-items: center; border-radius: 0px 0px 24px 24px; margin-left: auto; margin-right:auto; left:0; right:0; background-color: #AD8DC5; color: white; padding: 32px 12px 12px 12px; position: fixed; top: 60px;z-index: 1005;">
        <p class="mr-3 ml-1" style="width: fit-content; display:flex; column-gap: 6px; align-items: center;">
          <b>Announcements</b> <v-icon size="18px">mdi-bullhorn-variant-outline</v-icon>
        </p>
        <NuxtMarquee>
          <div style="display: flex; align-items: center; color: #000" v-for="announcement in announcements">
            <p class="mx-3">{{ announcement.text }}<a
                style="margin: 0px 8px; color: #FFF; font-weight: 600; text-decoration: none; text-underline-offset: 5px; text-decoration-thickness: 1px;"
                v-if="announcement.action != undefined" :href="announcement.action.link">{{ announcement.action.text
                }}</a>
            </p>
            <p>•</p>
          </div>
        </NuxtMarquee>
      </div>
    </div>
  </div>
</template>


<script setup>
import { useDisplay } from "vuetify";

const { mainData, navbarData, announcements } = useJSONData();
const sidebar = useSideBar();
const { width, mobile } = useDisplay();
const screenWidth = ref(width);

const drawerAction = () => {
  sidebar.value = !sidebar.value;
};
</script>

<style scoped>
.toolbar-class {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  margin-bottom: 80px;
  height: 64px;
  /* Set the height of the toolbar */
}

/* Mobile breakpoint */
@media (max-width: 700px) {
  .toolbar-class {
    max-width: 100% !important;
    margin-left: auto !important;
    margin-right: auto !important;
    margin-top: 0 !important;
    border-radius: 0 !important;
  }
}

/* Tablet and larger screens */
@media (min-width: 700px) {
  .toolbar-class {
    max-width: 1000px !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
}
</style>
