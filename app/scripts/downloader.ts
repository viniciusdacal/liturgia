/// <reference path="helpers.ts" />

// http://liturgiadiaria.cnbb.org.br/app/user/user/UserView.php?ano=2014&mes=2&dia=20

declare var $ : any;
declare var referenciaLeituras : Array<string>;

function grab(date) {
  // just come cleanup to make the document lighter
  $('div').removeAttr('style');

  referenciaLeituras.forEach(function(r) {
    $('#'+r).show();
  });

  var lit = $('#corpo_leituras');

  $('#informacao_extra', lit).remove();
  $('#ferramenta', lit).remove();
  $('script', lit).remove();

  $(document.body).html(lit[0].outerHTML);

  $('#corpo_leituras').prepend($(
    '<div class="date-header">'+
      '<span class="month">' + getMonth(date) + '</span>' +
      '<span class="weekday">' + getWeekday(date) + '</span>' +
      '<span class="day">' + date.getDate() + '</span>' +
    '</div>')
  );
}

function download(date) {
  $.get('http://liturgiadiaria.cnbb.org.br/app/user/user/UserView.php?ano=2014&mes=2&dia='+date.getDate())
  .done(function(data) {
    console.log(data)
  });
}

loadScript("http://code.jquery.com/jquery-2.1.0.min.js");

(<any>document).ready = function(){
  download(new Date());
  grab(new Date());
}