<template>
    <v-container fluid style="width: 100vw; max-width: 1200px;">
        <h1 style="margin-top: 12px; margin-bottom: 12px;">Projects</h1>
        <v-chip @click="addOrRemoveTrackChip(track.name)" v-for="track in tracks" class="mr-2 px-5"
            :variant="selectedTracks.includes(track.name) ? 'flat' : 'outlined'"
            :color="selectedTracks.includes(track.name) ? '#ccf6c5' : ''"
            :append-icon="selectedTracks.includes(track.name) ? 'mdi-check' : ''" :prepend-icon="track.icon">{{
                track.name }}</v-chip>
        <v-row class="mt-4">
            <v-col class="project-card" cols="12" md="3"
                v-for="project in projects.filter((e) => e.tags.map((f) => selectedTracks.includes(f)).reduce((prev, next) => prev || next))">
                <img class="project-image" :src="'/img/' + project.image"
                    style="width: 100%; object-position: top; aspect-ratio: 1.4; object-fit: cover; border-radius: 18px;">
                <h2 class="mt-2"
                    style="line-clamp: 1; -webkit-line-clamp: 1; display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis">
                    {{
                        project.name }}</h2>
                <v-chip v-for="tag in project.tags" variant="tonal" class="my-2 mr-2">{{ tag }}</v-chip>
                <p style="font-size: 14px;">{{ project.description }}</p>
                <v-btn :to="'/projects/' + project.name.toLowerCase().replaceAll('•', '').split(' ').join('-')"
                    class="mt-3 mr-3" variant="text">Explore</v-btn>
                <!-- <v-btn :to="project.link" class="mt-3" color="black"><v-icon class="mr-2">mdi-github</v-icon>
                    GitHub</v-btn> -->
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup>
const { projects } = useJSONData();
const tracks = [{
    name: "Mobile",
    color: "#1A73E8",
    icon: "mdi-android",
}, {
    name: "Web",
    color: "#1A73E8",
    icon: "mdi-web",
}, {
    name: "Machine Learning/AI",
    color: "#1A73E8",
    icon: "mdi-robot-outline",
}, {
    name: "Cloud",
    color: "#1A73E8",
    icon: "mdi-cloud-outline",
}, {
    name: "Others",
    color: "#1A73E8",
    icon: "mdi-shape-outline",
}];
const selectedTracks = useState('filteredTracks', () => ["Mobile", "Web", "Machine Learning/AI", "Cloud", "Others"]);
const selectedSessions = useState('selectedSessions', () => []);
function selectOrUnselectSession(session) {
    console.log(session);
    if (selectedSessions.value.includes(session)) {
        selectedSessions.value.splice(selectedSessions.value.indexOf(session), 1)
    } else {
        selectedSessions.value.push(session);
    }
    // console.log(selectedSessions);
}
function addOrRemoveTrackChip(track) {
    if (selectedTracks.value.includes(track)) {
        selectedTracks.value.splice(selectedTracks.value.indexOf(track), 1);
    } else {
        selectedTracks.value.push(track);
    }
}
</script>
<style scoped>
.project-card:hover {
    filter: invert();
}

.project-card:hover .project-image {
    filter: invert();
}

.project-card {
    background-color: white;
}

.project-card:hover {
    border: 1.5px solid #202023;
    border-radius: 24px;
}
</style>