var allModules = {};
require('fs').readdirSync(__dirname + '/glyphmaps/').forEach(function (file) {
    if (file.match(/\.json$/) !== null && file !== 'index.json') {
        var name = file.replace('.json', '');
        allModules[name] = require('./glyphmaps/' + file);
        console.log(`if (fontName == '${name}') {
            return ${name}
        }`)
        // console.log(`import ${name} from './glyphmaps/${file}'`)
        // console.log(`require('./glyphmaps/' ${ file})`);
    }
});

// console.log(allModules);