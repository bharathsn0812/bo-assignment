<template>
	<div>
        <select v-model="selectedSports">
            <option v-for="sport in sports" :key="sport.value" :value="sport.value">
            {{ sport.label }}
            </option>
        </select>

        <button @click="sortTeamsByAscending=true,sortTeams()">Ascending</button>
        <button @click="sortTeamsByAscending=false,sortTeams()">Descending</button>

        <div v-if="teams">
            <NuxtLink v-for="team in teams" :key="team.teamID" :to="`/teams/${team.teamID}`">
                <p >
                    {{ team.city }}
                </p>
            </NuxtLink>
        </div>
        <div v-else>
            No data to show
        </div>
    </div>
</template>

<script setup>
    const sports = ref([
    { label: 'NFL', value: 'NFL' },
    { label: 'NBA', value: 'NBA' },
    { label: 'MLB', value: 'MLB' },
    { label: 'NHL', value: 'NHL' },
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
    }

    const fetchTeamsForSport = async (sport) => {
        const { data } = await useFetch(`/api/teams/${sport}`);
        teams.value = data.value.results;
        sortTeams();
    };

    watch(selectedSports, fetchTeamsForSport, { immediate: true });
</script>

<style scoped>
</style>