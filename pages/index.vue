<template>
  <div>
    <div class="flex items-center space-x-4 justify-center">
      <span class="inline-block">Select Sport:</span>
      <select v-model="selectedSports" class="inline-block p-2 w-56">
        <option v-for="sport in sports" :key="sport.value" :value="sport.value">
          {{ sport.label }}
        </option>
      </select>

      <span class="inline-block mr-16">Sort By:</span>
      <button
        :class="[
          sortTeamsByAscending
            ? 'bg-green-500 text-white'
            : 'bg-red-500 text-white',
        ]"
        @click="(sortTeamsByAscending = true), sortTeams()"
        class="inline-block p-2"
      >
        Ascending &#8593;
      </button>
      <button
        :class="[
          !sortTeamsByAscending
            ? 'bg-green-500 text-white'
            : 'bg-red-500 text-white',
        ]"
        @click="(sortTeamsByAscending = false), sortTeams()"
        class="inline-block p-2"
      >
        Descending &#8595;
      </button>
    </div>

    <TeamsGrid class="mt-6" :teams="teams" />
  </div>
</template>

<script setup>
const sports = ref([
  { label: "NFL", value: "NFL" },
  { label: "NBA", value: "NBA" },
  { label: "MLB", value: "MLB" },
  { label: "NHL", value: "NHL" },
]);
const teams = ref({});
let sortTeamsByAscending = ref(true);
let selectedSports = ref(sports.value[0].label);

const sortTeams = () => {
  if (sortTeamsByAscending.value) {
    teams.value.sort((a, b) => a.city.localeCompare(b.city));
  } else {
    teams.value.sort((a, b) => b.city.localeCompare(a.city));
  }
};

const fetchTeamsForSport = async (sport) => {
  const { data } = await useFetch(`/api/teams/${sport}`);
  teams.value = data.value.results;
  sortTeams();
};

watch(selectedSports, fetchTeamsForSport, { immediate: true });
</script>

<style scoped></style>
