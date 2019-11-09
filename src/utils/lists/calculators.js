import AppCommonCalc from "../../components/calculators/common";
import AppAverageCalc from "../../components/calculators/popAverage";

export default [
    {
        id: 0,
        text: "Calculadora Comum",
        component: AppCommonCalc,
        color: "green"
    },
    {
        id: 1,
        text: "Média populacional",
        component: AppAverageCalc,
        color: "blue"
    }
]