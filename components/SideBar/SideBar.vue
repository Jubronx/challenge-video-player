<template>
  <div class="container_player_home" >
    <ContentPlayer v-if="content" :contentSelected="content"></ContentPlayer>
  </div>
  <div class="container_side_bar">
    <div class="progress_bar">
      <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" style="--value: 67"></div>
    </div>
    <ul class="side_bar_links">
      <li v-for="content in contentList" :class="{ selected: selectedButton === content.id }" :key="content.id" @click="fetchContentById(content.id); selectedButton = content.id" class="links" to="">
        {{content.title}}
      </li>
    </ul>
  </div>
</template>
<style src="./SideBar.css" lang="css"></style>
<script lang="ts" setup>
import type { Content } from '~/types/Content'
import ContentPlayer from '../ContentPlayer/ContentPlayer.vue'

// Lista de conteúdos a ser exibida na Sidebar
const contentList = ref([
{ id: '4372ebd1-2ee8-4501-9ed5-549df46d0eb0', title: 'Introdução à Cultura Tech' },
{ id: '26a42e72-cc93-44b3-acae-01537a36322b', title: 'Ambiente de Trabalho Moderno' },
{ id: '7acff1c5-4c43-4923-a323-d22a12573041', title: 'Guia de Boas Práticas' },
{ id: '3a5a94aa-17da-4e9a-b493-fe7e81294631', title: 'Manual de Arquitetura de Software' },
{ id: '6969d6c7-40ea-4a3c-b635-d6546b971304', title: 'Plataforma de Aprendizado Online' },
{ id: 'd060ab17-c961-4de7-929f-a0d52aa3ecf4', title: 'Inteligência Artificial' }
])

const idContent = ref('')
const content = ref<Content | undefined>()

const FETCH_CONTENT = gql`
      query ($id: String!) {
        provision(content_id: $id) {
          id
          title
          description
          cover
          total_likes
          url
          type
          created_at
          allow_download
          is_embeddable
          format
          bytes
          metadata
        }
      }`

const fetchContentById = async (id: string) =>{
  const { data, error, refresh } =  await useAsyncQuery<{provision:Content}>(FETCH_CONTENT,{id})
  idContent.value = id
  if (data.value?.provision) {
    content.value = data.value.provision;
  } else {
    console.error(error.value);
  }
} 
const selectedButton = ref<string>()
// const { data, error, refresh } = useAsyncQuery<{provision:Content}>(FETCH_CONTENT, { id: idContent.value })
</script>

