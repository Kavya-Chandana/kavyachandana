<template>
    <!-- <h1 class="mt-5">Learn. Connect. Grow.</h1> -->
    <div>
        <div style="width: 100vw; max-width: 1200px;">
            <v-row class="mt-5">
                <v-col cols="12" lg="4">
                    <v-card
                        style="padding: 16px; border-radius: 24px; margin: 12px; aspect-ratio: 0.7; max-height: 540px; margin-left: auto; margin-right: auto; position: relative; display: flex; flex-direction: column;"
                        elevation="0" :color="'#5D57A1'">
                        <!-- <div
                            style="width: 96px; background-color: #FFF; height: 12px; margin-bottom: 12px; border-radius: 12px; margin-left: auto; margin-right: auto;"> -->
                        <!-- </div> -->
                        <img src="/img/kavya-chandana.png"
                            style="height: 240px; width: 100%; object-fit: cover; border-radius: 14px;" />
                        <div
                            style="width: 100%; margin-top: 12px; flex-grow: 1; display: flex; flex-direction: column;">
                            <h2 style="line-height: 100%; margin-top: 12px;">Kavya Chandana</h2>
                            <p>Designer. Developer. Student.<br />Founder. Entrepreur.</p>
                            <p style="font-size: 14.5px; opacity: 60%; margin-bottom: 8px;">
                                I specialise in Swift Development, UI/UX design, Android development, Flutter
                                Development and open-source contribtion</p>
                            <v-row class="my-2 pl-3" style="column-gap: 12px; flex-grow: 0;">
                                <v-icon>mdi-linkedin</v-icon>
                                <v-icon>mdi-github</v-icon>
                                <v-icon>mdi-web</v-icon>
                            </v-row>
                            <p
                                style="margin-top: auto; margin-right: 6px; margin-bottom: 6px; text-align: end; opacity: 0.4; font-weight: 600">
                                #BeingAForceForChange</p>
                        </div>
                    </v-card>
                </v-col>
                <v-col cols="12" lg="8">
                    <img src="/assets/img/gallery.png" style="width: 100%; height: 100%; padding-bottom: 12px" />
                </v-col>
            </v-row>
        </div>
        <v-container fluid>
            <h2 style="text-align: center; margin-top: 12px;">My Projects</h2>
            <v-row class="mt-4">
                <v-col class="project-card" cols="12" md="4"
                    v-for="project in projects.filter((e) => e.image != '').slice(0, 6)">
                    <img class="project-image" :src="'/img/' + project.image"
                        style="width: 100%; object-position: top; aspect-ratio: 1.4; object-fit: cover; border-radius: 18px;">
                    <h2 class="mt-2"
                        style="line-clamp: 1; -webkit-line-clamp: 1; display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis">
                        {{
                            project.name }}</h2>
                    <v-chip v-for="tag in project.tags" variant="tonal" class="my-2 mr-2">{{ tag }}</v-chip>
                    <p style="font-size: 14px;">{{ project.description }}</p>
                    <v-btn :to="'/projects/' + project.name.toLowerCase().replaceAll('•', '').split(' ').join('-')"
                        class="mt-3 mr-3" variant="outlined">Explore</v-btn>
                    <v-btn :to="project.link" class="mt-3" color="black"><v-icon class="mr-2">mdi-github</v-icon>
                        GitHub</v-btn>
                </v-col>
            </v-row>
            <v-row align="center" style="flex-wrap: nowrap;">
                <v-divider />
                <v-btn color="#FBC005" to="projects" rounded style="flex-shrink: 0; margin: 12px;">View more</v-btn>
                <v-divider />
            </v-row>
        </v-container>
    </div>

</template>
<script setup>
const { projects } = useJSONData();
</script>
<style scoped>
.project-card:hover {
    filter: invert();
}

.project-card:hover .project-image {
    filter: invert();
}

.project-card {
    padding: 20px;
    background-color: white;
}

.project-card:hover {
    border: 1.5px solid #202023;
    border-radius: 24px;
}
</style>