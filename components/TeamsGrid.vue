<template>
  <div v-if="teams" class="grid grid-cols-3 gap-4">
    <NuxtLink
      class="card bg-white shadow-lg rounded-lg p-4 border-4"
      v-for="team in teams"
      :key="team.teamID"
      :to="`/team/${team.teamID}`"
    >
      <p class="text-gray-700 text-center">
        {{ team.city }} - "{{ team.initials }}"
      </p>
    </NuxtLink>
  </div>
  <div v-else>No data to show</div>
</template>
<script setup>
defineProps({
  teams: Array,
});
</script>
