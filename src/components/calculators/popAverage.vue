<template>
  <v-container fluid>
      <v-row justify="center" align="center">
        <v-col cols="12" md="8">
            <v-card>
                <v-card-text>

                    <v-row>
                        <v-text-field
                            v-model="newData"
                            label="Inserir dado:"
                            :rules="numberRule"
                            :append-outer-icon="outerIconCheck"
                            @click:append-outer="addData"
                            @keyup.enter="addCheck"
                            solo
                        />
                    </v-row>

                    <v-row>
                        {{ sample }}
                    </v-row>

                    <v-row>
                        Média Aritmética: {{ arithmeticMean }}
                    </v-row>

                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { isEmpty as _isEmpty } from "lodash";

export default {
    name: "popAverageCalculator",

    data: () => ({
        numberRule: [
            v => (!isNaN(v.replace(",", "."))) 
                || 'O dado inserido precisa ser um número'
        ],
        newData: "0",
        sample: []
    }),

    computed: {
        outerIconCheck() {
            return this.newData 
                && !isNaN(this.newData.replace(",", ".")) 
                && this.newData !== "0" ? "mdi-plus" : "";
        },

        arithmeticMean() {
            if (_isEmpty(this.sample)) return 0;
            const average = this.sample.reduce((a,b) => a += b) / this.sample.length;
            return average.toFixed(2);
        }
    },

    methods: {
        addData() {
            this.sample.push(parseFloat(this.newData.replace(",", ".")));
            this.newData = "0";
        },

        addCheck() {
            if (this.newData 
                && !isNaN(this.newData.replace(",", ".")) 
                && this.newData !== "0")
                this.addData();
        }
    }
}
</script>

<style>

</style>