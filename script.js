function jsonToCsvFile(json, elementSelector = 'body', autoDownload = false) {
    const data = JSON.parse(json);
    const keys = Object.keys(data[0]);
    let csv = data.map(el => keys.map(key => el[key]));
    csv.unshift(keys);
    csv = csv.map(arr => arr.join(',')).join('\n');
    const file = new File([csv], {type : 'text/csv'});
    const url = URL.createObjectURL(file);
    const timestamp = Date.now();
    const loc = window.location.hostname;
    const a = document.createElement('a');
    a.download = `download-this-shit-${timestamp}.csv`;
    a.target = '_blank';
    a.href = url;
    a.textContent = 'click';
    const el = document.querySelector(elementSelector);
    el.appendChild(a);

    if (autoDownload) {
        a.style = 'display: none';
        a.click();
    }
}
