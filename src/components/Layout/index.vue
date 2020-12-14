<template>
  <div>
    <router-link :to="{ path: 'home'}">home</router-link>
    <router-link :to="{ path: 'profile'}">profile</router-link>
    <router-view></router-view>
  </div>
</template>