<template>
  <div>
    <PlayersGrid :players="players" />
  </div>
</template>

<script setup>
const { id: teamID } = useRoute().params;
const { data: players } = await useFetch(`/api/players/${teamID}`, {
  key: teamID,
});
</script>

<style scoped></style>
