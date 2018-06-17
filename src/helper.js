export function dayConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  var day = weekday[a.getDay()]

  return day;
}

export function dateConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var day = weekday[a.getDay()]
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time =  `${day} ${month} ${date} ${year}`;
  return time;
}
