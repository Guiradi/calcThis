<template>
    <v-container fluid fill-height>
        <component :is="$store.state.currentCalc.component"></component>
    </v-container>
</template>

<script>
import { isEmpty as _isEmpty } from "lodash";

export default {
    name: "MainApp",

    created() {
        if (_isEmpty(this.$store.state.currentCalc)) {
            this.$router.push({ name: "Home" });
        }
    }
}
</script>