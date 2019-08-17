<template>
  <v-container fluid>
      <v-row class="px-1">
        <v-col class="text-center">
            <v-card class="py-2" @click="$emit('input', '+')">
                +
            </v-card>
        </v-col>
        <v-col class="text-center">
            <v-card class="py-2" @click="$emit('input', '-')">
                -
            </v-card>
        </v-col>
        <v-col class="text-center">
            <v-card class="py-2" @click="$emit('input', '*')">
                *
            </v-card>
        </v-col>
    </v-row>
      <v-row class="px-1">
        <v-col class="text-center">
            <v-card class="py-2" @click="$emit('input', '/')">
                /
            </v-card>
        </v-col>
        <v-col class="text-center">
            <v-card class="py-2" @click="$emit('input', '²')">
                ²
            </v-card>
        </v-col>
        <v-col class="text-center">
            <v-card class="py-2" @click="$emit('input', '')">
                nada
            </v-card>
        </v-col>
    </v-row>
    <v-row class="px-1">
        <v-col class="text-center">
            <v-card class="py-2" @click="$emit('input', '')">
                nada
            </v-card>
        </v-col>
        <v-col class="text-center">
            <v-card class="py-2" @click="$emit('input', '')">
                nada
            </v-card>
        </v-col>
        <v-col class="text-center">
            <v-card class="py-2" @click="$emit('input', '')">
                nada
            </v-card>
        </v-col>
    </v-row>
    <v-row class="px-1">
        <v-col class="text-center">
            <v-card class="error py-2" @click="$emit('calculate')">
                Calcular!
            </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    name: "Buttons",

    props: {
        value: {
            required: true,
            default: String
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