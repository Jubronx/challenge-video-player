<template>
  <div class="container_player">
    <div class="width_player" v-if="contentSelected">
      <h2>{{ contentSelected.title }}</h2>
      <div class="content_player">
        <video class="video" v-if="contentSelected.type === 'video'" controls :src="contentSelected.url"></video>
        <img class="image" v-if="contentSelected.type === 'image'" :src="contentSelected.url" :alt="contentSelected.title" />
        <iframe class="pdf" v-if="contentSelected.type ==='pdf' " :src="contentSelected.url" frameborder="0"></iframe>
        <a class="link" v-if="contentSelected.type === 'link'" :href="contentSelected.url" target="_blank">{{ contentSelected.description }}</a>
      </div>
      <div class="description_and_likes">
        <div class="description" v-if="contentSelected.type !== 'link'">{{ contentSelected.description }}</div>
        <div class="likes">
          <PhThumbsUp :size="26" />
          {{ contentSelected.total_likes }}
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./ContentPlayer.css"></style>

<script lang="ts" setup>
  import type { Content } from '~/types/Content'
  import { PhThumbsUp } from '@phosphor-icons/vue';
  
  defineProps<{contentSelected: Content}>()
</script>