<template>
  <v-container fluid>
      <v-row
            v-for="i in 3" :key="`Linha${i}`"
            class="px-1"
        >
        <v-col v-for="j in 3" :key="`Coluna${j}`" class="text-center">
            <v-card class="py-2" @click="$emit('input', getNumber(i,j) )">
                {{ getNumber(i,j) }}
            </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    name: "Numbers",

    props: {
        value: {
            required: true,
            default: Number
        }
    },

    methods: {
        getNumber(i, j) {
            return (i*3) + j - 3;
        }
    }
}
</script>

<style>

</style>