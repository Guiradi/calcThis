<template>
  <v-container fluid>
      <v-row justify="center" align="center">
        <v-col cols="12" md="8">
            <v-card
                color="primary"
            >
                <v-card-text>

                    <v-row class="mx-1">
                        <app-calculator-output v-model="functionInput" @clear="functionInput = ''" />
                    </v-row>

                    <v-row>
                        <v-col>
                            <app-number-fields v-model="numberInput" />
                        </v-col>

                        <v-col>
                            {{ functionInput }}
                        </v-col>
                    </v-row>

                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppNumberFields from "../layout/fields/numbers";
import AppCalculatorOutput from "../layout/fields/calculatorOutput";

export default {
    name: "DerivativeCalculator",

    components: {
        AppNumberFields,
        AppCalculatorOutput
    },

    computed: {
        numberInput: {
            get() {
                return null;
            },

            set(value) {
                this.functionInput = `${this.functionInput}${value}`;
            }
        }
    },
    
    data: () => ({
        functionInput: ''
    })
}
</script>

<style>

</style>