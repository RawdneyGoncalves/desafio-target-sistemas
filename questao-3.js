
/* Cálculo do faturamento diário */
function calcularFaturamento(faturamentos) {
    let total = 0;
    let diasComFaturamento = 0;
    let menorValor = Infinity;
    let maiorValor = -Infinity;

    for (let valor of faturamentos) {
        if (valor > 0) {
            total += valor;
            diasComFaturamento++;
            if (valor < menorValor) menorValor = valor;
            if (valor > maiorValor) maiorValor = valor;
        }
    }

    let media = total / diasComFaturamento;

    let diasAcimaDaMedia = faturamentos.filter(valor => valor > media).length;

    return {
        menorValor,
        maiorValor,
        diasAcimaDaMedia
    };
}

const faturamentos = [0, 100, 200, 150, 0, 50, 300, 400, 0, 250];
const resultado = calcularFaturamento(faturamentos);

console.log("Menor valor:", resultado.menorValor);               // Resultado: 50
console.log("Maior valor:", resultado.maiorValor);             // Resultado: 400
console.log("Dias acima da média:", resultado.diasAcimaDaMedia); // Resultado: 5



/* 

Explicação dos resultados: 

Menor valor: 50 (o menor valor de faturamento diário considerando apenas dias com faturamento positivo)
Maior valor: 400 (o maior valor de faturamento diário)
Dias acima da média: 5 (número de dias com faturamento superior à média anual)

*/
