module.exports = function reverse (n) {
    if (n < 0) {
        n = Math.abs(n);
    }
    let buf;
    n += '';
    n = n.split('');
    for (let i = 0; i < Math.floor(n.length/2); ++i) {
        buf = n[n.length - i - 1];
        n[n.length - i - 1] = n[i];
        n[i] = buf;
    }
    n = n.join('');
    return Number(n);
}
