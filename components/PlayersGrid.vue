<template>
  <template v-if="!players.error">
    <p class="text-center font-semibold text-lg">
      {{ players.meta.description }}
    </p>
    <div class="grid grid-cols-3 gap-4 mt-6">
      <div
        class="card bg-white shadow-lg rounded-lg p-4 border-4"
        v-for="player in players.results"
        :key="player.playerID"
      >
        <p class="text-gray-700 text-center">
          {{ player.firstName }} {{ player.lastName }}
        </p>
      </div>
    </div>
  </template>

  <template v-else
    ><div class="text-center text-red-600">{{ players.message }}</div>
  </template>
</template>
<script setup>
defineProps({
  players: Array,
});
</script>
