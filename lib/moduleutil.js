var path = require('path')
  , util = require('util');

function functionPath(dirname, filename, func) {
  var modulePath = util.format('%s%s%s'
                    , path.resolve(dirname).substr(path.dirname(require.main.filename).length)
                    , path.sep
                    , path.basename(filename, path.extname(filename))).substr(1)
    , funcName = func && func.name || '[Missing]';

  return util.format('%s::%s()', modulePath.replace(new RegExp(path.sep, 'g'), '.'), (funcName || '[Anonymous]'));
}

module.exports = {
  functionPath: functionPath
};
