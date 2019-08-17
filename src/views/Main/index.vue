<template>
    <v-container fluid fill-height>
        <v-row>
            <v-col cols="12">
                <v-row justify="center" align="center">
                    <v-card
                        color="primary"
                    >
                        <v-card-text>
                            <v-row class="mx-1 mb-2">
                                <v-text-field
                                    v-model="functionInput"
                                    name="functionInput"
                                    label="f(x) ="
                                    id="functionInput"
                                    solo
                                    hide-details
                                    readonly
                                    append-icon="mdi-close"
                                    @click:append="clear()"
                                ></v-text-field>
                            </v-row>
                            <app-number-fields
                                v-model="numberInput"
                            ></app-number-fields>
                        </v-card-text>
                    </v-card>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import AppNumberFields from "../../components/calculators/fields/numbers";
export default {
    name: "Home",

    components: {
        AppNumberFields
    },
    
    data: () => ({
        functionInput: "f(x) = "
    }),

    computed: {
        numberInput: {
            get() {
                return null;
            },

            set(val) {
                this.functionInput = `${ this.functionInput }${ val }`;
            }
        }
    },

    methods: {
        clear() {
            this.functionInput = "f(x) = ";
        }
    }
}
</script>