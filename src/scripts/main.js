AOS.init();

const dataDaFesta = new Date("Sep 20, 2024 19:00:00");
const timeStampDaFesta = dataDaFesta.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteAFesta = timeStampDaFesta - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 *24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteAFesta = Math.floor(distanciaAteAFesta / diaEmMs);
    const horasAteAFesta = Math.floor((distanciaAteAFesta % diaEmMs) / horaEmMs);
    const minutosAteAFesta = Math.floor((distanciaAteAFesta % horaEmMs) / minutoEmMs);
    const segundoAteAfesta = Math.floor((distanciaAteAFesta % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteAFesta}d ${horasAteAFesta}h ${minutosAteAFesta}m ${segundoAteAfesta}s`;

    if(distanciaAteAFesta < 0){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000);