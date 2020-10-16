<template>
    <v-container fluid>
        <v-form>
            <v-file-input
                label="Selecione a legenda"
                prepend-icon="mdi-message-text"
                outlined
                multiple
                chips
                v-model="files"
                append-outer-icon="mdi-send"
                @click:append-outer="procFiles"
            ></v-file-input>
        </v-form>
        <div class="pilula">
            <pilula
                v-for="p in grupo"
                :key="p.nome"
                :nome="p.nome"
                :cont="p.count"
            />
        </div>
    </v-container>
</template>

<script>
import { ipcRenderer } from "electron";
import Pilula from "./Pilula";

export default {
    components: {
        Pilula,
    },
    data() {
        return {
            files: [],
            grupo: [],
        };
    },
    methods: {
        procFiles() {
            this.grupo = [];
            if (this.files.length > 0) {
                const pts = this.files.map((f) => f.path);
                ipcRenderer.send("comunica", pts);
                ipcRenderer.on("comunica", (e, r) => {
                    console.log(r);
                    this.grupo = r;
                });
            }
        },
    },
};
</script>

<style>
.pilula {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>