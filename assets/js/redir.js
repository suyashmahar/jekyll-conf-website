var map = {
    'panel-may-2022': 'events/getting-started-with-systems-research.html'
}


function getDestination(cur) {
    var url = new URL('https://a/' + cur);
    return url.searchParams.get("dest");
}

function main() {
    var cur = document.location.search;
    console.log(cur)
    var dst = getDestination(cur);
    console.log(dst)
    window.location.href = map[dst];
}

main();
