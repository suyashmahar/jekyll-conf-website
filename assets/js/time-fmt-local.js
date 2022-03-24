var tfl = document.getElementsByClassName('time-fmt-local');

function convertTimestampToTime(dateObj) {
    var show_seconds = dateObj.getSeconds() != 0;
    var show_minutes = show_seconds || dateObj.getMinutes() != 0;

    var result_options = {};
    result_options['hour'] = 'numeric';
    result_options['minute'] = show_minutes ? 'numeric' : undefined;
    result_options['seconds'] = show_seconds ? 'numeric' : undefined;
    result_options['hour12'] = true;

    var result = dateObj.toLocaleString("en-US", result_options).split(' ')[0];

    return result;
}

function convertTimestampToDate(dateObj) {
    var result_options = {year: 'numeric', month: 'long', day: 'numeric'};
    return dateObj.toLocaleString("en-US", result_options);
}

function samePartOfDay(startDateObj, endDateObj) {
  return startDateObj.getHours() < 12 && endDateObj.getHours() < 12 ||
            startDateObj.getHours() >= 12 && endDateObj.getHours() >= 12; 
}

function sameDay(startDateObj, endDateObj) {
  return startDateObj.getDate() == endDateObj.getDate() &&
            startDateObj.getMonth() == endDateObj.getMonth() &&
            startDateObj.getFullYear() == endDateObj.getFullYear();
}

function getTimePeriod(startDateObj, endDateObj) {
    var startDate = convertTimestampToDate(startDateObj);
    var startTime = convertTimestampToTime(startDateObj);

    var endDate = convertTimestampToDate(endDateObj);
    var endTime = convertTimestampToTime(endDateObj);

    var time = startDate + ' ';
    if (sameDay(startDateObj, endDateObj)) {
        if (samePartOfDay(startDateObj, endDateObj)) {
            time += startTime + '-' + endTime + ' ' + (startDateObj.getHours() < 12 ? 'AM' : 'PM');
        } else {
            time += startTime + ' ' + (startDateObj.getHours() < 12 ? 'AM' : 'PM') + ' - ' + endTime + ' ' + (endDateObj.getHours() < 12 ? 'AM' : 'PM');
        }
    } else {
        time += startTime + ' ' + (startDateObj.getHours() < 12 ? 'AM' : 'PM') + ' - ' + endDate + ' ' + endTime + ' ' + (endDateObj.getHours() < 12 ? 'AM' : 'PM');
    }

    time += ' (' + startDateObj.toLocaleString("en-US", {day:'2-digit',timeZoneName: 'short' }).substring(4) + ')';
    
    return time;
}
    
for (var i = 0; i < tfl.length; i++) {
    var elem = tfl[i];
    /* Read the data-start attribute as an int */
    var start = parseInt(elem.getAttribute('data-start'));
    var duration = parseInt(elem.getAttribute('data-duration'));
    var show_timezone_link = elem.getAttribute('data-show-timezone-link') == 'true';

    console.log(show_timezone_link);

    startDateObj = new Date(start * 1000);
    endDateObj = new Date((start+duration) * 1000);
    
    formatted_time = getTimePeriod(startDateObj, endDateObj);

    if (show_timezone_link) {
        var iso_time = startDateObj.toISOString().replace(/-/g, '').replace(/\./g, '').replace(/\:/g, '');
        console.log(iso_time);
        formatted_time += "<br><a class=\"text-small\" href='https://www.timeanddate.com/worldclock/converter.html?iso=" + iso_time + "&p1=137&p2=179&p3=75&p4=33&p5=176&p6=136' target='_blank'>(View in a different timezone <i class=\"fa fa-external-link\" aria-hidden=\"true\">)</i></a>";
    }

    elem.innerHTML = formatted_time;
    console.log(formatted_time);
}