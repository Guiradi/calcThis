<template>
    <v-container fluid fill-height>
        <app-common-calculator />
    </v-container>
</template>

<script>
import AppCommonCalculator from "../../components/calculators/common";

export default {
    name: "MainApp",

    components: {
        AppCommonCalculator
    }
}
</script>