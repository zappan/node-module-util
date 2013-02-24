var path = require('path')
  , sprintf = require('sprintf').sprintf
  ;

function funcPath(dirname, filename, callee) {
  var modulePath = sprintf('%s%s%s'
                    , path.resolve(dirname).substr(path.dirname(require.main.filename).length)
                    , path.sep
                    , path.basename(filename, path.extname(filename))).substr(1)
    , funcName = callee && callee.name || '[Missing]';

  return sprintf('%s::%s()', modulePath.replace(new RegExp(path.sep, 'g'), '.'), (funcName || '[Anonymous]'));
}

module.exports = {
  funcPath: funcPath
};
