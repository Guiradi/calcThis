export default function (func) {
    if (isNaN(func)) {
        throw new Error("Isso não é um número.");
    }
    return 0;
}