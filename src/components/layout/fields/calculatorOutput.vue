<template>
    <v-text-field
        v-model="functionOutput"
        name="functionOutput"
        label="f(x) ="
        id="functionOutput"
        solo
        hide-details
        readonly
        append-icon="mdi-close"
        @click:append="$emit('clear')"
    ></v-text-field>
</template>

<script>
export default {
    name: "CalculatorOutput",

    data: () => ({
        //
    }),

    computed: {
        functionOutput() {
            return `f(x) = ${this.value}`;
        }
    },

    props: {
        value: {
            required: true,
            default: 0
        }
    }

}
</script>

<style>

</style>