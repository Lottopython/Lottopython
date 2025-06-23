function generaNumeri() {
    const numeri = [];
    while (numeri.length < 6) {
        const numero = Math.floor(Math.random() * 90) + 1;
        if (!numeri.includes(numero)) {
            numeri.push(numero);
        }
    }
    document.getElementById('risultato').innerText = 'Numeri fortunati: ' + numeri.join(', ');
}
