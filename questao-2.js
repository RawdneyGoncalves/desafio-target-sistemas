/* a) Sequência de números ímpares */
let sequenciaA = [1, 3, 5, 7];
let proximoElementoA = sequenciaA[sequenciaA.length - 1] + 2;

/* b) Sequência de potências de 2 */
let sequenciaB = [2, 4, 8, 16, 32, 64];
let proximoElementoB = sequenciaB[sequenciaB.length - 1] * 2;

/* c) Sequência de quadrados perfeitos */
let sequenciaC = [0, 1, 4, 9, 16, 25, 36];
let proximoElementoC = Math.pow(Math.sqrt(sequenciaC[sequenciaC.length - 1]) + 1, 2);

/* d) Sequência de quadrados de números pares */
let sequenciaD = [4, 16, 36, 64];
let proximoElementoD = Math.pow((Math.sqrt(sequenciaD[sequenciaD.length - 1]) + 2), 2);

/* e) Sequência de Fibonacci */
let sequenciaE = [1, 1, 2, 3, 5, 8];
let proximoElementoE = sequenciaE[sequenciaE.length - 1] + sequenciaE[sequenciaE.length - 2];

/* f) Sequência mista */
let sequenciaF = [2, 10, 12, 16, 17, 18, 19];
let proximoElementoF = sequenciaF[sequenciaF.length - 1] + 1;

console.log("Próximo elemento de a):", 9);     // Resultado: 9
console.log("Próximo elemento de b):", 128);   // Resultado: 128
console.log("Próximo elemento de c):", 49);    // Resultado: 49
console.log("Próximo elemento de d):", 100);   // Resultado: 100
console.log("Próximo elemento de e):", 13);    // Resultado: 13
console.log("Próximo elemento de f):", 20);    // Resultado: 20
