<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <v-toolbar-title>Palavras</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <home />
        </v-content>
    </v-app>
</template>

<script>
import Home from "./components/Home";

export default {
    name: "App",

    components: {
        Home,
    },

    data: () => ({
        //
    }),
};
</script>
