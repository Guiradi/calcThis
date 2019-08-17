<template>
    <v-container fluid fill-height>
        <v-row
            align="center"
            justify="center"
            v-if="!menu"
        >
            <v-col cols="12">
                <v-row justify="center" class="mb-2">
                    É simples, só cálculo.
                </v-row>
                <v-row justify="center">
                    <v-btn color="primary" @click="menu = true">Começar</v-btn>
                </v-row>
            </v-col>
        </v-row>

        <v-row v-else justify="center">
            <v-col cols="10">
                <v-row align="center" justify="center" class="pa-2 text-right">
                    <v-col>
                        <v-hover v-slot:default="{ hover }" class="mouse-pointer">
                            <v-card
                                :elevation="hover ? 12 : 2"
                                class="mx-auto"
                                :color="calculatorsList[0].color"
                                height="20vh"
                                :to="{ name: 'Main' }"
                            >
                            <v-card-title class="align-end fill-height">
                                {{ calculatorsList[0].text }}
                            </v-card-title>
                            </v-card>
                        </v-hover>
                    </v-col>
                    <v-col>
                        <v-card
                            class="pa-2"
                            height="20vh"
                        >
                        <v-card-title class="align-end fill-height">Em breve</v-card-title>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card
                            class="pa-2"
                            height="20vh"
                        >
                        <v-card-title class="align-end fill-height">Em breve</v-card-title>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row align="center" justify="center" class="pa-2">
                    <v-col>
                        <v-card
                            class="pa-2"
                            height="20vh"
                        >
                        <v-card-title class="align-end fill-height">Em breve</v-card-title>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card
                            class="pa-2"
                            height="20vh"
                        >
                        <v-card-title class="align-end fill-height">Em breve</v-card-title>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card
                            class="pa-2"
                            height="20vh"
                        >
                        <v-card-title class="align-end fill-height">Em breve</v-card-title>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row align="center" justify="center" class="pa-2">
                    <v-col>
                        <v-card
                            class="pa-2"
                            height="20vh"
                        >
                        <v-card-title class="align-end fill-height">Em breve</v-card-title>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card
                            class="pa-2"
                            height="20vh"
                        >
                        <v-card-title class="align-end fill-height">Em breve</v-card-title>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card
                            class="pa-2"
                            height="20vh"
                        >
                        <v-card-title class="align-end fill-height">Em breve</v-card-title>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import calculatorsList from "../../utils/lists/calculators";

export default {
    name: "Home",
    
    data: () => ({
        menu: false,
        calculatorsList
    })
}
</script>

<style scoped>
.mouse-pointer {
    cursor: pointer
}
</style>