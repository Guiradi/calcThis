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
                            <app-buttons v-model="numberInput" @calculate="_calculate" />
                        </v-col>
                    </v-row>

                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
// Services
import calculate from "../../services/commonCalc";

// Components
import AppNumberFields from "../layout/fields/numbers";
import AppButtons from "../layout/fields/buttons";
import AppCalculatorOutput from "../layout/fields/calculatorOutput";

export default {
    name: "CommonCalculator",

    components: {
        AppButtons,
        AppNumberFields,
        AppCalculatorOutput
    },
    
    data: () => ({
        functionInput: ''
    }),

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

    methods: {
        _calculate() {
            try {
                const result = calculate(this.functionInput);
                this.functionInput = result;
            } catch (error) {
                this.functionInput = 0;
                alert(error);
            }
        }
    }
}
</script>

<style>

</style>