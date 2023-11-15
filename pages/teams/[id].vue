<template>
  <div>
    <div v-if="!players.error">
      <h1>Players of {{ players.meta.description }}</h1>
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
