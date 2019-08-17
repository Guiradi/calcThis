<template>
    <v-container fluid fill-height>
        <app-derivative-calculator />
    </v-container>
</template>

<script>
import AppDerivativeCalculator from "../../components/calculators/derivative";

export default {
    name: "MainApp",

    components: {
        AppDerivativeCalculator
    }
}
</script>