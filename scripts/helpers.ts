function loadScript(src: string, code: string = null) {
  var sc = document.createElement('script');
  sc.setAttribute('type', 'text/javascript');
  if(src) sc.setAttribute('src', src);
  if(code) sc.innerHTML = code
  document.head.appendChild(sc)
}

function loadStyles(href: string) {
  var sc = document.createElement('link');
  sc.setAttribute('rel', 'stylesheet');
  if(href) sc.setAttribute('href', href);
  document.head.appendChild(sc)
}

function getWeekday(date: Date) : string {
  var days = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
  return days[date.getDay()];
}

function getMonth(date: Date) : string {
  var months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  return months[date.getMonth()];
}