<template>
  <div>
    <h1 v-if="!players.error">Players of {{ players.meta.description }}</h1>
    <div v-if="players">
      <p v-for="player in players.results" :key="player.teamID">
        {{ player.firstName }}
      </p>
    </div>
    <div v-if="players.error">
      {{ players.message }}
    </div>
  </div>
</template>

<script setup>
const { id: teamID } = useRoute().params;
const { data: players } = await useFetch(`/api/players/${teamID}`, {
  key: teamID,
});
</script>

<style scoped></style>
