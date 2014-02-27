function loadScript(src, code) {
    if (typeof code === "undefined") { code = null; }
    var sc = document.createElement('script');
    sc.setAttribute('type', 'text/javascript');
    if (src)
        sc.setAttribute('src', src);
    if (code)
        sc.innerHTML = code;
    document.head.appendChild(sc);
}

function loadStyles(href) {
    var sc = document.createElement('link');
    sc.setAttribute('rel', 'stylesheet');
    if (href)
        sc.setAttribute('href', href);
    document.head.appendChild(sc);
}

function getWeekday(date) {
    var days = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
    return days[date.getDay()];
}

function getMonth(date) {
    var months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    return months[date.getMonth()];
}
function grab(date) {
    // just come cleanup to make the document lighter
    $('div').removeAttr('style');

    referenciaLeituras.forEach(function (r) {
        $('#' + r).show();
    });

    var lit = $('#corpo_leituras');

    $('#informacao_extra', lit).remove();
    $('#ferramenta', lit).remove();
    $('script', lit).remove();

    $(document.body).html(lit[0].outerHTML);

    $('#corpo_leituras').prepend($('<div class="date-header">' + '<span class="month">' + getMonth(date) + '</span>' + '<span class="weekday">' + getWeekday(date) + '</span>' + '<span class="day">' + date.getDate() + '</span>' + '</div>'));
}

function download(date) {
    $.get('http://liturgiadiaria.cnbb.org.br/app/user/user/UserView.php?ano=2014&mes=2&dia=' + date.getDate()).done(function (data) {
        console.log(data);
    });
}

loadScript("http://code.jquery.com/jquery-2.1.0.min.js");

(document).ready = function () {
    download(new Date());
    grab(new Date());
};
//# sourceMappingURL=downloader.js.map
