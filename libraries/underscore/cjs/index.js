Object.defineProperty(exports, '__esModule', { value: true });

var isObject = require('./isObject.js');
var _setup = require('./_setup.js');
var identity = require('./identity.js');
var isFunction = require('./isFunction.js');
var isArray = require('./isArray.js');
var keys = require('./keys.js');
var extendOwn = require('./extendOwn.js');
var isMatch = require('./isMatch.js');
var matcher = require('./matcher.js');
var property = require('./property.js');
var iteratee = require('./iteratee.js');
var isNumber = require('./isNumber.js');
var _isNaN = require('./isNaN.js');
var isArguments = require('./isArguments.js');
var each = require('./each.js');
var invert = require('./invert.js');
var after = require('./after.js');
var allKeys = require('./allKeys.js');
var before = require('./before.js');
var restArguments = require('./restArguments.js');
var bind = require('./bind.js');
var bindAll = require('./bindAll.js');
var chain = require('./chain.js');
var chunk = require('./chunk.js');
var extend = require('./extend.js');
var clone = require('./clone.js');
var filter = require('./filter.js');
var compact = require('./compact.js');
var compose = require('./compose.js');
var constant = require('./constant.js');
var values = require('./values.js');
var sortedIndex = require('./sortedIndex.js');
var findIndex = require('./findIndex.js');
var indexOf = require('./indexOf.js');
var contains = require('./contains.js');
var countBy = require('./countBy.js');
var create = require('./create.js');
var delay = require('./delay.js');
var debounce = require('./debounce.js');
var defaults = require('./defaults.js');
var partial = require('./partial.js');
var defer = require('./defer.js');
var difference = require('./difference.js');
var _escape = require('./escape.js');
var every = require('./every.js');
var findKey = require('./findKey.js');
var find = require('./find.js');
var findLastIndex = require('./findLastIndex.js');
var findWhere = require('./findWhere.js');
var initial = require('./initial.js');
var first = require('./first.js');
var flatten = require('./flatten.js');
var functions = require('./functions.js');
var groupBy = require('./groupBy.js');
var has = require('./has.js');
var isNull = require('./isNull.js');
var isUndefined = require('./isUndefined.js');
var isBoolean = require('./isBoolean.js');
var isElement = require('./isElement.js');
var isString = require('./isString.js');
var isDate = require('./isDate.js');
var isRegExp = require('./isRegExp.js');
var isError = require('./isError.js');
var isSymbol = require('./isSymbol.js');
var isMap = require('./isMap.js');
var isWeakMap = require('./isWeakMap.js');
var isSet = require('./isSet.js');
var isWeakSet = require('./isWeakSet.js');
var isArrayBuffer = require('./isArrayBuffer.js');
var isDataView = require('./isDataView.js');
var _isFinite = require('./isFinite.js');
var isTypedArray = require('./isTypedArray.js');
var isEmpty = require('./isEmpty.js');
var isEqual = require('./isEqual.js');
var pairs = require('./pairs.js');
var tap = require('./tap.js');
var mapObject = require('./mapObject.js');
var noop = require('./noop.js');
var propertyOf = require('./propertyOf.js');
var times = require('./times.js');
var random = require('./random.js');
var now = require('./now.js');
var _unescape = require('./unescape.js');
var templateSettings = require('./templateSettings.js');
var template = require('./template.js');
var result = require('./result.js');
var uniqueId = require('./uniqueId.js');
var memoize = require('./memoize.js');
var throttle = require('./throttle.js');
var wrap = require('./wrap.js');
var negate = require('./negate.js');
var once = require('./once.js');
var lastIndexOf = require('./lastIndexOf.js');
var map = require('./map.js');
var reduce = require('./reduce.js');
var reduceRight = require('./reduceRight.js');
var reject = require('./reject.js');
var some = require('./some.js');
var invoke = require('./invoke.js');
var pluck = require('./pluck.js');
var where = require('./where.js');
var max = require('./max.js');
var min = require('./min.js');
var sample = require('./sample.js');
var shuffle = require('./shuffle.js');
var sortBy = require('./sortBy.js');
var indexBy = require('./indexBy.js');
var partition = require('./partition.js');
var toArray = require('./toArray.js');
var size = require('./size.js');
var pick = require('./pick.js');
var omit = require('./omit.js');
var rest = require('./rest.js');
var last = require('./last.js');
var without = require('./without.js');
var uniq = require('./uniq.js');
var union = require('./union.js');
var intersection = require('./intersection.js');
var unzip = require('./unzip.js');
var zip = require('./zip.js');
var object = require('./object.js');
var range = require('./range.js');
var mixin = require('./mixin.js');
var underscoreArrayMethods = require('./underscore-array-methods.js');

// Named Exports

exports.isObject = isObject;
exports.VERSION = _setup.VERSION;
exports.identity = identity;
exports.isFunction = isFunction;
exports.isArray = isArray;
exports.keys = keys;
exports.assign = extendOwn;
exports.extendOwn = extendOwn;
exports.isMatch = isMatch;
exports.matcher = matcher;
exports.matches = matcher;
exports.property = property;
exports.iteratee = iteratee;
exports.isNumber = isNumber;
exports.isNaN = _isNaN;
exports.isArguments = isArguments;
exports.each = each;
exports.forEach = each;
exports.invert = invert;
exports.after = after;
exports.allKeys = allKeys;
exports.before = before;
exports.restArguments = restArguments;
exports.bind = bind;
exports.bindAll = bindAll;
exports.chain = chain;
exports.chunk = chunk;
exports.extend = extend;
exports.clone = clone;
exports.filter = filter;
exports.select = filter;
exports.compact = compact;
exports.compose = compose;
exports.constant = constant;
exports.values = values;
exports.sortedIndex = sortedIndex;
exports.findIndex = findIndex;
exports.indexOf = indexOf;
exports.contains = contains;
exports.include = contains;
exports.includes = contains;
exports.countBy = countBy;
exports.create = create;
exports.delay = delay;
exports.debounce = debounce;
exports.defaults = defaults;
exports.partial = partial;
exports.defer = defer;
exports.difference = difference;
exports.escape = _escape;
exports.all = every;
exports.every = every;
exports.findKey = findKey;
exports.detect = find;
exports.find = find;
exports.findLastIndex = findLastIndex;
exports.findWhere = findWhere;
exports.initial = initial;
exports.first = first;
exports.head = first;
exports.take = first;
exports.flatten = flatten;
exports.functions = functions;
exports.methods = functions;
exports.groupBy = groupBy;
exports.has = has;
exports.isNull = isNull;
exports.isUndefined = isUndefined;
exports.isBoolean = isBoolean;
exports.isElement = isElement;
exports.isString = isString;
exports.isDate = isDate;
exports.isRegExp = isRegExp;
exports.isError = isError;
exports.isSymbol = isSymbol;
exports.isMap = isMap;
exports.isWeakMap = isWeakMap;
exports.isSet = isSet;
exports.isWeakSet = isWeakSet;
exports.isArrayBuffer = isArrayBuffer;
exports.isDataView = isDataView;
exports.isFinite = _isFinite;
exports.isTypedArray = isTypedArray;
exports.isEmpty = isEmpty;
exports.isEqual = isEqual;
exports.pairs = pairs;
exports.tap = tap;
exports.mapObject = mapObject;
exports.noop = noop;
exports.propertyOf = propertyOf;
exports.times = times;
exports.random = random;
exports.now = now;
exports.unescape = _unescape;
exports.templateSettings = templateSettings;
exports.template = template;
exports.result = result;
exports.uniqueId = uniqueId;
exports.memoize = memoize;
exports.throttle = throttle;
exports.wrap = wrap;
exports.negate = negate;
exports.once = once;
exports.lastIndexOf = lastIndexOf;
exports.collect = map;
exports.map = map;
exports.foldl = reduce;
exports.inject = reduce;
exports.reduce = reduce;
exports.foldr = reduceRight;
exports.reduceRight = reduceRight;
exports.reject = reject;
exports.any = some;
exports.some = some;
exports.invoke = invoke;
exports.pluck = pluck;
exports.where = where;
exports.max = max;
exports.min = min;
exports.sample = sample;
exports.shuffle = shuffle;
exports.sortBy = sortBy;
exports.indexBy = indexBy;
exports.partition = partition;
exports.toArray = toArray;
exports.size = size;
exports.pick = pick;
exports.omit = omit;
exports.drop = rest;
exports.rest = rest;
exports.tail = rest;
exports.last = last;
exports.without = without;
exports.uniq = uniq;
exports.unique = uniq;
exports.union = union;
exports.intersection = intersection;
exports.transpose = unzip;
exports.unzip = unzip;
exports.zip = zip;
exports.object = object;
exports.range = range;
exports.mixin = mixin;
exports.default = underscoreArrayMethods;
