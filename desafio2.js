function obterLevel(vitorias, derrotas) {
    const totalDeVitorias = vitorias - derrotas;
    let level;

    if (vitorias < 10) {
        level = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        level = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        level = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        level = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        level = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        level = "Lendário";
    } else {
        level = "Imortal";
    }

    console.log(`Saldo de vitorias: ${saldoVitorias} | Nível: ${nivel}`);
}

