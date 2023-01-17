export function invert(colors) {
    return colors.map(c => {
        let color = c.substring(1);
        let [...arr]  = color;
        var res = [];
        while (arr.length) {
          res.push(arr.splice(0, 2));
        }
        const rgba = res.reverse().map(chars => chars.join(''));
        return `#${ rgba.join('') }`;
    });
}