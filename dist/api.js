import crypto$1 from 'crypto';
import require$$1$3 from 'path';
import require$$1$1 from 'tty';
import require$$1$2 from 'util';
import require$$0$3 from 'os';
import require$$0$4 from 'buffer';
import require$$1$4 from 'string_decoder';
import require$$4$1 from 'node:zlib';
import stream from 'stream';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var esObjectAtoms;
var hasRequiredEsObjectAtoms;

function requireEsObjectAtoms () {
	if (hasRequiredEsObjectAtoms) return esObjectAtoms;
	hasRequiredEsObjectAtoms = 1;

	/** @type {import('.')} */
	esObjectAtoms = Object;
	return esObjectAtoms;
}

var esErrors;
var hasRequiredEsErrors;

function requireEsErrors () {
	if (hasRequiredEsErrors) return esErrors;
	hasRequiredEsErrors = 1;

	/** @type {import('.')} */
	esErrors = Error;
	return esErrors;
}

var _eval;
var hasRequired_eval;

function require_eval () {
	if (hasRequired_eval) return _eval;
	hasRequired_eval = 1;

	/** @type {import('./eval')} */
	_eval = EvalError;
	return _eval;
}

var range$1;
var hasRequiredRange$1;

function requireRange$1 () {
	if (hasRequiredRange$1) return range$1;
	hasRequiredRange$1 = 1;

	/** @type {import('./range')} */
	range$1 = RangeError;
	return range$1;
}

var ref;
var hasRequiredRef;

function requireRef () {
	if (hasRequiredRef) return ref;
	hasRequiredRef = 1;

	/** @type {import('./ref')} */
	ref = ReferenceError;
	return ref;
}

var syntax;
var hasRequiredSyntax;

function requireSyntax () {
	if (hasRequiredSyntax) return syntax;
	hasRequiredSyntax = 1;

	/** @type {import('./syntax')} */
	syntax = SyntaxError;
	return syntax;
}

var type;
var hasRequiredType;

function requireType () {
	if (hasRequiredType) return type;
	hasRequiredType = 1;

	/** @type {import('./type')} */
	type = TypeError;
	return type;
}

var uri;
var hasRequiredUri;

function requireUri () {
	if (hasRequiredUri) return uri;
	hasRequiredUri = 1;

	/** @type {import('./uri')} */
	uri = URIError;
	return uri;
}

var abs$1;
var hasRequiredAbs;

function requireAbs () {
	if (hasRequiredAbs) return abs$1;
	hasRequiredAbs = 1;

	/** @type {import('./abs')} */
	abs$1 = Math.abs;
	return abs$1;
}

var floor$1;
var hasRequiredFloor;

function requireFloor () {
	if (hasRequiredFloor) return floor$1;
	hasRequiredFloor = 1;

	/** @type {import('./floor')} */
	floor$1 = Math.floor;
	return floor$1;
}

var max$1;
var hasRequiredMax;

function requireMax () {
	if (hasRequiredMax) return max$1;
	hasRequiredMax = 1;

	/** @type {import('./max')} */
	max$1 = Math.max;
	return max$1;
}

var min$1;
var hasRequiredMin;

function requireMin () {
	if (hasRequiredMin) return min$1;
	hasRequiredMin = 1;

	/** @type {import('./min')} */
	min$1 = Math.min;
	return min$1;
}

var pow$1;
var hasRequiredPow;

function requirePow () {
	if (hasRequiredPow) return pow$1;
	hasRequiredPow = 1;

	/** @type {import('./pow')} */
	pow$1 = Math.pow;
	return pow$1;
}

var round$1;
var hasRequiredRound;

function requireRound () {
	if (hasRequiredRound) return round$1;
	hasRequiredRound = 1;

	/** @type {import('./round')} */
	round$1 = Math.round;
	return round$1;
}

var _isNaN;
var hasRequired_isNaN;

function require_isNaN () {
	if (hasRequired_isNaN) return _isNaN;
	hasRequired_isNaN = 1;

	/** @type {import('./isNaN')} */
	_isNaN = Number.isNaN || function isNaN(a) {
		return a !== a;
	};
	return _isNaN;
}

var sign$2;
var hasRequiredSign;

function requireSign () {
	if (hasRequiredSign) return sign$2;
	hasRequiredSign = 1;

	var $isNaN = require_isNaN();

	/** @type {import('./sign')} */
	sign$2 = function sign(number) {
		if ($isNaN(number) || number === 0) {
			return number;
		}
		return number < 0 ? -1 : +1;
	};
	return sign$2;
}

var gOPD;
var hasRequiredGOPD;

function requireGOPD () {
	if (hasRequiredGOPD) return gOPD;
	hasRequiredGOPD = 1;

	/** @type {import('./gOPD')} */
	gOPD = Object.getOwnPropertyDescriptor;
	return gOPD;
}

var gopd;
var hasRequiredGopd;

function requireGopd () {
	if (hasRequiredGopd) return gopd;
	hasRequiredGopd = 1;

	/** @type {import('.')} */
	var $gOPD = requireGOPD();

	if ($gOPD) {
		try {
			$gOPD([], 'length');
		} catch (e) {
			// IE 8 has a broken gOPD
			$gOPD = null;
		}
	}

	gopd = $gOPD;
	return gopd;
}

var esDefineProperty;
var hasRequiredEsDefineProperty;

function requireEsDefineProperty () {
	if (hasRequiredEsDefineProperty) return esDefineProperty;
	hasRequiredEsDefineProperty = 1;

	/** @type {import('.')} */
	var $defineProperty = Object.defineProperty || false;
	if ($defineProperty) {
		try {
			$defineProperty({}, 'a', { value: 1 });
		} catch (e) {
			// IE 8 has a broken defineProperty
			$defineProperty = false;
		}
	}

	esDefineProperty = $defineProperty;
	return esDefineProperty;
}

var shams;
var hasRequiredShams;

function requireShams () {
	if (hasRequiredShams) return shams;
	hasRequiredShams = 1;

	/** @type {import('./shams')} */
	/* eslint complexity: [2, 18], max-statements: [2, 33] */
	shams = function hasSymbols() {
		if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
		if (typeof Symbol.iterator === 'symbol') { return true; }

		/** @type {{ [k in symbol]?: unknown }} */
		var obj = {};
		var sym = Symbol('test');
		var symObj = Object(sym);
		if (typeof sym === 'string') { return false; }

		if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
		if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

		// temp disabled per https://github.com/ljharb/object.assign/issues/17
		// if (sym instanceof Symbol) { return false; }
		// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
		// if (!(symObj instanceof Symbol)) { return false; }

		// if (typeof Symbol.prototype.toString !== 'function') { return false; }
		// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

		var symVal = 42;
		obj[sym] = symVal;
		for (var _ in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
		if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

		if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

		var syms = Object.getOwnPropertySymbols(obj);
		if (syms.length !== 1 || syms[0] !== sym) { return false; }

		if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

		if (typeof Object.getOwnPropertyDescriptor === 'function') {
			// eslint-disable-next-line no-extra-parens
			var descriptor = /** @type {PropertyDescriptor} */ (Object.getOwnPropertyDescriptor(obj, sym));
			if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
		}

		return true;
	};
	return shams;
}

var hasSymbols$1;
var hasRequiredHasSymbols;

function requireHasSymbols () {
	if (hasRequiredHasSymbols) return hasSymbols$1;
	hasRequiredHasSymbols = 1;

	var origSymbol = typeof Symbol !== 'undefined' && Symbol;
	var hasSymbolSham = requireShams();

	/** @type {import('.')} */
	hasSymbols$1 = function hasNativeSymbols() {
		if (typeof origSymbol !== 'function') { return false; }
		if (typeof Symbol !== 'function') { return false; }
		if (typeof origSymbol('foo') !== 'symbol') { return false; }
		if (typeof Symbol('bar') !== 'symbol') { return false; }

		return hasSymbolSham();
	};
	return hasSymbols$1;
}

var Reflect_getPrototypeOf;
var hasRequiredReflect_getPrototypeOf;

function requireReflect_getPrototypeOf () {
	if (hasRequiredReflect_getPrototypeOf) return Reflect_getPrototypeOf;
	hasRequiredReflect_getPrototypeOf = 1;

	/** @type {import('./Reflect.getPrototypeOf')} */
	Reflect_getPrototypeOf = (typeof Reflect !== 'undefined' && Reflect.getPrototypeOf) || null;
	return Reflect_getPrototypeOf;
}

var Object_getPrototypeOf;
var hasRequiredObject_getPrototypeOf;

function requireObject_getPrototypeOf () {
	if (hasRequiredObject_getPrototypeOf) return Object_getPrototypeOf;
	hasRequiredObject_getPrototypeOf = 1;

	var $Object = requireEsObjectAtoms();

	/** @type {import('./Object.getPrototypeOf')} */
	Object_getPrototypeOf = $Object.getPrototypeOf || null;
	return Object_getPrototypeOf;
}

var implementation;
var hasRequiredImplementation;

function requireImplementation () {
	if (hasRequiredImplementation) return implementation;
	hasRequiredImplementation = 1;

	/* eslint no-invalid-this: 1 */

	var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
	var toStr = Object.prototype.toString;
	var max = Math.max;
	var funcType = '[object Function]';

	var concatty = function concatty(a, b) {
	    var arr = [];

	    for (var i = 0; i < a.length; i += 1) {
	        arr[i] = a[i];
	    }
	    for (var j = 0; j < b.length; j += 1) {
	        arr[j + a.length] = b[j];
	    }

	    return arr;
	};

	var slicy = function slicy(arrLike, offset) {
	    var arr = [];
	    for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
	        arr[j] = arrLike[i];
	    }
	    return arr;
	};

	var joiny = function (arr, joiner) {
	    var str = '';
	    for (var i = 0; i < arr.length; i += 1) {
	        str += arr[i];
	        if (i + 1 < arr.length) {
	            str += joiner;
	        }
	    }
	    return str;
	};

	implementation = function bind(that) {
	    var target = this;
	    if (typeof target !== 'function' || toStr.apply(target) !== funcType) {
	        throw new TypeError(ERROR_MESSAGE + target);
	    }
	    var args = slicy(arguments, 1);

	    var bound;
	    var binder = function () {
	        if (this instanceof bound) {
	            var result = target.apply(
	                this,
	                concatty(args, arguments)
	            );
	            if (Object(result) === result) {
	                return result;
	            }
	            return this;
	        }
	        return target.apply(
	            that,
	            concatty(args, arguments)
	        );

	    };

	    var boundLength = max(0, target.length - args.length);
	    var boundArgs = [];
	    for (var i = 0; i < boundLength; i++) {
	        boundArgs[i] = '$' + i;
	    }

	    bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);

	    if (target.prototype) {
	        var Empty = function Empty() {};
	        Empty.prototype = target.prototype;
	        bound.prototype = new Empty();
	        Empty.prototype = null;
	    }

	    return bound;
	};
	return implementation;
}

var functionBind;
var hasRequiredFunctionBind;

function requireFunctionBind () {
	if (hasRequiredFunctionBind) return functionBind;
	hasRequiredFunctionBind = 1;

	var implementation = requireImplementation();

	functionBind = Function.prototype.bind || implementation;
	return functionBind;
}

var functionCall;
var hasRequiredFunctionCall;

function requireFunctionCall () {
	if (hasRequiredFunctionCall) return functionCall;
	hasRequiredFunctionCall = 1;

	/** @type {import('./functionCall')} */
	functionCall = Function.prototype.call;
	return functionCall;
}

var functionApply;
var hasRequiredFunctionApply;

function requireFunctionApply () {
	if (hasRequiredFunctionApply) return functionApply;
	hasRequiredFunctionApply = 1;

	/** @type {import('./functionApply')} */
	functionApply = Function.prototype.apply;
	return functionApply;
}

var reflectApply;
var hasRequiredReflectApply;

function requireReflectApply () {
	if (hasRequiredReflectApply) return reflectApply;
	hasRequiredReflectApply = 1;

	/** @type {import('./reflectApply')} */
	reflectApply = typeof Reflect !== 'undefined' && Reflect && Reflect.apply;
	return reflectApply;
}

var actualApply;
var hasRequiredActualApply;

function requireActualApply () {
	if (hasRequiredActualApply) return actualApply;
	hasRequiredActualApply = 1;

	var bind = requireFunctionBind();

	var $apply = requireFunctionApply();
	var $call = requireFunctionCall();
	var $reflectApply = requireReflectApply();

	/** @type {import('./actualApply')} */
	actualApply = $reflectApply || bind.call($call, $apply);
	return actualApply;
}

var callBindApplyHelpers;
var hasRequiredCallBindApplyHelpers;

function requireCallBindApplyHelpers () {
	if (hasRequiredCallBindApplyHelpers) return callBindApplyHelpers;
	hasRequiredCallBindApplyHelpers = 1;

	var bind = requireFunctionBind();
	var $TypeError = requireType();

	var $call = requireFunctionCall();
	var $actualApply = requireActualApply();

	/** @type {(args: [Function, thisArg?: unknown, ...args: unknown[]]) => Function} TODO FIXME, find a way to use import('.') */
	callBindApplyHelpers = function callBindBasic(args) {
		if (args.length < 1 || typeof args[0] !== 'function') {
			throw new $TypeError('a function is required');
		}
		return $actualApply(bind, $call, args);
	};
	return callBindApplyHelpers;
}

var get;
var hasRequiredGet;

function requireGet () {
	if (hasRequiredGet) return get;
	hasRequiredGet = 1;

	var callBind = requireCallBindApplyHelpers();
	var gOPD = requireGopd();

	var hasProtoAccessor;
	try {
		// eslint-disable-next-line no-extra-parens, no-proto
		hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */ ([]).__proto__ === Array.prototype;
	} catch (e) {
		if (!e || typeof e !== 'object' || !('code' in e) || e.code !== 'ERR_PROTO_ACCESS') {
			throw e;
		}
	}

	// eslint-disable-next-line no-extra-parens
	var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, /** @type {keyof typeof Object.prototype} */ ('__proto__'));

	var $Object = Object;
	var $getPrototypeOf = $Object.getPrototypeOf;

	/** @type {import('./get')} */
	get = desc && typeof desc.get === 'function'
		? callBind([desc.get])
		: typeof $getPrototypeOf === 'function'
			? /** @type {import('./get')} */ function getDunder(value) {
				// eslint-disable-next-line eqeqeq
				return $getPrototypeOf(value == null ? value : $Object(value));
			}
			: false;
	return get;
}

var getProto$1;
var hasRequiredGetProto;

function requireGetProto () {
	if (hasRequiredGetProto) return getProto$1;
	hasRequiredGetProto = 1;

	var reflectGetProto = requireReflect_getPrototypeOf();
	var originalGetProto = requireObject_getPrototypeOf();

	var getDunderProto = requireGet();

	/** @type {import('.')} */
	getProto$1 = reflectGetProto
		? function getProto(O) {
			// @ts-expect-error TS can't narrow inside a closure, for some reason
			return reflectGetProto(O);
		}
		: originalGetProto
			? function getProto(O) {
				if (!O || (typeof O !== 'object' && typeof O !== 'function')) {
					throw new TypeError('getProto: not an object');
				}
				// @ts-expect-error TS can't narrow inside a closure, for some reason
				return originalGetProto(O);
			}
			: getDunderProto
				? function getProto(O) {
					// @ts-expect-error TS can't narrow inside a closure, for some reason
					return getDunderProto(O);
				}
				: null;
	return getProto$1;
}

var hasown;
var hasRequiredHasown;

function requireHasown () {
	if (hasRequiredHasown) return hasown;
	hasRequiredHasown = 1;

	var call = Function.prototype.call;
	var $hasOwn = Object.prototype.hasOwnProperty;
	var bind = requireFunctionBind();

	/** @type {import('.')} */
	hasown = bind.call(call, $hasOwn);
	return hasown;
}

var undefined$1;

var $Object = requireEsObjectAtoms();

var $Error = requireEsErrors();
var $EvalError = require_eval();
var $RangeError = requireRange$1();
var $ReferenceError = requireRef();
var $SyntaxError = requireSyntax();
var $TypeError = requireType();
var $URIError = requireUri();

var abs = requireAbs();
var floor = requireFloor();
var max = requireMax();
var min = requireMin();
var pow = requirePow();
var round = requireRound();
var sign$1 = requireSign();

var $Function = Function;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = requireGopd();
var $defineProperty = requireEsDefineProperty();

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = requireHasSymbols()();

var getProto = requireGetProto();
var $ObjectGPO = requireObject_getPrototypeOf();
var $ReflectGPO = requireReflect_getPrototypeOf();

var $apply = requireFunctionApply();
var $call = requireFunctionCall();

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined$1 : getProto(Uint8Array);

var INTRINSICS = {
	__proto__: null,
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined$1 : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined$1 : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined$1,
	'%AsyncFromSyncIteratorPrototype%': undefined$1,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined$1 : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined$1 : BigInt,
	'%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined$1 : BigInt64Array,
	'%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined$1 : BigUint64Array,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined$1 : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': $Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': $EvalError,
	'%Float16Array%': typeof Float16Array === 'undefined' ? undefined$1 : Float16Array,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined$1 : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined$1 : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined$1 : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined$1 : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined$1 : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined$1 : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined$1,
	'%Map%': typeof Map === 'undefined' ? undefined$1 : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto ? undefined$1 : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': $Object,
	'%Object.getOwnPropertyDescriptor%': $gOPD,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined$1 : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined$1 : Proxy,
	'%RangeError%': $RangeError,
	'%ReferenceError%': $ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined$1 : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined$1 : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto ? undefined$1 : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined$1 : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined$1,
	'%Symbol%': hasSymbols ? Symbol : undefined$1,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined$1 : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined$1 : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined$1 : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined$1 : Uint32Array,
	'%URIError%': $URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined$1 : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined$1 : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined$1 : WeakSet,

	'%Function.prototype.call%': $call,
	'%Function.prototype.apply%': $apply,
	'%Object.defineProperty%': $defineProperty,
	'%Object.getPrototypeOf%': $ObjectGPO,
	'%Math.abs%': abs,
	'%Math.floor%': floor,
	'%Math.max%': max,
	'%Math.min%': min,
	'%Math.pow%': pow,
	'%Math.round%': round,
	'%Math.sign%': sign$1,
	'%Reflect.getPrototypeOf%': $ReflectGPO
};

if (getProto) {
	try {
		null.error; // eslint-disable-line no-unused-expressions
	} catch (e) {
		// https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
		var errorProto = getProto(getProto(e));
		INTRINSICS['%Error.prototype%'] = errorProto;
	}
}

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen && getProto) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	__proto__: null,
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = requireFunctionBind();
var hasOwn = requireHasown();
var $concat = bind.call($call, Array.prototype.concat);
var $spliceApply = bind.call($apply, Array.prototype.splice);
var $replace = bind.call($call, String.prototype.replace);
var $strSlice = bind.call($call, String.prototype.slice);
var $exec = bind.call($call, RegExp.prototype.exec);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

var getIntrinsic = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	if ($exec(/^%?[^%]*%?$/, name) === null) {
		throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
	}
	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined$1;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};

var src$1 = {exports: {}};

var browser = {exports: {}};

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

var ms$1 = function (val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse$8(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse$8(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

var common;
var hasRequiredCommon;

function requireCommon () {
	if (hasRequiredCommon) return common;
	hasRequiredCommon = 1;
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 */

	function setup(env) {
		createDebug.debug = createDebug;
		createDebug.default = createDebug;
		createDebug.coerce = coerce;
		createDebug.disable = disable;
		createDebug.enable = enable;
		createDebug.enabled = enabled;
		createDebug.humanize = ms$1;
		createDebug.destroy = destroy;

		Object.keys(env).forEach(key => {
			createDebug[key] = env[key];
		});

		/**
		* The currently active debug mode names, and names to skip.
		*/

		createDebug.names = [];
		createDebug.skips = [];

		/**
		* Map of special "%n" handling functions, for the debug "format" argument.
		*
		* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
		*/
		createDebug.formatters = {};

		/**
		* Selects a color for a debug namespace
		* @param {String} namespace The namespace string for the debug instance to be colored
		* @return {Number|String} An ANSI color code for the given namespace
		* @api private
		*/
		function selectColor(namespace) {
			let hash = 0;

			for (let i = 0; i < namespace.length; i++) {
				hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
				hash |= 0; // Convert to 32bit integer
			}

			return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
		}
		createDebug.selectColor = selectColor;

		/**
		* Create a debugger with the given `namespace`.
		*
		* @param {String} namespace
		* @return {Function}
		* @api public
		*/
		function createDebug(namespace) {
			let prevTime;
			let enableOverride = null;
			let namespacesCache;
			let enabledCache;

			function debug(...args) {
				// Disabled?
				if (!debug.enabled) {
					return;
				}

				const self = debug;

				// Set `diff` timestamp
				const curr = Number(new Date());
				const ms = curr - (prevTime || curr);
				self.diff = ms;
				self.prev = prevTime;
				self.curr = curr;
				prevTime = curr;

				args[0] = createDebug.coerce(args[0]);

				if (typeof args[0] !== 'string') {
					// Anything else let's inspect with %O
					args.unshift('%O');
				}

				// Apply any `formatters` transformations
				let index = 0;
				args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
					// If we encounter an escaped % then don't increase the array index
					if (match === '%%') {
						return '%';
					}
					index++;
					const formatter = createDebug.formatters[format];
					if (typeof formatter === 'function') {
						const val = args[index];
						match = formatter.call(self, val);

						// Now we need to remove `args[index]` since it's inlined in the `format`
						args.splice(index, 1);
						index--;
					}
					return match;
				});

				// Apply env-specific formatting (colors, etc.)
				createDebug.formatArgs.call(self, args);

				const logFn = self.log || createDebug.log;
				logFn.apply(self, args);
			}

			debug.namespace = namespace;
			debug.useColors = createDebug.useColors();
			debug.color = createDebug.selectColor(namespace);
			debug.extend = extend;
			debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

			Object.defineProperty(debug, 'enabled', {
				enumerable: true,
				configurable: false,
				get: () => {
					if (enableOverride !== null) {
						return enableOverride;
					}
					if (namespacesCache !== createDebug.namespaces) {
						namespacesCache = createDebug.namespaces;
						enabledCache = createDebug.enabled(namespace);
					}

					return enabledCache;
				},
				set: v => {
					enableOverride = v;
				}
			});

			// Env-specific initialization logic for debug instances
			if (typeof createDebug.init === 'function') {
				createDebug.init(debug);
			}

			return debug;
		}

		function extend(namespace, delimiter) {
			const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
			newDebug.log = this.log;
			return newDebug;
		}

		/**
		* Enables a debug mode by namespaces. This can include modes
		* separated by a colon and wildcards.
		*
		* @param {String} namespaces
		* @api public
		*/
		function enable(namespaces) {
			createDebug.save(namespaces);
			createDebug.namespaces = namespaces;

			createDebug.names = [];
			createDebug.skips = [];

			const split = (typeof namespaces === 'string' ? namespaces : '')
				.trim()
				.replace(' ', ',')
				.split(',')
				.filter(Boolean);

			for (const ns of split) {
				if (ns[0] === '-') {
					createDebug.skips.push(ns.slice(1));
				} else {
					createDebug.names.push(ns);
				}
			}
		}

		/**
		 * Checks if the given string matches a namespace template, honoring
		 * asterisks as wildcards.
		 *
		 * @param {String} search
		 * @param {String} template
		 * @return {Boolean}
		 */
		function matchesTemplate(search, template) {
			let searchIndex = 0;
			let templateIndex = 0;
			let starIndex = -1;
			let matchIndex = 0;

			while (searchIndex < search.length) {
				if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === '*')) {
					// Match character or proceed with wildcard
					if (template[templateIndex] === '*') {
						starIndex = templateIndex;
						matchIndex = searchIndex;
						templateIndex++; // Skip the '*'
					} else {
						searchIndex++;
						templateIndex++;
					}
				} else if (starIndex !== -1) { // eslint-disable-line no-negated-condition
					// Backtrack to the last '*' and try to match more characters
					templateIndex = starIndex + 1;
					matchIndex++;
					searchIndex = matchIndex;
				} else {
					return false; // No match
				}
			}

			// Handle trailing '*' in template
			while (templateIndex < template.length && template[templateIndex] === '*') {
				templateIndex++;
			}

			return templateIndex === template.length;
		}

		/**
		* Disable debug output.
		*
		* @return {String} namespaces
		* @api public
		*/
		function disable() {
			const namespaces = [
				...createDebug.names,
				...createDebug.skips.map(namespace => '-' + namespace)
			].join(',');
			createDebug.enable('');
			return namespaces;
		}

		/**
		* Returns true if the given mode name is enabled, false otherwise.
		*
		* @param {String} name
		* @return {Boolean}
		* @api public
		*/
		function enabled(name) {
			for (const skip of createDebug.skips) {
				if (matchesTemplate(name, skip)) {
					return false;
				}
			}

			for (const ns of createDebug.names) {
				if (matchesTemplate(name, ns)) {
					return true;
				}
			}

			return false;
		}

		/**
		* Coerce `val`.
		*
		* @param {Mixed} val
		* @return {Mixed}
		* @api private
		*/
		function coerce(val) {
			if (val instanceof Error) {
				return val.stack || val.message;
			}
			return val;
		}

		/**
		* XXX DO NOT USE. This is a temporary stub function.
		* XXX It WILL be removed in the next major release.
		*/
		function destroy() {
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}

		createDebug.enable(createDebug.load());

		return createDebug;
	}

	common = setup;
	return common;
}

/* eslint-env browser */

var hasRequiredBrowser;

function requireBrowser () {
	if (hasRequiredBrowser) return browser.exports;
	hasRequiredBrowser = 1;
	(function (module, exports) {
		/**
		 * This is the web browser implementation of `debug()`.
		 */

		exports.formatArgs = formatArgs;
		exports.save = save;
		exports.load = load;
		exports.useColors = useColors;
		exports.storage = localstorage();
		exports.destroy = (() => {
			let warned = false;

			return () => {
				if (!warned) {
					warned = true;
					console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
				}
			};
		})();

		/**
		 * Colors.
		 */

		exports.colors = [
			'#0000CC',
			'#0000FF',
			'#0033CC',
			'#0033FF',
			'#0066CC',
			'#0066FF',
			'#0099CC',
			'#0099FF',
			'#00CC00',
			'#00CC33',
			'#00CC66',
			'#00CC99',
			'#00CCCC',
			'#00CCFF',
			'#3300CC',
			'#3300FF',
			'#3333CC',
			'#3333FF',
			'#3366CC',
			'#3366FF',
			'#3399CC',
			'#3399FF',
			'#33CC00',
			'#33CC33',
			'#33CC66',
			'#33CC99',
			'#33CCCC',
			'#33CCFF',
			'#6600CC',
			'#6600FF',
			'#6633CC',
			'#6633FF',
			'#66CC00',
			'#66CC33',
			'#9900CC',
			'#9900FF',
			'#9933CC',
			'#9933FF',
			'#99CC00',
			'#99CC33',
			'#CC0000',
			'#CC0033',
			'#CC0066',
			'#CC0099',
			'#CC00CC',
			'#CC00FF',
			'#CC3300',
			'#CC3333',
			'#CC3366',
			'#CC3399',
			'#CC33CC',
			'#CC33FF',
			'#CC6600',
			'#CC6633',
			'#CC9900',
			'#CC9933',
			'#CCCC00',
			'#CCCC33',
			'#FF0000',
			'#FF0033',
			'#FF0066',
			'#FF0099',
			'#FF00CC',
			'#FF00FF',
			'#FF3300',
			'#FF3333',
			'#FF3366',
			'#FF3399',
			'#FF33CC',
			'#FF33FF',
			'#FF6600',
			'#FF6633',
			'#FF9900',
			'#FF9933',
			'#FFCC00',
			'#FFCC33'
		];

		/**
		 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
		 * and the Firebug extension (any Firefox version) are known
		 * to support "%c" CSS customizations.
		 *
		 * TODO: add a `localStorage` variable to explicitly enable/disable colors
		 */

		// eslint-disable-next-line complexity
		function useColors() {
			// NB: In an Electron preload script, document will be defined but not fully
			// initialized. Since we know we're in Chrome, we'll just detect this case
			// explicitly
			if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
				return true;
			}

			// Internet Explorer and Edge do not support colors.
			if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
				return false;
			}

			let m;

			// Is webkit? http://stackoverflow.com/a/16459606/376773
			// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
			// eslint-disable-next-line no-return-assign
			return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
				// Is firebug? http://stackoverflow.com/a/398120/376773
				(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
				// Is firefox >= v31?
				// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
				(typeof navigator !== 'undefined' && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31) ||
				// Double check webkit in userAgent just in case we are in a worker
				(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
		}

		/**
		 * Colorize log arguments if enabled.
		 *
		 * @api public
		 */

		function formatArgs(args) {
			args[0] = (this.useColors ? '%c' : '') +
				this.namespace +
				(this.useColors ? ' %c' : ' ') +
				args[0] +
				(this.useColors ? '%c ' : ' ') +
				'+' + module.exports.humanize(this.diff);

			if (!this.useColors) {
				return;
			}

			const c = 'color: ' + this.color;
			args.splice(1, 0, c, 'color: inherit');

			// The final "%c" is somewhat tricky, because there could be other
			// arguments passed either before or after the %c, so we need to
			// figure out the correct index to insert the CSS into
			let index = 0;
			let lastC = 0;
			args[0].replace(/%[a-zA-Z%]/g, match => {
				if (match === '%%') {
					return;
				}
				index++;
				if (match === '%c') {
					// We only are interested in the *last* %c
					// (the user may have provided their own)
					lastC = index;
				}
			});

			args.splice(lastC, 0, c);
		}

		/**
		 * Invokes `console.debug()` when available.
		 * No-op when `console.debug` is not a "function".
		 * If `console.debug` is not available, falls back
		 * to `console.log`.
		 *
		 * @api public
		 */
		exports.log = console.debug || console.log || (() => {});

		/**
		 * Save `namespaces`.
		 *
		 * @param {String} namespaces
		 * @api private
		 */
		function save(namespaces) {
			try {
				if (namespaces) {
					exports.storage.setItem('debug', namespaces);
				} else {
					exports.storage.removeItem('debug');
				}
			} catch (error) {
				// Swallow
				// XXX (@Qix-) should we be logging these?
			}
		}

		/**
		 * Load `namespaces`.
		 *
		 * @return {String} returns the previously persisted debug modes
		 * @api private
		 */
		function load() {
			let r;
			try {
				r = exports.storage.getItem('debug');
			} catch (error) {
				// Swallow
				// XXX (@Qix-) should we be logging these?
			}

			// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
			if (!r && typeof process !== 'undefined' && 'env' in process) {
				r = process.env.DEBUG;
			}

			return r;
		}

		/**
		 * Localstorage attempts to return the localstorage.
		 *
		 * This is necessary because safari throws
		 * when a user disables cookies/localstorage
		 * and you attempt to access it.
		 *
		 * @return {LocalStorage}
		 * @api private
		 */

		function localstorage() {
			try {
				// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
				// The Browser also has localStorage in the global context.
				return localStorage;
			} catch (error) {
				// Swallow
				// XXX (@Qix-) should we be logging these?
			}
		}

		module.exports = requireCommon()(exports);

		const {formatters} = module.exports;

		/**
		 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
		 */

		formatters.j = function (v) {
			try {
				return JSON.stringify(v);
			} catch (error) {
				return '[UnexpectedJSONParseError]: ' + error.message;
			}
		}; 
	} (browser, browser.exports));
	return browser.exports;
}

var node = {exports: {}};

var hasFlag;
var hasRequiredHasFlag;

function requireHasFlag () {
	if (hasRequiredHasFlag) return hasFlag;
	hasRequiredHasFlag = 1;

	hasFlag = (flag, argv = process.argv) => {
		const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
		const position = argv.indexOf(prefix + flag);
		const terminatorPosition = argv.indexOf('--');
		return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
	};
	return hasFlag;
}

var supportsColor_1;
var hasRequiredSupportsColor;

function requireSupportsColor () {
	if (hasRequiredSupportsColor) return supportsColor_1;
	hasRequiredSupportsColor = 1;
	const os = require$$0$3;
	const tty = require$$1$1;
	const hasFlag = requireHasFlag();

	const {env} = process;

	let forceColor;
	if (hasFlag('no-color') ||
		hasFlag('no-colors') ||
		hasFlag('color=false') ||
		hasFlag('color=never')) {
		forceColor = 0;
	} else if (hasFlag('color') ||
		hasFlag('colors') ||
		hasFlag('color=true') ||
		hasFlag('color=always')) {
		forceColor = 1;
	}

	if ('FORCE_COLOR' in env) {
		if (env.FORCE_COLOR === 'true') {
			forceColor = 1;
		} else if (env.FORCE_COLOR === 'false') {
			forceColor = 0;
		} else {
			forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
		}
	}

	function translateLevel(level) {
		if (level === 0) {
			return false;
		}

		return {
			level,
			hasBasic: true,
			has256: level >= 2,
			has16m: level >= 3
		};
	}

	function supportsColor(haveStream, streamIsTTY) {
		if (forceColor === 0) {
			return 0;
		}

		if (hasFlag('color=16m') ||
			hasFlag('color=full') ||
			hasFlag('color=truecolor')) {
			return 3;
		}

		if (hasFlag('color=256')) {
			return 2;
		}

		if (haveStream && !streamIsTTY && forceColor === undefined) {
			return 0;
		}

		const min = forceColor || 0;

		if (env.TERM === 'dumb') {
			return min;
		}

		if (process.platform === 'win32') {
			// Windows 10 build 10586 is the first Windows release that supports 256 colors.
			// Windows 10 build 14931 is the first release that supports 16m/TrueColor.
			const osRelease = os.release().split('.');
			if (
				Number(osRelease[0]) >= 10 &&
				Number(osRelease[2]) >= 10586
			) {
				return Number(osRelease[2]) >= 14931 ? 3 : 2;
			}

			return 1;
		}

		if ('CI' in env) {
			if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'GITHUB_ACTIONS', 'BUILDKITE'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
				return 1;
			}

			return min;
		}

		if ('TEAMCITY_VERSION' in env) {
			return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
		}

		if (env.COLORTERM === 'truecolor') {
			return 3;
		}

		if ('TERM_PROGRAM' in env) {
			const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

			switch (env.TERM_PROGRAM) {
				case 'iTerm.app':
					return version >= 3 ? 3 : 2;
				case 'Apple_Terminal':
					return 2;
				// No default
			}
		}

		if (/-256(color)?$/i.test(env.TERM)) {
			return 2;
		}

		if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
			return 1;
		}

		if ('COLORTERM' in env) {
			return 1;
		}

		return min;
	}

	function getSupportLevel(stream) {
		const level = supportsColor(stream, stream && stream.isTTY);
		return translateLevel(level);
	}

	supportsColor_1 = {
		supportsColor: getSupportLevel,
		stdout: translateLevel(supportsColor(true, tty.isatty(1))),
		stderr: translateLevel(supportsColor(true, tty.isatty(2)))
	};
	return supportsColor_1;
}

/**
 * Module dependencies.
 */

var hasRequiredNode;

function requireNode () {
	if (hasRequiredNode) return node.exports;
	hasRequiredNode = 1;
	(function (module, exports) {
		const tty = require$$1$1;
		const util = require$$1$2;

		/**
		 * This is the Node.js implementation of `debug()`.
		 */

		exports.init = init;
		exports.log = log;
		exports.formatArgs = formatArgs;
		exports.save = save;
		exports.load = load;
		exports.useColors = useColors;
		exports.destroy = util.deprecate(
			() => {},
			'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
		);

		/**
		 * Colors.
		 */

		exports.colors = [6, 2, 3, 4, 5, 1];

		try {
			// Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
			// eslint-disable-next-line import/no-extraneous-dependencies
			const supportsColor = requireSupportsColor();

			if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
				exports.colors = [
					20,
					21,
					26,
					27,
					32,
					33,
					38,
					39,
					40,
					41,
					42,
					43,
					44,
					45,
					56,
					57,
					62,
					63,
					68,
					69,
					74,
					75,
					76,
					77,
					78,
					79,
					80,
					81,
					92,
					93,
					98,
					99,
					112,
					113,
					128,
					129,
					134,
					135,
					148,
					149,
					160,
					161,
					162,
					163,
					164,
					165,
					166,
					167,
					168,
					169,
					170,
					171,
					172,
					173,
					178,
					179,
					184,
					185,
					196,
					197,
					198,
					199,
					200,
					201,
					202,
					203,
					204,
					205,
					206,
					207,
					208,
					209,
					214,
					215,
					220,
					221
				];
			}
		} catch (error) {
			// Swallow - we only care if `supports-color` is available; it doesn't have to be.
		}

		/**
		 * Build up the default `inspectOpts` object from the environment variables.
		 *
		 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
		 */

		exports.inspectOpts = Object.keys(process.env).filter(key => {
			return /^debug_/i.test(key);
		}).reduce((obj, key) => {
			// Camel-case
			const prop = key
				.substring(6)
				.toLowerCase()
				.replace(/_([a-z])/g, (_, k) => {
					return k.toUpperCase();
				});

			// Coerce string value into JS value
			let val = process.env[key];
			if (/^(yes|on|true|enabled)$/i.test(val)) {
				val = true;
			} else if (/^(no|off|false|disabled)$/i.test(val)) {
				val = false;
			} else if (val === 'null') {
				val = null;
			} else {
				val = Number(val);
			}

			obj[prop] = val;
			return obj;
		}, {});

		/**
		 * Is stdout a TTY? Colored output is enabled when `true`.
		 */

		function useColors() {
			return 'colors' in exports.inspectOpts ?
				Boolean(exports.inspectOpts.colors) :
				tty.isatty(process.stderr.fd);
		}

		/**
		 * Adds ANSI color escape codes if enabled.
		 *
		 * @api public
		 */

		function formatArgs(args) {
			const {namespace: name, useColors} = this;

			if (useColors) {
				const c = this.color;
				const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
				const prefix = `  ${colorCode};1m${name} \u001B[0m`;

				args[0] = prefix + args[0].split('\n').join('\n' + prefix);
				args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
			} else {
				args[0] = getDate() + name + ' ' + args[0];
			}
		}

		function getDate() {
			if (exports.inspectOpts.hideDate) {
				return '';
			}
			return new Date().toISOString() + ' ';
		}

		/**
		 * Invokes `util.formatWithOptions()` with the specified arguments and writes to stderr.
		 */

		function log(...args) {
			return process.stderr.write(util.formatWithOptions(exports.inspectOpts, ...args) + '\n');
		}

		/**
		 * Save `namespaces`.
		 *
		 * @param {String} namespaces
		 * @api private
		 */
		function save(namespaces) {
			if (namespaces) {
				process.env.DEBUG = namespaces;
			} else {
				// If you set a process.env field to null or undefined, it gets cast to the
				// string 'null' or 'undefined'. Just delete instead.
				delete process.env.DEBUG;
			}
		}

		/**
		 * Load `namespaces`.
		 *
		 * @return {String} returns the previously persisted debug modes
		 * @api private
		 */

		function load() {
			return process.env.DEBUG;
		}

		/**
		 * Init logic for `debug` instances.
		 *
		 * Create a new `inspectOpts` object in case `useColors` is set
		 * differently for a particular `debug` instance.
		 */

		function init(debug) {
			debug.inspectOpts = {};

			const keys = Object.keys(exports.inspectOpts);
			for (let i = 0; i < keys.length; i++) {
				debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
			}
		}

		module.exports = requireCommon()(exports);

		const {formatters} = module.exports;

		/**
		 * Map %o to `util.inspect()`, all on a single line.
		 */

		formatters.o = function (v) {
			this.inspectOpts.colors = this.useColors;
			return util.inspect(v, this.inspectOpts)
				.split('\n')
				.map(str => str.trim())
				.join(' ');
		};

		/**
		 * Map %O to `util.inspect()`, allowing multiple lines if needed.
		 */

		formatters.O = function (v) {
			this.inspectOpts.colors = this.useColors;
			return util.inspect(v, this.inspectOpts);
		}; 
	} (node, node.exports));
	return node.exports;
}

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */

var hasRequiredSrc;

function requireSrc () {
	if (hasRequiredSrc) return src$1.exports;
	hasRequiredSrc = 1;
	if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
		src$1.exports = requireBrowser();
	} else {
		src$1.exports = requireNode();
	}
	return src$1.exports;
}

var util$4;
(function (util) {
    util.assertEqual = (val) => val;
    function assertIs(_arg) { }
    util.assertIs = assertIs;
    function assertNever(_x) {
        throw new Error();
    }
    util.assertNever = assertNever;
    util.arrayToEnum = (items) => {
        const obj = {};
        for (const item of items) {
            obj[item] = item;
        }
        return obj;
    };
    util.getValidEnumValues = (obj) => {
        const validKeys = util.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
        const filtered = {};
        for (const k of validKeys) {
            filtered[k] = obj[k];
        }
        return util.objectValues(filtered);
    };
    util.objectValues = (obj) => {
        return util.objectKeys(obj).map(function (e) {
            return obj[e];
        });
    };
    util.objectKeys = typeof Object.keys === "function" // eslint-disable-line ban/ban
        ? (obj) => Object.keys(obj) // eslint-disable-line ban/ban
        : (object) => {
            const keys = [];
            for (const key in object) {
                if (Object.prototype.hasOwnProperty.call(object, key)) {
                    keys.push(key);
                }
            }
            return keys;
        };
    util.find = (arr, checker) => {
        for (const item of arr) {
            if (checker(item))
                return item;
        }
        return undefined;
    };
    util.isInteger = typeof Number.isInteger === "function"
        ? (val) => Number.isInteger(val) // eslint-disable-line ban/ban
        : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
    function joinValues(array, separator = " | ") {
        return array
            .map((val) => (typeof val === "string" ? `'${val}'` : val))
            .join(separator);
    }
    util.joinValues = joinValues;
    util.jsonStringifyReplacer = (_, value) => {
        if (typeof value === "bigint") {
            return value.toString();
        }
        return value;
    };
})(util$4 || (util$4 = {}));
var objectUtil;
(function (objectUtil) {
    objectUtil.mergeShapes = (first, second) => {
        return {
            ...first,
            ...second, // second overwrites first
        };
    };
})(objectUtil || (objectUtil = {}));
const ZodParsedType = util$4.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
]);
const getParsedType = (data) => {
    const t = typeof data;
    switch (t) {
        case "undefined":
            return ZodParsedType.undefined;
        case "string":
            return ZodParsedType.string;
        case "number":
            return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
        case "boolean":
            return ZodParsedType.boolean;
        case "function":
            return ZodParsedType.function;
        case "bigint":
            return ZodParsedType.bigint;
        case "symbol":
            return ZodParsedType.symbol;
        case "object":
            if (Array.isArray(data)) {
                return ZodParsedType.array;
            }
            if (data === null) {
                return ZodParsedType.null;
            }
            if (data.then &&
                typeof data.then === "function" &&
                data.catch &&
                typeof data.catch === "function") {
                return ZodParsedType.promise;
            }
            if (typeof Map !== "undefined" && data instanceof Map) {
                return ZodParsedType.map;
            }
            if (typeof Set !== "undefined" && data instanceof Set) {
                return ZodParsedType.set;
            }
            if (typeof Date !== "undefined" && data instanceof Date) {
                return ZodParsedType.date;
            }
            return ZodParsedType.object;
        default:
            return ZodParsedType.unknown;
    }
};

const ZodIssueCode = util$4.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
]);
const quotelessJson = (obj) => {
    const json = JSON.stringify(obj, null, 2);
    return json.replace(/"([^"]+)":/g, "$1:");
};
class ZodError extends Error {
    get errors() {
        return this.issues;
    }
    constructor(issues) {
        super();
        this.issues = [];
        this.addIssue = (sub) => {
            this.issues = [...this.issues, sub];
        };
        this.addIssues = (subs = []) => {
            this.issues = [...this.issues, ...subs];
        };
        const actualProto = new.target.prototype;
        if (Object.setPrototypeOf) {
            // eslint-disable-next-line ban/ban
            Object.setPrototypeOf(this, actualProto);
        }
        else {
            this.__proto__ = actualProto;
        }
        this.name = "ZodError";
        this.issues = issues;
    }
    format(_mapper) {
        const mapper = _mapper ||
            function (issue) {
                return issue.message;
            };
        const fieldErrors = { _errors: [] };
        const processError = (error) => {
            for (const issue of error.issues) {
                if (issue.code === "invalid_union") {
                    issue.unionErrors.map(processError);
                }
                else if (issue.code === "invalid_return_type") {
                    processError(issue.returnTypeError);
                }
                else if (issue.code === "invalid_arguments") {
                    processError(issue.argumentsError);
                }
                else if (issue.path.length === 0) {
                    fieldErrors._errors.push(mapper(issue));
                }
                else {
                    let curr = fieldErrors;
                    let i = 0;
                    while (i < issue.path.length) {
                        const el = issue.path[i];
                        const terminal = i === issue.path.length - 1;
                        if (!terminal) {
                            curr[el] = curr[el] || { _errors: [] };
                            // if (typeof el === "string") {
                            //   curr[el] = curr[el] || { _errors: [] };
                            // } else if (typeof el === "number") {
                            //   const errorArray: any = [];
                            //   errorArray._errors = [];
                            //   curr[el] = curr[el] || errorArray;
                            // }
                        }
                        else {
                            curr[el] = curr[el] || { _errors: [] };
                            curr[el]._errors.push(mapper(issue));
                        }
                        curr = curr[el];
                        i++;
                    }
                }
            }
        };
        processError(this);
        return fieldErrors;
    }
    static assert(value) {
        if (!(value instanceof ZodError)) {
            throw new Error(`Not a ZodError: ${value}`);
        }
    }
    toString() {
        return this.message;
    }
    get message() {
        return JSON.stringify(this.issues, util$4.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
        return this.issues.length === 0;
    }
    flatten(mapper = (issue) => issue.message) {
        const fieldErrors = {};
        const formErrors = [];
        for (const sub of this.issues) {
            if (sub.path.length > 0) {
                fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
                fieldErrors[sub.path[0]].push(mapper(sub));
            }
            else {
                formErrors.push(mapper(sub));
            }
        }
        return { formErrors, fieldErrors };
    }
    get formErrors() {
        return this.flatten();
    }
}
ZodError.create = (issues) => {
    const error = new ZodError(issues);
    return error;
};

const errorMap = (issue, _ctx) => {
    let message;
    switch (issue.code) {
        case ZodIssueCode.invalid_type:
            if (issue.received === ZodParsedType.undefined) {
                message = "Required";
            }
            else {
                message = `Expected ${issue.expected}, received ${issue.received}`;
            }
            break;
        case ZodIssueCode.invalid_literal:
            message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util$4.jsonStringifyReplacer)}`;
            break;
        case ZodIssueCode.unrecognized_keys:
            message = `Unrecognized key(s) in object: ${util$4.joinValues(issue.keys, ", ")}`;
            break;
        case ZodIssueCode.invalid_union:
            message = `Invalid input`;
            break;
        case ZodIssueCode.invalid_union_discriminator:
            message = `Invalid discriminator value. Expected ${util$4.joinValues(issue.options)}`;
            break;
        case ZodIssueCode.invalid_enum_value:
            message = `Invalid enum value. Expected ${util$4.joinValues(issue.options)}, received '${issue.received}'`;
            break;
        case ZodIssueCode.invalid_arguments:
            message = `Invalid function arguments`;
            break;
        case ZodIssueCode.invalid_return_type:
            message = `Invalid function return type`;
            break;
        case ZodIssueCode.invalid_date:
            message = `Invalid date`;
            break;
        case ZodIssueCode.invalid_string:
            if (typeof issue.validation === "object") {
                if ("includes" in issue.validation) {
                    message = `Invalid input: must include "${issue.validation.includes}"`;
                    if (typeof issue.validation.position === "number") {
                        message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
                    }
                }
                else if ("startsWith" in issue.validation) {
                    message = `Invalid input: must start with "${issue.validation.startsWith}"`;
                }
                else if ("endsWith" in issue.validation) {
                    message = `Invalid input: must end with "${issue.validation.endsWith}"`;
                }
                else {
                    util$4.assertNever(issue.validation);
                }
            }
            else if (issue.validation !== "regex") {
                message = `Invalid ${issue.validation}`;
            }
            else {
                message = "Invalid";
            }
            break;
        case ZodIssueCode.too_small:
            if (issue.type === "array")
                message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
            else if (issue.type === "string")
                message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
            else if (issue.type === "number")
                message = `Number must be ${issue.exact
                    ? `exactly equal to `
                    : issue.inclusive
                        ? `greater than or equal to `
                        : `greater than `}${issue.minimum}`;
            else if (issue.type === "date")
                message = `Date must be ${issue.exact
                    ? `exactly equal to `
                    : issue.inclusive
                        ? `greater than or equal to `
                        : `greater than `}${new Date(Number(issue.minimum))}`;
            else
                message = "Invalid input";
            break;
        case ZodIssueCode.too_big:
            if (issue.type === "array")
                message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
            else if (issue.type === "string")
                message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
            else if (issue.type === "number")
                message = `Number must be ${issue.exact
                    ? `exactly`
                    : issue.inclusive
                        ? `less than or equal to`
                        : `less than`} ${issue.maximum}`;
            else if (issue.type === "bigint")
                message = `BigInt must be ${issue.exact
                    ? `exactly`
                    : issue.inclusive
                        ? `less than or equal to`
                        : `less than`} ${issue.maximum}`;
            else if (issue.type === "date")
                message = `Date must be ${issue.exact
                    ? `exactly`
                    : issue.inclusive
                        ? `smaller than or equal to`
                        : `smaller than`} ${new Date(Number(issue.maximum))}`;
            else
                message = "Invalid input";
            break;
        case ZodIssueCode.custom:
            message = `Invalid input`;
            break;
        case ZodIssueCode.invalid_intersection_types:
            message = `Intersection results could not be merged`;
            break;
        case ZodIssueCode.not_multiple_of:
            message = `Number must be a multiple of ${issue.multipleOf}`;
            break;
        case ZodIssueCode.not_finite:
            message = "Number must be finite";
            break;
        default:
            message = _ctx.defaultError;
            util$4.assertNever(issue);
    }
    return { message };
};

let overrideErrorMap = errorMap;
function setErrorMap(map) {
    overrideErrorMap = map;
}
function getErrorMap() {
    return overrideErrorMap;
}

const makeIssue = (params) => {
    const { data, path, errorMaps, issueData } = params;
    const fullPath = [...path, ...(issueData.path || [])];
    const fullIssue = {
        ...issueData,
        path: fullPath,
    };
    if (issueData.message !== undefined) {
        return {
            ...issueData,
            path: fullPath,
            message: issueData.message,
        };
    }
    let errorMessage = "";
    const maps = errorMaps
        .filter((m) => !!m)
        .slice()
        .reverse();
    for (const map of maps) {
        errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
    }
    return {
        ...issueData,
        path: fullPath,
        message: errorMessage,
    };
};
const EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
    const overrideMap = getErrorMap();
    const issue = makeIssue({
        issueData: issueData,
        data: ctx.data,
        path: ctx.path,
        errorMaps: [
            ctx.common.contextualErrorMap, // contextual error map is first priority
            ctx.schemaErrorMap, // then schema-bound map if available
            overrideMap, // then global override map
            overrideMap === errorMap ? undefined : errorMap, // then global default map
        ].filter((x) => !!x),
    });
    ctx.common.issues.push(issue);
}
class ParseStatus {
    constructor() {
        this.value = "valid";
    }
    dirty() {
        if (this.value === "valid")
            this.value = "dirty";
    }
    abort() {
        if (this.value !== "aborted")
            this.value = "aborted";
    }
    static mergeArray(status, results) {
        const arrayValue = [];
        for (const s of results) {
            if (s.status === "aborted")
                return INVALID;
            if (s.status === "dirty")
                status.dirty();
            arrayValue.push(s.value);
        }
        return { status: status.value, value: arrayValue };
    }
    static async mergeObjectAsync(status, pairs) {
        const syncPairs = [];
        for (const pair of pairs) {
            const key = await pair.key;
            const value = await pair.value;
            syncPairs.push({
                key,
                value,
            });
        }
        return ParseStatus.mergeObjectSync(status, syncPairs);
    }
    static mergeObjectSync(status, pairs) {
        const finalObject = {};
        for (const pair of pairs) {
            const { key, value } = pair;
            if (key.status === "aborted")
                return INVALID;
            if (value.status === "aborted")
                return INVALID;
            if (key.status === "dirty")
                status.dirty();
            if (value.status === "dirty")
                status.dirty();
            if (key.value !== "__proto__" &&
                (typeof value.value !== "undefined" || pair.alwaysSet)) {
                finalObject[key.value] = value.value;
            }
        }
        return { status: status.value, value: finalObject };
    }
}
const INVALID = Object.freeze({
    status: "aborted",
});
const DIRTY = (value) => ({ status: "dirty", value });
const OK = (value) => ({ status: "valid", value });
const isAborted = (x) => x.status === "aborted";
const isDirty = (x) => x.status === "dirty";
const isValid = (x) => x.status === "valid";
const isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var errorUtil;
(function (errorUtil) {
    errorUtil.errToObj = (message) => typeof message === "string" ? { message } : message || {};
    errorUtil.toString = (message) => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
})(errorUtil || (errorUtil = {}));

var _ZodEnum_cache, _ZodNativeEnum_cache;
class ParseInputLazyPath {
    constructor(parent, value, path, key) {
        this._cachedPath = [];
        this.parent = parent;
        this.data = value;
        this._path = path;
        this._key = key;
    }
    get path() {
        if (!this._cachedPath.length) {
            if (this._key instanceof Array) {
                this._cachedPath.push(...this._path, ...this._key);
            }
            else {
                this._cachedPath.push(...this._path, this._key);
            }
        }
        return this._cachedPath;
    }
}
const handleResult = (ctx, result) => {
    if (isValid(result)) {
        return { success: true, data: result.value };
    }
    else {
        if (!ctx.common.issues.length) {
            throw new Error("Validation failed but no issues detected.");
        }
        return {
            success: false,
            get error() {
                if (this._error)
                    return this._error;
                const error = new ZodError(ctx.common.issues);
                this._error = error;
                return this._error;
            },
        };
    }
};
function processCreateParams(params) {
    if (!params)
        return {};
    const { errorMap, invalid_type_error, required_error, description } = params;
    if (errorMap && (invalid_type_error || required_error)) {
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    }
    if (errorMap)
        return { errorMap: errorMap, description };
    const customMap = (iss, ctx) => {
        var _a, _b;
        const { message } = params;
        if (iss.code === "invalid_enum_value") {
            return { message: message !== null && message !== void 0 ? message : ctx.defaultError };
        }
        if (typeof ctx.data === "undefined") {
            return { message: (_a = message !== null && message !== void 0 ? message : required_error) !== null && _a !== void 0 ? _a : ctx.defaultError };
        }
        if (iss.code !== "invalid_type")
            return { message: ctx.defaultError };
        return { message: (_b = message !== null && message !== void 0 ? message : invalid_type_error) !== null && _b !== void 0 ? _b : ctx.defaultError };
    };
    return { errorMap: customMap, description };
}
class ZodType {
    get description() {
        return this._def.description;
    }
    _getType(input) {
        return getParsedType(input.data);
    }
    _getOrReturnCtx(input, ctx) {
        return (ctx || {
            common: input.parent.common,
            data: input.data,
            parsedType: getParsedType(input.data),
            schemaErrorMap: this._def.errorMap,
            path: input.path,
            parent: input.parent,
        });
    }
    _processInputParams(input) {
        return {
            status: new ParseStatus(),
            ctx: {
                common: input.parent.common,
                data: input.data,
                parsedType: getParsedType(input.data),
                schemaErrorMap: this._def.errorMap,
                path: input.path,
                parent: input.parent,
            },
        };
    }
    _parseSync(input) {
        const result = this._parse(input);
        if (isAsync(result)) {
            throw new Error("Synchronous parse encountered promise.");
        }
        return result;
    }
    _parseAsync(input) {
        const result = this._parse(input);
        return Promise.resolve(result);
    }
    parse(data, params) {
        const result = this.safeParse(data, params);
        if (result.success)
            return result.data;
        throw result.error;
    }
    safeParse(data, params) {
        var _a;
        const ctx = {
            common: {
                issues: [],
                async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
                contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
            },
            path: (params === null || params === void 0 ? void 0 : params.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: getParsedType(data),
        };
        const result = this._parseSync({ data, path: ctx.path, parent: ctx });
        return handleResult(ctx, result);
    }
    "~validate"(data) {
        var _a, _b;
        const ctx = {
            common: {
                issues: [],
                async: !!this["~standard"].async,
            },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: getParsedType(data),
        };
        if (!this["~standard"].async) {
            try {
                const result = this._parseSync({ data, path: [], parent: ctx });
                return isValid(result)
                    ? {
                        value: result.value,
                    }
                    : {
                        issues: ctx.common.issues,
                    };
            }
            catch (err) {
                if ((_b = (_a = err === null || err === void 0 ? void 0 : err.message) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === null || _b === void 0 ? void 0 : _b.includes("encountered")) {
                    this["~standard"].async = true;
                }
                ctx.common = {
                    issues: [],
                    async: true,
                };
            }
        }
        return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result)
            ? {
                value: result.value,
            }
            : {
                issues: ctx.common.issues,
            });
    }
    async parseAsync(data, params) {
        const result = await this.safeParseAsync(data, params);
        if (result.success)
            return result.data;
        throw result.error;
    }
    async safeParseAsync(data, params) {
        const ctx = {
            common: {
                issues: [],
                contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
                async: true,
            },
            path: (params === null || params === void 0 ? void 0 : params.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: getParsedType(data),
        };
        const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
        const result = await (isAsync(maybeAsyncResult)
            ? maybeAsyncResult
            : Promise.resolve(maybeAsyncResult));
        return handleResult(ctx, result);
    }
    refine(check, message) {
        const getIssueProperties = (val) => {
            if (typeof message === "string" || typeof message === "undefined") {
                return { message };
            }
            else if (typeof message === "function") {
                return message(val);
            }
            else {
                return message;
            }
        };
        return this._refinement((val, ctx) => {
            const result = check(val);
            const setError = () => ctx.addIssue({
                code: ZodIssueCode.custom,
                ...getIssueProperties(val),
            });
            if (typeof Promise !== "undefined" && result instanceof Promise) {
                return result.then((data) => {
                    if (!data) {
                        setError();
                        return false;
                    }
                    else {
                        return true;
                    }
                });
            }
            if (!result) {
                setError();
                return false;
            }
            else {
                return true;
            }
        });
    }
    refinement(check, refinementData) {
        return this._refinement((val, ctx) => {
            if (!check(val)) {
                ctx.addIssue(typeof refinementData === "function"
                    ? refinementData(val, ctx)
                    : refinementData);
                return false;
            }
            else {
                return true;
            }
        });
    }
    _refinement(refinement) {
        return new ZodEffects({
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: { type: "refinement", refinement },
        });
    }
    superRefine(refinement) {
        return this._refinement(refinement);
    }
    constructor(def) {
        /** Alias of safeParseAsync */
        this.spa = this.safeParseAsync;
        this._def = def;
        this.parse = this.parse.bind(this);
        this.safeParse = this.safeParse.bind(this);
        this.parseAsync = this.parseAsync.bind(this);
        this.safeParseAsync = this.safeParseAsync.bind(this);
        this.spa = this.spa.bind(this);
        this.refine = this.refine.bind(this);
        this.refinement = this.refinement.bind(this);
        this.superRefine = this.superRefine.bind(this);
        this.optional = this.optional.bind(this);
        this.nullable = this.nullable.bind(this);
        this.nullish = this.nullish.bind(this);
        this.array = this.array.bind(this);
        this.promise = this.promise.bind(this);
        this.or = this.or.bind(this);
        this.and = this.and.bind(this);
        this.transform = this.transform.bind(this);
        this.brand = this.brand.bind(this);
        this.default = this.default.bind(this);
        this.catch = this.catch.bind(this);
        this.describe = this.describe.bind(this);
        this.pipe = this.pipe.bind(this);
        this.readonly = this.readonly.bind(this);
        this.isNullable = this.isNullable.bind(this);
        this.isOptional = this.isOptional.bind(this);
        this["~standard"] = {
            version: 1,
            vendor: "zod",
            validate: (data) => this["~validate"](data),
        };
    }
    optional() {
        return ZodOptional.create(this, this._def);
    }
    nullable() {
        return ZodNullable.create(this, this._def);
    }
    nullish() {
        return this.nullable().optional();
    }
    array() {
        return ZodArray.create(this);
    }
    promise() {
        return ZodPromise.create(this, this._def);
    }
    or(option) {
        return ZodUnion.create([this, option], this._def);
    }
    and(incoming) {
        return ZodIntersection.create(this, incoming, this._def);
    }
    transform(transform) {
        return new ZodEffects({
            ...processCreateParams(this._def),
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: { type: "transform", transform },
        });
    }
    default(def) {
        const defaultValueFunc = typeof def === "function" ? def : () => def;
        return new ZodDefault({
            ...processCreateParams(this._def),
            innerType: this,
            defaultValue: defaultValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodDefault,
        });
    }
    brand() {
        return new ZodBranded({
            typeName: ZodFirstPartyTypeKind.ZodBranded,
            type: this,
            ...processCreateParams(this._def),
        });
    }
    catch(def) {
        const catchValueFunc = typeof def === "function" ? def : () => def;
        return new ZodCatch({
            ...processCreateParams(this._def),
            innerType: this,
            catchValue: catchValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodCatch,
        });
    }
    describe(description) {
        const This = this.constructor;
        return new This({
            ...this._def,
            description,
        });
    }
    pipe(target) {
        return ZodPipeline.create(this, target);
    }
    readonly() {
        return ZodReadonly.create(this);
    }
    isOptional() {
        return this.safeParse(undefined).success;
    }
    isNullable() {
        return this.safeParse(null).success;
    }
}
const cuidRegex = /^c[^\s-]{8,}$/i;
const cuid2Regex = /^[0-9a-z]+$/;
const ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
// const uuidRegex =
//   /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
const uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
const nanoidRegex = /^[a-z0-9_-]{21}$/i;
const jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
const durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
// from https://stackoverflow.com/a/46181/1550155
// old version: too slow, didn't support unicode
// const emailRegex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
//old email regex
// const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((?!-)([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{1,})[^-<>()[\].,;:\s@"]$/i;
// eslint-disable-next-line
// const emailRegex =
//   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/;
// const emailRegex =
//   /^[a-zA-Z0-9\.\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
// const emailRegex =
//   /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
const emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
// const emailRegex =
//   /^[a-z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9\-]+)*$/i;
// from https://thekevinscott.com/emojis-in-javascript/#writing-a-regular-expression
const _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
let emojiRegex;
// faster, simpler, safer
const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
const ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
// const ipv6Regex =
// /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
const ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
const ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
// https://stackoverflow.com/questions/7860392/determine-if-string-is-in-base64-using-javascript
const base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
// https://base64.guru/standards/base64url
const base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
// simple
// const dateRegexSource = `\\d{4}-\\d{2}-\\d{2}`;
// no leap year validation
// const dateRegexSource = `\\d{4}-((0[13578]|10|12)-31|(0[13-9]|1[0-2])-30|(0[1-9]|1[0-2])-(0[1-9]|1\\d|2\\d))`;
// with leap year validation
const dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
const dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
    // let regex = `\\d{2}:\\d{2}:\\d{2}`;
    let regex = `([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d`;
    if (args.precision) {
        regex = `${regex}\\.\\d{${args.precision}}`;
    }
    else if (args.precision == null) {
        regex = `${regex}(\\.\\d+)?`;
    }
    return regex;
}
function timeRegex(args) {
    return new RegExp(`^${timeRegexSource(args)}$`);
}
// Adapted from https://stackoverflow.com/a/3143231
function datetimeRegex(args) {
    let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
    const opts = [];
    opts.push(args.local ? `Z?` : `Z`);
    if (args.offset)
        opts.push(`([+-]\\d{2}:?\\d{2})`);
    regex = `${regex}(${opts.join("|")})`;
    return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
    if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
        return true;
    }
    if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
        return true;
    }
    return false;
}
function isValidJWT(jwt, alg) {
    if (!jwtRegex.test(jwt))
        return false;
    try {
        const [header] = jwt.split(".");
        // Convert base64url to base64
        const base64 = header
            .replace(/-/g, "+")
            .replace(/_/g, "/")
            .padEnd(header.length + ((4 - (header.length % 4)) % 4), "=");
        const decoded = JSON.parse(atob(base64));
        if (typeof decoded !== "object" || decoded === null)
            return false;
        if (!decoded.typ || !decoded.alg)
            return false;
        if (alg && decoded.alg !== alg)
            return false;
        return true;
    }
    catch (_a) {
        return false;
    }
}
function isValidCidr(ip, version) {
    if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
        return true;
    }
    if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
        return true;
    }
    return false;
}
class ZodString extends ZodType {
    _parse(input) {
        if (this._def.coerce) {
            input.data = String(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.string) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.string,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const status = new ParseStatus();
        let ctx = undefined;
        for (const check of this._def.checks) {
            if (check.kind === "min") {
                if (input.data.length < check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        minimum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: false,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "max") {
                if (input.data.length > check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        maximum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: false,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "length") {
                const tooBig = input.data.length > check.value;
                const tooSmall = input.data.length < check.value;
                if (tooBig || tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    if (tooBig) {
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.too_big,
                            maximum: check.value,
                            type: "string",
                            inclusive: true,
                            exact: true,
                            message: check.message,
                        });
                    }
                    else if (tooSmall) {
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.too_small,
                            minimum: check.value,
                            type: "string",
                            inclusive: true,
                            exact: true,
                            message: check.message,
                        });
                    }
                    status.dirty();
                }
            }
            else if (check.kind === "email") {
                if (!emailRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "email",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "emoji") {
                if (!emojiRegex) {
                    emojiRegex = new RegExp(_emojiRegex, "u");
                }
                if (!emojiRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "emoji",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "uuid") {
                if (!uuidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "uuid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "nanoid") {
                if (!nanoidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "nanoid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "cuid") {
                if (!cuidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "cuid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "cuid2") {
                if (!cuid2Regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "cuid2",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "ulid") {
                if (!ulidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "ulid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "url") {
                try {
                    new URL(input.data);
                }
                catch (_a) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "url",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "regex") {
                check.regex.lastIndex = 0;
                const testResult = check.regex.test(input.data);
                if (!testResult) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "regex",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "trim") {
                input.data = input.data.trim();
            }
            else if (check.kind === "includes") {
                if (!input.data.includes(check.value, check.position)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: { includes: check.value, position: check.position },
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "toLowerCase") {
                input.data = input.data.toLowerCase();
            }
            else if (check.kind === "toUpperCase") {
                input.data = input.data.toUpperCase();
            }
            else if (check.kind === "startsWith") {
                if (!input.data.startsWith(check.value)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: { startsWith: check.value },
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "endsWith") {
                if (!input.data.endsWith(check.value)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: { endsWith: check.value },
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "datetime") {
                const regex = datetimeRegex(check);
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: "datetime",
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "date") {
                const regex = dateRegex;
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: "date",
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "time") {
                const regex = timeRegex(check);
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: "time",
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "duration") {
                if (!durationRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "duration",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "ip") {
                if (!isValidIP(input.data, check.version)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "ip",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "jwt") {
                if (!isValidJWT(input.data, check.alg)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "jwt",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "cidr") {
                if (!isValidCidr(input.data, check.version)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "cidr",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "base64") {
                if (!base64Regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "base64",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "base64url") {
                if (!base64urlRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "base64url",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else {
                util$4.assertNever(check);
            }
        }
        return { status: status.value, value: input.data };
    }
    _regex(regex, validation, message) {
        return this.refinement((data) => regex.test(data), {
            validation,
            code: ZodIssueCode.invalid_string,
            ...errorUtil.errToObj(message),
        });
    }
    _addCheck(check) {
        return new ZodString({
            ...this._def,
            checks: [...this._def.checks, check],
        });
    }
    email(message) {
        return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
    }
    url(message) {
        return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
    }
    emoji(message) {
        return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
    }
    uuid(message) {
        return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
    }
    nanoid(message) {
        return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
    }
    cuid(message) {
        return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
    }
    cuid2(message) {
        return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
    }
    ulid(message) {
        return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
    }
    base64(message) {
        return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
    }
    base64url(message) {
        // base64url encoding is a modification of base64 that can safely be used in URLs and filenames
        return this._addCheck({
            kind: "base64url",
            ...errorUtil.errToObj(message),
        });
    }
    jwt(options) {
        return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
    }
    ip(options) {
        return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
    }
    cidr(options) {
        return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
    }
    datetime(options) {
        var _a, _b;
        if (typeof options === "string") {
            return this._addCheck({
                kind: "datetime",
                precision: null,
                offset: false,
                local: false,
                message: options,
            });
        }
        return this._addCheck({
            kind: "datetime",
            precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
            offset: (_a = options === null || options === void 0 ? void 0 : options.offset) !== null && _a !== void 0 ? _a : false,
            local: (_b = options === null || options === void 0 ? void 0 : options.local) !== null && _b !== void 0 ? _b : false,
            ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message),
        });
    }
    date(message) {
        return this._addCheck({ kind: "date", message });
    }
    time(options) {
        if (typeof options === "string") {
            return this._addCheck({
                kind: "time",
                precision: null,
                message: options,
            });
        }
        return this._addCheck({
            kind: "time",
            precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
            ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message),
        });
    }
    duration(message) {
        return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
    }
    regex(regex, message) {
        return this._addCheck({
            kind: "regex",
            regex: regex,
            ...errorUtil.errToObj(message),
        });
    }
    includes(value, options) {
        return this._addCheck({
            kind: "includes",
            value: value,
            position: options === null || options === void 0 ? void 0 : options.position,
            ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message),
        });
    }
    startsWith(value, message) {
        return this._addCheck({
            kind: "startsWith",
            value: value,
            ...errorUtil.errToObj(message),
        });
    }
    endsWith(value, message) {
        return this._addCheck({
            kind: "endsWith",
            value: value,
            ...errorUtil.errToObj(message),
        });
    }
    min(minLength, message) {
        return this._addCheck({
            kind: "min",
            value: minLength,
            ...errorUtil.errToObj(message),
        });
    }
    max(maxLength, message) {
        return this._addCheck({
            kind: "max",
            value: maxLength,
            ...errorUtil.errToObj(message),
        });
    }
    length(len, message) {
        return this._addCheck({
            kind: "length",
            value: len,
            ...errorUtil.errToObj(message),
        });
    }
    /**
     * Equivalent to `.min(1)`
     */
    nonempty(message) {
        return this.min(1, errorUtil.errToObj(message));
    }
    trim() {
        return new ZodString({
            ...this._def,
            checks: [...this._def.checks, { kind: "trim" }],
        });
    }
    toLowerCase() {
        return new ZodString({
            ...this._def,
            checks: [...this._def.checks, { kind: "toLowerCase" }],
        });
    }
    toUpperCase() {
        return new ZodString({
            ...this._def,
            checks: [...this._def.checks, { kind: "toUpperCase" }],
        });
    }
    get isDatetime() {
        return !!this._def.checks.find((ch) => ch.kind === "datetime");
    }
    get isDate() {
        return !!this._def.checks.find((ch) => ch.kind === "date");
    }
    get isTime() {
        return !!this._def.checks.find((ch) => ch.kind === "time");
    }
    get isDuration() {
        return !!this._def.checks.find((ch) => ch.kind === "duration");
    }
    get isEmail() {
        return !!this._def.checks.find((ch) => ch.kind === "email");
    }
    get isURL() {
        return !!this._def.checks.find((ch) => ch.kind === "url");
    }
    get isEmoji() {
        return !!this._def.checks.find((ch) => ch.kind === "emoji");
    }
    get isUUID() {
        return !!this._def.checks.find((ch) => ch.kind === "uuid");
    }
    get isNANOID() {
        return !!this._def.checks.find((ch) => ch.kind === "nanoid");
    }
    get isCUID() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid");
    }
    get isCUID2() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid2");
    }
    get isULID() {
        return !!this._def.checks.find((ch) => ch.kind === "ulid");
    }
    get isIP() {
        return !!this._def.checks.find((ch) => ch.kind === "ip");
    }
    get isCIDR() {
        return !!this._def.checks.find((ch) => ch.kind === "cidr");
    }
    get isBase64() {
        return !!this._def.checks.find((ch) => ch.kind === "base64");
    }
    get isBase64url() {
        // base64url encoding is a modification of base64 that can safely be used in URLs and filenames
        return !!this._def.checks.find((ch) => ch.kind === "base64url");
    }
    get minLength() {
        let min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
        }
        return min;
    }
    get maxLength() {
        let max = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return max;
    }
}
ZodString.create = (params) => {
    var _a;
    return new ZodString({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodString,
        coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
        ...processCreateParams(params),
    });
};
// https://stackoverflow.com/questions/3966484/why-does-modulus-operator-return-fractional-number-in-javascript/31711034#31711034
function floatSafeRemainder(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepDecCount = (step.toString().split(".")[1] || "").length;
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
    return (valInt % stepInt) / Math.pow(10, decCount);
}
class ZodNumber extends ZodType {
    constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
        this.step = this.multipleOf;
    }
    _parse(input) {
        if (this._def.coerce) {
            input.data = Number(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.number) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.number,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        let ctx = undefined;
        const status = new ParseStatus();
        for (const check of this._def.checks) {
            if (check.kind === "int") {
                if (!util$4.isInteger(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_type,
                        expected: "integer",
                        received: "float",
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "min") {
                const tooSmall = check.inclusive
                    ? input.data < check.value
                    : input.data <= check.value;
                if (tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        minimum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        exact: false,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "max") {
                const tooBig = check.inclusive
                    ? input.data > check.value
                    : input.data >= check.value;
                if (tooBig) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        maximum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        exact: false,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "multipleOf") {
                if (floatSafeRemainder(input.data, check.value) !== 0) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.not_multiple_of,
                        multipleOf: check.value,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "finite") {
                if (!Number.isFinite(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.not_finite,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else {
                util$4.assertNever(check);
            }
        }
        return { status: status.value, value: input.data };
    }
    gte(value, message) {
        return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
        return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
        return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
        return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
        return new ZodNumber({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind,
                    value,
                    inclusive,
                    message: errorUtil.toString(message),
                },
            ],
        });
    }
    _addCheck(check) {
        return new ZodNumber({
            ...this._def,
            checks: [...this._def.checks, check],
        });
    }
    int(message) {
        return this._addCheck({
            kind: "int",
            message: errorUtil.toString(message),
        });
    }
    positive(message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: false,
            message: errorUtil.toString(message),
        });
    }
    negative(message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: false,
            message: errorUtil.toString(message),
        });
    }
    nonpositive(message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: true,
            message: errorUtil.toString(message),
        });
    }
    nonnegative(message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: true,
            message: errorUtil.toString(message),
        });
    }
    multipleOf(value, message) {
        return this._addCheck({
            kind: "multipleOf",
            value: value,
            message: errorUtil.toString(message),
        });
    }
    finite(message) {
        return this._addCheck({
            kind: "finite",
            message: errorUtil.toString(message),
        });
    }
    safe(message) {
        return this._addCheck({
            kind: "min",
            inclusive: true,
            value: Number.MIN_SAFE_INTEGER,
            message: errorUtil.toString(message),
        })._addCheck({
            kind: "max",
            inclusive: true,
            value: Number.MAX_SAFE_INTEGER,
            message: errorUtil.toString(message),
        });
    }
    get minValue() {
        let min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
        }
        return min;
    }
    get maxValue() {
        let max = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return max;
    }
    get isInt() {
        return !!this._def.checks.find((ch) => ch.kind === "int" ||
            (ch.kind === "multipleOf" && util$4.isInteger(ch.value)));
    }
    get isFinite() {
        let max = null, min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "finite" ||
                ch.kind === "int" ||
                ch.kind === "multipleOf") {
                return true;
            }
            else if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
            else if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return Number.isFinite(min) && Number.isFinite(max);
    }
}
ZodNumber.create = (params) => {
    return new ZodNumber({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodNumber,
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        ...processCreateParams(params),
    });
};
class ZodBigInt extends ZodType {
    constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
    }
    _parse(input) {
        if (this._def.coerce) {
            try {
                input.data = BigInt(input.data);
            }
            catch (_a) {
                return this._getInvalidInput(input);
            }
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.bigint) {
            return this._getInvalidInput(input);
        }
        let ctx = undefined;
        const status = new ParseStatus();
        for (const check of this._def.checks) {
            if (check.kind === "min") {
                const tooSmall = check.inclusive
                    ? input.data < check.value
                    : input.data <= check.value;
                if (tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        type: "bigint",
                        minimum: check.value,
                        inclusive: check.inclusive,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "max") {
                const tooBig = check.inclusive
                    ? input.data > check.value
                    : input.data >= check.value;
                if (tooBig) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        type: "bigint",
                        maximum: check.value,
                        inclusive: check.inclusive,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "multipleOf") {
                if (input.data % check.value !== BigInt(0)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.not_multiple_of,
                        multipleOf: check.value,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else {
                util$4.assertNever(check);
            }
        }
        return { status: status.value, value: input.data };
    }
    _getInvalidInput(input) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.bigint,
            received: ctx.parsedType,
        });
        return INVALID;
    }
    gte(value, message) {
        return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
        return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
        return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
        return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
        return new ZodBigInt({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind,
                    value,
                    inclusive,
                    message: errorUtil.toString(message),
                },
            ],
        });
    }
    _addCheck(check) {
        return new ZodBigInt({
            ...this._def,
            checks: [...this._def.checks, check],
        });
    }
    positive(message) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: false,
            message: errorUtil.toString(message),
        });
    }
    negative(message) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: false,
            message: errorUtil.toString(message),
        });
    }
    nonpositive(message) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: true,
            message: errorUtil.toString(message),
        });
    }
    nonnegative(message) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: true,
            message: errorUtil.toString(message),
        });
    }
    multipleOf(value, message) {
        return this._addCheck({
            kind: "multipleOf",
            value,
            message: errorUtil.toString(message),
        });
    }
    get minValue() {
        let min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
        }
        return min;
    }
    get maxValue() {
        let max = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return max;
    }
}
ZodBigInt.create = (params) => {
    var _a;
    return new ZodBigInt({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodBigInt,
        coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
        ...processCreateParams(params),
    });
};
class ZodBoolean extends ZodType {
    _parse(input) {
        if (this._def.coerce) {
            input.data = Boolean(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.boolean) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.boolean,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodBoolean.create = (params) => {
    return new ZodBoolean({
        typeName: ZodFirstPartyTypeKind.ZodBoolean,
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        ...processCreateParams(params),
    });
};
class ZodDate extends ZodType {
    _parse(input) {
        if (this._def.coerce) {
            input.data = new Date(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.date) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.date,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        if (isNaN(input.data.getTime())) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_date,
            });
            return INVALID;
        }
        const status = new ParseStatus();
        let ctx = undefined;
        for (const check of this._def.checks) {
            if (check.kind === "min") {
                if (input.data.getTime() < check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        message: check.message,
                        inclusive: true,
                        exact: false,
                        minimum: check.value,
                        type: "date",
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "max") {
                if (input.data.getTime() > check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        message: check.message,
                        inclusive: true,
                        exact: false,
                        maximum: check.value,
                        type: "date",
                    });
                    status.dirty();
                }
            }
            else {
                util$4.assertNever(check);
            }
        }
        return {
            status: status.value,
            value: new Date(input.data.getTime()),
        };
    }
    _addCheck(check) {
        return new ZodDate({
            ...this._def,
            checks: [...this._def.checks, check],
        });
    }
    min(minDate, message) {
        return this._addCheck({
            kind: "min",
            value: minDate.getTime(),
            message: errorUtil.toString(message),
        });
    }
    max(maxDate, message) {
        return this._addCheck({
            kind: "max",
            value: maxDate.getTime(),
            message: errorUtil.toString(message),
        });
    }
    get minDate() {
        let min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
        }
        return min != null ? new Date(min) : null;
    }
    get maxDate() {
        let max = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return max != null ? new Date(max) : null;
    }
}
ZodDate.create = (params) => {
    return new ZodDate({
        checks: [],
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        typeName: ZodFirstPartyTypeKind.ZodDate,
        ...processCreateParams(params),
    });
};
class ZodSymbol extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.symbol) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.symbol,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodSymbol.create = (params) => {
    return new ZodSymbol({
        typeName: ZodFirstPartyTypeKind.ZodSymbol,
        ...processCreateParams(params),
    });
};
class ZodUndefined extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.undefined,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodUndefined.create = (params) => {
    return new ZodUndefined({
        typeName: ZodFirstPartyTypeKind.ZodUndefined,
        ...processCreateParams(params),
    });
};
class ZodNull extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.null) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.null,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodNull.create = (params) => {
    return new ZodNull({
        typeName: ZodFirstPartyTypeKind.ZodNull,
        ...processCreateParams(params),
    });
};
class ZodAny extends ZodType {
    constructor() {
        super(...arguments);
        // to prevent instances of other classes from extending ZodAny. this causes issues with catchall in ZodObject.
        this._any = true;
    }
    _parse(input) {
        return OK(input.data);
    }
}
ZodAny.create = (params) => {
    return new ZodAny({
        typeName: ZodFirstPartyTypeKind.ZodAny,
        ...processCreateParams(params),
    });
};
class ZodUnknown extends ZodType {
    constructor() {
        super(...arguments);
        // required
        this._unknown = true;
    }
    _parse(input) {
        return OK(input.data);
    }
}
ZodUnknown.create = (params) => {
    return new ZodUnknown({
        typeName: ZodFirstPartyTypeKind.ZodUnknown,
        ...processCreateParams(params),
    });
};
class ZodNever extends ZodType {
    _parse(input) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.never,
            received: ctx.parsedType,
        });
        return INVALID;
    }
}
ZodNever.create = (params) => {
    return new ZodNever({
        typeName: ZodFirstPartyTypeKind.ZodNever,
        ...processCreateParams(params),
    });
};
class ZodVoid extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.void,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodVoid.create = (params) => {
    return new ZodVoid({
        typeName: ZodFirstPartyTypeKind.ZodVoid,
        ...processCreateParams(params),
    });
};
class ZodArray extends ZodType {
    _parse(input) {
        const { ctx, status } = this._processInputParams(input);
        const def = this._def;
        if (ctx.parsedType !== ZodParsedType.array) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.array,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        if (def.exactLength !== null) {
            const tooBig = ctx.data.length > def.exactLength.value;
            const tooSmall = ctx.data.length < def.exactLength.value;
            if (tooBig || tooSmall) {
                addIssueToContext(ctx, {
                    code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
                    minimum: (tooSmall ? def.exactLength.value : undefined),
                    maximum: (tooBig ? def.exactLength.value : undefined),
                    type: "array",
                    inclusive: true,
                    exact: true,
                    message: def.exactLength.message,
                });
                status.dirty();
            }
        }
        if (def.minLength !== null) {
            if (ctx.data.length < def.minLength.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_small,
                    minimum: def.minLength.value,
                    type: "array",
                    inclusive: true,
                    exact: false,
                    message: def.minLength.message,
                });
                status.dirty();
            }
        }
        if (def.maxLength !== null) {
            if (ctx.data.length > def.maxLength.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_big,
                    maximum: def.maxLength.value,
                    type: "array",
                    inclusive: true,
                    exact: false,
                    message: def.maxLength.message,
                });
                status.dirty();
            }
        }
        if (ctx.common.async) {
            return Promise.all([...ctx.data].map((item, i) => {
                return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
            })).then((result) => {
                return ParseStatus.mergeArray(status, result);
            });
        }
        const result = [...ctx.data].map((item, i) => {
            return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        });
        return ParseStatus.mergeArray(status, result);
    }
    get element() {
        return this._def.type;
    }
    min(minLength, message) {
        return new ZodArray({
            ...this._def,
            minLength: { value: minLength, message: errorUtil.toString(message) },
        });
    }
    max(maxLength, message) {
        return new ZodArray({
            ...this._def,
            maxLength: { value: maxLength, message: errorUtil.toString(message) },
        });
    }
    length(len, message) {
        return new ZodArray({
            ...this._def,
            exactLength: { value: len, message: errorUtil.toString(message) },
        });
    }
    nonempty(message) {
        return this.min(1, message);
    }
}
ZodArray.create = (schema, params) => {
    return new ZodArray({
        type: schema,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: ZodFirstPartyTypeKind.ZodArray,
        ...processCreateParams(params),
    });
};
function deepPartialify(schema) {
    if (schema instanceof ZodObject) {
        const newShape = {};
        for (const key in schema.shape) {
            const fieldSchema = schema.shape[key];
            newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
        }
        return new ZodObject({
            ...schema._def,
            shape: () => newShape,
        });
    }
    else if (schema instanceof ZodArray) {
        return new ZodArray({
            ...schema._def,
            type: deepPartialify(schema.element),
        });
    }
    else if (schema instanceof ZodOptional) {
        return ZodOptional.create(deepPartialify(schema.unwrap()));
    }
    else if (schema instanceof ZodNullable) {
        return ZodNullable.create(deepPartialify(schema.unwrap()));
    }
    else if (schema instanceof ZodTuple) {
        return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
    }
    else {
        return schema;
    }
}
class ZodObject extends ZodType {
    constructor() {
        super(...arguments);
        this._cached = null;
        /**
         * @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
         * If you want to pass through unknown properties, use `.passthrough()` instead.
         */
        this.nonstrict = this.passthrough;
        // extend<
        //   Augmentation extends ZodRawShape,
        //   NewOutput extends util.flatten<{
        //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
        //       ? Augmentation[k]["_output"]
        //       : k extends keyof Output
        //       ? Output[k]
        //       : never;
        //   }>,
        //   NewInput extends util.flatten<{
        //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
        //       ? Augmentation[k]["_input"]
        //       : k extends keyof Input
        //       ? Input[k]
        //       : never;
        //   }>
        // >(
        //   augmentation: Augmentation
        // ): ZodObject<
        //   extendShape<T, Augmentation>,
        //   UnknownKeys,
        //   Catchall,
        //   NewOutput,
        //   NewInput
        // > {
        //   return new ZodObject({
        //     ...this._def,
        //     shape: () => ({
        //       ...this._def.shape(),
        //       ...augmentation,
        //     }),
        //   }) as any;
        // }
        /**
         * @deprecated Use `.extend` instead
         *  */
        this.augment = this.extend;
    }
    _getCached() {
        if (this._cached !== null)
            return this._cached;
        const shape = this._def.shape();
        const keys = util$4.objectKeys(shape);
        return (this._cached = { shape, keys });
    }
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.object) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const { status, ctx } = this._processInputParams(input);
        const { shape, keys: shapeKeys } = this._getCached();
        const extraKeys = [];
        if (!(this._def.catchall instanceof ZodNever &&
            this._def.unknownKeys === "strip")) {
            for (const key in ctx.data) {
                if (!shapeKeys.includes(key)) {
                    extraKeys.push(key);
                }
            }
        }
        const pairs = [];
        for (const key of shapeKeys) {
            const keyValidator = shape[key];
            const value = ctx.data[key];
            pairs.push({
                key: { status: "valid", value: key },
                value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
                alwaysSet: key in ctx.data,
            });
        }
        if (this._def.catchall instanceof ZodNever) {
            const unknownKeys = this._def.unknownKeys;
            if (unknownKeys === "passthrough") {
                for (const key of extraKeys) {
                    pairs.push({
                        key: { status: "valid", value: key },
                        value: { status: "valid", value: ctx.data[key] },
                    });
                }
            }
            else if (unknownKeys === "strict") {
                if (extraKeys.length > 0) {
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.unrecognized_keys,
                        keys: extraKeys,
                    });
                    status.dirty();
                }
            }
            else if (unknownKeys === "strip") ;
            else {
                throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
            }
        }
        else {
            // run catchall validation
            const catchall = this._def.catchall;
            for (const key of extraKeys) {
                const value = ctx.data[key];
                pairs.push({
                    key: { status: "valid", value: key },
                    value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key) //, ctx.child(key), value, getParsedType(value)
                    ),
                    alwaysSet: key in ctx.data,
                });
            }
        }
        if (ctx.common.async) {
            return Promise.resolve()
                .then(async () => {
                const syncPairs = [];
                for (const pair of pairs) {
                    const key = await pair.key;
                    const value = await pair.value;
                    syncPairs.push({
                        key,
                        value,
                        alwaysSet: pair.alwaysSet,
                    });
                }
                return syncPairs;
            })
                .then((syncPairs) => {
                return ParseStatus.mergeObjectSync(status, syncPairs);
            });
        }
        else {
            return ParseStatus.mergeObjectSync(status, pairs);
        }
    }
    get shape() {
        return this._def.shape();
    }
    strict(message) {
        errorUtil.errToObj;
        return new ZodObject({
            ...this._def,
            unknownKeys: "strict",
            ...(message !== undefined
                ? {
                    errorMap: (issue, ctx) => {
                        var _a, _b, _c, _d;
                        const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
                        if (issue.code === "unrecognized_keys")
                            return {
                                message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError,
                            };
                        return {
                            message: defaultError,
                        };
                    },
                }
                : {}),
        });
    }
    strip() {
        return new ZodObject({
            ...this._def,
            unknownKeys: "strip",
        });
    }
    passthrough() {
        return new ZodObject({
            ...this._def,
            unknownKeys: "passthrough",
        });
    }
    // const AugmentFactory =
    //   <Def extends ZodObjectDef>(def: Def) =>
    //   <Augmentation extends ZodRawShape>(
    //     augmentation: Augmentation
    //   ): ZodObject<
    //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
    //     Def["unknownKeys"],
    //     Def["catchall"]
    //   > => {
    //     return new ZodObject({
    //       ...def,
    //       shape: () => ({
    //         ...def.shape(),
    //         ...augmentation,
    //       }),
    //     }) as any;
    //   };
    extend(augmentation) {
        return new ZodObject({
            ...this._def,
            shape: () => ({
                ...this._def.shape(),
                ...augmentation,
            }),
        });
    }
    /**
     * Prior to zod@1.0.12 there was a bug in the
     * inferred type of merged objects. Please
     * upgrade if you are experiencing issues.
     */
    merge(merging) {
        const merged = new ZodObject({
            unknownKeys: merging._def.unknownKeys,
            catchall: merging._def.catchall,
            shape: () => ({
                ...this._def.shape(),
                ...merging._def.shape(),
            }),
            typeName: ZodFirstPartyTypeKind.ZodObject,
        });
        return merged;
    }
    // merge<
    //   Incoming extends AnyZodObject,
    //   Augmentation extends Incoming["shape"],
    //   NewOutput extends {
    //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
    //       ? Augmentation[k]["_output"]
    //       : k extends keyof Output
    //       ? Output[k]
    //       : never;
    //   },
    //   NewInput extends {
    //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
    //       ? Augmentation[k]["_input"]
    //       : k extends keyof Input
    //       ? Input[k]
    //       : never;
    //   }
    // >(
    //   merging: Incoming
    // ): ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"],
    //   NewOutput,
    //   NewInput
    // > {
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    setKey(key, schema) {
        return this.augment({ [key]: schema });
    }
    // merge<Incoming extends AnyZodObject>(
    //   merging: Incoming
    // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
    // ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"]
    // > {
    //   // const mergedShape = objectUtil.mergeShapes(
    //   //   this._def.shape(),
    //   //   merging._def.shape()
    //   // );
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    catchall(index) {
        return new ZodObject({
            ...this._def,
            catchall: index,
        });
    }
    pick(mask) {
        const shape = {};
        util$4.objectKeys(mask).forEach((key) => {
            if (mask[key] && this.shape[key]) {
                shape[key] = this.shape[key];
            }
        });
        return new ZodObject({
            ...this._def,
            shape: () => shape,
        });
    }
    omit(mask) {
        const shape = {};
        util$4.objectKeys(this.shape).forEach((key) => {
            if (!mask[key]) {
                shape[key] = this.shape[key];
            }
        });
        return new ZodObject({
            ...this._def,
            shape: () => shape,
        });
    }
    /**
     * @deprecated
     */
    deepPartial() {
        return deepPartialify(this);
    }
    partial(mask) {
        const newShape = {};
        util$4.objectKeys(this.shape).forEach((key) => {
            const fieldSchema = this.shape[key];
            if (mask && !mask[key]) {
                newShape[key] = fieldSchema;
            }
            else {
                newShape[key] = fieldSchema.optional();
            }
        });
        return new ZodObject({
            ...this._def,
            shape: () => newShape,
        });
    }
    required(mask) {
        const newShape = {};
        util$4.objectKeys(this.shape).forEach((key) => {
            if (mask && !mask[key]) {
                newShape[key] = this.shape[key];
            }
            else {
                const fieldSchema = this.shape[key];
                let newField = fieldSchema;
                while (newField instanceof ZodOptional) {
                    newField = newField._def.innerType;
                }
                newShape[key] = newField;
            }
        });
        return new ZodObject({
            ...this._def,
            shape: () => newShape,
        });
    }
    keyof() {
        return createZodEnum(util$4.objectKeys(this.shape));
    }
}
ZodObject.create = (shape, params) => {
    return new ZodObject({
        shape: () => shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params),
    });
};
ZodObject.strictCreate = (shape, params) => {
    return new ZodObject({
        shape: () => shape,
        unknownKeys: "strict",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params),
    });
};
ZodObject.lazycreate = (shape, params) => {
    return new ZodObject({
        shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params),
    });
};
class ZodUnion extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const options = this._def.options;
        function handleResults(results) {
            // return first issue-free validation if it exists
            for (const result of results) {
                if (result.result.status === "valid") {
                    return result.result;
                }
            }
            for (const result of results) {
                if (result.result.status === "dirty") {
                    // add issues from dirty option
                    ctx.common.issues.push(...result.ctx.common.issues);
                    return result.result;
                }
            }
            // return invalid
            const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union,
                unionErrors,
            });
            return INVALID;
        }
        if (ctx.common.async) {
            return Promise.all(options.map(async (option) => {
                const childCtx = {
                    ...ctx,
                    common: {
                        ...ctx.common,
                        issues: [],
                    },
                    parent: null,
                };
                return {
                    result: await option._parseAsync({
                        data: ctx.data,
                        path: ctx.path,
                        parent: childCtx,
                    }),
                    ctx: childCtx,
                };
            })).then(handleResults);
        }
        else {
            let dirty = undefined;
            const issues = [];
            for (const option of options) {
                const childCtx = {
                    ...ctx,
                    common: {
                        ...ctx.common,
                        issues: [],
                    },
                    parent: null,
                };
                const result = option._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: childCtx,
                });
                if (result.status === "valid") {
                    return result;
                }
                else if (result.status === "dirty" && !dirty) {
                    dirty = { result, ctx: childCtx };
                }
                if (childCtx.common.issues.length) {
                    issues.push(childCtx.common.issues);
                }
            }
            if (dirty) {
                ctx.common.issues.push(...dirty.ctx.common.issues);
                return dirty.result;
            }
            const unionErrors = issues.map((issues) => new ZodError(issues));
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union,
                unionErrors,
            });
            return INVALID;
        }
    }
    get options() {
        return this._def.options;
    }
}
ZodUnion.create = (types, params) => {
    return new ZodUnion({
        options: types,
        typeName: ZodFirstPartyTypeKind.ZodUnion,
        ...processCreateParams(params),
    });
};
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//////////                                 //////////
//////////      ZodDiscriminatedUnion      //////////
//////////                                 //////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
const getDiscriminator = (type) => {
    if (type instanceof ZodLazy) {
        return getDiscriminator(type.schema);
    }
    else if (type instanceof ZodEffects) {
        return getDiscriminator(type.innerType());
    }
    else if (type instanceof ZodLiteral) {
        return [type.value];
    }
    else if (type instanceof ZodEnum) {
        return type.options;
    }
    else if (type instanceof ZodNativeEnum) {
        // eslint-disable-next-line ban/ban
        return util$4.objectValues(type.enum);
    }
    else if (type instanceof ZodDefault) {
        return getDiscriminator(type._def.innerType);
    }
    else if (type instanceof ZodUndefined) {
        return [undefined];
    }
    else if (type instanceof ZodNull) {
        return [null];
    }
    else if (type instanceof ZodOptional) {
        return [undefined, ...getDiscriminator(type.unwrap())];
    }
    else if (type instanceof ZodNullable) {
        return [null, ...getDiscriminator(type.unwrap())];
    }
    else if (type instanceof ZodBranded) {
        return getDiscriminator(type.unwrap());
    }
    else if (type instanceof ZodReadonly) {
        return getDiscriminator(type.unwrap());
    }
    else if (type instanceof ZodCatch) {
        return getDiscriminator(type._def.innerType);
    }
    else {
        return [];
    }
};
class ZodDiscriminatedUnion extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.object) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const discriminator = this.discriminator;
        const discriminatorValue = ctx.data[discriminator];
        const option = this.optionsMap.get(discriminatorValue);
        if (!option) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [discriminator],
            });
            return INVALID;
        }
        if (ctx.common.async) {
            return option._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            });
        }
        else {
            return option._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            });
        }
    }
    get discriminator() {
        return this._def.discriminator;
    }
    get options() {
        return this._def.options;
    }
    get optionsMap() {
        return this._def.optionsMap;
    }
    /**
     * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
     * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
     * have a different value for each object in the union.
     * @param discriminator the name of the discriminator property
     * @param types an array of object schemas
     * @param params
     */
    static create(discriminator, options, params) {
        // Get all the valid discriminator values
        const optionsMap = new Map();
        // try {
        for (const type of options) {
            const discriminatorValues = getDiscriminator(type.shape[discriminator]);
            if (!discriminatorValues.length) {
                throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
            }
            for (const value of discriminatorValues) {
                if (optionsMap.has(value)) {
                    throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
                }
                optionsMap.set(value, type);
            }
        }
        return new ZodDiscriminatedUnion({
            typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
            discriminator,
            options,
            optionsMap,
            ...processCreateParams(params),
        });
    }
}
function mergeValues(a, b) {
    const aType = getParsedType(a);
    const bType = getParsedType(b);
    if (a === b) {
        return { valid: true, data: a };
    }
    else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
        const bKeys = util$4.objectKeys(b);
        const sharedKeys = util$4
            .objectKeys(a)
            .filter((key) => bKeys.indexOf(key) !== -1);
        const newObj = { ...a, ...b };
        for (const key of sharedKeys) {
            const sharedValue = mergeValues(a[key], b[key]);
            if (!sharedValue.valid) {
                return { valid: false };
            }
            newObj[key] = sharedValue.data;
        }
        return { valid: true, data: newObj };
    }
    else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
        if (a.length !== b.length) {
            return { valid: false };
        }
        const newArray = [];
        for (let index = 0; index < a.length; index++) {
            const itemA = a[index];
            const itemB = b[index];
            const sharedValue = mergeValues(itemA, itemB);
            if (!sharedValue.valid) {
                return { valid: false };
            }
            newArray.push(sharedValue.data);
        }
        return { valid: true, data: newArray };
    }
    else if (aType === ZodParsedType.date &&
        bType === ZodParsedType.date &&
        +a === +b) {
        return { valid: true, data: a };
    }
    else {
        return { valid: false };
    }
}
class ZodIntersection extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const handleParsed = (parsedLeft, parsedRight) => {
            if (isAborted(parsedLeft) || isAborted(parsedRight)) {
                return INVALID;
            }
            const merged = mergeValues(parsedLeft.value, parsedRight.value);
            if (!merged.valid) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_intersection_types,
                });
                return INVALID;
            }
            if (isDirty(parsedLeft) || isDirty(parsedRight)) {
                status.dirty();
            }
            return { status: status.value, value: merged.data };
        };
        if (ctx.common.async) {
            return Promise.all([
                this._def.left._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                }),
                this._def.right._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                }),
            ]).then(([left, right]) => handleParsed(left, right));
        }
        else {
            return handleParsed(this._def.left._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            }), this._def.right._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            }));
        }
    }
}
ZodIntersection.create = (left, right, params) => {
    return new ZodIntersection({
        left: left,
        right: right,
        typeName: ZodFirstPartyTypeKind.ZodIntersection,
        ...processCreateParams(params),
    });
};
class ZodTuple extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.array) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.array,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        if (ctx.data.length < this._def.items.length) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                minimum: this._def.items.length,
                inclusive: true,
                exact: false,
                type: "array",
            });
            return INVALID;
        }
        const rest = this._def.rest;
        if (!rest && ctx.data.length > this._def.items.length) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                maximum: this._def.items.length,
                inclusive: true,
                exact: false,
                type: "array",
            });
            status.dirty();
        }
        const items = [...ctx.data]
            .map((item, itemIndex) => {
            const schema = this._def.items[itemIndex] || this._def.rest;
            if (!schema)
                return null;
            return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
        })
            .filter((x) => !!x); // filter nulls
        if (ctx.common.async) {
            return Promise.all(items).then((results) => {
                return ParseStatus.mergeArray(status, results);
            });
        }
        else {
            return ParseStatus.mergeArray(status, items);
        }
    }
    get items() {
        return this._def.items;
    }
    rest(rest) {
        return new ZodTuple({
            ...this._def,
            rest,
        });
    }
}
ZodTuple.create = (schemas, params) => {
    if (!Array.isArray(schemas)) {
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    }
    return new ZodTuple({
        items: schemas,
        typeName: ZodFirstPartyTypeKind.ZodTuple,
        rest: null,
        ...processCreateParams(params),
    });
};
class ZodRecord extends ZodType {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.object) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const pairs = [];
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        for (const key in ctx.data) {
            pairs.push({
                key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
                value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
                alwaysSet: key in ctx.data,
            });
        }
        if (ctx.common.async) {
            return ParseStatus.mergeObjectAsync(status, pairs);
        }
        else {
            return ParseStatus.mergeObjectSync(status, pairs);
        }
    }
    get element() {
        return this._def.valueType;
    }
    static create(first, second, third) {
        if (second instanceof ZodType) {
            return new ZodRecord({
                keyType: first,
                valueType: second,
                typeName: ZodFirstPartyTypeKind.ZodRecord,
                ...processCreateParams(third),
            });
        }
        return new ZodRecord({
            keyType: ZodString.create(),
            valueType: first,
            typeName: ZodFirstPartyTypeKind.ZodRecord,
            ...processCreateParams(second),
        });
    }
}
class ZodMap extends ZodType {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.map) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.map,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        const pairs = [...ctx.data.entries()].map(([key, value], index) => {
            return {
                key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
                value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"])),
            };
        });
        if (ctx.common.async) {
            const finalMap = new Map();
            return Promise.resolve().then(async () => {
                for (const pair of pairs) {
                    const key = await pair.key;
                    const value = await pair.value;
                    if (key.status === "aborted" || value.status === "aborted") {
                        return INVALID;
                    }
                    if (key.status === "dirty" || value.status === "dirty") {
                        status.dirty();
                    }
                    finalMap.set(key.value, value.value);
                }
                return { status: status.value, value: finalMap };
            });
        }
        else {
            const finalMap = new Map();
            for (const pair of pairs) {
                const key = pair.key;
                const value = pair.value;
                if (key.status === "aborted" || value.status === "aborted") {
                    return INVALID;
                }
                if (key.status === "dirty" || value.status === "dirty") {
                    status.dirty();
                }
                finalMap.set(key.value, value.value);
            }
            return { status: status.value, value: finalMap };
        }
    }
}
ZodMap.create = (keyType, valueType, params) => {
    return new ZodMap({
        valueType,
        keyType,
        typeName: ZodFirstPartyTypeKind.ZodMap,
        ...processCreateParams(params),
    });
};
class ZodSet extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.set) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.set,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const def = this._def;
        if (def.minSize !== null) {
            if (ctx.data.size < def.minSize.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_small,
                    minimum: def.minSize.value,
                    type: "set",
                    inclusive: true,
                    exact: false,
                    message: def.minSize.message,
                });
                status.dirty();
            }
        }
        if (def.maxSize !== null) {
            if (ctx.data.size > def.maxSize.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_big,
                    maximum: def.maxSize.value,
                    type: "set",
                    inclusive: true,
                    exact: false,
                    message: def.maxSize.message,
                });
                status.dirty();
            }
        }
        const valueType = this._def.valueType;
        function finalizeSet(elements) {
            const parsedSet = new Set();
            for (const element of elements) {
                if (element.status === "aborted")
                    return INVALID;
                if (element.status === "dirty")
                    status.dirty();
                parsedSet.add(element.value);
            }
            return { status: status.value, value: parsedSet };
        }
        const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
        if (ctx.common.async) {
            return Promise.all(elements).then((elements) => finalizeSet(elements));
        }
        else {
            return finalizeSet(elements);
        }
    }
    min(minSize, message) {
        return new ZodSet({
            ...this._def,
            minSize: { value: minSize, message: errorUtil.toString(message) },
        });
    }
    max(maxSize, message) {
        return new ZodSet({
            ...this._def,
            maxSize: { value: maxSize, message: errorUtil.toString(message) },
        });
    }
    size(size, message) {
        return this.min(size, message).max(size, message);
    }
    nonempty(message) {
        return this.min(1, message);
    }
}
ZodSet.create = (valueType, params) => {
    return new ZodSet({
        valueType,
        minSize: null,
        maxSize: null,
        typeName: ZodFirstPartyTypeKind.ZodSet,
        ...processCreateParams(params),
    });
};
class ZodFunction extends ZodType {
    constructor() {
        super(...arguments);
        this.validate = this.implement;
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.function) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.function,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        function makeArgsIssue(args, error) {
            return makeIssue({
                data: args,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    getErrorMap(),
                    errorMap,
                ].filter((x) => !!x),
                issueData: {
                    code: ZodIssueCode.invalid_arguments,
                    argumentsError: error,
                },
            });
        }
        function makeReturnsIssue(returns, error) {
            return makeIssue({
                data: returns,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    getErrorMap(),
                    errorMap,
                ].filter((x) => !!x),
                issueData: {
                    code: ZodIssueCode.invalid_return_type,
                    returnTypeError: error,
                },
            });
        }
        const params = { errorMap: ctx.common.contextualErrorMap };
        const fn = ctx.data;
        if (this._def.returns instanceof ZodPromise) {
            // Would love a way to avoid disabling this rule, but we need
            // an alias (using an arrow function was what caused 2651).
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const me = this;
            return OK(async function (...args) {
                const error = new ZodError([]);
                const parsedArgs = await me._def.args
                    .parseAsync(args, params)
                    .catch((e) => {
                    error.addIssue(makeArgsIssue(args, e));
                    throw error;
                });
                const result = await Reflect.apply(fn, this, parsedArgs);
                const parsedReturns = await me._def.returns._def.type
                    .parseAsync(result, params)
                    .catch((e) => {
                    error.addIssue(makeReturnsIssue(result, e));
                    throw error;
                });
                return parsedReturns;
            });
        }
        else {
            // Would love a way to avoid disabling this rule, but we need
            // an alias (using an arrow function was what caused 2651).
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const me = this;
            return OK(function (...args) {
                const parsedArgs = me._def.args.safeParse(args, params);
                if (!parsedArgs.success) {
                    throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
                }
                const result = Reflect.apply(fn, this, parsedArgs.data);
                const parsedReturns = me._def.returns.safeParse(result, params);
                if (!parsedReturns.success) {
                    throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
                }
                return parsedReturns.data;
            });
        }
    }
    parameters() {
        return this._def.args;
    }
    returnType() {
        return this._def.returns;
    }
    args(...items) {
        return new ZodFunction({
            ...this._def,
            args: ZodTuple.create(items).rest(ZodUnknown.create()),
        });
    }
    returns(returnType) {
        return new ZodFunction({
            ...this._def,
            returns: returnType,
        });
    }
    implement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
    }
    strictImplement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
    }
    static create(args, returns, params) {
        return new ZodFunction({
            args: (args
                ? args
                : ZodTuple.create([]).rest(ZodUnknown.create())),
            returns: returns || ZodUnknown.create(),
            typeName: ZodFirstPartyTypeKind.ZodFunction,
            ...processCreateParams(params),
        });
    }
}
class ZodLazy extends ZodType {
    get schema() {
        return this._def.getter();
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const lazySchema = this._def.getter();
        return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
    }
}
ZodLazy.create = (getter, params) => {
    return new ZodLazy({
        getter: getter,
        typeName: ZodFirstPartyTypeKind.ZodLazy,
        ...processCreateParams(params),
    });
};
class ZodLiteral extends ZodType {
    _parse(input) {
        if (input.data !== this._def.value) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                received: ctx.data,
                code: ZodIssueCode.invalid_literal,
                expected: this._def.value,
            });
            return INVALID;
        }
        return { status: "valid", value: input.data };
    }
    get value() {
        return this._def.value;
    }
}
ZodLiteral.create = (value, params) => {
    return new ZodLiteral({
        value: value,
        typeName: ZodFirstPartyTypeKind.ZodLiteral,
        ...processCreateParams(params),
    });
};
function createZodEnum(values, params) {
    return new ZodEnum({
        values,
        typeName: ZodFirstPartyTypeKind.ZodEnum,
        ...processCreateParams(params),
    });
}
class ZodEnum extends ZodType {
    constructor() {
        super(...arguments);
        _ZodEnum_cache.set(this, void 0);
    }
    _parse(input) {
        if (typeof input.data !== "string") {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            addIssueToContext(ctx, {
                expected: util$4.joinValues(expectedValues),
                received: ctx.parsedType,
                code: ZodIssueCode.invalid_type,
            });
            return INVALID;
        }
        if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f")) {
            __classPrivateFieldSet(this, _ZodEnum_cache, new Set(this._def.values), "f");
        }
        if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f").has(input.data)) {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            addIssueToContext(ctx, {
                received: ctx.data,
                code: ZodIssueCode.invalid_enum_value,
                options: expectedValues,
            });
            return INVALID;
        }
        return OK(input.data);
    }
    get options() {
        return this._def.values;
    }
    get enum() {
        const enumValues = {};
        for (const val of this._def.values) {
            enumValues[val] = val;
        }
        return enumValues;
    }
    get Values() {
        const enumValues = {};
        for (const val of this._def.values) {
            enumValues[val] = val;
        }
        return enumValues;
    }
    get Enum() {
        const enumValues = {};
        for (const val of this._def.values) {
            enumValues[val] = val;
        }
        return enumValues;
    }
    extract(values, newDef = this._def) {
        return ZodEnum.create(values, {
            ...this._def,
            ...newDef,
        });
    }
    exclude(values, newDef = this._def) {
        return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
            ...this._def,
            ...newDef,
        });
    }
}
_ZodEnum_cache = new WeakMap();
ZodEnum.create = createZodEnum;
class ZodNativeEnum extends ZodType {
    constructor() {
        super(...arguments);
        _ZodNativeEnum_cache.set(this, void 0);
    }
    _parse(input) {
        const nativeEnumValues = util$4.getValidEnumValues(this._def.values);
        const ctx = this._getOrReturnCtx(input);
        if (ctx.parsedType !== ZodParsedType.string &&
            ctx.parsedType !== ZodParsedType.number) {
            const expectedValues = util$4.objectValues(nativeEnumValues);
            addIssueToContext(ctx, {
                expected: util$4.joinValues(expectedValues),
                received: ctx.parsedType,
                code: ZodIssueCode.invalid_type,
            });
            return INVALID;
        }
        if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f")) {
            __classPrivateFieldSet(this, _ZodNativeEnum_cache, new Set(util$4.getValidEnumValues(this._def.values)), "f");
        }
        if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f").has(input.data)) {
            const expectedValues = util$4.objectValues(nativeEnumValues);
            addIssueToContext(ctx, {
                received: ctx.data,
                code: ZodIssueCode.invalid_enum_value,
                options: expectedValues,
            });
            return INVALID;
        }
        return OK(input.data);
    }
    get enum() {
        return this._def.values;
    }
}
_ZodNativeEnum_cache = new WeakMap();
ZodNativeEnum.create = (values, params) => {
    return new ZodNativeEnum({
        values: values,
        typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
        ...processCreateParams(params),
    });
};
class ZodPromise extends ZodType {
    unwrap() {
        return this._def.type;
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.promise &&
            ctx.common.async === false) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.promise,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const promisified = ctx.parsedType === ZodParsedType.promise
            ? ctx.data
            : Promise.resolve(ctx.data);
        return OK(promisified.then((data) => {
            return this._def.type.parseAsync(data, {
                path: ctx.path,
                errorMap: ctx.common.contextualErrorMap,
            });
        }));
    }
}
ZodPromise.create = (schema, params) => {
    return new ZodPromise({
        type: schema,
        typeName: ZodFirstPartyTypeKind.ZodPromise,
        ...processCreateParams(params),
    });
};
class ZodEffects extends ZodType {
    innerType() {
        return this._def.schema;
    }
    sourceType() {
        return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects
            ? this._def.schema.sourceType()
            : this._def.schema;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const effect = this._def.effect || null;
        const checkCtx = {
            addIssue: (arg) => {
                addIssueToContext(ctx, arg);
                if (arg.fatal) {
                    status.abort();
                }
                else {
                    status.dirty();
                }
            },
            get path() {
                return ctx.path;
            },
        };
        checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
        if (effect.type === "preprocess") {
            const processed = effect.transform(ctx.data, checkCtx);
            if (ctx.common.async) {
                return Promise.resolve(processed).then(async (processed) => {
                    if (status.value === "aborted")
                        return INVALID;
                    const result = await this._def.schema._parseAsync({
                        data: processed,
                        path: ctx.path,
                        parent: ctx,
                    });
                    if (result.status === "aborted")
                        return INVALID;
                    if (result.status === "dirty")
                        return DIRTY(result.value);
                    if (status.value === "dirty")
                        return DIRTY(result.value);
                    return result;
                });
            }
            else {
                if (status.value === "aborted")
                    return INVALID;
                const result = this._def.schema._parseSync({
                    data: processed,
                    path: ctx.path,
                    parent: ctx,
                });
                if (result.status === "aborted")
                    return INVALID;
                if (result.status === "dirty")
                    return DIRTY(result.value);
                if (status.value === "dirty")
                    return DIRTY(result.value);
                return result;
            }
        }
        if (effect.type === "refinement") {
            const executeRefinement = (acc) => {
                const result = effect.refinement(acc, checkCtx);
                if (ctx.common.async) {
                    return Promise.resolve(result);
                }
                if (result instanceof Promise) {
                    throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                }
                return acc;
            };
            if (ctx.common.async === false) {
                const inner = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                });
                if (inner.status === "aborted")
                    return INVALID;
                if (inner.status === "dirty")
                    status.dirty();
                // return value is ignored
                executeRefinement(inner.value);
                return { status: status.value, value: inner.value };
            }
            else {
                return this._def.schema
                    ._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx })
                    .then((inner) => {
                    if (inner.status === "aborted")
                        return INVALID;
                    if (inner.status === "dirty")
                        status.dirty();
                    return executeRefinement(inner.value).then(() => {
                        return { status: status.value, value: inner.value };
                    });
                });
            }
        }
        if (effect.type === "transform") {
            if (ctx.common.async === false) {
                const base = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                });
                if (!isValid(base))
                    return base;
                const result = effect.transform(base.value, checkCtx);
                if (result instanceof Promise) {
                    throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
                }
                return { status: status.value, value: result };
            }
            else {
                return this._def.schema
                    ._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx })
                    .then((base) => {
                    if (!isValid(base))
                        return base;
                    return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
                });
            }
        }
        util$4.assertNever(effect);
    }
}
ZodEffects.create = (schema, effect, params) => {
    return new ZodEffects({
        schema,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect,
        ...processCreateParams(params),
    });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
    return new ZodEffects({
        schema,
        effect: { type: "preprocess", transform: preprocess },
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        ...processCreateParams(params),
    });
};
class ZodOptional extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType.undefined) {
            return OK(undefined);
        }
        return this._def.innerType._parse(input);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodOptional.create = (type, params) => {
    return new ZodOptional({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodOptional,
        ...processCreateParams(params),
    });
};
class ZodNullable extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType.null) {
            return OK(null);
        }
        return this._def.innerType._parse(input);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodNullable.create = (type, params) => {
    return new ZodNullable({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodNullable,
        ...processCreateParams(params),
    });
};
class ZodDefault extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        let data = ctx.data;
        if (ctx.parsedType === ZodParsedType.undefined) {
            data = this._def.defaultValue();
        }
        return this._def.innerType._parse({
            data,
            path: ctx.path,
            parent: ctx,
        });
    }
    removeDefault() {
        return this._def.innerType;
    }
}
ZodDefault.create = (type, params) => {
    return new ZodDefault({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodDefault,
        defaultValue: typeof params.default === "function"
            ? params.default
            : () => params.default,
        ...processCreateParams(params),
    });
};
class ZodCatch extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        // newCtx is used to not collect issues from inner types in ctx
        const newCtx = {
            ...ctx,
            common: {
                ...ctx.common,
                issues: [],
            },
        };
        const result = this._def.innerType._parse({
            data: newCtx.data,
            path: newCtx.path,
            parent: {
                ...newCtx,
            },
        });
        if (isAsync(result)) {
            return result.then((result) => {
                return {
                    status: "valid",
                    value: result.status === "valid"
                        ? result.value
                        : this._def.catchValue({
                            get error() {
                                return new ZodError(newCtx.common.issues);
                            },
                            input: newCtx.data,
                        }),
                };
            });
        }
        else {
            return {
                status: "valid",
                value: result.status === "valid"
                    ? result.value
                    : this._def.catchValue({
                        get error() {
                            return new ZodError(newCtx.common.issues);
                        },
                        input: newCtx.data,
                    }),
            };
        }
    }
    removeCatch() {
        return this._def.innerType;
    }
}
ZodCatch.create = (type, params) => {
    return new ZodCatch({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodCatch,
        catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
        ...processCreateParams(params),
    });
};
class ZodNaN extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.nan) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.nan,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return { status: "valid", value: input.data };
    }
}
ZodNaN.create = (params) => {
    return new ZodNaN({
        typeName: ZodFirstPartyTypeKind.ZodNaN,
        ...processCreateParams(params),
    });
};
const BRAND = Symbol("zod_brand");
class ZodBranded extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const data = ctx.data;
        return this._def.type._parse({
            data,
            path: ctx.path,
            parent: ctx,
        });
    }
    unwrap() {
        return this._def.type;
    }
}
class ZodPipeline extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.common.async) {
            const handleAsync = async () => {
                const inResult = await this._def.in._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                });
                if (inResult.status === "aborted")
                    return INVALID;
                if (inResult.status === "dirty") {
                    status.dirty();
                    return DIRTY(inResult.value);
                }
                else {
                    return this._def.out._parseAsync({
                        data: inResult.value,
                        path: ctx.path,
                        parent: ctx,
                    });
                }
            };
            return handleAsync();
        }
        else {
            const inResult = this._def.in._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            });
            if (inResult.status === "aborted")
                return INVALID;
            if (inResult.status === "dirty") {
                status.dirty();
                return {
                    status: "dirty",
                    value: inResult.value,
                };
            }
            else {
                return this._def.out._parseSync({
                    data: inResult.value,
                    path: ctx.path,
                    parent: ctx,
                });
            }
        }
    }
    static create(a, b) {
        return new ZodPipeline({
            in: a,
            out: b,
            typeName: ZodFirstPartyTypeKind.ZodPipeline,
        });
    }
}
class ZodReadonly extends ZodType {
    _parse(input) {
        const result = this._def.innerType._parse(input);
        const freeze = (data) => {
            if (isValid(data)) {
                data.value = Object.freeze(data.value);
            }
            return data;
        };
        return isAsync(result)
            ? result.then((data) => freeze(data))
            : freeze(result);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodReadonly.create = (type, params) => {
    return new ZodReadonly({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodReadonly,
        ...processCreateParams(params),
    });
};
////////////////////////////////////////
////////////////////////////////////////
//////////                    //////////
//////////      z.custom      //////////
//////////                    //////////
////////////////////////////////////////
////////////////////////////////////////
function cleanParams(params, data) {
    const p = typeof params === "function"
        ? params(data)
        : typeof params === "string"
            ? { message: params }
            : params;
    const p2 = typeof p === "string" ? { message: p } : p;
    return p2;
}
function custom(check, _params = {}, 
/**
 * @deprecated
 *
 * Pass `fatal` into the params object instead:
 *
 * ```ts
 * z.string().custom((val) => val.length > 5, { fatal: false })
 * ```
 *
 */
fatal) {
    if (check)
        return ZodAny.create().superRefine((data, ctx) => {
            var _a, _b;
            const r = check(data);
            if (r instanceof Promise) {
                return r.then((r) => {
                    var _a, _b;
                    if (!r) {
                        const params = cleanParams(_params, data);
                        const _fatal = (_b = (_a = params.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
                        ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
                    }
                });
            }
            if (!r) {
                const params = cleanParams(_params, data);
                const _fatal = (_b = (_a = params.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
                ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
            }
            return;
        });
    return ZodAny.create();
}
const late = {
    object: ZodObject.lazycreate,
};
var ZodFirstPartyTypeKind;
(function (ZodFirstPartyTypeKind) {
    ZodFirstPartyTypeKind["ZodString"] = "ZodString";
    ZodFirstPartyTypeKind["ZodNumber"] = "ZodNumber";
    ZodFirstPartyTypeKind["ZodNaN"] = "ZodNaN";
    ZodFirstPartyTypeKind["ZodBigInt"] = "ZodBigInt";
    ZodFirstPartyTypeKind["ZodBoolean"] = "ZodBoolean";
    ZodFirstPartyTypeKind["ZodDate"] = "ZodDate";
    ZodFirstPartyTypeKind["ZodSymbol"] = "ZodSymbol";
    ZodFirstPartyTypeKind["ZodUndefined"] = "ZodUndefined";
    ZodFirstPartyTypeKind["ZodNull"] = "ZodNull";
    ZodFirstPartyTypeKind["ZodAny"] = "ZodAny";
    ZodFirstPartyTypeKind["ZodUnknown"] = "ZodUnknown";
    ZodFirstPartyTypeKind["ZodNever"] = "ZodNever";
    ZodFirstPartyTypeKind["ZodVoid"] = "ZodVoid";
    ZodFirstPartyTypeKind["ZodArray"] = "ZodArray";
    ZodFirstPartyTypeKind["ZodObject"] = "ZodObject";
    ZodFirstPartyTypeKind["ZodUnion"] = "ZodUnion";
    ZodFirstPartyTypeKind["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
    ZodFirstPartyTypeKind["ZodIntersection"] = "ZodIntersection";
    ZodFirstPartyTypeKind["ZodTuple"] = "ZodTuple";
    ZodFirstPartyTypeKind["ZodRecord"] = "ZodRecord";
    ZodFirstPartyTypeKind["ZodMap"] = "ZodMap";
    ZodFirstPartyTypeKind["ZodSet"] = "ZodSet";
    ZodFirstPartyTypeKind["ZodFunction"] = "ZodFunction";
    ZodFirstPartyTypeKind["ZodLazy"] = "ZodLazy";
    ZodFirstPartyTypeKind["ZodLiteral"] = "ZodLiteral";
    ZodFirstPartyTypeKind["ZodEnum"] = "ZodEnum";
    ZodFirstPartyTypeKind["ZodEffects"] = "ZodEffects";
    ZodFirstPartyTypeKind["ZodNativeEnum"] = "ZodNativeEnum";
    ZodFirstPartyTypeKind["ZodOptional"] = "ZodOptional";
    ZodFirstPartyTypeKind["ZodNullable"] = "ZodNullable";
    ZodFirstPartyTypeKind["ZodDefault"] = "ZodDefault";
    ZodFirstPartyTypeKind["ZodCatch"] = "ZodCatch";
    ZodFirstPartyTypeKind["ZodPromise"] = "ZodPromise";
    ZodFirstPartyTypeKind["ZodBranded"] = "ZodBranded";
    ZodFirstPartyTypeKind["ZodPipeline"] = "ZodPipeline";
    ZodFirstPartyTypeKind["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
const instanceOfType = (
// const instanceOfType = <T extends new (...args: any[]) => any>(
cls, params = {
    message: `Input not instance of ${cls.name}`,
}) => custom((data) => data instanceof cls, params);
const stringType = ZodString.create;
const numberType = ZodNumber.create;
const nanType = ZodNaN.create;
const bigIntType = ZodBigInt.create;
const booleanType = ZodBoolean.create;
const dateType = ZodDate.create;
const symbolType = ZodSymbol.create;
const undefinedType = ZodUndefined.create;
const nullType = ZodNull.create;
const anyType = ZodAny.create;
const unknownType = ZodUnknown.create;
const neverType = ZodNever.create;
const voidType = ZodVoid.create;
const arrayType = ZodArray.create;
const objectType = ZodObject.create;
const strictObjectType = ZodObject.strictCreate;
const unionType = ZodUnion.create;
const discriminatedUnionType = ZodDiscriminatedUnion.create;
const intersectionType = ZodIntersection.create;
const tupleType = ZodTuple.create;
const recordType = ZodRecord.create;
const mapType = ZodMap.create;
const setType = ZodSet.create;
const functionType = ZodFunction.create;
const lazyType = ZodLazy.create;
const literalType = ZodLiteral.create;
const enumType = ZodEnum.create;
const nativeEnumType = ZodNativeEnum.create;
const promiseType = ZodPromise.create;
const effectsType = ZodEffects.create;
const optionalType = ZodOptional.create;
const nullableType = ZodNullable.create;
const preprocessType = ZodEffects.createWithPreprocess;
const pipelineType = ZodPipeline.create;
const ostring = () => stringType().optional();
const onumber = () => numberType().optional();
const oboolean = () => booleanType().optional();
const coerce$2 = {
    string: ((arg) => ZodString.create({ ...arg, coerce: true })),
    number: ((arg) => ZodNumber.create({ ...arg, coerce: true })),
    boolean: ((arg) => ZodBoolean.create({
        ...arg,
        coerce: true,
    })),
    bigint: ((arg) => ZodBigInt.create({ ...arg, coerce: true })),
    date: ((arg) => ZodDate.create({ ...arg, coerce: true })),
};
const NEVER = INVALID;

var z = /*#__PURE__*/Object.freeze({
    __proto__: null,
    defaultErrorMap: errorMap,
    setErrorMap: setErrorMap,
    getErrorMap: getErrorMap,
    makeIssue: makeIssue,
    EMPTY_PATH: EMPTY_PATH,
    addIssueToContext: addIssueToContext,
    ParseStatus: ParseStatus,
    INVALID: INVALID,
    DIRTY: DIRTY,
    OK: OK,
    isAborted: isAborted,
    isDirty: isDirty,
    isValid: isValid,
    isAsync: isAsync,
    get util () { return util$4; },
    get objectUtil () { return objectUtil; },
    ZodParsedType: ZodParsedType,
    getParsedType: getParsedType,
    ZodType: ZodType,
    datetimeRegex: datetimeRegex,
    ZodString: ZodString,
    ZodNumber: ZodNumber,
    ZodBigInt: ZodBigInt,
    ZodBoolean: ZodBoolean,
    ZodDate: ZodDate,
    ZodSymbol: ZodSymbol,
    ZodUndefined: ZodUndefined,
    ZodNull: ZodNull,
    ZodAny: ZodAny,
    ZodUnknown: ZodUnknown,
    ZodNever: ZodNever,
    ZodVoid: ZodVoid,
    ZodArray: ZodArray,
    ZodObject: ZodObject,
    ZodUnion: ZodUnion,
    ZodDiscriminatedUnion: ZodDiscriminatedUnion,
    ZodIntersection: ZodIntersection,
    ZodTuple: ZodTuple,
    ZodRecord: ZodRecord,
    ZodMap: ZodMap,
    ZodSet: ZodSet,
    ZodFunction: ZodFunction,
    ZodLazy: ZodLazy,
    ZodLiteral: ZodLiteral,
    ZodEnum: ZodEnum,
    ZodNativeEnum: ZodNativeEnum,
    ZodPromise: ZodPromise,
    ZodEffects: ZodEffects,
    ZodTransformer: ZodEffects,
    ZodOptional: ZodOptional,
    ZodNullable: ZodNullable,
    ZodDefault: ZodDefault,
    ZodCatch: ZodCatch,
    ZodNaN: ZodNaN,
    BRAND: BRAND,
    ZodBranded: ZodBranded,
    ZodPipeline: ZodPipeline,
    ZodReadonly: ZodReadonly,
    custom: custom,
    Schema: ZodType,
    ZodSchema: ZodType,
    late: late,
    get ZodFirstPartyTypeKind () { return ZodFirstPartyTypeKind; },
    coerce: coerce$2,
    any: anyType,
    array: arrayType,
    bigint: bigIntType,
    boolean: booleanType,
    date: dateType,
    discriminatedUnion: discriminatedUnionType,
    effect: effectsType,
    'enum': enumType,
    'function': functionType,
    'instanceof': instanceOfType,
    intersection: intersectionType,
    lazy: lazyType,
    literal: literalType,
    map: mapType,
    nan: nanType,
    nativeEnum: nativeEnumType,
    never: neverType,
    'null': nullType,
    nullable: nullableType,
    number: numberType,
    object: objectType,
    oboolean: oboolean,
    onumber: onumber,
    optional: optionalType,
    ostring: ostring,
    pipeline: pipelineType,
    preprocess: preprocessType,
    promise: promiseType,
    record: recordType,
    set: setType,
    strictObject: strictObjectType,
    string: stringType,
    symbol: symbolType,
    transformer: effectsType,
    tuple: tupleType,
    'undefined': undefinedType,
    union: unionType,
    unknown: unknownType,
    'void': voidType,
    NEVER: NEVER,
    ZodIssueCode: ZodIssueCode,
    quotelessJson: quotelessJson,
    ZodError: ZodError
});

// src/shared/constants/extension-types.ts
var APP_EXTENSION_TYPES = ["interface", "display", "layout", "module", "panel", "theme"];
var API_EXTENSION_TYPES = ["hook", "endpoint"];
var HYBRID_EXTENSION_TYPES = ["operation"];
var BUNDLE_EXTENSION_TYPES = ["bundle"];
[
  ...APP_EXTENSION_TYPES,
  ...API_EXTENSION_TYPES,
  ...HYBRID_EXTENSION_TYPES,
  ...BUNDLE_EXTENSION_TYPES
];
[
  ...APP_EXTENSION_TYPES,
  ...API_EXTENSION_TYPES,
  ...HYBRID_EXTENSION_TYPES
];
[...APP_EXTENSION_TYPES, ...HYBRID_EXTENSION_TYPES];

// src/shared/constants/pkg-key.ts
var EXTENSION_PKG_KEY = "directus:extension";
var SplitEntrypoint = z.object({
  app: z.string(),
  api: z.string()
});
var ExtensionSandboxRequestedScopes = z.object({
  request: z.optional(
    z.object({
      urls: z.array(z.string()),
      methods: z.array(
        z.union([z.literal("GET"), z.literal("POST"), z.literal("PATCH"), z.literal("PUT"), z.literal("DELETE")])
      )
    })
  ),
  log: z.optional(z.object({})),
  sleep: z.optional(z.object({}))
});
var ExtensionSandboxOptions = z.optional(
  z.object({
    enabled: z.boolean(),
    requestedScopes: ExtensionSandboxRequestedScopes
  })
);
var ExtensionOptionsBundleEntry = z.union([
  z.object({
    type: z.enum(API_EXTENSION_TYPES),
    name: z.string(),
    source: z.string()
  }),
  z.object({
    type: z.enum(APP_EXTENSION_TYPES),
    name: z.string(),
    source: z.string()
  }),
  z.object({
    type: z.enum(HYBRID_EXTENSION_TYPES),
    name: z.string(),
    source: SplitEntrypoint
  })
]);
var ExtensionOptionsBase = z.object({
  host: z.string(),
  hidden: z.boolean().optional()
});
var ExtensionOptionsApp = z.object({
  type: z.enum(APP_EXTENSION_TYPES),
  path: z.string(),
  source: z.string()
});
var ExtensionOptionsApi = z.object({
  type: z.enum(API_EXTENSION_TYPES),
  path: z.string(),
  source: z.string(),
  sandbox: ExtensionSandboxOptions
});
var ExtensionOptionsHybrid = z.object({
  type: z.enum(HYBRID_EXTENSION_TYPES),
  path: SplitEntrypoint,
  source: SplitEntrypoint,
  sandbox: ExtensionSandboxOptions
});
var ExtensionOptionsBundle = z.object({
  type: z.literal("bundle"),
  partial: z.boolean().optional(),
  path: SplitEntrypoint,
  entries: z.array(ExtensionOptionsBundleEntry)
});
z.array(ExtensionOptionsBundleEntry);
var ExtensionOptions = ExtensionOptionsBase.and(
  z.union([ExtensionOptionsApp, ExtensionOptionsApi, ExtensionOptionsHybrid, ExtensionOptionsBundle])
);

// src/shared/schemas/manifest.ts
z.object({
  name: z.string(),
  version: z.string(),
  type: z.union([z.literal("module"), z.literal("commonjs")]).optional(),
  description: z.string().optional(),
  icon: z.string().optional(),
  dependencies: z.record(z.string()).optional(),
  devDependencies: z.record(z.string()).optional(),
  [EXTENSION_PKG_KEY]: ExtensionOptions
});
function defineHook(config) {
  return config;
}
function defineEndpoint(config) {
  return config;
}

const ALGORITHM = "aes-256-cbc";
const SALT_LENGTH = 16;
const ITERATIONS = 1e4;
const KEY_LENGTH = 32;
const DIGEST = "sha512";
const aesEncrypt = (plaintext, secret) => {
  try {
    const salt = crypto$1.randomBytes(SALT_LENGTH);
    const key = crypto$1.pbkdf2Sync(secret, salt, ITERATIONS, KEY_LENGTH, DIGEST);
    const iv = crypto$1.randomBytes(16);
    const cipher = crypto$1.createCipheriv(ALGORITHM, key, iv);
    let encrypted = cipher.update(plaintext, "utf8", "hex");
    encrypted += cipher.final("hex");
    return `${salt.toString("hex")}:${iv.toString("hex")}:${encrypted}`;
  } catch (err) {
    console.error("Encryption failed:", err);
    throw new Error("An error occurred during encryption");
  }
};
const aesDecrypt = (ciphertext, secret) => {
  try {
    const [saltHex, ivHex, encryptedText] = ciphertext.split(":");
    if (!saltHex || !ivHex || !encryptedText) {
      throw new Error("Invalid ciphertext format");
    }
    const salt = Buffer.from(saltHex, "hex");
    const iv = Buffer.from(ivHex, "hex");
    const key = crypto$1.pbkdf2Sync(secret, salt, ITERATIONS, KEY_LENGTH, DIGEST);
    const decipher = crypto$1.createDecipheriv(ALGORITHM, key, iv);
    let decrypted = decipher.update(encryptedText, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
  } catch (err) {
    console.error("Decryption failed:", err);
    throw new Error("An error occurred during decryption - potentially invalid key or corrupted ciphertext");
  }
};

const oidcUserLogsModel = {
  collection: "ext_oidc_user_logs",
  fields: [
    {
      field: "id",
      type: "integer",
      schema: {
        data_type: "integer",
        default_value: "nextval('ext_oidc_settings_id_seq'::regclass)",
        numeric_precision: 32,
        numeric_scale: 0,
        is_unique: true,
        is_primary_key: true,
        has_auto_increment: true
      },
      meta: {
        field: "id",
        interface: "input",
        readonly: true,
        hidden: true,
        sort: 1,
        width: "full"
      }
    },
    {
      field: "date_created",
      type: "timestamp",
      meta: {
        special: ["date-created"],
        interface: "datetime",
        readonly: true,
        hidden: true,
        width: "full",
        display: "datetime",
        display_options: { relative: true }
      },
      schema: {}
    },
    {
      field: "client_name",
      type: "string",
      schema: {
        data_type: "character varying",
        max_length: 255,
        is_nullable: true
      },
      meta: {
        field: "client_name",
        interface: "input",
        hidden: false,
        width: "full"
      }
    },
    {
      field: "client_id",
      type: "string",
      schema: {
        data_type: "character varying",
        max_length: 255,
        is_nullable: true
      },
      meta: {
        field: "client_id",
        interface: "input",
        hidden: false,
        width: "full"
      }
    },
    {
      field: "client_uri",
      type: "string",
      schema: {
        data_type: "text",
        is_nullable: true
      },
      meta: {
        field: "client_uri",
        interface: "input",
        hidden: false,
        width: "full"
      }
    },
    {
      field: "username",
      type: "string",
      schema: {
        data_type: "character varying",
        max_length: 255,
        is_nullable: true
      },
      meta: {
        field: "username",
        interface: "input",
        hidden: false,
        width: "full"
      }
    },
    {
      field: "user_id",
      type: "string",
      schema: {
        data_type: "character varying",
        max_length: 255,
        is_nullable: true
      },
      meta: {
        field: "user_id",
        interface: "input",
        hidden: false,
        width: "full"
      }
    },
    {
      field: "ip",
      type: "string",
      schema: {
        data_type: "character varying",
        max_length: 255,
        is_nullable: true
      },
      meta: {
        field: "ip",
        interface: "input",
        hidden: false,
        width: "full"
      }
    },
    {
      field: "user_agent",
      type: "string",
      schema: {
        data_type: "text",
        is_nullable: true
      },
      meta: {
        field: "user_agent",
        interface: "input",
        hidden: false,
        width: "full"
      }
    }
  ],
  meta: {
    collection: "ext_oidc_user_logs",
    hidden: true,
    singleton: false,
    archive_app_filter: true,
    accountability: "all",
    collapse: "open",
    versioning: false
  },
  schema: {
    schema: "public",
    name: "ext_oidc_user_logs"
  }
};
const oidcClientModel = {
  collection: "ext_oidc_clients",
  fields: [
    {
      field: "id",
      type: "integer",
      schema: {
        data_type: "integer",
        default_value: "nextval('ext_oidc_settings_id_seq'::regclass)",
        numeric_precision: 32,
        numeric_scale: 0,
        is_unique: true,
        is_primary_key: true,
        has_auto_increment: true
      },
      meta: {
        field: "id",
        interface: "input",
        readonly: true,
        hidden: true,
        sort: 1,
        width: "full"
      }
    },
    {
      field: "user_created",
      type: "uuid",
      meta: {
        special: ["user-created"],
        interface: "select-dropdown-m2o",
        options: { template: "{{avatar}} {{first_name}} {{last_name}}" },
        display: "user",
        readonly: true,
        hidden: true,
        width: "full"
      },
      schema: {}
    },
    {
      field: "date_created",
      type: "timestamp",
      meta: {
        special: ["date-created"],
        interface: "datetime",
        readonly: true,
        hidden: true,
        width: "full",
        display: "datetime",
        display_options: { relative: true }
      },
      schema: {}
    },
    {
      field: "user_updated",
      type: "uuid",
      meta: {
        special: ["user-updated"],
        interface: "select-dropdown-m2o",
        options: { template: "{{avatar}} {{first_name}} {{last_name}}" },
        display: "user",
        readonly: true,
        hidden: true,
        width: "full"
      },
      schema: {}
    },
    {
      field: "date_updated",
      type: "timestamp",
      meta: {
        special: ["date-updated"],
        interface: "datetime",
        readonly: true,
        hidden: true,
        width: "full",
        display: "datetime",
        display_options: { relative: true }
      },
      schema: {}
    },
    {
      field: "client_name",
      type: "string",
      schema: {
        data_type: "character varying",
        max_length: 255,
        is_nullable: true
      },
      meta: {
        field: "client_name",
        interface: "input",
        hidden: false,
        width: "full",
        required: true
      }
    },
    {
      field: "client_site",
      type: "string",
      schema: {
        data_type: "character varying",
        max_length: 255,
        is_nullable: true
      },
      meta: {
        field: "client_site",
        interface: "input",
        hidden: false,
        width: "full",
        required: true
      }
    },
    {
      field: "status",
      type: "boolean",
      schema: {
        data_type: "boolean",
        default_value: true,
        is_nullable: true
      },
      meta: {
        field: "status",
        special: ["cast-boolean"],
        interface: "boolean",
        hidden: false,
        width: "full"
      }
    },
    {
      field: "client_id",
      type: "string",
      schema: {
        data_type: "character varying",
        max_length: 255,
        is_nullable: true,
        is_unique: true
      },
      meta: {
        field: "client_id",
        interface: "input",
        hidden: false,
        width: "full",
        required: true
      }
    },
    {
      field: "redirect_uri",
      type: "string",
      schema: {
        data_type: "text",
        is_nullable: true
      },
      meta: {
        field: "redirect_uri",
        interface: "input",
        hidden: false,
        width: "full",
        required: true
      }
    },
    {
      field: "client_secret",
      type: "string",
      schema: {
        data_type: "character varying",
        max_length: 255,
        is_nullable: true
      },
      meta: {
        field: "client_secret",
        interface: "input",
        hidden: false,
        width: "full",
        required: true
      }
    }
  ],
  meta: {
    collection: "ext_oidc_clients",
    hidden: true,
    singleton: false,
    archive_app_filter: true,
    accountability: "all",
    collapse: "open",
    versioning: false
  },
  schema: {
    schema: "public",
    name: "ext_oidc_clients"
  }
};
const oidcSettingsModel = {
  collection: "ext_oidc_settings",
  fields: [
    {
      field: "id",
      type: "integer",
      schema: {
        name: "id",
        data_type: "integer",
        default_value: "nextval('ext_oidc_settings_id_seq'::regclass)",
        numeric_precision: 32,
        numeric_scale: 0,
        is_unique: true,
        is_primary_key: true,
        has_auto_increment: true
      },
      meta: {
        field: "id",
        interface: "input",
        readonly: true,
        hidden: true,
        sort: 1,
        width: "full"
      }
    },
    {
      field: "user_created",
      type: "uuid",
      meta: {
        special: ["user-created"],
        interface: "select-dropdown-m2o",
        options: { template: "{{avatar}} {{first_name}} {{last_name}}" },
        display: "user",
        readonly: true,
        hidden: true,
        width: "full"
      },
      schema: {}
    },
    {
      field: "date_created",
      type: "timestamp",
      meta: {
        special: ["date-created"],
        interface: "datetime",
        readonly: true,
        hidden: true,
        width: "full",
        display: "datetime",
        display_options: { relative: true }
      },
      schema: {}
    },
    {
      field: "user_updated",
      type: "uuid",
      meta: {
        special: ["user-updated"],
        interface: "select-dropdown-m2o",
        options: { template: "{{avatar}} {{first_name}} {{last_name}}" },
        display: "user",
        readonly: true,
        hidden: true,
        width: "full"
      },
      schema: {}
    },
    {
      field: "date_updated",
      type: "timestamp",
      meta: {
        special: ["date-updated"],
        interface: "datetime",
        readonly: true,
        hidden: true,
        width: "full",
        display: "datetime",
        display_options: { relative: true }
      },
      schema: {}
    },
    {
      field: "issuer",
      type: "text",
      schema: {
        data_type: "text",
        is_nullable: true
      },
      meta: {
        interface: "input",
        width: "full"
      }
    },
    {
      field: "token_expires_in",
      type: "integer",
      schema: {
        data_type: "integer",
        default_value: 300,
        is_nullable: true
      },
      meta: {
        interface: "input",
        width: "full"
      }
    },
    {
      field: "refresh_token_expires_in",
      type: "integer",
      schema: {
        data_type: "integer",
        default_value: 86400,
        is_nullable: true
      },
      meta: {
        interface: "input",
        width: "full"
      }
    },
    {
      field: "allow_refresh_tokens",
      type: "boolean",
      schema: {
        data_type: "boolean",
        is_nullable: true
      },
      meta: {
        special: ["cast-boolean"],
        interface: "boolean",
        width: "full"
      }
    },
    {
      field: "require_client_secret",
      type: "boolean",
      schema: {
        data_type: "boolean",
        is_nullable: true
      },
      meta: {
        special: ["cast-boolean"],
        interface: "boolean",
        width: "full"
      }
    },
    {
      field: "publicKeyPem",
      type: "text",
      schema: {
        data_type: "text",
        is_nullable: true
      },
      meta: {
        interface: "input-code",
        width: "full"
      }
    },
    {
      field: "privateKeyPem",
      type: "text",
      schema: {
        data_type: "text",
        is_nullable: true
      },
      meta: {
        interface: "input-code",
        width: "full"
      }
    },
    {
      field: "code_expires_in",
      type: "integer",
      schema: {
        data_type: "integer",
        default_value: 300,
        is_nullable: true
      },
      meta: {
        interface: "input",
        width: "full"
      }
    }
  ],
  meta: {
    collection: "ext_oidc_settings",
    hidden: true,
    singleton: true,
    archive_app_filter: true,
    accountability: "all",
    collapse: "open",
    versioning: false
  },
  schema: {
    schema: "public",
    name: "ext_oidc_settings"
  }
};

var e0 = defineHook(
  ({ filter, init, embed }, { database, getSchema, services, env }) => {
    embed(
      "head",
      `
<script>
/**
 * SPA Route Change Listener (handles route redirection after oidc login, as directus adds "admin" prefix to all redirects, which needs to be handled)
 * @description Listens for route changes in a SPA application and unsubscribes under specific conditions.
 * @param {Function} callback - The callback function to execute on route change.
 * @param {Object} options - Configuration options.
 * @param {string} options.initialPath - The initial path from which listening starts.
 * @param {string} options.targetPath - The target path to match for specific actions.
 * @returns {Function} A function to unsubscribe the listener.
 */
function setupConditionalRouteListener(callback, options = {}) {
  const {
    initialPath = '/admin/login',
    targetPath = '/admin/oidc-provider/authorize'
  } = options;

  // Verify if currently on the initial path
  const currentPath = window.location.pathname;
  if (currentPath !== initialPath) {
    return () => {}; // Return an empty function to avoid call errors
  }

  let unsubscribe = null;
  let isUnsubscribed = false;

  // The actual route listener function
  function handleRouteChange(newPath, oldPath) {

    // Check if redirected to the target path
    if (newPath.startsWith(targetPath)) {
      window.location.reload();
      return;
    }

    // Check if still on the initial path (ignore)
    if (newPath === initialPath) {
      return;
    }

    // Redirect to other paths, then unsubscribe
    console.log('Redirected to a non-target path, unsubscribing');
    if (unsubscribe && !isUnsubscribed) {
      unsubscribe();
      isUnsubscribed = true;
    }
  }

  // Set up the listener
  unsubscribe = setupSPARouteListener(handleRouteChange);

  // Return the unsubscribe function
  return () => {
    if (unsubscribe && !isUnsubscribed) {
      unsubscribe();
      isUnsubscribed = true;
    }
  };
}

// Original SPA route listener function
function setupSPARouteListener(callback) {
  let currentPath = window.location.pathname + window.location.search + window.location.hash;

  function checkRouteChange() {
    const newPath = window.location.pathname + window.location.search + window.location.hash;
    if (newPath !== currentPath) {
      const oldPath = currentPath;
      currentPath = newPath;
      callback(newPath, oldPath);
    }
  }

  window.addEventListener('popstate', checkRouteChange);
  window.addEventListener('hashchange', checkRouteChange);

  const originalPushState = window.history.pushState;
  const originalReplaceState = window.history.replaceState;

  window.history.pushState = function(state, title, url) {
    originalPushState.apply(this, arguments);
    checkRouteChange();
  };

  window.history.replaceState = function(state, title, url) {
    originalReplaceState.apply(this, arguments);
    checkRouteChange();
  };

  return function() {
    window.removeEventListener('popstate', checkRouteChange);
    window.removeEventListener('hashchange', checkRouteChange);
    window.history.pushState = originalPushState;
    window.history.replaceState = originalReplaceState;
  };
}

const unsubscribe = setupConditionalRouteListener(
  (newPath, oldPath) => {
    // console.log("router changed", newPath, oldPath)
  },
  {
    initialPath: '/admin/login',
    targetPath: '/admin/oidc-provider/authorize'
  }
);
<\/script>
`
    );
    const OIDC_ENDPOINT = "/oidc-provider";
    const ADMIN_OIDC_ENDPOINT = "/admin/oidc-provider";
    const { SECRET } = env;
    const { CollectionsService, FieldsService } = services;
    init("app.before", async ({ app }) => {
      const modelsToCheck = [
        oidcUserLogsModel,
        oidcClientModel,
        oidcSettingsModel
      ];
      const collectionsService = new CollectionsService({
        schema: await getSchema()
      });
      const ensureCollectionExists = async (model) => {
        try {
          await collectionsService.readOne(model.collection);
        } catch (error) {
          await collectionsService.createOne(model);
        }
      };
      for (const model of modelsToCheck) {
        await ensureCollectionExists(model);
      }
    });
    init("middlewares.before", async ({ app }) => {
      app.use(async (req, res, next) => {
        if (req.path.startsWith(OIDC_ENDPOINT)) {
          if (req.path === `${OIDC_ENDPOINT}/userinfo` && req.query.access_token) {
            req.query._access_token = req.query.access_token;
            delete req.query.access_token;
          } else {
            req.headers._authorization = req.headers.authorization;
            delete req.headers.authorization;
          }
          return next();
        }
        if (req.path.startsWith(ADMIN_OIDC_ENDPOINT)) {
          const queryString = req.url.includes("?") ? req.url.substring(req.url.indexOf("?")) : "";
          const newPath = `${req.path.replace(
            ADMIN_OIDC_ENDPOINT,
            OIDC_ENDPOINT
          )}${queryString}`;
          return res.redirect(302, newPath);
        }
        next();
      });
    });
    filter("users.update", async (item) => {
      var _a;
      if ((_a = item.last_page) == null ? void 0 : _a.startsWith(OIDC_ENDPOINT)) {
        item.last_page = "/content";
      }
      return item;
    });
    filter("ext_oidc_clients.items.read", async (items) => {
      items = items.map((item) => {
        if (item.client_secret && item.client_secret !== "") {
          try {
            item.client_secret = aesDecrypt(item.client_secret, SECRET);
          } catch (error) {
            console.error("Error decrypting client_secret:", error);
          }
        }
        return item;
      });
      return items;
    });
    filter("ext_oidc_clients.items.create", async (item) => {
      if (item.client_secret && item.client_secret !== "") {
        try {
          item.client_secret = aesEncrypt(item.client_secret, SECRET);
        } catch (error) {
          console.error("Error encrypting client_secret:", error);
        }
      }
      return item;
    });
    filter("ext_oidc_clients.items.update", async (item) => {
      if (item.client_secret && item.client_secret !== "") {
        try {
          item.client_secret = aesEncrypt(item.client_secret, SECRET);
        } catch (error) {
          console.error("Error decrypting client_secret:", error);
        }
      }
      return item;
    });
    filter(
      "ext_oidc_settings.items.read",
      async (items, meta, context) => {
        items = items.map((item) => {
          return keyDecrypt(item);
        });
        return items;
      }
    );
    filter(
      "ext_oidc_settings.items.update",
      async (item, meta, context) => {
        return keyEncrypt(item);
      }
    );
    filter(
      "ext_oidc_settings.items.create",
      async (item, meta, context) => {
        return keyEncrypt(item);
      }
    );
    const keyDecrypt = (item) => {
      let { privateKeyPem, publicKeyPem } = item;
      if (!privateKeyPem || !publicKeyPem) {
        return item;
      }
      try {
        publicKeyPem = aesDecrypt(publicKeyPem, SECRET);
        if (publicKeyPem !== "" && publicKeyPem.indexOf("......") === -1 && publicKeyPem.indexOf("BEGIN PUBLIC KEY") !== -1 && publicKeyPem.indexOf("END PUBLIC KEY") !== -1) {
          publicKeyPem = [
            publicKeyPem.split("\n")[0],
            publicKeyPem.split("\n")[1],
            "......",
            publicKeyPem.split("\n")[publicKeyPem.split("\n").length - 2],
            publicKeyPem.split("\n")[publicKeyPem.split("\n").length - 1]
          ];
          item.publicKeyPem = publicKeyPem.join("\n");
        }
      } catch (error) {
        console.error("Error decrypting publicKeyPem:", error);
      }
      try {
        privateKeyPem = aesDecrypt(privateKeyPem, SECRET);
        if (privateKeyPem !== "" && privateKeyPem.indexOf("......") === -1 && privateKeyPem.indexOf("BEGIN PRIVATE KEY") !== -1 && privateKeyPem.indexOf("END PRIVATE KEY") !== -1) {
          privateKeyPem = [
            privateKeyPem.split("\n")[0],
            privateKeyPem.split("\n")[1],
            "......",
            privateKeyPem.split("\n")[privateKeyPem.split("\n").length - 2],
            privateKeyPem.split("\n")[privateKeyPem.split("\n").length - 1]
          ];
          item.privateKeyPem = privateKeyPem.join("\n");
        }
      } catch (error) {
        console.error("Error decrypting privateKeyPem:", error);
      }
      return item;
    };
    const keyEncrypt = (item) => {
      let publicKeyPem = item == null ? void 0 : item.publicKeyPem;
      let privateKeyPem = item == null ? void 0 : item.privateKeyPem;
      if (publicKeyPem && publicKeyPem !== "" && publicKeyPem.indexOf("......") === -1 && publicKeyPem.indexOf("BEGIN PUBLIC KEY") !== -1 && publicKeyPem.indexOf("END PUBLIC KEY") !== -1) {
        try {
          publicKeyPem = aesEncrypt(publicKeyPem, SECRET);
          item.publicKeyPem = publicKeyPem;
        } catch (error) {
          console.error("Error encrypting publicKeyPem:", error);
        }
      } else {
        delete item.publicKeyPem;
      }
      if (privateKeyPem && privateKeyPem !== "" && privateKeyPem.indexOf("......") === -1 && privateKeyPem.indexOf("BEGIN PRIVATE KEY") !== -1 && privateKeyPem.indexOf("END PRIVATE KEY") !== -1) {
        try {
          privateKeyPem = aesEncrypt(privateKeyPem, SECRET);
          item.privateKeyPem = privateKeyPem;
        } catch (error) {
          console.error("Error encrypting privateKeyPem:", error);
        }
      } else {
        delete item.privateKeyPem;
      }
      return item;
    };
  }
);

var bodyParser$1 = {exports: {}};

var httpErrors = {exports: {}};

/*!
 * depd
 * Copyright(c) 2014-2018 Douglas Christopher Wilson
 * MIT Licensed
 */

var depd_1;
var hasRequiredDepd;

function requireDepd () {
	if (hasRequiredDepd) return depd_1;
	hasRequiredDepd = 1;
	/**
	 * Module dependencies.
	 */

	var relative = require$$1$3.relative;

	/**
	 * Module exports.
	 */

	depd_1 = depd;

	/**
	 * Get the path to base files on.
	 */

	var basePath = process.cwd();

	/**
	 * Determine if namespace is contained in the string.
	 */

	function containsNamespace (str, namespace) {
	  var vals = str.split(/[ ,]+/);
	  var ns = String(namespace).toLowerCase();

	  for (var i = 0; i < vals.length; i++) {
	    var val = vals[i];

	    // namespace contained
	    if (val && (val === '*' || val.toLowerCase() === ns)) {
	      return true
	    }
	  }

	  return false
	}

	/**
	 * Convert a data descriptor to accessor descriptor.
	 */

	function convertDataDescriptorToAccessor (obj, prop, message) {
	  var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
	  var value = descriptor.value;

	  descriptor.get = function getter () { return value };

	  if (descriptor.writable) {
	    descriptor.set = function setter (val) { return (value = val) };
	  }

	  delete descriptor.value;
	  delete descriptor.writable;

	  Object.defineProperty(obj, prop, descriptor);

	  return descriptor
	}

	/**
	 * Create arguments string to keep arity.
	 */

	function createArgumentsString (arity) {
	  var str = '';

	  for (var i = 0; i < arity; i++) {
	    str += ', arg' + i;
	  }

	  return str.substr(2)
	}

	/**
	 * Create stack string from stack.
	 */

	function createStackString (stack) {
	  var str = this.name + ': ' + this.namespace;

	  if (this.message) {
	    str += ' deprecated ' + this.message;
	  }

	  for (var i = 0; i < stack.length; i++) {
	    str += '\n    at ' + stack[i].toString();
	  }

	  return str
	}

	/**
	 * Create deprecate for namespace in caller.
	 */

	function depd (namespace) {
	  if (!namespace) {
	    throw new TypeError('argument namespace is required')
	  }

	  var stack = getStack();
	  var site = callSiteLocation(stack[1]);
	  var file = site[0];

	  function deprecate (message) {
	    // call to self as log
	    log.call(deprecate, message);
	  }

	  deprecate._file = file;
	  deprecate._ignored = isignored(namespace);
	  deprecate._namespace = namespace;
	  deprecate._traced = istraced(namespace);
	  deprecate._warned = Object.create(null);

	  deprecate.function = wrapfunction;
	  deprecate.property = wrapproperty;

	  return deprecate
	}

	/**
	 * Determine if event emitter has listeners of a given type.
	 *
	 * The way to do this check is done three different ways in Node.js >= 0.8
	 * so this consolidates them into a minimal set using instance methods.
	 *
	 * @param {EventEmitter} emitter
	 * @param {string} type
	 * @returns {boolean}
	 * @private
	 */

	function eehaslisteners (emitter, type) {
	  var count = typeof emitter.listenerCount !== 'function'
	    ? emitter.listeners(type).length
	    : emitter.listenerCount(type);

	  return count > 0
	}

	/**
	 * Determine if namespace is ignored.
	 */

	function isignored (namespace) {
	  if (process.noDeprecation) {
	    // --no-deprecation support
	    return true
	  }

	  var str = process.env.NO_DEPRECATION || '';

	  // namespace ignored
	  return containsNamespace(str, namespace)
	}

	/**
	 * Determine if namespace is traced.
	 */

	function istraced (namespace) {
	  if (process.traceDeprecation) {
	    // --trace-deprecation support
	    return true
	  }

	  var str = process.env.TRACE_DEPRECATION || '';

	  // namespace traced
	  return containsNamespace(str, namespace)
	}

	/**
	 * Display deprecation message.
	 */

	function log (message, site) {
	  var haslisteners = eehaslisteners(process, 'deprecation');

	  // abort early if no destination
	  if (!haslisteners && this._ignored) {
	    return
	  }

	  var caller;
	  var callFile;
	  var callSite;
	  var depSite;
	  var i = 0;
	  var seen = false;
	  var stack = getStack();
	  var file = this._file;

	  if (site) {
	    // provided site
	    depSite = site;
	    callSite = callSiteLocation(stack[1]);
	    callSite.name = depSite.name;
	    file = callSite[0];
	  } else {
	    // get call site
	    i = 2;
	    depSite = callSiteLocation(stack[i]);
	    callSite = depSite;
	  }

	  // get caller of deprecated thing in relation to file
	  for (; i < stack.length; i++) {
	    caller = callSiteLocation(stack[i]);
	    callFile = caller[0];

	    if (callFile === file) {
	      seen = true;
	    } else if (callFile === this._file) {
	      file = this._file;
	    } else if (seen) {
	      break
	    }
	  }

	  var key = caller
	    ? depSite.join(':') + '__' + caller.join(':')
	    : undefined;

	  if (key !== undefined && key in this._warned) {
	    // already warned
	    return
	  }

	  this._warned[key] = true;

	  // generate automatic message from call site
	  var msg = message;
	  if (!msg) {
	    msg = callSite === depSite || !callSite.name
	      ? defaultMessage(depSite)
	      : defaultMessage(callSite);
	  }

	  // emit deprecation if listeners exist
	  if (haslisteners) {
	    var err = DeprecationError(this._namespace, msg, stack.slice(i));
	    process.emit('deprecation', err);
	    return
	  }

	  // format and write message
	  var format = process.stderr.isTTY
	    ? formatColor
	    : formatPlain;
	  var output = format.call(this, msg, caller, stack.slice(i));
	  process.stderr.write(output + '\n', 'utf8');
	}

	/**
	 * Get call site location as array.
	 */

	function callSiteLocation (callSite) {
	  var file = callSite.getFileName() || '<anonymous>';
	  var line = callSite.getLineNumber();
	  var colm = callSite.getColumnNumber();

	  if (callSite.isEval()) {
	    file = callSite.getEvalOrigin() + ', ' + file;
	  }

	  var site = [file, line, colm];

	  site.callSite = callSite;
	  site.name = callSite.getFunctionName();

	  return site
	}

	/**
	 * Generate a default message from the site.
	 */

	function defaultMessage (site) {
	  var callSite = site.callSite;
	  var funcName = site.name;

	  // make useful anonymous name
	  if (!funcName) {
	    funcName = '<anonymous@' + formatLocation(site) + '>';
	  }

	  var context = callSite.getThis();
	  var typeName = context && callSite.getTypeName();

	  // ignore useless type name
	  if (typeName === 'Object') {
	    typeName = undefined;
	  }

	  // make useful type name
	  if (typeName === 'Function') {
	    typeName = context.name || typeName;
	  }

	  return typeName && callSite.getMethodName()
	    ? typeName + '.' + funcName
	    : funcName
	}

	/**
	 * Format deprecation message without color.
	 */

	function formatPlain (msg, caller, stack) {
	  var timestamp = new Date().toUTCString();

	  var formatted = timestamp +
	    ' ' + this._namespace +
	    ' deprecated ' + msg;

	  // add stack trace
	  if (this._traced) {
	    for (var i = 0; i < stack.length; i++) {
	      formatted += '\n    at ' + stack[i].toString();
	    }

	    return formatted
	  }

	  if (caller) {
	    formatted += ' at ' + formatLocation(caller);
	  }

	  return formatted
	}

	/**
	 * Format deprecation message with color.
	 */

	function formatColor (msg, caller, stack) {
	  var formatted = '\x1b[36;1m' + this._namespace + '\x1b[22;39m' + // bold cyan
	    ' \x1b[33;1mdeprecated\x1b[22;39m' + // bold yellow
	    ' \x1b[0m' + msg + '\x1b[39m'; // reset

	  // add stack trace
	  if (this._traced) {
	    for (var i = 0; i < stack.length; i++) {
	      formatted += '\n    \x1b[36mat ' + stack[i].toString() + '\x1b[39m'; // cyan
	    }

	    return formatted
	  }

	  if (caller) {
	    formatted += ' \x1b[36m' + formatLocation(caller) + '\x1b[39m'; // cyan
	  }

	  return formatted
	}

	/**
	 * Format call site location.
	 */

	function formatLocation (callSite) {
	  return relative(basePath, callSite[0]) +
	    ':' + callSite[1] +
	    ':' + callSite[2]
	}

	/**
	 * Get the stack as array of call sites.
	 */

	function getStack () {
	  var limit = Error.stackTraceLimit;
	  var obj = {};
	  var prep = Error.prepareStackTrace;

	  Error.prepareStackTrace = prepareObjectStackTrace;
	  Error.stackTraceLimit = Math.max(10, limit);

	  // capture the stack
	  Error.captureStackTrace(obj);

	  // slice this function off the top
	  var stack = obj.stack.slice(1);

	  Error.prepareStackTrace = prep;
	  Error.stackTraceLimit = limit;

	  return stack
	}

	/**
	 * Capture call site stack from v8.
	 */

	function prepareObjectStackTrace (obj, stack) {
	  return stack
	}

	/**
	 * Return a wrapped function in a deprecation message.
	 */

	function wrapfunction (fn, message) {
	  if (typeof fn !== 'function') {
	    throw new TypeError('argument fn must be a function')
	  }

	  var args = createArgumentsString(fn.length);
	  var stack = getStack();
	  var site = callSiteLocation(stack[1]);

	  site.name = fn.name;

	  // eslint-disable-next-line no-new-func
	  var deprecatedfn = new Function('fn', 'log', 'deprecate', 'message', 'site',
	    '"use strict"\n' +
	    'return function (' + args + ') {' +
	    'log.call(deprecate, message, site)\n' +
	    'return fn.apply(this, arguments)\n' +
	    '}')(fn, log, this, message, site);

	  return deprecatedfn
	}

	/**
	 * Wrap property in a deprecation message.
	 */

	function wrapproperty (obj, prop, message) {
	  if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
	    throw new TypeError('argument obj must be object')
	  }

	  var descriptor = Object.getOwnPropertyDescriptor(obj, prop);

	  if (!descriptor) {
	    throw new TypeError('must call property on owner object')
	  }

	  if (!descriptor.configurable) {
	    throw new TypeError('property must be configurable')
	  }

	  var deprecate = this;
	  var stack = getStack();
	  var site = callSiteLocation(stack[1]);

	  // set site name
	  site.name = prop;

	  // convert data descriptor
	  if ('value' in descriptor) {
	    descriptor = convertDataDescriptorToAccessor(obj, prop);
	  }

	  var get = descriptor.get;
	  var set = descriptor.set;

	  // wrap getter
	  if (typeof get === 'function') {
	    descriptor.get = function getter () {
	      log.call(deprecate, message, site);
	      return get.apply(this, arguments)
	    };
	  }

	  // wrap setter
	  if (typeof set === 'function') {
	    descriptor.set = function setter () {
	      log.call(deprecate, message, site);
	      return set.apply(this, arguments)
	    };
	  }

	  Object.defineProperty(obj, prop, descriptor);
	}

	/**
	 * Create DeprecationError for deprecation
	 */

	function DeprecationError (namespace, message, stack) {
	  var error = new Error();
	  var stackString;

	  Object.defineProperty(error, 'constructor', {
	    value: DeprecationError
	  });

	  Object.defineProperty(error, 'message', {
	    configurable: true,
	    enumerable: false,
	    value: message,
	    writable: true
	  });

	  Object.defineProperty(error, 'name', {
	    enumerable: false,
	    configurable: true,
	    value: 'DeprecationError',
	    writable: true
	  });

	  Object.defineProperty(error, 'namespace', {
	    configurable: true,
	    enumerable: false,
	    value: namespace,
	    writable: true
	  });

	  Object.defineProperty(error, 'stack', {
	    configurable: true,
	    enumerable: false,
	    get: function () {
	      if (stackString !== undefined) {
	        return stackString
	      }

	      // prepare stack trace
	      return (stackString = createStackString.call(this, stack))
	    },
	    set: function setter (val) {
	      stackString = val;
	    }
	  });

	  return error
	}
	return depd_1;
}

var setprototypeof;
var hasRequiredSetprototypeof;

function requireSetprototypeof () {
	if (hasRequiredSetprototypeof) return setprototypeof;
	hasRequiredSetprototypeof = 1;
	/* eslint no-proto: 0 */
	setprototypeof = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? setProtoOf : mixinProperties);

	function setProtoOf (obj, proto) {
	  obj.__proto__ = proto;
	  return obj
	}

	function mixinProperties (obj, proto) {
	  for (var prop in proto) {
	    if (!Object.prototype.hasOwnProperty.call(obj, prop)) {
	      obj[prop] = proto[prop];
	    }
	  }
	  return obj
	}
	return setprototypeof;
}

var require$$0$2 = {
	"100": "Continue",
	"101": "Switching Protocols",
	"102": "Processing",
	"103": "Early Hints",
	"200": "OK",
	"201": "Created",
	"202": "Accepted",
	"203": "Non-Authoritative Information",
	"204": "No Content",
	"205": "Reset Content",
	"206": "Partial Content",
	"207": "Multi-Status",
	"208": "Already Reported",
	"226": "IM Used",
	"300": "Multiple Choices",
	"301": "Moved Permanently",
	"302": "Found",
	"303": "See Other",
	"304": "Not Modified",
	"305": "Use Proxy",
	"307": "Temporary Redirect",
	"308": "Permanent Redirect",
	"400": "Bad Request",
	"401": "Unauthorized",
	"402": "Payment Required",
	"403": "Forbidden",
	"404": "Not Found",
	"405": "Method Not Allowed",
	"406": "Not Acceptable",
	"407": "Proxy Authentication Required",
	"408": "Request Timeout",
	"409": "Conflict",
	"410": "Gone",
	"411": "Length Required",
	"412": "Precondition Failed",
	"413": "Payload Too Large",
	"414": "URI Too Long",
	"415": "Unsupported Media Type",
	"416": "Range Not Satisfiable",
	"417": "Expectation Failed",
	"418": "I'm a Teapot",
	"421": "Misdirected Request",
	"422": "Unprocessable Entity",
	"423": "Locked",
	"424": "Failed Dependency",
	"425": "Too Early",
	"426": "Upgrade Required",
	"428": "Precondition Required",
	"429": "Too Many Requests",
	"431": "Request Header Fields Too Large",
	"451": "Unavailable For Legal Reasons",
	"500": "Internal Server Error",
	"501": "Not Implemented",
	"502": "Bad Gateway",
	"503": "Service Unavailable",
	"504": "Gateway Timeout",
	"505": "HTTP Version Not Supported",
	"506": "Variant Also Negotiates",
	"507": "Insufficient Storage",
	"508": "Loop Detected",
	"509": "Bandwidth Limit Exceeded",
	"510": "Not Extended",
	"511": "Network Authentication Required"
};

/*!
 * statuses
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */

var statuses;
var hasRequiredStatuses;

function requireStatuses () {
	if (hasRequiredStatuses) return statuses;
	hasRequiredStatuses = 1;

	/**
	 * Module dependencies.
	 * @private
	 */

	var codes = require$$0$2;

	/**
	 * Module exports.
	 * @public
	 */

	statuses = status;

	// status code to message map
	status.message = codes;

	// status message (lower-case) to code map
	status.code = createMessageToStatusCodeMap(codes);

	// array of status codes
	status.codes = createStatusCodeList(codes);

	// status codes for redirects
	status.redirect = {
	  300: true,
	  301: true,
	  302: true,
	  303: true,
	  305: true,
	  307: true,
	  308: true
	};

	// status codes for empty bodies
	status.empty = {
	  204: true,
	  205: true,
	  304: true
	};

	// status codes for when you should retry the request
	status.retry = {
	  502: true,
	  503: true,
	  504: true
	};

	/**
	 * Create a map of message to status code.
	 * @private
	 */

	function createMessageToStatusCodeMap (codes) {
	  var map = {};

	  Object.keys(codes).forEach(function forEachCode (code) {
	    var message = codes[code];
	    var status = Number(code);

	    // populate map
	    map[message.toLowerCase()] = status;
	  });

	  return map
	}

	/**
	 * Create a list of all status codes.
	 * @private
	 */

	function createStatusCodeList (codes) {
	  return Object.keys(codes).map(function mapCode (code) {
	    return Number(code)
	  })
	}

	/**
	 * Get the status code for given message.
	 * @private
	 */

	function getStatusCode (message) {
	  var msg = message.toLowerCase();

	  if (!Object.prototype.hasOwnProperty.call(status.code, msg)) {
	    throw new Error('invalid status message: "' + message + '"')
	  }

	  return status.code[msg]
	}

	/**
	 * Get the status message for given code.
	 * @private
	 */

	function getStatusMessage (code) {
	  if (!Object.prototype.hasOwnProperty.call(status.message, code)) {
	    throw new Error('invalid status code: ' + code)
	  }

	  return status.message[code]
	}

	/**
	 * Get the status code.
	 *
	 * Given a number, this will throw if it is not a known status
	 * code, otherwise the code will be returned. Given a string,
	 * the string will be parsed for a number and return the code
	 * if valid, otherwise will lookup the code assuming this is
	 * the status message.
	 *
	 * @param {string|number} code
	 * @returns {number}
	 * @public
	 */

	function status (code) {
	  if (typeof code === 'number') {
	    return getStatusMessage(code)
	  }

	  if (typeof code !== 'string') {
	    throw new TypeError('code must be a number or string')
	  }

	  // '403'
	  var n = parseInt(code, 10);
	  if (!isNaN(n)) {
	    return getStatusMessage(n)
	  }

	  return getStatusCode(code)
	}
	return statuses;
}

var inherits = {exports: {}};

var inherits_browser = {exports: {}};

var hasRequiredInherits_browser;

function requireInherits_browser () {
	if (hasRequiredInherits_browser) return inherits_browser.exports;
	hasRequiredInherits_browser = 1;
	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  inherits_browser.exports = function inherits(ctor, superCtor) {
	    if (superCtor) {
	      ctor.super_ = superCtor;
	      ctor.prototype = Object.create(superCtor.prototype, {
	        constructor: {
	          value: ctor,
	          enumerable: false,
	          writable: true,
	          configurable: true
	        }
	      });
	    }
	  };
	} else {
	  // old school shim for old browsers
	  inherits_browser.exports = function inherits(ctor, superCtor) {
	    if (superCtor) {
	      ctor.super_ = superCtor;
	      var TempCtor = function () {};
	      TempCtor.prototype = superCtor.prototype;
	      ctor.prototype = new TempCtor();
	      ctor.prototype.constructor = ctor;
	    }
	  };
	}
	return inherits_browser.exports;
}

var hasRequiredInherits;

function requireInherits () {
	if (hasRequiredInherits) return inherits.exports;
	hasRequiredInherits = 1;
	try {
	  var util = require('util');
	  /* istanbul ignore next */
	  if (typeof util.inherits !== 'function') throw '';
	  inherits.exports = util.inherits;
	} catch (e) {
	  /* istanbul ignore next */
	  inherits.exports = requireInherits_browser();
	}
	return inherits.exports;
}

/*!
 * toidentifier
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */

var toidentifier;
var hasRequiredToidentifier;

function requireToidentifier () {
	if (hasRequiredToidentifier) return toidentifier;
	hasRequiredToidentifier = 1;

	/**
	 * Module exports.
	 * @public
	 */

	toidentifier = toIdentifier;

	/**
	 * Trasform the given string into a JavaScript identifier
	 *
	 * @param {string} str
	 * @returns {string}
	 * @public
	 */

	function toIdentifier (str) {
	  return str
	    .split(' ')
	    .map(function (token) {
	      return token.slice(0, 1).toUpperCase() + token.slice(1)
	    })
	    .join('')
	    .replace(/[^ _0-9a-z]/gi, '')
	}
	return toidentifier;
}

/*!
 * http-errors
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */

var hasRequiredHttpErrors;

function requireHttpErrors () {
	if (hasRequiredHttpErrors) return httpErrors.exports;
	hasRequiredHttpErrors = 1;
	(function (module) {

		/**
		 * Module dependencies.
		 * @private
		 */

		var deprecate = requireDepd()('http-errors');
		var setPrototypeOf = requireSetprototypeof();
		var statuses = requireStatuses();
		var inherits = requireInherits();
		var toIdentifier = requireToidentifier();

		/**
		 * Module exports.
		 * @public
		 */

		module.exports = createError;
		module.exports.HttpError = createHttpErrorConstructor();
		module.exports.isHttpError = createIsHttpErrorFunction(module.exports.HttpError);

		// Populate exports for all constructors
		populateConstructorExports(module.exports, statuses.codes, module.exports.HttpError);

		/**
		 * Get the code class of a status code.
		 * @private
		 */

		function codeClass (status) {
		  return Number(String(status).charAt(0) + '00')
		}

		/**
		 * Create a new HTTP Error.
		 *
		 * @returns {Error}
		 * @public
		 */

		function createError () {
		  // so much arity going on ~_~
		  var err;
		  var msg;
		  var status = 500;
		  var props = {};
		  for (var i = 0; i < arguments.length; i++) {
		    var arg = arguments[i];
		    var type = typeof arg;
		    if (type === 'object' && arg instanceof Error) {
		      err = arg;
		      status = err.status || err.statusCode || status;
		    } else if (type === 'number' && i === 0) {
		      status = arg;
		    } else if (type === 'string') {
		      msg = arg;
		    } else if (type === 'object') {
		      props = arg;
		    } else {
		      throw new TypeError('argument #' + (i + 1) + ' unsupported type ' + type)
		    }
		  }

		  if (typeof status === 'number' && (status < 400 || status >= 600)) {
		    deprecate('non-error status code; use only 4xx or 5xx status codes');
		  }

		  if (typeof status !== 'number' ||
		    (!statuses.message[status] && (status < 400 || status >= 600))) {
		    status = 500;
		  }

		  // constructor
		  var HttpError = createError[status] || createError[codeClass(status)];

		  if (!err) {
		    // create error
		    err = HttpError
		      ? new HttpError(msg)
		      : new Error(msg || statuses.message[status]);
		    Error.captureStackTrace(err, createError);
		  }

		  if (!HttpError || !(err instanceof HttpError) || err.status !== status) {
		    // add properties to generic error
		    err.expose = status < 500;
		    err.status = err.statusCode = status;
		  }

		  for (var key in props) {
		    if (key !== 'status' && key !== 'statusCode') {
		      err[key] = props[key];
		    }
		  }

		  return err
		}

		/**
		 * Create HTTP error abstract base class.
		 * @private
		 */

		function createHttpErrorConstructor () {
		  function HttpError () {
		    throw new TypeError('cannot construct abstract class')
		  }

		  inherits(HttpError, Error);

		  return HttpError
		}

		/**
		 * Create a constructor for a client error.
		 * @private
		 */

		function createClientErrorConstructor (HttpError, name, code) {
		  var className = toClassName(name);

		  function ClientError (message) {
		    // create the error object
		    var msg = message != null ? message : statuses.message[code];
		    var err = new Error(msg);

		    // capture a stack trace to the construction point
		    Error.captureStackTrace(err, ClientError);

		    // adjust the [[Prototype]]
		    setPrototypeOf(err, ClientError.prototype);

		    // redefine the error message
		    Object.defineProperty(err, 'message', {
		      enumerable: true,
		      configurable: true,
		      value: msg,
		      writable: true
		    });

		    // redefine the error name
		    Object.defineProperty(err, 'name', {
		      enumerable: false,
		      configurable: true,
		      value: className,
		      writable: true
		    });

		    return err
		  }

		  inherits(ClientError, HttpError);
		  nameFunc(ClientError, className);

		  ClientError.prototype.status = code;
		  ClientError.prototype.statusCode = code;
		  ClientError.prototype.expose = true;

		  return ClientError
		}

		/**
		 * Create function to test is a value is a HttpError.
		 * @private
		 */

		function createIsHttpErrorFunction (HttpError) {
		  return function isHttpError (val) {
		    if (!val || typeof val !== 'object') {
		      return false
		    }

		    if (val instanceof HttpError) {
		      return true
		    }

		    return val instanceof Error &&
		      typeof val.expose === 'boolean' &&
		      typeof val.statusCode === 'number' && val.status === val.statusCode
		  }
		}

		/**
		 * Create a constructor for a server error.
		 * @private
		 */

		function createServerErrorConstructor (HttpError, name, code) {
		  var className = toClassName(name);

		  function ServerError (message) {
		    // create the error object
		    var msg = message != null ? message : statuses.message[code];
		    var err = new Error(msg);

		    // capture a stack trace to the construction point
		    Error.captureStackTrace(err, ServerError);

		    // adjust the [[Prototype]]
		    setPrototypeOf(err, ServerError.prototype);

		    // redefine the error message
		    Object.defineProperty(err, 'message', {
		      enumerable: true,
		      configurable: true,
		      value: msg,
		      writable: true
		    });

		    // redefine the error name
		    Object.defineProperty(err, 'name', {
		      enumerable: false,
		      configurable: true,
		      value: className,
		      writable: true
		    });

		    return err
		  }

		  inherits(ServerError, HttpError);
		  nameFunc(ServerError, className);

		  ServerError.prototype.status = code;
		  ServerError.prototype.statusCode = code;
		  ServerError.prototype.expose = false;

		  return ServerError
		}

		/**
		 * Set the name of a function, if possible.
		 * @private
		 */

		function nameFunc (func, name) {
		  var desc = Object.getOwnPropertyDescriptor(func, 'name');

		  if (desc && desc.configurable) {
		    desc.value = name;
		    Object.defineProperty(func, 'name', desc);
		  }
		}

		/**
		 * Populate the exports object with constructors for every error class.
		 * @private
		 */

		function populateConstructorExports (exports, codes, HttpError) {
		  codes.forEach(function forEachCode (code) {
		    var CodeError;
		    var name = toIdentifier(statuses.message[code]);

		    switch (codeClass(code)) {
		      case 400:
		        CodeError = createClientErrorConstructor(HttpError, name, code);
		        break
		      case 500:
		        CodeError = createServerErrorConstructor(HttpError, name, code);
		        break
		    }

		    if (CodeError) {
		      // export the constructor
		      exports[code] = CodeError;
		      exports[name] = CodeError;
		    }
		  });
		}

		/**
		 * Get a class name from a name identifier.
		 * @private
		 */

		function toClassName (name) {
		  return name.substr(-5) !== 'Error'
		    ? name + 'Error'
		    : name
		} 
	} (httpErrors));
	return httpErrors.exports;
}

var onFinished = {exports: {}};

/*!
 * ee-first
 * Copyright(c) 2014 Jonathan Ong
 * MIT Licensed
 */

var eeFirst;
var hasRequiredEeFirst;

function requireEeFirst () {
	if (hasRequiredEeFirst) return eeFirst;
	hasRequiredEeFirst = 1;

	/**
	 * Module exports.
	 * @public
	 */

	eeFirst = first;

	/**
	 * Get the first event in a set of event emitters and event pairs.
	 *
	 * @param {array} stuff
	 * @param {function} done
	 * @public
	 */

	function first(stuff, done) {
	  if (!Array.isArray(stuff))
	    throw new TypeError('arg must be an array of [ee, events...] arrays')

	  var cleanups = [];

	  for (var i = 0; i < stuff.length; i++) {
	    var arr = stuff[i];

	    if (!Array.isArray(arr) || arr.length < 2)
	      throw new TypeError('each array member must be [ee, events...]')

	    var ee = arr[0];

	    for (var j = 1; j < arr.length; j++) {
	      var event = arr[j];
	      var fn = listener(event, callback);

	      // listen to the event
	      ee.on(event, fn);
	      // push this listener to the list of cleanups
	      cleanups.push({
	        ee: ee,
	        event: event,
	        fn: fn,
	      });
	    }
	  }

	  function callback() {
	    cleanup();
	    done.apply(null, arguments);
	  }

	  function cleanup() {
	    var x;
	    for (var i = 0; i < cleanups.length; i++) {
	      x = cleanups[i];
	      x.ee.removeListener(x.event, x.fn);
	    }
	  }

	  function thunk(fn) {
	    done = fn;
	  }

	  thunk.cancel = cleanup;

	  return thunk
	}

	/**
	 * Create the event listener.
	 * @private
	 */

	function listener(event, done) {
	  return function onevent(arg1) {
	    var args = new Array(arguments.length);
	    var ee = this;
	    var err = event === 'error'
	      ? arg1
	      : null;

	    // copy args to prevent arguments escaping scope
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }

	    done(err, ee, event, args);
	  }
	}
	return eeFirst;
}

/*!
 * on-finished
 * Copyright(c) 2013 Jonathan Ong
 * Copyright(c) 2014 Douglas Christopher Wilson
 * MIT Licensed
 */

var hasRequiredOnFinished;

function requireOnFinished () {
	if (hasRequiredOnFinished) return onFinished.exports;
	hasRequiredOnFinished = 1;

	/**
	 * Module exports.
	 * @public
	 */

	onFinished.exports = onFinished$1;
	onFinished.exports.isFinished = isFinished;

	/**
	 * Module dependencies.
	 * @private
	 */

	var asyncHooks = tryRequireAsyncHooks();
	var first = requireEeFirst();

	/**
	 * Variables.
	 * @private
	 */

	/* istanbul ignore next */
	var defer = typeof setImmediate === 'function'
	  ? setImmediate
	  : function (fn) { process.nextTick(fn.bind.apply(fn, arguments)); };

	/**
	 * Invoke callback when the response has finished, useful for
	 * cleaning up resources afterwards.
	 *
	 * @param {object} msg
	 * @param {function} listener
	 * @return {object}
	 * @public
	 */

	function onFinished$1 (msg, listener) {
	  if (isFinished(msg) !== false) {
	    defer(listener, null, msg);
	    return msg
	  }

	  // attach the listener to the message
	  attachListener(msg, wrap(listener));

	  return msg
	}

	/**
	 * Determine if message is already finished.
	 *
	 * @param {object} msg
	 * @return {boolean}
	 * @public
	 */

	function isFinished (msg) {
	  var socket = msg.socket;

	  if (typeof msg.finished === 'boolean') {
	    // OutgoingMessage
	    return Boolean(msg.finished || (socket && !socket.writable))
	  }

	  if (typeof msg.complete === 'boolean') {
	    // IncomingMessage
	    return Boolean(msg.upgrade || !socket || !socket.readable || (msg.complete && !msg.readable))
	  }

	  // don't know
	  return undefined
	}

	/**
	 * Attach a finished listener to the message.
	 *
	 * @param {object} msg
	 * @param {function} callback
	 * @private
	 */

	function attachFinishedListener (msg, callback) {
	  var eeMsg;
	  var eeSocket;
	  var finished = false;

	  function onFinish (error) {
	    eeMsg.cancel();
	    eeSocket.cancel();

	    finished = true;
	    callback(error);
	  }

	  // finished on first message event
	  eeMsg = eeSocket = first([[msg, 'end', 'finish']], onFinish);

	  function onSocket (socket) {
	    // remove listener
	    msg.removeListener('socket', onSocket);

	    if (finished) return
	    if (eeMsg !== eeSocket) return

	    // finished on first socket event
	    eeSocket = first([[socket, 'error', 'close']], onFinish);
	  }

	  if (msg.socket) {
	    // socket already assigned
	    onSocket(msg.socket);
	    return
	  }

	  // wait for socket to be assigned
	  msg.on('socket', onSocket);

	  if (msg.socket === undefined) {
	    // istanbul ignore next: node.js 0.8 patch
	    patchAssignSocket(msg, onSocket);
	  }
	}

	/**
	 * Attach the listener to the message.
	 *
	 * @param {object} msg
	 * @return {function}
	 * @private
	 */

	function attachListener (msg, listener) {
	  var attached = msg.__onFinished;

	  // create a private single listener with queue
	  if (!attached || !attached.queue) {
	    attached = msg.__onFinished = createListener(msg);
	    attachFinishedListener(msg, attached);
	  }

	  attached.queue.push(listener);
	}

	/**
	 * Create listener on message.
	 *
	 * @param {object} msg
	 * @return {function}
	 * @private
	 */

	function createListener (msg) {
	  function listener (err) {
	    if (msg.__onFinished === listener) msg.__onFinished = null;
	    if (!listener.queue) return

	    var queue = listener.queue;
	    listener.queue = null;

	    for (var i = 0; i < queue.length; i++) {
	      queue[i](err, msg);
	    }
	  }

	  listener.queue = [];

	  return listener
	}

	/**
	 * Patch ServerResponse.prototype.assignSocket for node.js 0.8.
	 *
	 * @param {ServerResponse} res
	 * @param {function} callback
	 * @private
	 */

	// istanbul ignore next: node.js 0.8 patch
	function patchAssignSocket (res, callback) {
	  var assignSocket = res.assignSocket;

	  if (typeof assignSocket !== 'function') return

	  // res.on('socket', callback) is broken in 0.8
	  res.assignSocket = function _assignSocket (socket) {
	    assignSocket.call(this, socket);
	    callback(socket);
	  };
	}

	/**
	 * Try to require async_hooks
	 * @private
	 */

	function tryRequireAsyncHooks () {
	  try {
	    return require('async_hooks')
	  } catch (e) {
	    return {}
	  }
	}

	/**
	 * Wrap function with async resource, if possible.
	 * AsyncResource.bind static method backported.
	 * @private
	 */

	function wrap (fn) {
	  var res;

	  // create anonymous resource
	  if (asyncHooks.AsyncResource) {
	    res = new asyncHooks.AsyncResource(fn.name || 'bound-anonymous-fn');
	  }

	  // incompatible node.js
	  if (!res || !res.runInAsyncScope) {
	    return fn
	  }

	  // return bound function
	  return res.runInAsyncScope.bind(res, fn, null)
	}
	return onFinished.exports;
}

var bytes = {exports: {}};

/*!
 * bytes
 * Copyright(c) 2012-2014 TJ Holowaychuk
 * Copyright(c) 2015 Jed Watson
 * MIT Licensed
 */

var hasRequiredBytes;

function requireBytes () {
	if (hasRequiredBytes) return bytes.exports;
	hasRequiredBytes = 1;

	/**
	 * Module exports.
	 * @public
	 */

	bytes.exports = bytes$1;
	bytes.exports.format = format;
	bytes.exports.parse = parse;

	/**
	 * Module variables.
	 * @private
	 */

	var formatThousandsRegExp = /\B(?=(\d{3})+(?!\d))/g;

	var formatDecimalsRegExp = /(?:\.0*|(\.[^0]+)0+)$/;

	var map = {
	  b:  1,
	  kb: 1 << 10,
	  mb: 1 << 20,
	  gb: 1 << 30,
	  tb: Math.pow(1024, 4),
	  pb: Math.pow(1024, 5),
	};

	var parseRegExp = /^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb|pb)$/i;

	/**
	 * Convert the given value in bytes into a string or parse to string to an integer in bytes.
	 *
	 * @param {string|number} value
	 * @param {{
	 *  case: [string],
	 *  decimalPlaces: [number]
	 *  fixedDecimals: [boolean]
	 *  thousandsSeparator: [string]
	 *  unitSeparator: [string]
	 *  }} [options] bytes options.
	 *
	 * @returns {string|number|null}
	 */

	function bytes$1(value, options) {
	  if (typeof value === 'string') {
	    return parse(value);
	  }

	  if (typeof value === 'number') {
	    return format(value, options);
	  }

	  return null;
	}

	/**
	 * Format the given value in bytes into a string.
	 *
	 * If the value is negative, it is kept as such. If it is a float,
	 * it is rounded.
	 *
	 * @param {number} value
	 * @param {object} [options]
	 * @param {number} [options.decimalPlaces=2]
	 * @param {number} [options.fixedDecimals=false]
	 * @param {string} [options.thousandsSeparator=]
	 * @param {string} [options.unit=]
	 * @param {string} [options.unitSeparator=]
	 *
	 * @returns {string|null}
	 * @public
	 */

	function format(value, options) {
	  if (!Number.isFinite(value)) {
	    return null;
	  }

	  var mag = Math.abs(value);
	  var thousandsSeparator = (options && options.thousandsSeparator) || '';
	  var unitSeparator = (options && options.unitSeparator) || '';
	  var decimalPlaces = (options && options.decimalPlaces !== undefined) ? options.decimalPlaces : 2;
	  var fixedDecimals = Boolean(options && options.fixedDecimals);
	  var unit = (options && options.unit) || '';

	  if (!unit || !map[unit.toLowerCase()]) {
	    if (mag >= map.pb) {
	      unit = 'PB';
	    } else if (mag >= map.tb) {
	      unit = 'TB';
	    } else if (mag >= map.gb) {
	      unit = 'GB';
	    } else if (mag >= map.mb) {
	      unit = 'MB';
	    } else if (mag >= map.kb) {
	      unit = 'KB';
	    } else {
	      unit = 'B';
	    }
	  }

	  var val = value / map[unit.toLowerCase()];
	  var str = val.toFixed(decimalPlaces);

	  if (!fixedDecimals) {
	    str = str.replace(formatDecimalsRegExp, '$1');
	  }

	  if (thousandsSeparator) {
	    str = str.split('.').map(function (s, i) {
	      return i === 0
	        ? s.replace(formatThousandsRegExp, thousandsSeparator)
	        : s
	    }).join('.');
	  }

	  return str + unitSeparator + unit;
	}

	/**
	 * Parse the string value into an integer in bytes.
	 *
	 * If no unit is given, it is assumed the value is in bytes.
	 *
	 * @param {number|string} val
	 *
	 * @returns {number|null}
	 * @public
	 */

	function parse(val) {
	  if (typeof val === 'number' && !isNaN(val)) {
	    return val;
	  }

	  if (typeof val !== 'string') {
	    return null;
	  }

	  // Test if the string passed is valid
	  var results = parseRegExp.exec(val);
	  var floatValue;
	  var unit = 'b';

	  if (!results) {
	    // Nothing could be extracted from the given string
	    floatValue = parseInt(val, 10);
	    unit = 'b';
	  } else {
	    // Retrieve the value and the unit
	    floatValue = parseFloat(results[1]);
	    unit = results[4].toLowerCase();
	  }

	  if (isNaN(floatValue)) {
	    return null;
	  }

	  return Math.floor(map[unit] * floatValue);
	}
	return bytes.exports;
}

var lib$1 = {exports: {}};

/* eslint-disable node/no-deprecated-api */

var safer_1;
var hasRequiredSafer;

function requireSafer () {
	if (hasRequiredSafer) return safer_1;
	hasRequiredSafer = 1;

	var buffer = require$$0$4;
	var Buffer = buffer.Buffer;

	var safer = {};

	var key;

	for (key in buffer) {
	  if (!buffer.hasOwnProperty(key)) continue
	  if (key === 'SlowBuffer' || key === 'Buffer') continue
	  safer[key] = buffer[key];
	}

	var Safer = safer.Buffer = {};
	for (key in Buffer) {
	  if (!Buffer.hasOwnProperty(key)) continue
	  if (key === 'allocUnsafe' || key === 'allocUnsafeSlow') continue
	  Safer[key] = Buffer[key];
	}

	safer.Buffer.prototype = Buffer.prototype;

	if (!Safer.from || Safer.from === Uint8Array.from) {
	  Safer.from = function (value, encodingOrOffset, length) {
	    if (typeof value === 'number') {
	      throw new TypeError('The "value" argument must not be of type number. Received type ' + typeof value)
	    }
	    if (value && typeof value.length === 'undefined') {
	      throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' + typeof value)
	    }
	    return Buffer(value, encodingOrOffset, length)
	  };
	}

	if (!Safer.alloc) {
	  Safer.alloc = function (size, fill, encoding) {
	    if (typeof size !== 'number') {
	      throw new TypeError('The "size" argument must be of type number. Received type ' + typeof size)
	    }
	    if (size < 0 || size >= 2 * (1 << 30)) {
	      throw new RangeError('The value "' + size + '" is invalid for option "size"')
	    }
	    var buf = Buffer(size);
	    if (!fill || fill.length === 0) {
	      buf.fill(0);
	    } else if (typeof encoding === 'string') {
	      buf.fill(fill, encoding);
	    } else {
	      buf.fill(fill);
	    }
	    return buf
	  };
	}

	if (!safer.kStringMaxLength) {
	  try {
	    safer.kStringMaxLength = process.binding('buffer').kStringMaxLength;
	  } catch (e) {
	    // we can't determine kStringMaxLength in environments where process.binding
	    // is unsupported, so let's not set it
	  }
	}

	if (!safer.constants) {
	  safer.constants = {
	    MAX_LENGTH: safer.kMaxLength
	  };
	  if (safer.kStringMaxLength) {
	    safer.constants.MAX_STRING_LENGTH = safer.kStringMaxLength;
	  }
	}

	safer_1 = safer;
	return safer_1;
}

var bomHandling = {};

var hasRequiredBomHandling;

function requireBomHandling () {
	if (hasRequiredBomHandling) return bomHandling;
	hasRequiredBomHandling = 1;

	var BOMChar = '\uFEFF';

	bomHandling.PrependBOM = PrependBOMWrapper;
	function PrependBOMWrapper(encoder, options) {
	    this.encoder = encoder;
	    this.addBOM = true;
	}

	PrependBOMWrapper.prototype.write = function(str) {
	    if (this.addBOM) {
	        str = BOMChar + str;
	        this.addBOM = false;
	    }

	    return this.encoder.write(str);
	};

	PrependBOMWrapper.prototype.end = function() {
	    return this.encoder.end();
	};


	//------------------------------------------------------------------------------

	bomHandling.StripBOM = StripBOMWrapper;
	function StripBOMWrapper(decoder, options) {
	    this.decoder = decoder;
	    this.pass = false;
	    this.options = options || {};
	}

	StripBOMWrapper.prototype.write = function(buf) {
	    var res = this.decoder.write(buf);
	    if (this.pass || !res)
	        return res;

	    if (res[0] === BOMChar) {
	        res = res.slice(1);
	        if (typeof this.options.stripBOM === 'function')
	            this.options.stripBOM();
	    }

	    this.pass = true;
	    return res;
	};

	StripBOMWrapper.prototype.end = function() {
	    return this.decoder.end();
	};
	return bomHandling;
}

var encodings = {};

var internal;
var hasRequiredInternal;

function requireInternal () {
	if (hasRequiredInternal) return internal;
	hasRequiredInternal = 1;
	var Buffer = requireSafer().Buffer;

	// Export Node.js internal encodings.

	internal = {
	    // Encodings
	    utf8:   { type: "_internal", bomAware: true},
	    cesu8:  { type: "_internal", bomAware: true},
	    unicode11utf8: "utf8",

	    ucs2:   { type: "_internal", bomAware: true},
	    utf16le: "ucs2",

	    binary: { type: "_internal" },
	    base64: { type: "_internal" },
	    hex:    { type: "_internal" },

	    // Codec.
	    _internal: InternalCodec,
	};

	//------------------------------------------------------------------------------

	function InternalCodec(codecOptions, iconv) {
	    this.enc = codecOptions.encodingName;
	    this.bomAware = codecOptions.bomAware;

	    if (this.enc === "base64")
	        this.encoder = InternalEncoderBase64;
	    else if (this.enc === "cesu8") {
	        this.enc = "utf8"; // Use utf8 for decoding.
	        this.encoder = InternalEncoderCesu8;

	        // Add decoder for versions of Node not supporting CESU-8
	        if (Buffer.from('eda0bdedb2a9', 'hex').toString() !== '💩') {
	            this.decoder = InternalDecoderCesu8;
	            this.defaultCharUnicode = iconv.defaultCharUnicode;
	        }
	    }
	}

	InternalCodec.prototype.encoder = InternalEncoder;
	InternalCodec.prototype.decoder = InternalDecoder;

	//------------------------------------------------------------------------------

	// We use node.js internal decoder. Its signature is the same as ours.
	var StringDecoder = require$$1$4.StringDecoder;

	if (!StringDecoder.prototype.end) // Node v0.8 doesn't have this method.
	    StringDecoder.prototype.end = function() {};


	function InternalDecoder(options, codec) {
	    this.decoder = new StringDecoder(codec.enc);
	}

	InternalDecoder.prototype.write = function(buf) {
	    if (!Buffer.isBuffer(buf)) {
	        buf = Buffer.from(buf);
	    }

	    return this.decoder.write(buf);
	};

	InternalDecoder.prototype.end = function() {
	    return this.decoder.end();
	};


	//------------------------------------------------------------------------------
	// Encoder is mostly trivial

	function InternalEncoder(options, codec) {
	    this.enc = codec.enc;
	}

	InternalEncoder.prototype.write = function(str) {
	    return Buffer.from(str, this.enc);
	};

	InternalEncoder.prototype.end = function() {
	};


	//------------------------------------------------------------------------------
	// Except base64 encoder, which must keep its state.

	function InternalEncoderBase64(options, codec) {
	    this.prevStr = '';
	}

	InternalEncoderBase64.prototype.write = function(str) {
	    str = this.prevStr + str;
	    var completeQuads = str.length - (str.length % 4);
	    this.prevStr = str.slice(completeQuads);
	    str = str.slice(0, completeQuads);

	    return Buffer.from(str, "base64");
	};

	InternalEncoderBase64.prototype.end = function() {
	    return Buffer.from(this.prevStr, "base64");
	};


	//------------------------------------------------------------------------------
	// CESU-8 encoder is also special.

	function InternalEncoderCesu8(options, codec) {
	}

	InternalEncoderCesu8.prototype.write = function(str) {
	    var buf = Buffer.alloc(str.length * 3), bufIdx = 0;
	    for (var i = 0; i < str.length; i++) {
	        var charCode = str.charCodeAt(i);
	        // Naive implementation, but it works because CESU-8 is especially easy
	        // to convert from UTF-16 (which all JS strings are encoded in).
	        if (charCode < 0x80)
	            buf[bufIdx++] = charCode;
	        else if (charCode < 0x800) {
	            buf[bufIdx++] = 0xC0 + (charCode >>> 6);
	            buf[bufIdx++] = 0x80 + (charCode & 0x3f);
	        }
	        else { // charCode will always be < 0x10000 in javascript.
	            buf[bufIdx++] = 0xE0 + (charCode >>> 12);
	            buf[bufIdx++] = 0x80 + ((charCode >>> 6) & 0x3f);
	            buf[bufIdx++] = 0x80 + (charCode & 0x3f);
	        }
	    }
	    return buf.slice(0, bufIdx);
	};

	InternalEncoderCesu8.prototype.end = function() {
	};

	//------------------------------------------------------------------------------
	// CESU-8 decoder is not implemented in Node v4.0+

	function InternalDecoderCesu8(options, codec) {
	    this.acc = 0;
	    this.contBytes = 0;
	    this.accBytes = 0;
	    this.defaultCharUnicode = codec.defaultCharUnicode;
	}

	InternalDecoderCesu8.prototype.write = function(buf) {
	    var acc = this.acc, contBytes = this.contBytes, accBytes = this.accBytes, 
	        res = '';
	    for (var i = 0; i < buf.length; i++) {
	        var curByte = buf[i];
	        if ((curByte & 0xC0) !== 0x80) { // Leading byte
	            if (contBytes > 0) { // Previous code is invalid
	                res += this.defaultCharUnicode;
	                contBytes = 0;
	            }

	            if (curByte < 0x80) { // Single-byte code
	                res += String.fromCharCode(curByte);
	            } else if (curByte < 0xE0) { // Two-byte code
	                acc = curByte & 0x1F;
	                contBytes = 1; accBytes = 1;
	            } else if (curByte < 0xF0) { // Three-byte code
	                acc = curByte & 0x0F;
	                contBytes = 2; accBytes = 1;
	            } else { // Four or more are not supported for CESU-8.
	                res += this.defaultCharUnicode;
	            }
	        } else { // Continuation byte
	            if (contBytes > 0) { // We're waiting for it.
	                acc = (acc << 6) | (curByte & 0x3f);
	                contBytes--; accBytes++;
	                if (contBytes === 0) {
	                    // Check for overlong encoding, but support Modified UTF-8 (encoding NULL as C0 80)
	                    if (accBytes === 2 && acc < 0x80 && acc > 0)
	                        res += this.defaultCharUnicode;
	                    else if (accBytes === 3 && acc < 0x800)
	                        res += this.defaultCharUnicode;
	                    else
	                        // Actually add character.
	                        res += String.fromCharCode(acc);
	                }
	            } else { // Unexpected continuation byte
	                res += this.defaultCharUnicode;
	            }
	        }
	    }
	    this.acc = acc; this.contBytes = contBytes; this.accBytes = accBytes;
	    return res;
	};

	InternalDecoderCesu8.prototype.end = function() {
	    var res = 0;
	    if (this.contBytes > 0)
	        res += this.defaultCharUnicode;
	    return res;
	};
	return internal;
}

var utf32 = {};

var hasRequiredUtf32;

function requireUtf32 () {
	if (hasRequiredUtf32) return utf32;
	hasRequiredUtf32 = 1;

	var Buffer = requireSafer().Buffer;

	// == UTF32-LE/BE codec. ==========================================================

	utf32._utf32 = Utf32Codec;

	function Utf32Codec(codecOptions, iconv) {
	    this.iconv = iconv;
	    this.bomAware = true;
	    this.isLE = codecOptions.isLE;
	}

	utf32.utf32le = { type: '_utf32', isLE: true };
	utf32.utf32be = { type: '_utf32', isLE: false };

	// Aliases
	utf32.ucs4le = 'utf32le';
	utf32.ucs4be = 'utf32be';

	Utf32Codec.prototype.encoder = Utf32Encoder;
	Utf32Codec.prototype.decoder = Utf32Decoder;

	// -- Encoding

	function Utf32Encoder(options, codec) {
	    this.isLE = codec.isLE;
	    this.highSurrogate = 0;
	}

	Utf32Encoder.prototype.write = function(str) {
	    var src = Buffer.from(str, 'ucs2');
	    var dst = Buffer.alloc(src.length * 2);
	    var write32 = this.isLE ? dst.writeUInt32LE : dst.writeUInt32BE;
	    var offset = 0;

	    for (var i = 0; i < src.length; i += 2) {
	        var code = src.readUInt16LE(i);
	        var isHighSurrogate = (0xD800 <= code && code < 0xDC00);
	        var isLowSurrogate = (0xDC00 <= code && code < 0xE000);

	        if (this.highSurrogate) {
	            if (isHighSurrogate || !isLowSurrogate) {
	                // There shouldn't be two high surrogates in a row, nor a high surrogate which isn't followed by a low
	                // surrogate. If this happens, keep the pending high surrogate as a stand-alone semi-invalid character
	                // (technically wrong, but expected by some applications, like Windows file names).
	                write32.call(dst, this.highSurrogate, offset);
	                offset += 4;
	            }
	            else {
	                // Create 32-bit value from high and low surrogates;
	                var codepoint = (((this.highSurrogate - 0xD800) << 10) | (code - 0xDC00)) + 0x10000;

	                write32.call(dst, codepoint, offset);
	                offset += 4;
	                this.highSurrogate = 0;

	                continue;
	            }
	        }

	        if (isHighSurrogate)
	            this.highSurrogate = code;
	        else {
	            // Even if the current character is a low surrogate, with no previous high surrogate, we'll
	            // encode it as a semi-invalid stand-alone character for the same reasons expressed above for
	            // unpaired high surrogates.
	            write32.call(dst, code, offset);
	            offset += 4;
	            this.highSurrogate = 0;
	        }
	    }

	    if (offset < dst.length)
	        dst = dst.slice(0, offset);

	    return dst;
	};

	Utf32Encoder.prototype.end = function() {
	    // Treat any leftover high surrogate as a semi-valid independent character.
	    if (!this.highSurrogate)
	        return;

	    var buf = Buffer.alloc(4);

	    if (this.isLE)
	        buf.writeUInt32LE(this.highSurrogate, 0);
	    else
	        buf.writeUInt32BE(this.highSurrogate, 0);

	    this.highSurrogate = 0;

	    return buf;
	};

	// -- Decoding

	function Utf32Decoder(options, codec) {
	    this.isLE = codec.isLE;
	    this.badChar = codec.iconv.defaultCharUnicode.charCodeAt(0);
	    this.overflow = [];
	}

	Utf32Decoder.prototype.write = function(src) {
	    if (src.length === 0)
	        return '';

	    var i = 0;
	    var codepoint = 0;
	    var dst = Buffer.alloc(src.length + 4);
	    var offset = 0;
	    var isLE = this.isLE;
	    var overflow = this.overflow;
	    var badChar = this.badChar;

	    if (overflow.length > 0) {
	        for (; i < src.length && overflow.length < 4; i++)
	            overflow.push(src[i]);
	        
	        if (overflow.length === 4) {
	            // NOTE: codepoint is a signed int32 and can be negative.
	            // NOTE: We copied this block from below to help V8 optimize it (it works with array, not buffer).
	            if (isLE) {
	                codepoint = overflow[i] | (overflow[i+1] << 8) | (overflow[i+2] << 16) | (overflow[i+3] << 24);
	            } else {
	                codepoint = overflow[i+3] | (overflow[i+2] << 8) | (overflow[i+1] << 16) | (overflow[i] << 24);
	            }
	            overflow.length = 0;

	            offset = _writeCodepoint(dst, offset, codepoint, badChar);
	        }
	    }

	    // Main loop. Should be as optimized as possible.
	    for (; i < src.length - 3; i += 4) {
	        // NOTE: codepoint is a signed int32 and can be negative.
	        if (isLE) {
	            codepoint = src[i] | (src[i+1] << 8) | (src[i+2] << 16) | (src[i+3] << 24);
	        } else {
	            codepoint = src[i+3] | (src[i+2] << 8) | (src[i+1] << 16) | (src[i] << 24);
	        }
	        offset = _writeCodepoint(dst, offset, codepoint, badChar);
	    }

	    // Keep overflowing bytes.
	    for (; i < src.length; i++) {
	        overflow.push(src[i]);
	    }

	    return dst.slice(0, offset).toString('ucs2');
	};

	function _writeCodepoint(dst, offset, codepoint, badChar) {
	    // NOTE: codepoint is signed int32 and can be negative. We keep it that way to help V8 with optimizations.
	    if (codepoint < 0 || codepoint > 0x10FFFF) {
	        // Not a valid Unicode codepoint
	        codepoint = badChar;
	    } 

	    // Ephemeral Planes: Write high surrogate.
	    if (codepoint >= 0x10000) {
	        codepoint -= 0x10000;

	        var high = 0xD800 | (codepoint >> 10);
	        dst[offset++] = high & 0xff;
	        dst[offset++] = high >> 8;

	        // Low surrogate is written below.
	        var codepoint = 0xDC00 | (codepoint & 0x3FF);
	    }

	    // Write BMP char or low surrogate.
	    dst[offset++] = codepoint & 0xff;
	    dst[offset++] = codepoint >> 8;

	    return offset;
	}
	Utf32Decoder.prototype.end = function() {
	    this.overflow.length = 0;
	};

	// == UTF-32 Auto codec =============================================================
	// Decoder chooses automatically from UTF-32LE and UTF-32BE using BOM and space-based heuristic.
	// Defaults to UTF-32LE. http://en.wikipedia.org/wiki/UTF-32
	// Encoder/decoder default can be changed: iconv.decode(buf, 'utf32', {defaultEncoding: 'utf-32be'});

	// Encoder prepends BOM (which can be overridden with (addBOM: false}).

	utf32.utf32 = Utf32AutoCodec;
	utf32.ucs4 = 'utf32';

	function Utf32AutoCodec(options, iconv) {
	    this.iconv = iconv;
	}

	Utf32AutoCodec.prototype.encoder = Utf32AutoEncoder;
	Utf32AutoCodec.prototype.decoder = Utf32AutoDecoder;

	// -- Encoding

	function Utf32AutoEncoder(options, codec) {
	    options = options || {};

	    if (options.addBOM === undefined)
	        options.addBOM = true;

	    this.encoder = codec.iconv.getEncoder(options.defaultEncoding || 'utf-32le', options);
	}

	Utf32AutoEncoder.prototype.write = function(str) {
	    return this.encoder.write(str);
	};

	Utf32AutoEncoder.prototype.end = function() {
	    return this.encoder.end();
	};

	// -- Decoding

	function Utf32AutoDecoder(options, codec) {
	    this.decoder = null;
	    this.initialBufs = [];
	    this.initialBufsLen = 0;
	    this.options = options || {};
	    this.iconv = codec.iconv;
	}

	Utf32AutoDecoder.prototype.write = function(buf) {
	    if (!this.decoder) { 
	        // Codec is not chosen yet. Accumulate initial bytes.
	        this.initialBufs.push(buf);
	        this.initialBufsLen += buf.length;

	        if (this.initialBufsLen < 32) // We need more bytes to use space heuristic (see below)
	            return '';

	        // We have enough bytes -> detect endianness.
	        var encoding = detectEncoding(this.initialBufs, this.options.defaultEncoding);
	        this.decoder = this.iconv.getDecoder(encoding, this.options);

	        var resStr = '';
	        for (var i = 0; i < this.initialBufs.length; i++)
	            resStr += this.decoder.write(this.initialBufs[i]);

	        this.initialBufs.length = this.initialBufsLen = 0;
	        return resStr;
	    }

	    return this.decoder.write(buf);
	};

	Utf32AutoDecoder.prototype.end = function() {
	    if (!this.decoder) {
	        var encoding = detectEncoding(this.initialBufs, this.options.defaultEncoding);
	        this.decoder = this.iconv.getDecoder(encoding, this.options);

	        var resStr = '';
	        for (var i = 0; i < this.initialBufs.length; i++)
	            resStr += this.decoder.write(this.initialBufs[i]);

	        var trail = this.decoder.end();
	        if (trail)
	            resStr += trail;

	        this.initialBufs.length = this.initialBufsLen = 0;
	        return resStr;
	    }

	    return this.decoder.end();
	};

	function detectEncoding(bufs, defaultEncoding) {
	    var b = [];
	    var charsProcessed = 0;
	    var invalidLE = 0, invalidBE = 0;   // Number of invalid chars when decoded as LE or BE.
	    var bmpCharsLE = 0, bmpCharsBE = 0; // Number of BMP chars when decoded as LE or BE.

	    outer_loop:
	    for (var i = 0; i < bufs.length; i++) {
	        var buf = bufs[i];
	        for (var j = 0; j < buf.length; j++) {
	            b.push(buf[j]);
	            if (b.length === 4) {
	                if (charsProcessed === 0) {
	                    // Check BOM first.
	                    if (b[0] === 0xFF && b[1] === 0xFE && b[2] === 0 && b[3] === 0) {
	                        return 'utf-32le';
	                    }
	                    if (b[0] === 0 && b[1] === 0 && b[2] === 0xFE && b[3] === 0xFF) {
	                        return 'utf-32be';
	                    }
	                }

	                if (b[0] !== 0 || b[1] > 0x10) invalidBE++;
	                if (b[3] !== 0 || b[2] > 0x10) invalidLE++;

	                if (b[0] === 0 && b[1] === 0 && (b[2] !== 0 || b[3] !== 0)) bmpCharsBE++;
	                if ((b[0] !== 0 || b[1] !== 0) && b[2] === 0 && b[3] === 0) bmpCharsLE++;

	                b.length = 0;
	                charsProcessed++;

	                if (charsProcessed >= 100) {
	                    break outer_loop;
	                }
	            }
	        }
	    }

	    // Make decisions.
	    if (bmpCharsBE - invalidBE > bmpCharsLE - invalidLE)  return 'utf-32be';
	    if (bmpCharsBE - invalidBE < bmpCharsLE - invalidLE)  return 'utf-32le';

	    // Couldn't decide (likely all zeros or not enough data).
	    return defaultEncoding || 'utf-32le';
	}
	return utf32;
}

var utf16 = {};

var hasRequiredUtf16;

function requireUtf16 () {
	if (hasRequiredUtf16) return utf16;
	hasRequiredUtf16 = 1;
	var Buffer = requireSafer().Buffer;

	// Note: UTF16-LE (or UCS2) codec is Node.js native. See encodings/internal.js

	// == UTF16-BE codec. ==========================================================

	utf16.utf16be = Utf16BECodec;
	function Utf16BECodec() {
	}

	Utf16BECodec.prototype.encoder = Utf16BEEncoder;
	Utf16BECodec.prototype.decoder = Utf16BEDecoder;
	Utf16BECodec.prototype.bomAware = true;


	// -- Encoding

	function Utf16BEEncoder() {
	}

	Utf16BEEncoder.prototype.write = function(str) {
	    var buf = Buffer.from(str, 'ucs2');
	    for (var i = 0; i < buf.length; i += 2) {
	        var tmp = buf[i]; buf[i] = buf[i+1]; buf[i+1] = tmp;
	    }
	    return buf;
	};

	Utf16BEEncoder.prototype.end = function() {
	};


	// -- Decoding

	function Utf16BEDecoder() {
	    this.overflowByte = -1;
	}

	Utf16BEDecoder.prototype.write = function(buf) {
	    if (buf.length == 0)
	        return '';

	    var buf2 = Buffer.alloc(buf.length + 1),
	        i = 0, j = 0;

	    if (this.overflowByte !== -1) {
	        buf2[0] = buf[0];
	        buf2[1] = this.overflowByte;
	        i = 1; j = 2;
	    }

	    for (; i < buf.length-1; i += 2, j+= 2) {
	        buf2[j] = buf[i+1];
	        buf2[j+1] = buf[i];
	    }

	    this.overflowByte = (i == buf.length-1) ? buf[buf.length-1] : -1;

	    return buf2.slice(0, j).toString('ucs2');
	};

	Utf16BEDecoder.prototype.end = function() {
	    this.overflowByte = -1;
	};


	// == UTF-16 codec =============================================================
	// Decoder chooses automatically from UTF-16LE and UTF-16BE using BOM and space-based heuristic.
	// Defaults to UTF-16LE, as it's prevalent and default in Node.
	// http://en.wikipedia.org/wiki/UTF-16 and http://encoding.spec.whatwg.org/#utf-16le
	// Decoder default can be changed: iconv.decode(buf, 'utf16', {defaultEncoding: 'utf-16be'});

	// Encoder uses UTF-16LE and prepends BOM (which can be overridden with addBOM: false).

	utf16.utf16 = Utf16Codec;
	function Utf16Codec(codecOptions, iconv) {
	    this.iconv = iconv;
	}

	Utf16Codec.prototype.encoder = Utf16Encoder;
	Utf16Codec.prototype.decoder = Utf16Decoder;


	// -- Encoding (pass-through)

	function Utf16Encoder(options, codec) {
	    options = options || {};
	    if (options.addBOM === undefined)
	        options.addBOM = true;
	    this.encoder = codec.iconv.getEncoder('utf-16le', options);
	}

	Utf16Encoder.prototype.write = function(str) {
	    return this.encoder.write(str);
	};

	Utf16Encoder.prototype.end = function() {
	    return this.encoder.end();
	};


	// -- Decoding

	function Utf16Decoder(options, codec) {
	    this.decoder = null;
	    this.initialBufs = [];
	    this.initialBufsLen = 0;

	    this.options = options || {};
	    this.iconv = codec.iconv;
	}

	Utf16Decoder.prototype.write = function(buf) {
	    if (!this.decoder) {
	        // Codec is not chosen yet. Accumulate initial bytes.
	        this.initialBufs.push(buf);
	        this.initialBufsLen += buf.length;
	        
	        if (this.initialBufsLen < 16) // We need more bytes to use space heuristic (see below)
	            return '';

	        // We have enough bytes -> detect endianness.
	        var encoding = detectEncoding(this.initialBufs, this.options.defaultEncoding);
	        this.decoder = this.iconv.getDecoder(encoding, this.options);

	        var resStr = '';
	        for (var i = 0; i < this.initialBufs.length; i++)
	            resStr += this.decoder.write(this.initialBufs[i]);

	        this.initialBufs.length = this.initialBufsLen = 0;
	        return resStr;
	    }

	    return this.decoder.write(buf);
	};

	Utf16Decoder.prototype.end = function() {
	    if (!this.decoder) {
	        var encoding = detectEncoding(this.initialBufs, this.options.defaultEncoding);
	        this.decoder = this.iconv.getDecoder(encoding, this.options);

	        var resStr = '';
	        for (var i = 0; i < this.initialBufs.length; i++)
	            resStr += this.decoder.write(this.initialBufs[i]);

	        var trail = this.decoder.end();
	        if (trail)
	            resStr += trail;

	        this.initialBufs.length = this.initialBufsLen = 0;
	        return resStr;
	    }
	    return this.decoder.end();
	};

	function detectEncoding(bufs, defaultEncoding) {
	    var b = [];
	    var charsProcessed = 0;
	    var asciiCharsLE = 0, asciiCharsBE = 0; // Number of ASCII chars when decoded as LE or BE.

	    outer_loop:
	    for (var i = 0; i < bufs.length; i++) {
	        var buf = bufs[i];
	        for (var j = 0; j < buf.length; j++) {
	            b.push(buf[j]);
	            if (b.length === 2) {
	                if (charsProcessed === 0) {
	                    // Check BOM first.
	                    if (b[0] === 0xFF && b[1] === 0xFE) return 'utf-16le';
	                    if (b[0] === 0xFE && b[1] === 0xFF) return 'utf-16be';
	                }

	                if (b[0] === 0 && b[1] !== 0) asciiCharsBE++;
	                if (b[0] !== 0 && b[1] === 0) asciiCharsLE++;

	                b.length = 0;
	                charsProcessed++;

	                if (charsProcessed >= 100) {
	                    break outer_loop;
	                }
	            }
	        }
	    }

	    // Make decisions.
	    // Most of the time, the content has ASCII chars (U+00**), but the opposite (U+**00) is uncommon.
	    // So, we count ASCII as if it was LE or BE, and decide from that.
	    if (asciiCharsBE > asciiCharsLE) return 'utf-16be';
	    if (asciiCharsBE < asciiCharsLE) return 'utf-16le';

	    // Couldn't decide (likely all zeros or not enough data).
	    return defaultEncoding || 'utf-16le';
	}
	return utf16;
}

var utf7 = {};

var hasRequiredUtf7;

function requireUtf7 () {
	if (hasRequiredUtf7) return utf7;
	hasRequiredUtf7 = 1;
	var Buffer = requireSafer().Buffer;

	// UTF-7 codec, according to https://tools.ietf.org/html/rfc2152
	// See also below a UTF-7-IMAP codec, according to http://tools.ietf.org/html/rfc3501#section-5.1.3

	utf7.utf7 = Utf7Codec;
	utf7.unicode11utf7 = 'utf7'; // Alias UNICODE-1-1-UTF-7
	function Utf7Codec(codecOptions, iconv) {
	    this.iconv = iconv;
	}
	Utf7Codec.prototype.encoder = Utf7Encoder;
	Utf7Codec.prototype.decoder = Utf7Decoder;
	Utf7Codec.prototype.bomAware = true;


	// -- Encoding

	var nonDirectChars = /[^A-Za-z0-9'\(\),-\.\/:\? \n\r\t]+/g;

	function Utf7Encoder(options, codec) {
	    this.iconv = codec.iconv;
	}

	Utf7Encoder.prototype.write = function(str) {
	    // Naive implementation.
	    // Non-direct chars are encoded as "+<base64>-"; single "+" char is encoded as "+-".
	    return Buffer.from(str.replace(nonDirectChars, function(chunk) {
	        return "+" + (chunk === '+' ? '' : 
	            this.iconv.encode(chunk, 'utf16-be').toString('base64').replace(/=+$/, '')) 
	            + "-";
	    }.bind(this)));
	};

	Utf7Encoder.prototype.end = function() {
	};


	// -- Decoding

	function Utf7Decoder(options, codec) {
	    this.iconv = codec.iconv;
	    this.inBase64 = false;
	    this.base64Accum = '';
	}

	var base64Regex = /[A-Za-z0-9\/+]/;
	var base64Chars = [];
	for (var i = 0; i < 256; i++)
	    base64Chars[i] = base64Regex.test(String.fromCharCode(i));

	var plusChar = '+'.charCodeAt(0), 
	    minusChar = '-'.charCodeAt(0),
	    andChar = '&'.charCodeAt(0);

	Utf7Decoder.prototype.write = function(buf) {
	    var res = "", lastI = 0,
	        inBase64 = this.inBase64,
	        base64Accum = this.base64Accum;

	    // The decoder is more involved as we must handle chunks in stream.

	    for (var i = 0; i < buf.length; i++) {
	        if (!inBase64) { // We're in direct mode.
	            // Write direct chars until '+'
	            if (buf[i] == plusChar) {
	                res += this.iconv.decode(buf.slice(lastI, i), "ascii"); // Write direct chars.
	                lastI = i+1;
	                inBase64 = true;
	            }
	        } else { // We decode base64.
	            if (!base64Chars[buf[i]]) { // Base64 ended.
	                if (i == lastI && buf[i] == minusChar) {// "+-" -> "+"
	                    res += "+";
	                } else {
	                    var b64str = base64Accum + this.iconv.decode(buf.slice(lastI, i), "ascii");
	                    res += this.iconv.decode(Buffer.from(b64str, 'base64'), "utf16-be");
	                }

	                if (buf[i] != minusChar) // Minus is absorbed after base64.
	                    i--;

	                lastI = i+1;
	                inBase64 = false;
	                base64Accum = '';
	            }
	        }
	    }

	    if (!inBase64) {
	        res += this.iconv.decode(buf.slice(lastI), "ascii"); // Write direct chars.
	    } else {
	        var b64str = base64Accum + this.iconv.decode(buf.slice(lastI), "ascii");

	        var canBeDecoded = b64str.length - (b64str.length % 8); // Minimal chunk: 2 quads -> 2x3 bytes -> 3 chars.
	        base64Accum = b64str.slice(canBeDecoded); // The rest will be decoded in future.
	        b64str = b64str.slice(0, canBeDecoded);

	        res += this.iconv.decode(Buffer.from(b64str, 'base64'), "utf16-be");
	    }

	    this.inBase64 = inBase64;
	    this.base64Accum = base64Accum;

	    return res;
	};

	Utf7Decoder.prototype.end = function() {
	    var res = "";
	    if (this.inBase64 && this.base64Accum.length > 0)
	        res = this.iconv.decode(Buffer.from(this.base64Accum, 'base64'), "utf16-be");

	    this.inBase64 = false;
	    this.base64Accum = '';
	    return res;
	};


	// UTF-7-IMAP codec.
	// RFC3501 Sec. 5.1.3 Modified UTF-7 (http://tools.ietf.org/html/rfc3501#section-5.1.3)
	// Differences:
	//  * Base64 part is started by "&" instead of "+"
	//  * Direct characters are 0x20-0x7E, except "&" (0x26)
	//  * In Base64, "," is used instead of "/"
	//  * Base64 must not be used to represent direct characters.
	//  * No implicit shift back from Base64 (should always end with '-')
	//  * String must end in non-shifted position.
	//  * "-&" while in base64 is not allowed.


	utf7.utf7imap = Utf7IMAPCodec;
	function Utf7IMAPCodec(codecOptions, iconv) {
	    this.iconv = iconv;
	}
	Utf7IMAPCodec.prototype.encoder = Utf7IMAPEncoder;
	Utf7IMAPCodec.prototype.decoder = Utf7IMAPDecoder;
	Utf7IMAPCodec.prototype.bomAware = true;


	// -- Encoding

	function Utf7IMAPEncoder(options, codec) {
	    this.iconv = codec.iconv;
	    this.inBase64 = false;
	    this.base64Accum = Buffer.alloc(6);
	    this.base64AccumIdx = 0;
	}

	Utf7IMAPEncoder.prototype.write = function(str) {
	    var inBase64 = this.inBase64,
	        base64Accum = this.base64Accum,
	        base64AccumIdx = this.base64AccumIdx,
	        buf = Buffer.alloc(str.length*5 + 10), bufIdx = 0;

	    for (var i = 0; i < str.length; i++) {
	        var uChar = str.charCodeAt(i);
	        if (0x20 <= uChar && uChar <= 0x7E) { // Direct character or '&'.
	            if (inBase64) {
	                if (base64AccumIdx > 0) {
	                    bufIdx += buf.write(base64Accum.slice(0, base64AccumIdx).toString('base64').replace(/\//g, ',').replace(/=+$/, ''), bufIdx);
	                    base64AccumIdx = 0;
	                }

	                buf[bufIdx++] = minusChar; // Write '-', then go to direct mode.
	                inBase64 = false;
	            }

	            if (!inBase64) {
	                buf[bufIdx++] = uChar; // Write direct character

	                if (uChar === andChar)  // Ampersand -> '&-'
	                    buf[bufIdx++] = minusChar;
	            }

	        } else { // Non-direct character
	            if (!inBase64) {
	                buf[bufIdx++] = andChar; // Write '&', then go to base64 mode.
	                inBase64 = true;
	            }
	            if (inBase64) {
	                base64Accum[base64AccumIdx++] = uChar >> 8;
	                base64Accum[base64AccumIdx++] = uChar & 0xFF;

	                if (base64AccumIdx == base64Accum.length) {
	                    bufIdx += buf.write(base64Accum.toString('base64').replace(/\//g, ','), bufIdx);
	                    base64AccumIdx = 0;
	                }
	            }
	        }
	    }

	    this.inBase64 = inBase64;
	    this.base64AccumIdx = base64AccumIdx;

	    return buf.slice(0, bufIdx);
	};

	Utf7IMAPEncoder.prototype.end = function() {
	    var buf = Buffer.alloc(10), bufIdx = 0;
	    if (this.inBase64) {
	        if (this.base64AccumIdx > 0) {
	            bufIdx += buf.write(this.base64Accum.slice(0, this.base64AccumIdx).toString('base64').replace(/\//g, ',').replace(/=+$/, ''), bufIdx);
	            this.base64AccumIdx = 0;
	        }

	        buf[bufIdx++] = minusChar; // Write '-', then go to direct mode.
	        this.inBase64 = false;
	    }

	    return buf.slice(0, bufIdx);
	};


	// -- Decoding

	function Utf7IMAPDecoder(options, codec) {
	    this.iconv = codec.iconv;
	    this.inBase64 = false;
	    this.base64Accum = '';
	}

	var base64IMAPChars = base64Chars.slice();
	base64IMAPChars[','.charCodeAt(0)] = true;

	Utf7IMAPDecoder.prototype.write = function(buf) {
	    var res = "", lastI = 0,
	        inBase64 = this.inBase64,
	        base64Accum = this.base64Accum;

	    // The decoder is more involved as we must handle chunks in stream.
	    // It is forgiving, closer to standard UTF-7 (for example, '-' is optional at the end).

	    for (var i = 0; i < buf.length; i++) {
	        if (!inBase64) { // We're in direct mode.
	            // Write direct chars until '&'
	            if (buf[i] == andChar) {
	                res += this.iconv.decode(buf.slice(lastI, i), "ascii"); // Write direct chars.
	                lastI = i+1;
	                inBase64 = true;
	            }
	        } else { // We decode base64.
	            if (!base64IMAPChars[buf[i]]) { // Base64 ended.
	                if (i == lastI && buf[i] == minusChar) { // "&-" -> "&"
	                    res += "&";
	                } else {
	                    var b64str = base64Accum + this.iconv.decode(buf.slice(lastI, i), "ascii").replace(/,/g, '/');
	                    res += this.iconv.decode(Buffer.from(b64str, 'base64'), "utf16-be");
	                }

	                if (buf[i] != minusChar) // Minus may be absorbed after base64.
	                    i--;

	                lastI = i+1;
	                inBase64 = false;
	                base64Accum = '';
	            }
	        }
	    }

	    if (!inBase64) {
	        res += this.iconv.decode(buf.slice(lastI), "ascii"); // Write direct chars.
	    } else {
	        var b64str = base64Accum + this.iconv.decode(buf.slice(lastI), "ascii").replace(/,/g, '/');

	        var canBeDecoded = b64str.length - (b64str.length % 8); // Minimal chunk: 2 quads -> 2x3 bytes -> 3 chars.
	        base64Accum = b64str.slice(canBeDecoded); // The rest will be decoded in future.
	        b64str = b64str.slice(0, canBeDecoded);

	        res += this.iconv.decode(Buffer.from(b64str, 'base64'), "utf16-be");
	    }

	    this.inBase64 = inBase64;
	    this.base64Accum = base64Accum;

	    return res;
	};

	Utf7IMAPDecoder.prototype.end = function() {
	    var res = "";
	    if (this.inBase64 && this.base64Accum.length > 0)
	        res = this.iconv.decode(Buffer.from(this.base64Accum, 'base64'), "utf16-be");

	    this.inBase64 = false;
	    this.base64Accum = '';
	    return res;
	};
	return utf7;
}

var sbcsCodec = {};

var hasRequiredSbcsCodec;

function requireSbcsCodec () {
	if (hasRequiredSbcsCodec) return sbcsCodec;
	hasRequiredSbcsCodec = 1;
	var Buffer = requireSafer().Buffer;

	// Single-byte codec. Needs a 'chars' string parameter that contains 256 or 128 chars that
	// correspond to encoded bytes (if 128 - then lower half is ASCII). 

	sbcsCodec._sbcs = SBCSCodec;
	function SBCSCodec(codecOptions, iconv) {
	    if (!codecOptions)
	        throw new Error("SBCS codec is called without the data.")
	    
	    // Prepare char buffer for decoding.
	    if (!codecOptions.chars || (codecOptions.chars.length !== 128 && codecOptions.chars.length !== 256))
	        throw new Error("Encoding '"+codecOptions.type+"' has incorrect 'chars' (must be of len 128 or 256)");
	    
	    if (codecOptions.chars.length === 128) {
	        var asciiString = "";
	        for (var i = 0; i < 128; i++)
	            asciiString += String.fromCharCode(i);
	        codecOptions.chars = asciiString + codecOptions.chars;
	    }

	    this.decodeBuf = Buffer.from(codecOptions.chars, 'ucs2');
	    
	    // Encoding buffer.
	    var encodeBuf = Buffer.alloc(65536, iconv.defaultCharSingleByte.charCodeAt(0));

	    for (var i = 0; i < codecOptions.chars.length; i++)
	        encodeBuf[codecOptions.chars.charCodeAt(i)] = i;

	    this.encodeBuf = encodeBuf;
	}

	SBCSCodec.prototype.encoder = SBCSEncoder;
	SBCSCodec.prototype.decoder = SBCSDecoder;


	function SBCSEncoder(options, codec) {
	    this.encodeBuf = codec.encodeBuf;
	}

	SBCSEncoder.prototype.write = function(str) {
	    var buf = Buffer.alloc(str.length);
	    for (var i = 0; i < str.length; i++)
	        buf[i] = this.encodeBuf[str.charCodeAt(i)];
	    
	    return buf;
	};

	SBCSEncoder.prototype.end = function() {
	};


	function SBCSDecoder(options, codec) {
	    this.decodeBuf = codec.decodeBuf;
	}

	SBCSDecoder.prototype.write = function(buf) {
	    // Strings are immutable in JS -> we use ucs2 buffer to speed up computations.
	    var decodeBuf = this.decodeBuf;
	    var newBuf = Buffer.alloc(buf.length*2);
	    var idx1 = 0, idx2 = 0;
	    for (var i = 0; i < buf.length; i++) {
	        idx1 = buf[i]*2; idx2 = i*2;
	        newBuf[idx2] = decodeBuf[idx1];
	        newBuf[idx2+1] = decodeBuf[idx1+1];
	    }
	    return newBuf.toString('ucs2');
	};

	SBCSDecoder.prototype.end = function() {
	};
	return sbcsCodec;
}

var sbcsData;
var hasRequiredSbcsData;

function requireSbcsData () {
	if (hasRequiredSbcsData) return sbcsData;
	hasRequiredSbcsData = 1;

	// Manually added data to be used by sbcs codec in addition to generated one.

	sbcsData = {
	    // Not supported by iconv, not sure why.
	    "10029": "maccenteuro",
	    "maccenteuro": {
	        "type": "_sbcs",
	        "chars": "ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ"
	    },

	    "808": "cp808",
	    "ibm808": "cp808",
	    "cp808": {
	        "type": "_sbcs",
	        "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№€■ "
	    },

	    "mik": {
	        "type": "_sbcs",
	        "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя└┴┬├─┼╣║╚╔╩╦╠═╬┐░▒▓│┤№§╗╝┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
	    },

	    "cp720": {
	        "type": "_sbcs",
	        "chars": "\x80\x81éâ\x84à\x86çêëèïî\x8d\x8e\x8f\x90\u0651\u0652ô¤ـûùءآأؤ£إئابةتثجحخدذرزسشص«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ضطظعغفµقكلمنهوىي≡\u064b\u064c\u064d\u064e\u064f\u0650≈°∙·√ⁿ²■\u00a0"
	    },

	    // Aliases of generated encodings.
	    "ascii8bit": "ascii",
	    "usascii": "ascii",
	    "ansix34": "ascii",
	    "ansix341968": "ascii",
	    "ansix341986": "ascii",
	    "csascii": "ascii",
	    "cp367": "ascii",
	    "ibm367": "ascii",
	    "isoir6": "ascii",
	    "iso646us": "ascii",
	    "iso646irv": "ascii",
	    "us": "ascii",

	    "latin1": "iso88591",
	    "latin2": "iso88592",
	    "latin3": "iso88593",
	    "latin4": "iso88594",
	    "latin5": "iso88599",
	    "latin6": "iso885910",
	    "latin7": "iso885913",
	    "latin8": "iso885914",
	    "latin9": "iso885915",
	    "latin10": "iso885916",

	    "csisolatin1": "iso88591",
	    "csisolatin2": "iso88592",
	    "csisolatin3": "iso88593",
	    "csisolatin4": "iso88594",
	    "csisolatincyrillic": "iso88595",
	    "csisolatinarabic": "iso88596",
	    "csisolatingreek" : "iso88597",
	    "csisolatinhebrew": "iso88598",
	    "csisolatin5": "iso88599",
	    "csisolatin6": "iso885910",

	    "l1": "iso88591",
	    "l2": "iso88592",
	    "l3": "iso88593",
	    "l4": "iso88594",
	    "l5": "iso88599",
	    "l6": "iso885910",
	    "l7": "iso885913",
	    "l8": "iso885914",
	    "l9": "iso885915",
	    "l10": "iso885916",

	    "isoir14": "iso646jp",
	    "isoir57": "iso646cn",
	    "isoir100": "iso88591",
	    "isoir101": "iso88592",
	    "isoir109": "iso88593",
	    "isoir110": "iso88594",
	    "isoir144": "iso88595",
	    "isoir127": "iso88596",
	    "isoir126": "iso88597",
	    "isoir138": "iso88598",
	    "isoir148": "iso88599",
	    "isoir157": "iso885910",
	    "isoir166": "tis620",
	    "isoir179": "iso885913",
	    "isoir199": "iso885914",
	    "isoir203": "iso885915",
	    "isoir226": "iso885916",

	    "cp819": "iso88591",
	    "ibm819": "iso88591",

	    "cyrillic": "iso88595",

	    "arabic": "iso88596",
	    "arabic8": "iso88596",
	    "ecma114": "iso88596",
	    "asmo708": "iso88596",

	    "greek" : "iso88597",
	    "greek8" : "iso88597",
	    "ecma118" : "iso88597",
	    "elot928" : "iso88597",

	    "hebrew": "iso88598",
	    "hebrew8": "iso88598",

	    "turkish": "iso88599",
	    "turkish8": "iso88599",

	    "thai": "iso885911",
	    "thai8": "iso885911",

	    "celtic": "iso885914",
	    "celtic8": "iso885914",
	    "isoceltic": "iso885914",

	    "tis6200": "tis620",
	    "tis62025291": "tis620",
	    "tis62025330": "tis620",

	    "10000": "macroman",
	    "10006": "macgreek",
	    "10007": "maccyrillic",
	    "10079": "maciceland",
	    "10081": "macturkish",

	    "cspc8codepage437": "cp437",
	    "cspc775baltic": "cp775",
	    "cspc850multilingual": "cp850",
	    "cspcp852": "cp852",
	    "cspc862latinhebrew": "cp862",
	    "cpgr": "cp869",

	    "msee": "cp1250",
	    "mscyrl": "cp1251",
	    "msansi": "cp1252",
	    "msgreek": "cp1253",
	    "msturk": "cp1254",
	    "mshebr": "cp1255",
	    "msarab": "cp1256",
	    "winbaltrim": "cp1257",

	    "cp20866": "koi8r",
	    "20866": "koi8r",
	    "ibm878": "koi8r",
	    "cskoi8r": "koi8r",

	    "cp21866": "koi8u",
	    "21866": "koi8u",
	    "ibm1168": "koi8u",

	    "strk10482002": "rk1048",

	    "tcvn5712": "tcvn",
	    "tcvn57121": "tcvn",

	    "gb198880": "iso646cn",
	    "cn": "iso646cn",

	    "csiso14jisc6220ro": "iso646jp",
	    "jisc62201969ro": "iso646jp",
	    "jp": "iso646jp",

	    "cshproman8": "hproman8",
	    "r8": "hproman8",
	    "roman8": "hproman8",
	    "xroman8": "hproman8",
	    "ibm1051": "hproman8",

	    "mac": "macintosh",
	    "csmacintosh": "macintosh",
	};
	return sbcsData;
}

var sbcsDataGenerated;
var hasRequiredSbcsDataGenerated;

function requireSbcsDataGenerated () {
	if (hasRequiredSbcsDataGenerated) return sbcsDataGenerated;
	hasRequiredSbcsDataGenerated = 1;

	// Generated data for sbcs codec. Don't edit manually. Regenerate using generation/gen-sbcs.js script.
	sbcsDataGenerated = {
	  "437": "cp437",
	  "737": "cp737",
	  "775": "cp775",
	  "850": "cp850",
	  "852": "cp852",
	  "855": "cp855",
	  "856": "cp856",
	  "857": "cp857",
	  "858": "cp858",
	  "860": "cp860",
	  "861": "cp861",
	  "862": "cp862",
	  "863": "cp863",
	  "864": "cp864",
	  "865": "cp865",
	  "866": "cp866",
	  "869": "cp869",
	  "874": "windows874",
	  "922": "cp922",
	  "1046": "cp1046",
	  "1124": "cp1124",
	  "1125": "cp1125",
	  "1129": "cp1129",
	  "1133": "cp1133",
	  "1161": "cp1161",
	  "1162": "cp1162",
	  "1163": "cp1163",
	  "1250": "windows1250",
	  "1251": "windows1251",
	  "1252": "windows1252",
	  "1253": "windows1253",
	  "1254": "windows1254",
	  "1255": "windows1255",
	  "1256": "windows1256",
	  "1257": "windows1257",
	  "1258": "windows1258",
	  "28591": "iso88591",
	  "28592": "iso88592",
	  "28593": "iso88593",
	  "28594": "iso88594",
	  "28595": "iso88595",
	  "28596": "iso88596",
	  "28597": "iso88597",
	  "28598": "iso88598",
	  "28599": "iso88599",
	  "28600": "iso885910",
	  "28601": "iso885911",
	  "28603": "iso885913",
	  "28604": "iso885914",
	  "28605": "iso885915",
	  "28606": "iso885916",
	  "windows874": {
	    "type": "_sbcs",
	    "chars": "€����…�����������‘’“”•–—�������� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
	  },
	  "win874": "windows874",
	  "cp874": "windows874",
	  "windows1250": {
	    "type": "_sbcs",
	    "chars": "€�‚�„…†‡�‰Š‹ŚŤŽŹ�‘’“”•–—�™š›śťžź ˇ˘Ł¤Ą¦§¨©Ş«¬­®Ż°±˛ł´µ¶·¸ąş»Ľ˝ľżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙"
	  },
	  "win1250": "windows1250",
	  "cp1250": "windows1250",
	  "windows1251": {
	    "type": "_sbcs",
	    "chars": "ЂЃ‚ѓ„…†‡€‰Љ‹ЊЌЋЏђ‘’“”•–—�™љ›њќћџ ЎўЈ¤Ґ¦§Ё©Є«¬­®Ї°±Ііґµ¶·ё№є»јЅѕїАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
	  },
	  "win1251": "windows1251",
	  "cp1251": "windows1251",
	  "windows1252": {
	    "type": "_sbcs",
	    "chars": "€�‚ƒ„…†‡ˆ‰Š‹Œ�Ž��‘’“”•–—˜™š›œ�žŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
	  },
	  "win1252": "windows1252",
	  "cp1252": "windows1252",
	  "windows1253": {
	    "type": "_sbcs",
	    "chars": "€�‚ƒ„…†‡�‰�‹�����‘’“”•–—�™�›���� ΅Ά£¤¥¦§¨©�«¬­®―°±²³΄µ¶·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�"
	  },
	  "win1253": "windows1253",
	  "cp1253": "windows1253",
	  "windows1254": {
	    "type": "_sbcs",
	    "chars": "€�‚ƒ„…†‡ˆ‰Š‹Œ����‘’“”•–—˜™š›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ"
	  },
	  "win1254": "windows1254",
	  "cp1254": "windows1254",
	  "windows1255": {
	    "type": "_sbcs",
	    "chars": "€�‚ƒ„…†‡ˆ‰�‹�����‘’“”•–—˜™�›���� ¡¢£₪¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾¿ְֱֲֳִֵֶַָֹֺֻּֽ־ֿ׀ׁׂ׃װױײ׳״�������אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�"
	  },
	  "win1255": "windows1255",
	  "cp1255": "windows1255",
	  "windows1256": {
	    "type": "_sbcs",
	    "chars": "€پ‚ƒ„…†‡ˆ‰ٹ‹Œچژڈگ‘’“”•–—ک™ڑ›œ‌‍ں ،¢£¤¥¦§¨©ھ«¬­®¯°±²³´µ¶·¸¹؛»¼½¾؟ہءآأؤإئابةتثجحخدذرزسشصض×طظعغـفقكàلâمنهوçèéêëىيîïًٌٍَôُِ÷ّùْûü‎‏ے"
	  },
	  "win1256": "windows1256",
	  "cp1256": "windows1256",
	  "windows1257": {
	    "type": "_sbcs",
	    "chars": "€�‚�„…†‡�‰�‹�¨ˇ¸�‘’“”•–—�™�›�¯˛� �¢£¤�¦§Ø©Ŗ«¬­®Æ°±²³´µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž˙"
	  },
	  "win1257": "windows1257",
	  "cp1257": "windows1257",
	  "windows1258": {
	    "type": "_sbcs",
	    "chars": "€�‚ƒ„…†‡ˆ‰�‹Œ����‘’“”•–—˜™�›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
	  },
	  "win1258": "windows1258",
	  "cp1258": "windows1258",
	  "iso88591": {
	    "type": "_sbcs",
	    "chars": " ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
	  },
	  "cp28591": "iso88591",
	  "iso88592": {
	    "type": "_sbcs",
	    "chars": " Ą˘Ł¤ĽŚ§¨ŠŞŤŹ­ŽŻ°ą˛ł´ľśˇ¸šşťź˝žżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙"
	  },
	  "cp28592": "iso88592",
	  "iso88593": {
	    "type": "_sbcs",
	    "chars": " Ħ˘£¤�Ĥ§¨İŞĞĴ­�Ż°ħ²³´µĥ·¸ışğĵ½�żÀÁÂ�ÄĊĈÇÈÉÊËÌÍÎÏ�ÑÒÓÔĠÖ×ĜÙÚÛÜŬŜßàáâ�äċĉçèéêëìíîï�ñòóôġö÷ĝùúûüŭŝ˙"
	  },
	  "cp28593": "iso88593",
	  "iso88594": {
	    "type": "_sbcs",
	    "chars": " ĄĸŖ¤ĨĻ§¨ŠĒĢŦ­Ž¯°ą˛ŗ´ĩļˇ¸šēģŧŊžŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎĪĐŅŌĶÔÕÖ×ØŲÚÛÜŨŪßāáâãäåæįčéęëėíîīđņōķôõö÷øųúûüũū˙"
	  },
	  "cp28594": "iso88594",
	  "iso88595": {
	    "type": "_sbcs",
	    "chars": " ЁЂЃЄЅІЇЈЉЊЋЌ­ЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђѓєѕіїјљњћќ§ўџ"
	  },
	  "cp28595": "iso88595",
	  "iso88596": {
	    "type": "_sbcs",
	    "chars": " ���¤�������،­�������������؛���؟�ءآأؤإئابةتثجحخدذرزسشصضطظعغ�����ـفقكلمنهوىيًٌٍَُِّْ�������������"
	  },
	  "cp28596": "iso88596",
	  "iso88597": {
	    "type": "_sbcs",
	    "chars": " ‘’£€₯¦§¨©ͺ«¬­�―°±²³΄΅Ά·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�"
	  },
	  "cp28597": "iso88597",
	  "iso88598": {
	    "type": "_sbcs",
	    "chars": " �¢£¤¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾��������������������������������‗אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�"
	  },
	  "cp28598": "iso88598",
	  "iso88599": {
	    "type": "_sbcs",
	    "chars": " ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ"
	  },
	  "cp28599": "iso88599",
	  "iso885910": {
	    "type": "_sbcs",
	    "chars": " ĄĒĢĪĨĶ§ĻĐŠŦŽ­ŪŊ°ąēģīĩķ·ļđšŧž―ūŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎÏÐŅŌÓÔÕÖŨØŲÚÛÜÝÞßāáâãäåæįčéęëėíîïðņōóôõöũøųúûüýþĸ"
	  },
	  "cp28600": "iso885910",
	  "iso885911": {
	    "type": "_sbcs",
	    "chars": " กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
	  },
	  "cp28601": "iso885911",
	  "iso885913": {
	    "type": "_sbcs",
	    "chars": " ”¢£¤„¦§Ø©Ŗ«¬­®Æ°±²³“µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž’"
	  },
	  "cp28603": "iso885913",
	  "iso885914": {
	    "type": "_sbcs",
	    "chars": " Ḃḃ£ĊċḊ§Ẁ©ẂḋỲ­®ŸḞḟĠġṀṁ¶ṖẁṗẃṠỳẄẅṡÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŴÑÒÓÔÕÖṪØÙÚÛÜÝŶßàáâãäåæçèéêëìíîïŵñòóôõöṫøùúûüýŷÿ"
	  },
	  "cp28604": "iso885914",
	  "iso885915": {
	    "type": "_sbcs",
	    "chars": " ¡¢£€¥Š§š©ª«¬­®¯°±²³Žµ¶·ž¹º»ŒœŸ¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
	  },
	  "cp28605": "iso885915",
	  "iso885916": {
	    "type": "_sbcs",
	    "chars": " ĄąŁ€„Š§š©Ș«Ź­źŻ°±ČłŽ”¶·žčș»ŒœŸżÀÁÂĂÄĆÆÇÈÉÊËÌÍÎÏĐŃÒÓÔŐÖŚŰÙÚÛÜĘȚßàáâăäćæçèéêëìíîïđńòóôőöśűùúûüęțÿ"
	  },
	  "cp28606": "iso885916",
	  "cp437": {
	    "type": "_sbcs",
	    "chars": "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
	  },
	  "ibm437": "cp437",
	  "csibm437": "cp437",
	  "cp737": {
	    "type": "_sbcs",
	    "chars": "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρσςτυφχψ░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ωάέήϊίόύϋώΆΈΉΊΌΎΏ±≥≤ΪΫ÷≈°∙·√ⁿ²■ "
	  },
	  "ibm737": "cp737",
	  "csibm737": "cp737",
	  "cp775": {
	    "type": "_sbcs",
	    "chars": "ĆüéāäģåćłēŖŗīŹÄÅÉæÆōöĢ¢ŚśÖÜø£Ø×¤ĀĪóŻżź”¦©®¬½¼Ł«»░▒▓│┤ĄČĘĖ╣║╗╝ĮŠ┐└┴┬├─┼ŲŪ╚╔╩╦╠═╬Žąčęėįšųūž┘┌█▄▌▐▀ÓßŌŃõÕµńĶķĻļņĒŅ’­±“¾¶§÷„°∙·¹³²■ "
	  },
	  "ibm775": "cp775",
	  "csibm775": "cp775",
	  "cp850": {
	    "type": "_sbcs",
	    "chars": "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ "
	  },
	  "ibm850": "cp850",
	  "csibm850": "cp850",
	  "cp852": {
	    "type": "_sbcs",
	    "chars": "ÇüéâäůćçłëŐőîŹÄĆÉĹĺôöĽľŚśÖÜŤťŁ×čáíóúĄąŽžĘę¬źČş«»░▒▓│┤ÁÂĚŞ╣║╗╝Żż┐└┴┬├─┼Ăă╚╔╩╦╠═╬¤đĐĎËďŇÍÎě┘┌█▄ŢŮ▀ÓßÔŃńňŠšŔÚŕŰýÝţ´­˝˛ˇ˘§÷¸°¨˙űŘř■ "
	  },
	  "ibm852": "cp852",
	  "csibm852": "cp852",
	  "cp855": {
	    "type": "_sbcs",
	    "chars": "ђЂѓЃёЁєЄѕЅіІїЇјЈљЉњЊћЋќЌўЎџЏюЮъЪаАбБцЦдДеЕфФгГ«»░▒▓│┤хХиИ╣║╗╝йЙ┐└┴┬├─┼кК╚╔╩╦╠═╬¤лЛмМнНоОп┘┌█▄Пя▀ЯрРсСтТуУжЖвВьЬ№­ыЫзЗшШэЭщЩчЧ§■ "
	  },
	  "ibm855": "cp855",
	  "csibm855": "cp855",
	  "cp856": {
	    "type": "_sbcs",
	    "chars": "אבגדהוזחטיךכלםמןנסעףפץצקרשת�£�×����������®¬½¼�«»░▒▓│┤���©╣║╗╝¢¥┐└┴┬├─┼��╚╔╩╦╠═╬¤���������┘┌█▄¦�▀������µ�������¯´­±‗¾¶§÷¸°¨·¹³²■ "
	  },
	  "ibm856": "cp856",
	  "csibm856": "cp856",
	  "cp857": {
	    "type": "_sbcs",
	    "chars": "ÇüéâäàåçêëèïîıÄÅÉæÆôöòûùİÖÜø£ØŞşáíóúñÑĞğ¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ºªÊËÈ�ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµ�×ÚÛÙìÿ¯´­±�¾¶§÷¸°¨·¹³²■ "
	  },
	  "ibm857": "cp857",
	  "csibm857": "cp857",
	  "cp858": {
	    "type": "_sbcs",
	    "chars": "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈ€ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ "
	  },
	  "ibm858": "cp858",
	  "csibm858": "cp858",
	  "cp860": {
	    "type": "_sbcs",
	    "chars": "ÇüéâãàÁçêÊèÍÔìÃÂÉÀÈôõòÚùÌÕÜ¢£Ù₧ÓáíóúñÑªº¿Ò¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
	  },
	  "ibm860": "cp860",
	  "csibm860": "cp860",
	  "cp861": {
	    "type": "_sbcs",
	    "chars": "ÇüéâäàåçêëèÐðÞÄÅÉæÆôöþûÝýÖÜø£Ø₧ƒáíóúÁÍÓÚ¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
	  },
	  "ibm861": "cp861",
	  "csibm861": "cp861",
	  "cp862": {
	    "type": "_sbcs",
	    "chars": "אבגדהוזחטיךכלםמןנסעףפץצקרשת¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
	  },
	  "ibm862": "cp862",
	  "csibm862": "cp862",
	  "cp863": {
	    "type": "_sbcs",
	    "chars": "ÇüéâÂà¶çêëèïî‗À§ÉÈÊôËÏûù¤ÔÜ¢£ÙÛƒ¦´óú¨¸³¯Î⌐¬½¼¾«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
	  },
	  "ibm863": "cp863",
	  "csibm863": "cp863",
	  "cp864": {
	    "type": "_sbcs",
	    "chars": "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$٪&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~°·∙√▒─│┼┤┬├┴┐┌└┘β∞φ±½¼≈«»ﻷﻸ��ﻻﻼ� ­ﺂ£¤ﺄ��ﺎﺏﺕﺙ،ﺝﺡﺥ٠١٢٣٤٥٦٧٨٩ﻑ؛ﺱﺵﺹ؟¢ﺀﺁﺃﺅﻊﺋﺍﺑﺓﺗﺛﺟﺣﺧﺩﺫﺭﺯﺳﺷﺻﺿﻁﻅﻋﻏ¦¬÷×ﻉـﻓﻗﻛﻟﻣﻧﻫﻭﻯﻳﺽﻌﻎﻍﻡﹽّﻥﻩﻬﻰﻲﻐﻕﻵﻶﻝﻙﻱ■�"
	  },
	  "ibm864": "cp864",
	  "csibm864": "cp864",
	  "cp865": {
	    "type": "_sbcs",
	    "chars": "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø₧ƒáíóúñÑªº¿⌐¬½¼¡«¤░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
	  },
	  "ibm865": "cp865",
	  "csibm865": "cp865",
	  "cp866": {
	    "type": "_sbcs",
	    "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№¤■ "
	  },
	  "ibm866": "cp866",
	  "csibm866": "cp866",
	  "cp869": {
	    "type": "_sbcs",
	    "chars": "������Ά�·¬¦‘’Έ―ΉΊΪΌ��ΎΫ©Ώ²³ά£έήίϊΐόύΑΒΓΔΕΖΗ½ΘΙ«»░▒▓│┤ΚΛΜΝ╣║╗╝ΞΟ┐└┴┬├─┼ΠΡ╚╔╩╦╠═╬ΣΤΥΦΧΨΩαβγ┘┌█▄δε▀ζηθικλμνξοπρσςτ΄­±υφχ§ψ΅°¨ωϋΰώ■ "
	  },
	  "ibm869": "cp869",
	  "csibm869": "cp869",
	  "cp922": {
	    "type": "_sbcs",
	    "chars": " ¡¢£¤¥¦§¨©ª«¬­®‾°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŠÑÒÓÔÕÖ×ØÙÚÛÜÝŽßàáâãäåæçèéêëìíîïšñòóôõö÷øùúûüýžÿ"
	  },
	  "ibm922": "cp922",
	  "csibm922": "cp922",
	  "cp1046": {
	    "type": "_sbcs",
	    "chars": "ﺈ×÷ﹱ■│─┐┌└┘ﹹﹻﹽﹿﹷﺊﻰﻳﻲﻎﻏﻐﻶﻸﻺﻼ ¤ﺋﺑﺗﺛﺟﺣ،­ﺧﺳ٠١٢٣٤٥٦٧٨٩ﺷ؛ﺻﺿﻊ؟ﻋءآأؤإئابةتثجحخدذرزسشصضطﻇعغﻌﺂﺄﺎﻓـفقكلمنهوىيًٌٍَُِّْﻗﻛﻟﻵﻷﻹﻻﻣﻧﻬﻩ�"
	  },
	  "ibm1046": "cp1046",
	  "csibm1046": "cp1046",
	  "cp1124": {
	    "type": "_sbcs",
	    "chars": " ЁЂҐЄЅІЇЈЉЊЋЌ­ЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђґєѕіїјљњћќ§ўџ"
	  },
	  "ibm1124": "cp1124",
	  "csibm1124": "cp1124",
	  "cp1125": {
	    "type": "_sbcs",
	    "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёҐґЄєІіЇї·√№¤■ "
	  },
	  "ibm1125": "cp1125",
	  "csibm1125": "cp1125",
	  "cp1129": {
	    "type": "_sbcs",
	    "chars": " ¡¢£¤¥¦§œ©ª«¬­®¯°±²³Ÿµ¶·Œ¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
	  },
	  "ibm1129": "cp1129",
	  "csibm1129": "cp1129",
	  "cp1133": {
	    "type": "_sbcs",
	    "chars": " ກຂຄງຈສຊຍດຕຖທນບປຜຝພຟມຢຣລວຫອຮ���ຯະາຳິີຶືຸູຼັົຽ���ເແໂໃໄ່້໊໋໌ໍໆ�ໜໝ₭����������������໐໑໒໓໔໕໖໗໘໙��¢¬¦�"
	  },
	  "ibm1133": "cp1133",
	  "csibm1133": "cp1133",
	  "cp1161": {
	    "type": "_sbcs",
	    "chars": "��������������������������������่กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู้๊๋€฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛¢¬¦ "
	  },
	  "ibm1161": "cp1161",
	  "csibm1161": "cp1161",
	  "cp1162": {
	    "type": "_sbcs",
	    "chars": "€…‘’“”•–— กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
	  },
	  "ibm1162": "cp1162",
	  "csibm1162": "cp1162",
	  "cp1163": {
	    "type": "_sbcs",
	    "chars": " ¡¢£€¥¦§œ©ª«¬­®¯°±²³Ÿµ¶·Œ¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
	  },
	  "ibm1163": "cp1163",
	  "csibm1163": "cp1163",
	  "maccroatian": {
	    "type": "_sbcs",
	    "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊�©⁄¤‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ"
	  },
	  "maccyrillic": {
	    "type": "_sbcs",
	    "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°¢£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµ∂ЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤"
	  },
	  "macgreek": {
	    "type": "_sbcs",
	    "chars": "Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦­ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ�"
	  },
	  "maciceland": {
	    "type": "_sbcs",
	    "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
	  },
	  "macroman": {
	    "type": "_sbcs",
	    "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
	  },
	  "macromania": {
	    "type": "_sbcs",
	    "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂŞ∞±≤≥¥µ∂∑∏π∫ªºΩăş¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›Ţţ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
	  },
	  "macthai": {
	    "type": "_sbcs",
	    "chars": "«»…“”�•‘’� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู﻿​–—฿เแโใไๅๆ็่้๊๋์ํ™๏๐๑๒๓๔๕๖๗๘๙®©����"
	  },
	  "macturkish": {
	    "type": "_sbcs",
	    "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙ�ˆ˜¯˘˙˚¸˝˛ˇ"
	  },
	  "macukraine": {
	    "type": "_sbcs",
	    "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤"
	  },
	  "koi8r": {
	    "type": "_sbcs",
	    "chars": "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ё╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡Ё╢╣╤╥╦╧╨╩╪╫╬©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
	  },
	  "koi8u": {
	    "type": "_sbcs",
	    "chars": "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ёє╔ії╗╘╙╚╛ґ╝╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪Ґ╬©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
	  },
	  "koi8ru": {
	    "type": "_sbcs",
	    "chars": "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ёє╔ії╗╘╙╚╛ґў╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪ҐЎ©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
	  },
	  "koi8t": {
	    "type": "_sbcs",
	    "chars": "қғ‚Ғ„…†‡�‰ҳ‹ҲҷҶ�Қ‘’“”•–—�™�›�����ӯӮё¤ӣ¦§���«¬­®�°±²Ё�Ӣ¶·�№�»���©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
	  },
	  "armscii8": {
	    "type": "_sbcs",
	    "chars": " �և։)(»«—.՝,-֊…՜՛՞ԱաԲբԳգԴդԵեԶզԷէԸըԹթԺժԻիԼլԽխԾծԿկՀհՁձՂղՃճՄմՅյՆնՇշՈոՉչՊպՋջՌռՍսՎվՏտՐրՑցՒւՓփՔքՕօՖֆ՚�"
	  },
	  "rk1048": {
	    "type": "_sbcs",
	    "chars": "ЂЃ‚ѓ„…†‡€‰Љ‹ЊҚҺЏђ‘’“”•–—�™љ›њқһџ ҰұӘ¤Ө¦§Ё©Ғ«¬­®Ү°±Ііөµ¶·ё№ғ»әҢңүАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
	  },
	  "tcvn": {
	    "type": "_sbcs",
	    "chars": "\u0000ÚỤ\u0003ỪỬỮ\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010ỨỰỲỶỸÝỴ\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÀẢÃÁẠẶẬÈẺẼÉẸỆÌỈĨÍỊÒỎÕÓỌỘỜỞỠỚỢÙỦŨ ĂÂÊÔƠƯĐăâêôơưđẶ̀̀̉̃́àảãáạẲằẳẵắẴẮẦẨẪẤỀặầẩẫấậèỂẻẽéẹềểễếệìỉỄẾỒĩíịòỔỏõóọồổỗốộờởỡớợùỖủũúụừửữứựỳỷỹýỵỐ"
	  },
	  "georgianacademy": {
	    "type": "_sbcs",
	    "chars": "‚ƒ„…†‡ˆ‰Š‹Œ‘’“”•–—˜™š›œŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰჱჲჳჴჵჶçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
	  },
	  "georgianps": {
	    "type": "_sbcs",
	    "chars": "‚ƒ„…†‡ˆ‰Š‹Œ‘’“”•–—˜™š›œŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿აბგდევზჱთიკლმნჲოპჟრსტჳუფქღყშჩცძწჭხჴჯჰჵæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
	  },
	  "pt154": {
	    "type": "_sbcs",
	    "chars": "ҖҒӮғ„…ҶҮҲүҠӢҢҚҺҸҗ‘’“”•–—ҳҷҡӣңқһҹ ЎўЈӨҘҰ§Ё©Ә«¬ӯ®Ҝ°ұІіҙө¶·ё№ә»јҪҫҝАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
	  },
	  "viscii": {
	    "type": "_sbcs",
	    "chars": "\u0000\u0001Ẳ\u0003\u0004ẴẪ\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013Ỷ\u0015\u0016\u0017\u0018Ỹ\u001a\u001b\u001c\u001dỴ\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ẠẮẰẶẤẦẨẬẼẸẾỀỂỄỆỐỒỔỖỘỢỚỜỞỊỎỌỈỦŨỤỲÕắằặấầẩậẽẹếềểễệốồổỗỠƠộờởịỰỨỪỬơớƯÀÁÂÃẢĂẳẵÈÉÊẺÌÍĨỳĐứÒÓÔạỷừửÙÚỹỵÝỡưàáâãảăữẫèéêẻìíĩỉđựòóôõỏọụùúũủýợỮ"
	  },
	  "iso646cn": {
	    "type": "_sbcs",
	    "chars": "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#¥%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}‾��������������������������������������������������������������������������������������������������������������������������������"
	  },
	  "iso646jp": {
	    "type": "_sbcs",
	    "chars": "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[¥]^_`abcdefghijklmnopqrstuvwxyz{|}‾��������������������������������������������������������������������������������������������������������������������������������"
	  },
	  "hproman8": {
	    "type": "_sbcs",
	    "chars": " ÀÂÈÊËÎÏ´ˋˆ¨˜ÙÛ₤¯Ýý°ÇçÑñ¡¿¤£¥§ƒ¢âêôûáéóúàèòùäëöüÅîØÆåíøæÄìÖÜÉïßÔÁÃãÐðÍÌÓÒÕõŠšÚŸÿÞþ·µ¶¾—¼½ªº«■»±�"
	  },
	  "macintosh": {
	    "type": "_sbcs",
	    "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
	  },
	  "ascii": {
	    "type": "_sbcs",
	    "chars": "��������������������������������������������������������������������������������������������������������������������������������"
	  },
	  "tis620": {
	    "type": "_sbcs",
	    "chars": "���������������������������������กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
	  }
	};
	return sbcsDataGenerated;
}

var dbcsCodec = {};

var hasRequiredDbcsCodec;

function requireDbcsCodec () {
	if (hasRequiredDbcsCodec) return dbcsCodec;
	hasRequiredDbcsCodec = 1;
	var Buffer = requireSafer().Buffer;

	// Multibyte codec. In this scheme, a character is represented by 1 or more bytes.
	// Our codec supports UTF-16 surrogates, extensions for GB18030 and unicode sequences.
	// To save memory and loading time, we read table files only when requested.

	dbcsCodec._dbcs = DBCSCodec;

	var UNASSIGNED = -1,
	    GB18030_CODE = -2,
	    SEQ_START  = -10,
	    NODE_START = -1000,
	    UNASSIGNED_NODE = new Array(0x100),
	    DEF_CHAR = -1;

	for (var i = 0; i < 0x100; i++)
	    UNASSIGNED_NODE[i] = UNASSIGNED;


	// Class DBCSCodec reads and initializes mapping tables.
	function DBCSCodec(codecOptions, iconv) {
	    this.encodingName = codecOptions.encodingName;
	    if (!codecOptions)
	        throw new Error("DBCS codec is called without the data.")
	    if (!codecOptions.table)
	        throw new Error("Encoding '" + this.encodingName + "' has no data.");

	    // Load tables.
	    var mappingTable = codecOptions.table();


	    // Decode tables: MBCS -> Unicode.

	    // decodeTables is a trie, encoded as an array of arrays of integers. Internal arrays are trie nodes and all have len = 256.
	    // Trie root is decodeTables[0].
	    // Values: >=  0 -> unicode character code. can be > 0xFFFF
	    //         == UNASSIGNED -> unknown/unassigned sequence.
	    //         == GB18030_CODE -> this is the end of a GB18030 4-byte sequence.
	    //         <= NODE_START -> index of the next node in our trie to process next byte.
	    //         <= SEQ_START  -> index of the start of a character code sequence, in decodeTableSeq.
	    this.decodeTables = [];
	    this.decodeTables[0] = UNASSIGNED_NODE.slice(0); // Create root node.

	    // Sometimes a MBCS char corresponds to a sequence of unicode chars. We store them as arrays of integers here. 
	    this.decodeTableSeq = [];

	    // Actual mapping tables consist of chunks. Use them to fill up decode tables.
	    for (var i = 0; i < mappingTable.length; i++)
	        this._addDecodeChunk(mappingTable[i]);

	    // Load & create GB18030 tables when needed.
	    if (typeof codecOptions.gb18030 === 'function') {
	        this.gb18030 = codecOptions.gb18030(); // Load GB18030 ranges.

	        // Add GB18030 common decode nodes.
	        var commonThirdByteNodeIdx = this.decodeTables.length;
	        this.decodeTables.push(UNASSIGNED_NODE.slice(0));

	        var commonFourthByteNodeIdx = this.decodeTables.length;
	        this.decodeTables.push(UNASSIGNED_NODE.slice(0));

	        // Fill out the tree
	        var firstByteNode = this.decodeTables[0];
	        for (var i = 0x81; i <= 0xFE; i++) {
	            var secondByteNode = this.decodeTables[NODE_START - firstByteNode[i]];
	            for (var j = 0x30; j <= 0x39; j++) {
	                if (secondByteNode[j] === UNASSIGNED) {
	                    secondByteNode[j] = NODE_START - commonThirdByteNodeIdx;
	                } else if (secondByteNode[j] > NODE_START) {
	                    throw new Error("gb18030 decode tables conflict at byte 2");
	                }

	                var thirdByteNode = this.decodeTables[NODE_START - secondByteNode[j]];
	                for (var k = 0x81; k <= 0xFE; k++) {
	                    if (thirdByteNode[k] === UNASSIGNED) {
	                        thirdByteNode[k] = NODE_START - commonFourthByteNodeIdx;
	                    } else if (thirdByteNode[k] === NODE_START - commonFourthByteNodeIdx) {
	                        continue;
	                    } else if (thirdByteNode[k] > NODE_START) {
	                        throw new Error("gb18030 decode tables conflict at byte 3");
	                    }

	                    var fourthByteNode = this.decodeTables[NODE_START - thirdByteNode[k]];
	                    for (var l = 0x30; l <= 0x39; l++) {
	                        if (fourthByteNode[l] === UNASSIGNED)
	                            fourthByteNode[l] = GB18030_CODE;
	                    }
	                }
	            }
	        }
	    }

	    this.defaultCharUnicode = iconv.defaultCharUnicode;

	    
	    // Encode tables: Unicode -> DBCS.

	    // `encodeTable` is array mapping from unicode char to encoded char. All its values are integers for performance.
	    // Because it can be sparse, it is represented as array of buckets by 256 chars each. Bucket can be null.
	    // Values: >=  0 -> it is a normal char. Write the value (if <=256 then 1 byte, if <=65536 then 2 bytes, etc.).
	    //         == UNASSIGNED -> no conversion found. Output a default char.
	    //         <= SEQ_START  -> it's an index in encodeTableSeq, see below. The character starts a sequence.
	    this.encodeTable = [];
	    
	    // `encodeTableSeq` is used when a sequence of unicode characters is encoded as a single code. We use a tree of
	    // objects where keys correspond to characters in sequence and leafs are the encoded dbcs values. A special DEF_CHAR key
	    // means end of sequence (needed when one sequence is a strict subsequence of another).
	    // Objects are kept separately from encodeTable to increase performance.
	    this.encodeTableSeq = [];

	    // Some chars can be decoded, but need not be encoded.
	    var skipEncodeChars = {};
	    if (codecOptions.encodeSkipVals)
	        for (var i = 0; i < codecOptions.encodeSkipVals.length; i++) {
	            var val = codecOptions.encodeSkipVals[i];
	            if (typeof val === 'number')
	                skipEncodeChars[val] = true;
	            else
	                for (var j = val.from; j <= val.to; j++)
	                    skipEncodeChars[j] = true;
	        }
	        
	    // Use decode trie to recursively fill out encode tables.
	    this._fillEncodeTable(0, 0, skipEncodeChars);

	    // Add more encoding pairs when needed.
	    if (codecOptions.encodeAdd) {
	        for (var uChar in codecOptions.encodeAdd)
	            if (Object.prototype.hasOwnProperty.call(codecOptions.encodeAdd, uChar))
	                this._setEncodeChar(uChar.charCodeAt(0), codecOptions.encodeAdd[uChar]);
	    }

	    this.defCharSB  = this.encodeTable[0][iconv.defaultCharSingleByte.charCodeAt(0)];
	    if (this.defCharSB === UNASSIGNED) this.defCharSB = this.encodeTable[0]['?'];
	    if (this.defCharSB === UNASSIGNED) this.defCharSB = "?".charCodeAt(0);
	}

	DBCSCodec.prototype.encoder = DBCSEncoder;
	DBCSCodec.prototype.decoder = DBCSDecoder;

	// Decoder helpers
	DBCSCodec.prototype._getDecodeTrieNode = function(addr) {
	    var bytes = [];
	    for (; addr > 0; addr >>>= 8)
	        bytes.push(addr & 0xFF);
	    if (bytes.length == 0)
	        bytes.push(0);

	    var node = this.decodeTables[0];
	    for (var i = bytes.length-1; i > 0; i--) { // Traverse nodes deeper into the trie.
	        var val = node[bytes[i]];

	        if (val == UNASSIGNED) { // Create new node.
	            node[bytes[i]] = NODE_START - this.decodeTables.length;
	            this.decodeTables.push(node = UNASSIGNED_NODE.slice(0));
	        }
	        else if (val <= NODE_START) { // Existing node.
	            node = this.decodeTables[NODE_START - val];
	        }
	        else
	            throw new Error("Overwrite byte in " + this.encodingName + ", addr: " + addr.toString(16));
	    }
	    return node;
	};


	DBCSCodec.prototype._addDecodeChunk = function(chunk) {
	    // First element of chunk is the hex mbcs code where we start.
	    var curAddr = parseInt(chunk[0], 16);

	    // Choose the decoding node where we'll write our chars.
	    var writeTable = this._getDecodeTrieNode(curAddr);
	    curAddr = curAddr & 0xFF;

	    // Write all other elements of the chunk to the table.
	    for (var k = 1; k < chunk.length; k++) {
	        var part = chunk[k];
	        if (typeof part === "string") { // String, write as-is.
	            for (var l = 0; l < part.length;) {
	                var code = part.charCodeAt(l++);
	                if (0xD800 <= code && code < 0xDC00) { // Decode surrogate
	                    var codeTrail = part.charCodeAt(l++);
	                    if (0xDC00 <= codeTrail && codeTrail < 0xE000)
	                        writeTable[curAddr++] = 0x10000 + (code - 0xD800) * 0x400 + (codeTrail - 0xDC00);
	                    else
	                        throw new Error("Incorrect surrogate pair in "  + this.encodingName + " at chunk " + chunk[0]);
	                }
	                else if (0x0FF0 < code && code <= 0x0FFF) { // Character sequence (our own encoding used)
	                    var len = 0xFFF - code + 2;
	                    var seq = [];
	                    for (var m = 0; m < len; m++)
	                        seq.push(part.charCodeAt(l++)); // Simple variation: don't support surrogates or subsequences in seq.

	                    writeTable[curAddr++] = SEQ_START - this.decodeTableSeq.length;
	                    this.decodeTableSeq.push(seq);
	                }
	                else
	                    writeTable[curAddr++] = code; // Basic char
	            }
	        } 
	        else if (typeof part === "number") { // Integer, meaning increasing sequence starting with prev character.
	            var charCode = writeTable[curAddr - 1] + 1;
	            for (var l = 0; l < part; l++)
	                writeTable[curAddr++] = charCode++;
	        }
	        else
	            throw new Error("Incorrect type '" + typeof part + "' given in "  + this.encodingName + " at chunk " + chunk[0]);
	    }
	    if (curAddr > 0xFF)
	        throw new Error("Incorrect chunk in "  + this.encodingName + " at addr " + chunk[0] + ": too long" + curAddr);
	};

	// Encoder helpers
	DBCSCodec.prototype._getEncodeBucket = function(uCode) {
	    var high = uCode >> 8; // This could be > 0xFF because of astral characters.
	    if (this.encodeTable[high] === undefined)
	        this.encodeTable[high] = UNASSIGNED_NODE.slice(0); // Create bucket on demand.
	    return this.encodeTable[high];
	};

	DBCSCodec.prototype._setEncodeChar = function(uCode, dbcsCode) {
	    var bucket = this._getEncodeBucket(uCode);
	    var low = uCode & 0xFF;
	    if (bucket[low] <= SEQ_START)
	        this.encodeTableSeq[SEQ_START-bucket[low]][DEF_CHAR] = dbcsCode; // There's already a sequence, set a single-char subsequence of it.
	    else if (bucket[low] == UNASSIGNED)
	        bucket[low] = dbcsCode;
	};

	DBCSCodec.prototype._setEncodeSequence = function(seq, dbcsCode) {
	    
	    // Get the root of character tree according to first character of the sequence.
	    var uCode = seq[0];
	    var bucket = this._getEncodeBucket(uCode);
	    var low = uCode & 0xFF;

	    var node;
	    if (bucket[low] <= SEQ_START) {
	        // There's already a sequence with  - use it.
	        node = this.encodeTableSeq[SEQ_START-bucket[low]];
	    }
	    else {
	        // There was no sequence object - allocate a new one.
	        node = {};
	        if (bucket[low] !== UNASSIGNED) node[DEF_CHAR] = bucket[low]; // If a char was set before - make it a single-char subsequence.
	        bucket[low] = SEQ_START - this.encodeTableSeq.length;
	        this.encodeTableSeq.push(node);
	    }

	    // Traverse the character tree, allocating new nodes as needed.
	    for (var j = 1; j < seq.length-1; j++) {
	        var oldVal = node[uCode];
	        if (typeof oldVal === 'object')
	            node = oldVal;
	        else {
	            node = node[uCode] = {};
	            if (oldVal !== undefined)
	                node[DEF_CHAR] = oldVal;
	        }
	    }

	    // Set the leaf to given dbcsCode.
	    uCode = seq[seq.length-1];
	    node[uCode] = dbcsCode;
	};

	DBCSCodec.prototype._fillEncodeTable = function(nodeIdx, prefix, skipEncodeChars) {
	    var node = this.decodeTables[nodeIdx];
	    var hasValues = false;
	    var subNodeEmpty = {};
	    for (var i = 0; i < 0x100; i++) {
	        var uCode = node[i];
	        var mbCode = prefix + i;
	        if (skipEncodeChars[mbCode])
	            continue;

	        if (uCode >= 0) {
	            this._setEncodeChar(uCode, mbCode);
	            hasValues = true;
	        } else if (uCode <= NODE_START) {
	            var subNodeIdx = NODE_START - uCode;
	            if (!subNodeEmpty[subNodeIdx]) {  // Skip empty subtrees (they are too large in gb18030).
	                var newPrefix = (mbCode << 8) >>> 0;  // NOTE: '>>> 0' keeps 32-bit num positive.
	                if (this._fillEncodeTable(subNodeIdx, newPrefix, skipEncodeChars))
	                    hasValues = true;
	                else
	                    subNodeEmpty[subNodeIdx] = true;
	            }
	        } else if (uCode <= SEQ_START) {
	            this._setEncodeSequence(this.decodeTableSeq[SEQ_START - uCode], mbCode);
	            hasValues = true;
	        }
	    }
	    return hasValues;
	};



	// == Encoder ==================================================================

	function DBCSEncoder(options, codec) {
	    // Encoder state
	    this.leadSurrogate = -1;
	    this.seqObj = undefined;
	    
	    // Static data
	    this.encodeTable = codec.encodeTable;
	    this.encodeTableSeq = codec.encodeTableSeq;
	    this.defaultCharSingleByte = codec.defCharSB;
	    this.gb18030 = codec.gb18030;
	}

	DBCSEncoder.prototype.write = function(str) {
	    var newBuf = Buffer.alloc(str.length * (this.gb18030 ? 4 : 3)),
	        leadSurrogate = this.leadSurrogate,
	        seqObj = this.seqObj, nextChar = -1,
	        i = 0, j = 0;

	    while (true) {
	        // 0. Get next character.
	        if (nextChar === -1) {
	            if (i == str.length) break;
	            var uCode = str.charCodeAt(i++);
	        }
	        else {
	            var uCode = nextChar;
	            nextChar = -1;    
	        }

	        // 1. Handle surrogates.
	        if (0xD800 <= uCode && uCode < 0xE000) { // Char is one of surrogates.
	            if (uCode < 0xDC00) { // We've got lead surrogate.
	                if (leadSurrogate === -1) {
	                    leadSurrogate = uCode;
	                    continue;
	                } else {
	                    leadSurrogate = uCode;
	                    // Double lead surrogate found.
	                    uCode = UNASSIGNED;
	                }
	            } else { // We've got trail surrogate.
	                if (leadSurrogate !== -1) {
	                    uCode = 0x10000 + (leadSurrogate - 0xD800) * 0x400 + (uCode - 0xDC00);
	                    leadSurrogate = -1;
	                } else {
	                    // Incomplete surrogate pair - only trail surrogate found.
	                    uCode = UNASSIGNED;
	                }
	                
	            }
	        }
	        else if (leadSurrogate !== -1) {
	            // Incomplete surrogate pair - only lead surrogate found.
	            nextChar = uCode; uCode = UNASSIGNED; // Write an error, then current char.
	            leadSurrogate = -1;
	        }

	        // 2. Convert uCode character.
	        var dbcsCode = UNASSIGNED;
	        if (seqObj !== undefined && uCode != UNASSIGNED) { // We are in the middle of the sequence
	            var resCode = seqObj[uCode];
	            if (typeof resCode === 'object') { // Sequence continues.
	                seqObj = resCode;
	                continue;

	            } else if (typeof resCode == 'number') { // Sequence finished. Write it.
	                dbcsCode = resCode;

	            } else if (resCode == undefined) { // Current character is not part of the sequence.

	                // Try default character for this sequence
	                resCode = seqObj[DEF_CHAR];
	                if (resCode !== undefined) {
	                    dbcsCode = resCode; // Found. Write it.
	                    nextChar = uCode; // Current character will be written too in the next iteration.

	                }
	            }
	            seqObj = undefined;
	        }
	        else if (uCode >= 0) {  // Regular character
	            var subtable = this.encodeTable[uCode >> 8];
	            if (subtable !== undefined)
	                dbcsCode = subtable[uCode & 0xFF];
	            
	            if (dbcsCode <= SEQ_START) { // Sequence start
	                seqObj = this.encodeTableSeq[SEQ_START-dbcsCode];
	                continue;
	            }

	            if (dbcsCode == UNASSIGNED && this.gb18030) {
	                // Use GB18030 algorithm to find character(s) to write.
	                var idx = findIdx(this.gb18030.uChars, uCode);
	                if (idx != -1) {
	                    var dbcsCode = this.gb18030.gbChars[idx] + (uCode - this.gb18030.uChars[idx]);
	                    newBuf[j++] = 0x81 + Math.floor(dbcsCode / 12600); dbcsCode = dbcsCode % 12600;
	                    newBuf[j++] = 0x30 + Math.floor(dbcsCode / 1260); dbcsCode = dbcsCode % 1260;
	                    newBuf[j++] = 0x81 + Math.floor(dbcsCode / 10); dbcsCode = dbcsCode % 10;
	                    newBuf[j++] = 0x30 + dbcsCode;
	                    continue;
	                }
	            }
	        }

	        // 3. Write dbcsCode character.
	        if (dbcsCode === UNASSIGNED)
	            dbcsCode = this.defaultCharSingleByte;
	        
	        if (dbcsCode < 0x100) {
	            newBuf[j++] = dbcsCode;
	        }
	        else if (dbcsCode < 0x10000) {
	            newBuf[j++] = dbcsCode >> 8;   // high byte
	            newBuf[j++] = dbcsCode & 0xFF; // low byte
	        }
	        else if (dbcsCode < 0x1000000) {
	            newBuf[j++] = dbcsCode >> 16;
	            newBuf[j++] = (dbcsCode >> 8) & 0xFF;
	            newBuf[j++] = dbcsCode & 0xFF;
	        } else {
	            newBuf[j++] = dbcsCode >>> 24;
	            newBuf[j++] = (dbcsCode >>> 16) & 0xFF;
	            newBuf[j++] = (dbcsCode >>> 8) & 0xFF;
	            newBuf[j++] = dbcsCode & 0xFF;
	        }
	    }

	    this.seqObj = seqObj;
	    this.leadSurrogate = leadSurrogate;
	    return newBuf.slice(0, j);
	};

	DBCSEncoder.prototype.end = function() {
	    if (this.leadSurrogate === -1 && this.seqObj === undefined)
	        return; // All clean. Most often case.

	    var newBuf = Buffer.alloc(10), j = 0;

	    if (this.seqObj) { // We're in the sequence.
	        var dbcsCode = this.seqObj[DEF_CHAR];
	        if (dbcsCode !== undefined) { // Write beginning of the sequence.
	            if (dbcsCode < 0x100) {
	                newBuf[j++] = dbcsCode;
	            }
	            else {
	                newBuf[j++] = dbcsCode >> 8;   // high byte
	                newBuf[j++] = dbcsCode & 0xFF; // low byte
	            }
	        }
	        this.seqObj = undefined;
	    }

	    if (this.leadSurrogate !== -1) {
	        // Incomplete surrogate pair - only lead surrogate found.
	        newBuf[j++] = this.defaultCharSingleByte;
	        this.leadSurrogate = -1;
	    }
	    
	    return newBuf.slice(0, j);
	};

	// Export for testing
	DBCSEncoder.prototype.findIdx = findIdx;


	// == Decoder ==================================================================

	function DBCSDecoder(options, codec) {
	    // Decoder state
	    this.nodeIdx = 0;
	    this.prevBytes = [];

	    // Static data
	    this.decodeTables = codec.decodeTables;
	    this.decodeTableSeq = codec.decodeTableSeq;
	    this.defaultCharUnicode = codec.defaultCharUnicode;
	    this.gb18030 = codec.gb18030;
	}

	DBCSDecoder.prototype.write = function(buf) {
	    var newBuf = Buffer.alloc(buf.length*2),
	        nodeIdx = this.nodeIdx, 
	        prevBytes = this.prevBytes, prevOffset = this.prevBytes.length,
	        seqStart = -this.prevBytes.length, // idx of the start of current parsed sequence.
	        uCode;

	    for (var i = 0, j = 0; i < buf.length; i++) {
	        var curByte = (i >= 0) ? buf[i] : prevBytes[i + prevOffset];

	        // Lookup in current trie node.
	        var uCode = this.decodeTables[nodeIdx][curByte];

	        if (uCode >= 0) ;
	        else if (uCode === UNASSIGNED) { // Unknown char.
	            // TODO: Callback with seq.
	            uCode = this.defaultCharUnicode.charCodeAt(0);
	            i = seqStart; // Skip one byte ('i' will be incremented by the for loop) and try to parse again.
	        }
	        else if (uCode === GB18030_CODE) {
	            if (i >= 3) {
	                var ptr = (buf[i-3]-0x81)*12600 + (buf[i-2]-0x30)*1260 + (buf[i-1]-0x81)*10 + (curByte-0x30);
	            } else {
	                var ptr = (prevBytes[i-3+prevOffset]-0x81)*12600 + 
	                          (((i-2 >= 0) ? buf[i-2] : prevBytes[i-2+prevOffset])-0x30)*1260 + 
	                          (((i-1 >= 0) ? buf[i-1] : prevBytes[i-1+prevOffset])-0x81)*10 + 
	                          (curByte-0x30);
	            }
	            var idx = findIdx(this.gb18030.gbChars, ptr);
	            uCode = this.gb18030.uChars[idx] + ptr - this.gb18030.gbChars[idx];
	        }
	        else if (uCode <= NODE_START) { // Go to next trie node.
	            nodeIdx = NODE_START - uCode;
	            continue;
	        }
	        else if (uCode <= SEQ_START) { // Output a sequence of chars.
	            var seq = this.decodeTableSeq[SEQ_START - uCode];
	            for (var k = 0; k < seq.length - 1; k++) {
	                uCode = seq[k];
	                newBuf[j++] = uCode & 0xFF;
	                newBuf[j++] = uCode >> 8;
	            }
	            uCode = seq[seq.length-1];
	        }
	        else
	            throw new Error("iconv-lite internal error: invalid decoding table value " + uCode + " at " + nodeIdx + "/" + curByte);

	        // Write the character to buffer, handling higher planes using surrogate pair.
	        if (uCode >= 0x10000) { 
	            uCode -= 0x10000;
	            var uCodeLead = 0xD800 | (uCode >> 10);
	            newBuf[j++] = uCodeLead & 0xFF;
	            newBuf[j++] = uCodeLead >> 8;

	            uCode = 0xDC00 | (uCode & 0x3FF);
	        }
	        newBuf[j++] = uCode & 0xFF;
	        newBuf[j++] = uCode >> 8;

	        // Reset trie node.
	        nodeIdx = 0; seqStart = i+1;
	    }

	    this.nodeIdx = nodeIdx;
	    this.prevBytes = (seqStart >= 0)
	        ? Array.prototype.slice.call(buf, seqStart)
	        : prevBytes.slice(seqStart + prevOffset).concat(Array.prototype.slice.call(buf));

	    return newBuf.slice(0, j).toString('ucs2');
	};

	DBCSDecoder.prototype.end = function() {
	    var ret = '';

	    // Try to parse all remaining chars.
	    while (this.prevBytes.length > 0) {
	        // Skip 1 character in the buffer.
	        ret += this.defaultCharUnicode;
	        var bytesArr = this.prevBytes.slice(1);

	        // Parse remaining as usual.
	        this.prevBytes = [];
	        this.nodeIdx = 0;
	        if (bytesArr.length > 0)
	            ret += this.write(bytesArr);
	    }

	    this.prevBytes = [];
	    this.nodeIdx = 0;
	    return ret;
	};

	// Binary search for GB18030. Returns largest i such that table[i] <= val.
	function findIdx(table, val) {
	    if (table[0] > val)
	        return -1;

	    var l = 0, r = table.length;
	    while (l < r-1) { // always table[l] <= val < table[r]
	        var mid = l + ((r-l+1) >> 1);
	        if (table[mid] <= val)
	            l = mid;
	        else
	            r = mid;
	    }
	    return l;
	}
	return dbcsCodec;
}

var require$$0$1 = [
	[
		"0",
		"\u0000",
		128
	],
	[
		"a1",
		"｡",
		62
	],
	[
		"8140",
		"　、。，．・：；？！゛゜´｀¨＾￣＿ヽヾゝゞ〃仝々〆〇ー―‐／＼～∥｜…‥‘’“”（）〔〕［］｛｝〈",
		9,
		"＋－±×"
	],
	[
		"8180",
		"÷＝≠＜＞≦≧∞∴♂♀°′″℃￥＄￠￡％＃＆＊＠§☆★○●◎◇◆□■△▲▽▼※〒→←↑↓〓"
	],
	[
		"81b8",
		"∈∋⊆⊇⊂⊃∪∩"
	],
	[
		"81c8",
		"∧∨￢⇒⇔∀∃"
	],
	[
		"81da",
		"∠⊥⌒∂∇≡≒≪≫√∽∝∵∫∬"
	],
	[
		"81f0",
		"Å‰♯♭♪†‡¶"
	],
	[
		"81fc",
		"◯"
	],
	[
		"824f",
		"０",
		9
	],
	[
		"8260",
		"Ａ",
		25
	],
	[
		"8281",
		"ａ",
		25
	],
	[
		"829f",
		"ぁ",
		82
	],
	[
		"8340",
		"ァ",
		62
	],
	[
		"8380",
		"ム",
		22
	],
	[
		"839f",
		"Α",
		16,
		"Σ",
		6
	],
	[
		"83bf",
		"α",
		16,
		"σ",
		6
	],
	[
		"8440",
		"А",
		5,
		"ЁЖ",
		25
	],
	[
		"8470",
		"а",
		5,
		"ёж",
		7
	],
	[
		"8480",
		"о",
		17
	],
	[
		"849f",
		"─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂"
	],
	[
		"8740",
		"①",
		19,
		"Ⅰ",
		9
	],
	[
		"875f",
		"㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻㎜㎝㎞㎎㎏㏄㎡"
	],
	[
		"877e",
		"㍻"
	],
	[
		"8780",
		"〝〟№㏍℡㊤",
		4,
		"㈱㈲㈹㍾㍽㍼≒≡∫∮∑√⊥∠∟⊿∵∩∪"
	],
	[
		"889f",
		"亜唖娃阿哀愛挨姶逢葵茜穐悪握渥旭葦芦鯵梓圧斡扱宛姐虻飴絢綾鮎或粟袷安庵按暗案闇鞍杏以伊位依偉囲夷委威尉惟意慰易椅為畏異移維緯胃萎衣謂違遺医井亥域育郁磯一壱溢逸稲茨芋鰯允印咽員因姻引飲淫胤蔭"
	],
	[
		"8940",
		"院陰隠韻吋右宇烏羽迂雨卯鵜窺丑碓臼渦嘘唄欝蔚鰻姥厩浦瓜閏噂云運雲荏餌叡営嬰影映曳栄永泳洩瑛盈穎頴英衛詠鋭液疫益駅悦謁越閲榎厭円"
	],
	[
		"8980",
		"園堰奄宴延怨掩援沿演炎焔煙燕猿縁艶苑薗遠鉛鴛塩於汚甥凹央奥往応押旺横欧殴王翁襖鴬鴎黄岡沖荻億屋憶臆桶牡乙俺卸恩温穏音下化仮何伽価佳加可嘉夏嫁家寡科暇果架歌河火珂禍禾稼箇花苛茄荷華菓蝦課嘩貨迦過霞蚊俄峨我牙画臥芽蛾賀雅餓駕介会解回塊壊廻快怪悔恢懐戒拐改"
	],
	[
		"8a40",
		"魁晦械海灰界皆絵芥蟹開階貝凱劾外咳害崖慨概涯碍蓋街該鎧骸浬馨蛙垣柿蛎鈎劃嚇各廓拡撹格核殻獲確穫覚角赫較郭閣隔革学岳楽額顎掛笠樫"
	],
	[
		"8a80",
		"橿梶鰍潟割喝恰括活渇滑葛褐轄且鰹叶椛樺鞄株兜竃蒲釜鎌噛鴨栢茅萱粥刈苅瓦乾侃冠寒刊勘勧巻喚堪姦完官寛干幹患感慣憾換敢柑桓棺款歓汗漢澗潅環甘監看竿管簡緩缶翰肝艦莞観諌貫還鑑間閑関陥韓館舘丸含岸巌玩癌眼岩翫贋雁頑顔願企伎危喜器基奇嬉寄岐希幾忌揮机旗既期棋棄"
	],
	[
		"8b40",
		"機帰毅気汽畿祈季稀紀徽規記貴起軌輝飢騎鬼亀偽儀妓宜戯技擬欺犠疑祇義蟻誼議掬菊鞠吉吃喫桔橘詰砧杵黍却客脚虐逆丘久仇休及吸宮弓急救"
	],
	[
		"8b80",
		"朽求汲泣灸球究窮笈級糾給旧牛去居巨拒拠挙渠虚許距鋸漁禦魚亨享京供侠僑兇競共凶協匡卿叫喬境峡強彊怯恐恭挟教橋況狂狭矯胸脅興蕎郷鏡響饗驚仰凝尭暁業局曲極玉桐粁僅勤均巾錦斤欣欽琴禁禽筋緊芹菌衿襟謹近金吟銀九倶句区狗玖矩苦躯駆駈駒具愚虞喰空偶寓遇隅串櫛釧屑屈"
	],
	[
		"8c40",
		"掘窟沓靴轡窪熊隈粂栗繰桑鍬勲君薫訓群軍郡卦袈祁係傾刑兄啓圭珪型契形径恵慶慧憩掲携敬景桂渓畦稽系経継繋罫茎荊蛍計詣警軽頚鶏芸迎鯨"
	],
	[
		"8c80",
		"劇戟撃激隙桁傑欠決潔穴結血訣月件倹倦健兼券剣喧圏堅嫌建憲懸拳捲検権牽犬献研硯絹県肩見謙賢軒遣鍵険顕験鹸元原厳幻弦減源玄現絃舷言諺限乎個古呼固姑孤己庫弧戸故枯湖狐糊袴股胡菰虎誇跨鈷雇顧鼓五互伍午呉吾娯後御悟梧檎瑚碁語誤護醐乞鯉交佼侯候倖光公功効勾厚口向"
	],
	[
		"8d40",
		"后喉坑垢好孔孝宏工巧巷幸広庚康弘恒慌抗拘控攻昂晃更杭校梗構江洪浩港溝甲皇硬稿糠紅紘絞綱耕考肯肱腔膏航荒行衡講貢購郊酵鉱砿鋼閤降"
	],
	[
		"8d80",
		"項香高鴻剛劫号合壕拷濠豪轟麹克刻告国穀酷鵠黒獄漉腰甑忽惚骨狛込此頃今困坤墾婚恨懇昏昆根梱混痕紺艮魂些佐叉唆嵯左差査沙瑳砂詐鎖裟坐座挫債催再最哉塞妻宰彩才採栽歳済災采犀砕砦祭斎細菜裁載際剤在材罪財冴坂阪堺榊肴咲崎埼碕鷺作削咋搾昨朔柵窄策索錯桜鮭笹匙冊刷"
	],
	[
		"8e40",
		"察拶撮擦札殺薩雑皐鯖捌錆鮫皿晒三傘参山惨撒散桟燦珊産算纂蚕讃賛酸餐斬暫残仕仔伺使刺司史嗣四士始姉姿子屍市師志思指支孜斯施旨枝止"
	],
	[
		"8e80",
		"死氏獅祉私糸紙紫肢脂至視詞詩試誌諮資賜雌飼歯事似侍児字寺慈持時次滋治爾璽痔磁示而耳自蒔辞汐鹿式識鴫竺軸宍雫七叱執失嫉室悉湿漆疾質実蔀篠偲柴芝屡蕊縞舎写射捨赦斜煮社紗者謝車遮蛇邪借勺尺杓灼爵酌釈錫若寂弱惹主取守手朱殊狩珠種腫趣酒首儒受呪寿授樹綬需囚収周"
	],
	[
		"8f40",
		"宗就州修愁拾洲秀秋終繍習臭舟蒐衆襲讐蹴輯週酋酬集醜什住充十従戎柔汁渋獣縦重銃叔夙宿淑祝縮粛塾熟出術述俊峻春瞬竣舜駿准循旬楯殉淳"
	],
	[
		"8f80",
		"準潤盾純巡遵醇順処初所暑曙渚庶緒署書薯藷諸助叙女序徐恕鋤除傷償勝匠升召哨商唱嘗奨妾娼宵将小少尚庄床廠彰承抄招掌捷昇昌昭晶松梢樟樵沼消渉湘焼焦照症省硝礁祥称章笑粧紹肖菖蒋蕉衝裳訟証詔詳象賞醤鉦鍾鐘障鞘上丈丞乗冗剰城場壌嬢常情擾条杖浄状畳穣蒸譲醸錠嘱埴飾"
	],
	[
		"9040",
		"拭植殖燭織職色触食蝕辱尻伸信侵唇娠寝審心慎振新晋森榛浸深申疹真神秦紳臣芯薪親診身辛進針震人仁刃塵壬尋甚尽腎訊迅陣靭笥諏須酢図厨"
	],
	[
		"9080",
		"逗吹垂帥推水炊睡粋翠衰遂酔錐錘随瑞髄崇嵩数枢趨雛据杉椙菅頗雀裾澄摺寸世瀬畝是凄制勢姓征性成政整星晴棲栖正清牲生盛精聖声製西誠誓請逝醒青静斉税脆隻席惜戚斥昔析石積籍績脊責赤跡蹟碩切拙接摂折設窃節説雪絶舌蝉仙先千占宣専尖川戦扇撰栓栴泉浅洗染潜煎煽旋穿箭線"
	],
	[
		"9140",
		"繊羨腺舛船薦詮賎践選遷銭銑閃鮮前善漸然全禅繕膳糎噌塑岨措曾曽楚狙疏疎礎祖租粗素組蘇訴阻遡鼠僧創双叢倉喪壮奏爽宋層匝惣想捜掃挿掻"
	],
	[
		"9180",
		"操早曹巣槍槽漕燥争痩相窓糟総綜聡草荘葬蒼藻装走送遭鎗霜騒像増憎臓蔵贈造促側則即息捉束測足速俗属賊族続卒袖其揃存孫尊損村遜他多太汰詑唾堕妥惰打柁舵楕陀駄騨体堆対耐岱帯待怠態戴替泰滞胎腿苔袋貸退逮隊黛鯛代台大第醍題鷹滝瀧卓啄宅托択拓沢濯琢託鐸濁諾茸凧蛸只"
	],
	[
		"9240",
		"叩但達辰奪脱巽竪辿棚谷狸鱈樽誰丹単嘆坦担探旦歎淡湛炭短端箪綻耽胆蛋誕鍛団壇弾断暖檀段男談値知地弛恥智池痴稚置致蜘遅馳築畜竹筑蓄"
	],
	[
		"9280",
		"逐秩窒茶嫡着中仲宙忠抽昼柱注虫衷註酎鋳駐樗瀦猪苧著貯丁兆凋喋寵帖帳庁弔張彫徴懲挑暢朝潮牒町眺聴脹腸蝶調諜超跳銚長頂鳥勅捗直朕沈珍賃鎮陳津墜椎槌追鎚痛通塚栂掴槻佃漬柘辻蔦綴鍔椿潰坪壷嬬紬爪吊釣鶴亭低停偵剃貞呈堤定帝底庭廷弟悌抵挺提梯汀碇禎程締艇訂諦蹄逓"
	],
	[
		"9340",
		"邸鄭釘鼎泥摘擢敵滴的笛適鏑溺哲徹撤轍迭鉄典填天展店添纏甜貼転顛点伝殿澱田電兎吐堵塗妬屠徒斗杜渡登菟賭途都鍍砥砺努度土奴怒倒党冬"
	],
	[
		"9380",
		"凍刀唐塔塘套宕島嶋悼投搭東桃梼棟盗淘湯涛灯燈当痘祷等答筒糖統到董蕩藤討謄豆踏逃透鐙陶頭騰闘働動同堂導憧撞洞瞳童胴萄道銅峠鴇匿得徳涜特督禿篤毒独読栃橡凸突椴届鳶苫寅酉瀞噸屯惇敦沌豚遁頓呑曇鈍奈那内乍凪薙謎灘捺鍋楢馴縄畷南楠軟難汝二尼弐迩匂賑肉虹廿日乳入"
	],
	[
		"9440",
		"如尿韮任妊忍認濡禰祢寧葱猫熱年念捻撚燃粘乃廼之埜嚢悩濃納能脳膿農覗蚤巴把播覇杷波派琶破婆罵芭馬俳廃拝排敗杯盃牌背肺輩配倍培媒梅"
	],
	[
		"9480",
		"楳煤狽買売賠陪這蝿秤矧萩伯剥博拍柏泊白箔粕舶薄迫曝漠爆縛莫駁麦函箱硲箸肇筈櫨幡肌畑畠八鉢溌発醗髪伐罰抜筏閥鳩噺塙蛤隼伴判半反叛帆搬斑板氾汎版犯班畔繁般藩販範釆煩頒飯挽晩番盤磐蕃蛮匪卑否妃庇彼悲扉批披斐比泌疲皮碑秘緋罷肥被誹費避非飛樋簸備尾微枇毘琵眉美"
	],
	[
		"9540",
		"鼻柊稗匹疋髭彦膝菱肘弼必畢筆逼桧姫媛紐百謬俵彪標氷漂瓢票表評豹廟描病秒苗錨鋲蒜蛭鰭品彬斌浜瀕貧賓頻敏瓶不付埠夫婦富冨布府怖扶敷"
	],
	[
		"9580",
		"斧普浮父符腐膚芙譜負賦赴阜附侮撫武舞葡蕪部封楓風葺蕗伏副復幅服福腹複覆淵弗払沸仏物鮒分吻噴墳憤扮焚奮粉糞紛雰文聞丙併兵塀幣平弊柄並蔽閉陛米頁僻壁癖碧別瞥蔑箆偏変片篇編辺返遍便勉娩弁鞭保舗鋪圃捕歩甫補輔穂募墓慕戊暮母簿菩倣俸包呆報奉宝峰峯崩庖抱捧放方朋"
	],
	[
		"9640",
		"法泡烹砲縫胞芳萌蓬蜂褒訪豊邦鋒飽鳳鵬乏亡傍剖坊妨帽忘忙房暴望某棒冒紡肪膨謀貌貿鉾防吠頬北僕卜墨撲朴牧睦穆釦勃没殆堀幌奔本翻凡盆"
	],
	[
		"9680",
		"摩磨魔麻埋妹昧枚毎哩槙幕膜枕鮪柾鱒桝亦俣又抹末沫迄侭繭麿万慢満漫蔓味未魅巳箕岬密蜜湊蓑稔脈妙粍民眠務夢無牟矛霧鵡椋婿娘冥名命明盟迷銘鳴姪牝滅免棉綿緬面麺摸模茂妄孟毛猛盲網耗蒙儲木黙目杢勿餅尤戻籾貰問悶紋門匁也冶夜爺耶野弥矢厄役約薬訳躍靖柳薮鑓愉愈油癒"
	],
	[
		"9740",
		"諭輸唯佑優勇友宥幽悠憂揖有柚湧涌猶猷由祐裕誘遊邑郵雄融夕予余与誉輿預傭幼妖容庸揚揺擁曜楊様洋溶熔用窯羊耀葉蓉要謡踊遥陽養慾抑欲"
	],
	[
		"9780",
		"沃浴翌翼淀羅螺裸来莱頼雷洛絡落酪乱卵嵐欄濫藍蘭覧利吏履李梨理璃痢裏裡里離陸律率立葎掠略劉流溜琉留硫粒隆竜龍侶慮旅虜了亮僚両凌寮料梁涼猟療瞭稜糧良諒遼量陵領力緑倫厘林淋燐琳臨輪隣鱗麟瑠塁涙累類令伶例冷励嶺怜玲礼苓鈴隷零霊麗齢暦歴列劣烈裂廉恋憐漣煉簾練聯"
	],
	[
		"9840",
		"蓮連錬呂魯櫓炉賂路露労婁廊弄朗楼榔浪漏牢狼篭老聾蝋郎六麓禄肋録論倭和話歪賄脇惑枠鷲亙亘鰐詫藁蕨椀湾碗腕"
	],
	[
		"989f",
		"弌丐丕个丱丶丼丿乂乖乘亂亅豫亊舒弍于亞亟亠亢亰亳亶从仍仄仆仂仗仞仭仟价伉佚估佛佝佗佇佶侈侏侘佻佩佰侑佯來侖儘俔俟俎俘俛俑俚俐俤俥倚倨倔倪倥倅伜俶倡倩倬俾俯們倆偃假會偕偐偈做偖偬偸傀傚傅傴傲"
	],
	[
		"9940",
		"僉僊傳僂僖僞僥僭僣僮價僵儉儁儂儖儕儔儚儡儺儷儼儻儿兀兒兌兔兢竸兩兪兮冀冂囘册冉冏冑冓冕冖冤冦冢冩冪冫决冱冲冰况冽凅凉凛几處凩凭"
	],
	[
		"9980",
		"凰凵凾刄刋刔刎刧刪刮刳刹剏剄剋剌剞剔剪剴剩剳剿剽劍劔劒剱劈劑辨辧劬劭劼劵勁勍勗勞勣勦飭勠勳勵勸勹匆匈甸匍匐匏匕匚匣匯匱匳匸區卆卅丗卉卍凖卞卩卮夘卻卷厂厖厠厦厥厮厰厶參簒雙叟曼燮叮叨叭叺吁吽呀听吭吼吮吶吩吝呎咏呵咎呟呱呷呰咒呻咀呶咄咐咆哇咢咸咥咬哄哈咨"
	],
	[
		"9a40",
		"咫哂咤咾咼哘哥哦唏唔哽哮哭哺哢唹啀啣啌售啜啅啖啗唸唳啝喙喀咯喊喟啻啾喘喞單啼喃喩喇喨嗚嗅嗟嗄嗜嗤嗔嘔嗷嘖嗾嗽嘛嗹噎噐營嘴嘶嘲嘸"
	],
	[
		"9a80",
		"噫噤嘯噬噪嚆嚀嚊嚠嚔嚏嚥嚮嚶嚴囂嚼囁囃囀囈囎囑囓囗囮囹圀囿圄圉圈國圍圓團圖嗇圜圦圷圸坎圻址坏坩埀垈坡坿垉垓垠垳垤垪垰埃埆埔埒埓堊埖埣堋堙堝塲堡塢塋塰毀塒堽塹墅墹墟墫墺壞墻墸墮壅壓壑壗壙壘壥壜壤壟壯壺壹壻壼壽夂夊夐夛梦夥夬夭夲夸夾竒奕奐奎奚奘奢奠奧奬奩"
	],
	[
		"9b40",
		"奸妁妝佞侫妣妲姆姨姜妍姙姚娥娟娑娜娉娚婀婬婉娵娶婢婪媚媼媾嫋嫂媽嫣嫗嫦嫩嫖嫺嫻嬌嬋嬖嬲嫐嬪嬶嬾孃孅孀孑孕孚孛孥孩孰孳孵學斈孺宀"
	],
	[
		"9b80",
		"它宦宸寃寇寉寔寐寤實寢寞寥寫寰寶寳尅將專對尓尠尢尨尸尹屁屆屎屓屐屏孱屬屮乢屶屹岌岑岔妛岫岻岶岼岷峅岾峇峙峩峽峺峭嶌峪崋崕崗嵜崟崛崑崔崢崚崙崘嵌嵒嵎嵋嵬嵳嵶嶇嶄嶂嶢嶝嶬嶮嶽嶐嶷嶼巉巍巓巒巖巛巫已巵帋帚帙帑帛帶帷幄幃幀幎幗幔幟幢幤幇幵并幺麼广庠廁廂廈廐廏"
	],
	[
		"9c40",
		"廖廣廝廚廛廢廡廨廩廬廱廳廰廴廸廾弃弉彝彜弋弑弖弩弭弸彁彈彌彎弯彑彖彗彙彡彭彳彷徃徂彿徊很徑徇從徙徘徠徨徭徼忖忻忤忸忱忝悳忿怡恠"
	],
	[
		"9c80",
		"怙怐怩怎怱怛怕怫怦怏怺恚恁恪恷恟恊恆恍恣恃恤恂恬恫恙悁悍惧悃悚悄悛悖悗悒悧悋惡悸惠惓悴忰悽惆悵惘慍愕愆惶惷愀惴惺愃愡惻惱愍愎慇愾愨愧慊愿愼愬愴愽慂慄慳慷慘慙慚慫慴慯慥慱慟慝慓慵憙憖憇憬憔憚憊憑憫憮懌懊應懷懈懃懆憺懋罹懍懦懣懶懺懴懿懽懼懾戀戈戉戍戌戔戛"
	],
	[
		"9d40",
		"戞戡截戮戰戲戳扁扎扞扣扛扠扨扼抂抉找抒抓抖拔抃抔拗拑抻拏拿拆擔拈拜拌拊拂拇抛拉挌拮拱挧挂挈拯拵捐挾捍搜捏掖掎掀掫捶掣掏掉掟掵捫"
	],
	[
		"9d80",
		"捩掾揩揀揆揣揉插揶揄搖搴搆搓搦搶攝搗搨搏摧摯摶摎攪撕撓撥撩撈撼據擒擅擇撻擘擂擱擧舉擠擡抬擣擯攬擶擴擲擺攀擽攘攜攅攤攣攫攴攵攷收攸畋效敖敕敍敘敞敝敲數斂斃變斛斟斫斷旃旆旁旄旌旒旛旙无旡旱杲昊昃旻杳昵昶昴昜晏晄晉晁晞晝晤晧晨晟晢晰暃暈暎暉暄暘暝曁暹曉暾暼"
	],
	[
		"9e40",
		"曄暸曖曚曠昿曦曩曰曵曷朏朖朞朦朧霸朮朿朶杁朸朷杆杞杠杙杣杤枉杰枩杼杪枌枋枦枡枅枷柯枴柬枳柩枸柤柞柝柢柮枹柎柆柧檜栞框栩桀桍栲桎"
	],
	[
		"9e80",
		"梳栫桙档桷桿梟梏梭梔條梛梃檮梹桴梵梠梺椏梍桾椁棊椈棘椢椦棡椌棍棔棧棕椶椒椄棗棣椥棹棠棯椨椪椚椣椡棆楹楷楜楸楫楔楾楮椹楴椽楙椰楡楞楝榁楪榲榮槐榿槁槓榾槎寨槊槝榻槃榧樮榑榠榜榕榴槞槨樂樛槿權槹槲槧樅榱樞槭樔槫樊樒櫁樣樓橄樌橲樶橸橇橢橙橦橈樸樢檐檍檠檄檢檣"
	],
	[
		"9f40",
		"檗蘗檻櫃櫂檸檳檬櫞櫑櫟檪櫚櫪櫻欅蘖櫺欒欖鬱欟欸欷盜欹飮歇歃歉歐歙歔歛歟歡歸歹歿殀殄殃殍殘殕殞殤殪殫殯殲殱殳殷殼毆毋毓毟毬毫毳毯"
	],
	[
		"9f80",
		"麾氈氓气氛氤氣汞汕汢汪沂沍沚沁沛汾汨汳沒沐泄泱泓沽泗泅泝沮沱沾沺泛泯泙泪洟衍洶洫洽洸洙洵洳洒洌浣涓浤浚浹浙涎涕濤涅淹渕渊涵淇淦涸淆淬淞淌淨淒淅淺淙淤淕淪淮渭湮渮渙湲湟渾渣湫渫湶湍渟湃渺湎渤滿渝游溂溪溘滉溷滓溽溯滄溲滔滕溏溥滂溟潁漑灌滬滸滾漿滲漱滯漲滌"
	],
	[
		"e040",
		"漾漓滷澆潺潸澁澀潯潛濳潭澂潼潘澎澑濂潦澳澣澡澤澹濆澪濟濕濬濔濘濱濮濛瀉瀋濺瀑瀁瀏濾瀛瀚潴瀝瀘瀟瀰瀾瀲灑灣炙炒炯烱炬炸炳炮烟烋烝"
	],
	[
		"e080",
		"烙焉烽焜焙煥煕熈煦煢煌煖煬熏燻熄熕熨熬燗熹熾燒燉燔燎燠燬燧燵燼燹燿爍爐爛爨爭爬爰爲爻爼爿牀牆牋牘牴牾犂犁犇犒犖犢犧犹犲狃狆狄狎狒狢狠狡狹狷倏猗猊猜猖猝猴猯猩猥猾獎獏默獗獪獨獰獸獵獻獺珈玳珎玻珀珥珮珞璢琅瑯琥珸琲琺瑕琿瑟瑙瑁瑜瑩瑰瑣瑪瑶瑾璋璞璧瓊瓏瓔珱"
	],
	[
		"e140",
		"瓠瓣瓧瓩瓮瓲瓰瓱瓸瓷甄甃甅甌甎甍甕甓甞甦甬甼畄畍畊畉畛畆畚畩畤畧畫畭畸當疆疇畴疊疉疂疔疚疝疥疣痂疳痃疵疽疸疼疱痍痊痒痙痣痞痾痿"
	],
	[
		"e180",
		"痼瘁痰痺痲痳瘋瘍瘉瘟瘧瘠瘡瘢瘤瘴瘰瘻癇癈癆癜癘癡癢癨癩癪癧癬癰癲癶癸發皀皃皈皋皎皖皓皙皚皰皴皸皹皺盂盍盖盒盞盡盥盧盪蘯盻眈眇眄眩眤眞眥眦眛眷眸睇睚睨睫睛睥睿睾睹瞎瞋瞑瞠瞞瞰瞶瞹瞿瞼瞽瞻矇矍矗矚矜矣矮矼砌砒礦砠礪硅碎硴碆硼碚碌碣碵碪碯磑磆磋磔碾碼磅磊磬"
	],
	[
		"e240",
		"磧磚磽磴礇礒礑礙礬礫祀祠祗祟祚祕祓祺祿禊禝禧齋禪禮禳禹禺秉秕秧秬秡秣稈稍稘稙稠稟禀稱稻稾稷穃穗穉穡穢穩龝穰穹穽窈窗窕窘窖窩竈窰"
	],
	[
		"e280",
		"窶竅竄窿邃竇竊竍竏竕竓站竚竝竡竢竦竭竰笂笏笊笆笳笘笙笞笵笨笶筐筺笄筍笋筌筅筵筥筴筧筰筱筬筮箝箘箟箍箜箚箋箒箏筝箙篋篁篌篏箴篆篝篩簑簔篦篥籠簀簇簓篳篷簗簍篶簣簧簪簟簷簫簽籌籃籔籏籀籐籘籟籤籖籥籬籵粃粐粤粭粢粫粡粨粳粲粱粮粹粽糀糅糂糘糒糜糢鬻糯糲糴糶糺紆"
	],
	[
		"e340",
		"紂紜紕紊絅絋紮紲紿紵絆絳絖絎絲絨絮絏絣經綉絛綏絽綛綺綮綣綵緇綽綫總綢綯緜綸綟綰緘緝緤緞緻緲緡縅縊縣縡縒縱縟縉縋縢繆繦縻縵縹繃縷"
	],
	[
		"e380",
		"縲縺繧繝繖繞繙繚繹繪繩繼繻纃緕繽辮繿纈纉續纒纐纓纔纖纎纛纜缸缺罅罌罍罎罐网罕罔罘罟罠罨罩罧罸羂羆羃羈羇羌羔羞羝羚羣羯羲羹羮羶羸譱翅翆翊翕翔翡翦翩翳翹飜耆耄耋耒耘耙耜耡耨耿耻聊聆聒聘聚聟聢聨聳聲聰聶聹聽聿肄肆肅肛肓肚肭冐肬胛胥胙胝胄胚胖脉胯胱脛脩脣脯腋"
	],
	[
		"e440",
		"隋腆脾腓腑胼腱腮腥腦腴膃膈膊膀膂膠膕膤膣腟膓膩膰膵膾膸膽臀臂膺臉臍臑臙臘臈臚臟臠臧臺臻臾舁舂舅與舊舍舐舖舩舫舸舳艀艙艘艝艚艟艤"
	],
	[
		"e480",
		"艢艨艪艫舮艱艷艸艾芍芒芫芟芻芬苡苣苟苒苴苳苺莓范苻苹苞茆苜茉苙茵茴茖茲茱荀茹荐荅茯茫茗茘莅莚莪莟莢莖茣莎莇莊荼莵荳荵莠莉莨菴萓菫菎菽萃菘萋菁菷萇菠菲萍萢萠莽萸蔆菻葭萪萼蕚蒄葷葫蒭葮蒂葩葆萬葯葹萵蓊葢蒹蒿蒟蓙蓍蒻蓚蓐蓁蓆蓖蒡蔡蓿蓴蔗蔘蔬蔟蔕蔔蓼蕀蕣蕘蕈"
	],
	[
		"e540",
		"蕁蘂蕋蕕薀薤薈薑薊薨蕭薔薛藪薇薜蕷蕾薐藉薺藏薹藐藕藝藥藜藹蘊蘓蘋藾藺蘆蘢蘚蘰蘿虍乕虔號虧虱蚓蚣蚩蚪蚋蚌蚶蚯蛄蛆蚰蛉蠣蚫蛔蛞蛩蛬"
	],
	[
		"e580",
		"蛟蛛蛯蜒蜆蜈蜀蜃蛻蜑蜉蜍蛹蜊蜴蜿蜷蜻蜥蜩蜚蝠蝟蝸蝌蝎蝴蝗蝨蝮蝙蝓蝣蝪蠅螢螟螂螯蟋螽蟀蟐雖螫蟄螳蟇蟆螻蟯蟲蟠蠏蠍蟾蟶蟷蠎蟒蠑蠖蠕蠢蠡蠱蠶蠹蠧蠻衄衂衒衙衞衢衫袁衾袞衵衽袵衲袂袗袒袮袙袢袍袤袰袿袱裃裄裔裘裙裝裹褂裼裴裨裲褄褌褊褓襃褞褥褪褫襁襄褻褶褸襌褝襠襞"
	],
	[
		"e640",
		"襦襤襭襪襯襴襷襾覃覈覊覓覘覡覩覦覬覯覲覺覽覿觀觚觜觝觧觴觸訃訖訐訌訛訝訥訶詁詛詒詆詈詼詭詬詢誅誂誄誨誡誑誥誦誚誣諄諍諂諚諫諳諧"
	],
	[
		"e680",
		"諤諱謔諠諢諷諞諛謌謇謚諡謖謐謗謠謳鞫謦謫謾謨譁譌譏譎證譖譛譚譫譟譬譯譴譽讀讌讎讒讓讖讙讚谺豁谿豈豌豎豐豕豢豬豸豺貂貉貅貊貍貎貔豼貘戝貭貪貽貲貳貮貶賈賁賤賣賚賽賺賻贄贅贊贇贏贍贐齎贓賍贔贖赧赭赱赳趁趙跂趾趺跏跚跖跌跛跋跪跫跟跣跼踈踉跿踝踞踐踟蹂踵踰踴蹊"
	],
	[
		"e740",
		"蹇蹉蹌蹐蹈蹙蹤蹠踪蹣蹕蹶蹲蹼躁躇躅躄躋躊躓躑躔躙躪躡躬躰軆躱躾軅軈軋軛軣軼軻軫軾輊輅輕輒輙輓輜輟輛輌輦輳輻輹轅轂輾轌轉轆轎轗轜"
	],
	[
		"e780",
		"轢轣轤辜辟辣辭辯辷迚迥迢迪迯邇迴逅迹迺逑逕逡逍逞逖逋逧逶逵逹迸遏遐遑遒逎遉逾遖遘遞遨遯遶隨遲邂遽邁邀邊邉邏邨邯邱邵郢郤扈郛鄂鄒鄙鄲鄰酊酖酘酣酥酩酳酲醋醉醂醢醫醯醪醵醴醺釀釁釉釋釐釖釟釡釛釼釵釶鈞釿鈔鈬鈕鈑鉞鉗鉅鉉鉤鉈銕鈿鉋鉐銜銖銓銛鉚鋏銹銷鋩錏鋺鍄錮"
	],
	[
		"e840",
		"錙錢錚錣錺錵錻鍜鍠鍼鍮鍖鎰鎬鎭鎔鎹鏖鏗鏨鏥鏘鏃鏝鏐鏈鏤鐚鐔鐓鐃鐇鐐鐶鐫鐵鐡鐺鑁鑒鑄鑛鑠鑢鑞鑪鈩鑰鑵鑷鑽鑚鑼鑾钁鑿閂閇閊閔閖閘閙"
	],
	[
		"e880",
		"閠閨閧閭閼閻閹閾闊濶闃闍闌闕闔闖關闡闥闢阡阨阮阯陂陌陏陋陷陜陞陝陟陦陲陬隍隘隕隗險隧隱隲隰隴隶隸隹雎雋雉雍襍雜霍雕雹霄霆霈霓霎霑霏霖霙霤霪霰霹霽霾靄靆靈靂靉靜靠靤靦靨勒靫靱靹鞅靼鞁靺鞆鞋鞏鞐鞜鞨鞦鞣鞳鞴韃韆韈韋韜韭齏韲竟韶韵頏頌頸頤頡頷頽顆顏顋顫顯顰"
	],
	[
		"e940",
		"顱顴顳颪颯颱颶飄飃飆飩飫餃餉餒餔餘餡餝餞餤餠餬餮餽餾饂饉饅饐饋饑饒饌饕馗馘馥馭馮馼駟駛駝駘駑駭駮駱駲駻駸騁騏騅駢騙騫騷驅驂驀驃"
	],
	[
		"e980",
		"騾驕驍驛驗驟驢驥驤驩驫驪骭骰骼髀髏髑髓體髞髟髢髣髦髯髫髮髴髱髷髻鬆鬘鬚鬟鬢鬣鬥鬧鬨鬩鬪鬮鬯鬲魄魃魏魍魎魑魘魴鮓鮃鮑鮖鮗鮟鮠鮨鮴鯀鯊鮹鯆鯏鯑鯒鯣鯢鯤鯔鯡鰺鯲鯱鯰鰕鰔鰉鰓鰌鰆鰈鰒鰊鰄鰮鰛鰥鰤鰡鰰鱇鰲鱆鰾鱚鱠鱧鱶鱸鳧鳬鳰鴉鴈鳫鴃鴆鴪鴦鶯鴣鴟鵄鴕鴒鵁鴿鴾鵆鵈"
	],
	[
		"ea40",
		"鵝鵞鵤鵑鵐鵙鵲鶉鶇鶫鵯鵺鶚鶤鶩鶲鷄鷁鶻鶸鶺鷆鷏鷂鷙鷓鷸鷦鷭鷯鷽鸚鸛鸞鹵鹹鹽麁麈麋麌麒麕麑麝麥麩麸麪麭靡黌黎黏黐黔黜點黝黠黥黨黯"
	],
	[
		"ea80",
		"黴黶黷黹黻黼黽鼇鼈皷鼕鼡鼬鼾齊齒齔齣齟齠齡齦齧齬齪齷齲齶龕龜龠堯槇遙瑤凜熙"
	],
	[
		"ed40",
		"纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏"
	],
	[
		"ed80",
		"塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱"
	],
	[
		"ee40",
		"犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙"
	],
	[
		"ee80",
		"蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑"
	],
	[
		"eeef",
		"ⅰ",
		9,
		"￢￤＇＂"
	],
	[
		"f040",
		"",
		62
	],
	[
		"f080",
		"",
		124
	],
	[
		"f140",
		"",
		62
	],
	[
		"f180",
		"",
		124
	],
	[
		"f240",
		"",
		62
	],
	[
		"f280",
		"",
		124
	],
	[
		"f340",
		"",
		62
	],
	[
		"f380",
		"",
		124
	],
	[
		"f440",
		"",
		62
	],
	[
		"f480",
		"",
		124
	],
	[
		"f540",
		"",
		62
	],
	[
		"f580",
		"",
		124
	],
	[
		"f640",
		"",
		62
	],
	[
		"f680",
		"",
		124
	],
	[
		"f740",
		"",
		62
	],
	[
		"f780",
		"",
		124
	],
	[
		"f840",
		"",
		62
	],
	[
		"f880",
		"",
		124
	],
	[
		"f940",
		""
	],
	[
		"fa40",
		"ⅰ",
		9,
		"Ⅰ",
		9,
		"￢￤＇＂㈱№℡∵纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊"
	],
	[
		"fa80",
		"兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯"
	],
	[
		"fb40",
		"涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神"
	],
	[
		"fb80",
		"祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙"
	],
	[
		"fc40",
		"髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑"
	]
];

var require$$1 = [
	[
		"0",
		"\u0000",
		127
	],
	[
		"8ea1",
		"｡",
		62
	],
	[
		"a1a1",
		"　、。，．・：；？！゛゜´｀¨＾￣＿ヽヾゝゞ〃仝々〆〇ー―‐／＼～∥｜…‥‘’“”（）〔〕［］｛｝〈",
		9,
		"＋－±×÷＝≠＜＞≦≧∞∴♂♀°′″℃￥＄￠￡％＃＆＊＠§☆★○●◎◇"
	],
	[
		"a2a1",
		"◆□■△▲▽▼※〒→←↑↓〓"
	],
	[
		"a2ba",
		"∈∋⊆⊇⊂⊃∪∩"
	],
	[
		"a2ca",
		"∧∨￢⇒⇔∀∃"
	],
	[
		"a2dc",
		"∠⊥⌒∂∇≡≒≪≫√∽∝∵∫∬"
	],
	[
		"a2f2",
		"Å‰♯♭♪†‡¶"
	],
	[
		"a2fe",
		"◯"
	],
	[
		"a3b0",
		"０",
		9
	],
	[
		"a3c1",
		"Ａ",
		25
	],
	[
		"a3e1",
		"ａ",
		25
	],
	[
		"a4a1",
		"ぁ",
		82
	],
	[
		"a5a1",
		"ァ",
		85
	],
	[
		"a6a1",
		"Α",
		16,
		"Σ",
		6
	],
	[
		"a6c1",
		"α",
		16,
		"σ",
		6
	],
	[
		"a7a1",
		"А",
		5,
		"ЁЖ",
		25
	],
	[
		"a7d1",
		"а",
		5,
		"ёж",
		25
	],
	[
		"a8a1",
		"─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂"
	],
	[
		"ada1",
		"①",
		19,
		"Ⅰ",
		9
	],
	[
		"adc0",
		"㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻㎜㎝㎞㎎㎏㏄㎡"
	],
	[
		"addf",
		"㍻〝〟№㏍℡㊤",
		4,
		"㈱㈲㈹㍾㍽㍼≒≡∫∮∑√⊥∠∟⊿∵∩∪"
	],
	[
		"b0a1",
		"亜唖娃阿哀愛挨姶逢葵茜穐悪握渥旭葦芦鯵梓圧斡扱宛姐虻飴絢綾鮎或粟袷安庵按暗案闇鞍杏以伊位依偉囲夷委威尉惟意慰易椅為畏異移維緯胃萎衣謂違遺医井亥域育郁磯一壱溢逸稲茨芋鰯允印咽員因姻引飲淫胤蔭"
	],
	[
		"b1a1",
		"院陰隠韻吋右宇烏羽迂雨卯鵜窺丑碓臼渦嘘唄欝蔚鰻姥厩浦瓜閏噂云運雲荏餌叡営嬰影映曳栄永泳洩瑛盈穎頴英衛詠鋭液疫益駅悦謁越閲榎厭円園堰奄宴延怨掩援沿演炎焔煙燕猿縁艶苑薗遠鉛鴛塩於汚甥凹央奥往応"
	],
	[
		"b2a1",
		"押旺横欧殴王翁襖鴬鴎黄岡沖荻億屋憶臆桶牡乙俺卸恩温穏音下化仮何伽価佳加可嘉夏嫁家寡科暇果架歌河火珂禍禾稼箇花苛茄荷華菓蝦課嘩貨迦過霞蚊俄峨我牙画臥芽蛾賀雅餓駕介会解回塊壊廻快怪悔恢懐戒拐改"
	],
	[
		"b3a1",
		"魁晦械海灰界皆絵芥蟹開階貝凱劾外咳害崖慨概涯碍蓋街該鎧骸浬馨蛙垣柿蛎鈎劃嚇各廓拡撹格核殻獲確穫覚角赫較郭閣隔革学岳楽額顎掛笠樫橿梶鰍潟割喝恰括活渇滑葛褐轄且鰹叶椛樺鞄株兜竃蒲釜鎌噛鴨栢茅萱"
	],
	[
		"b4a1",
		"粥刈苅瓦乾侃冠寒刊勘勧巻喚堪姦完官寛干幹患感慣憾換敢柑桓棺款歓汗漢澗潅環甘監看竿管簡緩缶翰肝艦莞観諌貫還鑑間閑関陥韓館舘丸含岸巌玩癌眼岩翫贋雁頑顔願企伎危喜器基奇嬉寄岐希幾忌揮机旗既期棋棄"
	],
	[
		"b5a1",
		"機帰毅気汽畿祈季稀紀徽規記貴起軌輝飢騎鬼亀偽儀妓宜戯技擬欺犠疑祇義蟻誼議掬菊鞠吉吃喫桔橘詰砧杵黍却客脚虐逆丘久仇休及吸宮弓急救朽求汲泣灸球究窮笈級糾給旧牛去居巨拒拠挙渠虚許距鋸漁禦魚亨享京"
	],
	[
		"b6a1",
		"供侠僑兇競共凶協匡卿叫喬境峡強彊怯恐恭挟教橋況狂狭矯胸脅興蕎郷鏡響饗驚仰凝尭暁業局曲極玉桐粁僅勤均巾錦斤欣欽琴禁禽筋緊芹菌衿襟謹近金吟銀九倶句区狗玖矩苦躯駆駈駒具愚虞喰空偶寓遇隅串櫛釧屑屈"
	],
	[
		"b7a1",
		"掘窟沓靴轡窪熊隈粂栗繰桑鍬勲君薫訓群軍郡卦袈祁係傾刑兄啓圭珪型契形径恵慶慧憩掲携敬景桂渓畦稽系経継繋罫茎荊蛍計詣警軽頚鶏芸迎鯨劇戟撃激隙桁傑欠決潔穴結血訣月件倹倦健兼券剣喧圏堅嫌建憲懸拳捲"
	],
	[
		"b8a1",
		"検権牽犬献研硯絹県肩見謙賢軒遣鍵険顕験鹸元原厳幻弦減源玄現絃舷言諺限乎個古呼固姑孤己庫弧戸故枯湖狐糊袴股胡菰虎誇跨鈷雇顧鼓五互伍午呉吾娯後御悟梧檎瑚碁語誤護醐乞鯉交佼侯候倖光公功効勾厚口向"
	],
	[
		"b9a1",
		"后喉坑垢好孔孝宏工巧巷幸広庚康弘恒慌抗拘控攻昂晃更杭校梗構江洪浩港溝甲皇硬稿糠紅紘絞綱耕考肯肱腔膏航荒行衡講貢購郊酵鉱砿鋼閤降項香高鴻剛劫号合壕拷濠豪轟麹克刻告国穀酷鵠黒獄漉腰甑忽惚骨狛込"
	],
	[
		"baa1",
		"此頃今困坤墾婚恨懇昏昆根梱混痕紺艮魂些佐叉唆嵯左差査沙瑳砂詐鎖裟坐座挫債催再最哉塞妻宰彩才採栽歳済災采犀砕砦祭斎細菜裁載際剤在材罪財冴坂阪堺榊肴咲崎埼碕鷺作削咋搾昨朔柵窄策索錯桜鮭笹匙冊刷"
	],
	[
		"bba1",
		"察拶撮擦札殺薩雑皐鯖捌錆鮫皿晒三傘参山惨撒散桟燦珊産算纂蚕讃賛酸餐斬暫残仕仔伺使刺司史嗣四士始姉姿子屍市師志思指支孜斯施旨枝止死氏獅祉私糸紙紫肢脂至視詞詩試誌諮資賜雌飼歯事似侍児字寺慈持時"
	],
	[
		"bca1",
		"次滋治爾璽痔磁示而耳自蒔辞汐鹿式識鴫竺軸宍雫七叱執失嫉室悉湿漆疾質実蔀篠偲柴芝屡蕊縞舎写射捨赦斜煮社紗者謝車遮蛇邪借勺尺杓灼爵酌釈錫若寂弱惹主取守手朱殊狩珠種腫趣酒首儒受呪寿授樹綬需囚収周"
	],
	[
		"bda1",
		"宗就州修愁拾洲秀秋終繍習臭舟蒐衆襲讐蹴輯週酋酬集醜什住充十従戎柔汁渋獣縦重銃叔夙宿淑祝縮粛塾熟出術述俊峻春瞬竣舜駿准循旬楯殉淳準潤盾純巡遵醇順処初所暑曙渚庶緒署書薯藷諸助叙女序徐恕鋤除傷償"
	],
	[
		"bea1",
		"勝匠升召哨商唱嘗奨妾娼宵将小少尚庄床廠彰承抄招掌捷昇昌昭晶松梢樟樵沼消渉湘焼焦照症省硝礁祥称章笑粧紹肖菖蒋蕉衝裳訟証詔詳象賞醤鉦鍾鐘障鞘上丈丞乗冗剰城場壌嬢常情擾条杖浄状畳穣蒸譲醸錠嘱埴飾"
	],
	[
		"bfa1",
		"拭植殖燭織職色触食蝕辱尻伸信侵唇娠寝審心慎振新晋森榛浸深申疹真神秦紳臣芯薪親診身辛進針震人仁刃塵壬尋甚尽腎訊迅陣靭笥諏須酢図厨逗吹垂帥推水炊睡粋翠衰遂酔錐錘随瑞髄崇嵩数枢趨雛据杉椙菅頗雀裾"
	],
	[
		"c0a1",
		"澄摺寸世瀬畝是凄制勢姓征性成政整星晴棲栖正清牲生盛精聖声製西誠誓請逝醒青静斉税脆隻席惜戚斥昔析石積籍績脊責赤跡蹟碩切拙接摂折設窃節説雪絶舌蝉仙先千占宣専尖川戦扇撰栓栴泉浅洗染潜煎煽旋穿箭線"
	],
	[
		"c1a1",
		"繊羨腺舛船薦詮賎践選遷銭銑閃鮮前善漸然全禅繕膳糎噌塑岨措曾曽楚狙疏疎礎祖租粗素組蘇訴阻遡鼠僧創双叢倉喪壮奏爽宋層匝惣想捜掃挿掻操早曹巣槍槽漕燥争痩相窓糟総綜聡草荘葬蒼藻装走送遭鎗霜騒像増憎"
	],
	[
		"c2a1",
		"臓蔵贈造促側則即息捉束測足速俗属賊族続卒袖其揃存孫尊損村遜他多太汰詑唾堕妥惰打柁舵楕陀駄騨体堆対耐岱帯待怠態戴替泰滞胎腿苔袋貸退逮隊黛鯛代台大第醍題鷹滝瀧卓啄宅托択拓沢濯琢託鐸濁諾茸凧蛸只"
	],
	[
		"c3a1",
		"叩但達辰奪脱巽竪辿棚谷狸鱈樽誰丹単嘆坦担探旦歎淡湛炭短端箪綻耽胆蛋誕鍛団壇弾断暖檀段男談値知地弛恥智池痴稚置致蜘遅馳築畜竹筑蓄逐秩窒茶嫡着中仲宙忠抽昼柱注虫衷註酎鋳駐樗瀦猪苧著貯丁兆凋喋寵"
	],
	[
		"c4a1",
		"帖帳庁弔張彫徴懲挑暢朝潮牒町眺聴脹腸蝶調諜超跳銚長頂鳥勅捗直朕沈珍賃鎮陳津墜椎槌追鎚痛通塚栂掴槻佃漬柘辻蔦綴鍔椿潰坪壷嬬紬爪吊釣鶴亭低停偵剃貞呈堤定帝底庭廷弟悌抵挺提梯汀碇禎程締艇訂諦蹄逓"
	],
	[
		"c5a1",
		"邸鄭釘鼎泥摘擢敵滴的笛適鏑溺哲徹撤轍迭鉄典填天展店添纏甜貼転顛点伝殿澱田電兎吐堵塗妬屠徒斗杜渡登菟賭途都鍍砥砺努度土奴怒倒党冬凍刀唐塔塘套宕島嶋悼投搭東桃梼棟盗淘湯涛灯燈当痘祷等答筒糖統到"
	],
	[
		"c6a1",
		"董蕩藤討謄豆踏逃透鐙陶頭騰闘働動同堂導憧撞洞瞳童胴萄道銅峠鴇匿得徳涜特督禿篤毒独読栃橡凸突椴届鳶苫寅酉瀞噸屯惇敦沌豚遁頓呑曇鈍奈那内乍凪薙謎灘捺鍋楢馴縄畷南楠軟難汝二尼弐迩匂賑肉虹廿日乳入"
	],
	[
		"c7a1",
		"如尿韮任妊忍認濡禰祢寧葱猫熱年念捻撚燃粘乃廼之埜嚢悩濃納能脳膿農覗蚤巴把播覇杷波派琶破婆罵芭馬俳廃拝排敗杯盃牌背肺輩配倍培媒梅楳煤狽買売賠陪這蝿秤矧萩伯剥博拍柏泊白箔粕舶薄迫曝漠爆縛莫駁麦"
	],
	[
		"c8a1",
		"函箱硲箸肇筈櫨幡肌畑畠八鉢溌発醗髪伐罰抜筏閥鳩噺塙蛤隼伴判半反叛帆搬斑板氾汎版犯班畔繁般藩販範釆煩頒飯挽晩番盤磐蕃蛮匪卑否妃庇彼悲扉批披斐比泌疲皮碑秘緋罷肥被誹費避非飛樋簸備尾微枇毘琵眉美"
	],
	[
		"c9a1",
		"鼻柊稗匹疋髭彦膝菱肘弼必畢筆逼桧姫媛紐百謬俵彪標氷漂瓢票表評豹廟描病秒苗錨鋲蒜蛭鰭品彬斌浜瀕貧賓頻敏瓶不付埠夫婦富冨布府怖扶敷斧普浮父符腐膚芙譜負賦赴阜附侮撫武舞葡蕪部封楓風葺蕗伏副復幅服"
	],
	[
		"caa1",
		"福腹複覆淵弗払沸仏物鮒分吻噴墳憤扮焚奮粉糞紛雰文聞丙併兵塀幣平弊柄並蔽閉陛米頁僻壁癖碧別瞥蔑箆偏変片篇編辺返遍便勉娩弁鞭保舗鋪圃捕歩甫補輔穂募墓慕戊暮母簿菩倣俸包呆報奉宝峰峯崩庖抱捧放方朋"
	],
	[
		"cba1",
		"法泡烹砲縫胞芳萌蓬蜂褒訪豊邦鋒飽鳳鵬乏亡傍剖坊妨帽忘忙房暴望某棒冒紡肪膨謀貌貿鉾防吠頬北僕卜墨撲朴牧睦穆釦勃没殆堀幌奔本翻凡盆摩磨魔麻埋妹昧枚毎哩槙幕膜枕鮪柾鱒桝亦俣又抹末沫迄侭繭麿万慢満"
	],
	[
		"cca1",
		"漫蔓味未魅巳箕岬密蜜湊蓑稔脈妙粍民眠務夢無牟矛霧鵡椋婿娘冥名命明盟迷銘鳴姪牝滅免棉綿緬面麺摸模茂妄孟毛猛盲網耗蒙儲木黙目杢勿餅尤戻籾貰問悶紋門匁也冶夜爺耶野弥矢厄役約薬訳躍靖柳薮鑓愉愈油癒"
	],
	[
		"cda1",
		"諭輸唯佑優勇友宥幽悠憂揖有柚湧涌猶猷由祐裕誘遊邑郵雄融夕予余与誉輿預傭幼妖容庸揚揺擁曜楊様洋溶熔用窯羊耀葉蓉要謡踊遥陽養慾抑欲沃浴翌翼淀羅螺裸来莱頼雷洛絡落酪乱卵嵐欄濫藍蘭覧利吏履李梨理璃"
	],
	[
		"cea1",
		"痢裏裡里離陸律率立葎掠略劉流溜琉留硫粒隆竜龍侶慮旅虜了亮僚両凌寮料梁涼猟療瞭稜糧良諒遼量陵領力緑倫厘林淋燐琳臨輪隣鱗麟瑠塁涙累類令伶例冷励嶺怜玲礼苓鈴隷零霊麗齢暦歴列劣烈裂廉恋憐漣煉簾練聯"
	],
	[
		"cfa1",
		"蓮連錬呂魯櫓炉賂路露労婁廊弄朗楼榔浪漏牢狼篭老聾蝋郎六麓禄肋録論倭和話歪賄脇惑枠鷲亙亘鰐詫藁蕨椀湾碗腕"
	],
	[
		"d0a1",
		"弌丐丕个丱丶丼丿乂乖乘亂亅豫亊舒弍于亞亟亠亢亰亳亶从仍仄仆仂仗仞仭仟价伉佚估佛佝佗佇佶侈侏侘佻佩佰侑佯來侖儘俔俟俎俘俛俑俚俐俤俥倚倨倔倪倥倅伜俶倡倩倬俾俯們倆偃假會偕偐偈做偖偬偸傀傚傅傴傲"
	],
	[
		"d1a1",
		"僉僊傳僂僖僞僥僭僣僮價僵儉儁儂儖儕儔儚儡儺儷儼儻儿兀兒兌兔兢竸兩兪兮冀冂囘册冉冏冑冓冕冖冤冦冢冩冪冫决冱冲冰况冽凅凉凛几處凩凭凰凵凾刄刋刔刎刧刪刮刳刹剏剄剋剌剞剔剪剴剩剳剿剽劍劔劒剱劈劑辨"
	],
	[
		"d2a1",
		"辧劬劭劼劵勁勍勗勞勣勦飭勠勳勵勸勹匆匈甸匍匐匏匕匚匣匯匱匳匸區卆卅丗卉卍凖卞卩卮夘卻卷厂厖厠厦厥厮厰厶參簒雙叟曼燮叮叨叭叺吁吽呀听吭吼吮吶吩吝呎咏呵咎呟呱呷呰咒呻咀呶咄咐咆哇咢咸咥咬哄哈咨"
	],
	[
		"d3a1",
		"咫哂咤咾咼哘哥哦唏唔哽哮哭哺哢唹啀啣啌售啜啅啖啗唸唳啝喙喀咯喊喟啻啾喘喞單啼喃喩喇喨嗚嗅嗟嗄嗜嗤嗔嘔嗷嘖嗾嗽嘛嗹噎噐營嘴嘶嘲嘸噫噤嘯噬噪嚆嚀嚊嚠嚔嚏嚥嚮嚶嚴囂嚼囁囃囀囈囎囑囓囗囮囹圀囿圄圉"
	],
	[
		"d4a1",
		"圈國圍圓團圖嗇圜圦圷圸坎圻址坏坩埀垈坡坿垉垓垠垳垤垪垰埃埆埔埒埓堊埖埣堋堙堝塲堡塢塋塰毀塒堽塹墅墹墟墫墺壞墻墸墮壅壓壑壗壙壘壥壜壤壟壯壺壹壻壼壽夂夊夐夛梦夥夬夭夲夸夾竒奕奐奎奚奘奢奠奧奬奩"
	],
	[
		"d5a1",
		"奸妁妝佞侫妣妲姆姨姜妍姙姚娥娟娑娜娉娚婀婬婉娵娶婢婪媚媼媾嫋嫂媽嫣嫗嫦嫩嫖嫺嫻嬌嬋嬖嬲嫐嬪嬶嬾孃孅孀孑孕孚孛孥孩孰孳孵學斈孺宀它宦宸寃寇寉寔寐寤實寢寞寥寫寰寶寳尅將專對尓尠尢尨尸尹屁屆屎屓"
	],
	[
		"d6a1",
		"屐屏孱屬屮乢屶屹岌岑岔妛岫岻岶岼岷峅岾峇峙峩峽峺峭嶌峪崋崕崗嵜崟崛崑崔崢崚崙崘嵌嵒嵎嵋嵬嵳嵶嶇嶄嶂嶢嶝嶬嶮嶽嶐嶷嶼巉巍巓巒巖巛巫已巵帋帚帙帑帛帶帷幄幃幀幎幗幔幟幢幤幇幵并幺麼广庠廁廂廈廐廏"
	],
	[
		"d7a1",
		"廖廣廝廚廛廢廡廨廩廬廱廳廰廴廸廾弃弉彝彜弋弑弖弩弭弸彁彈彌彎弯彑彖彗彙彡彭彳彷徃徂彿徊很徑徇從徙徘徠徨徭徼忖忻忤忸忱忝悳忿怡恠怙怐怩怎怱怛怕怫怦怏怺恚恁恪恷恟恊恆恍恣恃恤恂恬恫恙悁悍惧悃悚"
	],
	[
		"d8a1",
		"悄悛悖悗悒悧悋惡悸惠惓悴忰悽惆悵惘慍愕愆惶惷愀惴惺愃愡惻惱愍愎慇愾愨愧慊愿愼愬愴愽慂慄慳慷慘慙慚慫慴慯慥慱慟慝慓慵憙憖憇憬憔憚憊憑憫憮懌懊應懷懈懃懆憺懋罹懍懦懣懶懺懴懿懽懼懾戀戈戉戍戌戔戛"
	],
	[
		"d9a1",
		"戞戡截戮戰戲戳扁扎扞扣扛扠扨扼抂抉找抒抓抖拔抃抔拗拑抻拏拿拆擔拈拜拌拊拂拇抛拉挌拮拱挧挂挈拯拵捐挾捍搜捏掖掎掀掫捶掣掏掉掟掵捫捩掾揩揀揆揣揉插揶揄搖搴搆搓搦搶攝搗搨搏摧摯摶摎攪撕撓撥撩撈撼"
	],
	[
		"daa1",
		"據擒擅擇撻擘擂擱擧舉擠擡抬擣擯攬擶擴擲擺攀擽攘攜攅攤攣攫攴攵攷收攸畋效敖敕敍敘敞敝敲數斂斃變斛斟斫斷旃旆旁旄旌旒旛旙无旡旱杲昊昃旻杳昵昶昴昜晏晄晉晁晞晝晤晧晨晟晢晰暃暈暎暉暄暘暝曁暹曉暾暼"
	],
	[
		"dba1",
		"曄暸曖曚曠昿曦曩曰曵曷朏朖朞朦朧霸朮朿朶杁朸朷杆杞杠杙杣杤枉杰枩杼杪枌枋枦枡枅枷柯枴柬枳柩枸柤柞柝柢柮枹柎柆柧檜栞框栩桀桍栲桎梳栫桙档桷桿梟梏梭梔條梛梃檮梹桴梵梠梺椏梍桾椁棊椈棘椢椦棡椌棍"
	],
	[
		"dca1",
		"棔棧棕椶椒椄棗棣椥棹棠棯椨椪椚椣椡棆楹楷楜楸楫楔楾楮椹楴椽楙椰楡楞楝榁楪榲榮槐榿槁槓榾槎寨槊槝榻槃榧樮榑榠榜榕榴槞槨樂樛槿權槹槲槧樅榱樞槭樔槫樊樒櫁樣樓橄樌橲樶橸橇橢橙橦橈樸樢檐檍檠檄檢檣"
	],
	[
		"dda1",
		"檗蘗檻櫃櫂檸檳檬櫞櫑櫟檪櫚櫪櫻欅蘖櫺欒欖鬱欟欸欷盜欹飮歇歃歉歐歙歔歛歟歡歸歹歿殀殄殃殍殘殕殞殤殪殫殯殲殱殳殷殼毆毋毓毟毬毫毳毯麾氈氓气氛氤氣汞汕汢汪沂沍沚沁沛汾汨汳沒沐泄泱泓沽泗泅泝沮沱沾"
	],
	[
		"dea1",
		"沺泛泯泙泪洟衍洶洫洽洸洙洵洳洒洌浣涓浤浚浹浙涎涕濤涅淹渕渊涵淇淦涸淆淬淞淌淨淒淅淺淙淤淕淪淮渭湮渮渙湲湟渾渣湫渫湶湍渟湃渺湎渤滿渝游溂溪溘滉溷滓溽溯滄溲滔滕溏溥滂溟潁漑灌滬滸滾漿滲漱滯漲滌"
	],
	[
		"dfa1",
		"漾漓滷澆潺潸澁澀潯潛濳潭澂潼潘澎澑濂潦澳澣澡澤澹濆澪濟濕濬濔濘濱濮濛瀉瀋濺瀑瀁瀏濾瀛瀚潴瀝瀘瀟瀰瀾瀲灑灣炙炒炯烱炬炸炳炮烟烋烝烙焉烽焜焙煥煕熈煦煢煌煖煬熏燻熄熕熨熬燗熹熾燒燉燔燎燠燬燧燵燼"
	],
	[
		"e0a1",
		"燹燿爍爐爛爨爭爬爰爲爻爼爿牀牆牋牘牴牾犂犁犇犒犖犢犧犹犲狃狆狄狎狒狢狠狡狹狷倏猗猊猜猖猝猴猯猩猥猾獎獏默獗獪獨獰獸獵獻獺珈玳珎玻珀珥珮珞璢琅瑯琥珸琲琺瑕琿瑟瑙瑁瑜瑩瑰瑣瑪瑶瑾璋璞璧瓊瓏瓔珱"
	],
	[
		"e1a1",
		"瓠瓣瓧瓩瓮瓲瓰瓱瓸瓷甄甃甅甌甎甍甕甓甞甦甬甼畄畍畊畉畛畆畚畩畤畧畫畭畸當疆疇畴疊疉疂疔疚疝疥疣痂疳痃疵疽疸疼疱痍痊痒痙痣痞痾痿痼瘁痰痺痲痳瘋瘍瘉瘟瘧瘠瘡瘢瘤瘴瘰瘻癇癈癆癜癘癡癢癨癩癪癧癬癰"
	],
	[
		"e2a1",
		"癲癶癸發皀皃皈皋皎皖皓皙皚皰皴皸皹皺盂盍盖盒盞盡盥盧盪蘯盻眈眇眄眩眤眞眥眦眛眷眸睇睚睨睫睛睥睿睾睹瞎瞋瞑瞠瞞瞰瞶瞹瞿瞼瞽瞻矇矍矗矚矜矣矮矼砌砒礦砠礪硅碎硴碆硼碚碌碣碵碪碯磑磆磋磔碾碼磅磊磬"
	],
	[
		"e3a1",
		"磧磚磽磴礇礒礑礙礬礫祀祠祗祟祚祕祓祺祿禊禝禧齋禪禮禳禹禺秉秕秧秬秡秣稈稍稘稙稠稟禀稱稻稾稷穃穗穉穡穢穩龝穰穹穽窈窗窕窘窖窩竈窰窶竅竄窿邃竇竊竍竏竕竓站竚竝竡竢竦竭竰笂笏笊笆笳笘笙笞笵笨笶筐"
	],
	[
		"e4a1",
		"筺笄筍笋筌筅筵筥筴筧筰筱筬筮箝箘箟箍箜箚箋箒箏筝箙篋篁篌篏箴篆篝篩簑簔篦篥籠簀簇簓篳篷簗簍篶簣簧簪簟簷簫簽籌籃籔籏籀籐籘籟籤籖籥籬籵粃粐粤粭粢粫粡粨粳粲粱粮粹粽糀糅糂糘糒糜糢鬻糯糲糴糶糺紆"
	],
	[
		"e5a1",
		"紂紜紕紊絅絋紮紲紿紵絆絳絖絎絲絨絮絏絣經綉絛綏絽綛綺綮綣綵緇綽綫總綢綯緜綸綟綰緘緝緤緞緻緲緡縅縊縣縡縒縱縟縉縋縢繆繦縻縵縹繃縷縲縺繧繝繖繞繙繚繹繪繩繼繻纃緕繽辮繿纈纉續纒纐纓纔纖纎纛纜缸缺"
	],
	[
		"e6a1",
		"罅罌罍罎罐网罕罔罘罟罠罨罩罧罸羂羆羃羈羇羌羔羞羝羚羣羯羲羹羮羶羸譱翅翆翊翕翔翡翦翩翳翹飜耆耄耋耒耘耙耜耡耨耿耻聊聆聒聘聚聟聢聨聳聲聰聶聹聽聿肄肆肅肛肓肚肭冐肬胛胥胙胝胄胚胖脉胯胱脛脩脣脯腋"
	],
	[
		"e7a1",
		"隋腆脾腓腑胼腱腮腥腦腴膃膈膊膀膂膠膕膤膣腟膓膩膰膵膾膸膽臀臂膺臉臍臑臙臘臈臚臟臠臧臺臻臾舁舂舅與舊舍舐舖舩舫舸舳艀艙艘艝艚艟艤艢艨艪艫舮艱艷艸艾芍芒芫芟芻芬苡苣苟苒苴苳苺莓范苻苹苞茆苜茉苙"
	],
	[
		"e8a1",
		"茵茴茖茲茱荀茹荐荅茯茫茗茘莅莚莪莟莢莖茣莎莇莊荼莵荳荵莠莉莨菴萓菫菎菽萃菘萋菁菷萇菠菲萍萢萠莽萸蔆菻葭萪萼蕚蒄葷葫蒭葮蒂葩葆萬葯葹萵蓊葢蒹蒿蒟蓙蓍蒻蓚蓐蓁蓆蓖蒡蔡蓿蓴蔗蔘蔬蔟蔕蔔蓼蕀蕣蕘蕈"
	],
	[
		"e9a1",
		"蕁蘂蕋蕕薀薤薈薑薊薨蕭薔薛藪薇薜蕷蕾薐藉薺藏薹藐藕藝藥藜藹蘊蘓蘋藾藺蘆蘢蘚蘰蘿虍乕虔號虧虱蚓蚣蚩蚪蚋蚌蚶蚯蛄蛆蚰蛉蠣蚫蛔蛞蛩蛬蛟蛛蛯蜒蜆蜈蜀蜃蛻蜑蜉蜍蛹蜊蜴蜿蜷蜻蜥蜩蜚蝠蝟蝸蝌蝎蝴蝗蝨蝮蝙"
	],
	[
		"eaa1",
		"蝓蝣蝪蠅螢螟螂螯蟋螽蟀蟐雖螫蟄螳蟇蟆螻蟯蟲蟠蠏蠍蟾蟶蟷蠎蟒蠑蠖蠕蠢蠡蠱蠶蠹蠧蠻衄衂衒衙衞衢衫袁衾袞衵衽袵衲袂袗袒袮袙袢袍袤袰袿袱裃裄裔裘裙裝裹褂裼裴裨裲褄褌褊褓襃褞褥褪褫襁襄褻褶褸襌褝襠襞"
	],
	[
		"eba1",
		"襦襤襭襪襯襴襷襾覃覈覊覓覘覡覩覦覬覯覲覺覽覿觀觚觜觝觧觴觸訃訖訐訌訛訝訥訶詁詛詒詆詈詼詭詬詢誅誂誄誨誡誑誥誦誚誣諄諍諂諚諫諳諧諤諱謔諠諢諷諞諛謌謇謚諡謖謐謗謠謳鞫謦謫謾謨譁譌譏譎證譖譛譚譫"
	],
	[
		"eca1",
		"譟譬譯譴譽讀讌讎讒讓讖讙讚谺豁谿豈豌豎豐豕豢豬豸豺貂貉貅貊貍貎貔豼貘戝貭貪貽貲貳貮貶賈賁賤賣賚賽賺賻贄贅贊贇贏贍贐齎贓賍贔贖赧赭赱赳趁趙跂趾趺跏跚跖跌跛跋跪跫跟跣跼踈踉跿踝踞踐踟蹂踵踰踴蹊"
	],
	[
		"eda1",
		"蹇蹉蹌蹐蹈蹙蹤蹠踪蹣蹕蹶蹲蹼躁躇躅躄躋躊躓躑躔躙躪躡躬躰軆躱躾軅軈軋軛軣軼軻軫軾輊輅輕輒輙輓輜輟輛輌輦輳輻輹轅轂輾轌轉轆轎轗轜轢轣轤辜辟辣辭辯辷迚迥迢迪迯邇迴逅迹迺逑逕逡逍逞逖逋逧逶逵逹迸"
	],
	[
		"eea1",
		"遏遐遑遒逎遉逾遖遘遞遨遯遶隨遲邂遽邁邀邊邉邏邨邯邱邵郢郤扈郛鄂鄒鄙鄲鄰酊酖酘酣酥酩酳酲醋醉醂醢醫醯醪醵醴醺釀釁釉釋釐釖釟釡釛釼釵釶鈞釿鈔鈬鈕鈑鉞鉗鉅鉉鉤鉈銕鈿鉋鉐銜銖銓銛鉚鋏銹銷鋩錏鋺鍄錮"
	],
	[
		"efa1",
		"錙錢錚錣錺錵錻鍜鍠鍼鍮鍖鎰鎬鎭鎔鎹鏖鏗鏨鏥鏘鏃鏝鏐鏈鏤鐚鐔鐓鐃鐇鐐鐶鐫鐵鐡鐺鑁鑒鑄鑛鑠鑢鑞鑪鈩鑰鑵鑷鑽鑚鑼鑾钁鑿閂閇閊閔閖閘閙閠閨閧閭閼閻閹閾闊濶闃闍闌闕闔闖關闡闥闢阡阨阮阯陂陌陏陋陷陜陞"
	],
	[
		"f0a1",
		"陝陟陦陲陬隍隘隕隗險隧隱隲隰隴隶隸隹雎雋雉雍襍雜霍雕雹霄霆霈霓霎霑霏霖霙霤霪霰霹霽霾靄靆靈靂靉靜靠靤靦靨勒靫靱靹鞅靼鞁靺鞆鞋鞏鞐鞜鞨鞦鞣鞳鞴韃韆韈韋韜韭齏韲竟韶韵頏頌頸頤頡頷頽顆顏顋顫顯顰"
	],
	[
		"f1a1",
		"顱顴顳颪颯颱颶飄飃飆飩飫餃餉餒餔餘餡餝餞餤餠餬餮餽餾饂饉饅饐饋饑饒饌饕馗馘馥馭馮馼駟駛駝駘駑駭駮駱駲駻駸騁騏騅駢騙騫騷驅驂驀驃騾驕驍驛驗驟驢驥驤驩驫驪骭骰骼髀髏髑髓體髞髟髢髣髦髯髫髮髴髱髷"
	],
	[
		"f2a1",
		"髻鬆鬘鬚鬟鬢鬣鬥鬧鬨鬩鬪鬮鬯鬲魄魃魏魍魎魑魘魴鮓鮃鮑鮖鮗鮟鮠鮨鮴鯀鯊鮹鯆鯏鯑鯒鯣鯢鯤鯔鯡鰺鯲鯱鯰鰕鰔鰉鰓鰌鰆鰈鰒鰊鰄鰮鰛鰥鰤鰡鰰鱇鰲鱆鰾鱚鱠鱧鱶鱸鳧鳬鳰鴉鴈鳫鴃鴆鴪鴦鶯鴣鴟鵄鴕鴒鵁鴿鴾鵆鵈"
	],
	[
		"f3a1",
		"鵝鵞鵤鵑鵐鵙鵲鶉鶇鶫鵯鵺鶚鶤鶩鶲鷄鷁鶻鶸鶺鷆鷏鷂鷙鷓鷸鷦鷭鷯鷽鸚鸛鸞鹵鹹鹽麁麈麋麌麒麕麑麝麥麩麸麪麭靡黌黎黏黐黔黜點黝黠黥黨黯黴黶黷黹黻黼黽鼇鼈皷鼕鼡鼬鼾齊齒齔齣齟齠齡齦齧齬齪齷齲齶龕龜龠"
	],
	[
		"f4a1",
		"堯槇遙瑤凜熙"
	],
	[
		"f9a1",
		"纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德"
	],
	[
		"faa1",
		"忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱"
	],
	[
		"fba1",
		"犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚"
	],
	[
		"fca1",
		"釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑"
	],
	[
		"fcf1",
		"ⅰ",
		9,
		"￢￤＇＂"
	],
	[
		"8fa2af",
		"˘ˇ¸˙˝¯˛˚～΄΅"
	],
	[
		"8fa2c2",
		"¡¦¿"
	],
	[
		"8fa2eb",
		"ºª©®™¤№"
	],
	[
		"8fa6e1",
		"ΆΈΉΊΪ"
	],
	[
		"8fa6e7",
		"Ό"
	],
	[
		"8fa6e9",
		"ΎΫ"
	],
	[
		"8fa6ec",
		"Ώ"
	],
	[
		"8fa6f1",
		"άέήίϊΐόςύϋΰώ"
	],
	[
		"8fa7c2",
		"Ђ",
		10,
		"ЎЏ"
	],
	[
		"8fa7f2",
		"ђ",
		10,
		"ўџ"
	],
	[
		"8fa9a1",
		"ÆĐ"
	],
	[
		"8fa9a4",
		"Ħ"
	],
	[
		"8fa9a6",
		"Ĳ"
	],
	[
		"8fa9a8",
		"ŁĿ"
	],
	[
		"8fa9ab",
		"ŊØŒ"
	],
	[
		"8fa9af",
		"ŦÞ"
	],
	[
		"8fa9c1",
		"æđðħıĳĸłŀŉŋøœßŧþ"
	],
	[
		"8faaa1",
		"ÁÀÄÂĂǍĀĄÅÃĆĈČÇĊĎÉÈËÊĚĖĒĘ"
	],
	[
		"8faaba",
		"ĜĞĢĠĤÍÌÏÎǏİĪĮĨĴĶĹĽĻŃŇŅÑÓÒÖÔǑŐŌÕŔŘŖŚŜŠŞŤŢÚÙÜÛŬǓŰŪŲŮŨǗǛǙǕŴÝŸŶŹŽŻ"
	],
	[
		"8faba1",
		"áàäâăǎāąåãćĉčçċďéèëêěėēęǵĝğ"
	],
	[
		"8fabbd",
		"ġĥíìïîǐ"
	],
	[
		"8fabc5",
		"īįĩĵķĺľļńňņñóòöôǒőōõŕřŗśŝšşťţúùüûŭǔűūųůũǘǜǚǖŵýÿŷźžż"
	],
	[
		"8fb0a1",
		"丂丄丅丌丒丟丣两丨丫丮丯丰丵乀乁乄乇乑乚乜乣乨乩乴乵乹乿亍亖亗亝亯亹仃仐仚仛仠仡仢仨仯仱仳仵份仾仿伀伂伃伈伋伌伒伕伖众伙伮伱你伳伵伷伹伻伾佀佂佈佉佋佌佒佔佖佘佟佣佪佬佮佱佷佸佹佺佽佾侁侂侄"
	],
	[
		"8fb1a1",
		"侅侉侊侌侎侐侒侓侔侗侙侚侞侟侲侷侹侻侼侽侾俀俁俅俆俈俉俋俌俍俏俒俜俠俢俰俲俼俽俿倀倁倄倇倊倌倎倐倓倗倘倛倜倝倞倢倧倮倰倲倳倵偀偁偂偅偆偊偌偎偑偒偓偗偙偟偠偢偣偦偧偪偭偰偱倻傁傃傄傆傊傎傏傐"
	],
	[
		"8fb2a1",
		"傒傓傔傖傛傜傞",
		4,
		"傪傯傰傹傺傽僀僃僄僇僌僎僐僓僔僘僜僝僟僢僤僦僨僩僯僱僶僺僾儃儆儇儈儋儌儍儎僲儐儗儙儛儜儝儞儣儧儨儬儭儯儱儳儴儵儸儹兂兊兏兓兕兗兘兟兤兦兾冃冄冋冎冘冝冡冣冭冸冺冼冾冿凂"
	],
	[
		"8fb3a1",
		"凈减凑凒凓凕凘凞凢凥凮凲凳凴凷刁刂刅划刓刕刖刘刢刨刱刲刵刼剅剉剕剗剘剚剜剟剠剡剦剮剷剸剹劀劂劅劊劌劓劕劖劗劘劚劜劤劥劦劧劯劰劶劷劸劺劻劽勀勄勆勈勌勏勑勔勖勛勜勡勥勨勩勪勬勰勱勴勶勷匀匃匊匋"
	],
	[
		"8fb4a1",
		"匌匑匓匘匛匜匞匟匥匧匨匩匫匬匭匰匲匵匼匽匾卂卌卋卙卛卡卣卥卬卭卲卹卾厃厇厈厎厓厔厙厝厡厤厪厫厯厲厴厵厷厸厺厽叀叅叏叒叓叕叚叝叞叠另叧叵吂吓吚吡吧吨吪启吱吴吵呃呄呇呍呏呞呢呤呦呧呩呫呭呮呴呿"
	],
	[
		"8fb5a1",
		"咁咃咅咈咉咍咑咕咖咜咟咡咦咧咩咪咭咮咱咷咹咺咻咿哆哊响哎哠哪哬哯哶哼哾哿唀唁唅唈唉唌唍唎唕唪唫唲唵唶唻唼唽啁啇啉啊啍啐啑啘啚啛啞啠啡啤啦啿喁喂喆喈喎喏喑喒喓喔喗喣喤喭喲喿嗁嗃嗆嗉嗋嗌嗎嗑嗒"
	],
	[
		"8fb6a1",
		"嗓嗗嗘嗛嗞嗢嗩嗶嗿嘅嘈嘊嘍",
		5,
		"嘙嘬嘰嘳嘵嘷嘹嘻嘼嘽嘿噀噁噃噄噆噉噋噍噏噔噞噠噡噢噣噦噩噭噯噱噲噵嚄嚅嚈嚋嚌嚕嚙嚚嚝嚞嚟嚦嚧嚨嚩嚫嚬嚭嚱嚳嚷嚾囅囉囊囋囏囐囌囍囙囜囝囟囡囤",
		4,
		"囱囫园"
	],
	[
		"8fb7a1",
		"囶囷圁圂圇圊圌圑圕圚圛圝圠圢圣圤圥圩圪圬圮圯圳圴圽圾圿坅坆坌坍坒坢坥坧坨坫坭",
		4,
		"坳坴坵坷坹坺坻坼坾垁垃垌垔垗垙垚垜垝垞垟垡垕垧垨垩垬垸垽埇埈埌埏埕埝埞埤埦埧埩埭埰埵埶埸埽埾埿堃堄堈堉埡"
	],
	[
		"8fb8a1",
		"堌堍堛堞堟堠堦堧堭堲堹堿塉塌塍塏塐塕塟塡塤塧塨塸塼塿墀墁墇墈墉墊墌墍墏墐墔墖墝墠墡墢墦墩墱墲壄墼壂壈壍壎壐壒壔壖壚壝壡壢壩壳夅夆夋夌夒夓夔虁夝夡夣夤夨夯夰夳夵夶夿奃奆奒奓奙奛奝奞奟奡奣奫奭"
	],
	[
		"8fb9a1",
		"奯奲奵奶她奻奼妋妌妎妒妕妗妟妤妧妭妮妯妰妳妷妺妼姁姃姄姈姊姍姒姝姞姟姣姤姧姮姯姱姲姴姷娀娄娌娍娎娒娓娞娣娤娧娨娪娭娰婄婅婇婈婌婐婕婞婣婥婧婭婷婺婻婾媋媐媓媖媙媜媞媟媠媢媧媬媱媲媳媵媸媺媻媿"
	],
	[
		"8fbaa1",
		"嫄嫆嫈嫏嫚嫜嫠嫥嫪嫮嫵嫶嫽嬀嬁嬈嬗嬴嬙嬛嬝嬡嬥嬭嬸孁孋孌孒孖孞孨孮孯孼孽孾孿宁宄宆宊宎宐宑宓宔宖宨宩宬宭宯宱宲宷宺宼寀寁寍寏寖",
		4,
		"寠寯寱寴寽尌尗尞尟尣尦尩尫尬尮尰尲尵尶屙屚屜屢屣屧屨屩"
	],
	[
		"8fbba1",
		"屭屰屴屵屺屻屼屽岇岈岊岏岒岝岟岠岢岣岦岪岲岴岵岺峉峋峒峝峗峮峱峲峴崁崆崍崒崫崣崤崦崧崱崴崹崽崿嵂嵃嵆嵈嵕嵑嵙嵊嵟嵠嵡嵢嵤嵪嵭嵰嵹嵺嵾嵿嶁嶃嶈嶊嶒嶓嶔嶕嶙嶛嶟嶠嶧嶫嶰嶴嶸嶹巃巇巋巐巎巘巙巠巤"
	],
	[
		"8fbca1",
		"巩巸巹帀帇帍帒帔帕帘帟帠帮帨帲帵帾幋幐幉幑幖幘幛幜幞幨幪",
		4,
		"幰庀庋庎庢庤庥庨庪庬庱庳庽庾庿廆廌廋廎廑廒廔廕廜廞廥廫异弆弇弈弎弙弜弝弡弢弣弤弨弫弬弮弰弴弶弻弽弿彀彄彅彇彍彐彔彘彛彠彣彤彧"
	],
	[
		"8fbda1",
		"彯彲彴彵彸彺彽彾徉徍徏徖徜徝徢徧徫徤徬徯徰徱徸忄忇忈忉忋忐",
		4,
		"忞忡忢忨忩忪忬忭忮忯忲忳忶忺忼怇怊怍怓怔怗怘怚怟怤怭怳怵恀恇恈恉恌恑恔恖恗恝恡恧恱恾恿悂悆悈悊悎悑悓悕悘悝悞悢悤悥您悰悱悷"
	],
	[
		"8fbea1",
		"悻悾惂惄惈惉惊惋惎惏惔惕惙惛惝惞惢惥惲惵惸惼惽愂愇愊愌愐",
		4,
		"愖愗愙愜愞愢愪愫愰愱愵愶愷愹慁慅慆慉慞慠慬慲慸慻慼慿憀憁憃憄憋憍憒憓憗憘憜憝憟憠憥憨憪憭憸憹憼懀懁懂懎懏懕懜懝懞懟懡懢懧懩懥"
	],
	[
		"8fbfa1",
		"懬懭懯戁戃戄戇戓戕戜戠戢戣戧戩戫戹戽扂扃扄扆扌扐扑扒扔扖扚扜扤扭扯扳扺扽抍抎抏抐抦抨抳抶抷抺抾抿拄拎拕拖拚拪拲拴拼拽挃挄挊挋挍挐挓挖挘挩挪挭挵挶挹挼捁捂捃捄捆捊捋捎捒捓捔捘捛捥捦捬捭捱捴捵"
	],
	[
		"8fc0a1",
		"捸捼捽捿掂掄掇掊掐掔掕掙掚掞掤掦掭掮掯掽揁揅揈揎揑揓揔揕揜揠揥揪揬揲揳揵揸揹搉搊搐搒搔搘搞搠搢搤搥搩搪搯搰搵搽搿摋摏摑摒摓摔摚摛摜摝摟摠摡摣摭摳摴摻摽撅撇撏撐撑撘撙撛撝撟撡撣撦撨撬撳撽撾撿"
	],
	[
		"8fc1a1",
		"擄擉擊擋擌擎擐擑擕擗擤擥擩擪擭擰擵擷擻擿攁攄攈攉攊攏攓攔攖攙攛攞攟攢攦攩攮攱攺攼攽敃敇敉敐敒敔敟敠敧敫敺敽斁斅斊斒斕斘斝斠斣斦斮斲斳斴斿旂旈旉旎旐旔旖旘旟旰旲旴旵旹旾旿昀昄昈昉昍昑昒昕昖昝"
	],
	[
		"8fc2a1",
		"昞昡昢昣昤昦昩昪昫昬昮昰昱昳昹昷晀晅晆晊晌晑晎晗晘晙晛晜晠晡曻晪晫晬晾晳晵晿晷晸晹晻暀晼暋暌暍暐暒暙暚暛暜暟暠暤暭暱暲暵暻暿曀曂曃曈曌曎曏曔曛曟曨曫曬曮曺朅朇朎朓朙朜朠朢朳朾杅杇杈杌杔杕杝"
	],
	[
		"8fc3a1",
		"杦杬杮杴杶杻极构枎枏枑枓枖枘枙枛枰枱枲枵枻枼枽柹柀柂柃柅柈柉柒柗柙柜柡柦柰柲柶柷桒栔栙栝栟栨栧栬栭栯栰栱栳栻栿桄桅桊桌桕桗桘桛桫桮",
		4,
		"桵桹桺桻桼梂梄梆梈梖梘梚梜梡梣梥梩梪梮梲梻棅棈棌棏"
	],
	[
		"8fc4a1",
		"棐棑棓棖棙棜棝棥棨棪棫棬棭棰棱棵棶棻棼棽椆椉椊椐椑椓椖椗椱椳椵椸椻楂楅楉楎楗楛楣楤楥楦楨楩楬楰楱楲楺楻楿榀榍榒榖榘榡榥榦榨榫榭榯榷榸榺榼槅槈槑槖槗槢槥槮槯槱槳槵槾樀樁樃樏樑樕樚樝樠樤樨樰樲"
	],
	[
		"8fc5a1",
		"樴樷樻樾樿橅橆橉橊橎橐橑橒橕橖橛橤橧橪橱橳橾檁檃檆檇檉檋檑檛檝檞檟檥檫檯檰檱檴檽檾檿櫆櫉櫈櫌櫐櫔櫕櫖櫜櫝櫤櫧櫬櫰櫱櫲櫼櫽欂欃欆欇欉欏欐欑欗欛欞欤欨欫欬欯欵欶欻欿歆歊歍歒歖歘歝歠歧歫歮歰歵歽"
	],
	[
		"8fc6a1",
		"歾殂殅殗殛殟殠殢殣殨殩殬殭殮殰殸殹殽殾毃毄毉毌毖毚毡毣毦毧毮毱毷毹毿氂氄氅氉氍氎氐氒氙氟氦氧氨氬氮氳氵氶氺氻氿汊汋汍汏汒汔汙汛汜汫汭汯汴汶汸汹汻沅沆沇沉沔沕沗沘沜沟沰沲沴泂泆泍泏泐泑泒泔泖"
	],
	[
		"8fc7a1",
		"泚泜泠泧泩泫泬泮泲泴洄洇洊洎洏洑洓洚洦洧洨汧洮洯洱洹洼洿浗浞浟浡浥浧浯浰浼涂涇涑涒涔涖涗涘涪涬涴涷涹涽涿淄淈淊淎淏淖淛淝淟淠淢淥淩淯淰淴淶淼渀渄渞渢渧渲渶渹渻渼湄湅湈湉湋湏湑湒湓湔湗湜湝湞"
	],
	[
		"8fc8a1",
		"湢湣湨湳湻湽溍溓溙溠溧溭溮溱溳溻溿滀滁滃滇滈滊滍滎滏滫滭滮滹滻滽漄漈漊漌漍漖漘漚漛漦漩漪漯漰漳漶漻漼漭潏潑潒潓潗潙潚潝潞潡潢潨潬潽潾澃澇澈澋澌澍澐澒澓澔澖澚澟澠澥澦澧澨澮澯澰澵澶澼濅濇濈濊"
	],
	[
		"8fc9a1",
		"濚濞濨濩濰濵濹濼濽瀀瀅瀆瀇瀍瀗瀠瀣瀯瀴瀷瀹瀼灃灄灈灉灊灋灔灕灝灞灎灤灥灬灮灵灶灾炁炅炆炔",
		4,
		"炛炤炫炰炱炴炷烊烑烓烔烕烖烘烜烤烺焃",
		4,
		"焋焌焏焞焠焫焭焯焰焱焸煁煅煆煇煊煋煐煒煗煚煜煞煠"
	],
	[
		"8fcaa1",
		"煨煹熀熅熇熌熒熚熛熠熢熯熰熲熳熺熿燀燁燄燋燌燓燖燙燚燜燸燾爀爇爈爉爓爗爚爝爟爤爫爯爴爸爹牁牂牃牅牎牏牐牓牕牖牚牜牞牠牣牨牫牮牯牱牷牸牻牼牿犄犉犍犎犓犛犨犭犮犱犴犾狁狇狉狌狕狖狘狟狥狳狴狺狻"
	],
	[
		"8fcba1",
		"狾猂猄猅猇猋猍猒猓猘猙猞猢猤猧猨猬猱猲猵猺猻猽獃獍獐獒獖獘獝獞獟獠獦獧獩獫獬獮獯獱獷獹獼玀玁玃玅玆玎玐玓玕玗玘玜玞玟玠玢玥玦玪玫玭玵玷玹玼玽玿珅珆珉珋珌珏珒珓珖珙珝珡珣珦珧珩珴珵珷珹珺珻珽"
	],
	[
		"8fcca1",
		"珿琀琁琄琇琊琑琚琛琤琦琨",
		9,
		"琹瑀瑃瑄瑆瑇瑋瑍瑑瑒瑗瑝瑢瑦瑧瑨瑫瑭瑮瑱瑲璀璁璅璆璇璉璏璐璑璒璘璙璚璜璟璠璡璣璦璨璩璪璫璮璯璱璲璵璹璻璿瓈瓉瓌瓐瓓瓘瓚瓛瓞瓟瓤瓨瓪瓫瓯瓴瓺瓻瓼瓿甆"
	],
	[
		"8fcda1",
		"甒甖甗甠甡甤甧甩甪甯甶甹甽甾甿畀畃畇畈畎畐畒畗畞畟畡畯畱畹",
		5,
		"疁疅疐疒疓疕疙疜疢疤疴疺疿痀痁痄痆痌痎痏痗痜痟痠痡痤痧痬痮痯痱痹瘀瘂瘃瘄瘇瘈瘊瘌瘏瘒瘓瘕瘖瘙瘛瘜瘝瘞瘣瘥瘦瘩瘭瘲瘳瘵瘸瘹"
	],
	[
		"8fcea1",
		"瘺瘼癊癀癁癃癄癅癉癋癕癙癟癤癥癭癮癯癱癴皁皅皌皍皕皛皜皝皟皠皢",
		6,
		"皪皭皽盁盅盉盋盌盎盔盙盠盦盨盬盰盱盶盹盼眀眆眊眎眒眔眕眗眙眚眜眢眨眭眮眯眴眵眶眹眽眾睂睅睆睊睍睎睏睒睖睗睜睞睟睠睢"
	],
	[
		"8fcfa1",
		"睤睧睪睬睰睲睳睴睺睽瞀瞄瞌瞍瞔瞕瞖瞚瞟瞢瞧瞪瞮瞯瞱瞵瞾矃矉矑矒矕矙矞矟矠矤矦矪矬矰矱矴矸矻砅砆砉砍砎砑砝砡砢砣砭砮砰砵砷硃硄硇硈硌硎硒硜硞硠硡硣硤硨硪确硺硾碊碏碔碘碡碝碞碟碤碨碬碭碰碱碲碳"
	],
	[
		"8fd0a1",
		"碻碽碿磇磈磉磌磎磒磓磕磖磤磛磟磠磡磦磪磲磳礀磶磷磺磻磿礆礌礐礚礜礞礟礠礥礧礩礭礱礴礵礻礽礿祄祅祆祊祋祏祑祔祘祛祜祧祩祫祲祹祻祼祾禋禌禑禓禔禕禖禘禛禜禡禨禩禫禯禱禴禸离秂秄秇秈秊秏秔秖秚秝秞"
	],
	[
		"8fd1a1",
		"秠秢秥秪秫秭秱秸秼稂稃稇稉稊稌稑稕稛稞稡稧稫稭稯稰稴稵稸稹稺穄穅穇穈穌穕穖穙穜穝穟穠穥穧穪穭穵穸穾窀窂窅窆窊窋窐窑窔窞窠窣窬窳窵窹窻窼竆竉竌竎竑竛竨竩竫竬竱竴竻竽竾笇笔笟笣笧笩笪笫笭笮笯笰"
	],
	[
		"8fd2a1",
		"笱笴笽笿筀筁筇筎筕筠筤筦筩筪筭筯筲筳筷箄箉箎箐箑箖箛箞箠箥箬箯箰箲箵箶箺箻箼箽篂篅篈篊篔篖篗篙篚篛篨篪篲篴篵篸篹篺篼篾簁簂簃簄簆簉簋簌簎簏簙簛簠簥簦簨簬簱簳簴簶簹簺籆籊籕籑籒籓籙",
		5
	],
	[
		"8fd3a1",
		"籡籣籧籩籭籮籰籲籹籼籽粆粇粏粔粞粠粦粰粶粷粺粻粼粿糄糇糈糉糍糏糓糔糕糗糙糚糝糦糩糫糵紃紇紈紉紏紑紒紓紖紝紞紣紦紪紭紱紼紽紾絀絁絇絈絍絑絓絗絙絚絜絝絥絧絪絰絸絺絻絿綁綂綃綅綆綈綋綌綍綑綖綗綝"
	],
	[
		"8fd4a1",
		"綞綦綧綪綳綶綷綹緂",
		4,
		"緌緍緎緗緙縀緢緥緦緪緫緭緱緵緶緹緺縈縐縑縕縗縜縝縠縧縨縬縭縯縳縶縿繄繅繇繎繐繒繘繟繡繢繥繫繮繯繳繸繾纁纆纇纊纍纑纕纘纚纝纞缼缻缽缾缿罃罄罇罏罒罓罛罜罝罡罣罤罥罦罭"
	],
	[
		"8fd5a1",
		"罱罽罾罿羀羋羍羏羐羑羖羗羜羡羢羦羪羭羴羼羿翀翃翈翎翏翛翟翣翥翨翬翮翯翲翺翽翾翿耇耈耊耍耎耏耑耓耔耖耝耞耟耠耤耦耬耮耰耴耵耷耹耺耼耾聀聄聠聤聦聭聱聵肁肈肎肜肞肦肧肫肸肹胈胍胏胒胔胕胗胘胠胭胮"
	],
	[
		"8fd6a1",
		"胰胲胳胶胹胺胾脃脋脖脗脘脜脞脠脤脧脬脰脵脺脼腅腇腊腌腒腗腠腡腧腨腩腭腯腷膁膐膄膅膆膋膎膖膘膛膞膢膮膲膴膻臋臃臅臊臎臏臕臗臛臝臞臡臤臫臬臰臱臲臵臶臸臹臽臿舀舃舏舓舔舙舚舝舡舢舨舲舴舺艃艄艅艆"
	],
	[
		"8fd7a1",
		"艋艎艏艑艖艜艠艣艧艭艴艻艽艿芀芁芃芄芇芉芊芎芑芔芖芘芚芛芠芡芣芤芧芨芩芪芮芰芲芴芷芺芼芾芿苆苐苕苚苠苢苤苨苪苭苯苶苷苽苾茀茁茇茈茊茋荔茛茝茞茟茡茢茬茭茮茰茳茷茺茼茽荂荃荄荇荍荎荑荕荖荗荰荸"
	],
	[
		"8fd8a1",
		"荽荿莀莂莄莆莍莒莔莕莘莙莛莜莝莦莧莩莬莾莿菀菇菉菏菐菑菔菝荓菨菪菶菸菹菼萁萆萊萏萑萕萙莭萯萹葅葇葈葊葍葏葑葒葖葘葙葚葜葠葤葥葧葪葰葳葴葶葸葼葽蒁蒅蒒蒓蒕蒞蒦蒨蒩蒪蒯蒱蒴蒺蒽蒾蓀蓂蓇蓈蓌蓏蓓"
	],
	[
		"8fd9a1",
		"蓜蓧蓪蓯蓰蓱蓲蓷蔲蓺蓻蓽蔂蔃蔇蔌蔎蔐蔜蔞蔢蔣蔤蔥蔧蔪蔫蔯蔳蔴蔶蔿蕆蕏",
		4,
		"蕖蕙蕜",
		6,
		"蕤蕫蕯蕹蕺蕻蕽蕿薁薅薆薉薋薌薏薓薘薝薟薠薢薥薧薴薶薷薸薼薽薾薿藂藇藊藋藎薭藘藚藟藠藦藨藭藳藶藼"
	],
	[
		"8fdaa1",
		"藿蘀蘄蘅蘍蘎蘐蘑蘒蘘蘙蘛蘞蘡蘧蘩蘶蘸蘺蘼蘽虀虂虆虒虓虖虗虘虙虝虠",
		4,
		"虩虬虯虵虶虷虺蚍蚑蚖蚘蚚蚜蚡蚦蚧蚨蚭蚱蚳蚴蚵蚷蚸蚹蚿蛀蛁蛃蛅蛑蛒蛕蛗蛚蛜蛠蛣蛥蛧蚈蛺蛼蛽蜄蜅蜇蜋蜎蜏蜐蜓蜔蜙蜞蜟蜡蜣"
	],
	[
		"8fdba1",
		"蜨蜮蜯蜱蜲蜹蜺蜼蜽蜾蝀蝃蝅蝍蝘蝝蝡蝤蝥蝯蝱蝲蝻螃",
		6,
		"螋螌螐螓螕螗螘螙螞螠螣螧螬螭螮螱螵螾螿蟁蟈蟉蟊蟎蟕蟖蟙蟚蟜蟟蟢蟣蟤蟪蟫蟭蟱蟳蟸蟺蟿蠁蠃蠆蠉蠊蠋蠐蠙蠒蠓蠔蠘蠚蠛蠜蠞蠟蠨蠭蠮蠰蠲蠵"
	],
	[
		"8fdca1",
		"蠺蠼衁衃衅衈衉衊衋衎衑衕衖衘衚衜衟衠衤衩衱衹衻袀袘袚袛袜袟袠袨袪袺袽袾裀裊",
		4,
		"裑裒裓裛裞裧裯裰裱裵裷褁褆褍褎褏褕褖褘褙褚褜褠褦褧褨褰褱褲褵褹褺褾襀襂襅襆襉襏襒襗襚襛襜襡襢襣襫襮襰襳襵襺"
	],
	[
		"8fdda1",
		"襻襼襽覉覍覐覔覕覛覜覟覠覥覰覴覵覶覷覼觔",
		4,
		"觥觩觫觭觱觳觶觹觽觿訄訅訇訏訑訒訔訕訞訠訢訤訦訫訬訯訵訷訽訾詀詃詅詇詉詍詎詓詖詗詘詜詝詡詥詧詵詶詷詹詺詻詾詿誀誃誆誋誏誐誒誖誗誙誟誧誩誮誯誳"
	],
	[
		"8fdea1",
		"誶誷誻誾諃諆諈諉諊諑諓諔諕諗諝諟諬諰諴諵諶諼諿謅謆謋謑謜謞謟謊謭謰謷謼譂",
		4,
		"譈譒譓譔譙譍譞譣譭譶譸譹譼譾讁讄讅讋讍讏讔讕讜讞讟谸谹谽谾豅豇豉豋豏豑豓豔豗豘豛豝豙豣豤豦豨豩豭豳豵豶豻豾貆"
	],
	[
		"8fdfa1",
		"貇貋貐貒貓貙貛貜貤貹貺賅賆賉賋賏賖賕賙賝賡賨賬賯賰賲賵賷賸賾賿贁贃贉贒贗贛赥赩赬赮赿趂趄趈趍趐趑趕趞趟趠趦趫趬趯趲趵趷趹趻跀跅跆跇跈跊跎跑跔跕跗跙跤跥跧跬跰趼跱跲跴跽踁踄踅踆踋踑踔踖踠踡踢"
	],
	[
		"8fe0a1",
		"踣踦踧踱踳踶踷踸踹踽蹀蹁蹋蹍蹎蹏蹔蹛蹜蹝蹞蹡蹢蹩蹬蹭蹯蹰蹱蹹蹺蹻躂躃躉躐躒躕躚躛躝躞躢躧躩躭躮躳躵躺躻軀軁軃軄軇軏軑軔軜軨軮軰軱軷軹軺軭輀輂輇輈輏輐輖輗輘輞輠輡輣輥輧輨輬輭輮輴輵輶輷輺轀轁"
	],
	[
		"8fe1a1",
		"轃轇轏轑",
		4,
		"轘轝轞轥辝辠辡辤辥辦辵辶辸达迀迁迆迊迋迍运迒迓迕迠迣迤迨迮迱迵迶迻迾适逄逈逌逘逛逨逩逯逪逬逭逳逴逷逿遃遄遌遛遝遢遦遧遬遰遴遹邅邈邋邌邎邐邕邗邘邙邛邠邡邢邥邰邲邳邴邶邽郌邾郃"
	],
	[
		"8fe2a1",
		"郄郅郇郈郕郗郘郙郜郝郟郥郒郶郫郯郰郴郾郿鄀鄄鄅鄆鄈鄍鄐鄔鄖鄗鄘鄚鄜鄞鄠鄥鄢鄣鄧鄩鄮鄯鄱鄴鄶鄷鄹鄺鄼鄽酃酇酈酏酓酗酙酚酛酡酤酧酭酴酹酺酻醁醃醅醆醊醎醑醓醔醕醘醞醡醦醨醬醭醮醰醱醲醳醶醻醼醽醿"
	],
	[
		"8fe3a1",
		"釂釃釅釓釔釗釙釚釞釤釥釩釪釬",
		5,
		"釷釹釻釽鈀鈁鈄鈅鈆鈇鈉鈊鈌鈐鈒鈓鈖鈘鈜鈝鈣鈤鈥鈦鈨鈮鈯鈰鈳鈵鈶鈸鈹鈺鈼鈾鉀鉂鉃鉆鉇鉊鉍鉎鉏鉑鉘鉙鉜鉝鉠鉡鉥鉧鉨鉩鉮鉯鉰鉵",
		4,
		"鉻鉼鉽鉿銈銉銊銍銎銒銗"
	],
	[
		"8fe4a1",
		"銙銟銠銤銥銧銨銫銯銲銶銸銺銻銼銽銿",
		4,
		"鋅鋆鋇鋈鋋鋌鋍鋎鋐鋓鋕鋗鋘鋙鋜鋝鋟鋠鋡鋣鋥鋧鋨鋬鋮鋰鋹鋻鋿錀錂錈錍錑錔錕錜錝錞錟錡錤錥錧錩錪錳錴錶錷鍇鍈鍉鍐鍑鍒鍕鍗鍘鍚鍞鍤鍥鍧鍩鍪鍭鍯鍰鍱鍳鍴鍶"
	],
	[
		"8fe5a1",
		"鍺鍽鍿鎀鎁鎂鎈鎊鎋鎍鎏鎒鎕鎘鎛鎞鎡鎣鎤鎦鎨鎫鎴鎵鎶鎺鎩鏁鏄鏅鏆鏇鏉",
		4,
		"鏓鏙鏜鏞鏟鏢鏦鏧鏹鏷鏸鏺鏻鏽鐁鐂鐄鐈鐉鐍鐎鐏鐕鐖鐗鐟鐮鐯鐱鐲鐳鐴鐻鐿鐽鑃鑅鑈鑊鑌鑕鑙鑜鑟鑡鑣鑨鑫鑭鑮鑯鑱鑲钄钃镸镹"
	],
	[
		"8fe6a1",
		"镾閄閈閌閍閎閝閞閟閡閦閩閫閬閴閶閺閽閿闆闈闉闋闐闑闒闓闙闚闝闞闟闠闤闦阝阞阢阤阥阦阬阱阳阷阸阹阺阼阽陁陒陔陖陗陘陡陮陴陻陼陾陿隁隂隃隄隉隑隖隚隝隟隤隥隦隩隮隯隳隺雊雒嶲雘雚雝雞雟雩雯雱雺霂"
	],
	[
		"8fe7a1",
		"霃霅霉霚霛霝霡霢霣霨霱霳靁靃靊靎靏靕靗靘靚靛靣靧靪靮靳靶靷靸靻靽靿鞀鞉鞕鞖鞗鞙鞚鞞鞟鞢鞬鞮鞱鞲鞵鞶鞸鞹鞺鞼鞾鞿韁韄韅韇韉韊韌韍韎韐韑韔韗韘韙韝韞韠韛韡韤韯韱韴韷韸韺頇頊頙頍頎頔頖頜頞頠頣頦"
	],
	[
		"8fe8a1",
		"頫頮頯頰頲頳頵頥頾顄顇顊顑顒顓顖顗顙顚顢顣顥顦顪顬颫颭颮颰颴颷颸颺颻颿飂飅飈飌飡飣飥飦飧飪飳飶餂餇餈餑餕餖餗餚餛餜餟餢餦餧餫餱",
		4,
		"餹餺餻餼饀饁饆饇饈饍饎饔饘饙饛饜饞饟饠馛馝馟馦馰馱馲馵"
	],
	[
		"8fe9a1",
		"馹馺馽馿駃駉駓駔駙駚駜駞駧駪駫駬駰駴駵駹駽駾騂騃騄騋騌騐騑騖騞騠騢騣騤騧騭騮騳騵騶騸驇驁驄驊驋驌驎驑驔驖驝骪骬骮骯骲骴骵骶骹骻骾骿髁髃髆髈髎髐髒髕髖髗髛髜髠髤髥髧髩髬髲髳髵髹髺髽髿",
		4
	],
	[
		"8feaa1",
		"鬄鬅鬈鬉鬋鬌鬍鬎鬐鬒鬖鬙鬛鬜鬠鬦鬫鬭鬳鬴鬵鬷鬹鬺鬽魈魋魌魕魖魗魛魞魡魣魥魦魨魪",
		4,
		"魳魵魷魸魹魿鮀鮄鮅鮆鮇鮉鮊鮋鮍鮏鮐鮔鮚鮝鮞鮦鮧鮩鮬鮰鮱鮲鮷鮸鮻鮼鮾鮿鯁鯇鯈鯎鯐鯗鯘鯝鯟鯥鯧鯪鯫鯯鯳鯷鯸"
	],
	[
		"8feba1",
		"鯹鯺鯽鯿鰀鰂鰋鰏鰑鰖鰘鰙鰚鰜鰞鰢鰣鰦",
		4,
		"鰱鰵鰶鰷鰽鱁鱃鱄鱅鱉鱊鱎鱏鱐鱓鱔鱖鱘鱛鱝鱞鱟鱣鱩鱪鱜鱫鱨鱮鱰鱲鱵鱷鱻鳦鳲鳷鳹鴋鴂鴑鴗鴘鴜鴝鴞鴯鴰鴲鴳鴴鴺鴼鵅鴽鵂鵃鵇鵊鵓鵔鵟鵣鵢鵥鵩鵪鵫鵰鵶鵷鵻"
	],
	[
		"8feca1",
		"鵼鵾鶃鶄鶆鶊鶍鶎鶒鶓鶕鶖鶗鶘鶡鶪鶬鶮鶱鶵鶹鶼鶿鷃鷇鷉鷊鷔鷕鷖鷗鷚鷞鷟鷠鷥鷧鷩鷫鷮鷰鷳鷴鷾鸊鸂鸇鸎鸐鸑鸒鸕鸖鸙鸜鸝鹺鹻鹼麀麂麃麄麅麇麎麏麖麘麛麞麤麨麬麮麯麰麳麴麵黆黈黋黕黟黤黧黬黭黮黰黱黲黵"
	],
	[
		"8feda1",
		"黸黿鼂鼃鼉鼏鼐鼑鼒鼔鼖鼗鼙鼚鼛鼟鼢鼦鼪鼫鼯鼱鼲鼴鼷鼹鼺鼼鼽鼿齁齃",
		4,
		"齓齕齖齗齘齚齝齞齨齩齭",
		4,
		"齳齵齺齽龏龐龑龒龔龖龗龞龡龢龣龥"
	]
];

var require$$2 = [
	[
		"0",
		"\u0000",
		127,
		"€"
	],
	[
		"8140",
		"丂丄丅丆丏丒丗丟丠両丣並丩丮丯丱丳丵丷丼乀乁乂乄乆乊乑乕乗乚乛乢乣乤乥乧乨乪",
		5,
		"乲乴",
		9,
		"乿",
		6,
		"亇亊"
	],
	[
		"8180",
		"亐亖亗亙亜亝亞亣亪亯亰亱亴亶亷亸亹亼亽亾仈仌仏仐仒仚仛仜仠仢仦仧仩仭仮仯仱仴仸仹仺仼仾伀伂",
		6,
		"伋伌伒",
		4,
		"伜伝伡伣伨伩伬伭伮伱伳伵伷伹伻伾",
		4,
		"佄佅佇",
		5,
		"佒佔佖佡佢佦佨佪佫佭佮佱佲併佷佸佹佺佽侀侁侂侅來侇侊侌侎侐侒侓侕侖侘侙侚侜侞侟価侢"
	],
	[
		"8240",
		"侤侫侭侰",
		4,
		"侶",
		8,
		"俀俁係俆俇俈俉俋俌俍俒",
		4,
		"俙俛俠俢俤俥俧俫俬俰俲俴俵俶俷俹俻俼俽俿",
		11
	],
	[
		"8280",
		"個倎倐們倓倕倖倗倛倝倞倠倢倣値倧倫倯",
		10,
		"倻倽倿偀偁偂偄偅偆偉偊偋偍偐",
		4,
		"偖偗偘偙偛偝",
		7,
		"偦",
		5,
		"偭",
		8,
		"偸偹偺偼偽傁傂傃傄傆傇傉傊傋傌傎",
		20,
		"傤傦傪傫傭",
		4,
		"傳",
		6,
		"傼"
	],
	[
		"8340",
		"傽",
		17,
		"僐",
		5,
		"僗僘僙僛",
		10,
		"僨僩僪僫僯僰僱僲僴僶",
		4,
		"僼",
		9,
		"儈"
	],
	[
		"8380",
		"儉儊儌",
		5,
		"儓",
		13,
		"儢",
		28,
		"兂兇兊兌兎兏児兒兓兗兘兙兛兝",
		4,
		"兣兤兦內兩兪兯兲兺兾兿冃冄円冇冊冋冎冏冐冑冓冔冘冚冝冞冟冡冣冦",
		4,
		"冭冮冴冸冹冺冾冿凁凂凃凅凈凊凍凎凐凒",
		5
	],
	[
		"8440",
		"凘凙凚凜凞凟凢凣凥",
		5,
		"凬凮凱凲凴凷凾刄刅刉刋刌刏刐刓刔刕刜刞刟刡刢刣別刦刧刪刬刯刱刲刴刵刼刾剄",
		5,
		"剋剎剏剒剓剕剗剘"
	],
	[
		"8480",
		"剙剚剛剝剟剠剢剣剤剦剨剫剬剭剮剰剱剳",
		9,
		"剾劀劃",
		4,
		"劉",
		6,
		"劑劒劔",
		6,
		"劜劤劥劦劧劮劯劰労",
		9,
		"勀勁勂勄勅勆勈勊勌勍勎勏勑勓勔動勗務",
		5,
		"勠勡勢勣勥",
		10,
		"勱",
		7,
		"勻勼勽匁匂匃匄匇匉匊匋匌匎"
	],
	[
		"8540",
		"匑匒匓匔匘匛匜匞匟匢匤匥匧匨匩匫匬匭匯",
		9,
		"匼匽區卂卄卆卋卌卍卐協単卙卛卝卥卨卪卬卭卲卶卹卻卼卽卾厀厁厃厇厈厊厎厏"
	],
	[
		"8580",
		"厐",
		4,
		"厖厗厙厛厜厞厠厡厤厧厪厫厬厭厯",
		6,
		"厷厸厹厺厼厽厾叀參",
		4,
		"収叏叐叒叓叕叚叜叝叞叡叢叧叴叺叾叿吀吂吅吇吋吔吘吙吚吜吢吤吥吪吰吳吶吷吺吽吿呁呂呄呅呇呉呌呍呎呏呑呚呝",
		4,
		"呣呥呧呩",
		7,
		"呴呹呺呾呿咁咃咅咇咈咉咊咍咑咓咗咘咜咞咟咠咡"
	],
	[
		"8640",
		"咢咥咮咰咲咵咶咷咹咺咼咾哃哅哊哋哖哘哛哠",
		4,
		"哫哬哯哰哱哴",
		5,
		"哻哾唀唂唃唄唅唈唊",
		4,
		"唒唓唕",
		5,
		"唜唝唞唟唡唥唦"
	],
	[
		"8680",
		"唨唩唫唭唲唴唵唶唸唹唺唻唽啀啂啅啇啈啋",
		4,
		"啑啒啓啔啗",
		4,
		"啝啞啟啠啢啣啨啩啫啯",
		5,
		"啹啺啽啿喅喆喌喍喎喐喒喓喕喖喗喚喛喞喠",
		6,
		"喨",
		8,
		"喲喴営喸喺喼喿",
		4,
		"嗆嗇嗈嗊嗋嗎嗏嗐嗕嗗",
		4,
		"嗞嗠嗢嗧嗩嗭嗮嗰嗱嗴嗶嗸",
		4,
		"嗿嘂嘃嘄嘅"
	],
	[
		"8740",
		"嘆嘇嘊嘋嘍嘐",
		7,
		"嘙嘚嘜嘝嘠嘡嘢嘥嘦嘨嘩嘪嘫嘮嘯嘰嘳嘵嘷嘸嘺嘼嘽嘾噀",
		11,
		"噏",
		4,
		"噕噖噚噛噝",
		4
	],
	[
		"8780",
		"噣噥噦噧噭噮噯噰噲噳噴噵噷噸噹噺噽",
		7,
		"嚇",
		6,
		"嚐嚑嚒嚔",
		14,
		"嚤",
		10,
		"嚰",
		6,
		"嚸嚹嚺嚻嚽",
		12,
		"囋",
		8,
		"囕囖囘囙囜団囥",
		5,
		"囬囮囯囲図囶囷囸囻囼圀圁圂圅圇國",
		6
	],
	[
		"8840",
		"園",
		9,
		"圝圞圠圡圢圤圥圦圧圫圱圲圴",
		4,
		"圼圽圿坁坃坄坅坆坈坉坋坒",
		4,
		"坘坙坢坣坥坧坬坮坰坱坲坴坵坸坹坺坽坾坿垀"
	],
	[
		"8880",
		"垁垇垈垉垊垍",
		4,
		"垔",
		6,
		"垜垝垞垟垥垨垪垬垯垰垱垳垵垶垷垹",
		8,
		"埄",
		6,
		"埌埍埐埑埓埖埗埛埜埞埡埢埣埥",
		7,
		"埮埰埱埲埳埵埶執埻埼埾埿堁堃堄堅堈堉堊堌堎堏堐堒堓堔堖堗堘堚堛堜堝堟堢堣堥",
		4,
		"堫",
		4,
		"報堲堳場堶",
		7
	],
	[
		"8940",
		"堾",
		5,
		"塅",
		6,
		"塎塏塐塒塓塕塖塗塙",
		4,
		"塟",
		5,
		"塦",
		4,
		"塭",
		16,
		"塿墂墄墆墇墈墊墋墌"
	],
	[
		"8980",
		"墍",
		4,
		"墔",
		4,
		"墛墜墝墠",
		7,
		"墪",
		17,
		"墽墾墿壀壂壃壄壆",
		10,
		"壒壓壔壖",
		13,
		"壥",
		5,
		"壭壯壱売壴壵壷壸壺",
		7,
		"夃夅夆夈",
		4,
		"夎夐夑夒夓夗夘夛夝夞夠夡夢夣夦夨夬夰夲夳夵夶夻"
	],
	[
		"8a40",
		"夽夾夿奀奃奅奆奊奌奍奐奒奓奙奛",
		4,
		"奡奣奤奦",
		12,
		"奵奷奺奻奼奾奿妀妅妉妋妌妎妏妐妑妔妕妘妚妛妜妝妟妠妡妢妦"
	],
	[
		"8a80",
		"妧妬妭妰妱妳",
		5,
		"妺妼妽妿",
		6,
		"姇姈姉姌姍姎姏姕姖姙姛姞",
		4,
		"姤姦姧姩姪姫姭",
		11,
		"姺姼姽姾娀娂娊娋娍娎娏娐娒娔娕娖娗娙娚娛娝娞娡娢娤娦娧娨娪",
		6,
		"娳娵娷",
		4,
		"娽娾娿婁",
		4,
		"婇婈婋",
		9,
		"婖婗婘婙婛",
		5
	],
	[
		"8b40",
		"婡婣婤婥婦婨婩婫",
		8,
		"婸婹婻婼婽婾媀",
		17,
		"媓",
		6,
		"媜",
		13,
		"媫媬"
	],
	[
		"8b80",
		"媭",
		4,
		"媴媶媷媹",
		4,
		"媿嫀嫃",
		5,
		"嫊嫋嫍",
		4,
		"嫓嫕嫗嫙嫚嫛嫝嫞嫟嫢嫤嫥嫧嫨嫪嫬",
		4,
		"嫲",
		22,
		"嬊",
		11,
		"嬘",
		25,
		"嬳嬵嬶嬸",
		7,
		"孁",
		6
	],
	[
		"8c40",
		"孈",
		7,
		"孒孖孞孠孡孧孨孫孭孮孯孲孴孶孷學孹孻孼孾孿宂宆宊宍宎宐宑宒宔宖実宧宨宩宬宭宮宯宱宲宷宺宻宼寀寁寃寈寉寊寋寍寎寏"
	],
	[
		"8c80",
		"寑寔",
		8,
		"寠寢寣實寧審",
		4,
		"寯寱",
		6,
		"寽対尀専尃尅將專尋尌對導尐尒尓尗尙尛尞尟尠尡尣尦尨尩尪尫尭尮尯尰尲尳尵尶尷屃屄屆屇屌屍屒屓屔屖屗屘屚屛屜屝屟屢層屧",
		6,
		"屰屲",
		6,
		"屻屼屽屾岀岃",
		4,
		"岉岊岋岎岏岒岓岕岝",
		4,
		"岤",
		4
	],
	[
		"8d40",
		"岪岮岯岰岲岴岶岹岺岻岼岾峀峂峃峅",
		5,
		"峌",
		5,
		"峓",
		5,
		"峚",
		6,
		"峢峣峧峩峫峬峮峯峱",
		9,
		"峼",
		4
	],
	[
		"8d80",
		"崁崄崅崈",
		5,
		"崏",
		4,
		"崕崗崘崙崚崜崝崟",
		4,
		"崥崨崪崫崬崯",
		4,
		"崵",
		7,
		"崿",
		7,
		"嵈嵉嵍",
		10,
		"嵙嵚嵜嵞",
		10,
		"嵪嵭嵮嵰嵱嵲嵳嵵",
		12,
		"嶃",
		21,
		"嶚嶛嶜嶞嶟嶠"
	],
	[
		"8e40",
		"嶡",
		21,
		"嶸",
		12,
		"巆",
		6,
		"巎",
		12,
		"巜巟巠巣巤巪巬巭"
	],
	[
		"8e80",
		"巰巵巶巸",
		4,
		"巿帀帄帇帉帊帋帍帎帒帓帗帞",
		7,
		"帨",
		4,
		"帯帰帲",
		4,
		"帹帺帾帿幀幁幃幆",
		5,
		"幍",
		6,
		"幖",
		4,
		"幜幝幟幠幣",
		14,
		"幵幷幹幾庁庂広庅庈庉庌庍庎庒庘庛庝庡庢庣庤庨",
		4,
		"庮",
		4,
		"庴庺庻庼庽庿",
		6
	],
	[
		"8f40",
		"廆廇廈廋",
		5,
		"廔廕廗廘廙廚廜",
		11,
		"廩廫",
		8,
		"廵廸廹廻廼廽弅弆弇弉弌弍弎弐弒弔弖弙弚弜弝弞弡弢弣弤"
	],
	[
		"8f80",
		"弨弫弬弮弰弲",
		6,
		"弻弽弾弿彁",
		14,
		"彑彔彙彚彛彜彞彟彠彣彥彧彨彫彮彯彲彴彵彶彸彺彽彾彿徃徆徍徎徏徑従徔徖徚徛徝從徟徠徢",
		5,
		"復徫徬徯",
		5,
		"徶徸徹徺徻徾",
		4,
		"忇忈忊忋忎忓忔忕忚忛応忞忟忢忣忥忦忨忩忬忯忰忲忳忴忶忷忹忺忼怇"
	],
	[
		"9040",
		"怈怉怋怌怐怑怓怗怘怚怞怟怢怣怤怬怭怮怰",
		4,
		"怶",
		4,
		"怽怾恀恄",
		6,
		"恌恎恏恑恓恔恖恗恘恛恜恞恟恠恡恥恦恮恱恲恴恵恷恾悀"
	],
	[
		"9080",
		"悁悂悅悆悇悈悊悋悎悏悐悑悓悕悗悘悙悜悞悡悢悤悥悧悩悪悮悰悳悵悶悷悹悺悽",
		7,
		"惇惈惉惌",
		4,
		"惒惓惔惖惗惙惛惞惡",
		4,
		"惪惱惲惵惷惸惻",
		4,
		"愂愃愄愅愇愊愋愌愐",
		4,
		"愖愗愘愙愛愜愝愞愡愢愥愨愩愪愬",
		18,
		"慀",
		6
	],
	[
		"9140",
		"慇慉態慍慏慐慒慓慔慖",
		6,
		"慞慟慠慡慣慤慥慦慩",
		6,
		"慱慲慳慴慶慸",
		18,
		"憌憍憏",
		4,
		"憕"
	],
	[
		"9180",
		"憖",
		6,
		"憞",
		8,
		"憪憫憭",
		9,
		"憸",
		5,
		"憿懀懁懃",
		4,
		"應懌",
		4,
		"懓懕",
		16,
		"懧",
		13,
		"懶",
		8,
		"戀",
		5,
		"戇戉戓戔戙戜戝戞戠戣戦戧戨戩戫戭戯戰戱戲戵戶戸",
		4,
		"扂扄扅扆扊"
	],
	[
		"9240",
		"扏扐払扖扗扙扚扜",
		6,
		"扤扥扨扱扲扴扵扷扸扺扻扽抁抂抃抅抆抇抈抋",
		5,
		"抔抙抜抝択抣抦抧抩抪抭抮抯抰抲抳抴抶抷抸抺抾拀拁"
	],
	[
		"9280",
		"拃拋拏拑拕拝拞拠拡拤拪拫拰拲拵拸拹拺拻挀挃挄挅挆挊挋挌挍挏挐挒挓挔挕挗挘挙挜挦挧挩挬挭挮挰挱挳",
		5,
		"挻挼挾挿捀捁捄捇捈捊捑捒捓捔捖",
		7,
		"捠捤捥捦捨捪捫捬捯捰捲捳捴捵捸捹捼捽捾捿掁掃掄掅掆掋掍掑掓掔掕掗掙",
		6,
		"採掤掦掫掯掱掲掵掶掹掻掽掿揀"
	],
	[
		"9340",
		"揁揂揃揅揇揈揊揋揌揑揓揔揕揗",
		6,
		"揟揢揤",
		4,
		"揫揬揮揯揰揱揳揵揷揹揺揻揼揾搃搄搆",
		4,
		"損搎搑搒搕",
		5,
		"搝搟搢搣搤"
	],
	[
		"9380",
		"搥搧搨搩搫搮",
		5,
		"搵",
		4,
		"搻搼搾摀摂摃摉摋",
		6,
		"摓摕摖摗摙",
		4,
		"摟",
		7,
		"摨摪摫摬摮",
		9,
		"摻",
		6,
		"撃撆撈",
		8,
		"撓撔撗撘撚撛撜撝撟",
		4,
		"撥撦撧撨撪撫撯撱撲撳撴撶撹撻撽撾撿擁擃擄擆",
		6,
		"擏擑擓擔擕擖擙據"
	],
	[
		"9440",
		"擛擜擝擟擠擡擣擥擧",
		24,
		"攁",
		7,
		"攊",
		7,
		"攓",
		4,
		"攙",
		8
	],
	[
		"9480",
		"攢攣攤攦",
		4,
		"攬攭攰攱攲攳攷攺攼攽敀",
		4,
		"敆敇敊敋敍敎敐敒敓敔敗敘敚敜敟敠敡敤敥敧敨敩敪敭敮敯敱敳敵敶數",
		14,
		"斈斉斊斍斎斏斒斔斕斖斘斚斝斞斠斢斣斦斨斪斬斮斱",
		7,
		"斺斻斾斿旀旂旇旈旉旊旍旐旑旓旔旕旘",
		7,
		"旡旣旤旪旫"
	],
	[
		"9540",
		"旲旳旴旵旸旹旻",
		4,
		"昁昄昅昇昈昉昋昍昐昑昒昖昗昘昚昛昜昞昡昢昣昤昦昩昪昫昬昮昰昲昳昷",
		4,
		"昽昿晀時晄",
		6,
		"晍晎晐晑晘"
	],
	[
		"9580",
		"晙晛晜晝晞晠晢晣晥晧晩",
		4,
		"晱晲晳晵晸晹晻晼晽晿暀暁暃暅暆暈暉暊暋暍暎暏暐暒暓暔暕暘",
		4,
		"暞",
		8,
		"暩",
		4,
		"暯",
		4,
		"暵暶暷暸暺暻暼暽暿",
		25,
		"曚曞",
		7,
		"曧曨曪",
		5,
		"曱曵曶書曺曻曽朁朂會"
	],
	[
		"9640",
		"朄朅朆朇朌朎朏朑朒朓朖朘朙朚朜朞朠",
		5,
		"朧朩朮朰朲朳朶朷朸朹朻朼朾朿杁杄杅杇杊杋杍杒杔杕杗",
		4,
		"杝杢杣杤杦杧杫杬杮東杴杶"
	],
	[
		"9680",
		"杸杹杺杻杽枀枂枃枅枆枈枊枌枍枎枏枑枒枓枔枖枙枛枟枠枡枤枦枩枬枮枱枲枴枹",
		7,
		"柂柅",
		9,
		"柕柖柗柛柟柡柣柤柦柧柨柪柫柭柮柲柵",
		7,
		"柾栁栂栃栄栆栍栐栒栔栕栘",
		4,
		"栞栟栠栢",
		6,
		"栫",
		6,
		"栴栵栶栺栻栿桇桋桍桏桒桖",
		5
	],
	[
		"9740",
		"桜桝桞桟桪桬",
		7,
		"桵桸",
		8,
		"梂梄梇",
		7,
		"梐梑梒梔梕梖梘",
		9,
		"梣梤梥梩梪梫梬梮梱梲梴梶梷梸"
	],
	[
		"9780",
		"梹",
		6,
		"棁棃",
		5,
		"棊棌棎棏棐棑棓棔棖棗棙棛",
		4,
		"棡棢棤",
		9,
		"棯棲棳棴棶棷棸棻棽棾棿椀椂椃椄椆",
		4,
		"椌椏椑椓",
		11,
		"椡椢椣椥",
		7,
		"椮椯椱椲椳椵椶椷椸椺椻椼椾楀楁楃",
		16,
		"楕楖楘楙楛楜楟"
	],
	[
		"9840",
		"楡楢楤楥楧楨楩楪楬業楯楰楲",
		4,
		"楺楻楽楾楿榁榃榅榊榋榌榎",
		5,
		"榖榗榙榚榝",
		9,
		"榩榪榬榮榯榰榲榳榵榶榸榹榺榼榽"
	],
	[
		"9880",
		"榾榿槀槂",
		7,
		"構槍槏槑槒槓槕",
		5,
		"槜槝槞槡",
		11,
		"槮槯槰槱槳",
		9,
		"槾樀",
		9,
		"樋",
		11,
		"標",
		5,
		"樠樢",
		5,
		"権樫樬樭樮樰樲樳樴樶",
		6,
		"樿",
		4,
		"橅橆橈",
		7,
		"橑",
		6,
		"橚"
	],
	[
		"9940",
		"橜",
		4,
		"橢橣橤橦",
		10,
		"橲",
		6,
		"橺橻橽橾橿檁檂檃檅",
		8,
		"檏檒",
		4,
		"檘",
		7,
		"檡",
		5
	],
	[
		"9980",
		"檧檨檪檭",
		114,
		"欥欦欨",
		6
	],
	[
		"9a40",
		"欯欰欱欳欴欵欶欸欻欼欽欿歀歁歂歄歅歈歊歋歍",
		11,
		"歚",
		7,
		"歨歩歫",
		13,
		"歺歽歾歿殀殅殈"
	],
	[
		"9a80",
		"殌殎殏殐殑殔殕殗殘殙殜",
		4,
		"殢",
		7,
		"殫",
		7,
		"殶殸",
		6,
		"毀毃毄毆",
		4,
		"毌毎毐毑毘毚毜",
		4,
		"毢",
		7,
		"毬毭毮毰毱毲毴毶毷毸毺毻毼毾",
		6,
		"氈",
		4,
		"氎氒気氜氝氞氠氣氥氫氬氭氱氳氶氷氹氺氻氼氾氿汃汄汅汈汋",
		4,
		"汑汒汓汖汘"
	],
	[
		"9b40",
		"汙汚汢汣汥汦汧汫",
		4,
		"汱汳汵汷汸決汻汼汿沀沄沇沊沋沍沎沑沒沕沖沗沘沚沜沝沞沠沢沨沬沯沰沴沵沶沷沺泀況泂泃泆泇泈泋泍泎泏泑泒泘"
	],
	[
		"9b80",
		"泙泚泜泝泟泤泦泧泩泬泭泲泴泹泿洀洂洃洅洆洈洉洊洍洏洐洑洓洔洕洖洘洜洝洟",
		5,
		"洦洨洩洬洭洯洰洴洶洷洸洺洿浀浂浄浉浌浐浕浖浗浘浛浝浟浡浢浤浥浧浨浫浬浭浰浱浲浳浵浶浹浺浻浽",
		4,
		"涃涄涆涇涊涋涍涏涐涒涖",
		4,
		"涜涢涥涬涭涰涱涳涴涶涷涹",
		5,
		"淁淂淃淈淉淊"
	],
	[
		"9c40",
		"淍淎淏淐淒淓淔淕淗淚淛淜淟淢淣淥淧淨淩淪淭淯淰淲淴淵淶淸淺淽",
		7,
		"渆渇済渉渋渏渒渓渕渘渙減渜渞渟渢渦渧渨渪測渮渰渱渳渵"
	],
	[
		"9c80",
		"渶渷渹渻",
		7,
		"湅",
		7,
		"湏湐湑湒湕湗湙湚湜湝湞湠",
		10,
		"湬湭湯",
		14,
		"満溁溂溄溇溈溊",
		4,
		"溑",
		6,
		"溙溚溛溝溞溠溡溣溤溦溨溩溫溬溭溮溰溳溵溸溹溼溾溿滀滃滄滅滆滈滉滊滌滍滎滐滒滖滘滙滛滜滝滣滧滪",
		5
	],
	[
		"9d40",
		"滰滱滲滳滵滶滷滸滺",
		7,
		"漃漄漅漇漈漊",
		4,
		"漐漑漒漖",
		9,
		"漡漢漣漥漦漧漨漬漮漰漲漴漵漷",
		6,
		"漿潀潁潂"
	],
	[
		"9d80",
		"潃潄潅潈潉潊潌潎",
		9,
		"潙潚潛潝潟潠潡潣潤潥潧",
		5,
		"潯潰潱潳潵潶潷潹潻潽",
		6,
		"澅澆澇澊澋澏",
		12,
		"澝澞澟澠澢",
		4,
		"澨",
		10,
		"澴澵澷澸澺",
		5,
		"濁濃",
		5,
		"濊",
		6,
		"濓",
		10,
		"濟濢濣濤濥"
	],
	[
		"9e40",
		"濦",
		7,
		"濰",
		32,
		"瀒",
		7,
		"瀜",
		6,
		"瀤",
		6
	],
	[
		"9e80",
		"瀫",
		9,
		"瀶瀷瀸瀺",
		17,
		"灍灎灐",
		13,
		"灟",
		11,
		"灮灱灲灳灴灷灹灺灻災炁炂炃炄炆炇炈炋炌炍炏炐炑炓炗炘炚炛炞",
		12,
		"炰炲炴炵炶為炾炿烄烅烆烇烉烋",
		12,
		"烚"
	],
	[
		"9f40",
		"烜烝烞烠烡烢烣烥烪烮烰",
		6,
		"烸烺烻烼烾",
		10,
		"焋",
		4,
		"焑焒焔焗焛",
		10,
		"焧",
		7,
		"焲焳焴"
	],
	[
		"9f80",
		"焵焷",
		13,
		"煆煇煈煉煋煍煏",
		12,
		"煝煟",
		4,
		"煥煩",
		4,
		"煯煰煱煴煵煶煷煹煻煼煾",
		5,
		"熅",
		4,
		"熋熌熍熎熐熑熒熓熕熖熗熚",
		4,
		"熡",
		6,
		"熩熪熫熭",
		5,
		"熴熶熷熸熺",
		8,
		"燄",
		9,
		"燏",
		4
	],
	[
		"a040",
		"燖",
		9,
		"燡燢燣燤燦燨",
		5,
		"燯",
		9,
		"燺",
		11,
		"爇",
		19
	],
	[
		"a080",
		"爛爜爞",
		9,
		"爩爫爭爮爯爲爳爴爺爼爾牀",
		6,
		"牉牊牋牎牏牐牑牓牔牕牗牘牚牜牞牠牣牤牥牨牪牫牬牭牰牱牳牴牶牷牸牻牼牽犂犃犅",
		4,
		"犌犎犐犑犓",
		11,
		"犠",
		11,
		"犮犱犲犳犵犺",
		6,
		"狅狆狇狉狊狋狌狏狑狓狔狕狖狘狚狛"
	],
	[
		"a1a1",
		"　、。·ˉˇ¨〃々—～‖…‘’“”〔〕〈",
		7,
		"〖〗【】±×÷∶∧∨∑∏∪∩∈∷√⊥∥∠⌒⊙∫∮≡≌≈∽∝≠≮≯≤≥∞∵∴♂♀°′″℃＄¤￠￡‰§№☆★○●◎◇◆□■△▲※→←↑↓〓"
	],
	[
		"a2a1",
		"ⅰ",
		9
	],
	[
		"a2b1",
		"⒈",
		19,
		"⑴",
		19,
		"①",
		9
	],
	[
		"a2e5",
		"㈠",
		9
	],
	[
		"a2f1",
		"Ⅰ",
		11
	],
	[
		"a3a1",
		"！＂＃￥％",
		88,
		"￣"
	],
	[
		"a4a1",
		"ぁ",
		82
	],
	[
		"a5a1",
		"ァ",
		85
	],
	[
		"a6a1",
		"Α",
		16,
		"Σ",
		6
	],
	[
		"a6c1",
		"α",
		16,
		"σ",
		6
	],
	[
		"a6e0",
		"︵︶︹︺︿﹀︽︾﹁﹂﹃﹄"
	],
	[
		"a6ee",
		"︻︼︷︸︱"
	],
	[
		"a6f4",
		"︳︴"
	],
	[
		"a7a1",
		"А",
		5,
		"ЁЖ",
		25
	],
	[
		"a7d1",
		"а",
		5,
		"ёж",
		25
	],
	[
		"a840",
		"ˊˋ˙–―‥‵℅℉↖↗↘↙∕∟∣≒≦≧⊿═",
		35,
		"▁",
		6
	],
	[
		"a880",
		"█",
		7,
		"▓▔▕▼▽◢◣◤◥☉⊕〒〝〞"
	],
	[
		"a8a1",
		"āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜüêɑ"
	],
	[
		"a8bd",
		"ńň"
	],
	[
		"a8c0",
		"ɡ"
	],
	[
		"a8c5",
		"ㄅ",
		36
	],
	[
		"a940",
		"〡",
		8,
		"㊣㎎㎏㎜㎝㎞㎡㏄㏎㏑㏒㏕︰￢￤"
	],
	[
		"a959",
		"℡㈱"
	],
	[
		"a95c",
		"‐"
	],
	[
		"a960",
		"ー゛゜ヽヾ〆ゝゞ﹉",
		9,
		"﹔﹕﹖﹗﹙",
		8
	],
	[
		"a980",
		"﹢",
		4,
		"﹨﹩﹪﹫"
	],
	[
		"a996",
		"〇"
	],
	[
		"a9a4",
		"─",
		75
	],
	[
		"aa40",
		"狜狝狟狢",
		5,
		"狪狫狵狶狹狽狾狿猀猂猄",
		5,
		"猋猌猍猏猐猑猒猔猘猙猚猟猠猣猤猦猧猨猭猯猰猲猳猵猶猺猻猼猽獀",
		8
	],
	[
		"aa80",
		"獉獊獋獌獎獏獑獓獔獕獖獘",
		7,
		"獡",
		10,
		"獮獰獱"
	],
	[
		"ab40",
		"獲",
		11,
		"獿",
		4,
		"玅玆玈玊玌玍玏玐玒玓玔玕玗玘玙玚玜玝玞玠玡玣",
		5,
		"玪玬玭玱玴玵玶玸玹玼玽玾玿珁珃",
		4
	],
	[
		"ab80",
		"珋珌珎珒",
		6,
		"珚珛珜珝珟珡珢珣珤珦珨珪珫珬珮珯珰珱珳",
		4
	],
	[
		"ac40",
		"珸",
		10,
		"琄琇琈琋琌琍琎琑",
		8,
		"琜",
		5,
		"琣琤琧琩琫琭琯琱琲琷",
		4,
		"琽琾琿瑀瑂",
		11
	],
	[
		"ac80",
		"瑎",
		6,
		"瑖瑘瑝瑠",
		12,
		"瑮瑯瑱",
		4,
		"瑸瑹瑺"
	],
	[
		"ad40",
		"瑻瑼瑽瑿璂璄璅璆璈璉璊璌璍璏璑",
		10,
		"璝璟",
		7,
		"璪",
		15,
		"璻",
		12
	],
	[
		"ad80",
		"瓈",
		9,
		"瓓",
		8,
		"瓝瓟瓡瓥瓧",
		6,
		"瓰瓱瓲"
	],
	[
		"ae40",
		"瓳瓵瓸",
		6,
		"甀甁甂甃甅",
		7,
		"甎甐甒甔甕甖甗甛甝甞甠",
		4,
		"甦甧甪甮甴甶甹甼甽甿畁畂畃畄畆畇畉畊畍畐畑畒畓畕畖畗畘"
	],
	[
		"ae80",
		"畝",
		7,
		"畧畨畩畫",
		6,
		"畳畵當畷畺",
		4,
		"疀疁疂疄疅疇"
	],
	[
		"af40",
		"疈疉疊疌疍疎疐疓疕疘疛疜疞疢疦",
		4,
		"疭疶疷疺疻疿痀痁痆痋痌痎痏痐痑痓痗痙痚痜痝痟痠痡痥痩痬痭痮痯痲痳痵痶痷痸痺痻痽痾瘂瘄瘆瘇"
	],
	[
		"af80",
		"瘈瘉瘋瘍瘎瘏瘑瘒瘓瘔瘖瘚瘜瘝瘞瘡瘣瘧瘨瘬瘮瘯瘱瘲瘶瘷瘹瘺瘻瘽癁療癄"
	],
	[
		"b040",
		"癅",
		6,
		"癎",
		5,
		"癕癗",
		4,
		"癝癟癠癡癢癤",
		6,
		"癬癭癮癰",
		7,
		"癹発發癿皀皁皃皅皉皊皌皍皏皐皒皔皕皗皘皚皛"
	],
	[
		"b080",
		"皜",
		7,
		"皥",
		8,
		"皯皰皳皵",
		9,
		"盀盁盃啊阿埃挨哎唉哀皑癌蔼矮艾碍爱隘鞍氨安俺按暗岸胺案肮昂盎凹敖熬翱袄傲奥懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸白柏百摆佰败拜稗斑班搬扳般颁板版扮拌伴瓣半办绊邦帮梆榜膀绑棒磅蚌镑傍谤苞胞包褒剥"
	],
	[
		"b140",
		"盄盇盉盋盌盓盕盙盚盜盝盞盠",
		4,
		"盦",
		7,
		"盰盳盵盶盷盺盻盽盿眀眂眃眅眆眊県眎",
		10,
		"眛眜眝眞眡眣眤眥眧眪眫"
	],
	[
		"b180",
		"眬眮眰",
		4,
		"眹眻眽眾眿睂睄睅睆睈",
		7,
		"睒",
		7,
		"睜薄雹保堡饱宝抱报暴豹鲍爆杯碑悲卑北辈背贝钡倍狈备惫焙被奔苯本笨崩绷甭泵蹦迸逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛鞭边编贬扁便变卞辨辩辫遍标彪膘表鳖憋别瘪彬斌濒滨宾摈兵冰柄丙秉饼炳"
	],
	[
		"b240",
		"睝睞睟睠睤睧睩睪睭",
		11,
		"睺睻睼瞁瞂瞃瞆",
		5,
		"瞏瞐瞓",
		11,
		"瞡瞣瞤瞦瞨瞫瞭瞮瞯瞱瞲瞴瞶",
		4
	],
	[
		"b280",
		"瞼瞾矀",
		12,
		"矎",
		8,
		"矘矙矚矝",
		4,
		"矤病并玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳捕卜哺补埠不布步簿部怖擦猜裁材才财睬踩采彩菜蔡餐参蚕残惭惨灿苍舱仓沧藏操糙槽曹草厕策侧册测层蹭插叉茬茶查碴搽察岔差诧拆柴豺搀掺蝉馋谗缠铲产阐颤昌猖"
	],
	[
		"b340",
		"矦矨矪矯矰矱矲矴矵矷矹矺矻矼砃",
		5,
		"砊砋砎砏砐砓砕砙砛砞砠砡砢砤砨砪砫砮砯砱砲砳砵砶砽砿硁硂硃硄硆硈硉硊硋硍硏硑硓硔硘硙硚"
	],
	[
		"b380",
		"硛硜硞",
		11,
		"硯",
		7,
		"硸硹硺硻硽",
		6,
		"场尝常长偿肠厂敞畅唱倡超抄钞朝嘲潮巢吵炒车扯撤掣彻澈郴臣辰尘晨忱沉陈趁衬撑称城橙成呈乘程惩澄诚承逞骋秤吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽充冲虫崇宠抽酬畴踌稠愁筹仇绸瞅丑臭初出橱厨躇锄雏滁除楚"
	],
	[
		"b440",
		"碄碅碆碈碊碋碏碐碒碔碕碖碙碝碞碠碢碤碦碨",
		7,
		"碵碶碷碸確碻碼碽碿磀磂磃磄磆磇磈磌磍磎磏磑磒磓磖磗磘磚",
		9
	],
	[
		"b480",
		"磤磥磦磧磩磪磫磭",
		4,
		"磳磵磶磸磹磻",
		5,
		"礂礃礄礆",
		6,
		"础储矗搐触处揣川穿椽传船喘串疮窗幢床闯创吹炊捶锤垂春椿醇唇淳纯蠢戳绰疵茨磁雌辞慈瓷词此刺赐次聪葱囱匆从丛凑粗醋簇促蹿篡窜摧崔催脆瘁粹淬翠村存寸磋撮搓措挫错搭达答瘩打大呆歹傣戴带殆代贷袋待逮"
	],
	[
		"b540",
		"礍",
		5,
		"礔",
		9,
		"礟",
		4,
		"礥",
		14,
		"礵",
		4,
		"礽礿祂祃祄祅祇祊",
		8,
		"祔祕祘祙祡祣"
	],
	[
		"b580",
		"祤祦祩祪祫祬祮祰",
		6,
		"祹祻",
		4,
		"禂禃禆禇禈禉禋禌禍禎禐禑禒怠耽担丹单郸掸胆旦氮但惮淡诞弹蛋当挡党荡档刀捣蹈倒岛祷导到稻悼道盗德得的蹬灯登等瞪凳邓堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔颠掂滇碘点典靛垫电佃甸店惦奠淀殿碉叼雕凋刁掉吊钓调跌爹碟蝶迭谍叠"
	],
	[
		"b640",
		"禓",
		6,
		"禛",
		11,
		"禨",
		10,
		"禴",
		4,
		"禼禿秂秄秅秇秈秊秌秎秏秐秓秔秖秗秙",
		5,
		"秠秡秢秥秨秪"
	],
	[
		"b680",
		"秬秮秱",
		6,
		"秹秺秼秾秿稁稄稅稇稈稉稊稌稏",
		4,
		"稕稖稘稙稛稜丁盯叮钉顶鼎锭定订丢东冬董懂动栋侗恫冻洞兜抖斗陡豆逗痘都督毒犊独读堵睹赌杜镀肚度渡妒端短锻段断缎堆兑队对墩吨蹲敦顿囤钝盾遁掇哆多夺垛躲朵跺舵剁惰堕蛾峨鹅俄额讹娥恶厄扼遏鄂饿恩而儿耳尔饵洱二"
	],
	[
		"b740",
		"稝稟稡稢稤",
		14,
		"稴稵稶稸稺稾穀",
		5,
		"穇",
		9,
		"穒",
		4,
		"穘",
		16
	],
	[
		"b780",
		"穩",
		6,
		"穱穲穳穵穻穼穽穾窂窅窇窉窊窋窌窎窏窐窓窔窙窚窛窞窡窢贰发罚筏伐乏阀法珐藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛坊芳方肪房防妨仿访纺放菲非啡飞肥匪诽吠肺废沸费芬酚吩氛分纷坟焚汾粉奋份忿愤粪丰封枫蜂峰锋风疯烽逢冯缝讽奉凤佛否夫敷肤孵扶拂辐幅氟符伏俘服"
	],
	[
		"b840",
		"窣窤窧窩窪窫窮",
		4,
		"窴",
		10,
		"竀",
		10,
		"竌",
		9,
		"竗竘竚竛竜竝竡竢竤竧",
		5,
		"竮竰竱竲竳"
	],
	[
		"b880",
		"竴",
		4,
		"竻竼竾笀笁笂笅笇笉笌笍笎笐笒笓笖笗笘笚笜笝笟笡笢笣笧笩笭浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐噶嘎该改概钙盖溉干甘杆柑竿肝赶感秆敢赣冈刚钢缸肛纲岗港杠篙皋高膏羔糕搞镐稿告哥歌搁戈鸽胳疙割革葛格蛤阁隔铬个各给根跟耕更庚羹"
	],
	[
		"b940",
		"笯笰笲笴笵笶笷笹笻笽笿",
		5,
		"筆筈筊筍筎筓筕筗筙筜筞筟筡筣",
		10,
		"筯筰筳筴筶筸筺筼筽筿箁箂箃箄箆",
		6,
		"箎箏"
	],
	[
		"b980",
		"箑箒箓箖箘箙箚箛箞箟箠箣箤箥箮箯箰箲箳箵箶箷箹",
		7,
		"篂篃範埂耿梗工攻功恭龚供躬公宫弓巩汞拱贡共钩勾沟苟狗垢构购够辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇刮瓜剐寡挂褂乖拐怪棺关官冠观管馆罐惯灌贯光广逛瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽辊滚棍锅郭国果裹过哈"
	],
	[
		"ba40",
		"篅篈築篊篋篍篎篏篐篒篔",
		4,
		"篛篜篞篟篠篢篣篤篧篨篩篫篬篭篯篰篲",
		4,
		"篸篹篺篻篽篿",
		7,
		"簈簉簊簍簎簐",
		5,
		"簗簘簙"
	],
	[
		"ba80",
		"簚",
		4,
		"簠",
		5,
		"簨簩簫",
		12,
		"簹",
		5,
		"籂骸孩海氦亥害骇酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉夯杭航壕嚎豪毫郝好耗号浩呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺嘿黑痕很狠恨哼亨横衡恒轰哄烘虹鸿洪宏弘红喉侯猴吼厚候后呼乎忽瑚壶葫胡蝴狐糊湖"
	],
	[
		"bb40",
		"籃",
		9,
		"籎",
		36,
		"籵",
		5,
		"籾",
		9
	],
	[
		"bb80",
		"粈粊",
		6,
		"粓粔粖粙粚粛粠粡粣粦粧粨粩粫粬粭粯粰粴",
		4,
		"粺粻弧虎唬护互沪户花哗华猾滑画划化话槐徊怀淮坏欢环桓还缓换患唤痪豢焕涣宦幻荒慌黄磺蝗簧皇凰惶煌晃幌恍谎灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘荤昏婚魂浑混豁活伙火获或惑霍货祸击圾基机畸稽积箕"
	],
	[
		"bc40",
		"粿糀糂糃糄糆糉糋糎",
		6,
		"糘糚糛糝糞糡",
		6,
		"糩",
		5,
		"糰",
		7,
		"糹糺糼",
		13,
		"紋",
		5
	],
	[
		"bc80",
		"紑",
		14,
		"紡紣紤紥紦紨紩紪紬紭紮細",
		6,
		"肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件"
	],
	[
		"bd40",
		"紷",
		54,
		"絯",
		7
	],
	[
		"bd80",
		"絸",
		32,
		"健舰剑饯渐溅涧建僵姜将浆江疆蒋桨奖讲匠酱降蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫窖揭接皆秸街阶截劫节桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸"
	],
	[
		"be40",
		"継",
		12,
		"綧",
		6,
		"綯",
		42
	],
	[
		"be80",
		"線",
		32,
		"尽劲荆兢茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净炯窘揪究纠玖韭久灸九酒厩救旧臼舅咎就疚鞠拘狙疽居驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧捐鹃娟倦眷卷绢撅攫抉掘倔爵觉决诀绝均菌钧军君峻"
	],
	[
		"bf40",
		"緻",
		62
	],
	[
		"bf80",
		"縺縼",
		4,
		"繂",
		4,
		"繈",
		21,
		"俊竣浚郡骏喀咖卡咯开揩楷凯慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕颗科壳咳可渴克刻客课肯啃垦恳坑吭空恐孔控抠口扣寇枯哭窟苦酷库裤夸垮挎跨胯块筷侩快宽款匡筐狂框矿眶旷况亏盔岿窥葵奎魁傀"
	],
	[
		"c040",
		"繞",
		35,
		"纃",
		23,
		"纜纝纞"
	],
	[
		"c080",
		"纮纴纻纼绖绤绬绹缊缐缞缷缹缻",
		6,
		"罃罆",
		9,
		"罒罓馈愧溃坤昆捆困括扩廓阔垃拉喇蜡腊辣啦莱来赖蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥琅榔狼廊郎朗浪捞劳牢老佬姥酪烙涝勒乐雷镭蕾磊累儡垒擂肋类泪棱楞冷厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐"
	],
	[
		"c140",
		"罖罙罛罜罝罞罠罣",
		4,
		"罫罬罭罯罰罳罵罶罷罸罺罻罼罽罿羀羂",
		7,
		"羋羍羏",
		4,
		"羕",
		4,
		"羛羜羠羢羣羥羦羨",
		6,
		"羱"
	],
	[
		"c180",
		"羳",
		4,
		"羺羻羾翀翂翃翄翆翇翈翉翋翍翏",
		4,
		"翖翗翙",
		5,
		"翢翣痢立粒沥隶力璃哩俩联莲连镰廉怜涟帘敛脸链恋炼练粮凉梁粱良两辆量晾亮谅撩聊僚疗燎寥辽潦了撂镣廖料列裂烈劣猎琳林磷霖临邻鳞淋凛赁吝拎玲菱零龄铃伶羚凌灵陵岭领另令溜琉榴硫馏留刘瘤流柳六龙聋咙笼窿"
	],
	[
		"c240",
		"翤翧翨翪翫翬翭翯翲翴",
		6,
		"翽翾翿耂耇耈耉耊耎耏耑耓耚耛耝耞耟耡耣耤耫",
		5,
		"耲耴耹耺耼耾聀聁聄聅聇聈聉聎聏聐聑聓聕聖聗"
	],
	[
		"c280",
		"聙聛",
		13,
		"聫",
		5,
		"聲",
		11,
		"隆垄拢陇楼娄搂篓漏陋芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮驴吕铝侣旅履屡缕虑氯律率滤绿峦挛孪滦卵乱掠略抡轮伦仑沦纶论萝螺罗逻锣箩骡裸落洛骆络妈麻玛码蚂马骂嘛吗埋买麦卖迈脉瞒馒蛮满蔓曼慢漫"
	],
	[
		"c340",
		"聾肁肂肅肈肊肍",
		5,
		"肔肕肗肙肞肣肦肧肨肬肰肳肵肶肸肹肻胅胇",
		4,
		"胏",
		6,
		"胘胟胠胢胣胦胮胵胷胹胻胾胿脀脁脃脄脅脇脈脋"
	],
	[
		"c380",
		"脌脕脗脙脛脜脝脟",
		12,
		"脭脮脰脳脴脵脷脹",
		4,
		"脿谩芒茫盲氓忙莽猫茅锚毛矛铆卯茂冒帽貌贸么玫枚梅酶霉煤没眉媒镁每美昧寐妹媚门闷们萌蒙檬盟锰猛梦孟眯醚靡糜迷谜弥米秘觅泌蜜密幂棉眠绵冕免勉娩缅面苗描瞄藐秒渺庙妙蔑灭民抿皿敏悯闽明螟鸣铭名命谬摸"
	],
	[
		"c440",
		"腀",
		5,
		"腇腉腍腎腏腒腖腗腘腛",
		4,
		"腡腢腣腤腦腨腪腫腬腯腲腳腵腶腷腸膁膃",
		4,
		"膉膋膌膍膎膐膒",
		5,
		"膙膚膞",
		4,
		"膤膥"
	],
	[
		"c480",
		"膧膩膫",
		7,
		"膴",
		5,
		"膼膽膾膿臄臅臇臈臉臋臍",
		6,
		"摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谋牟某拇牡亩姆母墓暮幕募慕木目睦牧穆拿哪呐钠那娜纳氖乃奶耐奈南男难囊挠脑恼闹淖呢馁内嫩能妮霓倪泥尼拟你匿腻逆溺蔫拈年碾撵捻念娘酿鸟尿捏聂孽啮镊镍涅您柠狞凝宁"
	],
	[
		"c540",
		"臔",
		14,
		"臤臥臦臨臩臫臮",
		4,
		"臵",
		5,
		"臽臿舃與",
		4,
		"舎舏舑舓舕",
		5,
		"舝舠舤舥舦舧舩舮舲舺舼舽舿"
	],
	[
		"c580",
		"艀艁艂艃艅艆艈艊艌艍艎艐",
		7,
		"艙艛艜艝艞艠",
		7,
		"艩拧泞牛扭钮纽脓浓农弄奴努怒女暖虐疟挪懦糯诺哦欧鸥殴藕呕偶沤啪趴爬帕怕琶拍排牌徘湃派攀潘盘磐盼畔判叛乓庞旁耪胖抛咆刨炮袍跑泡呸胚培裴赔陪配佩沛喷盆砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯砒霹批披劈琵毗"
	],
	[
		"c640",
		"艪艫艬艭艱艵艶艷艸艻艼芀芁芃芅芆芇芉芌芐芓芔芕芖芚芛芞芠芢芣芧芲芵芶芺芻芼芿苀苂苃苅苆苉苐苖苙苚苝苢苧苨苩苪苬苭苮苰苲苳苵苶苸"
	],
	[
		"c680",
		"苺苼",
		4,
		"茊茋茍茐茒茓茖茘茙茝",
		9,
		"茩茪茮茰茲茷茻茽啤脾疲皮匹痞僻屁譬篇偏片骗飘漂瓢票撇瞥拼频贫品聘乒坪苹萍平凭瓶评屏坡泼颇婆破魄迫粕剖扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫掐"
	],
	[
		"c740",
		"茾茿荁荂荄荅荈荊",
		4,
		"荓荕",
		4,
		"荝荢荰",
		6,
		"荹荺荾",
		6,
		"莇莈莊莋莌莍莏莐莑莔莕莖莗莙莚莝莟莡",
		6,
		"莬莭莮"
	],
	[
		"c780",
		"莯莵莻莾莿菂菃菄菆菈菉菋菍菎菐菑菒菓菕菗菙菚菛菞菢菣菤菦菧菨菫菬菭恰洽牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉枪呛腔羌墙蔷强抢橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍切茄且怯窃钦侵亲秦琴勤芹擒禽寝沁青轻氢倾卿清擎晴氰情顷请庆琼穷秋丘邱球求囚酋泅趋区蛆曲躯屈驱渠"
	],
	[
		"c840",
		"菮華菳",
		4,
		"菺菻菼菾菿萀萂萅萇萈萉萊萐萒",
		5,
		"萙萚萛萞",
		5,
		"萩",
		7,
		"萲",
		5,
		"萹萺萻萾",
		7,
		"葇葈葉"
	],
	[
		"c880",
		"葊",
		6,
		"葒",
		4,
		"葘葝葞葟葠葢葤",
		4,
		"葪葮葯葰葲葴葷葹葻葼取娶龋趣去圈颧权醛泉全痊拳犬券劝缺炔瘸却鹊榷确雀裙群然燃冉染瓤壤攘嚷让饶扰绕惹热壬仁人忍韧任认刃妊纫扔仍日戎茸蓉荣融熔溶容绒冗揉柔肉茹蠕儒孺如辱乳汝入褥软阮蕊瑞锐闰润若弱撒洒萨腮鳃塞赛三叁"
	],
	[
		"c940",
		"葽",
		4,
		"蒃蒄蒅蒆蒊蒍蒏",
		7,
		"蒘蒚蒛蒝蒞蒟蒠蒢",
		12,
		"蒰蒱蒳蒵蒶蒷蒻蒼蒾蓀蓂蓃蓅蓆蓇蓈蓋蓌蓎蓏蓒蓔蓕蓗"
	],
	[
		"c980",
		"蓘",
		4,
		"蓞蓡蓢蓤蓧",
		4,
		"蓭蓮蓯蓱",
		10,
		"蓽蓾蔀蔁蔂伞散桑嗓丧搔骚扫嫂瑟色涩森僧莎砂杀刹沙纱傻啥煞筛晒珊苫杉山删煽衫闪陕擅赡膳善汕扇缮墒伤商赏晌上尚裳梢捎稍烧芍勺韶少哨邵绍奢赊蛇舌舍赦摄射慑涉社设砷申呻伸身深娠绅神沈审婶甚肾慎渗声生甥牲升绳"
	],
	[
		"ca40",
		"蔃",
		8,
		"蔍蔎蔏蔐蔒蔔蔕蔖蔘蔙蔛蔜蔝蔞蔠蔢",
		8,
		"蔭",
		9,
		"蔾",
		4,
		"蕄蕅蕆蕇蕋",
		10
	],
	[
		"ca80",
		"蕗蕘蕚蕛蕜蕝蕟",
		4,
		"蕥蕦蕧蕩",
		8,
		"蕳蕵蕶蕷蕸蕼蕽蕿薀薁省盛剩胜圣师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试收手首守寿授售受瘦兽蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱"
	],
	[
		"cb40",
		"薂薃薆薈",
		6,
		"薐",
		10,
		"薝",
		6,
		"薥薦薧薩薫薬薭薱",
		5,
		"薸薺",
		6,
		"藂",
		6,
		"藊",
		4,
		"藑藒"
	],
	[
		"cb80",
		"藔藖",
		5,
		"藝",
		6,
		"藥藦藧藨藪",
		14,
		"恕刷耍摔衰甩帅栓拴霜双爽谁水睡税吮瞬顺舜说硕朔烁斯撕嘶思私司丝死肆寺嗣四伺似饲巳松耸怂颂送宋讼诵搜艘擞嗽苏酥俗素速粟僳塑溯宿诉肃酸蒜算虽隋随绥髓碎岁穗遂隧祟孙损笋蓑梭唆缩琐索锁所塌他它她塔"
	],
	[
		"cc40",
		"藹藺藼藽藾蘀",
		4,
		"蘆",
		10,
		"蘒蘓蘔蘕蘗",
		15,
		"蘨蘪",
		13,
		"蘹蘺蘻蘽蘾蘿虀"
	],
	[
		"cc80",
		"虁",
		11,
		"虒虓處",
		4,
		"虛虜虝號虠虡虣",
		7,
		"獭挞蹋踏胎苔抬台泰酞太态汰坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭汤塘搪堂棠膛唐糖倘躺淌趟烫掏涛滔绦萄桃逃淘陶讨套特藤腾疼誊梯剔踢锑提题蹄啼体替嚏惕涕剃屉天添填田甜恬舔腆挑条迢眺跳贴铁帖厅听烃"
	],
	[
		"cd40",
		"虭虯虰虲",
		6,
		"蚃",
		6,
		"蚎",
		4,
		"蚔蚖",
		5,
		"蚞",
		4,
		"蚥蚦蚫蚭蚮蚲蚳蚷蚸蚹蚻",
		4,
		"蛁蛂蛃蛅蛈蛌蛍蛒蛓蛕蛖蛗蛚蛜"
	],
	[
		"cd80",
		"蛝蛠蛡蛢蛣蛥蛦蛧蛨蛪蛫蛬蛯蛵蛶蛷蛺蛻蛼蛽蛿蜁蜄蜅蜆蜋蜌蜎蜏蜐蜑蜔蜖汀廷停亭庭挺艇通桐酮瞳同铜彤童桶捅筒统痛偷投头透凸秃突图徒途涂屠土吐兔湍团推颓腿蜕褪退吞屯臀拖托脱鸵陀驮驼椭妥拓唾挖哇蛙洼娃瓦袜歪外豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕汪王亡枉网往旺望忘妄威"
	],
	[
		"ce40",
		"蜙蜛蜝蜟蜠蜤蜦蜧蜨蜪蜫蜬蜭蜯蜰蜲蜳蜵蜶蜸蜹蜺蜼蜽蝀",
		6,
		"蝊蝋蝍蝏蝐蝑蝒蝔蝕蝖蝘蝚",
		5,
		"蝡蝢蝦",
		7,
		"蝯蝱蝲蝳蝵"
	],
	[
		"ce80",
		"蝷蝸蝹蝺蝿螀螁螄螆螇螉螊螌螎",
		4,
		"螔螕螖螘",
		6,
		"螠",
		4,
		"巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫瘟温蚊文闻纹吻稳紊问嗡翁瓮挝蜗涡窝我斡卧握沃巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误昔熙析西硒矽晰嘻吸锡牺"
	],
	[
		"cf40",
		"螥螦螧螩螪螮螰螱螲螴螶螷螸螹螻螼螾螿蟁",
		4,
		"蟇蟈蟉蟌",
		4,
		"蟔",
		6,
		"蟜蟝蟞蟟蟡蟢蟣蟤蟦蟧蟨蟩蟫蟬蟭蟯",
		9
	],
	[
		"cf80",
		"蟺蟻蟼蟽蟿蠀蠁蠂蠄",
		5,
		"蠋",
		7,
		"蠔蠗蠘蠙蠚蠜",
		4,
		"蠣稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细瞎虾匣霞辖暇峡侠狭下厦夏吓掀锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象萧硝霄削哮嚣销消宵淆晓"
	],
	[
		"d040",
		"蠤",
		13,
		"蠳",
		5,
		"蠺蠻蠽蠾蠿衁衂衃衆",
		5,
		"衎",
		5,
		"衕衖衘衚",
		6,
		"衦衧衪衭衯衱衳衴衵衶衸衹衺"
	],
	[
		"d080",
		"衻衼袀袃袆袇袉袊袌袎袏袐袑袓袔袕袗",
		4,
		"袝",
		4,
		"袣袥",
		5,
		"小孝校肖啸笑效楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑薪芯锌欣辛新忻心信衅星腥猩惺兴刑型形邢行醒幸杏性姓兄凶胸匈汹雄熊休修羞朽嗅锈秀袖绣墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续轩喧宣悬旋玄"
	],
	[
		"d140",
		"袬袮袯袰袲",
		4,
		"袸袹袺袻袽袾袿裀裃裄裇裈裊裋裌裍裏裐裑裓裖裗裚",
		4,
		"裠裡裦裧裩",
		6,
		"裲裵裶裷裺裻製裿褀褁褃",
		5
	],
	[
		"d180",
		"褉褋",
		4,
		"褑褔",
		4,
		"褜",
		4,
		"褢褣褤褦褧褨褩褬褭褮褯褱褲褳褵褷选癣眩绚靴薛学穴雪血勋熏循旬询寻驯巡殉汛训讯逊迅压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾邀腰妖瑶"
	],
	[
		"d240",
		"褸",
		8,
		"襂襃襅",
		24,
		"襠",
		5,
		"襧",
		19,
		"襼"
	],
	[
		"d280",
		"襽襾覀覂覄覅覇",
		26,
		"摇尧遥窑谣姚咬舀药要耀椰噎耶爷野冶也页掖业叶曳腋夜液一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎茵荫因殷音阴姻吟银淫寅饮尹引隐"
	],
	[
		"d340",
		"覢",
		30,
		"觃觍觓觔觕觗觘觙觛觝觟觠觡觢觤觧觨觩觪觬觭觮觰觱觲觴",
		6
	],
	[
		"d380",
		"觻",
		4,
		"訁",
		5,
		"計",
		21,
		"印英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映哟拥佣臃痈庸雍踊蛹咏泳涌永恿勇用幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉"
	],
	[
		"d440",
		"訞",
		31,
		"訿",
		8,
		"詉",
		21
	],
	[
		"d480",
		"詟",
		25,
		"詺",
		6,
		"浴寓裕预豫驭鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院曰约越跃钥岳粤月悦阅耘云郧匀陨允运蕴酝晕韵孕匝砸杂栽哉灾宰载再在咱攒暂赞赃脏葬遭糟凿藻枣早澡蚤躁噪造皂灶燥责择则泽贼怎增憎曾赠扎喳渣札轧"
	],
	[
		"d540",
		"誁",
		7,
		"誋",
		7,
		"誔",
		46
	],
	[
		"d580",
		"諃",
		32,
		"铡闸眨栅榨咋乍炸诈摘斋宅窄债寨瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽樟章彰漳张掌涨杖丈帐账仗胀瘴障招昭找沼赵照罩兆肇召遮折哲蛰辙者锗蔗这浙珍斟真甄砧臻贞针侦枕疹诊震振镇阵蒸挣睁征狰争怔整拯正政"
	],
	[
		"d640",
		"諤",
		34,
		"謈",
		27
	],
	[
		"d680",
		"謤謥謧",
		30,
		"帧症郑证芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒中盅忠钟衷终种肿重仲众舟周州洲诌粥轴肘帚咒皱宙昼骤珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑"
	],
	[
		"d740",
		"譆",
		31,
		"譧",
		4,
		"譭",
		25
	],
	[
		"d780",
		"讇",
		24,
		"讬讱讻诇诐诪谉谞住注祝驻抓爪拽专砖转撰赚篆桩庄装妆撞壮状椎锥追赘坠缀谆准捉拙卓桌琢茁酌啄着灼浊兹咨资姿滋淄孜紫仔籽滓子自渍字鬃棕踪宗综总纵邹走奏揍租足卒族祖诅阻组钻纂嘴醉最罪尊遵昨左佐柞做作坐座"
	],
	[
		"d840",
		"谸",
		8,
		"豂豃豄豅豈豊豋豍",
		7,
		"豖豗豘豙豛",
		5,
		"豣",
		6,
		"豬",
		6,
		"豴豵豶豷豻",
		6,
		"貃貄貆貇"
	],
	[
		"d880",
		"貈貋貍",
		6,
		"貕貖貗貙",
		20,
		"亍丌兀丐廿卅丕亘丞鬲孬噩丨禺丿匕乇夭爻卮氐囟胤馗毓睾鼗丶亟鼐乜乩亓芈孛啬嘏仄厍厝厣厥厮靥赝匚叵匦匮匾赜卦卣刂刈刎刭刳刿剀剌剞剡剜蒯剽劂劁劐劓冂罔亻仃仉仂仨仡仫仞伛仳伢佤仵伥伧伉伫佞佧攸佚佝"
	],
	[
		"d940",
		"貮",
		62
	],
	[
		"d980",
		"賭",
		32,
		"佟佗伲伽佶佴侑侉侃侏佾佻侪佼侬侔俦俨俪俅俚俣俜俑俟俸倩偌俳倬倏倮倭俾倜倌倥倨偾偃偕偈偎偬偻傥傧傩傺僖儆僭僬僦僮儇儋仝氽佘佥俎龠汆籴兮巽黉馘冁夔勹匍訇匐凫夙兕亠兖亳衮袤亵脔裒禀嬴蠃羸冫冱冽冼"
	],
	[
		"da40",
		"贎",
		14,
		"贠赑赒赗赟赥赨赩赪赬赮赯赱赲赸",
		8,
		"趂趃趆趇趈趉趌",
		4,
		"趒趓趕",
		9,
		"趠趡"
	],
	[
		"da80",
		"趢趤",
		12,
		"趲趶趷趹趻趽跀跁跂跅跇跈跉跊跍跐跒跓跔凇冖冢冥讠讦讧讪讴讵讷诂诃诋诏诎诒诓诔诖诘诙诜诟诠诤诨诩诮诰诳诶诹诼诿谀谂谄谇谌谏谑谒谔谕谖谙谛谘谝谟谠谡谥谧谪谫谮谯谲谳谵谶卩卺阝阢阡阱阪阽阼陂陉陔陟陧陬陲陴隈隍隗隰邗邛邝邙邬邡邴邳邶邺"
	],
	[
		"db40",
		"跕跘跙跜跠跡跢跥跦跧跩跭跮跰跱跲跴跶跼跾",
		6,
		"踆踇踈踋踍踎踐踑踒踓踕",
		7,
		"踠踡踤",
		4,
		"踫踭踰踲踳踴踶踷踸踻踼踾"
	],
	[
		"db80",
		"踿蹃蹅蹆蹌",
		4,
		"蹓",
		5,
		"蹚",
		11,
		"蹧蹨蹪蹫蹮蹱邸邰郏郅邾郐郄郇郓郦郢郜郗郛郫郯郾鄄鄢鄞鄣鄱鄯鄹酃酆刍奂劢劬劭劾哿勐勖勰叟燮矍廴凵凼鬯厶弁畚巯坌垩垡塾墼壅壑圩圬圪圳圹圮圯坜圻坂坩垅坫垆坼坻坨坭坶坳垭垤垌垲埏垧垴垓垠埕埘埚埙埒垸埴埯埸埤埝"
	],
	[
		"dc40",
		"蹳蹵蹷",
		4,
		"蹽蹾躀躂躃躄躆躈",
		6,
		"躑躒躓躕",
		6,
		"躝躟",
		11,
		"躭躮躰躱躳",
		6,
		"躻",
		7
	],
	[
		"dc80",
		"軃",
		10,
		"軏",
		21,
		"堋堍埽埭堀堞堙塄堠塥塬墁墉墚墀馨鼙懿艹艽艿芏芊芨芄芎芑芗芙芫芸芾芰苈苊苣芘芷芮苋苌苁芩芴芡芪芟苄苎芤苡茉苷苤茏茇苜苴苒苘茌苻苓茑茚茆茔茕苠苕茜荑荛荜茈莒茼茴茱莛荞茯荏荇荃荟荀茗荠茭茺茳荦荥"
	],
	[
		"dd40",
		"軥",
		62
	],
	[
		"dd80",
		"輤",
		32,
		"荨茛荩荬荪荭荮莰荸莳莴莠莪莓莜莅荼莶莩荽莸荻莘莞莨莺莼菁萁菥菘堇萘萋菝菽菖萜萸萑萆菔菟萏萃菸菹菪菅菀萦菰菡葜葑葚葙葳蒇蒈葺蒉葸萼葆葩葶蒌蒎萱葭蓁蓍蓐蓦蒽蓓蓊蒿蒺蓠蒡蒹蒴蒗蓥蓣蔌甍蔸蓰蔹蔟蔺"
	],
	[
		"de40",
		"轅",
		32,
		"轪辀辌辒辝辠辡辢辤辥辦辧辪辬辭辮辯農辳辴辵辷辸辺辻込辿迀迃迆"
	],
	[
		"de80",
		"迉",
		4,
		"迏迒迖迗迚迠迡迣迧迬迯迱迲迴迵迶迺迻迼迾迿逇逈逌逎逓逕逘蕖蔻蓿蓼蕙蕈蕨蕤蕞蕺瞢蕃蕲蕻薤薨薇薏蕹薮薜薅薹薷薰藓藁藜藿蘧蘅蘩蘖蘼廾弈夼奁耷奕奚奘匏尢尥尬尴扌扪抟抻拊拚拗拮挢拶挹捋捃掭揶捱捺掎掴捭掬掊捩掮掼揲揸揠揿揄揞揎摒揆掾摅摁搋搛搠搌搦搡摞撄摭撖"
	],
	[
		"df40",
		"這逜連逤逥逧",
		5,
		"逰",
		4,
		"逷逹逺逽逿遀遃遅遆遈",
		4,
		"過達違遖遙遚遜",
		5,
		"遤遦遧適遪遫遬遯",
		4,
		"遶",
		6,
		"遾邁"
	],
	[
		"df80",
		"還邅邆邇邉邊邌",
		4,
		"邒邔邖邘邚邜邞邟邠邤邥邧邨邩邫邭邲邷邼邽邿郀摺撷撸撙撺擀擐擗擤擢攉攥攮弋忒甙弑卟叱叽叩叨叻吒吖吆呋呒呓呔呖呃吡呗呙吣吲咂咔呷呱呤咚咛咄呶呦咝哐咭哂咴哒咧咦哓哔呲咣哕咻咿哌哙哚哜咩咪咤哝哏哞唛哧唠哽唔哳唢唣唏唑唧唪啧喏喵啉啭啁啕唿啐唼"
	],
	[
		"e040",
		"郂郃郆郈郉郋郌郍郒郔郕郖郘郙郚郞郟郠郣郤郥郩郪郬郮郰郱郲郳郵郶郷郹郺郻郼郿鄀鄁鄃鄅",
		19,
		"鄚鄛鄜"
	],
	[
		"e080",
		"鄝鄟鄠鄡鄤",
		10,
		"鄰鄲",
		6,
		"鄺",
		8,
		"酄唷啖啵啶啷唳唰啜喋嗒喃喱喹喈喁喟啾嗖喑啻嗟喽喾喔喙嗪嗷嗉嘟嗑嗫嗬嗔嗦嗝嗄嗯嗥嗲嗳嗌嗍嗨嗵嗤辔嘞嘈嘌嘁嘤嘣嗾嘀嘧嘭噘嘹噗嘬噍噢噙噜噌噔嚆噤噱噫噻噼嚅嚓嚯囔囗囝囡囵囫囹囿圄圊圉圜帏帙帔帑帱帻帼"
	],
	[
		"e140",
		"酅酇酈酑酓酔酕酖酘酙酛酜酟酠酦酧酨酫酭酳酺酻酼醀",
		4,
		"醆醈醊醎醏醓",
		6,
		"醜",
		5,
		"醤",
		5,
		"醫醬醰醱醲醳醶醷醸醹醻"
	],
	[
		"e180",
		"醼",
		10,
		"釈釋釐釒",
		9,
		"針",
		8,
		"帷幄幔幛幞幡岌屺岍岐岖岈岘岙岑岚岜岵岢岽岬岫岱岣峁岷峄峒峤峋峥崂崃崧崦崮崤崞崆崛嵘崾崴崽嵬嵛嵯嵝嵫嵋嵊嵩嵴嶂嶙嶝豳嶷巅彳彷徂徇徉後徕徙徜徨徭徵徼衢彡犭犰犴犷犸狃狁狎狍狒狨狯狩狲狴狷猁狳猃狺"
	],
	[
		"e240",
		"釦",
		62
	],
	[
		"e280",
		"鈥",
		32,
		"狻猗猓猡猊猞猝猕猢猹猥猬猸猱獐獍獗獠獬獯獾舛夥飧夤夂饣饧",
		5,
		"饴饷饽馀馄馇馊馍馐馑馓馔馕庀庑庋庖庥庠庹庵庾庳赓廒廑廛廨廪膺忄忉忖忏怃忮怄忡忤忾怅怆忪忭忸怙怵怦怛怏怍怩怫怊怿怡恸恹恻恺恂"
	],
	[
		"e340",
		"鉆",
		45,
		"鉵",
		16
	],
	[
		"e380",
		"銆",
		7,
		"銏",
		24,
		"恪恽悖悚悭悝悃悒悌悛惬悻悱惝惘惆惚悴愠愦愕愣惴愀愎愫慊慵憬憔憧憷懔懵忝隳闩闫闱闳闵闶闼闾阃阄阆阈阊阋阌阍阏阒阕阖阗阙阚丬爿戕氵汔汜汊沣沅沐沔沌汨汩汴汶沆沩泐泔沭泷泸泱泗沲泠泖泺泫泮沱泓泯泾"
	],
	[
		"e440",
		"銨",
		5,
		"銯",
		24,
		"鋉",
		31
	],
	[
		"e480",
		"鋩",
		32,
		"洹洧洌浃浈洇洄洙洎洫浍洮洵洚浏浒浔洳涑浯涞涠浞涓涔浜浠浼浣渚淇淅淞渎涿淠渑淦淝淙渖涫渌涮渫湮湎湫溲湟溆湓湔渲渥湄滟溱溘滠漭滢溥溧溽溻溷滗溴滏溏滂溟潢潆潇漤漕滹漯漶潋潴漪漉漩澉澍澌潸潲潼潺濑"
	],
	[
		"e540",
		"錊",
		51,
		"錿",
		10
	],
	[
		"e580",
		"鍊",
		31,
		"鍫濉澧澹澶濂濡濮濞濠濯瀚瀣瀛瀹瀵灏灞宀宄宕宓宥宸甯骞搴寤寮褰寰蹇謇辶迓迕迥迮迤迩迦迳迨逅逄逋逦逑逍逖逡逵逶逭逯遄遑遒遐遨遘遢遛暹遴遽邂邈邃邋彐彗彖彘尻咫屐屙孱屣屦羼弪弩弭艴弼鬻屮妁妃妍妩妪妣"
	],
	[
		"e640",
		"鍬",
		34,
		"鎐",
		27
	],
	[
		"e680",
		"鎬",
		29,
		"鏋鏌鏍妗姊妫妞妤姒妲妯姗妾娅娆姝娈姣姘姹娌娉娲娴娑娣娓婀婧婊婕娼婢婵胬媪媛婷婺媾嫫媲嫒嫔媸嫠嫣嫱嫖嫦嫘嫜嬉嬗嬖嬲嬷孀尕尜孚孥孳孑孓孢驵驷驸驺驿驽骀骁骅骈骊骐骒骓骖骘骛骜骝骟骠骢骣骥骧纟纡纣纥纨纩"
	],
	[
		"e740",
		"鏎",
		7,
		"鏗",
		54
	],
	[
		"e780",
		"鐎",
		32,
		"纭纰纾绀绁绂绉绋绌绐绔绗绛绠绡绨绫绮绯绱绲缍绶绺绻绾缁缂缃缇缈缋缌缏缑缒缗缙缜缛缟缡",
		6,
		"缪缫缬缭缯",
		4,
		"缵幺畿巛甾邕玎玑玮玢玟珏珂珑玷玳珀珉珈珥珙顼琊珩珧珞玺珲琏琪瑛琦琥琨琰琮琬"
	],
	[
		"e840",
		"鐯",
		14,
		"鐿",
		43,
		"鑬鑭鑮鑯"
	],
	[
		"e880",
		"鑰",
		20,
		"钑钖钘铇铏铓铔铚铦铻锜锠琛琚瑁瑜瑗瑕瑙瑷瑭瑾璜璎璀璁璇璋璞璨璩璐璧瓒璺韪韫韬杌杓杞杈杩枥枇杪杳枘枧杵枨枞枭枋杷杼柰栉柘栊柩枰栌柙枵柚枳柝栀柃枸柢栎柁柽栲栳桠桡桎桢桄桤梃栝桕桦桁桧桀栾桊桉栩梵梏桴桷梓桫棂楮棼椟椠棹"
	],
	[
		"e940",
		"锧锳锽镃镈镋镕镚镠镮镴镵長",
		7,
		"門",
		42
	],
	[
		"e980",
		"閫",
		32,
		"椤棰椋椁楗棣椐楱椹楠楂楝榄楫榀榘楸椴槌榇榈槎榉楦楣楹榛榧榻榫榭槔榱槁槊槟榕槠榍槿樯槭樗樘橥槲橄樾檠橐橛樵檎橹樽樨橘橼檑檐檩檗檫猷獒殁殂殇殄殒殓殍殚殛殡殪轫轭轱轲轳轵轶轸轷轹轺轼轾辁辂辄辇辋"
	],
	[
		"ea40",
		"闌",
		27,
		"闬闿阇阓阘阛阞阠阣",
		6,
		"阫阬阭阯阰阷阸阹阺阾陁陃陊陎陏陑陒陓陖陗"
	],
	[
		"ea80",
		"陘陙陚陜陝陞陠陣陥陦陫陭",
		4,
		"陳陸",
		12,
		"隇隉隊辍辎辏辘辚軎戋戗戛戟戢戡戥戤戬臧瓯瓴瓿甏甑甓攴旮旯旰昊昙杲昃昕昀炅曷昝昴昱昶昵耆晟晔晁晏晖晡晗晷暄暌暧暝暾曛曜曦曩贲贳贶贻贽赀赅赆赈赉赇赍赕赙觇觊觋觌觎觏觐觑牮犟牝牦牯牾牿犄犋犍犏犒挈挲掰"
	],
	[
		"eb40",
		"隌階隑隒隓隕隖隚際隝",
		9,
		"隨",
		7,
		"隱隲隴隵隷隸隺隻隿雂雃雈雊雋雐雑雓雔雖",
		9,
		"雡",
		6,
		"雫"
	],
	[
		"eb80",
		"雬雭雮雰雱雲雴雵雸雺電雼雽雿霂霃霅霊霋霌霐霑霒霔霕霗",
		4,
		"霝霟霠搿擘耄毪毳毽毵毹氅氇氆氍氕氘氙氚氡氩氤氪氲攵敕敫牍牒牖爰虢刖肟肜肓肼朊肽肱肫肭肴肷胧胨胩胪胛胂胄胙胍胗朐胝胫胱胴胭脍脎胲胼朕脒豚脶脞脬脘脲腈腌腓腴腙腚腱腠腩腼腽腭腧塍媵膈膂膑滕膣膪臌朦臊膻"
	],
	[
		"ec40",
		"霡",
		8,
		"霫霬霮霯霱霳",
		4,
		"霺霻霼霽霿",
		18,
		"靔靕靗靘靚靜靝靟靣靤靦靧靨靪",
		7
	],
	[
		"ec80",
		"靲靵靷",
		4,
		"靽",
		7,
		"鞆",
		4,
		"鞌鞎鞏鞐鞓鞕鞖鞗鞙",
		4,
		"臁膦欤欷欹歃歆歙飑飒飓飕飙飚殳彀毂觳斐齑斓於旆旄旃旌旎旒旖炀炜炖炝炻烀炷炫炱烨烊焐焓焖焯焱煳煜煨煅煲煊煸煺熘熳熵熨熠燠燔燧燹爝爨灬焘煦熹戾戽扃扈扉礻祀祆祉祛祜祓祚祢祗祠祯祧祺禅禊禚禧禳忑忐"
	],
	[
		"ed40",
		"鞞鞟鞡鞢鞤",
		6,
		"鞬鞮鞰鞱鞳鞵",
		46
	],
	[
		"ed80",
		"韤韥韨韮",
		4,
		"韴韷",
		23,
		"怼恝恚恧恁恙恣悫愆愍慝憩憝懋懑戆肀聿沓泶淼矶矸砀砉砗砘砑斫砭砜砝砹砺砻砟砼砥砬砣砩硎硭硖硗砦硐硇硌硪碛碓碚碇碜碡碣碲碹碥磔磙磉磬磲礅磴礓礤礞礴龛黹黻黼盱眄眍盹眇眈眚眢眙眭眦眵眸睐睑睇睃睚睨"
	],
	[
		"ee40",
		"頏",
		62
	],
	[
		"ee80",
		"顎",
		32,
		"睢睥睿瞍睽瞀瞌瞑瞟瞠瞰瞵瞽町畀畎畋畈畛畲畹疃罘罡罟詈罨罴罱罹羁罾盍盥蠲钅钆钇钋钊钌钍钏钐钔钗钕钚钛钜钣钤钫钪钭钬钯钰钲钴钶",
		4,
		"钼钽钿铄铈",
		6,
		"铐铑铒铕铖铗铙铘铛铞铟铠铢铤铥铧铨铪"
	],
	[
		"ef40",
		"顯",
		5,
		"颋颎颒颕颙颣風",
		37,
		"飏飐飔飖飗飛飜飝飠",
		4
	],
	[
		"ef80",
		"飥飦飩",
		30,
		"铩铫铮铯铳铴铵铷铹铼铽铿锃锂锆锇锉锊锍锎锏锒",
		4,
		"锘锛锝锞锟锢锪锫锩锬锱锲锴锶锷锸锼锾锿镂锵镄镅镆镉镌镎镏镒镓镔镖镗镘镙镛镞镟镝镡镢镤",
		8,
		"镯镱镲镳锺矧矬雉秕秭秣秫稆嵇稃稂稞稔"
	],
	[
		"f040",
		"餈",
		4,
		"餎餏餑",
		28,
		"餯",
		26
	],
	[
		"f080",
		"饊",
		9,
		"饖",
		12,
		"饤饦饳饸饹饻饾馂馃馉稹稷穑黏馥穰皈皎皓皙皤瓞瓠甬鸠鸢鸨",
		4,
		"鸲鸱鸶鸸鸷鸹鸺鸾鹁鹂鹄鹆鹇鹈鹉鹋鹌鹎鹑鹕鹗鹚鹛鹜鹞鹣鹦",
		6,
		"鹱鹭鹳疒疔疖疠疝疬疣疳疴疸痄疱疰痃痂痖痍痣痨痦痤痫痧瘃痱痼痿瘐瘀瘅瘌瘗瘊瘥瘘瘕瘙"
	],
	[
		"f140",
		"馌馎馚",
		10,
		"馦馧馩",
		47
	],
	[
		"f180",
		"駙",
		32,
		"瘛瘼瘢瘠癀瘭瘰瘿瘵癃瘾瘳癍癞癔癜癖癫癯翊竦穸穹窀窆窈窕窦窠窬窨窭窳衤衩衲衽衿袂袢裆袷袼裉裢裎裣裥裱褚裼裨裾裰褡褙褓褛褊褴褫褶襁襦襻疋胥皲皴矜耒耔耖耜耠耢耥耦耧耩耨耱耋耵聃聆聍聒聩聱覃顸颀颃"
	],
	[
		"f240",
		"駺",
		62
	],
	[
		"f280",
		"騹",
		32,
		"颉颌颍颏颔颚颛颞颟颡颢颥颦虍虔虬虮虿虺虼虻蚨蚍蚋蚬蚝蚧蚣蚪蚓蚩蚶蛄蚵蛎蚰蚺蚱蚯蛉蛏蚴蛩蛱蛲蛭蛳蛐蜓蛞蛴蛟蛘蛑蜃蜇蛸蜈蜊蜍蜉蜣蜻蜞蜥蜮蜚蜾蝈蜴蜱蜩蜷蜿螂蜢蝽蝾蝻蝠蝰蝌蝮螋蝓蝣蝼蝤蝙蝥螓螯螨蟒"
	],
	[
		"f340",
		"驚",
		17,
		"驲骃骉骍骎骔骕骙骦骩",
		6,
		"骲骳骴骵骹骻骽骾骿髃髄髆",
		4,
		"髍髎髏髐髒體髕髖髗髙髚髛髜"
	],
	[
		"f380",
		"髝髞髠髢髣髤髥髧髨髩髪髬髮髰",
		8,
		"髺髼",
		6,
		"鬄鬅鬆蟆螈螅螭螗螃螫蟥螬螵螳蟋蟓螽蟑蟀蟊蟛蟪蟠蟮蠖蠓蟾蠊蠛蠡蠹蠼缶罂罄罅舐竺竽笈笃笄笕笊笫笏筇笸笪笙笮笱笠笥笤笳笾笞筘筚筅筵筌筝筠筮筻筢筲筱箐箦箧箸箬箝箨箅箪箜箢箫箴篑篁篌篝篚篥篦篪簌篾篼簏簖簋"
	],
	[
		"f440",
		"鬇鬉",
		5,
		"鬐鬑鬒鬔",
		10,
		"鬠鬡鬢鬤",
		10,
		"鬰鬱鬳",
		7,
		"鬽鬾鬿魀魆魊魋魌魎魐魒魓魕",
		5
	],
	[
		"f480",
		"魛",
		32,
		"簟簪簦簸籁籀臾舁舂舄臬衄舡舢舣舭舯舨舫舸舻舳舴舾艄艉艋艏艚艟艨衾袅袈裘裟襞羝羟羧羯羰羲籼敉粑粝粜粞粢粲粼粽糁糇糌糍糈糅糗糨艮暨羿翎翕翥翡翦翩翮翳糸絷綦綮繇纛麸麴赳趄趔趑趱赧赭豇豉酊酐酎酏酤"
	],
	[
		"f540",
		"魼",
		62
	],
	[
		"f580",
		"鮻",
		32,
		"酢酡酰酩酯酽酾酲酴酹醌醅醐醍醑醢醣醪醭醮醯醵醴醺豕鹾趸跫踅蹙蹩趵趿趼趺跄跖跗跚跞跎跏跛跆跬跷跸跣跹跻跤踉跽踔踝踟踬踮踣踯踺蹀踹踵踽踱蹉蹁蹂蹑蹒蹊蹰蹶蹼蹯蹴躅躏躔躐躜躞豸貂貊貅貘貔斛觖觞觚觜"
	],
	[
		"f640",
		"鯜",
		62
	],
	[
		"f680",
		"鰛",
		32,
		"觥觫觯訾謦靓雩雳雯霆霁霈霏霎霪霭霰霾龀龃龅",
		5,
		"龌黾鼋鼍隹隼隽雎雒瞿雠銎銮鋈錾鍪鏊鎏鐾鑫鱿鲂鲅鲆鲇鲈稣鲋鲎鲐鲑鲒鲔鲕鲚鲛鲞",
		5,
		"鲥",
		4,
		"鲫鲭鲮鲰",
		7,
		"鲺鲻鲼鲽鳄鳅鳆鳇鳊鳋"
	],
	[
		"f740",
		"鰼",
		62
	],
	[
		"f780",
		"鱻鱽鱾鲀鲃鲄鲉鲊鲌鲏鲓鲖鲗鲘鲙鲝鲪鲬鲯鲹鲾",
		4,
		"鳈鳉鳑鳒鳚鳛鳠鳡鳌",
		4,
		"鳓鳔鳕鳗鳘鳙鳜鳝鳟鳢靼鞅鞑鞒鞔鞯鞫鞣鞲鞴骱骰骷鹘骶骺骼髁髀髅髂髋髌髑魅魃魇魉魈魍魑飨餍餮饕饔髟髡髦髯髫髻髭髹鬈鬏鬓鬟鬣麽麾縻麂麇麈麋麒鏖麝麟黛黜黝黠黟黢黩黧黥黪黯鼢鼬鼯鼹鼷鼽鼾齄"
	],
	[
		"f840",
		"鳣",
		62
	],
	[
		"f880",
		"鴢",
		32
	],
	[
		"f940",
		"鵃",
		62
	],
	[
		"f980",
		"鶂",
		32
	],
	[
		"fa40",
		"鶣",
		62
	],
	[
		"fa80",
		"鷢",
		32
	],
	[
		"fb40",
		"鸃",
		27,
		"鸤鸧鸮鸰鸴鸻鸼鹀鹍鹐鹒鹓鹔鹖鹙鹝鹟鹠鹡鹢鹥鹮鹯鹲鹴",
		9,
		"麀"
	],
	[
		"fb80",
		"麁麃麄麅麆麉麊麌",
		5,
		"麔",
		8,
		"麞麠",
		5,
		"麧麨麩麪"
	],
	[
		"fc40",
		"麫",
		8,
		"麵麶麷麹麺麼麿",
		4,
		"黅黆黇黈黊黋黌黐黒黓黕黖黗黙黚點黡黣黤黦黨黫黬黭黮黰",
		8,
		"黺黽黿",
		6
	],
	[
		"fc80",
		"鼆",
		4,
		"鼌鼏鼑鼒鼔鼕鼖鼘鼚",
		5,
		"鼡鼣",
		8,
		"鼭鼮鼰鼱"
	],
	[
		"fd40",
		"鼲",
		4,
		"鼸鼺鼼鼿",
		4,
		"齅",
		10,
		"齒",
		38
	],
	[
		"fd80",
		"齹",
		5,
		"龁龂龍",
		11,
		"龜龝龞龡",
		4,
		"郎凉秊裏隣"
	],
	[
		"fe40",
		"兀嗀﨎﨏﨑﨓﨔礼﨟蘒﨡﨣﨤﨧﨨﨩"
	]
];

var require$$3 = [
	[
		"a140",
		"",
		62
	],
	[
		"a180",
		"",
		32
	],
	[
		"a240",
		"",
		62
	],
	[
		"a280",
		"",
		32
	],
	[
		"a2ab",
		"",
		5
	],
	[
		"a2e3",
		"€"
	],
	[
		"a2ef",
		""
	],
	[
		"a2fd",
		""
	],
	[
		"a340",
		"",
		62
	],
	[
		"a380",
		"",
		31,
		"　"
	],
	[
		"a440",
		"",
		62
	],
	[
		"a480",
		"",
		32
	],
	[
		"a4f4",
		"",
		10
	],
	[
		"a540",
		"",
		62
	],
	[
		"a580",
		"",
		32
	],
	[
		"a5f7",
		"",
		7
	],
	[
		"a640",
		"",
		62
	],
	[
		"a680",
		"",
		32
	],
	[
		"a6b9",
		"",
		7
	],
	[
		"a6d9",
		"",
		6
	],
	[
		"a6ec",
		""
	],
	[
		"a6f3",
		""
	],
	[
		"a6f6",
		"",
		8
	],
	[
		"a740",
		"",
		62
	],
	[
		"a780",
		"",
		32
	],
	[
		"a7c2",
		"",
		14
	],
	[
		"a7f2",
		"",
		12
	],
	[
		"a896",
		"",
		10
	],
	[
		"a8bc",
		"ḿ"
	],
	[
		"a8bf",
		"ǹ"
	],
	[
		"a8c1",
		""
	],
	[
		"a8ea",
		"",
		20
	],
	[
		"a958",
		""
	],
	[
		"a95b",
		""
	],
	[
		"a95d",
		""
	],
	[
		"a989",
		"〾⿰",
		11
	],
	[
		"a997",
		"",
		12
	],
	[
		"a9f0",
		"",
		14
	],
	[
		"aaa1",
		"",
		93
	],
	[
		"aba1",
		"",
		93
	],
	[
		"aca1",
		"",
		93
	],
	[
		"ada1",
		"",
		93
	],
	[
		"aea1",
		"",
		93
	],
	[
		"afa1",
		"",
		93
	],
	[
		"d7fa",
		"",
		4
	],
	[
		"f8a1",
		"",
		93
	],
	[
		"f9a1",
		"",
		93
	],
	[
		"faa1",
		"",
		93
	],
	[
		"fba1",
		"",
		93
	],
	[
		"fca1",
		"",
		93
	],
	[
		"fda1",
		"",
		93
	],
	[
		"fe50",
		"⺁⺄㑳㑇⺈⺋㖞㘚㘎⺌⺗㥮㤘㧏㧟㩳㧐㭎㱮㳠⺧⺪䁖䅟⺮䌷⺳⺶⺷䎱䎬⺻䏝䓖䙡䙌"
	],
	[
		"fe80",
		"䜣䜩䝼䞍⻊䥇䥺䥽䦂䦃䦅䦆䦟䦛䦷䦶䲣䲟䲠䲡䱷䲢䴓",
		6,
		"䶮",
		93
	],
	[
		"8135f437",
		""
	]
];

var uChars = [
	128,
	165,
	169,
	178,
	184,
	216,
	226,
	235,
	238,
	244,
	248,
	251,
	253,
	258,
	276,
	284,
	300,
	325,
	329,
	334,
	364,
	463,
	465,
	467,
	469,
	471,
	473,
	475,
	477,
	506,
	594,
	610,
	712,
	716,
	730,
	930,
	938,
	962,
	970,
	1026,
	1104,
	1106,
	8209,
	8215,
	8218,
	8222,
	8231,
	8241,
	8244,
	8246,
	8252,
	8365,
	8452,
	8454,
	8458,
	8471,
	8482,
	8556,
	8570,
	8596,
	8602,
	8713,
	8720,
	8722,
	8726,
	8731,
	8737,
	8740,
	8742,
	8748,
	8751,
	8760,
	8766,
	8777,
	8781,
	8787,
	8802,
	8808,
	8816,
	8854,
	8858,
	8870,
	8896,
	8979,
	9322,
	9372,
	9548,
	9588,
	9616,
	9622,
	9634,
	9652,
	9662,
	9672,
	9676,
	9680,
	9702,
	9735,
	9738,
	9793,
	9795,
	11906,
	11909,
	11913,
	11917,
	11928,
	11944,
	11947,
	11951,
	11956,
	11960,
	11964,
	11979,
	12284,
	12292,
	12312,
	12319,
	12330,
	12351,
	12436,
	12447,
	12535,
	12543,
	12586,
	12842,
	12850,
	12964,
	13200,
	13215,
	13218,
	13253,
	13263,
	13267,
	13270,
	13384,
	13428,
	13727,
	13839,
	13851,
	14617,
	14703,
	14801,
	14816,
	14964,
	15183,
	15471,
	15585,
	16471,
	16736,
	17208,
	17325,
	17330,
	17374,
	17623,
	17997,
	18018,
	18212,
	18218,
	18301,
	18318,
	18760,
	18811,
	18814,
	18820,
	18823,
	18844,
	18848,
	18872,
	19576,
	19620,
	19738,
	19887,
	40870,
	59244,
	59336,
	59367,
	59413,
	59417,
	59423,
	59431,
	59437,
	59443,
	59452,
	59460,
	59478,
	59493,
	63789,
	63866,
	63894,
	63976,
	63986,
	64016,
	64018,
	64021,
	64025,
	64034,
	64037,
	64042,
	65074,
	65093,
	65107,
	65112,
	65127,
	65132,
	65375,
	65510,
	65536
];
var gbChars = [
	0,
	36,
	38,
	45,
	50,
	81,
	89,
	95,
	96,
	100,
	103,
	104,
	105,
	109,
	126,
	133,
	148,
	172,
	175,
	179,
	208,
	306,
	307,
	308,
	309,
	310,
	311,
	312,
	313,
	341,
	428,
	443,
	544,
	545,
	558,
	741,
	742,
	749,
	750,
	805,
	819,
	820,
	7922,
	7924,
	7925,
	7927,
	7934,
	7943,
	7944,
	7945,
	7950,
	8062,
	8148,
	8149,
	8152,
	8164,
	8174,
	8236,
	8240,
	8262,
	8264,
	8374,
	8380,
	8381,
	8384,
	8388,
	8390,
	8392,
	8393,
	8394,
	8396,
	8401,
	8406,
	8416,
	8419,
	8424,
	8437,
	8439,
	8445,
	8482,
	8485,
	8496,
	8521,
	8603,
	8936,
	8946,
	9046,
	9050,
	9063,
	9066,
	9076,
	9092,
	9100,
	9108,
	9111,
	9113,
	9131,
	9162,
	9164,
	9218,
	9219,
	11329,
	11331,
	11334,
	11336,
	11346,
	11361,
	11363,
	11366,
	11370,
	11372,
	11375,
	11389,
	11682,
	11686,
	11687,
	11692,
	11694,
	11714,
	11716,
	11723,
	11725,
	11730,
	11736,
	11982,
	11989,
	12102,
	12336,
	12348,
	12350,
	12384,
	12393,
	12395,
	12397,
	12510,
	12553,
	12851,
	12962,
	12973,
	13738,
	13823,
	13919,
	13933,
	14080,
	14298,
	14585,
	14698,
	15583,
	15847,
	16318,
	16434,
	16438,
	16481,
	16729,
	17102,
	17122,
	17315,
	17320,
	17402,
	17418,
	17859,
	17909,
	17911,
	17915,
	17916,
	17936,
	17939,
	17961,
	18664,
	18703,
	18814,
	18962,
	19043,
	33469,
	33470,
	33471,
	33484,
	33485,
	33490,
	33497,
	33501,
	33505,
	33513,
	33520,
	33536,
	33550,
	37845,
	37921,
	37948,
	38029,
	38038,
	38064,
	38065,
	38066,
	38069,
	38075,
	38076,
	38078,
	39108,
	39109,
	39113,
	39114,
	39115,
	39116,
	39265,
	39394,
	189000
];
var require$$4 = {
	uChars: uChars,
	gbChars: gbChars
};

var require$$5 = [
	[
		"0",
		"\u0000",
		127
	],
	[
		"8141",
		"갂갃갅갆갋",
		4,
		"갘갞갟갡갢갣갥",
		6,
		"갮갲갳갴"
	],
	[
		"8161",
		"갵갶갷갺갻갽갾갿걁",
		9,
		"걌걎",
		5,
		"걕"
	],
	[
		"8181",
		"걖걗걙걚걛걝",
		18,
		"걲걳걵걶걹걻",
		4,
		"겂겇겈겍겎겏겑겒겓겕",
		6,
		"겞겢",
		5,
		"겫겭겮겱",
		6,
		"겺겾겿곀곂곃곅곆곇곉곊곋곍",
		7,
		"곖곘",
		7,
		"곢곣곥곦곩곫곭곮곲곴곷",
		4,
		"곾곿괁괂괃괅괇",
		4,
		"괎괐괒괓"
	],
	[
		"8241",
		"괔괕괖괗괙괚괛괝괞괟괡",
		7,
		"괪괫괮",
		5
	],
	[
		"8261",
		"괶괷괹괺괻괽",
		6,
		"굆굈굊",
		5,
		"굑굒굓굕굖굗"
	],
	[
		"8281",
		"굙",
		7,
		"굢굤",
		7,
		"굮굯굱굲굷굸굹굺굾궀궃",
		4,
		"궊궋궍궎궏궑",
		10,
		"궞",
		5,
		"궥",
		17,
		"궸",
		7,
		"귂귃귅귆귇귉",
		6,
		"귒귔",
		7,
		"귝귞귟귡귢귣귥",
		18
	],
	[
		"8341",
		"귺귻귽귾긂",
		5,
		"긊긌긎",
		5,
		"긕",
		7
	],
	[
		"8361",
		"긝",
		18,
		"긲긳긵긶긹긻긼"
	],
	[
		"8381",
		"긽긾긿깂깄깇깈깉깋깏깑깒깓깕깗",
		4,
		"깞깢깣깤깦깧깪깫깭깮깯깱",
		6,
		"깺깾",
		5,
		"꺆",
		5,
		"꺍",
		46,
		"꺿껁껂껃껅",
		6,
		"껎껒",
		5,
		"껚껛껝",
		8
	],
	[
		"8441",
		"껦껧껩껪껬껮",
		5,
		"껵껶껷껹껺껻껽",
		8
	],
	[
		"8461",
		"꼆꼉꼊꼋꼌꼎꼏꼑",
		18
	],
	[
		"8481",
		"꼤",
		7,
		"꼮꼯꼱꼳꼵",
		6,
		"꼾꽀꽄꽅꽆꽇꽊",
		5,
		"꽑",
		10,
		"꽞",
		5,
		"꽦",
		18,
		"꽺",
		5,
		"꾁꾂꾃꾅꾆꾇꾉",
		6,
		"꾒꾓꾔꾖",
		5,
		"꾝",
		26,
		"꾺꾻꾽꾾"
	],
	[
		"8541",
		"꾿꿁",
		5,
		"꿊꿌꿏",
		4,
		"꿕",
		6,
		"꿝",
		4
	],
	[
		"8561",
		"꿢",
		5,
		"꿪",
		5,
		"꿲꿳꿵꿶꿷꿹",
		6,
		"뀂뀃"
	],
	[
		"8581",
		"뀅",
		6,
		"뀍뀎뀏뀑뀒뀓뀕",
		6,
		"뀞",
		9,
		"뀩",
		26,
		"끆끇끉끋끍끏끐끑끒끖끘끚끛끜끞",
		29,
		"끾끿낁낂낃낅",
		6,
		"낎낐낒",
		5,
		"낛낝낞낣낤"
	],
	[
		"8641",
		"낥낦낧낪낰낲낶낷낹낺낻낽",
		6,
		"냆냊",
		5,
		"냒"
	],
	[
		"8661",
		"냓냕냖냗냙",
		6,
		"냡냢냣냤냦",
		10
	],
	[
		"8681",
		"냱",
		22,
		"넊넍넎넏넑넔넕넖넗넚넞",
		4,
		"넦넧넩넪넫넭",
		6,
		"넶넺",
		5,
		"녂녃녅녆녇녉",
		6,
		"녒녓녖녗녙녚녛녝녞녟녡",
		22,
		"녺녻녽녾녿놁놃",
		4,
		"놊놌놎놏놐놑놕놖놗놙놚놛놝"
	],
	[
		"8741",
		"놞",
		9,
		"놩",
		15
	],
	[
		"8761",
		"놹",
		18,
		"뇍뇎뇏뇑뇒뇓뇕"
	],
	[
		"8781",
		"뇖",
		5,
		"뇞뇠",
		7,
		"뇪뇫뇭뇮뇯뇱",
		7,
		"뇺뇼뇾",
		5,
		"눆눇눉눊눍",
		6,
		"눖눘눚",
		5,
		"눡",
		18,
		"눵",
		6,
		"눽",
		26,
		"뉙뉚뉛뉝뉞뉟뉡",
		6,
		"뉪",
		4
	],
	[
		"8841",
		"뉯",
		4,
		"뉶",
		5,
		"뉽",
		6,
		"늆늇늈늊",
		4
	],
	[
		"8861",
		"늏늒늓늕늖늗늛",
		4,
		"늢늤늧늨늩늫늭늮늯늱늲늳늵늶늷"
	],
	[
		"8881",
		"늸",
		15,
		"닊닋닍닎닏닑닓",
		4,
		"닚닜닞닟닠닡닣닧닩닪닰닱닲닶닼닽닾댂댃댅댆댇댉",
		6,
		"댒댖",
		5,
		"댝",
		54,
		"덗덙덚덝덠덡덢덣"
	],
	[
		"8941",
		"덦덨덪덬덭덯덲덳덵덶덷덹",
		6,
		"뎂뎆",
		5,
		"뎍"
	],
	[
		"8961",
		"뎎뎏뎑뎒뎓뎕",
		10,
		"뎢",
		5,
		"뎩뎪뎫뎭"
	],
	[
		"8981",
		"뎮",
		21,
		"돆돇돉돊돍돏돑돒돓돖돘돚돜돞돟돡돢돣돥돦돧돩",
		18,
		"돽",
		18,
		"됑",
		6,
		"됙됚됛됝됞됟됡",
		6,
		"됪됬",
		7,
		"됵",
		15
	],
	[
		"8a41",
		"둅",
		10,
		"둒둓둕둖둗둙",
		6,
		"둢둤둦"
	],
	[
		"8a61",
		"둧",
		4,
		"둭",
		18,
		"뒁뒂"
	],
	[
		"8a81",
		"뒃",
		4,
		"뒉",
		19,
		"뒞",
		5,
		"뒥뒦뒧뒩뒪뒫뒭",
		7,
		"뒶뒸뒺",
		5,
		"듁듂듃듅듆듇듉",
		6,
		"듑듒듓듔듖",
		5,
		"듞듟듡듢듥듧",
		4,
		"듮듰듲",
		5,
		"듹",
		26,
		"딖딗딙딚딝"
	],
	[
		"8b41",
		"딞",
		5,
		"딦딫",
		4,
		"딲딳딵딶딷딹",
		6,
		"땂땆"
	],
	[
		"8b61",
		"땇땈땉땊땎땏땑땒땓땕",
		6,
		"땞땢",
		8
	],
	[
		"8b81",
		"땫",
		52,
		"떢떣떥떦떧떩떬떭떮떯떲떶",
		4,
		"떾떿뗁뗂뗃뗅",
		6,
		"뗎뗒",
		5,
		"뗙",
		18,
		"뗭",
		18
	],
	[
		"8c41",
		"똀",
		15,
		"똒똓똕똖똗똙",
		4
	],
	[
		"8c61",
		"똞",
		6,
		"똦",
		5,
		"똭",
		6,
		"똵",
		5
	],
	[
		"8c81",
		"똻",
		12,
		"뙉",
		26,
		"뙥뙦뙧뙩",
		50,
		"뚞뚟뚡뚢뚣뚥",
		5,
		"뚭뚮뚯뚰뚲",
		16
	],
	[
		"8d41",
		"뛃",
		16,
		"뛕",
		8
	],
	[
		"8d61",
		"뛞",
		17,
		"뛱뛲뛳뛵뛶뛷뛹뛺"
	],
	[
		"8d81",
		"뛻",
		4,
		"뜂뜃뜄뜆",
		33,
		"뜪뜫뜭뜮뜱",
		6,
		"뜺뜼",
		7,
		"띅띆띇띉띊띋띍",
		6,
		"띖",
		9,
		"띡띢띣띥띦띧띩",
		6,
		"띲띴띶",
		5,
		"띾띿랁랂랃랅",
		6,
		"랎랓랔랕랚랛랝랞"
	],
	[
		"8e41",
		"랟랡",
		6,
		"랪랮",
		5,
		"랶랷랹",
		8
	],
	[
		"8e61",
		"럂",
		4,
		"럈럊",
		19
	],
	[
		"8e81",
		"럞",
		13,
		"럮럯럱럲럳럵",
		6,
		"럾렂",
		4,
		"렊렋렍렎렏렑",
		6,
		"렚렜렞",
		5,
		"렦렧렩렪렫렭",
		6,
		"렶렺",
		5,
		"롁롂롃롅",
		11,
		"롒롔",
		7,
		"롞롟롡롢롣롥",
		6,
		"롮롰롲",
		5,
		"롹롺롻롽",
		7
	],
	[
		"8f41",
		"뢅",
		7,
		"뢎",
		17
	],
	[
		"8f61",
		"뢠",
		7,
		"뢩",
		6,
		"뢱뢲뢳뢵뢶뢷뢹",
		4
	],
	[
		"8f81",
		"뢾뢿룂룄룆",
		5,
		"룍룎룏룑룒룓룕",
		7,
		"룞룠룢",
		5,
		"룪룫룭룮룯룱",
		6,
		"룺룼룾",
		5,
		"뤅",
		18,
		"뤙",
		6,
		"뤡",
		26,
		"뤾뤿륁륂륃륅",
		6,
		"륍륎륐륒",
		5
	],
	[
		"9041",
		"륚륛륝륞륟륡",
		6,
		"륪륬륮",
		5,
		"륶륷륹륺륻륽"
	],
	[
		"9061",
		"륾",
		5,
		"릆릈릋릌릏",
		15
	],
	[
		"9081",
		"릟",
		12,
		"릮릯릱릲릳릵",
		6,
		"릾맀맂",
		5,
		"맊맋맍맓",
		4,
		"맚맜맟맠맢맦맧맩맪맫맭",
		6,
		"맶맻",
		4,
		"먂",
		5,
		"먉",
		11,
		"먖",
		33,
		"먺먻먽먾먿멁멃멄멅멆"
	],
	[
		"9141",
		"멇멊멌멏멐멑멒멖멗멙멚멛멝",
		6,
		"멦멪",
		5
	],
	[
		"9161",
		"멲멳멵멶멷멹",
		9,
		"몆몈몉몊몋몍",
		5
	],
	[
		"9181",
		"몓",
		20,
		"몪몭몮몯몱몳",
		4,
		"몺몼몾",
		5,
		"뫅뫆뫇뫉",
		14,
		"뫚",
		33,
		"뫽뫾뫿묁묂묃묅",
		7,
		"묎묐묒",
		5,
		"묙묚묛묝묞묟묡",
		6
	],
	[
		"9241",
		"묨묪묬",
		7,
		"묷묹묺묿",
		4,
		"뭆뭈뭊뭋뭌뭎뭑뭒"
	],
	[
		"9261",
		"뭓뭕뭖뭗뭙",
		7,
		"뭢뭤",
		7,
		"뭭",
		4
	],
	[
		"9281",
		"뭲",
		21,
		"뮉뮊뮋뮍뮎뮏뮑",
		18,
		"뮥뮦뮧뮩뮪뮫뮭",
		6,
		"뮵뮶뮸",
		7,
		"믁믂믃믅믆믇믉",
		6,
		"믑믒믔",
		35,
		"믺믻믽믾밁"
	],
	[
		"9341",
		"밃",
		4,
		"밊밎밐밒밓밙밚밠밡밢밣밦밨밪밫밬밮밯밲밳밵"
	],
	[
		"9361",
		"밶밷밹",
		6,
		"뱂뱆뱇뱈뱊뱋뱎뱏뱑",
		8
	],
	[
		"9381",
		"뱚뱛뱜뱞",
		37,
		"벆벇벉벊벍벏",
		4,
		"벖벘벛",
		4,
		"벢벣벥벦벩",
		6,
		"벲벶",
		5,
		"벾벿볁볂볃볅",
		7,
		"볎볒볓볔볖볗볙볚볛볝",
		22,
		"볷볹볺볻볽"
	],
	[
		"9441",
		"볾",
		5,
		"봆봈봊",
		5,
		"봑봒봓봕",
		8
	],
	[
		"9461",
		"봞",
		5,
		"봥",
		6,
		"봭",
		12
	],
	[
		"9481",
		"봺",
		5,
		"뵁",
		6,
		"뵊뵋뵍뵎뵏뵑",
		6,
		"뵚",
		9,
		"뵥뵦뵧뵩",
		22,
		"붂붃붅붆붋",
		4,
		"붒붔붖붗붘붛붝",
		6,
		"붥",
		10,
		"붱",
		6,
		"붹",
		24
	],
	[
		"9541",
		"뷒뷓뷖뷗뷙뷚뷛뷝",
		11,
		"뷪",
		5,
		"뷱"
	],
	[
		"9561",
		"뷲뷳뷵뷶뷷뷹",
		6,
		"븁븂븄븆",
		5,
		"븎븏븑븒븓"
	],
	[
		"9581",
		"븕",
		6,
		"븞븠",
		35,
		"빆빇빉빊빋빍빏",
		4,
		"빖빘빜빝빞빟빢빣빥빦빧빩빫",
		4,
		"빲빶",
		4,
		"빾빿뺁뺂뺃뺅",
		6,
		"뺎뺒",
		5,
		"뺚",
		13,
		"뺩",
		14
	],
	[
		"9641",
		"뺸",
		23,
		"뻒뻓"
	],
	[
		"9661",
		"뻕뻖뻙",
		6,
		"뻡뻢뻦",
		5,
		"뻭",
		8
	],
	[
		"9681",
		"뻶",
		10,
		"뼂",
		5,
		"뼊",
		13,
		"뼚뼞",
		33,
		"뽂뽃뽅뽆뽇뽉",
		6,
		"뽒뽓뽔뽖",
		44
	],
	[
		"9741",
		"뾃",
		16,
		"뾕",
		8
	],
	[
		"9761",
		"뾞",
		17,
		"뾱",
		7
	],
	[
		"9781",
		"뾹",
		11,
		"뿆",
		5,
		"뿎뿏뿑뿒뿓뿕",
		6,
		"뿝뿞뿠뿢",
		89,
		"쀽쀾쀿"
	],
	[
		"9841",
		"쁀",
		16,
		"쁒",
		5,
		"쁙쁚쁛"
	],
	[
		"9861",
		"쁝쁞쁟쁡",
		6,
		"쁪",
		15
	],
	[
		"9881",
		"쁺",
		21,
		"삒삓삕삖삗삙",
		6,
		"삢삤삦",
		5,
		"삮삱삲삷",
		4,
		"삾샂샃샄샆샇샊샋샍샎샏샑",
		6,
		"샚샞",
		5,
		"샦샧샩샪샫샭",
		6,
		"샶샸샺",
		5,
		"섁섂섃섅섆섇섉",
		6,
		"섑섒섓섔섖",
		5,
		"섡섢섥섨섩섪섫섮"
	],
	[
		"9941",
		"섲섳섴섵섷섺섻섽섾섿셁",
		6,
		"셊셎",
		5,
		"셖셗"
	],
	[
		"9961",
		"셙셚셛셝",
		6,
		"셦셪",
		5,
		"셱셲셳셵셶셷셹셺셻"
	],
	[
		"9981",
		"셼",
		8,
		"솆",
		5,
		"솏솑솒솓솕솗",
		4,
		"솞솠솢솣솤솦솧솪솫솭솮솯솱",
		11,
		"솾",
		5,
		"쇅쇆쇇쇉쇊쇋쇍",
		6,
		"쇕쇖쇙",
		6,
		"쇡쇢쇣쇥쇦쇧쇩",
		6,
		"쇲쇴",
		7,
		"쇾쇿숁숂숃숅",
		6,
		"숎숐숒",
		5,
		"숚숛숝숞숡숢숣"
	],
	[
		"9a41",
		"숤숥숦숧숪숬숮숰숳숵",
		16
	],
	[
		"9a61",
		"쉆쉇쉉",
		6,
		"쉒쉓쉕쉖쉗쉙",
		6,
		"쉡쉢쉣쉤쉦"
	],
	[
		"9a81",
		"쉧",
		4,
		"쉮쉯쉱쉲쉳쉵",
		6,
		"쉾슀슂",
		5,
		"슊",
		5,
		"슑",
		6,
		"슙슚슜슞",
		5,
		"슦슧슩슪슫슮",
		5,
		"슶슸슺",
		33,
		"싞싟싡싢싥",
		5,
		"싮싰싲싳싴싵싷싺싽싾싿쌁",
		6,
		"쌊쌋쌎쌏"
	],
	[
		"9b41",
		"쌐쌑쌒쌖쌗쌙쌚쌛쌝",
		6,
		"쌦쌧쌪",
		8
	],
	[
		"9b61",
		"쌳",
		17,
		"썆",
		7
	],
	[
		"9b81",
		"썎",
		25,
		"썪썫썭썮썯썱썳",
		4,
		"썺썻썾",
		5,
		"쎅쎆쎇쎉쎊쎋쎍",
		50,
		"쏁",
		22,
		"쏚"
	],
	[
		"9c41",
		"쏛쏝쏞쏡쏣",
		4,
		"쏪쏫쏬쏮",
		5,
		"쏶쏷쏹",
		5
	],
	[
		"9c61",
		"쏿",
		8,
		"쐉",
		6,
		"쐑",
		9
	],
	[
		"9c81",
		"쐛",
		8,
		"쐥",
		6,
		"쐭쐮쐯쐱쐲쐳쐵",
		6,
		"쐾",
		9,
		"쑉",
		26,
		"쑦쑧쑩쑪쑫쑭",
		6,
		"쑶쑷쑸쑺",
		5,
		"쒁",
		18,
		"쒕",
		6,
		"쒝",
		12
	],
	[
		"9d41",
		"쒪",
		13,
		"쒹쒺쒻쒽",
		8
	],
	[
		"9d61",
		"쓆",
		25
	],
	[
		"9d81",
		"쓠",
		8,
		"쓪",
		5,
		"쓲쓳쓵쓶쓷쓹쓻쓼쓽쓾씂",
		9,
		"씍씎씏씑씒씓씕",
		6,
		"씝",
		10,
		"씪씫씭씮씯씱",
		6,
		"씺씼씾",
		5,
		"앆앇앋앏앐앑앒앖앚앛앜앟앢앣앥앦앧앩",
		6,
		"앲앶",
		5,
		"앾앿얁얂얃얅얆얈얉얊얋얎얐얒얓얔"
	],
	[
		"9e41",
		"얖얙얚얛얝얞얟얡",
		7,
		"얪",
		9,
		"얶"
	],
	[
		"9e61",
		"얷얺얿",
		4,
		"엋엍엏엒엓엕엖엗엙",
		6,
		"엢엤엦엧"
	],
	[
		"9e81",
		"엨엩엪엫엯엱엲엳엵엸엹엺엻옂옃옄옉옊옋옍옎옏옑",
		6,
		"옚옝",
		6,
		"옦옧옩옪옫옯옱옲옶옸옺옼옽옾옿왂왃왅왆왇왉",
		6,
		"왒왖",
		5,
		"왞왟왡",
		10,
		"왭왮왰왲",
		5,
		"왺왻왽왾왿욁",
		6,
		"욊욌욎",
		5,
		"욖욗욙욚욛욝",
		6,
		"욦"
	],
	[
		"9f41",
		"욨욪",
		5,
		"욲욳욵욶욷욻",
		4,
		"웂웄웆",
		5,
		"웎"
	],
	[
		"9f61",
		"웏웑웒웓웕",
		6,
		"웞웟웢",
		5,
		"웪웫웭웮웯웱웲"
	],
	[
		"9f81",
		"웳",
		4,
		"웺웻웼웾",
		5,
		"윆윇윉윊윋윍",
		6,
		"윖윘윚",
		5,
		"윢윣윥윦윧윩",
		6,
		"윲윴윶윸윹윺윻윾윿읁읂읃읅",
		4,
		"읋읎읐읙읚읛읝읞읟읡",
		6,
		"읩읪읬",
		7,
		"읶읷읹읺읻읿잀잁잂잆잋잌잍잏잒잓잕잙잛",
		4,
		"잢잧",
		4,
		"잮잯잱잲잳잵잶잷"
	],
	[
		"a041",
		"잸잹잺잻잾쟂",
		5,
		"쟊쟋쟍쟏쟑",
		6,
		"쟙쟚쟛쟜"
	],
	[
		"a061",
		"쟞",
		5,
		"쟥쟦쟧쟩쟪쟫쟭",
		13
	],
	[
		"a081",
		"쟻",
		4,
		"젂젃젅젆젇젉젋",
		4,
		"젒젔젗",
		4,
		"젞젟젡젢젣젥",
		6,
		"젮젰젲",
		5,
		"젹젺젻젽젾젿졁",
		6,
		"졊졋졎",
		5,
		"졕",
		26,
		"졲졳졵졶졷졹졻",
		4,
		"좂좄좈좉좊좎",
		5,
		"좕",
		7,
		"좞좠좢좣좤"
	],
	[
		"a141",
		"좥좦좧좩",
		18,
		"좾좿죀죁"
	],
	[
		"a161",
		"죂죃죅죆죇죉죊죋죍",
		6,
		"죖죘죚",
		5,
		"죢죣죥"
	],
	[
		"a181",
		"죦",
		14,
		"죶",
		5,
		"죾죿줁줂줃줇",
		4,
		"줎　、。·‥…¨〃­―∥＼∼‘’“”〔〕〈",
		9,
		"±×÷≠≤≥∞∴°′″℃Å￠￡￥♂♀∠⊥⌒∂∇≡≒§※☆★○●◎◇◆□■△▲▽▼→←↑↓↔〓≪≫√∽∝∵∫∬∈∋⊆⊇⊂⊃∪∩∧∨￢"
	],
	[
		"a241",
		"줐줒",
		5,
		"줙",
		18
	],
	[
		"a261",
		"줭",
		6,
		"줵",
		18
	],
	[
		"a281",
		"쥈",
		7,
		"쥒쥓쥕쥖쥗쥙",
		6,
		"쥢쥤",
		7,
		"쥭쥮쥯⇒⇔∀∃´～ˇ˘˝˚˙¸˛¡¿ː∮∑∏¤℉‰◁◀▷▶♤♠♡♥♧♣⊙◈▣◐◑▒▤▥▨▧▦▩♨☏☎☜☞¶†‡↕↗↙↖↘♭♩♪♬㉿㈜№㏇™㏂㏘℡€®"
	],
	[
		"a341",
		"쥱쥲쥳쥵",
		6,
		"쥽",
		10,
		"즊즋즍즎즏"
	],
	[
		"a361",
		"즑",
		6,
		"즚즜즞",
		16
	],
	[
		"a381",
		"즯",
		16,
		"짂짃짅짆짉짋",
		4,
		"짒짔짗짘짛！",
		58,
		"￦］",
		32,
		"￣"
	],
	[
		"a441",
		"짞짟짡짣짥짦짨짩짪짫짮짲",
		5,
		"짺짻짽짾짿쨁쨂쨃쨄"
	],
	[
		"a461",
		"쨅쨆쨇쨊쨎",
		5,
		"쨕쨖쨗쨙",
		12
	],
	[
		"a481",
		"쨦쨧쨨쨪",
		28,
		"ㄱ",
		93
	],
	[
		"a541",
		"쩇",
		4,
		"쩎쩏쩑쩒쩓쩕",
		6,
		"쩞쩢",
		5,
		"쩩쩪"
	],
	[
		"a561",
		"쩫",
		17,
		"쩾",
		5,
		"쪅쪆"
	],
	[
		"a581",
		"쪇",
		16,
		"쪙",
		14,
		"ⅰ",
		9
	],
	[
		"a5b0",
		"Ⅰ",
		9
	],
	[
		"a5c1",
		"Α",
		16,
		"Σ",
		6
	],
	[
		"a5e1",
		"α",
		16,
		"σ",
		6
	],
	[
		"a641",
		"쪨",
		19,
		"쪾쪿쫁쫂쫃쫅"
	],
	[
		"a661",
		"쫆",
		5,
		"쫎쫐쫒쫔쫕쫖쫗쫚",
		5,
		"쫡",
		6
	],
	[
		"a681",
		"쫨쫩쫪쫫쫭",
		6,
		"쫵",
		18,
		"쬉쬊─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂┒┑┚┙┖┕┎┍┞┟┡┢┦┧┩┪┭┮┱┲┵┶┹┺┽┾╀╁╃",
		7
	],
	[
		"a741",
		"쬋",
		4,
		"쬑쬒쬓쬕쬖쬗쬙",
		6,
		"쬢",
		7
	],
	[
		"a761",
		"쬪",
		22,
		"쭂쭃쭄"
	],
	[
		"a781",
		"쭅쭆쭇쭊쭋쭍쭎쭏쭑",
		6,
		"쭚쭛쭜쭞",
		5,
		"쭥",
		7,
		"㎕㎖㎗ℓ㎘㏄㎣㎤㎥㎦㎙",
		9,
		"㏊㎍㎎㎏㏏㎈㎉㏈㎧㎨㎰",
		9,
		"㎀",
		4,
		"㎺",
		5,
		"㎐",
		4,
		"Ω㏀㏁㎊㎋㎌㏖㏅㎭㎮㎯㏛㎩㎪㎫㎬㏝㏐㏓㏃㏉㏜㏆"
	],
	[
		"a841",
		"쭭",
		10,
		"쭺",
		14
	],
	[
		"a861",
		"쮉",
		18,
		"쮝",
		6
	],
	[
		"a881",
		"쮤",
		19,
		"쮹",
		11,
		"ÆÐªĦ"
	],
	[
		"a8a6",
		"Ĳ"
	],
	[
		"a8a8",
		"ĿŁØŒºÞŦŊ"
	],
	[
		"a8b1",
		"㉠",
		27,
		"ⓐ",
		25,
		"①",
		14,
		"½⅓⅔¼¾⅛⅜⅝⅞"
	],
	[
		"a941",
		"쯅",
		14,
		"쯕",
		10
	],
	[
		"a961",
		"쯠쯡쯢쯣쯥쯦쯨쯪",
		18
	],
	[
		"a981",
		"쯽",
		14,
		"찎찏찑찒찓찕",
		6,
		"찞찟찠찣찤æđðħıĳĸŀłøœßþŧŋŉ㈀",
		27,
		"⒜",
		25,
		"⑴",
		14,
		"¹²³⁴ⁿ₁₂₃₄"
	],
	[
		"aa41",
		"찥찦찪찫찭찯찱",
		6,
		"찺찿",
		4,
		"챆챇챉챊챋챍챎"
	],
	[
		"aa61",
		"챏",
		4,
		"챖챚",
		5,
		"챡챢챣챥챧챩",
		6,
		"챱챲"
	],
	[
		"aa81",
		"챳챴챶",
		29,
		"ぁ",
		82
	],
	[
		"ab41",
		"첔첕첖첗첚첛첝첞첟첡",
		6,
		"첪첮",
		5,
		"첶첷첹"
	],
	[
		"ab61",
		"첺첻첽",
		6,
		"쳆쳈쳊",
		5,
		"쳑쳒쳓쳕",
		5
	],
	[
		"ab81",
		"쳛",
		8,
		"쳥",
		6,
		"쳭쳮쳯쳱",
		12,
		"ァ",
		85
	],
	[
		"ac41",
		"쳾쳿촀촂",
		5,
		"촊촋촍촎촏촑",
		6,
		"촚촜촞촟촠"
	],
	[
		"ac61",
		"촡촢촣촥촦촧촩촪촫촭",
		11,
		"촺",
		4
	],
	[
		"ac81",
		"촿",
		28,
		"쵝쵞쵟А",
		5,
		"ЁЖ",
		25
	],
	[
		"acd1",
		"а",
		5,
		"ёж",
		25
	],
	[
		"ad41",
		"쵡쵢쵣쵥",
		6,
		"쵮쵰쵲",
		5,
		"쵹",
		7
	],
	[
		"ad61",
		"춁",
		6,
		"춉",
		10,
		"춖춗춙춚춛춝춞춟"
	],
	[
		"ad81",
		"춠춡춢춣춦춨춪",
		5,
		"춱",
		18,
		"췅"
	],
	[
		"ae41",
		"췆",
		5,
		"췍췎췏췑",
		16
	],
	[
		"ae61",
		"췢",
		5,
		"췩췪췫췭췮췯췱",
		6,
		"췺췼췾",
		4
	],
	[
		"ae81",
		"츃츅츆츇츉츊츋츍",
		6,
		"츕츖츗츘츚",
		5,
		"츢츣츥츦츧츩츪츫"
	],
	[
		"af41",
		"츬츭츮츯츲츴츶",
		19
	],
	[
		"af61",
		"칊",
		13,
		"칚칛칝칞칢",
		5,
		"칪칬"
	],
	[
		"af81",
		"칮",
		5,
		"칶칷칹칺칻칽",
		6,
		"캆캈캊",
		5,
		"캒캓캕캖캗캙"
	],
	[
		"b041",
		"캚",
		5,
		"캢캦",
		5,
		"캮",
		12
	],
	[
		"b061",
		"캻",
		5,
		"컂",
		19
	],
	[
		"b081",
		"컖",
		13,
		"컦컧컩컪컭",
		6,
		"컶컺",
		5,
		"가각간갇갈갉갊감",
		7,
		"같",
		4,
		"갠갤갬갭갯갰갱갸갹갼걀걋걍걔걘걜거걱건걷걸걺검겁것겄겅겆겉겊겋게겐겔겜겝겟겠겡겨격겪견겯결겸겹겻겼경곁계곈곌곕곗고곡곤곧골곪곬곯곰곱곳공곶과곽관괄괆"
	],
	[
		"b141",
		"켂켃켅켆켇켉",
		6,
		"켒켔켖",
		5,
		"켝켞켟켡켢켣"
	],
	[
		"b161",
		"켥",
		6,
		"켮켲",
		5,
		"켹",
		11
	],
	[
		"b181",
		"콅",
		14,
		"콖콗콙콚콛콝",
		6,
		"콦콨콪콫콬괌괍괏광괘괜괠괩괬괭괴괵괸괼굄굅굇굉교굔굘굡굣구국군굳굴굵굶굻굼굽굿궁궂궈궉권궐궜궝궤궷귀귁귄귈귐귑귓규균귤그극근귿글긁금급긋긍긔기긱긴긷길긺김깁깃깅깆깊까깍깎깐깔깖깜깝깟깠깡깥깨깩깬깰깸"
	],
	[
		"b241",
		"콭콮콯콲콳콵콶콷콹",
		6,
		"쾁쾂쾃쾄쾆",
		5,
		"쾍"
	],
	[
		"b261",
		"쾎",
		18,
		"쾢",
		5,
		"쾩"
	],
	[
		"b281",
		"쾪",
		5,
		"쾱",
		18,
		"쿅",
		6,
		"깹깻깼깽꺄꺅꺌꺼꺽꺾껀껄껌껍껏껐껑께껙껜껨껫껭껴껸껼꼇꼈꼍꼐꼬꼭꼰꼲꼴꼼꼽꼿꽁꽂꽃꽈꽉꽐꽜꽝꽤꽥꽹꾀꾄꾈꾐꾑꾕꾜꾸꾹꾼꿀꿇꿈꿉꿋꿍꿎꿔꿜꿨꿩꿰꿱꿴꿸뀀뀁뀄뀌뀐뀔뀜뀝뀨끄끅끈끊끌끎끓끔끕끗끙"
	],
	[
		"b341",
		"쿌",
		19,
		"쿢쿣쿥쿦쿧쿩"
	],
	[
		"b361",
		"쿪",
		5,
		"쿲쿴쿶",
		5,
		"쿽쿾쿿퀁퀂퀃퀅",
		5
	],
	[
		"b381",
		"퀋",
		5,
		"퀒",
		5,
		"퀙",
		19,
		"끝끼끽낀낄낌낍낏낑나낙낚난낟날낡낢남납낫",
		4,
		"낱낳내낵낸낼냄냅냇냈냉냐냑냔냘냠냥너넉넋넌널넒넓넘넙넛넜넝넣네넥넨넬넴넵넷넸넹녀녁년녈념녑녔녕녘녜녠노녹논놀놂놈놉놋농높놓놔놘놜놨뇌뇐뇔뇜뇝"
	],
	[
		"b441",
		"퀮",
		5,
		"퀶퀷퀹퀺퀻퀽",
		6,
		"큆큈큊",
		5
	],
	[
		"b461",
		"큑큒큓큕큖큗큙",
		6,
		"큡",
		10,
		"큮큯"
	],
	[
		"b481",
		"큱큲큳큵",
		6,
		"큾큿킀킂",
		18,
		"뇟뇨뇩뇬뇰뇹뇻뇽누눅눈눋눌눔눕눗눙눠눴눼뉘뉜뉠뉨뉩뉴뉵뉼늄늅늉느늑는늘늙늚늠늡늣능늦늪늬늰늴니닉닌닐닒님닙닛닝닢다닥닦단닫",
		4,
		"닳담답닷",
		4,
		"닿대댁댄댈댐댑댓댔댕댜더덕덖던덛덜덞덟덤덥"
	],
	[
		"b541",
		"킕",
		14,
		"킦킧킩킪킫킭",
		5
	],
	[
		"b561",
		"킳킶킸킺",
		5,
		"탂탃탅탆탇탊",
		5,
		"탒탖",
		4
	],
	[
		"b581",
		"탛탞탟탡탢탣탥",
		6,
		"탮탲",
		5,
		"탹",
		11,
		"덧덩덫덮데덱덴델뎀뎁뎃뎄뎅뎌뎐뎔뎠뎡뎨뎬도독돈돋돌돎돐돔돕돗동돛돝돠돤돨돼됐되된될됨됩됫됴두둑둔둘둠둡둣둥둬뒀뒈뒝뒤뒨뒬뒵뒷뒹듀듄듈듐듕드득든듣들듦듬듭듯등듸디딕딘딛딜딤딥딧딨딩딪따딱딴딸"
	],
	[
		"b641",
		"턅",
		7,
		"턎",
		17
	],
	[
		"b661",
		"턠",
		15,
		"턲턳턵턶턷턹턻턼턽턾"
	],
	[
		"b681",
		"턿텂텆",
		5,
		"텎텏텑텒텓텕",
		6,
		"텞텠텢",
		5,
		"텩텪텫텭땀땁땃땄땅땋때땍땐땔땜땝땟땠땡떠떡떤떨떪떫떰떱떳떴떵떻떼떽뗀뗄뗌뗍뗏뗐뗑뗘뗬또똑똔똘똥똬똴뙈뙤뙨뚜뚝뚠뚤뚫뚬뚱뛔뛰뛴뛸뜀뜁뜅뜨뜩뜬뜯뜰뜸뜹뜻띄띈띌띔띕띠띤띨띰띱띳띵라락란랄람랍랏랐랑랒랖랗"
	],
	[
		"b741",
		"텮",
		13,
		"텽",
		6,
		"톅톆톇톉톊"
	],
	[
		"b761",
		"톋",
		20,
		"톢톣톥톦톧"
	],
	[
		"b781",
		"톩",
		6,
		"톲톴톶톷톸톹톻톽톾톿퇁",
		14,
		"래랙랜랠램랩랫랬랭랴략랸럇량러럭런럴럼럽럿렀렁렇레렉렌렐렘렙렛렝려력련렬렴렵렷렸령례롄롑롓로록론롤롬롭롯롱롸롼뢍뢨뢰뢴뢸룀룁룃룅료룐룔룝룟룡루룩룬룰룸룹룻룽뤄뤘뤠뤼뤽륀륄륌륏륑류륙륜률륨륩"
	],
	[
		"b841",
		"퇐",
		7,
		"퇙",
		17
	],
	[
		"b861",
		"퇫",
		8,
		"퇵퇶퇷퇹",
		13
	],
	[
		"b881",
		"툈툊",
		5,
		"툑",
		24,
		"륫륭르륵른를름릅릇릉릊릍릎리릭린릴림립릿링마막만많",
		4,
		"맘맙맛망맞맡맣매맥맨맬맴맵맷맸맹맺먀먁먈먕머먹먼멀멂멈멉멋멍멎멓메멕멘멜멤멥멧멨멩며멱면멸몃몄명몇몌모목몫몬몰몲몸몹못몽뫄뫈뫘뫙뫼"
	],
	[
		"b941",
		"툪툫툮툯툱툲툳툵",
		6,
		"툾퉀퉂",
		5,
		"퉉퉊퉋퉌"
	],
	[
		"b961",
		"퉍",
		14,
		"퉝",
		6,
		"퉥퉦퉧퉨"
	],
	[
		"b981",
		"퉩",
		22,
		"튂튃튅튆튇튉튊튋튌묀묄묍묏묑묘묜묠묩묫무묵묶문묻물묽묾뭄뭅뭇뭉뭍뭏뭐뭔뭘뭡뭣뭬뮈뮌뮐뮤뮨뮬뮴뮷므믄믈믐믓미믹민믿밀밂밈밉밋밌밍및밑바",
		4,
		"받",
		4,
		"밤밥밧방밭배백밴밸뱀뱁뱃뱄뱅뱉뱌뱍뱐뱝버벅번벋벌벎범법벗"
	],
	[
		"ba41",
		"튍튎튏튒튓튔튖",
		5,
		"튝튞튟튡튢튣튥",
		6,
		"튭"
	],
	[
		"ba61",
		"튮튯튰튲",
		5,
		"튺튻튽튾틁틃",
		4,
		"틊틌",
		5
	],
	[
		"ba81",
		"틒틓틕틖틗틙틚틛틝",
		6,
		"틦",
		9,
		"틲틳틵틶틷틹틺벙벚베벡벤벧벨벰벱벳벴벵벼벽변별볍볏볐병볕볘볜보복볶본볼봄봅봇봉봐봔봤봬뵀뵈뵉뵌뵐뵘뵙뵤뵨부북분붇불붉붊붐붑붓붕붙붚붜붤붰붸뷔뷕뷘뷜뷩뷰뷴뷸븀븃븅브븍븐블븜븝븟비빅빈빌빎빔빕빗빙빚빛빠빡빤"
	],
	[
		"bb41",
		"틻",
		4,
		"팂팄팆",
		5,
		"팏팑팒팓팕팗",
		4,
		"팞팢팣"
	],
	[
		"bb61",
		"팤팦팧팪팫팭팮팯팱",
		6,
		"팺팾",
		5,
		"퍆퍇퍈퍉"
	],
	[
		"bb81",
		"퍊",
		31,
		"빨빪빰빱빳빴빵빻빼빽뺀뺄뺌뺍뺏뺐뺑뺘뺙뺨뻐뻑뻔뻗뻘뻠뻣뻤뻥뻬뼁뼈뼉뼘뼙뼛뼜뼝뽀뽁뽄뽈뽐뽑뽕뾔뾰뿅뿌뿍뿐뿔뿜뿟뿡쀼쁑쁘쁜쁠쁨쁩삐삑삔삘삠삡삣삥사삭삯산삳살삵삶삼삽삿샀상샅새색샌샐샘샙샛샜생샤"
	],
	[
		"bc41",
		"퍪",
		17,
		"퍾퍿펁펂펃펅펆펇"
	],
	[
		"bc61",
		"펈펉펊펋펎펒",
		5,
		"펚펛펝펞펟펡",
		6,
		"펪펬펮"
	],
	[
		"bc81",
		"펯",
		4,
		"펵펶펷펹펺펻펽",
		6,
		"폆폇폊",
		5,
		"폑",
		5,
		"샥샨샬샴샵샷샹섀섄섈섐섕서",
		4,
		"섣설섦섧섬섭섯섰성섶세섹센셀셈셉셋셌셍셔셕션셜셤셥셧셨셩셰셴셸솅소속솎손솔솖솜솝솟송솥솨솩솬솰솽쇄쇈쇌쇔쇗쇘쇠쇤쇨쇰쇱쇳쇼쇽숀숄숌숍숏숑수숙순숟술숨숩숫숭"
	],
	[
		"bd41",
		"폗폙",
		7,
		"폢폤",
		7,
		"폮폯폱폲폳폵폶폷"
	],
	[
		"bd61",
		"폸폹폺폻폾퐀퐂",
		5,
		"퐉",
		13
	],
	[
		"bd81",
		"퐗",
		5,
		"퐞",
		25,
		"숯숱숲숴쉈쉐쉑쉔쉘쉠쉥쉬쉭쉰쉴쉼쉽쉿슁슈슉슐슘슛슝스슥슨슬슭슴습슷승시식신싣실싫심십싯싱싶싸싹싻싼쌀쌈쌉쌌쌍쌓쌔쌕쌘쌜쌤쌥쌨쌩썅써썩썬썰썲썸썹썼썽쎄쎈쎌쏀쏘쏙쏜쏟쏠쏢쏨쏩쏭쏴쏵쏸쐈쐐쐤쐬쐰"
	],
	[
		"be41",
		"퐸",
		7,
		"푁푂푃푅",
		14
	],
	[
		"be61",
		"푔",
		7,
		"푝푞푟푡푢푣푥",
		7,
		"푮푰푱푲"
	],
	[
		"be81",
		"푳",
		4,
		"푺푻푽푾풁풃",
		4,
		"풊풌풎",
		5,
		"풕",
		8,
		"쐴쐼쐽쑈쑤쑥쑨쑬쑴쑵쑹쒀쒔쒜쒸쒼쓩쓰쓱쓴쓸쓺쓿씀씁씌씐씔씜씨씩씬씰씸씹씻씽아악안앉않알앍앎앓암압앗았앙앝앞애액앤앨앰앱앳앴앵야약얀얄얇얌얍얏양얕얗얘얜얠얩어억언얹얻얼얽얾엄",
		6,
		"엌엎"
	],
	[
		"bf41",
		"풞",
		10,
		"풪",
		14
	],
	[
		"bf61",
		"풹",
		18,
		"퓍퓎퓏퓑퓒퓓퓕"
	],
	[
		"bf81",
		"퓖",
		5,
		"퓝퓞퓠",
		7,
		"퓩퓪퓫퓭퓮퓯퓱",
		6,
		"퓹퓺퓼에엑엔엘엠엡엣엥여역엮연열엶엷염",
		5,
		"옅옆옇예옌옐옘옙옛옜오옥온올옭옮옰옳옴옵옷옹옻와왁완왈왐왑왓왔왕왜왝왠왬왯왱외왹왼욀욈욉욋욍요욕욘욜욤욥욧용우욱운울욹욺움웁웃웅워웍원월웜웝웠웡웨"
	],
	[
		"c041",
		"퓾",
		5,
		"픅픆픇픉픊픋픍",
		6,
		"픖픘",
		5
	],
	[
		"c061",
		"픞",
		25
	],
	[
		"c081",
		"픸픹픺픻픾픿핁핂핃핅",
		6,
		"핎핐핒",
		5,
		"핚핛핝핞핟핡핢핣웩웬웰웸웹웽위윅윈윌윔윕윗윙유육윤율윰윱윳융윷으윽은을읊음읍읏응",
		7,
		"읜읠읨읫이익인일읽읾잃임입잇있잉잊잎자작잔잖잗잘잚잠잡잣잤장잦재잭잰잴잼잽잿쟀쟁쟈쟉쟌쟎쟐쟘쟝쟤쟨쟬저적전절젊"
	],
	[
		"c141",
		"핤핦핧핪핬핮",
		5,
		"핶핷핹핺핻핽",
		6,
		"햆햊햋"
	],
	[
		"c161",
		"햌햍햎햏햑",
		19,
		"햦햧"
	],
	[
		"c181",
		"햨",
		31,
		"점접젓정젖제젝젠젤젬젭젯젱져젼졀졈졉졌졍졔조족존졸졺좀좁좃종좆좇좋좌좍좔좝좟좡좨좼좽죄죈죌죔죕죗죙죠죡죤죵주죽준줄줅줆줌줍줏중줘줬줴쥐쥑쥔쥘쥠쥡쥣쥬쥰쥴쥼즈즉즌즐즘즙즛증지직진짇질짊짐집짓"
	],
	[
		"c241",
		"헊헋헍헎헏헑헓",
		4,
		"헚헜헞",
		5,
		"헦헧헩헪헫헭헮"
	],
	[
		"c261",
		"헯",
		4,
		"헶헸헺",
		5,
		"혂혃혅혆혇혉",
		6,
		"혒"
	],
	[
		"c281",
		"혖",
		5,
		"혝혞혟혡혢혣혥",
		7,
		"혮",
		9,
		"혺혻징짖짙짚짜짝짠짢짤짧짬짭짯짰짱째짹짼쨀쨈쨉쨋쨌쨍쨔쨘쨩쩌쩍쩐쩔쩜쩝쩟쩠쩡쩨쩽쪄쪘쪼쪽쫀쫄쫌쫍쫏쫑쫓쫘쫙쫠쫬쫴쬈쬐쬔쬘쬠쬡쭁쭈쭉쭌쭐쭘쭙쭝쭤쭸쭹쮜쮸쯔쯤쯧쯩찌찍찐찔찜찝찡찢찧차착찬찮찰참찹찻"
	],
	[
		"c341",
		"혽혾혿홁홂홃홄홆홇홊홌홎홏홐홒홓홖홗홙홚홛홝",
		4
	],
	[
		"c361",
		"홢",
		4,
		"홨홪",
		5,
		"홲홳홵",
		11
	],
	[
		"c381",
		"횁횂횄횆",
		5,
		"횎횏횑횒횓횕",
		7,
		"횞횠횢",
		5,
		"횩횪찼창찾채책챈챌챔챕챗챘챙챠챤챦챨챰챵처척천철첨첩첫첬청체첵첸첼쳄쳅쳇쳉쳐쳔쳤쳬쳰촁초촉촌촐촘촙촛총촤촨촬촹최쵠쵤쵬쵭쵯쵱쵸춈추축춘출춤춥춧충춰췄췌췐취췬췰췸췹췻췽츄츈츌츔츙츠측츤츨츰츱츳층"
	],
	[
		"c441",
		"횫횭횮횯횱",
		7,
		"횺횼",
		7,
		"훆훇훉훊훋"
	],
	[
		"c461",
		"훍훎훏훐훒훓훕훖훘훚",
		5,
		"훡훢훣훥훦훧훩",
		4
	],
	[
		"c481",
		"훮훯훱훲훳훴훶",
		5,
		"훾훿휁휂휃휅",
		11,
		"휒휓휔치칙친칟칠칡침칩칫칭카칵칸칼캄캅캇캉캐캑캔캘캠캡캣캤캥캬캭컁커컥컨컫컬컴컵컷컸컹케켁켄켈켐켑켓켕켜켠켤켬켭켯켰켱켸코콕콘콜콤콥콧콩콰콱콴콸쾀쾅쾌쾡쾨쾰쿄쿠쿡쿤쿨쿰쿱쿳쿵쿼퀀퀄퀑퀘퀭퀴퀵퀸퀼"
	],
	[
		"c541",
		"휕휖휗휚휛휝휞휟휡",
		6,
		"휪휬휮",
		5,
		"휶휷휹"
	],
	[
		"c561",
		"휺휻휽",
		6,
		"흅흆흈흊",
		5,
		"흒흓흕흚",
		4
	],
	[
		"c581",
		"흟흢흤흦흧흨흪흫흭흮흯흱흲흳흵",
		6,
		"흾흿힀힂",
		5,
		"힊힋큄큅큇큉큐큔큘큠크큭큰클큼큽킁키킥킨킬킴킵킷킹타탁탄탈탉탐탑탓탔탕태택탠탤탬탭탯탰탱탸턍터턱턴털턺텀텁텃텄텅테텍텐텔템텝텟텡텨텬텼톄톈토톡톤톨톰톱톳통톺톼퇀퇘퇴퇸툇툉툐투툭툰툴툼툽툿퉁퉈퉜"
	],
	[
		"c641",
		"힍힎힏힑",
		6,
		"힚힜힞",
		5
	],
	[
		"c6a1",
		"퉤튀튁튄튈튐튑튕튜튠튤튬튱트특튼튿틀틂틈틉틋틔틘틜틤틥티틱틴틸팀팁팃팅파팍팎판팔팖팜팝팟팠팡팥패팩팬팰팸팹팻팼팽퍄퍅퍼퍽펀펄펌펍펏펐펑페펙펜펠펨펩펫펭펴편펼폄폅폈평폐폘폡폣포폭폰폴폼폽폿퐁"
	],
	[
		"c7a1",
		"퐈퐝푀푄표푠푤푭푯푸푹푼푿풀풂품풉풋풍풔풩퓌퓐퓔퓜퓟퓨퓬퓰퓸퓻퓽프픈플픔픕픗피픽핀필핌핍핏핑하학한할핥함합핫항해핵핸핼햄햅햇했행햐향허헉헌헐헒험헙헛헝헤헥헨헬헴헵헷헹혀혁현혈혐협혓혔형혜혠"
	],
	[
		"c8a1",
		"혤혭호혹혼홀홅홈홉홋홍홑화확환활홧황홰홱홴횃횅회획횐횔횝횟횡효횬횰횹횻후훅훈훌훑훔훗훙훠훤훨훰훵훼훽휀휄휑휘휙휜휠휨휩휫휭휴휵휸휼흄흇흉흐흑흔흖흗흘흙흠흡흣흥흩희흰흴흼흽힁히힉힌힐힘힙힛힝"
	],
	[
		"caa1",
		"伽佳假價加可呵哥嘉嫁家暇架枷柯歌珂痂稼苛茄街袈訶賈跏軻迦駕刻却各恪慤殼珏脚覺角閣侃刊墾奸姦干幹懇揀杆柬桿澗癎看磵稈竿簡肝艮艱諫間乫喝曷渴碣竭葛褐蝎鞨勘坎堪嵌感憾戡敢柑橄減甘疳監瞰紺邯鑑鑒龕"
	],
	[
		"cba1",
		"匣岬甲胛鉀閘剛堈姜岡崗康强彊慷江畺疆糠絳綱羌腔舡薑襁講鋼降鱇介价個凱塏愷愾慨改槪漑疥皆盖箇芥蓋豈鎧開喀客坑更粳羹醵倨去居巨拒据據擧渠炬祛距踞車遽鉅鋸乾件健巾建愆楗腱虔蹇鍵騫乞傑杰桀儉劍劒檢"
	],
	[
		"cca1",
		"瞼鈐黔劫怯迲偈憩揭擊格檄激膈覡隔堅牽犬甄絹繭肩見譴遣鵑抉決潔結缺訣兼慊箝謙鉗鎌京俓倞傾儆勁勍卿坰境庚徑慶憬擎敬景暻更梗涇炅烱璟璥瓊痙硬磬竟競絅經耕耿脛莖警輕逕鏡頃頸驚鯨係啓堺契季屆悸戒桂械"
	],
	[
		"cda1",
		"棨溪界癸磎稽系繫繼計誡谿階鷄古叩告呱固姑孤尻庫拷攷故敲暠枯槁沽痼皐睾稿羔考股膏苦苽菰藁蠱袴誥賈辜錮雇顧高鼓哭斛曲梏穀谷鵠困坤崑昆梱棍滾琨袞鯤汨滑骨供公共功孔工恐恭拱控攻珙空蚣貢鞏串寡戈果瓜"
	],
	[
		"cea1",
		"科菓誇課跨過鍋顆廓槨藿郭串冠官寬慣棺款灌琯瓘管罐菅觀貫關館刮恝括适侊光匡壙廣曠洸炚狂珖筐胱鑛卦掛罫乖傀塊壞怪愧拐槐魁宏紘肱轟交僑咬喬嬌嶠巧攪敎校橋狡皎矯絞翹膠蕎蛟較轎郊餃驕鮫丘久九仇俱具勾"
	],
	[
		"cfa1",
		"區口句咎嘔坵垢寇嶇廐懼拘救枸柩構歐毆毬求溝灸狗玖球瞿矩究絿耉臼舅舊苟衢謳購軀逑邱鉤銶駒驅鳩鷗龜國局菊鞠鞫麴君窘群裙軍郡堀屈掘窟宮弓穹窮芎躬倦券勸卷圈拳捲權淃眷厥獗蕨蹶闕机櫃潰詭軌饋句晷歸貴"
	],
	[
		"d0a1",
		"鬼龜叫圭奎揆槻珪硅窺竅糾葵規赳逵閨勻均畇筠菌鈞龜橘克剋劇戟棘極隙僅劤勤懃斤根槿瑾筋芹菫覲謹近饉契今妗擒昑檎琴禁禽芩衾衿襟金錦伋及急扱汲級給亘兢矜肯企伎其冀嗜器圻基埼夔奇妓寄岐崎己幾忌技旗旣"
	],
	[
		"d1a1",
		"朞期杞棋棄機欺氣汽沂淇玘琦琪璂璣畸畿碁磯祁祇祈祺箕紀綺羈耆耭肌記譏豈起錡錤飢饑騎騏驥麒緊佶吉拮桔金喫儺喇奈娜懦懶拏拿癩",
		5,
		"那樂",
		4,
		"諾酪駱亂卵暖欄煖爛蘭難鸞捏捺南嵐枏楠湳濫男藍襤拉"
	],
	[
		"d2a1",
		"納臘蠟衲囊娘廊",
		4,
		"乃來內奈柰耐冷女年撚秊念恬拈捻寧寗努勞奴弩怒擄櫓爐瑙盧",
		5,
		"駑魯",
		10,
		"濃籠聾膿農惱牢磊腦賂雷尿壘",
		7,
		"嫩訥杻紐勒",
		5,
		"能菱陵尼泥匿溺多茶"
	],
	[
		"d3a1",
		"丹亶但單團壇彖斷旦檀段湍短端簞緞蛋袒鄲鍛撻澾獺疸達啖坍憺擔曇淡湛潭澹痰聃膽蕁覃談譚錟沓畓答踏遝唐堂塘幢戇撞棠當糖螳黨代垈坮大對岱帶待戴擡玳臺袋貸隊黛宅德悳倒刀到圖堵塗導屠島嶋度徒悼挑掉搗桃"
	],
	[
		"d4a1",
		"棹櫂淘渡滔濤燾盜睹禱稻萄覩賭跳蹈逃途道都鍍陶韜毒瀆牘犢獨督禿篤纛讀墩惇敦旽暾沌焞燉豚頓乭突仝冬凍動同憧東桐棟洞潼疼瞳童胴董銅兜斗杜枓痘竇荳讀豆逗頭屯臀芚遁遯鈍得嶝橙燈登等藤謄鄧騰喇懶拏癩羅"
	],
	[
		"d5a1",
		"蘿螺裸邏樂洛烙珞絡落諾酪駱丹亂卵欄欒瀾爛蘭鸞剌辣嵐擥攬欖濫籃纜藍襤覽拉臘蠟廊朗浪狼琅瑯螂郞來崍徠萊冷掠略亮倆兩凉梁樑粮粱糧良諒輛量侶儷勵呂廬慮戾旅櫚濾礪藜蠣閭驢驪麗黎力曆歷瀝礫轢靂憐戀攣漣"
	],
	[
		"d6a1",
		"煉璉練聯蓮輦連鍊冽列劣洌烈裂廉斂殮濂簾獵令伶囹寧岺嶺怜玲笭羚翎聆逞鈴零靈領齡例澧禮醴隷勞怒撈擄櫓潞瀘爐盧老蘆虜路輅露魯鷺鹵碌祿綠菉錄鹿麓論壟弄朧瀧瓏籠聾儡瀨牢磊賂賚賴雷了僚寮廖料燎療瞭聊蓼"
	],
	[
		"d7a1",
		"遼鬧龍壘婁屢樓淚漏瘻累縷蔞褸鏤陋劉旒柳榴流溜瀏琉瑠留瘤硫謬類六戮陸侖倫崙淪綸輪律慄栗率隆勒肋凜凌楞稜綾菱陵俚利厘吏唎履悧李梨浬犁狸理璃異痢籬罹羸莉裏裡里釐離鯉吝潾燐璘藺躪隣鱗麟林淋琳臨霖砬"
	],
	[
		"d8a1",
		"立笠粒摩瑪痲碼磨馬魔麻寞幕漠膜莫邈万卍娩巒彎慢挽晩曼滿漫灣瞞萬蔓蠻輓饅鰻唜抹末沫茉襪靺亡妄忘忙望網罔芒茫莽輞邙埋妹媒寐昧枚梅每煤罵買賣邁魅脈貊陌驀麥孟氓猛盲盟萌冪覓免冕勉棉沔眄眠綿緬面麵滅"
	],
	[
		"d9a1",
		"蔑冥名命明暝椧溟皿瞑茗蓂螟酩銘鳴袂侮冒募姆帽慕摸摹暮某模母毛牟牡瑁眸矛耗芼茅謀謨貌木沐牧目睦穆鶩歿沒夢朦蒙卯墓妙廟描昴杳渺猫竗苗錨務巫憮懋戊拇撫无楙武毋無珷畝繆舞茂蕪誣貿霧鵡墨默們刎吻問文"
	],
	[
		"daa1",
		"汶紊紋聞蚊門雯勿沕物味媚尾嵋彌微未梶楣渼湄眉米美薇謎迷靡黴岷悶愍憫敏旻旼民泯玟珉緡閔密蜜謐剝博拍搏撲朴樸泊珀璞箔粕縛膊舶薄迫雹駁伴半反叛拌搬攀斑槃泮潘班畔瘢盤盼磐磻礬絆般蟠返頒飯勃拔撥渤潑"
	],
	[
		"dba1",
		"發跋醱鉢髮魃倣傍坊妨尨幇彷房放方旁昉枋榜滂磅紡肪膀舫芳蒡蚌訪謗邦防龐倍俳北培徘拜排杯湃焙盃背胚裴裵褙賠輩配陪伯佰帛柏栢白百魄幡樊煩燔番磻繁蕃藩飜伐筏罰閥凡帆梵氾汎泛犯範范法琺僻劈壁擘檗璧癖"
	],
	[
		"dca1",
		"碧蘗闢霹便卞弁變辨辯邊別瞥鱉鼈丙倂兵屛幷昞昺柄棅炳甁病秉竝輧餠騈保堡報寶普步洑湺潽珤甫菩補褓譜輔伏僕匐卜宓復服福腹茯蔔複覆輹輻馥鰒本乶俸奉封峯峰捧棒烽熢琫縫蓬蜂逢鋒鳳不付俯傅剖副否咐埠夫婦"
	],
	[
		"dda1",
		"孚孵富府復扶敷斧浮溥父符簿缶腐腑膚艀芙莩訃負賦賻赴趺部釜阜附駙鳧北分吩噴墳奔奮忿憤扮昐汾焚盆粉糞紛芬賁雰不佛弗彿拂崩朋棚硼繃鵬丕備匕匪卑妃婢庇悲憊扉批斐枇榧比毖毗毘沸泌琵痺砒碑秕秘粃緋翡肥"
	],
	[
		"dea1",
		"脾臂菲蜚裨誹譬費鄙非飛鼻嚬嬪彬斌檳殯浜濱瀕牝玭貧賓頻憑氷聘騁乍事些仕伺似使俟僿史司唆嗣四士奢娑寫寺射巳師徙思捨斜斯柶査梭死沙泗渣瀉獅砂社祀祠私篩紗絲肆舍莎蓑蛇裟詐詞謝賜赦辭邪飼駟麝削數朔索"
	],
	[
		"dfa1",
		"傘刪山散汕珊産疝算蒜酸霰乷撒殺煞薩三參杉森渗芟蔘衫揷澁鈒颯上傷像償商喪嘗孀尙峠常床庠廂想桑橡湘爽牀狀相祥箱翔裳觴詳象賞霜塞璽賽嗇塞穡索色牲生甥省笙墅壻嶼序庶徐恕抒捿敍暑曙書栖棲犀瑞筮絮緖署"
	],
	[
		"e0a1",
		"胥舒薯西誓逝鋤黍鼠夕奭席惜昔晳析汐淅潟石碩蓆釋錫仙僊先善嬋宣扇敾旋渲煽琁瑄璇璿癬禪線繕羨腺膳船蘚蟬詵跣選銑鐥饍鮮卨屑楔泄洩渫舌薛褻設說雪齧剡暹殲纖蟾贍閃陝攝涉燮葉城姓宬性惺成星晟猩珹盛省筬"
	],
	[
		"e1a1",
		"聖聲腥誠醒世勢歲洗稅笹細說貰召嘯塑宵小少巢所掃搔昭梳沼消溯瀟炤燒甦疏疎瘙笑篠簫素紹蔬蕭蘇訴逍遡邵銷韶騷俗屬束涑粟續謖贖速孫巽損蓀遜飡率宋悚松淞訟誦送頌刷殺灑碎鎖衰釗修受嗽囚垂壽嫂守岫峀帥愁"
	],
	[
		"e2a1",
		"戍手授搜收數樹殊水洙漱燧狩獸琇璲瘦睡秀穗竪粹綏綬繡羞脩茱蒐蓚藪袖誰讐輸遂邃酬銖銹隋隧隨雖需須首髓鬚叔塾夙孰宿淑潚熟琡璹肅菽巡徇循恂旬栒楯橓殉洵淳珣盾瞬筍純脣舜荀蓴蕣詢諄醇錞順馴戌術述鉥崇崧"
	],
	[
		"e3a1",
		"嵩瑟膝蝨濕拾習褶襲丞乘僧勝升承昇繩蠅陞侍匙嘶始媤尸屎屍市弑恃施是時枾柴猜矢示翅蒔蓍視試詩諡豕豺埴寔式息拭植殖湜熄篒蝕識軾食飾伸侁信呻娠宸愼新晨燼申神紳腎臣莘薪藎蜃訊身辛辰迅失室實悉審尋心沁"
	],
	[
		"e4a1",
		"沈深瀋甚芯諶什十拾雙氏亞俄兒啞娥峨我牙芽莪蛾衙訝阿雅餓鴉鵝堊岳嶽幄惡愕握樂渥鄂鍔顎鰐齷安岸按晏案眼雁鞍顔鮟斡謁軋閼唵岩巖庵暗癌菴闇壓押狎鴨仰央怏昻殃秧鴦厓哀埃崖愛曖涯碍艾隘靄厄扼掖液縊腋額"
	],
	[
		"e5a1",
		"櫻罌鶯鸚也倻冶夜惹揶椰爺耶若野弱掠略約若葯蒻藥躍亮佯兩凉壤孃恙揚攘敭暘梁楊樣洋瀁煬痒瘍禳穰糧羊良襄諒讓釀陽量養圄御於漁瘀禦語馭魚齬億憶抑檍臆偃堰彦焉言諺孼蘖俺儼嚴奄掩淹嶪業円予余勵呂女如廬"
	],
	[
		"e6a1",
		"旅歟汝濾璵礖礪與艅茹輿轝閭餘驪麗黎亦力域役易曆歷疫繹譯轢逆驛嚥堧姸娟宴年延憐戀捐挻撚椽沇沿涎涓淵演漣烟然煙煉燃燕璉硏硯秊筵緣練縯聯衍軟輦蓮連鉛鍊鳶列劣咽悅涅烈熱裂說閱厭廉念捻染殮炎焰琰艶苒"
	],
	[
		"e7a1",
		"簾閻髥鹽曄獵燁葉令囹塋寧嶺嶸影怜映暎楹榮永泳渶潁濚瀛瀯煐營獰玲瑛瑩瓔盈穎纓羚聆英詠迎鈴鍈零霙靈領乂倪例刈叡曳汭濊猊睿穢芮藝蘂禮裔詣譽豫醴銳隸霓預五伍俉傲午吾吳嗚塢墺奧娛寤悟惡懊敖旿晤梧汚澳"
	],
	[
		"e8a1",
		"烏熬獒筽蜈誤鰲鼇屋沃獄玉鈺溫瑥瘟穩縕蘊兀壅擁瓮甕癰翁邕雍饔渦瓦窩窪臥蛙蝸訛婉完宛梡椀浣玩琓琬碗緩翫脘腕莞豌阮頑曰往旺枉汪王倭娃歪矮外嵬巍猥畏了僚僥凹堯夭妖姚寥寮尿嶢拗搖撓擾料曜樂橈燎燿瑤療"
	],
	[
		"e9a1",
		"窈窯繇繞耀腰蓼蟯要謠遙遼邀饒慾欲浴縟褥辱俑傭冗勇埇墉容庸慂榕涌湧溶熔瑢用甬聳茸蓉踊鎔鏞龍于佑偶優又友右宇寓尤愚憂旴牛玗瑀盂祐禑禹紆羽芋藕虞迂遇郵釪隅雨雩勖彧旭昱栯煜稶郁頊云暈橒殞澐熉耘芸蕓"
	],
	[
		"eaa1",
		"運隕雲韻蔚鬱亐熊雄元原員圓園垣媛嫄寃怨愿援沅洹湲源爰猿瑗苑袁轅遠阮院願鴛月越鉞位偉僞危圍委威尉慰暐渭爲瑋緯胃萎葦蔿蝟衛褘謂違韋魏乳侑儒兪劉唯喩孺宥幼幽庾悠惟愈愉揄攸有杻柔柚柳楡楢油洧流游溜"
	],
	[
		"eba1",
		"濡猶猷琉瑜由留癒硫紐維臾萸裕誘諛諭踰蹂遊逾遺酉釉鍮類六堉戮毓肉育陸倫允奫尹崙淪潤玧胤贇輪鈗閏律慄栗率聿戎瀜絨融隆垠恩慇殷誾銀隱乙吟淫蔭陰音飮揖泣邑凝應膺鷹依倚儀宜意懿擬椅毅疑矣義艤薏蟻衣誼"
	],
	[
		"eca1",
		"議醫二以伊利吏夷姨履已弛彛怡易李梨泥爾珥理異痍痢移罹而耳肄苡荑裏裡貽貳邇里離飴餌匿溺瀷益翊翌翼謚人仁刃印吝咽因姻寅引忍湮燐璘絪茵藺蚓認隣靭靷鱗麟一佚佾壹日溢逸鎰馹任壬妊姙恁林淋稔臨荏賃入卄"
	],
	[
		"eda1",
		"立笠粒仍剩孕芿仔刺咨姉姿子字孜恣慈滋炙煮玆瓷疵磁紫者自茨蔗藉諮資雌作勺嚼斫昨灼炸爵綽芍酌雀鵲孱棧殘潺盞岑暫潛箴簪蠶雜丈仗匠場墻壯奬將帳庄張掌暲杖樟檣欌漿牆狀獐璋章粧腸臟臧莊葬蔣薔藏裝贓醬長"
	],
	[
		"eea1",
		"障再哉在宰才材栽梓渽滓災縡裁財載齋齎爭箏諍錚佇低儲咀姐底抵杵楮樗沮渚狙猪疽箸紵苧菹著藷詛貯躇這邸雎齟勣吊嫡寂摘敵滴狄炙的積笛籍績翟荻謫賊赤跡蹟迪迹適鏑佃佺傳全典前剪塡塼奠專展廛悛戰栓殿氈澱"
	],
	[
		"efa1",
		"煎琠田甸畑癲筌箋箭篆纏詮輾轉鈿銓錢鐫電顚顫餞切截折浙癤竊節絶占岾店漸点粘霑鮎點接摺蝶丁井亭停偵呈姃定幀庭廷征情挺政整旌晶晸柾楨檉正汀淀淨渟湞瀞炡玎珽町睛碇禎程穽精綎艇訂諪貞鄭酊釘鉦鋌錠霆靖"
	],
	[
		"f0a1",
		"靜頂鼎制劑啼堤帝弟悌提梯濟祭第臍薺製諸蹄醍除際霽題齊俎兆凋助嘲弔彫措操早晁曺曹朝條棗槽漕潮照燥爪璪眺祖祚租稠窕粗糟組繰肇藻蚤詔調趙躁造遭釣阻雕鳥族簇足鏃存尊卒拙猝倧宗從悰慫棕淙琮種終綜縱腫"
	],
	[
		"f1a1",
		"踪踵鍾鐘佐坐左座挫罪主住侏做姝胄呪周嗾奏宙州廚晝朱柱株注洲湊澍炷珠疇籌紂紬綢舟蛛註誅走躊輳週酎酒鑄駐竹粥俊儁准埈寯峻晙樽浚準濬焌畯竣蠢逡遵雋駿茁中仲衆重卽櫛楫汁葺增憎曾拯烝甑症繒蒸證贈之只"
	],
	[
		"f2a1",
		"咫地址志持指摯支旨智枝枳止池沚漬知砥祉祗紙肢脂至芝芷蜘誌識贄趾遲直稙稷織職唇嗔塵振搢晉晋桭榛殄津溱珍瑨璡畛疹盡眞瞋秦縉縝臻蔯袗診賑軫辰進鎭陣陳震侄叱姪嫉帙桎瓆疾秩窒膣蛭質跌迭斟朕什執潗緝輯"
	],
	[
		"f3a1",
		"鏶集徵懲澄且侘借叉嗟嵯差次此磋箚茶蹉車遮捉搾着窄錯鑿齪撰澯燦璨瓚竄簒纂粲纘讚贊鑽餐饌刹察擦札紮僭參塹慘慙懺斬站讒讖倉倡創唱娼廠彰愴敞昌昶暢槍滄漲猖瘡窓脹艙菖蒼債埰寀寨彩採砦綵菜蔡采釵冊柵策"
	],
	[
		"f4a1",
		"責凄妻悽處倜刺剔尺慽戚拓擲斥滌瘠脊蹠陟隻仟千喘天川擅泉淺玔穿舛薦賤踐遷釧闡阡韆凸哲喆徹撤澈綴輟轍鐵僉尖沾添甛瞻簽籤詹諂堞妾帖捷牒疊睫諜貼輒廳晴淸聽菁請靑鯖切剃替涕滯締諦逮遞體初剿哨憔抄招梢"
	],
	[
		"f5a1",
		"椒楚樵炒焦硝礁礎秒稍肖艸苕草蕉貂超酢醋醮促囑燭矗蜀觸寸忖村邨叢塚寵悤憁摠總聰蔥銃撮催崔最墜抽推椎楸樞湫皺秋芻萩諏趨追鄒酋醜錐錘鎚雛騶鰍丑畜祝竺筑築縮蓄蹙蹴軸逐春椿瑃出朮黜充忠沖蟲衝衷悴膵萃"
	],
	[
		"f6a1",
		"贅取吹嘴娶就炊翠聚脆臭趣醉驟鷲側仄厠惻測層侈値嗤峙幟恥梔治淄熾痔痴癡稚穉緇緻置致蚩輜雉馳齒則勅飭親七柒漆侵寢枕沈浸琛砧針鍼蟄秤稱快他咤唾墮妥惰打拖朶楕舵陀馱駝倬卓啄坼度托拓擢晫柝濁濯琢琸託"
	],
	[
		"f7a1",
		"鐸呑嘆坦彈憚歎灘炭綻誕奪脫探眈耽貪塔搭榻宕帑湯糖蕩兌台太怠態殆汰泰笞胎苔跆邰颱宅擇澤撑攄兎吐土討慟桶洞痛筒統通堆槌腿褪退頹偸套妬投透鬪慝特闖坡婆巴把播擺杷波派爬琶破罷芭跛頗判坂板版瓣販辦鈑"
	],
	[
		"f8a1",
		"阪八叭捌佩唄悖敗沛浿牌狽稗覇貝彭澎烹膨愎便偏扁片篇編翩遍鞭騙貶坪平枰萍評吠嬖幣廢弊斃肺蔽閉陛佈包匍匏咆哺圃布怖抛抱捕暴泡浦疱砲胞脯苞葡蒲袍褒逋鋪飽鮑幅暴曝瀑爆輻俵剽彪慓杓標漂瓢票表豹飇飄驃"
	],
	[
		"f9a1",
		"品稟楓諷豊風馮彼披疲皮被避陂匹弼必泌珌畢疋筆苾馝乏逼下何厦夏廈昰河瑕荷蝦賀遐霞鰕壑學虐謔鶴寒恨悍旱汗漢澣瀚罕翰閑閒限韓割轄函含咸啣喊檻涵緘艦銜陷鹹合哈盒蛤閤闔陜亢伉姮嫦巷恒抗杭桁沆港缸肛航"
	],
	[
		"faa1",
		"行降項亥偕咳垓奚孩害懈楷海瀣蟹解該諧邂駭骸劾核倖幸杏荇行享向嚮珦鄕響餉饗香噓墟虛許憲櫶獻軒歇險驗奕爀赫革俔峴弦懸晛泫炫玄玹現眩睍絃絢縣舷衒見賢鉉顯孑穴血頁嫌俠協夾峽挾浹狹脅脇莢鋏頰亨兄刑型"
	],
	[
		"fba1",
		"形泂滎瀅灐炯熒珩瑩荊螢衡逈邢鎣馨兮彗惠慧暳蕙蹊醯鞋乎互呼壕壺好岵弧戶扈昊晧毫浩淏湖滸澔濠濩灝狐琥瑚瓠皓祜糊縞胡芦葫蒿虎號蝴護豪鎬頀顥惑或酷婚昏混渾琿魂忽惚笏哄弘汞泓洪烘紅虹訌鴻化和嬅樺火畵"
	],
	[
		"fca1",
		"禍禾花華話譁貨靴廓擴攫確碻穫丸喚奐宦幻患換歡晥桓渙煥環紈還驩鰥活滑猾豁闊凰幌徨恍惶愰慌晃晄榥況湟滉潢煌璜皇篁簧荒蝗遑隍黃匯回廻徊恢悔懷晦會檜淮澮灰獪繪膾茴蛔誨賄劃獲宖橫鐄哮嚆孝效斅曉梟涍淆"
	],
	[
		"fda1",
		"爻肴酵驍侯候厚后吼喉嗅帿後朽煦珝逅勛勳塤壎焄熏燻薰訓暈薨喧暄煊萱卉喙毁彙徽揮暉煇諱輝麾休携烋畦虧恤譎鷸兇凶匈洶胸黑昕欣炘痕吃屹紇訖欠欽歆吸恰洽翕興僖凞喜噫囍姬嬉希憙憘戱晞曦熙熹熺犧禧稀羲詰"
	]
];

var require$$6 = [
	[
		"0",
		"\u0000",
		127
	],
	[
		"a140",
		"　，、。．‧；：？！︰…‥﹐﹑﹒·﹔﹕﹖﹗｜–︱—︳╴︴﹏（）︵︶｛｝︷︸〔〕︹︺【】︻︼《》︽︾〈〉︿﹀「」﹁﹂『』﹃﹄﹙﹚"
	],
	[
		"a1a1",
		"﹛﹜﹝﹞‘’“”〝〞‵′＃＆＊※§〃○●△▲◎☆★◇◆□■▽▼㊣℅¯￣＿ˍ﹉﹊﹍﹎﹋﹌﹟﹠﹡＋－×÷±√＜＞＝≦≧≠∞≒≡﹢",
		4,
		"～∩∪⊥∠∟⊿㏒㏑∫∮∵∴♀♂⊕⊙↑↓←→↖↗↙↘∥∣／"
	],
	[
		"a240",
		"＼∕﹨＄￥〒￠￡％＠℃℉﹩﹪﹫㏕㎜㎝㎞㏎㎡㎎㎏㏄°兙兛兞兝兡兣嗧瓩糎▁",
		7,
		"▏▎▍▌▋▊▉┼┴┬┤├▔─│▕┌┐└┘╭"
	],
	[
		"a2a1",
		"╮╰╯═╞╪╡◢◣◥◤╱╲╳０",
		9,
		"Ⅰ",
		9,
		"〡",
		8,
		"十卄卅Ａ",
		25,
		"ａ",
		21
	],
	[
		"a340",
		"ｗｘｙｚΑ",
		16,
		"Σ",
		6,
		"α",
		16,
		"σ",
		6,
		"ㄅ",
		10
	],
	[
		"a3a1",
		"ㄐ",
		25,
		"˙ˉˊˇˋ"
	],
	[
		"a3e1",
		"€"
	],
	[
		"a440",
		"一乙丁七乃九了二人儿入八几刀刁力匕十卜又三下丈上丫丸凡久么也乞于亡兀刃勺千叉口土士夕大女子孑孓寸小尢尸山川工己已巳巾干廾弋弓才"
	],
	[
		"a4a1",
		"丑丐不中丰丹之尹予云井互五亢仁什仃仆仇仍今介仄元允內六兮公冗凶分切刈勻勾勿化匹午升卅卞厄友及反壬天夫太夭孔少尤尺屯巴幻廿弔引心戈戶手扎支文斗斤方日曰月木欠止歹毋比毛氏水火爪父爻片牙牛犬王丙"
	],
	[
		"a540",
		"世丕且丘主乍乏乎以付仔仕他仗代令仙仞充兄冉冊冬凹出凸刊加功包匆北匝仟半卉卡占卯卮去可古右召叮叩叨叼司叵叫另只史叱台句叭叻四囚外"
	],
	[
		"a5a1",
		"央失奴奶孕它尼巨巧左市布平幼弁弘弗必戊打扔扒扑斥旦朮本未末札正母民氐永汁汀氾犯玄玉瓜瓦甘生用甩田由甲申疋白皮皿目矛矢石示禾穴立丞丟乒乓乩亙交亦亥仿伉伙伊伕伍伐休伏仲件任仰仳份企伋光兇兆先全"
	],
	[
		"a640",
		"共再冰列刑划刎刖劣匈匡匠印危吉吏同吊吐吁吋各向名合吃后吆吒因回囝圳地在圭圬圯圩夙多夷夸妄奸妃好她如妁字存宇守宅安寺尖屹州帆并年"
	],
	[
		"a6a1",
		"式弛忙忖戎戌戍成扣扛托收早旨旬旭曲曳有朽朴朱朵次此死氖汝汗汙江池汐汕污汛汍汎灰牟牝百竹米糸缶羊羽老考而耒耳聿肉肋肌臣自至臼舌舛舟艮色艾虫血行衣西阡串亨位住佇佗佞伴佛何估佐佑伽伺伸佃佔似但佣"
	],
	[
		"a740",
		"作你伯低伶余佝佈佚兌克免兵冶冷別判利刪刨劫助努劬匣即卵吝吭吞吾否呎吧呆呃吳呈呂君吩告吹吻吸吮吵吶吠吼呀吱含吟听囪困囤囫坊坑址坍"
	],
	[
		"a7a1",
		"均坎圾坐坏圻壯夾妝妒妨妞妣妙妖妍妤妓妊妥孝孜孚孛完宋宏尬局屁尿尾岐岑岔岌巫希序庇床廷弄弟彤形彷役忘忌志忍忱快忸忪戒我抄抗抖技扶抉扭把扼找批扳抒扯折扮投抓抑抆改攻攸旱更束李杏材村杜杖杞杉杆杠"
	],
	[
		"a840",
		"杓杗步每求汞沙沁沈沉沅沛汪決沐汰沌汨沖沒汽沃汲汾汴沆汶沍沔沘沂灶灼災灸牢牡牠狄狂玖甬甫男甸皂盯矣私秀禿究系罕肖肓肝肘肛肚育良芒"
	],
	[
		"a8a1",
		"芋芍見角言谷豆豕貝赤走足身車辛辰迂迆迅迄巡邑邢邪邦那酉釆里防阮阱阪阬並乖乳事些亞享京佯依侍佳使佬供例來侃佰併侈佩佻侖佾侏侑佺兔兒兕兩具其典冽函刻券刷刺到刮制剁劾劻卒協卓卑卦卷卸卹取叔受味呵"
	],
	[
		"a940",
		"咖呸咕咀呻呷咄咒咆呼咐呱呶和咚呢周咋命咎固垃坷坪坩坡坦坤坼夜奉奇奈奄奔妾妻委妹妮姑姆姐姍始姓姊妯妳姒姅孟孤季宗定官宜宙宛尚屈居"
	],
	[
		"a9a1",
		"屆岷岡岸岩岫岱岳帘帚帖帕帛帑幸庚店府底庖延弦弧弩往征彿彼忝忠忽念忿怏怔怯怵怖怪怕怡性怩怫怛或戕房戾所承拉拌拄抿拂抹拒招披拓拔拋拈抨抽押拐拙拇拍抵拚抱拘拖拗拆抬拎放斧於旺昔易昌昆昂明昀昏昕昊"
	],
	[
		"aa40",
		"昇服朋杭枋枕東果杳杷枇枝林杯杰板枉松析杵枚枓杼杪杲欣武歧歿氓氛泣注泳沱泌泥河沽沾沼波沫法泓沸泄油況沮泗泅泱沿治泡泛泊沬泯泜泖泠"
	],
	[
		"aaa1",
		"炕炎炒炊炙爬爭爸版牧物狀狎狙狗狐玩玨玟玫玥甽疝疙疚的盂盲直知矽社祀祁秉秈空穹竺糾罔羌羋者肺肥肢肱股肫肩肴肪肯臥臾舍芳芝芙芭芽芟芹花芬芥芯芸芣芰芾芷虎虱初表軋迎返近邵邸邱邶采金長門阜陀阿阻附"
	],
	[
		"ab40",
		"陂隹雨青非亟亭亮信侵侯便俠俑俏保促侶俘俟俊俗侮俐俄係俚俎俞侷兗冒冑冠剎剃削前剌剋則勇勉勃勁匍南卻厚叛咬哀咨哎哉咸咦咳哇哂咽咪品"
	],
	[
		"aba1",
		"哄哈咯咫咱咻咩咧咿囿垂型垠垣垢城垮垓奕契奏奎奐姜姘姿姣姨娃姥姪姚姦威姻孩宣宦室客宥封屎屏屍屋峙峒巷帝帥帟幽庠度建弈弭彥很待徊律徇後徉怒思怠急怎怨恍恰恨恢恆恃恬恫恪恤扁拜挖按拼拭持拮拽指拱拷"
	],
	[
		"ac40",
		"拯括拾拴挑挂政故斫施既春昭映昧是星昨昱昤曷柿染柱柔某柬架枯柵柩柯柄柑枴柚查枸柏柞柳枰柙柢柝柒歪殃殆段毒毗氟泉洋洲洪流津洌洱洞洗"
	],
	[
		"aca1",
		"活洽派洶洛泵洹洧洸洩洮洵洎洫炫為炳炬炯炭炸炮炤爰牲牯牴狩狠狡玷珊玻玲珍珀玳甚甭畏界畎畋疫疤疥疢疣癸皆皇皈盈盆盃盅省盹相眉看盾盼眇矜砂研砌砍祆祉祈祇禹禺科秒秋穿突竿竽籽紂紅紀紉紇約紆缸美羿耄"
	],
	[
		"ad40",
		"耐耍耑耶胖胥胚胃胄背胡胛胎胞胤胝致舢苧范茅苣苛苦茄若茂茉苒苗英茁苜苔苑苞苓苟苯茆虐虹虻虺衍衫要觔計訂訃貞負赴赳趴軍軌述迦迢迪迥"
	],
	[
		"ada1",
		"迭迫迤迨郊郎郁郃酋酊重閂限陋陌降面革韋韭音頁風飛食首香乘亳倌倍倣俯倦倥俸倩倖倆值借倚倒們俺倀倔倨俱倡個候倘俳修倭倪俾倫倉兼冤冥冢凍凌准凋剖剜剔剛剝匪卿原厝叟哨唐唁唷哼哥哲唆哺唔哩哭員唉哮哪"
	],
	[
		"ae40",
		"哦唧唇哽唏圃圄埂埔埋埃堉夏套奘奚娑娘娜娟娛娓姬娠娣娩娥娌娉孫屘宰害家宴宮宵容宸射屑展屐峭峽峻峪峨峰島崁峴差席師庫庭座弱徒徑徐恙"
	],
	[
		"aea1",
		"恣恥恐恕恭恩息悄悟悚悍悔悌悅悖扇拳挈拿捎挾振捕捂捆捏捉挺捐挽挪挫挨捍捌效敉料旁旅時晉晏晃晒晌晅晁書朔朕朗校核案框桓根桂桔栩梳栗桌桑栽柴桐桀格桃株桅栓栘桁殊殉殷氣氧氨氦氤泰浪涕消涇浦浸海浙涓"
	],
	[
		"af40",
		"浬涉浮浚浴浩涌涊浹涅浥涔烊烘烤烙烈烏爹特狼狹狽狸狷玆班琉珮珠珪珞畔畝畜畚留疾病症疲疳疽疼疹痂疸皋皰益盍盎眩真眠眨矩砰砧砸砝破砷"
	],
	[
		"afa1",
		"砥砭砠砟砲祕祐祠祟祖神祝祗祚秤秣秧租秦秩秘窄窈站笆笑粉紡紗紋紊素索純紐紕級紜納紙紛缺罟羔翅翁耆耘耕耙耗耽耿胱脂胰脅胭胴脆胸胳脈能脊胼胯臭臬舀舐航舫舨般芻茫荒荔荊茸荐草茵茴荏茲茹茶茗荀茱茨荃"
	],
	[
		"b040",
		"虔蚊蚪蚓蚤蚩蚌蚣蚜衰衷袁袂衽衹記訐討訌訕訊託訓訖訏訑豈豺豹財貢起躬軒軔軏辱送逆迷退迺迴逃追逅迸邕郡郝郢酒配酌釘針釗釜釙閃院陣陡"
	],
	[
		"b0a1",
		"陛陝除陘陞隻飢馬骨高鬥鬲鬼乾偺偽停假偃偌做偉健偶偎偕偵側偷偏倏偯偭兜冕凰剪副勒務勘動匐匏匙匿區匾參曼商啪啦啄啞啡啃啊唱啖問啕唯啤唸售啜唬啣唳啁啗圈國圉域堅堊堆埠埤基堂堵執培夠奢娶婁婉婦婪婀"
	],
	[
		"b140",
		"娼婢婚婆婊孰寇寅寄寂宿密尉專將屠屜屝崇崆崎崛崖崢崑崩崔崙崤崧崗巢常帶帳帷康庸庶庵庾張強彗彬彩彫得徙從徘御徠徜恿患悉悠您惋悴惦悽"
	],
	[
		"b1a1",
		"情悻悵惜悼惘惕惆惟悸惚惇戚戛扈掠控捲掖探接捷捧掘措捱掩掉掃掛捫推掄授掙採掬排掏掀捻捩捨捺敝敖救教敗啟敏敘敕敔斜斛斬族旋旌旎晝晚晤晨晦晞曹勗望梁梯梢梓梵桿桶梱梧梗械梃棄梭梆梅梔條梨梟梡梂欲殺"
	],
	[
		"b240",
		"毫毬氫涎涼淳淙液淡淌淤添淺清淇淋涯淑涮淞淹涸混淵淅淒渚涵淚淫淘淪深淮淨淆淄涪淬涿淦烹焉焊烽烯爽牽犁猜猛猖猓猙率琅琊球理現琍瓠瓶"
	],
	[
		"b2a1",
		"瓷甜產略畦畢異疏痔痕疵痊痍皎盔盒盛眷眾眼眶眸眺硫硃硎祥票祭移窒窕笠笨笛第符笙笞笮粒粗粕絆絃統紮紹紼絀細紳組累終紲紱缽羞羚翌翎習耜聊聆脯脖脣脫脩脰脤舂舵舷舶船莎莞莘荸莢莖莽莫莒莊莓莉莠荷荻荼"
	],
	[
		"b340",
		"莆莧處彪蛇蛀蚶蛄蚵蛆蛋蚱蚯蛉術袞袈被袒袖袍袋覓規訪訝訣訥許設訟訛訢豉豚販責貫貨貪貧赧赦趾趺軛軟這逍通逗連速逝逐逕逞造透逢逖逛途"
	],
	[
		"b3a1",
		"部郭都酗野釵釦釣釧釭釩閉陪陵陳陸陰陴陶陷陬雀雪雩章竟頂頃魚鳥鹵鹿麥麻傢傍傅備傑傀傖傘傚最凱割剴創剩勞勝勛博厥啻喀喧啼喊喝喘喂喜喪喔喇喋喃喳單喟唾喲喚喻喬喱啾喉喫喙圍堯堪場堤堰報堡堝堠壹壺奠"
	],
	[
		"b440",
		"婷媚婿媒媛媧孳孱寒富寓寐尊尋就嵌嵐崴嵇巽幅帽幀幃幾廊廁廂廄弼彭復循徨惑惡悲悶惠愜愣惺愕惰惻惴慨惱愎惶愉愀愒戟扉掣掌描揀揩揉揆揍"
	],
	[
		"b4a1",
		"插揣提握揖揭揮捶援揪換摒揚揹敞敦敢散斑斐斯普晰晴晶景暑智晾晷曾替期朝棺棕棠棘棗椅棟棵森棧棹棒棲棣棋棍植椒椎棉棚楮棻款欺欽殘殖殼毯氮氯氬港游湔渡渲湧湊渠渥渣減湛湘渤湖湮渭渦湯渴湍渺測湃渝渾滋"
	],
	[
		"b540",
		"溉渙湎湣湄湲湩湟焙焚焦焰無然煮焜牌犄犀猶猥猴猩琺琪琳琢琥琵琶琴琯琛琦琨甥甦畫番痢痛痣痙痘痞痠登發皖皓皴盜睏短硝硬硯稍稈程稅稀窘"
	],
	[
		"b5a1",
		"窗窖童竣等策筆筐筒答筍筋筏筑粟粥絞結絨絕紫絮絲絡給絢絰絳善翔翕耋聒肅腕腔腋腑腎脹腆脾腌腓腴舒舜菩萃菸萍菠菅萋菁華菱菴著萊菰萌菌菽菲菊萸萎萄菜萇菔菟虛蛟蛙蛭蛔蛛蛤蛐蛞街裁裂袱覃視註詠評詞証詁"
	],
	[
		"b640",
		"詔詛詐詆訴診訶詖象貂貯貼貳貽賁費賀貴買貶貿貸越超趁跎距跋跚跑跌跛跆軻軸軼辜逮逵週逸進逶鄂郵鄉郾酣酥量鈔鈕鈣鈉鈞鈍鈐鈇鈑閔閏開閑"
	],
	[
		"b6a1",
		"間閒閎隊階隋陽隅隆隍陲隄雁雅雄集雇雯雲韌項順須飧飪飯飩飲飭馮馭黃黍黑亂傭債傲傳僅傾催傷傻傯僇剿剷剽募勦勤勢勣匯嗟嗨嗓嗦嗎嗜嗇嗑嗣嗤嗯嗚嗡嗅嗆嗥嗉園圓塞塑塘塗塚塔填塌塭塊塢塒塋奧嫁嫉嫌媾媽媼"
	],
	[
		"b740",
		"媳嫂媲嵩嵯幌幹廉廈弒彙徬微愚意慈感想愛惹愁愈慎慌慄慍愾愴愧愍愆愷戡戢搓搾搞搪搭搽搬搏搜搔損搶搖搗搆敬斟新暗暉暇暈暖暄暘暍會榔業"
	],
	[
		"b7a1",
		"楚楷楠楔極椰概楊楨楫楞楓楹榆楝楣楛歇歲毀殿毓毽溢溯滓溶滂源溝滇滅溥溘溼溺溫滑準溜滄滔溪溧溴煎煙煩煤煉照煜煬煦煌煥煞煆煨煖爺牒猷獅猿猾瑯瑚瑕瑟瑞瑁琿瑙瑛瑜當畸瘀痰瘁痲痱痺痿痴痳盞盟睛睫睦睞督"
	],
	[
		"b840",
		"睹睪睬睜睥睨睢矮碎碰碗碘碌碉硼碑碓硿祺祿禁萬禽稜稚稠稔稟稞窟窠筷節筠筮筧粱粳粵經絹綑綁綏絛置罩罪署義羨群聖聘肆肄腱腰腸腥腮腳腫"
	],
	[
		"b8a1",
		"腹腺腦舅艇蒂葷落萱葵葦葫葉葬葛萼萵葡董葩葭葆虞虜號蛹蜓蜈蜇蜀蛾蛻蜂蜃蜆蜊衙裟裔裙補裘裝裡裊裕裒覜解詫該詳試詩詰誇詼詣誠話誅詭詢詮詬詹詻訾詨豢貊貉賊資賈賄貲賃賂賅跡跟跨路跳跺跪跤跦躲較載軾輊"
	],
	[
		"b940",
		"辟農運遊道遂達逼違遐遇遏過遍遑逾遁鄒鄗酬酪酩釉鈷鉗鈸鈽鉀鈾鉛鉋鉤鉑鈴鉉鉍鉅鈹鈿鉚閘隘隔隕雍雋雉雊雷電雹零靖靴靶預頑頓頊頒頌飼飴"
	],
	[
		"b9a1",
		"飽飾馳馱馴髡鳩麂鼎鼓鼠僧僮僥僖僭僚僕像僑僱僎僩兢凳劃劂匱厭嗾嘀嘛嘗嗽嘔嘆嘉嘍嘎嗷嘖嘟嘈嘐嗶團圖塵塾境墓墊塹墅塽壽夥夢夤奪奩嫡嫦嫩嫗嫖嫘嫣孵寞寧寡寥實寨寢寤察對屢嶄嶇幛幣幕幗幔廓廖弊彆彰徹慇"
	],
	[
		"ba40",
		"愿態慷慢慣慟慚慘慵截撇摘摔撤摸摟摺摑摧搴摭摻敲斡旗旖暢暨暝榜榨榕槁榮槓構榛榷榻榫榴槐槍榭槌榦槃榣歉歌氳漳演滾漓滴漩漾漠漬漏漂漢"
	],
	[
		"baa1",
		"滿滯漆漱漸漲漣漕漫漯澈漪滬漁滲滌滷熔熙煽熊熄熒爾犒犖獄獐瑤瑣瑪瑰瑭甄疑瘧瘍瘋瘉瘓盡監瞄睽睿睡磁碟碧碳碩碣禎福禍種稱窪窩竭端管箕箋筵算箝箔箏箸箇箄粹粽精綻綰綜綽綾綠緊綴網綱綺綢綿綵綸維緒緇綬"
	],
	[
		"bb40",
		"罰翠翡翟聞聚肇腐膀膏膈膊腿膂臧臺與舔舞艋蓉蒿蓆蓄蒙蒞蒲蒜蓋蒸蓀蓓蒐蒼蓑蓊蜿蜜蜻蜢蜥蜴蜘蝕蜷蜩裳褂裴裹裸製裨褚裯誦誌語誣認誡誓誤"
	],
	[
		"bba1",
		"說誥誨誘誑誚誧豪貍貌賓賑賒赫趙趕跼輔輒輕輓辣遠遘遜遣遙遞遢遝遛鄙鄘鄞酵酸酷酴鉸銀銅銘銖鉻銓銜銨鉼銑閡閨閩閣閥閤隙障際雌雒需靼鞅韶頗領颯颱餃餅餌餉駁骯骰髦魁魂鳴鳶鳳麼鼻齊億儀僻僵價儂儈儉儅凜"
	],
	[
		"bc40",
		"劇劈劉劍劊勰厲嘮嘻嘹嘲嘿嘴嘩噓噎噗噴嘶嘯嘰墀墟增墳墜墮墩墦奭嬉嫻嬋嫵嬌嬈寮寬審寫層履嶝嶔幢幟幡廢廚廟廝廣廠彈影德徵慶慧慮慝慕憂"
	],
	[
		"bca1",
		"慼慰慫慾憧憐憫憎憬憚憤憔憮戮摩摯摹撞撲撈撐撰撥撓撕撩撒撮播撫撚撬撙撢撳敵敷數暮暫暴暱樣樟槨樁樞標槽模樓樊槳樂樅槭樑歐歎殤毅毆漿潼澄潑潦潔澆潭潛潸潮澎潺潰潤澗潘滕潯潠潟熟熬熱熨牖犛獎獗瑩璋璃"
	],
	[
		"bd40",
		"瑾璀畿瘠瘩瘟瘤瘦瘡瘢皚皺盤瞎瞇瞌瞑瞋磋磅確磊碾磕碼磐稿稼穀稽稷稻窯窮箭箱範箴篆篇篁箠篌糊締練緯緻緘緬緝編緣線緞緩綞緙緲緹罵罷羯"
	],
	[
		"bda1",
		"翩耦膛膜膝膠膚膘蔗蔽蔚蓮蔬蔭蔓蔑蔣蔡蔔蓬蔥蓿蔆螂蝴蝶蝠蝦蝸蝨蝙蝗蝌蝓衛衝褐複褒褓褕褊誼諒談諄誕請諸課諉諂調誰論諍誶誹諛豌豎豬賠賞賦賤賬賭賢賣賜質賡赭趟趣踫踐踝踢踏踩踟踡踞躺輝輛輟輩輦輪輜輞"
	],
	[
		"be40",
		"輥適遮遨遭遷鄰鄭鄧鄱醇醉醋醃鋅銻銷鋪銬鋤鋁銳銼鋒鋇鋰銲閭閱霄霆震霉靠鞍鞋鞏頡頫頜颳養餓餒餘駝駐駟駛駑駕駒駙骷髮髯鬧魅魄魷魯鴆鴉"
	],
	[
		"bea1",
		"鴃麩麾黎墨齒儒儘儔儐儕冀冪凝劑劓勳噙噫噹噩噤噸噪器噥噱噯噬噢噶壁墾壇壅奮嬝嬴學寰導彊憲憑憩憊懍憶憾懊懈戰擅擁擋撻撼據擄擇擂操撿擒擔撾整曆曉暹曄曇暸樽樸樺橙橫橘樹橄橢橡橋橇樵機橈歙歷氅濂澱澡"
	],
	[
		"bf40",
		"濃澤濁澧澳激澹澶澦澠澴熾燉燐燒燈燕熹燎燙燜燃燄獨璜璣璘璟璞瓢甌甍瘴瘸瘺盧盥瞠瞞瞟瞥磨磚磬磧禦積穎穆穌穋窺篙簑築篤篛篡篩篦糕糖縊"
	],
	[
		"bfa1",
		"縑縈縛縣縞縝縉縐罹羲翰翱翮耨膳膩膨臻興艘艙蕊蕙蕈蕨蕩蕃蕉蕭蕪蕞螃螟螞螢融衡褪褲褥褫褡親覦諦諺諫諱謀諜諧諮諾謁謂諷諭諳諶諼豫豭貓賴蹄踱踴蹂踹踵輻輯輸輳辨辦遵遴選遲遼遺鄴醒錠錶鋸錳錯錢鋼錫錄錚"
	],
	[
		"c040",
		"錐錦錡錕錮錙閻隧隨險雕霎霑霖霍霓霏靛靜靦鞘頰頸頻頷頭頹頤餐館餞餛餡餚駭駢駱骸骼髻髭鬨鮑鴕鴣鴦鴨鴒鴛默黔龍龜優償儡儲勵嚎嚀嚐嚅嚇"
	],
	[
		"c0a1",
		"嚏壕壓壑壎嬰嬪嬤孺尷屨嶼嶺嶽嶸幫彌徽應懂懇懦懋戲戴擎擊擘擠擰擦擬擱擢擭斂斃曙曖檀檔檄檢檜櫛檣橾檗檐檠歜殮毚氈濘濱濟濠濛濤濫濯澀濬濡濩濕濮濰燧營燮燦燥燭燬燴燠爵牆獰獲璩環璦璨癆療癌盪瞳瞪瞰瞬"
	],
	[
		"c140",
		"瞧瞭矯磷磺磴磯礁禧禪穗窿簇簍篾篷簌篠糠糜糞糢糟糙糝縮績繆縷縲繃縫總縱繅繁縴縹繈縵縿縯罄翳翼聱聲聰聯聳臆臃膺臂臀膿膽臉膾臨舉艱薪"
	],
	[
		"c1a1",
		"薄蕾薜薑薔薯薛薇薨薊虧蟀蟑螳蟒蟆螫螻螺蟈蟋褻褶襄褸褽覬謎謗謙講謊謠謝謄謐豁谿豳賺賽購賸賻趨蹉蹋蹈蹊轄輾轂轅輿避遽還邁邂邀鄹醣醞醜鍍鎂錨鍵鍊鍥鍋錘鍾鍬鍛鍰鍚鍔闊闋闌闈闆隱隸雖霜霞鞠韓顆颶餵騁"
	],
	[
		"c240",
		"駿鮮鮫鮪鮭鴻鴿麋黏點黜黝黛鼾齋叢嚕嚮壙壘嬸彝懣戳擴擲擾攆擺擻擷斷曜朦檳檬櫃檻檸櫂檮檯歟歸殯瀉瀋濾瀆濺瀑瀏燻燼燾燸獷獵璧璿甕癖癘"
	],
	[
		"c2a1",
		"癒瞽瞿瞻瞼礎禮穡穢穠竄竅簫簧簪簞簣簡糧織繕繞繚繡繒繙罈翹翻職聶臍臏舊藏薩藍藐藉薰薺薹薦蟯蟬蟲蟠覆覲觴謨謹謬謫豐贅蹙蹣蹦蹤蹟蹕軀轉轍邇邃邈醫醬釐鎔鎊鎖鎢鎳鎮鎬鎰鎘鎚鎗闔闖闐闕離雜雙雛雞霤鞣鞦"
	],
	[
		"c340",
		"鞭韹額顏題顎顓颺餾餿餽餮馥騎髁鬃鬆魏魎魍鯊鯉鯽鯈鯀鵑鵝鵠黠鼕鼬儳嚥壞壟壢寵龐廬懲懷懶懵攀攏曠曝櫥櫝櫚櫓瀛瀟瀨瀚瀝瀕瀘爆爍牘犢獸"
	],
	[
		"c3a1",
		"獺璽瓊瓣疇疆癟癡矇礙禱穫穩簾簿簸簽簷籀繫繭繹繩繪羅繳羶羹羸臘藩藝藪藕藤藥藷蟻蠅蠍蟹蟾襠襟襖襞譁譜識證譚譎譏譆譙贈贊蹼蹲躇蹶蹬蹺蹴轔轎辭邊邋醱醮鏡鏑鏟鏃鏈鏜鏝鏖鏢鏍鏘鏤鏗鏨關隴難霪霧靡韜韻類"
	],
	[
		"c440",
		"願顛颼饅饉騖騙鬍鯨鯧鯖鯛鶉鵡鵲鵪鵬麒麗麓麴勸嚨嚷嚶嚴嚼壤孀孃孽寶巉懸懺攘攔攙曦朧櫬瀾瀰瀲爐獻瓏癢癥礦礪礬礫竇競籌籃籍糯糰辮繽繼"
	],
	[
		"c4a1",
		"纂罌耀臚艦藻藹蘑藺蘆蘋蘇蘊蠔蠕襤覺觸議譬警譯譟譫贏贍躉躁躅躂醴釋鐘鐃鏽闡霰飄饒饑馨騫騰騷騵鰓鰍鹹麵黨鼯齟齣齡儷儸囁囀囂夔屬巍懼懾攝攜斕曩櫻欄櫺殲灌爛犧瓖瓔癩矓籐纏續羼蘗蘭蘚蠣蠢蠡蠟襪襬覽譴"
	],
	[
		"c540",
		"護譽贓躊躍躋轟辯醺鐮鐳鐵鐺鐸鐲鐫闢霸霹露響顧顥饗驅驃驀騾髏魔魑鰭鰥鶯鶴鷂鶸麝黯鼙齜齦齧儼儻囈囊囉孿巔巒彎懿攤權歡灑灘玀瓤疊癮癬"
	],
	[
		"c5a1",
		"禳籠籟聾聽臟襲襯觼讀贖贗躑躓轡酈鑄鑑鑒霽霾韃韁顫饕驕驍髒鬚鱉鰱鰾鰻鷓鷗鼴齬齪龔囌巖戀攣攫攪曬欐瓚竊籤籣籥纓纖纔臢蘸蘿蠱變邐邏鑣鑠鑤靨顯饜驚驛驗髓體髑鱔鱗鱖鷥麟黴囑壩攬灞癱癲矗罐羈蠶蠹衢讓讒"
	],
	[
		"c640",
		"讖艷贛釀鑪靂靈靄韆顰驟鬢魘鱟鷹鷺鹼鹽鼇齷齲廳欖灣籬籮蠻觀躡釁鑲鑰顱饞髖鬣黌灤矚讚鑷韉驢驥纜讜躪釅鑽鑾鑼鱷鱸黷豔鑿鸚爨驪鬱鸛鸞籲"
	],
	[
		"c940",
		"乂乜凵匚厂万丌乇亍囗兀屮彳丏冇与丮亓仂仉仈冘勼卬厹圠夃夬尐巿旡殳毌气爿丱丼仨仜仩仡仝仚刌匜卌圢圣夗夯宁宄尒尻屴屳帄庀庂忉戉扐氕"
	],
	[
		"c9a1",
		"氶汃氿氻犮犰玊禸肊阞伎优伬仵伔仱伀价伈伝伂伅伢伓伄仴伒冱刓刉刐劦匢匟卍厊吇囡囟圮圪圴夼妀奼妅奻奾奷奿孖尕尥屼屺屻屾巟幵庄异弚彴忕忔忏扜扞扤扡扦扢扙扠扚扥旯旮朾朹朸朻机朿朼朳氘汆汒汜汏汊汔汋"
	],
	[
		"ca40",
		"汌灱牞犴犵玎甪癿穵网艸艼芀艽艿虍襾邙邗邘邛邔阢阤阠阣佖伻佢佉体佤伾佧佒佟佁佘伭伳伿佡冏冹刜刞刡劭劮匉卣卲厎厏吰吷吪呔呅吙吜吥吘"
	],
	[
		"caa1",
		"吽呏呁吨吤呇囮囧囥坁坅坌坉坋坒夆奀妦妘妠妗妎妢妐妏妧妡宎宒尨尪岍岏岈岋岉岒岊岆岓岕巠帊帎庋庉庌庈庍弅弝彸彶忒忑忐忭忨忮忳忡忤忣忺忯忷忻怀忴戺抃抌抎抏抔抇扱扻扺扰抁抈扷扽扲扴攷旰旴旳旲旵杅杇"
	],
	[
		"cb40",
		"杙杕杌杈杝杍杚杋毐氙氚汸汧汫沄沋沏汱汯汩沚汭沇沕沜汦汳汥汻沎灴灺牣犿犽狃狆狁犺狅玕玗玓玔玒町甹疔疕皁礽耴肕肙肐肒肜芐芏芅芎芑芓"
	],
	[
		"cba1",
		"芊芃芄豸迉辿邟邡邥邞邧邠阰阨阯阭丳侘佼侅佽侀侇佶佴侉侄佷佌侗佪侚佹侁佸侐侜侔侞侒侂侕佫佮冞冼冾刵刲刳剆刱劼匊匋匼厒厔咇呿咁咑咂咈呫呺呾呥呬呴呦咍呯呡呠咘呣呧呤囷囹坯坲坭坫坱坰坶垀坵坻坳坴坢"
	],
	[
		"cc40",
		"坨坽夌奅妵妺姏姎妲姌姁妶妼姃姖妱妽姀姈妴姇孢孥宓宕屄屇岮岤岠岵岯岨岬岟岣岭岢岪岧岝岥岶岰岦帗帔帙弨弢弣弤彔徂彾彽忞忥怭怦怙怲怋"
	],
	[
		"cca1",
		"怴怊怗怳怚怞怬怢怍怐怮怓怑怌怉怜戔戽抭抴拑抾抪抶拊抮抳抯抻抩抰抸攽斨斻昉旼昄昒昈旻昃昋昍昅旽昑昐曶朊枅杬枎枒杶杻枘枆构杴枍枌杺枟枑枙枃杽极杸杹枔欥殀歾毞氝沓泬泫泮泙沶泔沭泧沷泐泂沺泃泆泭泲"
	],
	[
		"cd40",
		"泒泝沴沊沝沀泞泀洰泍泇沰泹泏泩泑炔炘炅炓炆炄炑炖炂炚炃牪狖狋狘狉狜狒狔狚狌狑玤玡玭玦玢玠玬玝瓝瓨甿畀甾疌疘皯盳盱盰盵矸矼矹矻矺"
	],
	[
		"cda1",
		"矷祂礿秅穸穻竻籵糽耵肏肮肣肸肵肭舠芠苀芫芚芘芛芵芧芮芼芞芺芴芨芡芩苂芤苃芶芢虰虯虭虮豖迒迋迓迍迖迕迗邲邴邯邳邰阹阽阼阺陃俍俅俓侲俉俋俁俔俜俙侻侳俛俇俖侺俀侹俬剄剉勀勂匽卼厗厖厙厘咺咡咭咥哏"
	],
	[
		"ce40",
		"哃茍咷咮哖咶哅哆咠呰咼咢咾呲哞咰垵垞垟垤垌垗垝垛垔垘垏垙垥垚垕壴复奓姡姞姮娀姱姝姺姽姼姶姤姲姷姛姩姳姵姠姾姴姭宨屌峐峘峌峗峋峛"
	],
	[
		"cea1",
		"峞峚峉峇峊峖峓峔峏峈峆峎峟峸巹帡帢帣帠帤庰庤庢庛庣庥弇弮彖徆怷怹恔恲恞恅恓恇恉恛恌恀恂恟怤恄恘恦恮扂扃拏挍挋拵挎挃拫拹挏挌拸拶挀挓挔拺挕拻拰敁敃斪斿昶昡昲昵昜昦昢昳昫昺昝昴昹昮朏朐柁柲柈枺"
	],
	[
		"cf40",
		"柜枻柸柘柀枷柅柫柤柟枵柍枳柷柶柮柣柂枹柎柧柰枲柼柆柭柌枮柦柛柺柉柊柃柪柋欨殂殄殶毖毘毠氠氡洨洴洭洟洼洿洒洊泚洳洄洙洺洚洑洀洝浂"
	],
	[
		"cfa1",
		"洁洘洷洃洏浀洇洠洬洈洢洉洐炷炟炾炱炰炡炴炵炩牁牉牊牬牰牳牮狊狤狨狫狟狪狦狣玅珌珂珈珅玹玶玵玴珫玿珇玾珃珆玸珋瓬瓮甮畇畈疧疪癹盄眈眃眄眅眊盷盻盺矧矨砆砑砒砅砐砏砎砉砃砓祊祌祋祅祄秕种秏秖秎窀"
	],
	[
		"d040",
		"穾竑笀笁籺籸籹籿粀粁紃紈紁罘羑羍羾耇耎耏耔耷胘胇胠胑胈胂胐胅胣胙胜胊胕胉胏胗胦胍臿舡芔苙苾苹茇苨茀苕茺苫苖苴苬苡苲苵茌苻苶苰苪"
	],
	[
		"d0a1",
		"苤苠苺苳苭虷虴虼虳衁衎衧衪衩觓訄訇赲迣迡迮迠郱邽邿郕郅邾郇郋郈釔釓陔陏陑陓陊陎倞倅倇倓倢倰倛俵俴倳倷倬俶俷倗倜倠倧倵倯倱倎党冔冓凊凄凅凈凎剡剚剒剞剟剕剢勍匎厞唦哢唗唒哧哳哤唚哿唄唈哫唑唅哱"
	],
	[
		"d140",
		"唊哻哷哸哠唎唃唋圁圂埌堲埕埒垺埆垽垼垸垶垿埇埐垹埁夎奊娙娖娭娮娕娏娗娊娞娳孬宧宭宬尃屖屔峬峿峮峱峷崀峹帩帨庨庮庪庬弳弰彧恝恚恧"
	],
	[
		"d1a1",
		"恁悢悈悀悒悁悝悃悕悛悗悇悜悎戙扆拲挐捖挬捄捅挶捃揤挹捋捊挼挩捁挴捘捔捙挭捇挳捚捑挸捗捀捈敊敆旆旃旄旂晊晟晇晑朒朓栟栚桉栲栳栻桋桏栖栱栜栵栫栭栯桎桄栴栝栒栔栦栨栮桍栺栥栠欬欯欭欱欴歭肂殈毦毤"
	],
	[
		"d240",
		"毨毣毢毧氥浺浣浤浶洍浡涒浘浢浭浯涑涍淯浿涆浞浧浠涗浰浼浟涂涘洯浨涋浾涀涄洖涃浻浽浵涐烜烓烑烝烋缹烢烗烒烞烠烔烍烅烆烇烚烎烡牂牸"
	],
	[
		"d2a1",
		"牷牶猀狺狴狾狶狳狻猁珓珙珥珖玼珧珣珩珜珒珛珔珝珚珗珘珨瓞瓟瓴瓵甡畛畟疰痁疻痄痀疿疶疺皊盉眝眛眐眓眒眣眑眕眙眚眢眧砣砬砢砵砯砨砮砫砡砩砳砪砱祔祛祏祜祓祒祑秫秬秠秮秭秪秜秞秝窆窉窅窋窌窊窇竘笐"
	],
	[
		"d340",
		"笄笓笅笏笈笊笎笉笒粄粑粊粌粈粍粅紞紝紑紎紘紖紓紟紒紏紌罜罡罞罠罝罛羖羒翃翂翀耖耾耹胺胲胹胵脁胻脀舁舯舥茳茭荄茙荑茥荖茿荁茦茜茢"
	],
	[
		"d3a1",
		"荂荎茛茪茈茼荍茖茤茠茷茯茩荇荅荌荓茞茬荋茧荈虓虒蚢蚨蚖蚍蚑蚞蚇蚗蚆蚋蚚蚅蚥蚙蚡蚧蚕蚘蚎蚝蚐蚔衃衄衭衵衶衲袀衱衿衯袃衾衴衼訒豇豗豻貤貣赶赸趵趷趶軑軓迾迵适迿迻逄迼迶郖郠郙郚郣郟郥郘郛郗郜郤酐"
	],
	[
		"d440",
		"酎酏釕釢釚陜陟隼飣髟鬯乿偰偪偡偞偠偓偋偝偲偈偍偁偛偊偢倕偅偟偩偫偣偤偆偀偮偳偗偑凐剫剭剬剮勖勓匭厜啵啶唼啍啐唴唪啑啢唶唵唰啒啅"
	],
	[
		"d4a1",
		"唌唲啥啎唹啈唭唻啀啋圊圇埻堔埢埶埜埴堀埭埽堈埸堋埳埏堇埮埣埲埥埬埡堎埼堐埧堁堌埱埩埰堍堄奜婠婘婕婧婞娸娵婭婐婟婥婬婓婤婗婃婝婒婄婛婈媎娾婍娹婌婰婩婇婑婖婂婜孲孮寁寀屙崞崋崝崚崠崌崨崍崦崥崏"
	],
	[
		"d540",
		"崰崒崣崟崮帾帴庱庴庹庲庳弶弸徛徖徟悊悐悆悾悰悺惓惔惏惤惙惝惈悱惛悷惊悿惃惍惀挲捥掊掂捽掽掞掭掝掗掫掎捯掇掐据掯捵掜捭掮捼掤挻掟"
	],
	[
		"d5a1",
		"捸掅掁掑掍捰敓旍晥晡晛晙晜晢朘桹梇梐梜桭桮梮梫楖桯梣梬梩桵桴梲梏桷梒桼桫桲梪梀桱桾梛梖梋梠梉梤桸桻梑梌梊桽欶欳欷欸殑殏殍殎殌氪淀涫涴涳湴涬淩淢涷淶淔渀淈淠淟淖涾淥淜淝淛淴淊涽淭淰涺淕淂淏淉"
	],
	[
		"d640",
		"淐淲淓淽淗淍淣涻烺焍烷焗烴焌烰焄烳焐烼烿焆焓焀烸烶焋焂焎牾牻牼牿猝猗猇猑猘猊猈狿猏猞玈珶珸珵琄琁珽琇琀珺珼珿琌琋珴琈畤畣痎痒痏"
	],
	[
		"d6a1",
		"痋痌痑痐皏皉盓眹眯眭眱眲眴眳眽眥眻眵硈硒硉硍硊硌砦硅硐祤祧祩祪祣祫祡离秺秸秶秷窏窔窐笵筇笴笥笰笢笤笳笘笪笝笱笫笭笯笲笸笚笣粔粘粖粣紵紽紸紶紺絅紬紩絁絇紾紿絊紻紨罣羕羜羝羛翊翋翍翐翑翇翏翉耟"
	],
	[
		"d740",
		"耞耛聇聃聈脘脥脙脛脭脟脬脞脡脕脧脝脢舑舸舳舺舴舲艴莐莣莨莍荺荳莤荴莏莁莕莙荵莔莩荽莃莌莝莛莪莋荾莥莯莈莗莰荿莦莇莮荶莚虙虖蚿蚷"
	],
	[
		"d7a1",
		"蛂蛁蛅蚺蚰蛈蚹蚳蚸蛌蚴蚻蚼蛃蚽蚾衒袉袕袨袢袪袚袑袡袟袘袧袙袛袗袤袬袌袓袎覂觖觙觕訰訧訬訞谹谻豜豝豽貥赽赻赹趼跂趹趿跁軘軞軝軜軗軠軡逤逋逑逜逌逡郯郪郰郴郲郳郔郫郬郩酖酘酚酓酕釬釴釱釳釸釤釹釪"
	],
	[
		"d840",
		"釫釷釨釮镺閆閈陼陭陫陱陯隿靪頄飥馗傛傕傔傞傋傣傃傌傎傝偨傜傒傂傇兟凔匒匑厤厧喑喨喥喭啷噅喢喓喈喏喵喁喣喒喤啽喌喦啿喕喡喎圌堩堷"
	],
	[
		"d8a1",
		"堙堞堧堣堨埵塈堥堜堛堳堿堶堮堹堸堭堬堻奡媯媔媟婺媢媞婸媦婼媥媬媕媮娷媄媊媗媃媋媩婻婽媌媜媏媓媝寪寍寋寔寑寊寎尌尰崷嵃嵫嵁嵋崿崵嵑嵎嵕崳崺嵒崽崱嵙嵂崹嵉崸崼崲崶嵀嵅幄幁彘徦徥徫惉悹惌惢惎惄愔"
	],
	[
		"d940",
		"惲愊愖愅惵愓惸惼惾惁愃愘愝愐惿愄愋扊掔掱掰揎揥揨揯揃撝揳揊揠揶揕揲揵摡揟掾揝揜揄揘揓揂揇揌揋揈揰揗揙攲敧敪敤敜敨敥斌斝斞斮旐旒"
	],
	[
		"d9a1",
		"晼晬晻暀晱晹晪晲朁椌棓椄棜椪棬棪棱椏棖棷棫棤棶椓椐棳棡椇棌椈楰梴椑棯棆椔棸棐棽棼棨椋椊椗棎棈棝棞棦棴棑椆棔棩椕椥棇欹欻欿欼殔殗殙殕殽毰毲毳氰淼湆湇渟湉溈渼渽湅湢渫渿湁湝湳渜渳湋湀湑渻渃渮湞"
	],
	[
		"da40",
		"湨湜湡渱渨湠湱湫渹渢渰湓湥渧湸湤湷湕湹湒湦渵渶湚焠焞焯烻焮焱焣焥焢焲焟焨焺焛牋牚犈犉犆犅犋猒猋猰猢猱猳猧猲猭猦猣猵猌琮琬琰琫琖"
	],
	[
		"daa1",
		"琚琡琭琱琤琣琝琩琠琲瓻甯畯畬痧痚痡痦痝痟痤痗皕皒盚睆睇睄睍睅睊睎睋睌矞矬硠硤硥硜硭硱硪确硰硩硨硞硢祴祳祲祰稂稊稃稌稄窙竦竤筊笻筄筈筌筎筀筘筅粢粞粨粡絘絯絣絓絖絧絪絏絭絜絫絒絔絩絑絟絎缾缿罥"
	],
	[
		"db40",
		"罦羢羠羡翗聑聏聐胾胔腃腊腒腏腇脽腍脺臦臮臷臸臹舄舼舽舿艵茻菏菹萣菀菨萒菧菤菼菶萐菆菈菫菣莿萁菝菥菘菿菡菋菎菖菵菉萉萏菞萑萆菂菳"
	],
	[
		"dba1",
		"菕菺菇菑菪萓菃菬菮菄菻菗菢萛菛菾蛘蛢蛦蛓蛣蛚蛪蛝蛫蛜蛬蛩蛗蛨蛑衈衖衕袺裗袹袸裀袾袶袼袷袽袲褁裉覕覘覗觝觚觛詎詍訹詙詀詗詘詄詅詒詈詑詊詌詏豟貁貀貺貾貰貹貵趄趀趉跘跓跍跇跖跜跏跕跙跈跗跅軯軷軺"
	],
	[
		"dc40",
		"軹軦軮軥軵軧軨軶軫軱軬軴軩逭逴逯鄆鄬鄄郿郼鄈郹郻鄁鄀鄇鄅鄃酡酤酟酢酠鈁鈊鈥鈃鈚鈦鈏鈌鈀鈒釿釽鈆鈄鈧鈂鈜鈤鈙鈗鈅鈖镻閍閌閐隇陾隈"
	],
	[
		"dca1",
		"隉隃隀雂雈雃雱雰靬靰靮頇颩飫鳦黹亃亄亶傽傿僆傮僄僊傴僈僂傰僁傺傱僋僉傶傸凗剺剸剻剼嗃嗛嗌嗐嗋嗊嗝嗀嗔嗄嗩喿嗒喍嗏嗕嗢嗖嗈嗲嗍嗙嗂圔塓塨塤塏塍塉塯塕塎塝塙塥塛堽塣塱壼嫇嫄嫋媺媸媱媵媰媿嫈媻嫆"
	],
	[
		"dd40",
		"媷嫀嫊媴媶嫍媹媐寖寘寙尟尳嵱嵣嵊嵥嵲嵬嵞嵨嵧嵢巰幏幎幊幍幋廅廌廆廋廇彀徯徭惷慉慊愫慅愶愲愮慆愯慏愩慀戠酨戣戥戤揅揱揫搐搒搉搠搤"
	],
	[
		"dda1",
		"搳摃搟搕搘搹搷搢搣搌搦搰搨摁搵搯搊搚摀搥搧搋揧搛搮搡搎敯斒旓暆暌暕暐暋暊暙暔晸朠楦楟椸楎楢楱椿楅楪椹楂楗楙楺楈楉椵楬椳椽楥棰楸椴楩楀楯楄楶楘楁楴楌椻楋椷楜楏楑椲楒椯楻椼歆歅歃歂歈歁殛嗀毻毼"
	],
	[
		"de40",
		"毹毷毸溛滖滈溏滀溟溓溔溠溱溹滆滒溽滁溞滉溷溰滍溦滏溲溾滃滜滘溙溒溎溍溤溡溿溳滐滊溗溮溣煇煔煒煣煠煁煝煢煲煸煪煡煂煘煃煋煰煟煐煓"
	],
	[
		"dea1",
		"煄煍煚牏犍犌犑犐犎猼獂猻猺獀獊獉瑄瑊瑋瑒瑑瑗瑀瑏瑐瑎瑂瑆瑍瑔瓡瓿瓾瓽甝畹畷榃痯瘏瘃痷痾痼痹痸瘐痻痶痭痵痽皙皵盝睕睟睠睒睖睚睩睧睔睙睭矠碇碚碔碏碄碕碅碆碡碃硹碙碀碖硻祼禂祽祹稑稘稙稒稗稕稢稓"
	],
	[
		"df40",
		"稛稐窣窢窞竫筦筤筭筴筩筲筥筳筱筰筡筸筶筣粲粴粯綈綆綀綍絿綅絺綎絻綃絼綌綔綄絽綒罭罫罧罨罬羦羥羧翛翜耡腤腠腷腜腩腛腢腲朡腞腶腧腯"
	],
	[
		"dfa1",
		"腄腡舝艉艄艀艂艅蓱萿葖葶葹蒏蒍葥葑葀蒆葧萰葍葽葚葙葴葳葝蔇葞萷萺萴葺葃葸萲葅萩菙葋萯葂萭葟葰萹葎葌葒葯蓅蒎萻葇萶萳葨葾葄萫葠葔葮葐蜋蜄蛷蜌蛺蛖蛵蝍蛸蜎蜉蜁蛶蜍蜅裖裋裍裎裞裛裚裌裐覅覛觟觥觤"
	],
	[
		"e040",
		"觡觠觢觜触詶誆詿詡訿詷誂誄詵誃誁詴詺谼豋豊豥豤豦貆貄貅賌赨赩趑趌趎趏趍趓趔趐趒跰跠跬跱跮跐跩跣跢跧跲跫跴輆軿輁輀輅輇輈輂輋遒逿"
	],
	[
		"e0a1",
		"遄遉逽鄐鄍鄏鄑鄖鄔鄋鄎酮酯鉈鉒鈰鈺鉦鈳鉥鉞銃鈮鉊鉆鉭鉬鉏鉠鉧鉯鈶鉡鉰鈱鉔鉣鉐鉲鉎鉓鉌鉖鈲閟閜閞閛隒隓隑隗雎雺雽雸雵靳靷靸靲頏頍頎颬飶飹馯馲馰馵骭骫魛鳪鳭鳧麀黽僦僔僗僨僳僛僪僝僤僓僬僰僯僣僠"
	],
	[
		"e140",
		"凘劀劁勩勫匰厬嘧嘕嘌嘒嗼嘏嘜嘁嘓嘂嗺嘝嘄嗿嗹墉塼墐墘墆墁塿塴墋塺墇墑墎塶墂墈塻墔墏壾奫嫜嫮嫥嫕嫪嫚嫭嫫嫳嫢嫠嫛嫬嫞嫝嫙嫨嫟孷寠"
	],
	[
		"e1a1",
		"寣屣嶂嶀嵽嶆嵺嶁嵷嶊嶉嶈嵾嵼嶍嵹嵿幘幙幓廘廑廗廎廜廕廙廒廔彄彃彯徶愬愨慁慞慱慳慒慓慲慬憀慴慔慺慛慥愻慪慡慖戩戧戫搫摍摛摝摴摶摲摳摽摵摦撦摎撂摞摜摋摓摠摐摿搿摬摫摙摥摷敳斠暡暠暟朅朄朢榱榶槉"
	],
	[
		"e240",
		"榠槎榖榰榬榼榑榙榎榧榍榩榾榯榿槄榽榤槔榹槊榚槏榳榓榪榡榞槙榗榐槂榵榥槆歊歍歋殞殟殠毃毄毾滎滵滱漃漥滸漷滻漮漉潎漙漚漧漘漻漒滭漊"
	],
	[
		"e2a1",
		"漶潳滹滮漭潀漰漼漵滫漇漎潃漅滽滶漹漜滼漺漟漍漞漈漡熇熐熉熀熅熂熏煻熆熁熗牄牓犗犕犓獃獍獑獌瑢瑳瑱瑵瑲瑧瑮甀甂甃畽疐瘖瘈瘌瘕瘑瘊瘔皸瞁睼瞅瞂睮瞀睯睾瞃碲碪碴碭碨硾碫碞碥碠碬碢碤禘禊禋禖禕禔禓"
	],
	[
		"e340",
		"禗禈禒禐稫穊稰稯稨稦窨窫窬竮箈箜箊箑箐箖箍箌箛箎箅箘劄箙箤箂粻粿粼粺綧綷緂綣綪緁緀緅綝緎緄緆緋緌綯綹綖綼綟綦綮綩綡緉罳翢翣翥翞"
	],
	[
		"e3a1",
		"耤聝聜膉膆膃膇膍膌膋舕蒗蒤蒡蒟蒺蓎蓂蒬蒮蒫蒹蒴蓁蓍蒪蒚蒱蓐蒝蒧蒻蒢蒔蓇蓌蒛蒩蒯蒨蓖蒘蒶蓏蒠蓗蓔蓒蓛蒰蒑虡蜳蜣蜨蝫蝀蜮蜞蜡蜙蜛蝃蜬蝁蜾蝆蜠蜲蜪蜭蜼蜒蜺蜱蜵蝂蜦蜧蜸蜤蜚蜰蜑裷裧裱裲裺裾裮裼裶裻"
	],
	[
		"e440",
		"裰裬裫覝覡覟覞觩觫觨誫誙誋誒誏誖谽豨豩賕賏賗趖踉踂跿踍跽踊踃踇踆踅跾踀踄輐輑輎輍鄣鄜鄠鄢鄟鄝鄚鄤鄡鄛酺酲酹酳銥銤鉶銛鉺銠銔銪銍"
	],
	[
		"e4a1",
		"銦銚銫鉹銗鉿銣鋮銎銂銕銢鉽銈銡銊銆銌銙銧鉾銇銩銝銋鈭隞隡雿靘靽靺靾鞃鞀鞂靻鞄鞁靿韎韍頖颭颮餂餀餇馝馜駃馹馻馺駂馽駇骱髣髧鬾鬿魠魡魟鳱鳲鳵麧僿儃儰僸儆儇僶僾儋儌僽儊劋劌勱勯噈噂噌嘵噁噊噉噆噘"
	],
	[
		"e540",
		"噚噀嘳嘽嘬嘾嘸嘪嘺圚墫墝墱墠墣墯墬墥墡壿嫿嫴嫽嫷嫶嬃嫸嬂嫹嬁嬇嬅嬏屧嶙嶗嶟嶒嶢嶓嶕嶠嶜嶡嶚嶞幩幝幠幜緳廛廞廡彉徲憋憃慹憱憰憢憉"
	],
	[
		"e5a1",
		"憛憓憯憭憟憒憪憡憍慦憳戭摮摰撖撠撅撗撜撏撋撊撌撣撟摨撱撘敶敺敹敻斲斳暵暰暩暲暷暪暯樀樆樗槥槸樕槱槤樠槿槬槢樛樝槾樧槲槮樔槷槧橀樈槦槻樍槼槫樉樄樘樥樏槶樦樇槴樖歑殥殣殢殦氁氀毿氂潁漦潾澇濆澒"
	],
	[
		"e640",
		"澍澉澌潢潏澅潚澖潶潬澂潕潲潒潐潗澔澓潝漀潡潫潽潧澐潓澋潩潿澕潣潷潪潻熲熯熛熰熠熚熩熵熝熥熞熤熡熪熜熧熳犘犚獘獒獞獟獠獝獛獡獚獙"
	],
	[
		"e6a1",
		"獢璇璉璊璆璁瑽璅璈瑼瑹甈甇畾瘥瘞瘙瘝瘜瘣瘚瘨瘛皜皝皞皛瞍瞏瞉瞈磍碻磏磌磑磎磔磈磃磄磉禚禡禠禜禢禛歶稹窲窴窳箷篋箾箬篎箯箹篊箵糅糈糌糋緷緛緪緧緗緡縃緺緦緶緱緰緮緟罶羬羰羭翭翫翪翬翦翨聤聧膣膟"
	],
	[
		"e740",
		"膞膕膢膙膗舖艏艓艒艐艎艑蔤蔻蔏蔀蔩蔎蔉蔍蔟蔊蔧蔜蓻蔫蓺蔈蔌蓴蔪蓲蔕蓷蓫蓳蓼蔒蓪蓩蔖蓾蔨蔝蔮蔂蓽蔞蓶蔱蔦蓧蓨蓰蓯蓹蔘蔠蔰蔋蔙蔯虢"
	],
	[
		"e7a1",
		"蝖蝣蝤蝷蟡蝳蝘蝔蝛蝒蝡蝚蝑蝞蝭蝪蝐蝎蝟蝝蝯蝬蝺蝮蝜蝥蝏蝻蝵蝢蝧蝩衚褅褌褔褋褗褘褙褆褖褑褎褉覢覤覣觭觰觬諏諆誸諓諑諔諕誻諗誾諀諅諘諃誺誽諙谾豍貏賥賟賙賨賚賝賧趠趜趡趛踠踣踥踤踮踕踛踖踑踙踦踧"
	],
	[
		"e840",
		"踔踒踘踓踜踗踚輬輤輘輚輠輣輖輗遳遰遯遧遫鄯鄫鄩鄪鄲鄦鄮醅醆醊醁醂醄醀鋐鋃鋄鋀鋙銶鋏鋱鋟鋘鋩鋗鋝鋌鋯鋂鋨鋊鋈鋎鋦鋍鋕鋉鋠鋞鋧鋑鋓"
	],
	[
		"e8a1",
		"銵鋡鋆銴镼閬閫閮閰隤隢雓霅霈霂靚鞊鞎鞈韐韏頞頝頦頩頨頠頛頧颲餈飺餑餔餖餗餕駜駍駏駓駔駎駉駖駘駋駗駌骳髬髫髳髲髱魆魃魧魴魱魦魶魵魰魨魤魬鳼鳺鳽鳿鳷鴇鴀鳹鳻鴈鴅鴄麃黓鼏鼐儜儓儗儚儑凞匴叡噰噠噮"
	],
	[
		"e940",
		"噳噦噣噭噲噞噷圜圛壈墽壉墿墺壂墼壆嬗嬙嬛嬡嬔嬓嬐嬖嬨嬚嬠嬞寯嶬嶱嶩嶧嶵嶰嶮嶪嶨嶲嶭嶯嶴幧幨幦幯廩廧廦廨廥彋徼憝憨憖懅憴懆懁懌憺"
	],
	[
		"e9a1",
		"憿憸憌擗擖擐擏擉撽撉擃擛擳擙攳敿敼斢曈暾曀曊曋曏暽暻暺曌朣樴橦橉橧樲橨樾橝橭橶橛橑樨橚樻樿橁橪橤橐橏橔橯橩橠樼橞橖橕橍橎橆歕歔歖殧殪殫毈毇氄氃氆澭濋澣濇澼濎濈潞濄澽澞濊澨瀄澥澮澺澬澪濏澿澸"
	],
	[
		"ea40",
		"澢濉澫濍澯澲澰燅燂熿熸燖燀燁燋燔燊燇燏熽燘熼燆燚燛犝犞獩獦獧獬獥獫獪瑿璚璠璔璒璕璡甋疀瘯瘭瘱瘽瘳瘼瘵瘲瘰皻盦瞚瞝瞡瞜瞛瞢瞣瞕瞙"
	],
	[
		"eaa1",
		"瞗磝磩磥磪磞磣磛磡磢磭磟磠禤穄穈穇窶窸窵窱窷篞篣篧篝篕篥篚篨篹篔篪篢篜篫篘篟糒糔糗糐糑縒縡縗縌縟縠縓縎縜縕縚縢縋縏縖縍縔縥縤罃罻罼罺羱翯耪耩聬膱膦膮膹膵膫膰膬膴膲膷膧臲艕艖艗蕖蕅蕫蕍蕓蕡蕘"
	],
	[
		"eb40",
		"蕀蕆蕤蕁蕢蕄蕑蕇蕣蔾蕛蕱蕎蕮蕵蕕蕧蕠薌蕦蕝蕔蕥蕬虣虥虤螛螏螗螓螒螈螁螖螘蝹螇螣螅螐螑螝螄螔螜螚螉褞褦褰褭褮褧褱褢褩褣褯褬褟觱諠"
	],
	[
		"eba1",
		"諢諲諴諵諝謔諤諟諰諈諞諡諨諿諯諻貑貒貐賵賮賱賰賳赬赮趥趧踳踾踸蹀蹅踶踼踽蹁踰踿躽輶輮輵輲輹輷輴遶遹遻邆郺鄳鄵鄶醓醐醑醍醏錧錞錈錟錆錏鍺錸錼錛錣錒錁鍆錭錎錍鋋錝鋺錥錓鋹鋷錴錂錤鋿錩錹錵錪錔錌"
	],
	[
		"ec40",
		"錋鋾錉錀鋻錖閼闍閾閹閺閶閿閵閽隩雔霋霒霐鞙鞗鞔韰韸頵頯頲餤餟餧餩馞駮駬駥駤駰駣駪駩駧骹骿骴骻髶髺髹髷鬳鮀鮅鮇魼魾魻鮂鮓鮒鮐魺鮕"
	],
	[
		"eca1",
		"魽鮈鴥鴗鴠鴞鴔鴩鴝鴘鴢鴐鴙鴟麈麆麇麮麭黕黖黺鼒鼽儦儥儢儤儠儩勴嚓嚌嚍嚆嚄嚃噾嚂噿嚁壖壔壏壒嬭嬥嬲嬣嬬嬧嬦嬯嬮孻寱寲嶷幬幪徾徻懃憵憼懧懠懥懤懨懞擯擩擣擫擤擨斁斀斶旚曒檍檖檁檥檉檟檛檡檞檇檓檎"
	],
	[
		"ed40",
		"檕檃檨檤檑橿檦檚檅檌檒歛殭氉濌澩濴濔濣濜濭濧濦濞濲濝濢濨燡燱燨燲燤燰燢獳獮獯璗璲璫璐璪璭璱璥璯甐甑甒甏疄癃癈癉癇皤盩瞵瞫瞲瞷瞶"
	],
	[
		"eda1",
		"瞴瞱瞨矰磳磽礂磻磼磲礅磹磾礄禫禨穜穛穖穘穔穚窾竀竁簅簏篲簀篿篻簎篴簋篳簂簉簃簁篸篽簆篰篱簐簊糨縭縼繂縳顈縸縪繉繀繇縩繌縰縻縶繄縺罅罿罾罽翴翲耬膻臄臌臊臅臇膼臩艛艚艜薃薀薏薧薕薠薋薣蕻薤薚薞"
	],
	[
		"ee40",
		"蕷蕼薉薡蕺蕸蕗薎薖薆薍薙薝薁薢薂薈薅蕹蕶薘薐薟虨螾螪螭蟅螰螬螹螵螼螮蟉蟃蟂蟌螷螯蟄蟊螴螶螿螸螽蟞螲褵褳褼褾襁襒褷襂覭覯覮觲觳謞"
	],
	[
		"eea1",
		"謘謖謑謅謋謢謏謒謕謇謍謈謆謜謓謚豏豰豲豱豯貕貔賹赯蹎蹍蹓蹐蹌蹇轃轀邅遾鄸醚醢醛醙醟醡醝醠鎡鎃鎯鍤鍖鍇鍼鍘鍜鍶鍉鍐鍑鍠鍭鎏鍌鍪鍹鍗鍕鍒鍏鍱鍷鍻鍡鍞鍣鍧鎀鍎鍙闇闀闉闃闅閷隮隰隬霠霟霘霝霙鞚鞡鞜"
	],
	[
		"ef40",
		"鞞鞝韕韔韱顁顄顊顉顅顃餥餫餬餪餳餲餯餭餱餰馘馣馡騂駺駴駷駹駸駶駻駽駾駼騃骾髾髽鬁髼魈鮚鮨鮞鮛鮦鮡鮥鮤鮆鮢鮠鮯鴳鵁鵧鴶鴮鴯鴱鴸鴰"
	],
	[
		"efa1",
		"鵅鵂鵃鴾鴷鵀鴽翵鴭麊麉麍麰黈黚黻黿鼤鼣鼢齔龠儱儭儮嚘嚜嚗嚚嚝嚙奰嬼屩屪巀幭幮懘懟懭懮懱懪懰懫懖懩擿攄擽擸攁攃擼斔旛曚曛曘櫅檹檽櫡櫆檺檶檷櫇檴檭歞毉氋瀇瀌瀍瀁瀅瀔瀎濿瀀濻瀦濼濷瀊爁燿燹爃燽獶"
	],
	[
		"f040",
		"璸瓀璵瓁璾璶璻瓂甔甓癜癤癙癐癓癗癚皦皽盬矂瞺磿礌礓礔礉礐礒礑禭禬穟簜簩簙簠簟簭簝簦簨簢簥簰繜繐繖繣繘繢繟繑繠繗繓羵羳翷翸聵臑臒"
	],
	[
		"f0a1",
		"臐艟艞薴藆藀藃藂薳薵薽藇藄薿藋藎藈藅薱薶藒蘤薸薷薾虩蟧蟦蟢蟛蟫蟪蟥蟟蟳蟤蟔蟜蟓蟭蟘蟣螤蟗蟙蠁蟴蟨蟝襓襋襏襌襆襐襑襉謪謧謣謳謰謵譇謯謼謾謱謥謷謦謶謮謤謻謽謺豂豵貙貘貗賾贄贂贀蹜蹢蹠蹗蹖蹞蹥蹧"
	],
	[
		"f140",
		"蹛蹚蹡蹝蹩蹔轆轇轈轋鄨鄺鄻鄾醨醥醧醯醪鎵鎌鎒鎷鎛鎝鎉鎧鎎鎪鎞鎦鎕鎈鎙鎟鎍鎱鎑鎲鎤鎨鎴鎣鎥闒闓闑隳雗雚巂雟雘雝霣霢霥鞬鞮鞨鞫鞤鞪"
	],
	[
		"f1a1",
		"鞢鞥韗韙韖韘韺顐顑顒颸饁餼餺騏騋騉騍騄騑騊騅騇騆髀髜鬈鬄鬅鬩鬵魊魌魋鯇鯆鯃鮿鯁鮵鮸鯓鮶鯄鮹鮽鵜鵓鵏鵊鵛鵋鵙鵖鵌鵗鵒鵔鵟鵘鵚麎麌黟鼁鼀鼖鼥鼫鼪鼩鼨齌齕儴儵劖勷厴嚫嚭嚦嚧嚪嚬壚壝壛夒嬽嬾嬿巃幰"
	],
	[
		"f240",
		"徿懻攇攐攍攉攌攎斄旞旝曞櫧櫠櫌櫑櫙櫋櫟櫜櫐櫫櫏櫍櫞歠殰氌瀙瀧瀠瀖瀫瀡瀢瀣瀩瀗瀤瀜瀪爌爊爇爂爅犥犦犤犣犡瓋瓅璷瓃甖癠矉矊矄矱礝礛"
	],
	[
		"f2a1",
		"礡礜礗礞禰穧穨簳簼簹簬簻糬糪繶繵繸繰繷繯繺繲繴繨罋罊羃羆羷翽翾聸臗臕艤艡艣藫藱藭藙藡藨藚藗藬藲藸藘藟藣藜藑藰藦藯藞藢蠀蟺蠃蟶蟷蠉蠌蠋蠆蟼蠈蟿蠊蠂襢襚襛襗襡襜襘襝襙覈覷覶觶譐譈譊譀譓譖譔譋譕"
	],
	[
		"f340",
		"譑譂譒譗豃豷豶貚贆贇贉趬趪趭趫蹭蹸蹳蹪蹯蹻軂轒轑轏轐轓辴酀鄿醰醭鏞鏇鏏鏂鏚鏐鏹鏬鏌鏙鎩鏦鏊鏔鏮鏣鏕鏄鏎鏀鏒鏧镽闚闛雡霩霫霬霨霦"
	],
	[
		"f3a1",
		"鞳鞷鞶韝韞韟顜顙顝顗颿颽颻颾饈饇饃馦馧騚騕騥騝騤騛騢騠騧騣騞騜騔髂鬋鬊鬎鬌鬷鯪鯫鯠鯞鯤鯦鯢鯰鯔鯗鯬鯜鯙鯥鯕鯡鯚鵷鶁鶊鶄鶈鵱鶀鵸鶆鶋鶌鵽鵫鵴鵵鵰鵩鶅鵳鵻鶂鵯鵹鵿鶇鵨麔麑黀黼鼭齀齁齍齖齗齘匷嚲"
	],
	[
		"f440",
		"嚵嚳壣孅巆巇廮廯忀忁懹攗攖攕攓旟曨曣曤櫳櫰櫪櫨櫹櫱櫮櫯瀼瀵瀯瀷瀴瀱灂瀸瀿瀺瀹灀瀻瀳灁爓爔犨獽獼璺皫皪皾盭矌矎矏矍矲礥礣礧礨礤礩"
	],
	[
		"f4a1",
		"禲穮穬穭竷籉籈籊籇籅糮繻繾纁纀羺翿聹臛臙舋艨艩蘢藿蘁藾蘛蘀藶蘄蘉蘅蘌藽蠙蠐蠑蠗蠓蠖襣襦覹觷譠譪譝譨譣譥譧譭趮躆躈躄轙轖轗轕轘轚邍酃酁醷醵醲醳鐋鐓鏻鐠鐏鐔鏾鐕鐐鐨鐙鐍鏵鐀鏷鐇鐎鐖鐒鏺鐉鏸鐊鏿"
	],
	[
		"f540",
		"鏼鐌鏶鐑鐆闞闠闟霮霯鞹鞻韽韾顠顢顣顟飁飂饐饎饙饌饋饓騲騴騱騬騪騶騩騮騸騭髇髊髆鬐鬒鬑鰋鰈鯷鰅鰒鯸鱀鰇鰎鰆鰗鰔鰉鶟鶙鶤鶝鶒鶘鶐鶛"
	],
	[
		"f5a1",
		"鶠鶔鶜鶪鶗鶡鶚鶢鶨鶞鶣鶿鶩鶖鶦鶧麙麛麚黥黤黧黦鼰鼮齛齠齞齝齙龑儺儹劘劗囃嚽嚾孈孇巋巏廱懽攛欂櫼欃櫸欀灃灄灊灈灉灅灆爝爚爙獾甗癪矐礭礱礯籔籓糲纊纇纈纋纆纍罍羻耰臝蘘蘪蘦蘟蘣蘜蘙蘧蘮蘡蘠蘩蘞蘥"
	],
	[
		"f640",
		"蠩蠝蠛蠠蠤蠜蠫衊襭襩襮襫觺譹譸譅譺譻贐贔趯躎躌轞轛轝酆酄酅醹鐿鐻鐶鐩鐽鐼鐰鐹鐪鐷鐬鑀鐱闥闤闣霵霺鞿韡顤飉飆飀饘饖騹騽驆驄驂驁騺"
	],
	[
		"f6a1",
		"騿髍鬕鬗鬘鬖鬺魒鰫鰝鰜鰬鰣鰨鰩鰤鰡鶷鶶鶼鷁鷇鷊鷏鶾鷅鷃鶻鶵鷎鶹鶺鶬鷈鶱鶭鷌鶳鷍鶲鹺麜黫黮黭鼛鼘鼚鼱齎齥齤龒亹囆囅囋奱孋孌巕巑廲攡攠攦攢欋欈欉氍灕灖灗灒爞爟犩獿瓘瓕瓙瓗癭皭礵禴穰穱籗籜籙籛籚"
	],
	[
		"f740",
		"糴糱纑罏羇臞艫蘴蘵蘳蘬蘲蘶蠬蠨蠦蠪蠥襱覿覾觻譾讄讂讆讅譿贕躕躔躚躒躐躖躗轠轢酇鑌鑐鑊鑋鑏鑇鑅鑈鑉鑆霿韣顪顩飋饔饛驎驓驔驌驏驈驊"
	],
	[
		"f7a1",
		"驉驒驐髐鬙鬫鬻魖魕鱆鱈鰿鱄鰹鰳鱁鰼鰷鰴鰲鰽鰶鷛鷒鷞鷚鷋鷐鷜鷑鷟鷩鷙鷘鷖鷵鷕鷝麶黰鼵鼳鼲齂齫龕龢儽劙壨壧奲孍巘蠯彏戁戃戄攩攥斖曫欑欒欏毊灛灚爢玂玁玃癰矔籧籦纕艬蘺虀蘹蘼蘱蘻蘾蠰蠲蠮蠳襶襴襳觾"
	],
	[
		"f840",
		"讌讎讋讈豅贙躘轤轣醼鑢鑕鑝鑗鑞韄韅頀驖驙鬞鬟鬠鱒鱘鱐鱊鱍鱋鱕鱙鱌鱎鷻鷷鷯鷣鷫鷸鷤鷶鷡鷮鷦鷲鷰鷢鷬鷴鷳鷨鷭黂黐黲黳鼆鼜鼸鼷鼶齃齏"
	],
	[
		"f8a1",
		"齱齰齮齯囓囍孎屭攭曭曮欓灟灡灝灠爣瓛瓥矕礸禷禶籪纗羉艭虃蠸蠷蠵衋讔讕躞躟躠躝醾醽釂鑫鑨鑩雥靆靃靇韇韥驞髕魙鱣鱧鱦鱢鱞鱠鸂鷾鸇鸃鸆鸅鸀鸁鸉鷿鷽鸄麠鼞齆齴齵齶囔攮斸欘欙欗欚灢爦犪矘矙礹籩籫糶纚"
	],
	[
		"f940",
		"纘纛纙臠臡虆虇虈襹襺襼襻觿讘讙躥躤躣鑮鑭鑯鑱鑳靉顲饟鱨鱮鱭鸋鸍鸐鸏鸒鸑麡黵鼉齇齸齻齺齹圞灦籯蠼趲躦釃鑴鑸鑶鑵驠鱴鱳鱱鱵鸔鸓黶鼊"
	],
	[
		"f9a1",
		"龤灨灥糷虪蠾蠽蠿讞貜躩軉靋顳顴飌饡馫驤驦驧鬤鸕鸗齈戇欞爧虌躨钂钀钁驩驨鬮鸙爩虋讟钃鱹麷癵驫鱺鸝灩灪麤齾齉龘碁銹裏墻恒粧嫺╔╦╗╠╬╣╚╩╝╒╤╕╞╪╡╘╧╛╓╥╖╟╫╢╙╨╜║═╭╮╰╯▓"
	]
];

var require$$7 = [
	[
		"8740",
		"䏰䰲䘃䖦䕸𧉧䵷䖳𧲱䳢𧳅㮕䜶䝄䱇䱀𤊿𣘗𧍒𦺋𧃒䱗𪍑䝏䗚䲅𧱬䴇䪤䚡𦬣爥𥩔𡩣𣸆𣽡晍囻"
	],
	[
		"8767",
		"綕夝𨮹㷴霴𧯯寛𡵞媤㘥𩺰嫑宷峼杮薓𩥅瑡璝㡵𡵓𣚞𦀡㻬"
	],
	[
		"87a1",
		"𥣞㫵竼龗𤅡𨤍𣇪𠪊𣉞䌊蒄龖鐯䤰蘓墖靊鈘秐稲晠権袝瑌篅枂稬剏遆㓦珄𥶹瓆鿇垳䤯呌䄱𣚎堘穲𧭥讏䚮𦺈䆁𥶙箮𢒼鿈𢓁𢓉𢓌鿉蔄𣖻䂴鿊䓡𪷿拁灮鿋"
	],
	[
		"8840",
		"㇀",
		4,
		"𠄌㇅𠃑𠃍㇆㇇𠃋𡿨㇈𠃊㇉㇊㇋㇌𠄎㇍㇎ĀÁǍÀĒÉĚÈŌÓǑÒ࿿Ê̄Ế࿿Ê̌ỀÊāáǎàɑēéěèīíǐìōóǒòūúǔùǖǘǚ"
	],
	[
		"88a1",
		"ǜü࿿ê̄ế࿿ê̌ềêɡ⏚⏛"
	],
	[
		"8940",
		"𪎩𡅅"
	],
	[
		"8943",
		"攊"
	],
	[
		"8946",
		"丽滝鵎釟"
	],
	[
		"894c",
		"𧜵撑会伨侨兖兴农凤务动医华发变团声处备夲头学实実岚庆总斉柾栄桥济炼电纤纬纺织经统缆缷艺苏药视设询车轧轮"
	],
	[
		"89a1",
		"琑糼緍楆竉刧"
	],
	[
		"89ab",
		"醌碸酞肼"
	],
	[
		"89b0",
		"贋胶𠧧"
	],
	[
		"89b5",
		"肟黇䳍鷉鸌䰾𩷶𧀎鸊𪄳㗁"
	],
	[
		"89c1",
		"溚舾甙"
	],
	[
		"89c5",
		"䤑马骏龙禇𨑬𡷊𠗐𢫦两亁亀亇亿仫伷㑌侽㹈倃傈㑽㒓㒥円夅凛凼刅争剹劐匧㗇厩㕑厰㕓参吣㕭㕲㚁咓咣咴咹哐哯唘唣唨㖘唿㖥㖿嗗㗅"
	],
	[
		"8a40",
		"𧶄唥"
	],
	[
		"8a43",
		"𠱂𠴕𥄫喐𢳆㧬𠍁蹆𤶸𩓥䁓𨂾睺𢰸㨴䟕𨅝𦧲𤷪擝𠵼𠾴𠳕𡃴撍蹾𠺖𠰋𠽤𢲩𨉖𤓓"
	],
	[
		"8a64",
		"𠵆𩩍𨃩䟴𤺧𢳂骲㩧𩗴㿭㔆𥋇𩟔𧣈𢵄鵮頕"
	],
	[
		"8a76",
		"䏙𦂥撴哣𢵌𢯊𡁷㧻𡁯"
	],
	[
		"8aa1",
		"𦛚𦜖𧦠擪𥁒𠱃蹨𢆡𨭌𠜱"
	],
	[
		"8aac",
		"䠋𠆩㿺塳𢶍"
	],
	[
		"8ab2",
		"𤗈𠓼𦂗𠽌𠶖啹䂻䎺"
	],
	[
		"8abb",
		"䪴𢩦𡂝膪飵𠶜捹㧾𢝵跀嚡摼㹃"
	],
	[
		"8ac9",
		"𪘁𠸉𢫏𢳉"
	],
	[
		"8ace",
		"𡃈𣧂㦒㨆𨊛㕸𥹉𢃇噒𠼱𢲲𩜠㒼氽𤸻"
	],
	[
		"8adf",
		"𧕴𢺋𢈈𪙛𨳍𠹺𠰴𦠜羓𡃏𢠃𢤹㗻𥇣𠺌𠾍𠺪㾓𠼰𠵇𡅏𠹌"
	],
	[
		"8af6",
		"𠺫𠮩𠵈𡃀𡄽㿹𢚖搲𠾭"
	],
	[
		"8b40",
		"𣏴𧘹𢯎𠵾𠵿𢱑𢱕㨘𠺘𡃇𠼮𪘲𦭐𨳒𨶙𨳊閪哌苄喹"
	],
	[
		"8b55",
		"𩻃鰦骶𧝞𢷮煀腭胬尜𦕲脴㞗卟𨂽醶𠻺𠸏𠹷𠻻㗝𤷫㘉𠳖嚯𢞵𡃉𠸐𠹸𡁸𡅈𨈇𡑕𠹹𤹐𢶤婔𡀝𡀞𡃵𡃶垜𠸑"
	],
	[
		"8ba1",
		"𧚔𨋍𠾵𠹻𥅾㜃𠾶𡆀𥋘𪊽𤧚𡠺𤅷𨉼墙剨㘚𥜽箲孨䠀䬬鼧䧧鰟鮍𥭴𣄽嗻㗲嚉丨夂𡯁屮靑𠂆乛亻㔾尣彑忄㣺扌攵歺氵氺灬爫丬犭𤣩罒礻糹罓𦉪㓁"
	],
	[
		"8bde",
		"𦍋耂肀𦘒𦥑卝衤见𧢲讠贝钅镸长门𨸏韦页风飞饣𩠐鱼鸟黄歯龜丷𠂇阝户钢"
	],
	[
		"8c40",
		"倻淾𩱳龦㷉袏𤅎灷峵䬠𥇍㕙𥴰愢𨨲辧釶熑朙玺𣊁𪄇㲋𡦀䬐磤琂冮𨜏䀉橣𪊺䈣蘏𠩯稪𩥇𨫪靕灍匤𢁾鏴盙𨧣龧矝亣俰傼丯众龨吴綋墒壐𡶶庒庙忂𢜒斋"
	],
	[
		"8ca1",
		"𣏹椙橃𣱣泿"
	],
	[
		"8ca7",
		"爀𤔅玌㻛𤨓嬕璹讃𥲤𥚕窓篬糃繬苸薗龩袐龪躹龫迏蕟駠鈡龬𨶹𡐿䁱䊢娚"
	],
	[
		"8cc9",
		"顨杫䉶圽"
	],
	[
		"8cce",
		"藖𤥻芿𧄍䲁𦵴嵻𦬕𦾾龭龮宖龯曧繛湗秊㶈䓃𣉖𢞖䎚䔶"
	],
	[
		"8ce6",
		"峕𣬚諹屸㴒𣕑嵸龲煗䕘𤃬𡸣䱷㥸㑊𠆤𦱁諌侴𠈹妿腬顖𩣺弻"
	],
	[
		"8d40",
		"𠮟"
	],
	[
		"8d42",
		"𢇁𨥭䄂䚻𩁹㼇龳𪆵䃸㟖䛷𦱆䅼𨚲𧏿䕭㣔𥒚䕡䔛䶉䱻䵶䗪㿈𤬏㙡䓞䒽䇭崾嵈嵖㷼㠏嶤嶹㠠㠸幂庽弥徃㤈㤔㤿㥍惗愽峥㦉憷憹懏㦸戬抐拥挘㧸嚱"
	],
	[
		"8da1",
		"㨃揢揻搇摚㩋擀崕嘡龟㪗斆㪽旿晓㫲暒㬢朖㭂枤栀㭘桊梄㭲㭱㭻椉楃牜楤榟榅㮼槖㯝橥橴橱檂㯬檙㯲檫檵櫔櫶殁毁毪汵沪㳋洂洆洦涁㳯涤涱渕渘温溆𨧀溻滢滚齿滨滩漤漴㵆𣽁澁澾㵪㵵熷岙㶊瀬㶑灐灔灯灿炉𠌥䏁㗱𠻘"
	],
	[
		"8e40",
		"𣻗垾𦻓焾𥟠㙎榢𨯩孴穉𥣡𩓙穥穽𥦬窻窰竂竃燑𦒍䇊竚竝竪䇯咲𥰁笋筕笩𥌎𥳾箢筯莜𥮴𦱿篐萡箒箸𥴠㶭𥱥蒒篺簆簵𥳁籄粃𤢂粦晽𤕸糉糇糦籴糳糵糎"
	],
	[
		"8ea1",
		"繧䔝𦹄絝𦻖璍綉綫焵綳緒𤁗𦀩緤㴓緵𡟹緥𨍭縝𦄡𦅚繮纒䌫鑬縧罀罁罇礶𦋐駡羗𦍑羣𡙡𠁨䕜𣝦䔃𨌺翺𦒉者耈耝耨耯𪂇𦳃耻耼聡𢜔䦉𦘦𣷣𦛨朥肧𨩈脇脚墰𢛶汿𦒘𤾸擧𡒊舘𡡞橓𤩥𤪕䑺舩𠬍𦩒𣵾俹𡓽蓢荢𦬊𤦧𣔰𡝳𣷸芪椛芳䇛"
	],
	[
		"8f40",
		"蕋苐茚𠸖𡞴㛁𣅽𣕚艻苢茘𣺋𦶣𦬅𦮗𣗎㶿茝嗬莅䔋𦶥莬菁菓㑾𦻔橗蕚㒖𦹂𢻯葘𥯤葱㷓䓤檧葊𣲵祘蒨𦮖𦹷𦹃蓞萏莑䒠蒓蓤𥲑䉀𥳀䕃蔴嫲𦺙䔧蕳䔖枿蘖"
	],
	[
		"8fa1",
		"𨘥𨘻藁𧂈蘂𡖂𧃍䕫䕪蘨㙈𡢢号𧎚虾蝱𪃸蟮𢰧螱蟚蠏噡虬桖䘏衅衆𧗠𣶹𧗤衞袜䙛袴袵揁装睷𧜏覇覊覦覩覧覼𨨥觧𧤤𧪽誜瞓釾誐𧩙竩𧬺𣾏䜓𧬸煼謌謟𥐰𥕥謿譌譍誩𤩺讐讛誯𡛟䘕衏貛𧵔𧶏貫㜥𧵓賖𧶘𧶽贒贃𡤐賛灜贑𤳉㻐起"
	],
	[
		"9040",
		"趩𨀂𡀔𤦊㭼𨆼𧄌竧躭躶軃鋔輙輭𨍥𨐒辥錃𪊟𠩐辳䤪𨧞𨔽𣶻廸𣉢迹𪀔𨚼𨔁𢌥㦀𦻗逷𨔼𧪾遡𨕬𨘋邨𨜓郄𨛦邮都酧㫰醩釄粬𨤳𡺉鈎沟鉁鉢𥖹銹𨫆𣲛𨬌𥗛"
	],
	[
		"90a1",
		"𠴱錬鍫𨫡𨯫炏嫃𨫢𨫥䥥鉄𨯬𨰹𨯿鍳鑛躼閅閦鐦閠濶䊹𢙺𨛘𡉼𣸮䧟氜陻隖䅬隣𦻕懚隶磵𨫠隽双䦡𦲸𠉴𦐐𩂯𩃥𤫑𡤕𣌊霱虂霶䨏䔽䖅𤫩灵孁霛靜𩇕靗孊𩇫靟鐥僐𣂷𣂼鞉鞟鞱鞾韀韒韠𥑬韮琜𩐳響韵𩐝𧥺䫑頴頳顋顦㬎𧅵㵑𠘰𤅜"
	],
	[
		"9140",
		"𥜆飊颷飈飇䫿𦴧𡛓喰飡飦飬鍸餹𤨩䭲𩡗𩤅駵騌騻騐驘𥜥㛄𩂱𩯕髠髢𩬅髴䰎鬔鬭𨘀倴鬴𦦨㣃𣁽魐魀𩴾婅𡡣鮎𤉋鰂鯿鰌𩹨鷔𩾷𪆒𪆫𪃡𪄣𪇟鵾鶃𪄴鸎梈"
	],
	[
		"91a1",
		"鷄𢅛𪆓𪈠𡤻𪈳鴹𪂹𪊴麐麕麞麢䴴麪麯𤍤黁㭠㧥㴝伲㞾𨰫鼂鼈䮖鐤𦶢鼗鼖鼹嚟嚊齅馸𩂋韲葿齢齩竜龎爖䮾𤥵𤦻煷𤧸𤍈𤩑玞𨯚𡣺禟𨥾𨸶鍩鏳𨩄鋬鎁鏋𨥬𤒹爗㻫睲穃烐𤑳𤏸煾𡟯炣𡢾𣖙㻇𡢅𥐯𡟸㜢𡛻𡠹㛡𡝴𡣑𥽋㜣𡛀坛𤨥𡏾𡊨"
	],
	[
		"9240",
		"𡏆𡒶蔃𣚦蔃葕𤦔𧅥𣸱𥕜𣻻𧁒䓴𣛮𩦝𦼦柹㜳㰕㷧塬𡤢栐䁗𣜿𤃡𤂋𤄏𦰡哋嚞𦚱嚒𠿟𠮨𠸍鏆𨬓鎜仸儫㠙𤐶亼𠑥𠍿佋侊𥙑婨𠆫𠏋㦙𠌊𠐔㐵伩𠋀𨺳𠉵諚𠈌亘"
	],
	[
		"92a1",
		"働儍侢伃𤨎𣺊佂倮偬傁俌俥偘僼兙兛兝兞湶𣖕𣸹𣺿浲𡢄𣺉冨凃𠗠䓝𠒣𠒒𠒑赺𨪜𠜎剙劤𠡳勡鍮䙺熌𤎌𠰠𤦬𡃤槑𠸝瑹㻞璙琔瑖玘䮎𤪼𤂍叐㖄爏𤃉喴𠍅响𠯆圝鉝雴鍦埝垍坿㘾壋媙𨩆𡛺𡝯𡜐娬妸銏婾嫏娒𥥆𡧳𡡡𤊕㛵洅瑃娡𥺃"
	],
	[
		"9340",
		"媁𨯗𠐓鏠璌𡌃焅䥲鐈𨧻鎽㞠尞岞幞幈𡦖𡥼𣫮廍孏𡤃𡤄㜁𡢠㛝𡛾㛓脪𨩇𡶺𣑲𨦨弌弎𡤧𡞫婫𡜻孄蘔𧗽衠恾𢡠𢘫忛㺸𢖯𢖾𩂈𦽳懀𠀾𠁆𢘛憙憘恵𢲛𢴇𤛔𩅍"
	],
	[
		"93a1",
		"摱𤙥𢭪㨩𢬢𣑐𩣪𢹸挷𪑛撶挱揑𤧣𢵧护𢲡搻敫楲㯴𣂎𣊭𤦉𣊫唍𣋠𡣙𩐿曎𣊉𣆳㫠䆐𥖄𨬢𥖏𡛼𥕛𥐥磮𣄃𡠪𣈴㑤𣈏𣆂𤋉暎𦴤晫䮓昰𧡰𡷫晣𣋒𣋡昞𥡲㣑𣠺𣞼㮙𣞢𣏾瓐㮖枏𤘪梶栞㯄檾㡣𣟕𤒇樳橒櫉欅𡤒攑梘橌㯗橺歗𣿀𣲚鎠鋲𨯪𨫋"
	],
	[
		"9440",
		"銉𨀞𨧜鑧涥漋𤧬浧𣽿㶏渄𤀼娽渊塇洤硂焻𤌚𤉶烱牐犇犔𤞏𤜥兹𤪤𠗫瑺𣻸𣙟𤩊𤤗𥿡㼆㺱𤫟𨰣𣼵悧㻳瓌琼鎇琷䒟𦷪䕑疃㽣𤳙𤴆㽘畕癳𪗆㬙瑨𨫌𤦫𤦎㫻"
	],
	[
		"94a1",
		"㷍𤩎㻿𤧅𤣳釺圲鍂𨫣𡡤僟𥈡𥇧睸𣈲眎眏睻𤚗𣞁㩞𤣰琸璛㺿𤪺𤫇䃈𤪖𦆮錇𥖁砞碍碈磒珐祙𧝁𥛣䄎禛蒖禥樭𣻺稺秴䅮𡛦䄲鈵秱𠵌𤦌𠊙𣶺𡝮㖗啫㕰㚪𠇔𠰍竢婙𢛵𥪯𥪜娍𠉛磰娪𥯆竾䇹籝籭䈑𥮳𥺼𥺦糍𤧹𡞰粎籼粮檲緜縇緓罎𦉡"
	],
	[
		"9540",
		"𦅜𧭈綗𥺂䉪𦭵𠤖柖𠁎𣗏埄𦐒𦏸𤥢翝笧𠠬𥫩𥵃笌𥸎駦虅驣樜𣐿㧢𤧷𦖭騟𦖠蒀𧄧𦳑䓪脷䐂胆脉腂𦞴飃𦩂艢艥𦩑葓𦶧蘐𧈛媆䅿𡡀嬫𡢡嫤𡣘蚠蜨𣶏蠭𧐢娂"
	],
	[
		"95a1",
		"衮佅袇袿裦襥襍𥚃襔𧞅𧞄𨯵𨯙𨮜𨧹㺭蒣䛵䛏㟲訽訜𩑈彍鈫𤊄旔焩烄𡡅鵭貟賩𧷜妚矃姰䍮㛔踪躧𤰉輰轊䋴汘澻𢌡䢛潹溋𡟚鯩㚵𤤯邻邗啱䤆醻鐄𨩋䁢𨫼鐧𨰝𨰻蓥訫閙閧閗閖𨴴瑅㻂𤣿𤩂𤏪㻧𣈥随𨻧𨹦𨹥㻌𤧭𤩸𣿮琒瑫㻼靁𩂰"
	],
	[
		"9640",
		"桇䨝𩂓𥟟靝鍨𨦉𨰦𨬯𦎾銺嬑譩䤼珹𤈛鞛靱餸𠼦巁𨯅𤪲頟𩓚鋶𩗗釥䓀𨭐𤩧𨭤飜𨩅㼀鈪䤥萔餻饍𧬆㷽馛䭯馪驜𨭥𥣈檏騡嫾騯𩣱䮐𩥈馼䮽䮗鍽塲𡌂堢𤦸"
	],
	[
		"96a1",
		"𡓨硄𢜟𣶸棅㵽鑘㤧慐𢞁𢥫愇鱏鱓鱻鰵鰐魿鯏𩸭鮟𪇵𪃾鴡䲮𤄄鸘䲰鴌𪆴𪃭𪃳𩤯鶥蒽𦸒𦿟𦮂藼䔳𦶤𦺄𦷰萠藮𦸀𣟗𦁤秢𣖜𣙀䤭𤧞㵢鏛銾鍈𠊿碹鉷鑍俤㑀遤𥕝砽硔碶硋𡝗𣇉𤥁㚚佲濚濙瀞瀞吔𤆵垻壳垊鴖埗焴㒯𤆬燫𦱀𤾗嬨𡞵𨩉"
	],
	[
		"9740",
		"愌嫎娋䊼𤒈㜬䭻𨧼鎻鎸𡣖𠼝葲𦳀𡐓𤋺𢰦𤏁妔𣶷𦝁綨𦅛𦂤𤦹𤦋𨧺鋥珢㻩璴𨭣𡢟㻡𤪳櫘珳珻㻖𤨾𤪔𡟙𤩦𠎧𡐤𤧥瑈𤤖炥𤥶銄珦鍟𠓾錱𨫎𨨖鎆𨯧𥗕䤵𨪂煫"
	],
	[
		"97a1",
		"𤥃𠳿嚤𠘚𠯫𠲸唂秄𡟺緾𡛂𤩐𡡒䔮鐁㜊𨫀𤦭妰𡢿𡢃𧒄媡㛢𣵛㚰鉟婹𨪁𡡢鍴㳍𠪴䪖㦊僴㵩㵌𡎜煵䋻𨈘渏𩃤䓫浗𧹏灧沯㳖𣿭𣸭渂漌㵯𠏵畑㚼㓈䚀㻚䡱姄鉮䤾轁𨰜𦯀堒埈㛖𡑒烾𤍢𤩱𢿣𡊰𢎽梹楧𡎘𣓥𧯴𣛟𨪃𣟖𣏺𤲟樚𣚭𦲷萾䓟䓎"
	],
	[
		"9840",
		"𦴦𦵑𦲂𦿞漗𧄉茽𡜺菭𦲀𧁓𡟛妉媂𡞳婡婱𡤅𤇼㜭姯𡜼㛇熎鎐暚𤊥婮娫𤊓樫𣻹𧜶𤑛𤋊焝𤉙𨧡侰𦴨峂𤓎𧹍𤎽樌𤉖𡌄炦焳𤏩㶥泟勇𤩏繥姫崯㷳彜𤩝𡟟綤萦"
	],
	[
		"98a1",
		"咅𣫺𣌀𠈔坾𠣕𠘙㿥𡾞𪊶瀃𩅛嵰玏糓𨩙𩐠俈翧狍猐𧫴猸猹𥛶獁獈㺩𧬘遬燵𤣲珡臶㻊県㻑沢国琙琞琟㻢㻰㻴㻺瓓㼎㽓畂畭畲疍㽼痈痜㿀癍㿗癴㿜発𤽜熈嘣覀塩䀝睃䀹条䁅㗛瞘䁪䁯属瞾矋売砘点砜䂨砹硇硑硦葈𥔵礳栃礲䄃"
	],
	[
		"9940",
		"䄉禑禙辻稆込䅧窑䆲窼艹䇄竏竛䇏両筢筬筻簒簛䉠䉺类粜䊌粸䊔糭输烀𠳏総緔緐緽羮羴犟䎗耠耥笹耮耱联㷌垴炠肷胩䏭脌猪脎脒畠脔䐁㬹腖腙腚"
	],
	[
		"99a1",
		"䐓堺腼膄䐥膓䐭膥埯臁臤艔䒏芦艶苊苘苿䒰荗险榊萅烵葤惣蒈䔄蒾蓡蓸蔐蔸蕒䔻蕯蕰藠䕷虲蚒蚲蛯际螋䘆䘗袮裿褤襇覑𧥧訩訸誔誴豑賔賲贜䞘塟跃䟭仮踺嗘坔蹱嗵躰䠷軎転軤軭軲辷迁迊迌逳駄䢭飠鈓䤞鈨鉘鉫銱銮銿"
	],
	[
		"9a40",
		"鋣鋫鋳鋴鋽鍃鎄鎭䥅䥑麿鐗匁鐝鐭鐾䥪鑔鑹锭関䦧间阳䧥枠䨤靀䨵鞲韂噔䫤惨颹䬙飱塄餎餙冴餜餷饂饝饢䭰駅䮝騼鬏窃魩鮁鯝鯱鯴䱭鰠㝯𡯂鵉鰺"
	],
	[
		"9aa1",
		"黾噐鶓鶽鷀鷼银辶鹻麬麱麽黆铜黢黱黸竈齄𠂔𠊷𠎠椚铃妬𠓗塀铁㞹𠗕𠘕𠙶𡚺块煳𠫂𠫍𠮿呪吆𠯋咞𠯻𠰻𠱓𠱥𠱼惧𠲍噺𠲵𠳝𠳭𠵯𠶲𠷈楕鰯螥𠸄𠸎𠻗𠾐𠼭𠹳尠𠾼帋𡁜𡁏𡁶朞𡁻𡂈𡂖㙇𡂿𡃓𡄯𡄻卤蒭𡋣𡍵𡌶讁𡕷𡘙𡟃𡟇乸炻𡠭𡥪"
	],
	[
		"9b40",
		"𡨭𡩅𡰪𡱰𡲬𡻈拃𡻕𡼕熘桕𢁅槩㛈𢉼𢏗𢏺𢜪𢡱𢥏苽𢥧𢦓𢫕覥𢫨辠𢬎鞸𢬿顇骽𢱌"
	],
	[
		"9b62",
		"𢲈𢲷𥯨𢴈𢴒𢶷𢶕𢹂𢽴𢿌𣀳𣁦𣌟𣏞徱晈暿𧩹𣕧𣗳爁𤦺矗𣘚𣜖纇𠍆墵朎"
	],
	[
		"9ba1",
		"椘𣪧𧙗𥿢𣸑𣺹𧗾𢂚䣐䪸𤄙𨪚𤋮𤌍𤀻𤌴𤎖𤩅𠗊凒𠘑妟𡺨㮾𣳿𤐄𤓖垈𤙴㦛𤜯𨗨𩧉㝢𢇃譞𨭎駖𤠒𤣻𤨕爉𤫀𠱸奥𤺥𤾆𠝹軚𥀬劏圿煱𥊙𥐙𣽊𤪧喼𥑆𥑮𦭒釔㑳𥔿𧘲𥕞䜘𥕢𥕦𥟇𤤿𥡝偦㓻𣏌惞𥤃䝼𨥈𥪮𥮉𥰆𡶐垡煑澶𦄂𧰒遖𦆲𤾚譢𦐂𦑊"
	],
	[
		"9c40",
		"嵛𦯷輶𦒄𡤜諪𤧶𦒈𣿯𦔒䯀𦖿𦚵𢜛鑥𥟡憕娧晉侻嚹𤔡𦛼乪𤤴陖涏𦲽㘘襷𦞙𦡮𦐑𦡞營𦣇筂𩃀𠨑𦤦鄄𦤹穅鷰𦧺騦𦨭㙟𦑩𠀡禃𦨴𦭛崬𣔙菏𦮝䛐𦲤画补𦶮墶"
	],
	[
		"9ca1",
		"㜜𢖍𧁋𧇍㱔𧊀𧊅銁𢅺𧊋錰𧋦𤧐氹钟𧑐𠻸蠧裵𢤦𨑳𡞱溸𤨪𡠠㦤㚹尐秣䔿暶𩲭𩢤襃𧟌𧡘囖䃟𡘊㦡𣜯𨃨𡏅熭荦𧧝𩆨婧䲷𧂯𨦫𧧽𧨊𧬋𧵦𤅺筃祾𨀉澵𪋟樃𨌘厢𦸇鎿栶靝𨅯𨀣𦦵𡏭𣈯𨁈嶅𨰰𨂃圕頣𨥉嶫𤦈斾槕叒𤪥𣾁㰑朶𨂐𨃴𨄮𡾡𨅏"
	],
	[
		"9d40",
		"𨆉𨆯𨈚𨌆𨌯𨎊㗊𨑨𨚪䣺揦𨥖砈鉕𨦸䏲𨧧䏟𨧨𨭆𨯔姸𨰉輋𨿅𩃬筑𩄐𩄼㷷𩅞𤫊运犏嚋𩓧𩗩𩖰𩖸𩜲𩣑𩥉𩥪𩧃𩨨𩬎𩵚𩶛纟𩻸𩼣䲤镇𪊓熢𪋿䶑递𪗋䶜𠲜达嗁"
	],
	[
		"9da1",
		"辺𢒰边𤪓䔉繿潖檱仪㓤𨬬𧢝㜺躀𡟵𨀤𨭬𨮙𧨾𦚯㷫𧙕𣲷𥘵𥥖亚𥺁𦉘嚿𠹭踎孭𣺈𤲞揞拐𡟶𡡻攰嘭𥱊吚𥌑㷆𩶘䱽嘢嘞罉𥻘奵𣵀蝰东𠿪𠵉𣚺脗鵞贘瘻鱅癎瞹鍅吲腈苷嘥脲萘肽嗪祢噃吖𠺝㗎嘅嗱曱𨋢㘭甴嗰喺咗啲𠱁𠲖廐𥅈𠹶𢱢"
	],
	[
		"9e40",
		"𠺢麫絚嗞𡁵抝靭咔賍燶酶揼掹揾啩𢭃鱲𢺳冚㓟𠶧冧呍唞唓癦踭𦢊疱肶蠄螆裇膶萜𡃁䓬猄𤜆宐茋𦢓噻𢛴𧴯𤆣𧵳𦻐𧊶酰𡇙鈈𣳼𪚩𠺬𠻹牦𡲢䝎𤿂𧿹𠿫䃺"
	],
	[
		"9ea1",
		"鱝攟𢶠䣳𤟠𩵼𠿬𠸊恢𧖣𠿭"
	],
	[
		"9ead",
		"𦁈𡆇熣纎鵐业丄㕷嬍沲卧㚬㧜卽㚥𤘘墚𤭮舭呋垪𥪕𠥹"
	],
	[
		"9ec5",
		"㩒𢑥獴𩺬䴉鯭𣳾𩼰䱛𤾩𩖞𩿞葜𣶶𧊲𦞳𣜠挮紥𣻷𣸬㨪逈勌㹴㙺䗩𠒎癀嫰𠺶硺𧼮墧䂿噼鮋嵴癔𪐴麅䳡痹㟻愙𣃚𤏲"
	],
	[
		"9ef5",
		"噝𡊩垧𤥣𩸆刴𧂮㖭汊鵼"
	],
	[
		"9f40",
		"籖鬹埞𡝬屓擓𩓐𦌵𧅤蚭𠴨𦴢𤫢𠵱"
	],
	[
		"9f4f",
		"凾𡼏嶎霃𡷑麁遌笟鬂峑箣扨挵髿篏鬪籾鬮籂粆鰕篼鬉鼗鰛𤤾齚啳寃俽麘俲剠㸆勑坧偖妷帒韈鶫轜呩鞴饀鞺匬愰"
	],
	[
		"9fa1",
		"椬叚鰊鴂䰻陁榀傦畆𡝭駚剳"
	],
	[
		"9fae",
		"酙隁酜"
	],
	[
		"9fb2",
		"酑𨺗捿𦴣櫊嘑醎畺抅𠏼獏籰𥰡𣳽"
	],
	[
		"9fc1",
		"𤤙盖鮝个𠳔莾衂"
	],
	[
		"9fc9",
		"届槀僭坺刟巵从氱𠇲伹咜哚劚趂㗾弌㗳"
	],
	[
		"9fdb",
		"歒酼龥鮗頮颴骺麨麄煺笔"
	],
	[
		"9fe7",
		"毺蠘罸"
	],
	[
		"9feb",
		"嘠𪙊蹷齓"
	],
	[
		"9ff0",
		"跔蹏鸜踁抂𨍽踨蹵竓𤩷稾磘泪詧瘇"
	],
	[
		"a040",
		"𨩚鼦泎蟖痃𪊲硓咢贌狢獱謭猂瓱賫𤪻蘯徺袠䒷"
	],
	[
		"a055",
		"𡠻𦸅"
	],
	[
		"a058",
		"詾𢔛"
	],
	[
		"a05b",
		"惽癧髗鵄鍮鮏蟵"
	],
	[
		"a063",
		"蠏賷猬霡鮰㗖犲䰇籑饊𦅙慙䰄麖慽"
	],
	[
		"a073",
		"坟慯抦戹拎㩜懢厪𣏵捤栂㗒"
	],
	[
		"a0a1",
		"嵗𨯂迚𨸹"
	],
	[
		"a0a6",
		"僙𡵆礆匲阸𠼻䁥"
	],
	[
		"a0ae",
		"矾"
	],
	[
		"a0b0",
		"糂𥼚糚稭聦聣絍甅瓲覔舚朌聢𧒆聛瓰脃眤覉𦟌畓𦻑螩蟎臈螌詉貭譃眫瓸蓚㘵榲趦"
	],
	[
		"a0d4",
		"覩瑨涹蟁𤀑瓧㷛煶悤憜㳑煢恷"
	],
	[
		"a0e2",
		"罱𨬭牐惩䭾删㰘𣳇𥻗𧙖𥔱𡥄𡋾𩤃𦷜𧂭峁𦆭𨨏𣙷𠃮𦡆𤼎䕢嬟𦍌齐麦𦉫"
	],
	[
		"a3c0",
		"␀",
		31,
		"␡"
	],
	[
		"c6a1",
		"①",
		9,
		"⑴",
		9,
		"ⅰ",
		9,
		"丶丿亅亠冂冖冫勹匸卩厶夊宀巛⼳广廴彐彡攴无疒癶辵隶¨ˆヽヾゝゞ〃仝々〆〇ー［］✽ぁ",
		23
	],
	[
		"c740",
		"す",
		58,
		"ァアィイ"
	],
	[
		"c7a1",
		"ゥ",
		81,
		"А",
		5,
		"ЁЖ",
		4
	],
	[
		"c840",
		"Л",
		26,
		"ёж",
		25,
		"⇧↸↹㇏𠃌乚𠂊刂䒑"
	],
	[
		"c8a1",
		"龰冈龱𧘇"
	],
	[
		"c8cd",
		"￢￤＇＂㈱№℡゛゜⺀⺄⺆⺇⺈⺊⺌⺍⺕⺜⺝⺥⺧⺪⺬⺮⺶⺼⺾⻆⻊⻌⻍⻏⻖⻗⻞⻣"
	],
	[
		"c8f5",
		"ʃɐɛɔɵœøŋʊɪ"
	],
	[
		"f9fe",
		"￭"
	],
	[
		"fa40",
		"𠕇鋛𠗟𣿅蕌䊵珯况㙉𤥂𨧤鍄𡧛苮𣳈砼杄拟𤤳𨦪𠊠𦮳𡌅侫𢓭倈𦴩𧪄𣘀𤪱𢔓倩𠍾徤𠎀𠍇滛𠐟偽儁㑺儎顬㝃萖𤦤𠒇兠𣎴兪𠯿𢃼𠋥𢔰𠖎𣈳𡦃宂蝽𠖳𣲙冲冸"
	],
	[
		"faa1",
		"鴴凉减凑㳜凓𤪦决凢卂凭菍椾𣜭彻刋刦刼劵剗劔効勅簕蕂勠蘍𦬓包𨫞啉滙𣾀𠥔𣿬匳卄𠯢泋𡜦栛珕恊㺪㣌𡛨燝䒢卭却𨚫卾卿𡖖𡘓矦厓𨪛厠厫厮玧𥝲㽙玜叁叅汉义埾叙㪫𠮏叠𣿫𢶣叶𠱷吓灹唫晗浛呭𦭓𠵴啝咏咤䞦𡜍𠻝㶴𠵍"
	],
	[
		"fb40",
		"𨦼𢚘啇䳭启琗喆喩嘅𡣗𤀺䕒𤐵暳𡂴嘷曍𣊊暤暭噍噏磱囱鞇叾圀囯园𨭦㘣𡉏坆𤆥汮炋坂㚱𦱾埦𡐖堃𡑔𤍣堦𤯵塜墪㕡壠壜𡈼壻寿坃𪅐𤉸鏓㖡够梦㛃湙"
	],
	[
		"fba1",
		"𡘾娤啓𡚒蔅姉𠵎𦲁𦴪𡟜姙𡟻𡞲𦶦浱𡠨𡛕姹𦹅媫婣㛦𤦩婷㜈媖瑥嫓𦾡𢕔㶅𡤑㜲𡚸広勐孶斈孼𧨎䀄䡝𠈄寕慠𡨴𥧌𠖥寳宝䴐尅𡭄尓珎尔𡲥𦬨屉䣝岅峩峯嶋𡷹𡸷崐崘嵆𡺤岺巗苼㠭𤤁𢁉𢅳芇㠶㯂帮檊幵幺𤒼𠳓厦亷廐厨𡝱帉廴𨒂"
	],
	[
		"fc40",
		"廹廻㢠廼栾鐛弍𠇁弢㫞䢮𡌺强𦢈𢏐彘𢑱彣鞽𦹮彲鍀𨨶徧嶶㵟𥉐𡽪𧃸𢙨釖𠊞𨨩怱暅𡡷㥣㷇㘹垐𢞴祱㹀悞悤悳𤦂𤦏𧩓璤僡媠慤萤慂慈𦻒憁凴𠙖憇宪𣾷"
	],
	[
		"fca1",
		"𢡟懓𨮝𩥝懐㤲𢦀𢣁怣慜攞掋𠄘担𡝰拕𢸍捬𤧟㨗搸揸𡎎𡟼撐澊𢸶頔𤂌𥜝擡擥鑻㩦携㩗敍漖𤨨𤨣斅敭敟𣁾斵𤥀䬷旑䃘𡠩无旣忟𣐀昘𣇷𣇸晄𣆤𣆥晋𠹵晧𥇦晳晴𡸽𣈱𨗴𣇈𥌓矅𢣷馤朂𤎜𤨡㬫槺𣟂杞杧杢𤇍𩃭柗䓩栢湐鈼栁𣏦𦶠桝"
	],
	[
		"fd40",
		"𣑯槡樋𨫟楳棃𣗍椁椀㴲㨁𣘼㮀枬楡𨩊䋼椶榘㮡𠏉荣傐槹𣙙𢄪橅𣜃檝㯳枱櫈𩆜㰍欝𠤣惞欵歴𢟍溵𣫛𠎵𡥘㝀吡𣭚毡𣻼毜氷𢒋𤣱𦭑汚舦汹𣶼䓅𣶽𤆤𤤌𤤀"
	],
	[
		"fda1",
		"𣳉㛥㳫𠴲鮃𣇹𢒑羏样𦴥𦶡𦷫涖浜湼漄𤥿𤂅𦹲蔳𦽴凇沜渝萮𨬡港𣸯瑓𣾂秌湏媑𣁋濸㜍澝𣸰滺𡒗𤀽䕕鏰潄潜㵎潴𩅰㴻澟𤅄濓𤂑𤅕𤀹𣿰𣾴𤄿凟𤅖𤅗𤅀𦇝灋灾炧炁烌烕烖烟䄄㷨熴熖𤉷焫煅媈煊煮岜𤍥煏鍢𤋁焬𤑚𤨧𤨢熺𨯨炽爎"
	],
	[
		"fe40",
		"鑂爕夑鑃爤鍁𥘅爮牀𤥴梽牕牗㹕𣁄栍漽犂猪猫𤠣𨠫䣭𨠄猨献珏玪𠰺𦨮珉瑉𤇢𡛧𤨤昣㛅𤦷𤦍𤧻珷琕椃𤨦琹𠗃㻗瑜𢢭瑠𨺲瑇珤瑶莹瑬㜰瑴鏱樬璂䥓𤪌"
	],
	[
		"fea1",
		"𤅟𤩹𨮏孆𨰃𡢞瓈𡦈甎瓩甞𨻙𡩋寗𨺬鎅畍畊畧畮𤾂㼄𤴓疎瑝疞疴瘂瘬癑癏癯癶𦏵皐臯㟸𦤑𦤎皡皥皷盌𦾟葢𥂝𥅽𡸜眞眦着撯𥈠睘𣊬瞯𨥤𨥨𡛁矴砉𡍶𤨒棊碯磇磓隥礮𥗠磗礴碱𧘌辸袄𨬫𦂃𢘜禆褀椂禀𥡗禝𧬹礼禩渪𧄦㺨秆𩄍秔"
	]
];

var dbcsData;
var hasRequiredDbcsData;

function requireDbcsData () {
	if (hasRequiredDbcsData) return dbcsData;
	hasRequiredDbcsData = 1;

	// Description of supported double byte encodings and aliases.
	// Tables are not require()-d until they are needed to speed up library load.
	// require()-s are direct to support Browserify.

	dbcsData = {
	    
	    // == Japanese/ShiftJIS ====================================================
	    // All japanese encodings are based on JIS X set of standards:
	    // JIS X 0201 - Single-byte encoding of ASCII + ¥ + Kana chars at 0xA1-0xDF.
	    // JIS X 0208 - Main set of 6879 characters, placed in 94x94 plane, to be encoded by 2 bytes. 
	    //              Has several variations in 1978, 1983, 1990 and 1997.
	    // JIS X 0212 - Supplementary plane of 6067 chars in 94x94 plane. 1990. Effectively dead.
	    // JIS X 0213 - Extension and modern replacement of 0208 and 0212. Total chars: 11233.
	    //              2 planes, first is superset of 0208, second - revised 0212.
	    //              Introduced in 2000, revised 2004. Some characters are in Unicode Plane 2 (0x2xxxx)

	    // Byte encodings are:
	    //  * Shift_JIS: Compatible with 0201, uses not defined chars in top half as lead bytes for double-byte
	    //               encoding of 0208. Lead byte ranges: 0x81-0x9F, 0xE0-0xEF; Trail byte ranges: 0x40-0x7E, 0x80-0x9E, 0x9F-0xFC.
	    //               Windows CP932 is a superset of Shift_JIS. Some companies added more chars, notably KDDI.
	    //  * EUC-JP:    Up to 3 bytes per character. Used mostly on *nixes.
	    //               0x00-0x7F       - lower part of 0201
	    //               0x8E, 0xA1-0xDF - upper part of 0201
	    //               (0xA1-0xFE)x2   - 0208 plane (94x94).
	    //               0x8F, (0xA1-0xFE)x2 - 0212 plane (94x94).
	    //  * JIS X 208: 7-bit, direct encoding of 0208. Byte ranges: 0x21-0x7E (94 values). Uncommon.
	    //               Used as-is in ISO2022 family.
	    //  * ISO2022-JP: Stateful encoding, with escape sequences to switch between ASCII, 
	    //                0201-1976 Roman, 0208-1978, 0208-1983.
	    //  * ISO2022-JP-1: Adds esc seq for 0212-1990.
	    //  * ISO2022-JP-2: Adds esc seq for GB2313-1980, KSX1001-1992, ISO8859-1, ISO8859-7.
	    //  * ISO2022-JP-3: Adds esc seq for 0201-1976 Kana set, 0213-2000 Planes 1, 2.
	    //  * ISO2022-JP-2004: Adds 0213-2004 Plane 1.
	    //
	    // After JIS X 0213 appeared, Shift_JIS-2004, EUC-JISX0213 and ISO2022-JP-2004 followed, with just changing the planes.
	    //
	    // Overall, it seems that it's a mess :( http://www8.plala.or.jp/tkubota1/unicode-symbols-map2.html

	    'shiftjis': {
	        type: '_dbcs',
	        table: function() { return require$$0$1 },
	        encodeAdd: {'\u00a5': 0x5C, '\u203E': 0x7E},
	        encodeSkipVals: [{from: 0xED40, to: 0xF940}],
	    },
	    'csshiftjis': 'shiftjis',
	    'mskanji': 'shiftjis',
	    'sjis': 'shiftjis',
	    'windows31j': 'shiftjis',
	    'ms31j': 'shiftjis',
	    'xsjis': 'shiftjis',
	    'windows932': 'shiftjis',
	    'ms932': 'shiftjis',
	    '932': 'shiftjis',
	    'cp932': 'shiftjis',

	    'eucjp': {
	        type: '_dbcs',
	        table: function() { return require$$1 },
	        encodeAdd: {'\u00a5': 0x5C, '\u203E': 0x7E},
	    },

	    // TODO: KDDI extension to Shift_JIS
	    // TODO: IBM CCSID 942 = CP932, but F0-F9 custom chars and other char changes.
	    // TODO: IBM CCSID 943 = Shift_JIS = CP932 with original Shift_JIS lower 128 chars.


	    // == Chinese/GBK ==========================================================
	    // http://en.wikipedia.org/wiki/GBK
	    // We mostly implement W3C recommendation: https://www.w3.org/TR/encoding/#gbk-encoder

	    // Oldest GB2312 (1981, ~7600 chars) is a subset of CP936
	    'gb2312': 'cp936',
	    'gb231280': 'cp936',
	    'gb23121980': 'cp936',
	    'csgb2312': 'cp936',
	    'csiso58gb231280': 'cp936',
	    'euccn': 'cp936',

	    // Microsoft's CP936 is a subset and approximation of GBK.
	    'windows936': 'cp936',
	    'ms936': 'cp936',
	    '936': 'cp936',
	    'cp936': {
	        type: '_dbcs',
	        table: function() { return require$$2 },
	    },

	    // GBK (~22000 chars) is an extension of CP936 that added user-mapped chars and some other.
	    'gbk': {
	        type: '_dbcs',
	        table: function() { return require$$2.concat(require$$3) },
	    },
	    'xgbk': 'gbk',
	    'isoir58': 'gbk',

	    // GB18030 is an algorithmic extension of GBK.
	    // Main source: https://www.w3.org/TR/encoding/#gbk-encoder
	    // http://icu-project.org/docs/papers/gb18030.html
	    // http://source.icu-project.org/repos/icu/data/trunk/charset/data/xml/gb-18030-2000.xml
	    // http://www.khngai.com/chinese/charmap/tblgbk.php?page=0
	    'gb18030': {
	        type: '_dbcs',
	        table: function() { return require$$2.concat(require$$3) },
	        gb18030: function() { return require$$4 },
	        encodeSkipVals: [0x80],
	        encodeAdd: {'€': 0xA2E3},
	    },

	    'chinese': 'gb18030',


	    // == Korean ===============================================================
	    // EUC-KR, KS_C_5601 and KS X 1001 are exactly the same.
	    'windows949': 'cp949',
	    'ms949': 'cp949',
	    '949': 'cp949',
	    'cp949': {
	        type: '_dbcs',
	        table: function() { return require$$5 },
	    },

	    'cseuckr': 'cp949',
	    'csksc56011987': 'cp949',
	    'euckr': 'cp949',
	    'isoir149': 'cp949',
	    'korean': 'cp949',
	    'ksc56011987': 'cp949',
	    'ksc56011989': 'cp949',
	    'ksc5601': 'cp949',


	    // == Big5/Taiwan/Hong Kong ================================================
	    // There are lots of tables for Big5 and cp950. Please see the following links for history:
	    // http://moztw.org/docs/big5/  http://www.haible.de/bruno/charsets/conversion-tables/Big5.html
	    // Variations, in roughly number of defined chars:
	    //  * Windows CP 950: Microsoft variant of Big5. Canonical: http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/WINDOWS/CP950.TXT
	    //  * Windows CP 951: Microsoft variant of Big5-HKSCS-2001. Seems to be never public. http://me.abelcheung.org/articles/research/what-is-cp951/
	    //  * Big5-2003 (Taiwan standard) almost superset of cp950.
	    //  * Unicode-at-on (UAO) / Mozilla 1.8. Falling out of use on the Web. Not supported by other browsers.
	    //  * Big5-HKSCS (-2001, -2004, -2008). Hong Kong standard. 
	    //    many unicode code points moved from PUA to Supplementary plane (U+2XXXX) over the years.
	    //    Plus, it has 4 combining sequences.
	    //    Seems that Mozilla refused to support it for 10 yrs. https://bugzilla.mozilla.org/show_bug.cgi?id=162431 https://bugzilla.mozilla.org/show_bug.cgi?id=310299
	    //    because big5-hkscs is the only encoding to include astral characters in non-algorithmic way.
	    //    Implementations are not consistent within browsers; sometimes labeled as just big5.
	    //    MS Internet Explorer switches from big5 to big5-hkscs when a patch applied.
	    //    Great discussion & recap of what's going on https://bugzilla.mozilla.org/show_bug.cgi?id=912470#c31
	    //    In the encoder, it might make sense to support encoding old PUA mappings to Big5 bytes seq-s.
	    //    Official spec: http://www.ogcio.gov.hk/en/business/tech_promotion/ccli/terms/doc/2003cmp_2008.txt
	    //                   http://www.ogcio.gov.hk/tc/business/tech_promotion/ccli/terms/doc/hkscs-2008-big5-iso.txt
	    // 
	    // Current understanding of how to deal with Big5(-HKSCS) is in the Encoding Standard, http://encoding.spec.whatwg.org/#big5-encoder
	    // Unicode mapping (http://www.unicode.org/Public/MAPPINGS/OBSOLETE/EASTASIA/OTHER/BIG5.TXT) is said to be wrong.

	    'windows950': 'cp950',
	    'ms950': 'cp950',
	    '950': 'cp950',
	    'cp950': {
	        type: '_dbcs',
	        table: function() { return require$$6 },
	    },

	    // Big5 has many variations and is an extension of cp950. We use Encoding Standard's as a consensus.
	    'big5': 'big5hkscs',
	    'big5hkscs': {
	        type: '_dbcs',
	        table: function() { return require$$6.concat(require$$7) },
	        encodeSkipVals: [
	            // Although Encoding Standard says we should avoid encoding to HKSCS area (See Step 1 of
	            // https://encoding.spec.whatwg.org/#index-big5-pointer), we still do it to increase compatibility with ICU.
	            // But if a single unicode point can be encoded both as HKSCS and regular Big5, we prefer the latter.
	            0x8e69, 0x8e6f, 0x8e7e, 0x8eab, 0x8eb4, 0x8ecd, 0x8ed0, 0x8f57, 0x8f69, 0x8f6e, 0x8fcb, 0x8ffe,
	            0x906d, 0x907a, 0x90c4, 0x90dc, 0x90f1, 0x91bf, 0x92af, 0x92b0, 0x92b1, 0x92b2, 0x92d1, 0x9447, 0x94ca,
	            0x95d9, 0x96fc, 0x9975, 0x9b76, 0x9b78, 0x9b7b, 0x9bc6, 0x9bde, 0x9bec, 0x9bf6, 0x9c42, 0x9c53, 0x9c62,
	            0x9c68, 0x9c6b, 0x9c77, 0x9cbc, 0x9cbd, 0x9cd0, 0x9d57, 0x9d5a, 0x9dc4, 0x9def, 0x9dfb, 0x9ea9, 0x9eef,
	            0x9efd, 0x9f60, 0x9fcb, 0xa077, 0xa0dc, 0xa0df, 0x8fcc, 0x92c8, 0x9644, 0x96ed,

	            // Step 2 of https://encoding.spec.whatwg.org/#index-big5-pointer: Use last pointer for U+2550, U+255E, U+2561, U+256A, U+5341, or U+5345
	            0xa2a4, 0xa2a5, 0xa2a7, 0xa2a6, 0xa2cc, 0xa2ce,
	        ],
	    },

	    'cnbig5': 'big5hkscs',
	    'csbig5': 'big5hkscs',
	    'xxbig5': 'big5hkscs',
	};
	return dbcsData;
}

var hasRequiredEncodings;

function requireEncodings () {
	if (hasRequiredEncodings) return encodings;
	hasRequiredEncodings = 1;
	(function (exports) {

		// Update this array if you add/rename/remove files in this directory.
		// We support Browserify by skipping automatic module discovery and requiring modules directly.
		var modules = [
		    requireInternal(),
		    requireUtf32(),
		    requireUtf16(),
		    requireUtf7(),
		    requireSbcsCodec(),
		    requireSbcsData(),
		    requireSbcsDataGenerated(),
		    requireDbcsCodec(),
		    requireDbcsData(),
		];

		// Put all encoding/alias/codec definitions to single object and export it.
		for (var i = 0; i < modules.length; i++) {
		    var module = modules[i];
		    for (var enc in module)
		        if (Object.prototype.hasOwnProperty.call(module, enc))
		            exports[enc] = module[enc];
		} 
	} (encodings));
	return encodings;
}

var streams;
var hasRequiredStreams;

function requireStreams () {
	if (hasRequiredStreams) return streams;
	hasRequiredStreams = 1;

	var Buffer = requireSafer().Buffer;

	// NOTE: Due to 'stream' module being pretty large (~100Kb, significant in browser environments), 
	// we opt to dependency-inject it instead of creating a hard dependency.
	streams = function(stream_module) {
	    var Transform = stream_module.Transform;

	    // == Encoder stream =======================================================

	    function IconvLiteEncoderStream(conv, options) {
	        this.conv = conv;
	        options = options || {};
	        options.decodeStrings = false; // We accept only strings, so we don't need to decode them.
	        Transform.call(this, options);
	    }

	    IconvLiteEncoderStream.prototype = Object.create(Transform.prototype, {
	        constructor: { value: IconvLiteEncoderStream }
	    });

	    IconvLiteEncoderStream.prototype._transform = function(chunk, encoding, done) {
	        if (typeof chunk != 'string')
	            return done(new Error("Iconv encoding stream needs strings as its input."));
	        try {
	            var res = this.conv.write(chunk);
	            if (res && res.length) this.push(res);
	            done();
	        }
	        catch (e) {
	            done(e);
	        }
	    };

	    IconvLiteEncoderStream.prototype._flush = function(done) {
	        try {
	            var res = this.conv.end();
	            if (res && res.length) this.push(res);
	            done();
	        }
	        catch (e) {
	            done(e);
	        }
	    };

	    IconvLiteEncoderStream.prototype.collect = function(cb) {
	        var chunks = [];
	        this.on('error', cb);
	        this.on('data', function(chunk) { chunks.push(chunk); });
	        this.on('end', function() {
	            cb(null, Buffer.concat(chunks));
	        });
	        return this;
	    };


	    // == Decoder stream =======================================================

	    function IconvLiteDecoderStream(conv, options) {
	        this.conv = conv;
	        options = options || {};
	        options.encoding = this.encoding = 'utf8'; // We output strings.
	        Transform.call(this, options);
	    }

	    IconvLiteDecoderStream.prototype = Object.create(Transform.prototype, {
	        constructor: { value: IconvLiteDecoderStream }
	    });

	    IconvLiteDecoderStream.prototype._transform = function(chunk, encoding, done) {
	        if (!Buffer.isBuffer(chunk) && !(chunk instanceof Uint8Array))
	            return done(new Error("Iconv decoding stream needs buffers as its input."));
	        try {
	            var res = this.conv.write(chunk);
	            if (res && res.length) this.push(res, this.encoding);
	            done();
	        }
	        catch (e) {
	            done(e);
	        }
	    };

	    IconvLiteDecoderStream.prototype._flush = function(done) {
	        try {
	            var res = this.conv.end();
	            if (res && res.length) this.push(res, this.encoding);                
	            done();
	        }
	        catch (e) {
	            done(e);
	        }
	    };

	    IconvLiteDecoderStream.prototype.collect = function(cb) {
	        var res = '';
	        this.on('error', cb);
	        this.on('data', function(chunk) { res += chunk; });
	        this.on('end', function() {
	            cb(null, res);
	        });
	        return this;
	    };

	    return {
	        IconvLiteEncoderStream: IconvLiteEncoderStream,
	        IconvLiteDecoderStream: IconvLiteDecoderStream,
	    };
	};
	return streams;
}

var hasRequiredLib$1;

function requireLib$1 () {
	if (hasRequiredLib$1) return lib$1.exports;
	hasRequiredLib$1 = 1;
	(function (module) {

		var Buffer = requireSafer().Buffer;

		var bomHandling = requireBomHandling(),
		    iconv = module.exports;

		// All codecs and aliases are kept here, keyed by encoding name/alias.
		// They are lazy loaded in `iconv.getCodec` from `encodings/index.js`.
		iconv.encodings = null;

		// Characters emitted in case of error.
		iconv.defaultCharUnicode = '�';
		iconv.defaultCharSingleByte = '?';

		// Public API.
		iconv.encode = function encode(str, encoding, options) {
		    str = "" + (str || ""); // Ensure string.

		    var encoder = iconv.getEncoder(encoding, options);

		    var res = encoder.write(str);
		    var trail = encoder.end();
		    
		    return (trail && trail.length > 0) ? Buffer.concat([res, trail]) : res;
		};

		iconv.decode = function decode(buf, encoding, options) {
		    if (typeof buf === 'string') {
		        if (!iconv.skipDecodeWarning) {
		            console.error('Iconv-lite warning: decode()-ing strings is deprecated. Refer to https://github.com/ashtuchkin/iconv-lite/wiki/Use-Buffers-when-decoding');
		            iconv.skipDecodeWarning = true;
		        }

		        buf = Buffer.from("" + (buf || ""), "binary"); // Ensure buffer.
		    }

		    var decoder = iconv.getDecoder(encoding, options);

		    var res = decoder.write(buf);
		    var trail = decoder.end();

		    return trail ? (res + trail) : res;
		};

		iconv.encodingExists = function encodingExists(enc) {
		    try {
		        iconv.getCodec(enc);
		        return true;
		    } catch (e) {
		        return false;
		    }
		};

		// Legacy aliases to convert functions
		iconv.toEncoding = iconv.encode;
		iconv.fromEncoding = iconv.decode;

		// Search for a codec in iconv.encodings. Cache codec data in iconv._codecDataCache.
		iconv._codecDataCache = {};
		iconv.getCodec = function getCodec(encoding) {
		    if (!iconv.encodings)
		        iconv.encodings = requireEncodings(); // Lazy load all encoding definitions.
		    
		    // Canonicalize encoding name: strip all non-alphanumeric chars and appended year.
		    var enc = iconv._canonicalizeEncoding(encoding);

		    // Traverse iconv.encodings to find actual codec.
		    var codecOptions = {};
		    while (true) {
		        var codec = iconv._codecDataCache[enc];
		        if (codec)
		            return codec;

		        var codecDef = iconv.encodings[enc];

		        switch (typeof codecDef) {
		            case "string": // Direct alias to other encoding.
		                enc = codecDef;
		                break;

		            case "object": // Alias with options. Can be layered.
		                for (var key in codecDef)
		                    codecOptions[key] = codecDef[key];

		                if (!codecOptions.encodingName)
		                    codecOptions.encodingName = enc;
		                
		                enc = codecDef.type;
		                break;

		            case "function": // Codec itself.
		                if (!codecOptions.encodingName)
		                    codecOptions.encodingName = enc;

		                // The codec function must load all tables and return object with .encoder and .decoder methods.
		                // It'll be called only once (for each different options object).
		                codec = new codecDef(codecOptions, iconv);

		                iconv._codecDataCache[codecOptions.encodingName] = codec; // Save it to be reused later.
		                return codec;

		            default:
		                throw new Error("Encoding not recognized: '" + encoding + "' (searched as: '"+enc+"')");
		        }
		    }
		};

		iconv._canonicalizeEncoding = function(encoding) {
		    // Canonicalize encoding name: strip all non-alphanumeric chars and appended year.
		    return (''+encoding).toLowerCase().replace(/:\d{4}$|[^0-9a-z]/g, "");
		};

		iconv.getEncoder = function getEncoder(encoding, options) {
		    var codec = iconv.getCodec(encoding),
		        encoder = new codec.encoder(options, codec);

		    if (codec.bomAware && options && options.addBOM)
		        encoder = new bomHandling.PrependBOM(encoder, options);

		    return encoder;
		};

		iconv.getDecoder = function getDecoder(encoding, options) {
		    var codec = iconv.getCodec(encoding),
		        decoder = new codec.decoder(options, codec);

		    if (codec.bomAware && !(options && options.stripBOM === false))
		        decoder = new bomHandling.StripBOM(decoder, options);

		    return decoder;
		};

		// Streaming API
		// NOTE: Streaming API naturally depends on 'stream' module from Node.js. Unfortunately in browser environments this module can add
		// up to 100Kb to the output bundle. To avoid unnecessary code bloat, we don't enable Streaming API in browser by default.
		// If you would like to enable it explicitly, please add the following code to your app:
		// > iconv.enableStreamingAPI(require('stream'));
		iconv.enableStreamingAPI = function enableStreamingAPI(stream_module) {
		    if (iconv.supportsStreams)
		        return;

		    // Dependency-inject stream module to create IconvLite stream classes.
		    var streams = requireStreams()(stream_module);

		    // Not public API yet, but expose the stream classes.
		    iconv.IconvLiteEncoderStream = streams.IconvLiteEncoderStream;
		    iconv.IconvLiteDecoderStream = streams.IconvLiteDecoderStream;

		    // Streaming API.
		    iconv.encodeStream = function encodeStream(encoding, options) {
		        return new iconv.IconvLiteEncoderStream(iconv.getEncoder(encoding, options), options);
		    };

		    iconv.decodeStream = function decodeStream(encoding, options) {
		        return new iconv.IconvLiteDecoderStream(iconv.getDecoder(encoding, options), options);
		    };

		    iconv.supportsStreams = true;
		};

		// Enable Streaming API automatically if 'stream' module is available and non-empty (the majority of environments).
		var stream_module;
		try {
		    stream_module = require("stream");
		} catch (e) {}

		if (stream_module && stream_module.Transform) {
		    iconv.enableStreamingAPI(stream_module);

		} else {
		    // In rare cases where 'stream' module is not available by default, throw a helpful exception.
		    iconv.encodeStream = iconv.decodeStream = function() {
		        throw new Error("iconv-lite Streaming API is not enabled. Use iconv.enableStreamingAPI(require('stream')); to enable it.");
		    };
		}
	} (lib$1));
	return lib$1.exports;
}

/*!
 * unpipe
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

var unpipe_1;
var hasRequiredUnpipe;

function requireUnpipe () {
	if (hasRequiredUnpipe) return unpipe_1;
	hasRequiredUnpipe = 1;

	/**
	 * Module exports.
	 * @public
	 */

	unpipe_1 = unpipe;

	/**
	 * Determine if there are Node.js pipe-like data listeners.
	 * @private
	 */

	function hasPipeDataListeners(stream) {
	  var listeners = stream.listeners('data');

	  for (var i = 0; i < listeners.length; i++) {
	    if (listeners[i].name === 'ondata') {
	      return true
	    }
	  }

	  return false
	}

	/**
	 * Unpipe a stream from all destinations.
	 *
	 * @param {object} stream
	 * @public
	 */

	function unpipe(stream) {
	  if (!stream) {
	    throw new TypeError('argument stream is required')
	  }

	  if (typeof stream.unpipe === 'function') {
	    // new-style
	    stream.unpipe();
	    return
	  }

	  // Node.js 0.8 hack
	  if (!hasPipeDataListeners(stream)) {
	    return
	  }

	  var listener;
	  var listeners = stream.listeners('close');

	  for (var i = 0; i < listeners.length; i++) {
	    listener = listeners[i];

	    if (listener.name !== 'cleanup' && listener.name !== 'onclose') {
	      continue
	    }

	    // invoke the listener
	    listener.call(stream);
	  }
	}
	return unpipe_1;
}

/*!
 * raw-body
 * Copyright(c) 2013-2014 Jonathan Ong
 * Copyright(c) 2014-2022 Douglas Christopher Wilson
 * MIT Licensed
 */

var rawBody;
var hasRequiredRawBody;

function requireRawBody () {
	if (hasRequiredRawBody) return rawBody;
	hasRequiredRawBody = 1;

	/**
	 * Module dependencies.
	 * @private
	 */

	var asyncHooks = tryRequireAsyncHooks();
	var bytes = requireBytes();
	var createError = requireHttpErrors();
	var iconv = requireLib$1();
	var unpipe = requireUnpipe();

	/**
	 * Module exports.
	 * @public
	 */

	rawBody = getRawBody;

	/**
	 * Module variables.
	 * @private
	 */

	var ICONV_ENCODING_MESSAGE_REGEXP = /^Encoding not recognized: /;

	/**
	 * Get the decoder for a given encoding.
	 *
	 * @param {string} encoding
	 * @private
	 */

	function getDecoder (encoding) {
	  if (!encoding) return null

	  try {
	    return iconv.getDecoder(encoding)
	  } catch (e) {
	    // error getting decoder
	    if (!ICONV_ENCODING_MESSAGE_REGEXP.test(e.message)) throw e

	    // the encoding was not found
	    throw createError(415, 'specified encoding unsupported', {
	      encoding: encoding,
	      type: 'encoding.unsupported'
	    })
	  }
	}

	/**
	 * Get the raw body of a stream (typically HTTP).
	 *
	 * @param {object} stream
	 * @param {object|string|function} [options]
	 * @param {function} [callback]
	 * @public
	 */

	function getRawBody (stream, options, callback) {
	  var done = callback;
	  var opts = options || {};

	  // light validation
	  if (stream === undefined) {
	    throw new TypeError('argument stream is required')
	  } else if (typeof stream !== 'object' || stream === null || typeof stream.on !== 'function') {
	    throw new TypeError('argument stream must be a stream')
	  }

	  if (options === true || typeof options === 'string') {
	    // short cut for encoding
	    opts = {
	      encoding: options
	    };
	  }

	  if (typeof options === 'function') {
	    done = options;
	    opts = {};
	  }

	  // validate callback is a function, if provided
	  if (done !== undefined && typeof done !== 'function') {
	    throw new TypeError('argument callback must be a function')
	  }

	  // require the callback without promises
	  if (!done && !commonjsGlobal.Promise) {
	    throw new TypeError('argument callback is required')
	  }

	  // get encoding
	  var encoding = opts.encoding !== true
	    ? opts.encoding
	    : 'utf-8';

	  // convert the limit to an integer
	  var limit = bytes.parse(opts.limit);

	  // convert the expected length to an integer
	  var length = opts.length != null && !isNaN(opts.length)
	    ? parseInt(opts.length, 10)
	    : null;

	  if (done) {
	    // classic callback style
	    return readStream(stream, encoding, length, limit, wrap(done))
	  }

	  return new Promise(function executor (resolve, reject) {
	    readStream(stream, encoding, length, limit, function onRead (err, buf) {
	      if (err) return reject(err)
	      resolve(buf);
	    });
	  })
	}

	/**
	 * Halt a stream.
	 *
	 * @param {Object} stream
	 * @private
	 */

	function halt (stream) {
	  // unpipe everything from the stream
	  unpipe(stream);

	  // pause stream
	  if (typeof stream.pause === 'function') {
	    stream.pause();
	  }
	}

	/**
	 * Read the data from the stream.
	 *
	 * @param {object} stream
	 * @param {string} encoding
	 * @param {number} length
	 * @param {number} limit
	 * @param {function} callback
	 * @public
	 */

	function readStream (stream, encoding, length, limit, callback) {
	  var complete = false;
	  var sync = true;

	  // check the length and limit options.
	  // note: we intentionally leave the stream paused,
	  // so users should handle the stream themselves.
	  if (limit !== null && length !== null && length > limit) {
	    return done(createError(413, 'request entity too large', {
	      expected: length,
	      length: length,
	      limit: limit,
	      type: 'entity.too.large'
	    }))
	  }

	  // streams1: assert request encoding is buffer.
	  // streams2+: assert the stream encoding is buffer.
	  //   stream._decoder: streams1
	  //   state.encoding: streams2
	  //   state.decoder: streams2, specifically < 0.10.6
	  var state = stream._readableState;
	  if (stream._decoder || (state && (state.encoding || state.decoder))) {
	    // developer error
	    return done(createError(500, 'stream encoding should not be set', {
	      type: 'stream.encoding.set'
	    }))
	  }

	  if (typeof stream.readable !== 'undefined' && !stream.readable) {
	    return done(createError(500, 'stream is not readable', {
	      type: 'stream.not.readable'
	    }))
	  }

	  var received = 0;
	  var decoder;

	  try {
	    decoder = getDecoder(encoding);
	  } catch (err) {
	    return done(err)
	  }

	  var buffer = decoder
	    ? ''
	    : [];

	  // attach listeners
	  stream.on('aborted', onAborted);
	  stream.on('close', cleanup);
	  stream.on('data', onData);
	  stream.on('end', onEnd);
	  stream.on('error', onEnd);

	  // mark sync section complete
	  sync = false;

	  function done () {
	    var args = new Array(arguments.length);

	    // copy arguments
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }

	    // mark complete
	    complete = true;

	    if (sync) {
	      process.nextTick(invokeCallback);
	    } else {
	      invokeCallback();
	    }

	    function invokeCallback () {
	      cleanup();

	      if (args[0]) {
	        // halt the stream on error
	        halt(stream);
	      }

	      callback.apply(null, args);
	    }
	  }

	  function onAborted () {
	    if (complete) return

	    done(createError(400, 'request aborted', {
	      code: 'ECONNABORTED',
	      expected: length,
	      length: length,
	      received: received,
	      type: 'request.aborted'
	    }));
	  }

	  function onData (chunk) {
	    if (complete) return

	    received += chunk.length;

	    if (limit !== null && received > limit) {
	      done(createError(413, 'request entity too large', {
	        limit: limit,
	        received: received,
	        type: 'entity.too.large'
	      }));
	    } else if (decoder) {
	      buffer += decoder.write(chunk);
	    } else {
	      buffer.push(chunk);
	    }
	  }

	  function onEnd (err) {
	    if (complete) return
	    if (err) return done(err)

	    if (length !== null && received !== length) {
	      done(createError(400, 'request size did not match content length', {
	        expected: length,
	        length: length,
	        received: received,
	        type: 'request.size.invalid'
	      }));
	    } else {
	      var string = decoder
	        ? buffer + (decoder.end() || '')
	        : Buffer.concat(buffer);
	      done(null, string);
	    }
	  }

	  function cleanup () {
	    buffer = null;

	    stream.removeListener('aborted', onAborted);
	    stream.removeListener('data', onData);
	    stream.removeListener('end', onEnd);
	    stream.removeListener('error', onEnd);
	    stream.removeListener('close', cleanup);
	  }
	}

	/**
	 * Try to require async_hooks
	 * @private
	 */

	function tryRequireAsyncHooks () {
	  try {
	    return require('async_hooks')
	  } catch (e) {
	    return {}
	  }
	}

	/**
	 * Wrap function with async resource, if possible.
	 * AsyncResource.bind static method backported.
	 * @private
	 */

	function wrap (fn) {
	  var res;

	  // create anonymous resource
	  if (asyncHooks.AsyncResource) {
	    res = new asyncHooks.AsyncResource(fn.name || 'bound-anonymous-fn');
	  }

	  // incompatible node.js
	  if (!res || !res.runInAsyncScope) {
	    return fn
	  }

	  // return bound function
	  return res.runInAsyncScope.bind(res, fn, null)
	}
	return rawBody;
}

/*!
 * body-parser
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */

var read_1;
var hasRequiredRead;

function requireRead () {
	if (hasRequiredRead) return read_1;
	hasRequiredRead = 1;

	/**
	 * Module dependencies.
	 * @private
	 */

	var createError = requireHttpErrors();
	var getBody = requireRawBody();
	var iconv = requireLib$1();
	var onFinished = requireOnFinished();
	var zlib = require$$4$1;

	/**
	 * Module exports.
	 */

	read_1 = read;

	/**
	 * Read a request into a buffer and parse.
	 *
	 * @param {object} req
	 * @param {object} res
	 * @param {function} next
	 * @param {function} parse
	 * @param {function} debug
	 * @param {object} options
	 * @private
	 */

	function read (req, res, next, parse, debug, options) {
	  var length;
	  var opts = options;
	  var stream;

	  // read options
	  var encoding = opts.encoding !== null
	    ? opts.encoding
	    : null;
	  var verify = opts.verify;

	  try {
	    // get the content stream
	    stream = contentstream(req, debug, opts.inflate);
	    length = stream.length;
	    stream.length = undefined;
	  } catch (err) {
	    return next(err)
	  }

	  // set raw-body options
	  opts.length = length;
	  opts.encoding = verify
	    ? null
	    : encoding;

	  // assert charset is supported
	  if (opts.encoding === null && encoding !== null && !iconv.encodingExists(encoding)) {
	    return next(createError(415, 'unsupported charset "' + encoding.toUpperCase() + '"', {
	      charset: encoding.toLowerCase(),
	      type: 'charset.unsupported'
	    }))
	  }

	  // read body
	  debug('read body');
	  getBody(stream, opts, function (error, body) {
	    if (error) {
	      var _error;

	      if (error.type === 'encoding.unsupported') {
	        // echo back charset
	        _error = createError(415, 'unsupported charset "' + encoding.toUpperCase() + '"', {
	          charset: encoding.toLowerCase(),
	          type: 'charset.unsupported'
	        });
	      } else {
	        // set status code on error
	        _error = createError(400, error);
	      }

	      // unpipe from stream and destroy
	      if (stream !== req) {
	        req.unpipe();
	        stream.destroy();
	      }

	      // read off entire request
	      dump(req, function onfinished () {
	        next(createError(400, _error));
	      });
	      return
	    }

	    // verify
	    if (verify) {
	      try {
	        debug('verify body');
	        verify(req, res, body, encoding);
	      } catch (err) {
	        next(createError(403, err, {
	          body: body,
	          type: err.type || 'entity.verify.failed'
	        }));
	        return
	      }
	    }

	    // parse
	    var str = body;
	    try {
	      debug('parse body');
	      str = typeof body !== 'string' && encoding !== null
	        ? iconv.decode(body, encoding)
	        : body;
	      req.body = parse(str, encoding);
	    } catch (err) {
	      next(createError(400, err, {
	        body: str,
	        type: err.type || 'entity.parse.failed'
	      }));
	      return
	    }

	    next();
	  });
	}

	/**
	 * Get the content stream of the request.
	 *
	 * @param {object} req
	 * @param {function} debug
	 * @param {boolean} [inflate=true]
	 * @return {object}
	 * @api private
	 */

	function contentstream (req, debug, inflate) {
	  var encoding = (req.headers['content-encoding'] || 'identity').toLowerCase();
	  var length = req.headers['content-length'];

	  debug('content-encoding "%s"', encoding);

	  if (inflate === false && encoding !== 'identity') {
	    throw createError(415, 'content encoding unsupported', {
	      encoding: encoding,
	      type: 'encoding.unsupported'
	    })
	  }

	  if (encoding === 'identity') {
	    req.length = length;
	    return req
	  }

	  var stream = createDecompressionStream(encoding, debug);
	  req.pipe(stream);
	  return stream
	}

	/**
	 * Create a decompression stream for the given encoding.
	 * @param {string} encoding
	 * @param {function} debug
	 * @return {object}
	 * @api private
	 */
	function createDecompressionStream (encoding, debug) {
	  switch (encoding) {
	    case 'deflate':
	      debug('inflate body');
	      return zlib.createInflate()
	    case 'gzip':
	      debug('gunzip body');
	      return zlib.createGunzip()
	    case 'br':
	      debug('brotli decompress body');
	      return zlib.createBrotliDecompress()
	    default:
	      throw createError(415, 'unsupported content encoding "' + encoding + '"', {
	        encoding: encoding,
	        type: 'encoding.unsupported'
	      })
	  }
	}

	/**
	 * Dump the contents of a request.
	 *
	 * @param {object} req
	 * @param {function} callback
	 * @api private
	 */

	function dump (req, callback) {
	  if (onFinished.isFinished(req)) {
	    callback(null);
	  } else {
	    onFinished(req, callback);
	    req.resume();
	  }
	}
	return read_1;
}

var typeIs = {exports: {}};

var contentType = {};

/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

var hasRequiredContentType;

function requireContentType () {
	if (hasRequiredContentType) return contentType;
	hasRequiredContentType = 1;

	/**
	 * RegExp to match *( ";" parameter ) in RFC 7231 sec 3.1.1.1
	 *
	 * parameter     = token "=" ( token / quoted-string )
	 * token         = 1*tchar
	 * tchar         = "!" / "#" / "$" / "%" / "&" / "'" / "*"
	 *               / "+" / "-" / "." / "^" / "_" / "`" / "|" / "~"
	 *               / DIGIT / ALPHA
	 *               ; any VCHAR, except delimiters
	 * quoted-string = DQUOTE *( qdtext / quoted-pair ) DQUOTE
	 * qdtext        = HTAB / SP / %x21 / %x23-5B / %x5D-7E / obs-text
	 * obs-text      = %x80-FF
	 * quoted-pair   = "\" ( HTAB / SP / VCHAR / obs-text )
	 */
	var PARAM_REGEXP = /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g; // eslint-disable-line no-control-regex
	var TEXT_REGEXP = /^[\u000b\u0020-\u007e\u0080-\u00ff]+$/; // eslint-disable-line no-control-regex
	var TOKEN_REGEXP = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;

	/**
	 * RegExp to match quoted-pair in RFC 7230 sec 3.2.6
	 *
	 * quoted-pair = "\" ( HTAB / SP / VCHAR / obs-text )
	 * obs-text    = %x80-FF
	 */
	var QESC_REGEXP = /\\([\u000b\u0020-\u00ff])/g; // eslint-disable-line no-control-regex

	/**
	 * RegExp to match chars that must be quoted-pair in RFC 7230 sec 3.2.6
	 */
	var QUOTE_REGEXP = /([\\"])/g;

	/**
	 * RegExp to match type in RFC 7231 sec 3.1.1.1
	 *
	 * media-type = type "/" subtype
	 * type       = token
	 * subtype    = token
	 */
	var TYPE_REGEXP = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;

	/**
	 * Module exports.
	 * @public
	 */

	contentType.format = format;
	contentType.parse = parse;

	/**
	 * Format object to media type.
	 *
	 * @param {object} obj
	 * @return {string}
	 * @public
	 */

	function format (obj) {
	  if (!obj || typeof obj !== 'object') {
	    throw new TypeError('argument obj is required')
	  }

	  var parameters = obj.parameters;
	  var type = obj.type;

	  if (!type || !TYPE_REGEXP.test(type)) {
	    throw new TypeError('invalid type')
	  }

	  var string = type;

	  // append parameters
	  if (parameters && typeof parameters === 'object') {
	    var param;
	    var params = Object.keys(parameters).sort();

	    for (var i = 0; i < params.length; i++) {
	      param = params[i];

	      if (!TOKEN_REGEXP.test(param)) {
	        throw new TypeError('invalid parameter name')
	      }

	      string += '; ' + param + '=' + qstring(parameters[param]);
	    }
	  }

	  return string
	}

	/**
	 * Parse media type to object.
	 *
	 * @param {string|object} string
	 * @return {Object}
	 * @public
	 */

	function parse (string) {
	  if (!string) {
	    throw new TypeError('argument string is required')
	  }

	  // support req/res-like objects as argument
	  var header = typeof string === 'object'
	    ? getcontenttype(string)
	    : string;

	  if (typeof header !== 'string') {
	    throw new TypeError('argument string is required to be a string')
	  }

	  var index = header.indexOf(';');
	  var type = index !== -1
	    ? header.slice(0, index).trim()
	    : header.trim();

	  if (!TYPE_REGEXP.test(type)) {
	    throw new TypeError('invalid media type')
	  }

	  var obj = new ContentType(type.toLowerCase());

	  // parse parameters
	  if (index !== -1) {
	    var key;
	    var match;
	    var value;

	    PARAM_REGEXP.lastIndex = index;

	    while ((match = PARAM_REGEXP.exec(header))) {
	      if (match.index !== index) {
	        throw new TypeError('invalid parameter format')
	      }

	      index += match[0].length;
	      key = match[1].toLowerCase();
	      value = match[2];

	      if (value.charCodeAt(0) === 0x22 /* " */) {
	        // remove quotes
	        value = value.slice(1, -1);

	        // remove escapes
	        if (value.indexOf('\\') !== -1) {
	          value = value.replace(QESC_REGEXP, '$1');
	        }
	      }

	      obj.parameters[key] = value;
	    }

	    if (index !== header.length) {
	      throw new TypeError('invalid parameter format')
	    }
	  }

	  return obj
	}

	/**
	 * Get content-type from req/res objects.
	 *
	 * @param {object}
	 * @return {Object}
	 * @private
	 */

	function getcontenttype (obj) {
	  var header;

	  if (typeof obj.getHeader === 'function') {
	    // res-like
	    header = obj.getHeader('content-type');
	  } else if (typeof obj.headers === 'object') {
	    // req-like
	    header = obj.headers && obj.headers['content-type'];
	  }

	  if (typeof header !== 'string') {
	    throw new TypeError('content-type header is missing from object')
	  }

	  return header
	}

	/**
	 * Quote a string if necessary.
	 *
	 * @param {string} val
	 * @return {string}
	 * @private
	 */

	function qstring (val) {
	  var str = String(val);

	  // no need to quote tokens
	  if (TOKEN_REGEXP.test(str)) {
	    return str
	  }

	  if (str.length > 0 && !TEXT_REGEXP.test(str)) {
	    throw new TypeError('invalid parameter value')
	  }

	  return '"' + str.replace(QUOTE_REGEXP, '\\$1') + '"'
	}

	/**
	 * Class to represent a content type.
	 * @private
	 */
	function ContentType (type) {
	  this.parameters = Object.create(null);
	  this.type = type;
	}
	return contentType;
}

var mimeTypes = {};

var require$$0 = {
	"application/1d-interleaved-parityfec": {
	source: "iana"
},
	"application/3gpdash-qoe-report+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/3gpp-ims+xml": {
	source: "iana",
	compressible: true
},
	"application/3gpphal+json": {
	source: "iana",
	compressible: true
},
	"application/3gpphalforms+json": {
	source: "iana",
	compressible: true
},
	"application/a2l": {
	source: "iana"
},
	"application/ace+cbor": {
	source: "iana"
},
	"application/ace+json": {
	source: "iana",
	compressible: true
},
	"application/ace-groupcomm+cbor": {
	source: "iana"
},
	"application/ace-trl+cbor": {
	source: "iana"
},
	"application/activemessage": {
	source: "iana"
},
	"application/activity+json": {
	source: "iana",
	compressible: true
},
	"application/aif+cbor": {
	source: "iana"
},
	"application/aif+json": {
	source: "iana",
	compressible: true
},
	"application/alto-cdni+json": {
	source: "iana",
	compressible: true
},
	"application/alto-cdnifilter+json": {
	source: "iana",
	compressible: true
},
	"application/alto-costmap+json": {
	source: "iana",
	compressible: true
},
	"application/alto-costmapfilter+json": {
	source: "iana",
	compressible: true
},
	"application/alto-directory+json": {
	source: "iana",
	compressible: true
},
	"application/alto-endpointcost+json": {
	source: "iana",
	compressible: true
},
	"application/alto-endpointcostparams+json": {
	source: "iana",
	compressible: true
},
	"application/alto-endpointprop+json": {
	source: "iana",
	compressible: true
},
	"application/alto-endpointpropparams+json": {
	source: "iana",
	compressible: true
},
	"application/alto-error+json": {
	source: "iana",
	compressible: true
},
	"application/alto-networkmap+json": {
	source: "iana",
	compressible: true
},
	"application/alto-networkmapfilter+json": {
	source: "iana",
	compressible: true
},
	"application/alto-propmap+json": {
	source: "iana",
	compressible: true
},
	"application/alto-propmapparams+json": {
	source: "iana",
	compressible: true
},
	"application/alto-tips+json": {
	source: "iana",
	compressible: true
},
	"application/alto-tipsparams+json": {
	source: "iana",
	compressible: true
},
	"application/alto-updatestreamcontrol+json": {
	source: "iana",
	compressible: true
},
	"application/alto-updatestreamparams+json": {
	source: "iana",
	compressible: true
},
	"application/aml": {
	source: "iana"
},
	"application/andrew-inset": {
	source: "iana",
	extensions: [
		"ez"
	]
},
	"application/appinstaller": {
	compressible: false,
	extensions: [
		"appinstaller"
	]
},
	"application/applefile": {
	source: "iana"
},
	"application/applixware": {
	source: "apache",
	extensions: [
		"aw"
	]
},
	"application/appx": {
	compressible: false,
	extensions: [
		"appx"
	]
},
	"application/appxbundle": {
	compressible: false,
	extensions: [
		"appxbundle"
	]
},
	"application/at+jwt": {
	source: "iana"
},
	"application/atf": {
	source: "iana"
},
	"application/atfx": {
	source: "iana"
},
	"application/atom+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"atom"
	]
},
	"application/atomcat+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"atomcat"
	]
},
	"application/atomdeleted+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"atomdeleted"
	]
},
	"application/atomicmail": {
	source: "iana"
},
	"application/atomsvc+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"atomsvc"
	]
},
	"application/atsc-dwd+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"dwd"
	]
},
	"application/atsc-dynamic-event-message": {
	source: "iana"
},
	"application/atsc-held+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"held"
	]
},
	"application/atsc-rdt+json": {
	source: "iana",
	compressible: true
},
	"application/atsc-rsat+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rsat"
	]
},
	"application/atxml": {
	source: "iana"
},
	"application/auth-policy+xml": {
	source: "iana",
	compressible: true
},
	"application/automationml-aml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"aml"
	]
},
	"application/automationml-amlx+zip": {
	source: "iana",
	compressible: false,
	extensions: [
		"amlx"
	]
},
	"application/bacnet-xdd+zip": {
	source: "iana",
	compressible: false
},
	"application/batch-smtp": {
	source: "iana"
},
	"application/bdoc": {
	compressible: false,
	extensions: [
		"bdoc"
	]
},
	"application/beep+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/bufr": {
	source: "iana"
},
	"application/c2pa": {
	source: "iana"
},
	"application/calendar+json": {
	source: "iana",
	compressible: true
},
	"application/calendar+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xcs"
	]
},
	"application/call-completion": {
	source: "iana"
},
	"application/cals-1840": {
	source: "iana"
},
	"application/captive+json": {
	source: "iana",
	compressible: true
},
	"application/cbor": {
	source: "iana"
},
	"application/cbor-seq": {
	source: "iana"
},
	"application/cccex": {
	source: "iana"
},
	"application/ccmp+xml": {
	source: "iana",
	compressible: true
},
	"application/ccxml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"ccxml"
	]
},
	"application/cda+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/cdfx+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"cdfx"
	]
},
	"application/cdmi-capability": {
	source: "iana",
	extensions: [
		"cdmia"
	]
},
	"application/cdmi-container": {
	source: "iana",
	extensions: [
		"cdmic"
	]
},
	"application/cdmi-domain": {
	source: "iana",
	extensions: [
		"cdmid"
	]
},
	"application/cdmi-object": {
	source: "iana",
	extensions: [
		"cdmio"
	]
},
	"application/cdmi-queue": {
	source: "iana",
	extensions: [
		"cdmiq"
	]
},
	"application/cdni": {
	source: "iana"
},
	"application/ce+cbor": {
	source: "iana"
},
	"application/cea": {
	source: "iana"
},
	"application/cea-2018+xml": {
	source: "iana",
	compressible: true
},
	"application/cellml+xml": {
	source: "iana",
	compressible: true
},
	"application/cfw": {
	source: "iana"
},
	"application/cid-edhoc+cbor-seq": {
	source: "iana"
},
	"application/city+json": {
	source: "iana",
	compressible: true
},
	"application/city+json-seq": {
	source: "iana"
},
	"application/clr": {
	source: "iana"
},
	"application/clue+xml": {
	source: "iana",
	compressible: true
},
	"application/clue_info+xml": {
	source: "iana",
	compressible: true
},
	"application/cms": {
	source: "iana"
},
	"application/cnrp+xml": {
	source: "iana",
	compressible: true
},
	"application/coap-eap": {
	source: "iana"
},
	"application/coap-group+json": {
	source: "iana",
	compressible: true
},
	"application/coap-payload": {
	source: "iana"
},
	"application/commonground": {
	source: "iana"
},
	"application/concise-problem-details+cbor": {
	source: "iana"
},
	"application/conference-info+xml": {
	source: "iana",
	compressible: true
},
	"application/cose": {
	source: "iana"
},
	"application/cose-key": {
	source: "iana"
},
	"application/cose-key-set": {
	source: "iana"
},
	"application/cose-x509": {
	source: "iana"
},
	"application/cpl+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"cpl"
	]
},
	"application/csrattrs": {
	source: "iana"
},
	"application/csta+xml": {
	source: "iana",
	compressible: true
},
	"application/cstadata+xml": {
	source: "iana",
	compressible: true
},
	"application/csvm+json": {
	source: "iana",
	compressible: true
},
	"application/cu-seeme": {
	source: "apache",
	extensions: [
		"cu"
	]
},
	"application/cwl": {
	source: "iana",
	extensions: [
		"cwl"
	]
},
	"application/cwl+json": {
	source: "iana",
	compressible: true
},
	"application/cwl+yaml": {
	source: "iana"
},
	"application/cwt": {
	source: "iana"
},
	"application/cybercash": {
	source: "iana"
},
	"application/dart": {
	compressible: true
},
	"application/dash+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mpd"
	]
},
	"application/dash-patch+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mpp"
	]
},
	"application/dashdelta": {
	source: "iana"
},
	"application/davmount+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"davmount"
	]
},
	"application/dca-rft": {
	source: "iana"
},
	"application/dcd": {
	source: "iana"
},
	"application/dec-dx": {
	source: "iana"
},
	"application/dialog-info+xml": {
	source: "iana",
	compressible: true
},
	"application/dicom": {
	source: "iana",
	extensions: [
		"dcm"
	]
},
	"application/dicom+json": {
	source: "iana",
	compressible: true
},
	"application/dicom+xml": {
	source: "iana",
	compressible: true
},
	"application/dii": {
	source: "iana"
},
	"application/dit": {
	source: "iana"
},
	"application/dns": {
	source: "iana"
},
	"application/dns+json": {
	source: "iana",
	compressible: true
},
	"application/dns-message": {
	source: "iana"
},
	"application/docbook+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"dbk"
	]
},
	"application/dots+cbor": {
	source: "iana"
},
	"application/dpop+jwt": {
	source: "iana"
},
	"application/dskpp+xml": {
	source: "iana",
	compressible: true
},
	"application/dssc+der": {
	source: "iana",
	extensions: [
		"dssc"
	]
},
	"application/dssc+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xdssc"
	]
},
	"application/dvcs": {
	source: "iana"
},
	"application/eat+cwt": {
	source: "iana"
},
	"application/eat+jwt": {
	source: "iana"
},
	"application/eat-bun+cbor": {
	source: "iana"
},
	"application/eat-bun+json": {
	source: "iana",
	compressible: true
},
	"application/eat-ucs+cbor": {
	source: "iana"
},
	"application/eat-ucs+json": {
	source: "iana",
	compressible: true
},
	"application/ecmascript": {
	source: "apache",
	compressible: true,
	extensions: [
		"ecma"
	]
},
	"application/edhoc+cbor-seq": {
	source: "iana"
},
	"application/edi-consent": {
	source: "iana"
},
	"application/edi-x12": {
	source: "iana",
	compressible: false
},
	"application/edifact": {
	source: "iana",
	compressible: false
},
	"application/efi": {
	source: "iana"
},
	"application/elm+json": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/elm+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.cap+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/emergencycalldata.comment+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.control+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.deviceinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.ecall.msd": {
	source: "iana"
},
	"application/emergencycalldata.legacyesn+json": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.providerinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.serviceinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.subscriberinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.veds+xml": {
	source: "iana",
	compressible: true
},
	"application/emma+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"emma"
	]
},
	"application/emotionml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"emotionml"
	]
},
	"application/encaprtp": {
	source: "iana"
},
	"application/entity-statement+jwt": {
	source: "iana"
},
	"application/epp+xml": {
	source: "iana",
	compressible: true
},
	"application/epub+zip": {
	source: "iana",
	compressible: false,
	extensions: [
		"epub"
	]
},
	"application/eshop": {
	source: "iana"
},
	"application/exi": {
	source: "iana",
	extensions: [
		"exi"
	]
},
	"application/expect-ct-report+json": {
	source: "iana",
	compressible: true
},
	"application/express": {
	source: "iana",
	extensions: [
		"exp"
	]
},
	"application/fastinfoset": {
	source: "iana"
},
	"application/fastsoap": {
	source: "iana"
},
	"application/fdf": {
	source: "iana",
	extensions: [
		"fdf"
	]
},
	"application/fdt+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"fdt"
	]
},
	"application/fhir+json": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/fhir+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/fido.trusted-apps+json": {
	compressible: true
},
	"application/fits": {
	source: "iana"
},
	"application/flexfec": {
	source: "iana"
},
	"application/font-sfnt": {
	source: "iana"
},
	"application/font-tdpfr": {
	source: "iana",
	extensions: [
		"pfr"
	]
},
	"application/font-woff": {
	source: "iana",
	compressible: false
},
	"application/framework-attributes+xml": {
	source: "iana",
	compressible: true
},
	"application/geo+json": {
	source: "iana",
	compressible: true,
	extensions: [
		"geojson"
	]
},
	"application/geo+json-seq": {
	source: "iana"
},
	"application/geopackage+sqlite3": {
	source: "iana"
},
	"application/geopose+json": {
	source: "iana",
	compressible: true
},
	"application/geoxacml+json": {
	source: "iana",
	compressible: true
},
	"application/geoxacml+xml": {
	source: "iana",
	compressible: true
},
	"application/gltf-buffer": {
	source: "iana"
},
	"application/gml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"gml"
	]
},
	"application/gnap-binding-jws": {
	source: "iana"
},
	"application/gnap-binding-jwsd": {
	source: "iana"
},
	"application/gnap-binding-rotation-jws": {
	source: "iana"
},
	"application/gnap-binding-rotation-jwsd": {
	source: "iana"
},
	"application/gpx+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"gpx"
	]
},
	"application/grib": {
	source: "iana"
},
	"application/gxf": {
	source: "apache",
	extensions: [
		"gxf"
	]
},
	"application/gzip": {
	source: "iana",
	compressible: false,
	extensions: [
		"gz"
	]
},
	"application/h224": {
	source: "iana"
},
	"application/held+xml": {
	source: "iana",
	compressible: true
},
	"application/hjson": {
	extensions: [
		"hjson"
	]
},
	"application/hl7v2+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/http": {
	source: "iana"
},
	"application/hyperstudio": {
	source: "iana",
	extensions: [
		"stk"
	]
},
	"application/ibe-key-request+xml": {
	source: "iana",
	compressible: true
},
	"application/ibe-pkg-reply+xml": {
	source: "iana",
	compressible: true
},
	"application/ibe-pp-data": {
	source: "iana"
},
	"application/iges": {
	source: "iana"
},
	"application/im-iscomposing+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/index": {
	source: "iana"
},
	"application/index.cmd": {
	source: "iana"
},
	"application/index.obj": {
	source: "iana"
},
	"application/index.response": {
	source: "iana"
},
	"application/index.vnd": {
	source: "iana"
},
	"application/inkml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"ink",
		"inkml"
	]
},
	"application/iotp": {
	source: "iana"
},
	"application/ipfix": {
	source: "iana",
	extensions: [
		"ipfix"
	]
},
	"application/ipp": {
	source: "iana"
},
	"application/isup": {
	source: "iana"
},
	"application/its+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"its"
	]
},
	"application/java-archive": {
	source: "iana",
	compressible: false,
	extensions: [
		"jar",
		"war",
		"ear"
	]
},
	"application/java-serialized-object": {
	source: "apache",
	compressible: false,
	extensions: [
		"ser"
	]
},
	"application/java-vm": {
	source: "apache",
	compressible: false,
	extensions: [
		"class"
	]
},
	"application/javascript": {
	source: "apache",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"js"
	]
},
	"application/jf2feed+json": {
	source: "iana",
	compressible: true
},
	"application/jose": {
	source: "iana"
},
	"application/jose+json": {
	source: "iana",
	compressible: true
},
	"application/jrd+json": {
	source: "iana",
	compressible: true
},
	"application/jscalendar+json": {
	source: "iana",
	compressible: true
},
	"application/jscontact+json": {
	source: "iana",
	compressible: true
},
	"application/json": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"json",
		"map"
	]
},
	"application/json-patch+json": {
	source: "iana",
	compressible: true
},
	"application/json-seq": {
	source: "iana"
},
	"application/json5": {
	extensions: [
		"json5"
	]
},
	"application/jsonml+json": {
	source: "apache",
	compressible: true,
	extensions: [
		"jsonml"
	]
},
	"application/jsonpath": {
	source: "iana"
},
	"application/jwk+json": {
	source: "iana",
	compressible: true
},
	"application/jwk-set+json": {
	source: "iana",
	compressible: true
},
	"application/jwk-set+jwt": {
	source: "iana"
},
	"application/jwt": {
	source: "iana"
},
	"application/kpml-request+xml": {
	source: "iana",
	compressible: true
},
	"application/kpml-response+xml": {
	source: "iana",
	compressible: true
},
	"application/ld+json": {
	source: "iana",
	compressible: true,
	extensions: [
		"jsonld"
	]
},
	"application/lgr+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"lgr"
	]
},
	"application/link-format": {
	source: "iana"
},
	"application/linkset": {
	source: "iana"
},
	"application/linkset+json": {
	source: "iana",
	compressible: true
},
	"application/load-control+xml": {
	source: "iana",
	compressible: true
},
	"application/logout+jwt": {
	source: "iana"
},
	"application/lost+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"lostxml"
	]
},
	"application/lostsync+xml": {
	source: "iana",
	compressible: true
},
	"application/lpf+zip": {
	source: "iana",
	compressible: false
},
	"application/lxf": {
	source: "iana"
},
	"application/mac-binhex40": {
	source: "iana",
	extensions: [
		"hqx"
	]
},
	"application/mac-compactpro": {
	source: "apache",
	extensions: [
		"cpt"
	]
},
	"application/macwriteii": {
	source: "iana"
},
	"application/mads+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mads"
	]
},
	"application/manifest+json": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"webmanifest"
	]
},
	"application/marc": {
	source: "iana",
	extensions: [
		"mrc"
	]
},
	"application/marcxml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mrcx"
	]
},
	"application/mathematica": {
	source: "iana",
	extensions: [
		"ma",
		"nb",
		"mb"
	]
},
	"application/mathml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mathml"
	]
},
	"application/mathml-content+xml": {
	source: "iana",
	compressible: true
},
	"application/mathml-presentation+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-associated-procedure-description+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-deregister+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-envelope+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-msk+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-msk-response+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-protection-description+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-reception-report+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-register+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-register-response+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-schedule+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-user-service-description+xml": {
	source: "iana",
	compressible: true
},
	"application/mbox": {
	source: "iana",
	extensions: [
		"mbox"
	]
},
	"application/media-policy-dataset+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mpf"
	]
},
	"application/media_control+xml": {
	source: "iana",
	compressible: true
},
	"application/mediaservercontrol+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mscml"
	]
},
	"application/merge-patch+json": {
	source: "iana",
	compressible: true
},
	"application/metalink+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"metalink"
	]
},
	"application/metalink4+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"meta4"
	]
},
	"application/mets+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mets"
	]
},
	"application/mf4": {
	source: "iana"
},
	"application/mikey": {
	source: "iana"
},
	"application/mipc": {
	source: "iana"
},
	"application/missing-blocks+cbor-seq": {
	source: "iana"
},
	"application/mmt-aei+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"maei"
	]
},
	"application/mmt-usd+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"musd"
	]
},
	"application/mods+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mods"
	]
},
	"application/moss-keys": {
	source: "iana"
},
	"application/moss-signature": {
	source: "iana"
},
	"application/mosskey-data": {
	source: "iana"
},
	"application/mosskey-request": {
	source: "iana"
},
	"application/mp21": {
	source: "iana",
	extensions: [
		"m21",
		"mp21"
	]
},
	"application/mp4": {
	source: "iana",
	extensions: [
		"mp4",
		"mpg4",
		"mp4s",
		"m4p"
	]
},
	"application/mpeg4-generic": {
	source: "iana"
},
	"application/mpeg4-iod": {
	source: "iana"
},
	"application/mpeg4-iod-xmt": {
	source: "iana"
},
	"application/mrb-consumer+xml": {
	source: "iana",
	compressible: true
},
	"application/mrb-publish+xml": {
	source: "iana",
	compressible: true
},
	"application/msc-ivr+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/msc-mixer+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/msix": {
	compressible: false,
	extensions: [
		"msix"
	]
},
	"application/msixbundle": {
	compressible: false,
	extensions: [
		"msixbundle"
	]
},
	"application/msword": {
	source: "iana",
	compressible: false,
	extensions: [
		"doc",
		"dot"
	]
},
	"application/mud+json": {
	source: "iana",
	compressible: true
},
	"application/multipart-core": {
	source: "iana"
},
	"application/mxf": {
	source: "iana",
	extensions: [
		"mxf"
	]
},
	"application/n-quads": {
	source: "iana",
	extensions: [
		"nq"
	]
},
	"application/n-triples": {
	source: "iana",
	extensions: [
		"nt"
	]
},
	"application/nasdata": {
	source: "iana"
},
	"application/news-checkgroups": {
	source: "iana",
	charset: "US-ASCII"
},
	"application/news-groupinfo": {
	source: "iana",
	charset: "US-ASCII"
},
	"application/news-transmission": {
	source: "iana"
},
	"application/nlsml+xml": {
	source: "iana",
	compressible: true
},
	"application/node": {
	source: "iana",
	extensions: [
		"cjs"
	]
},
	"application/nss": {
	source: "iana"
},
	"application/oauth-authz-req+jwt": {
	source: "iana"
},
	"application/oblivious-dns-message": {
	source: "iana"
},
	"application/ocsp-request": {
	source: "iana"
},
	"application/ocsp-response": {
	source: "iana"
},
	"application/octet-stream": {
	source: "iana",
	compressible: true,
	extensions: [
		"bin",
		"dms",
		"lrf",
		"mar",
		"so",
		"dist",
		"distz",
		"pkg",
		"bpk",
		"dump",
		"elc",
		"deploy",
		"exe",
		"dll",
		"deb",
		"dmg",
		"iso",
		"img",
		"msi",
		"msp",
		"msm",
		"buffer"
	]
},
	"application/oda": {
	source: "iana",
	extensions: [
		"oda"
	]
},
	"application/odm+xml": {
	source: "iana",
	compressible: true
},
	"application/odx": {
	source: "iana"
},
	"application/oebps-package+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"opf"
	]
},
	"application/ogg": {
	source: "iana",
	compressible: false,
	extensions: [
		"ogx"
	]
},
	"application/ohttp-keys": {
	source: "iana"
},
	"application/omdoc+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"omdoc"
	]
},
	"application/onenote": {
	source: "apache",
	extensions: [
		"onetoc",
		"onetoc2",
		"onetmp",
		"onepkg",
		"one",
		"onea"
	]
},
	"application/opc-nodeset+xml": {
	source: "iana",
	compressible: true
},
	"application/oscore": {
	source: "iana"
},
	"application/oxps": {
	source: "iana",
	extensions: [
		"oxps"
	]
},
	"application/p21": {
	source: "iana"
},
	"application/p21+zip": {
	source: "iana",
	compressible: false
},
	"application/p2p-overlay+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"relo"
	]
},
	"application/parityfec": {
	source: "iana"
},
	"application/passport": {
	source: "iana"
},
	"application/patch-ops-error+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xer"
	]
},
	"application/pdf": {
	source: "iana",
	compressible: false,
	extensions: [
		"pdf"
	]
},
	"application/pdx": {
	source: "iana"
},
	"application/pem-certificate-chain": {
	source: "iana"
},
	"application/pgp-encrypted": {
	source: "iana",
	compressible: false,
	extensions: [
		"pgp"
	]
},
	"application/pgp-keys": {
	source: "iana",
	extensions: [
		"asc"
	]
},
	"application/pgp-signature": {
	source: "iana",
	extensions: [
		"sig",
		"asc"
	]
},
	"application/pics-rules": {
	source: "apache",
	extensions: [
		"prf"
	]
},
	"application/pidf+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/pidf-diff+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/pkcs10": {
	source: "iana",
	extensions: [
		"p10"
	]
},
	"application/pkcs12": {
	source: "iana"
},
	"application/pkcs7-mime": {
	source: "iana",
	extensions: [
		"p7m",
		"p7c"
	]
},
	"application/pkcs7-signature": {
	source: "iana",
	extensions: [
		"p7s"
	]
},
	"application/pkcs8": {
	source: "iana",
	extensions: [
		"p8"
	]
},
	"application/pkcs8-encrypted": {
	source: "iana"
},
	"application/pkix-attr-cert": {
	source: "iana",
	extensions: [
		"ac"
	]
},
	"application/pkix-cert": {
	source: "iana",
	extensions: [
		"cer"
	]
},
	"application/pkix-crl": {
	source: "iana",
	extensions: [
		"crl"
	]
},
	"application/pkix-pkipath": {
	source: "iana",
	extensions: [
		"pkipath"
	]
},
	"application/pkixcmp": {
	source: "iana",
	extensions: [
		"pki"
	]
},
	"application/pls+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"pls"
	]
},
	"application/poc-settings+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/postscript": {
	source: "iana",
	compressible: true,
	extensions: [
		"ai",
		"eps",
		"ps"
	]
},
	"application/ppsp-tracker+json": {
	source: "iana",
	compressible: true
},
	"application/private-token-issuer-directory": {
	source: "iana"
},
	"application/private-token-request": {
	source: "iana"
},
	"application/private-token-response": {
	source: "iana"
},
	"application/problem+json": {
	source: "iana",
	compressible: true
},
	"application/problem+xml": {
	source: "iana",
	compressible: true
},
	"application/provenance+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"provx"
	]
},
	"application/provided-claims+jwt": {
	source: "iana"
},
	"application/prs.alvestrand.titrax-sheet": {
	source: "iana"
},
	"application/prs.cww": {
	source: "iana",
	extensions: [
		"cww"
	]
},
	"application/prs.cyn": {
	source: "iana",
	charset: "7-BIT"
},
	"application/prs.hpub+zip": {
	source: "iana",
	compressible: false
},
	"application/prs.implied-document+xml": {
	source: "iana",
	compressible: true
},
	"application/prs.implied-executable": {
	source: "iana"
},
	"application/prs.implied-object+json": {
	source: "iana",
	compressible: true
},
	"application/prs.implied-object+json-seq": {
	source: "iana"
},
	"application/prs.implied-object+yaml": {
	source: "iana"
},
	"application/prs.implied-structure": {
	source: "iana"
},
	"application/prs.mayfile": {
	source: "iana"
},
	"application/prs.nprend": {
	source: "iana"
},
	"application/prs.plucker": {
	source: "iana"
},
	"application/prs.rdf-xml-crypt": {
	source: "iana"
},
	"application/prs.vcfbzip2": {
	source: "iana"
},
	"application/prs.xsf+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xsf"
	]
},
	"application/pskc+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"pskcxml"
	]
},
	"application/pvd+json": {
	source: "iana",
	compressible: true
},
	"application/qsig": {
	source: "iana"
},
	"application/raml+yaml": {
	compressible: true,
	extensions: [
		"raml"
	]
},
	"application/raptorfec": {
	source: "iana"
},
	"application/rdap+json": {
	source: "iana",
	compressible: true
},
	"application/rdf+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rdf",
		"owl"
	]
},
	"application/reginfo+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rif"
	]
},
	"application/relax-ng-compact-syntax": {
	source: "iana",
	extensions: [
		"rnc"
	]
},
	"application/remote-printing": {
	source: "apache"
},
	"application/reputon+json": {
	source: "iana",
	compressible: true
},
	"application/resolve-response+jwt": {
	source: "iana"
},
	"application/resource-lists+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rl"
	]
},
	"application/resource-lists-diff+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rld"
	]
},
	"application/rfc+xml": {
	source: "iana",
	compressible: true
},
	"application/riscos": {
	source: "iana"
},
	"application/rlmi+xml": {
	source: "iana",
	compressible: true
},
	"application/rls-services+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rs"
	]
},
	"application/route-apd+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rapd"
	]
},
	"application/route-s-tsid+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"sls"
	]
},
	"application/route-usd+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rusd"
	]
},
	"application/rpki-checklist": {
	source: "iana"
},
	"application/rpki-ghostbusters": {
	source: "iana",
	extensions: [
		"gbr"
	]
},
	"application/rpki-manifest": {
	source: "iana",
	extensions: [
		"mft"
	]
},
	"application/rpki-publication": {
	source: "iana"
},
	"application/rpki-roa": {
	source: "iana",
	extensions: [
		"roa"
	]
},
	"application/rpki-signed-tal": {
	source: "iana"
},
	"application/rpki-updown": {
	source: "iana"
},
	"application/rsd+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"rsd"
	]
},
	"application/rss+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"rss"
	]
},
	"application/rtf": {
	source: "iana",
	compressible: true,
	extensions: [
		"rtf"
	]
},
	"application/rtploopback": {
	source: "iana"
},
	"application/rtx": {
	source: "iana"
},
	"application/samlassertion+xml": {
	source: "iana",
	compressible: true
},
	"application/samlmetadata+xml": {
	source: "iana",
	compressible: true
},
	"application/sarif+json": {
	source: "iana",
	compressible: true
},
	"application/sarif-external-properties+json": {
	source: "iana",
	compressible: true
},
	"application/sbe": {
	source: "iana"
},
	"application/sbml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"sbml"
	]
},
	"application/scaip+xml": {
	source: "iana",
	compressible: true
},
	"application/scim+json": {
	source: "iana",
	compressible: true
},
	"application/scvp-cv-request": {
	source: "iana",
	extensions: [
		"scq"
	]
},
	"application/scvp-cv-response": {
	source: "iana",
	extensions: [
		"scs"
	]
},
	"application/scvp-vp-request": {
	source: "iana",
	extensions: [
		"spq"
	]
},
	"application/scvp-vp-response": {
	source: "iana",
	extensions: [
		"spp"
	]
},
	"application/sdp": {
	source: "iana",
	extensions: [
		"sdp"
	]
},
	"application/secevent+jwt": {
	source: "iana"
},
	"application/senml+cbor": {
	source: "iana"
},
	"application/senml+json": {
	source: "iana",
	compressible: true
},
	"application/senml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"senmlx"
	]
},
	"application/senml-etch+cbor": {
	source: "iana"
},
	"application/senml-etch+json": {
	source: "iana",
	compressible: true
},
	"application/senml-exi": {
	source: "iana"
},
	"application/sensml+cbor": {
	source: "iana"
},
	"application/sensml+json": {
	source: "iana",
	compressible: true
},
	"application/sensml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"sensmlx"
	]
},
	"application/sensml-exi": {
	source: "iana"
},
	"application/sep+xml": {
	source: "iana",
	compressible: true
},
	"application/sep-exi": {
	source: "iana"
},
	"application/session-info": {
	source: "iana"
},
	"application/set-payment": {
	source: "iana"
},
	"application/set-payment-initiation": {
	source: "iana",
	extensions: [
		"setpay"
	]
},
	"application/set-registration": {
	source: "iana"
},
	"application/set-registration-initiation": {
	source: "iana",
	extensions: [
		"setreg"
	]
},
	"application/sgml": {
	source: "iana"
},
	"application/sgml-open-catalog": {
	source: "iana"
},
	"application/shf+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"shf"
	]
},
	"application/sieve": {
	source: "iana",
	extensions: [
		"siv",
		"sieve"
	]
},
	"application/simple-filter+xml": {
	source: "iana",
	compressible: true
},
	"application/simple-message-summary": {
	source: "iana"
},
	"application/simplesymbolcontainer": {
	source: "iana"
},
	"application/sipc": {
	source: "iana"
},
	"application/slate": {
	source: "iana"
},
	"application/smil": {
	source: "apache"
},
	"application/smil+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"smi",
		"smil"
	]
},
	"application/smpte336m": {
	source: "iana"
},
	"application/soap+fastinfoset": {
	source: "iana"
},
	"application/soap+xml": {
	source: "iana",
	compressible: true
},
	"application/sparql-query": {
	source: "iana",
	extensions: [
		"rq"
	]
},
	"application/sparql-results+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"srx"
	]
},
	"application/spdx+json": {
	source: "iana",
	compressible: true
},
	"application/spirits-event+xml": {
	source: "iana",
	compressible: true
},
	"application/sql": {
	source: "iana",
	extensions: [
		"sql"
	]
},
	"application/srgs": {
	source: "iana",
	extensions: [
		"gram"
	]
},
	"application/srgs+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"grxml"
	]
},
	"application/sru+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"sru"
	]
},
	"application/ssdl+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"ssdl"
	]
},
	"application/sslkeylogfile": {
	source: "iana"
},
	"application/ssml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"ssml"
	]
},
	"application/st2110-41": {
	source: "iana"
},
	"application/stix+json": {
	source: "iana",
	compressible: true
},
	"application/stratum": {
	source: "iana"
},
	"application/swid+cbor": {
	source: "iana"
},
	"application/swid+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"swidtag"
	]
},
	"application/tamp-apex-update": {
	source: "iana"
},
	"application/tamp-apex-update-confirm": {
	source: "iana"
},
	"application/tamp-community-update": {
	source: "iana"
},
	"application/tamp-community-update-confirm": {
	source: "iana"
},
	"application/tamp-error": {
	source: "iana"
},
	"application/tamp-sequence-adjust": {
	source: "iana"
},
	"application/tamp-sequence-adjust-confirm": {
	source: "iana"
},
	"application/tamp-status-query": {
	source: "iana"
},
	"application/tamp-status-response": {
	source: "iana"
},
	"application/tamp-update": {
	source: "iana"
},
	"application/tamp-update-confirm": {
	source: "iana"
},
	"application/tar": {
	compressible: true
},
	"application/taxii+json": {
	source: "iana",
	compressible: true
},
	"application/td+json": {
	source: "iana",
	compressible: true
},
	"application/tei+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"tei",
		"teicorpus"
	]
},
	"application/tetra_isi": {
	source: "iana"
},
	"application/thraud+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"tfi"
	]
},
	"application/timestamp-query": {
	source: "iana"
},
	"application/timestamp-reply": {
	source: "iana"
},
	"application/timestamped-data": {
	source: "iana",
	extensions: [
		"tsd"
	]
},
	"application/tlsrpt+gzip": {
	source: "iana"
},
	"application/tlsrpt+json": {
	source: "iana",
	compressible: true
},
	"application/tm+json": {
	source: "iana",
	compressible: true
},
	"application/tnauthlist": {
	source: "iana"
},
	"application/toc+cbor": {
	source: "iana"
},
	"application/token-introspection+jwt": {
	source: "iana"
},
	"application/toml": {
	source: "iana",
	compressible: true,
	extensions: [
		"toml"
	]
},
	"application/trickle-ice-sdpfrag": {
	source: "iana"
},
	"application/trig": {
	source: "iana",
	extensions: [
		"trig"
	]
},
	"application/trust-chain+json": {
	source: "iana",
	compressible: true
},
	"application/trust-mark+jwt": {
	source: "iana"
},
	"application/trust-mark-delegation+jwt": {
	source: "iana"
},
	"application/ttml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"ttml"
	]
},
	"application/tve-trigger": {
	source: "iana"
},
	"application/tzif": {
	source: "iana"
},
	"application/tzif-leap": {
	source: "iana"
},
	"application/ubjson": {
	compressible: false,
	extensions: [
		"ubj"
	]
},
	"application/uccs+cbor": {
	source: "iana"
},
	"application/ujcs+json": {
	source: "iana",
	compressible: true
},
	"application/ulpfec": {
	source: "iana"
},
	"application/urc-grpsheet+xml": {
	source: "iana",
	compressible: true
},
	"application/urc-ressheet+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rsheet"
	]
},
	"application/urc-targetdesc+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"td"
	]
},
	"application/urc-uisocketdesc+xml": {
	source: "iana",
	compressible: true
},
	"application/vc": {
	source: "iana"
},
	"application/vc+cose": {
	source: "iana"
},
	"application/vc+jwt": {
	source: "iana"
},
	"application/vcard+json": {
	source: "iana",
	compressible: true
},
	"application/vcard+xml": {
	source: "iana",
	compressible: true
},
	"application/vemmi": {
	source: "iana"
},
	"application/vividence.scriptfile": {
	source: "apache"
},
	"application/vnd.1000minds.decision-model+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"1km"
	]
},
	"application/vnd.1ob": {
	source: "iana"
},
	"application/vnd.3gpp-prose+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp-prose-pc3a+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp-prose-pc3ach+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp-prose-pc3ch+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp-prose-pc8+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp-v2x-local-service-information": {
	source: "iana"
},
	"application/vnd.3gpp.5gnas": {
	source: "iana"
},
	"application/vnd.3gpp.5gsa2x": {
	source: "iana"
},
	"application/vnd.3gpp.5gsa2x-local-service-information": {
	source: "iana"
},
	"application/vnd.3gpp.5gsv2x": {
	source: "iana"
},
	"application/vnd.3gpp.5gsv2x-local-service-information": {
	source: "iana"
},
	"application/vnd.3gpp.access-transfer-events+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.bsf+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.crs+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.current-location-discovery+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.gmop+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.gtpc": {
	source: "iana"
},
	"application/vnd.3gpp.interworking-data": {
	source: "iana"
},
	"application/vnd.3gpp.lpp": {
	source: "iana"
},
	"application/vnd.3gpp.mc-signalling-ear": {
	source: "iana"
},
	"application/vnd.3gpp.mcdata-affiliation-command+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcdata-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcdata-msgstore-ctrl-request+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcdata-payload": {
	source: "iana"
},
	"application/vnd.3gpp.mcdata-regroup+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcdata-service-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcdata-signalling": {
	source: "iana"
},
	"application/vnd.3gpp.mcdata-ue-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcdata-user-profile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-affiliation-command+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-floor-request+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-location-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-mbms-usage-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-regroup+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-service-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-signed+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-ue-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-ue-init-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-user-profile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-affiliation-command+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-location-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-mbms-usage-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-regroup+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-service-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-transmission-request+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-ue-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-user-profile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mid-call+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.ngap": {
	source: "iana"
},
	"application/vnd.3gpp.pfcp": {
	source: "iana"
},
	"application/vnd.3gpp.pic-bw-large": {
	source: "iana",
	extensions: [
		"plb"
	]
},
	"application/vnd.3gpp.pic-bw-small": {
	source: "iana",
	extensions: [
		"psb"
	]
},
	"application/vnd.3gpp.pic-bw-var": {
	source: "iana",
	extensions: [
		"pvb"
	]
},
	"application/vnd.3gpp.pinapp-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.s1ap": {
	source: "iana"
},
	"application/vnd.3gpp.seal-group-doc+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.seal-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.seal-location-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.seal-mbms-usage-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.seal-network-qos-management-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.seal-ue-config-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.seal-unicast-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.seal-user-profile-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.sms": {
	source: "iana"
},
	"application/vnd.3gpp.sms+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.srvcc-ext+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.srvcc-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.state-and-event-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.ussd+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.v2x": {
	source: "iana"
},
	"application/vnd.3gpp.vae-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp2.bcmcsinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp2.sms": {
	source: "iana"
},
	"application/vnd.3gpp2.tcap": {
	source: "iana",
	extensions: [
		"tcap"
	]
},
	"application/vnd.3lightssoftware.imagescal": {
	source: "iana"
},
	"application/vnd.3m.post-it-notes": {
	source: "iana",
	extensions: [
		"pwn"
	]
},
	"application/vnd.accpac.simply.aso": {
	source: "iana",
	extensions: [
		"aso"
	]
},
	"application/vnd.accpac.simply.imp": {
	source: "iana",
	extensions: [
		"imp"
	]
},
	"application/vnd.acm.addressxfer+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.acm.chatbot+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.acucobol": {
	source: "iana",
	extensions: [
		"acu"
	]
},
	"application/vnd.acucorp": {
	source: "iana",
	extensions: [
		"atc",
		"acutc"
	]
},
	"application/vnd.adobe.air-application-installer-package+zip": {
	source: "apache",
	compressible: false,
	extensions: [
		"air"
	]
},
	"application/vnd.adobe.flash.movie": {
	source: "iana"
},
	"application/vnd.adobe.formscentral.fcdt": {
	source: "iana",
	extensions: [
		"fcdt"
	]
},
	"application/vnd.adobe.fxp": {
	source: "iana",
	extensions: [
		"fxp",
		"fxpl"
	]
},
	"application/vnd.adobe.partial-upload": {
	source: "iana"
},
	"application/vnd.adobe.xdp+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xdp"
	]
},
	"application/vnd.adobe.xfdf": {
	source: "apache",
	extensions: [
		"xfdf"
	]
},
	"application/vnd.aether.imp": {
	source: "iana"
},
	"application/vnd.afpc.afplinedata": {
	source: "iana"
},
	"application/vnd.afpc.afplinedata-pagedef": {
	source: "iana"
},
	"application/vnd.afpc.cmoca-cmresource": {
	source: "iana"
},
	"application/vnd.afpc.foca-charset": {
	source: "iana"
},
	"application/vnd.afpc.foca-codedfont": {
	source: "iana"
},
	"application/vnd.afpc.foca-codepage": {
	source: "iana"
},
	"application/vnd.afpc.modca": {
	source: "iana"
},
	"application/vnd.afpc.modca-cmtable": {
	source: "iana"
},
	"application/vnd.afpc.modca-formdef": {
	source: "iana"
},
	"application/vnd.afpc.modca-mediummap": {
	source: "iana"
},
	"application/vnd.afpc.modca-objectcontainer": {
	source: "iana"
},
	"application/vnd.afpc.modca-overlay": {
	source: "iana"
},
	"application/vnd.afpc.modca-pagesegment": {
	source: "iana"
},
	"application/vnd.age": {
	source: "iana",
	extensions: [
		"age"
	]
},
	"application/vnd.ah-barcode": {
	source: "apache"
},
	"application/vnd.ahead.space": {
	source: "iana",
	extensions: [
		"ahead"
	]
},
	"application/vnd.airzip.filesecure.azf": {
	source: "iana",
	extensions: [
		"azf"
	]
},
	"application/vnd.airzip.filesecure.azs": {
	source: "iana",
	extensions: [
		"azs"
	]
},
	"application/vnd.amadeus+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.amazon.ebook": {
	source: "apache",
	extensions: [
		"azw"
	]
},
	"application/vnd.amazon.mobi8-ebook": {
	source: "iana"
},
	"application/vnd.americandynamics.acc": {
	source: "iana",
	extensions: [
		"acc"
	]
},
	"application/vnd.amiga.ami": {
	source: "iana",
	extensions: [
		"ami"
	]
},
	"application/vnd.amundsen.maze+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.android.ota": {
	source: "iana"
},
	"application/vnd.android.package-archive": {
	source: "apache",
	compressible: false,
	extensions: [
		"apk"
	]
},
	"application/vnd.anki": {
	source: "iana"
},
	"application/vnd.anser-web-certificate-issue-initiation": {
	source: "iana",
	extensions: [
		"cii"
	]
},
	"application/vnd.anser-web-funds-transfer-initiation": {
	source: "apache",
	extensions: [
		"fti"
	]
},
	"application/vnd.antix.game-component": {
	source: "iana",
	extensions: [
		"atx"
	]
},
	"application/vnd.apache.arrow.file": {
	source: "iana"
},
	"application/vnd.apache.arrow.stream": {
	source: "iana"
},
	"application/vnd.apache.parquet": {
	source: "iana"
},
	"application/vnd.apache.thrift.binary": {
	source: "iana"
},
	"application/vnd.apache.thrift.compact": {
	source: "iana"
},
	"application/vnd.apache.thrift.json": {
	source: "iana"
},
	"application/vnd.apexlang": {
	source: "iana"
},
	"application/vnd.api+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.aplextor.warrp+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.apothekende.reservation+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.apple.installer+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mpkg"
	]
},
	"application/vnd.apple.keynote": {
	source: "iana",
	extensions: [
		"key"
	]
},
	"application/vnd.apple.mpegurl": {
	source: "iana",
	extensions: [
		"m3u8"
	]
},
	"application/vnd.apple.numbers": {
	source: "iana",
	extensions: [
		"numbers"
	]
},
	"application/vnd.apple.pages": {
	source: "iana",
	extensions: [
		"pages"
	]
},
	"application/vnd.apple.pkpass": {
	compressible: false,
	extensions: [
		"pkpass"
	]
},
	"application/vnd.arastra.swi": {
	source: "apache"
},
	"application/vnd.aristanetworks.swi": {
	source: "iana",
	extensions: [
		"swi"
	]
},
	"application/vnd.artisan+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.artsquare": {
	source: "iana"
},
	"application/vnd.astraea-software.iota": {
	source: "iana",
	extensions: [
		"iota"
	]
},
	"application/vnd.audiograph": {
	source: "iana",
	extensions: [
		"aep"
	]
},
	"application/vnd.autodesk.fbx": {
	extensions: [
		"fbx"
	]
},
	"application/vnd.autopackage": {
	source: "iana"
},
	"application/vnd.avalon+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.avistar+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.balsamiq.bmml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"bmml"
	]
},
	"application/vnd.balsamiq.bmpr": {
	source: "iana"
},
	"application/vnd.banana-accounting": {
	source: "iana"
},
	"application/vnd.bbf.usp.error": {
	source: "iana"
},
	"application/vnd.bbf.usp.msg": {
	source: "iana"
},
	"application/vnd.bbf.usp.msg+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.bekitzur-stech+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.belightsoft.lhzd+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.belightsoft.lhzl+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.bint.med-content": {
	source: "iana"
},
	"application/vnd.biopax.rdf+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.blink-idb-value-wrapper": {
	source: "iana"
},
	"application/vnd.blueice.multipass": {
	source: "iana",
	extensions: [
		"mpm"
	]
},
	"application/vnd.bluetooth.ep.oob": {
	source: "iana"
},
	"application/vnd.bluetooth.le.oob": {
	source: "iana"
},
	"application/vnd.bmi": {
	source: "iana",
	extensions: [
		"bmi"
	]
},
	"application/vnd.bpf": {
	source: "iana"
},
	"application/vnd.bpf3": {
	source: "iana"
},
	"application/vnd.businessobjects": {
	source: "iana",
	extensions: [
		"rep"
	]
},
	"application/vnd.byu.uapi+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.bzip3": {
	source: "iana"
},
	"application/vnd.c3voc.schedule+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.cab-jscript": {
	source: "iana"
},
	"application/vnd.canon-cpdl": {
	source: "iana"
},
	"application/vnd.canon-lips": {
	source: "iana"
},
	"application/vnd.capasystems-pg+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.cendio.thinlinc.clientconf": {
	source: "iana"
},
	"application/vnd.century-systems.tcp_stream": {
	source: "iana"
},
	"application/vnd.chemdraw+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"cdxml"
	]
},
	"application/vnd.chess-pgn": {
	source: "iana"
},
	"application/vnd.chipnuts.karaoke-mmd": {
	source: "iana",
	extensions: [
		"mmd"
	]
},
	"application/vnd.ciedi": {
	source: "iana"
},
	"application/vnd.cinderella": {
	source: "iana",
	extensions: [
		"cdy"
	]
},
	"application/vnd.cirpack.isdn-ext": {
	source: "iana"
},
	"application/vnd.citationstyles.style+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"csl"
	]
},
	"application/vnd.claymore": {
	source: "iana",
	extensions: [
		"cla"
	]
},
	"application/vnd.cloanto.rp9": {
	source: "iana",
	extensions: [
		"rp9"
	]
},
	"application/vnd.clonk.c4group": {
	source: "iana",
	extensions: [
		"c4g",
		"c4d",
		"c4f",
		"c4p",
		"c4u"
	]
},
	"application/vnd.cluetrust.cartomobile-config": {
	source: "iana",
	extensions: [
		"c11amc"
	]
},
	"application/vnd.cluetrust.cartomobile-config-pkg": {
	source: "iana",
	extensions: [
		"c11amz"
	]
},
	"application/vnd.cncf.helm.chart.content.v1.tar+gzip": {
	source: "iana"
},
	"application/vnd.cncf.helm.chart.provenance.v1.prov": {
	source: "iana"
},
	"application/vnd.cncf.helm.config.v1+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.coffeescript": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.document": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.document-template": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.presentation": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.presentation-template": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.spreadsheet": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.spreadsheet-template": {
	source: "iana"
},
	"application/vnd.collection+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.collection.doc+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.collection.next+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.comicbook+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.comicbook-rar": {
	source: "iana"
},
	"application/vnd.commerce-battelle": {
	source: "iana"
},
	"application/vnd.commonspace": {
	source: "iana",
	extensions: [
		"csp"
	]
},
	"application/vnd.contact.cmsg": {
	source: "iana",
	extensions: [
		"cdbcmsg"
	]
},
	"application/vnd.coreos.ignition+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.cosmocaller": {
	source: "iana",
	extensions: [
		"cmc"
	]
},
	"application/vnd.crick.clicker": {
	source: "iana",
	extensions: [
		"clkx"
	]
},
	"application/vnd.crick.clicker.keyboard": {
	source: "iana",
	extensions: [
		"clkk"
	]
},
	"application/vnd.crick.clicker.palette": {
	source: "iana",
	extensions: [
		"clkp"
	]
},
	"application/vnd.crick.clicker.template": {
	source: "iana",
	extensions: [
		"clkt"
	]
},
	"application/vnd.crick.clicker.wordbank": {
	source: "iana",
	extensions: [
		"clkw"
	]
},
	"application/vnd.criticaltools.wbs+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"wbs"
	]
},
	"application/vnd.cryptii.pipe+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.crypto-shade-file": {
	source: "iana"
},
	"application/vnd.cryptomator.encrypted": {
	source: "iana"
},
	"application/vnd.cryptomator.vault": {
	source: "iana"
},
	"application/vnd.ctc-posml": {
	source: "iana",
	extensions: [
		"pml"
	]
},
	"application/vnd.ctct.ws+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.cups-pdf": {
	source: "iana"
},
	"application/vnd.cups-postscript": {
	source: "iana"
},
	"application/vnd.cups-ppd": {
	source: "iana",
	extensions: [
		"ppd"
	]
},
	"application/vnd.cups-raster": {
	source: "iana"
},
	"application/vnd.cups-raw": {
	source: "iana"
},
	"application/vnd.curl": {
	source: "iana"
},
	"application/vnd.curl.car": {
	source: "apache",
	extensions: [
		"car"
	]
},
	"application/vnd.curl.pcurl": {
	source: "apache",
	extensions: [
		"pcurl"
	]
},
	"application/vnd.cyan.dean.root+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.cybank": {
	source: "iana"
},
	"application/vnd.cyclonedx+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.cyclonedx+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.d2l.coursepackage1p0+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.d3m-dataset": {
	source: "iana"
},
	"application/vnd.d3m-problem": {
	source: "iana"
},
	"application/vnd.dart": {
	source: "iana",
	compressible: true,
	extensions: [
		"dart"
	]
},
	"application/vnd.data-vision.rdz": {
	source: "iana",
	extensions: [
		"rdz"
	]
},
	"application/vnd.datalog": {
	source: "iana"
},
	"application/vnd.datapackage+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.dataresource+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.dbf": {
	source: "iana",
	extensions: [
		"dbf"
	]
},
	"application/vnd.dcmp+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"dcmp"
	]
},
	"application/vnd.debian.binary-package": {
	source: "iana"
},
	"application/vnd.dece.data": {
	source: "iana",
	extensions: [
		"uvf",
		"uvvf",
		"uvd",
		"uvvd"
	]
},
	"application/vnd.dece.ttml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"uvt",
		"uvvt"
	]
},
	"application/vnd.dece.unspecified": {
	source: "iana",
	extensions: [
		"uvx",
		"uvvx"
	]
},
	"application/vnd.dece.zip": {
	source: "iana",
	extensions: [
		"uvz",
		"uvvz"
	]
},
	"application/vnd.denovo.fcselayout-link": {
	source: "iana",
	extensions: [
		"fe_launch"
	]
},
	"application/vnd.desmume.movie": {
	source: "iana"
},
	"application/vnd.dir-bi.plate-dl-nosuffix": {
	source: "iana"
},
	"application/vnd.dm.delegation+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dna": {
	source: "iana",
	extensions: [
		"dna"
	]
},
	"application/vnd.document+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.dolby.mlp": {
	source: "apache",
	extensions: [
		"mlp"
	]
},
	"application/vnd.dolby.mobile.1": {
	source: "iana"
},
	"application/vnd.dolby.mobile.2": {
	source: "iana"
},
	"application/vnd.doremir.scorecloud-binary-document": {
	source: "iana"
},
	"application/vnd.dpgraph": {
	source: "iana",
	extensions: [
		"dpg"
	]
},
	"application/vnd.dreamfactory": {
	source: "iana",
	extensions: [
		"dfac"
	]
},
	"application/vnd.drive+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ds-keypoint": {
	source: "apache",
	extensions: [
		"kpxx"
	]
},
	"application/vnd.dtg.local": {
	source: "iana"
},
	"application/vnd.dtg.local.flash": {
	source: "iana"
},
	"application/vnd.dtg.local.html": {
	source: "iana"
},
	"application/vnd.dvb.ait": {
	source: "iana",
	extensions: [
		"ait"
	]
},
	"application/vnd.dvb.dvbisl+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.dvbj": {
	source: "iana"
},
	"application/vnd.dvb.esgcontainer": {
	source: "iana"
},
	"application/vnd.dvb.ipdcdftnotifaccess": {
	source: "iana"
},
	"application/vnd.dvb.ipdcesgaccess": {
	source: "iana"
},
	"application/vnd.dvb.ipdcesgaccess2": {
	source: "iana"
},
	"application/vnd.dvb.ipdcesgpdd": {
	source: "iana"
},
	"application/vnd.dvb.ipdcroaming": {
	source: "iana"
},
	"application/vnd.dvb.iptv.alfec-base": {
	source: "iana"
},
	"application/vnd.dvb.iptv.alfec-enhancement": {
	source: "iana"
},
	"application/vnd.dvb.notif-aggregate-root+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-container+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-generic+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-ia-msglist+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-ia-registration-request+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-ia-registration-response+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-init+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.pfr": {
	source: "iana"
},
	"application/vnd.dvb.service": {
	source: "iana",
	extensions: [
		"svc"
	]
},
	"application/vnd.dxr": {
	source: "iana"
},
	"application/vnd.dynageo": {
	source: "iana",
	extensions: [
		"geo"
	]
},
	"application/vnd.dzr": {
	source: "iana"
},
	"application/vnd.easykaraoke.cdgdownload": {
	source: "iana"
},
	"application/vnd.ecdis-update": {
	source: "iana"
},
	"application/vnd.ecip.rlp": {
	source: "iana"
},
	"application/vnd.eclipse.ditto+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ecowin.chart": {
	source: "iana",
	extensions: [
		"mag"
	]
},
	"application/vnd.ecowin.filerequest": {
	source: "iana"
},
	"application/vnd.ecowin.fileupdate": {
	source: "iana"
},
	"application/vnd.ecowin.series": {
	source: "iana"
},
	"application/vnd.ecowin.seriesrequest": {
	source: "iana"
},
	"application/vnd.ecowin.seriesupdate": {
	source: "iana"
},
	"application/vnd.efi.img": {
	source: "iana"
},
	"application/vnd.efi.iso": {
	source: "iana"
},
	"application/vnd.eln+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.emclient.accessrequest+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.enliven": {
	source: "iana",
	extensions: [
		"nml"
	]
},
	"application/vnd.enphase.envoy": {
	source: "iana"
},
	"application/vnd.eprints.data+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.epson.esf": {
	source: "iana",
	extensions: [
		"esf"
	]
},
	"application/vnd.epson.msf": {
	source: "iana",
	extensions: [
		"msf"
	]
},
	"application/vnd.epson.quickanime": {
	source: "iana",
	extensions: [
		"qam"
	]
},
	"application/vnd.epson.salt": {
	source: "iana",
	extensions: [
		"slt"
	]
},
	"application/vnd.epson.ssf": {
	source: "iana",
	extensions: [
		"ssf"
	]
},
	"application/vnd.ericsson.quickcall": {
	source: "iana"
},
	"application/vnd.erofs": {
	source: "iana"
},
	"application/vnd.espass-espass+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.eszigno3+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"es3",
		"et3"
	]
},
	"application/vnd.etsi.aoc+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.asic-e+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.etsi.asic-s+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.etsi.cug+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvcommand+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvdiscovery+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvprofile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvsad-bc+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvsad-cod+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvsad-npvr+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvservice+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvsync+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvueprofile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.mcid+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.mheg5": {
	source: "iana"
},
	"application/vnd.etsi.overload-control-policy-dataset+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.pstn+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.sci+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.simservs+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.timestamp-token": {
	source: "iana"
},
	"application/vnd.etsi.tsl+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.tsl.der": {
	source: "iana"
},
	"application/vnd.eu.kasparian.car+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.eudora.data": {
	source: "iana"
},
	"application/vnd.evolv.ecig.profile": {
	source: "iana"
},
	"application/vnd.evolv.ecig.settings": {
	source: "iana"
},
	"application/vnd.evolv.ecig.theme": {
	source: "iana"
},
	"application/vnd.exstream-empower+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.exstream-package": {
	source: "iana"
},
	"application/vnd.ezpix-album": {
	source: "iana",
	extensions: [
		"ez2"
	]
},
	"application/vnd.ezpix-package": {
	source: "iana",
	extensions: [
		"ez3"
	]
},
	"application/vnd.f-secure.mobile": {
	source: "iana"
},
	"application/vnd.familysearch.gedcom+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.fastcopy-disk-image": {
	source: "iana"
},
	"application/vnd.fdf": {
	source: "apache",
	extensions: [
		"fdf"
	]
},
	"application/vnd.fdsn.mseed": {
	source: "iana",
	extensions: [
		"mseed"
	]
},
	"application/vnd.fdsn.seed": {
	source: "iana",
	extensions: [
		"seed",
		"dataless"
	]
},
	"application/vnd.fdsn.stationxml+xml": {
	source: "iana",
	charset: "XML-BASED",
	compressible: true
},
	"application/vnd.ffsns": {
	source: "iana"
},
	"application/vnd.ficlab.flb+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.filmit.zfc": {
	source: "iana"
},
	"application/vnd.fints": {
	source: "iana"
},
	"application/vnd.firemonkeys.cloudcell": {
	source: "iana"
},
	"application/vnd.flographit": {
	source: "iana",
	extensions: [
		"gph"
	]
},
	"application/vnd.fluxtime.clip": {
	source: "iana",
	extensions: [
		"ftc"
	]
},
	"application/vnd.font-fontforge-sfd": {
	source: "iana"
},
	"application/vnd.framemaker": {
	source: "iana",
	extensions: [
		"fm",
		"frame",
		"maker",
		"book"
	]
},
	"application/vnd.freelog.comic": {
	source: "iana"
},
	"application/vnd.frogans.fnc": {
	source: "apache",
	extensions: [
		"fnc"
	]
},
	"application/vnd.frogans.ltf": {
	source: "apache",
	extensions: [
		"ltf"
	]
},
	"application/vnd.fsc.weblaunch": {
	source: "iana",
	extensions: [
		"fsc"
	]
},
	"application/vnd.fujifilm.fb.docuworks": {
	source: "iana"
},
	"application/vnd.fujifilm.fb.docuworks.binder": {
	source: "iana"
},
	"application/vnd.fujifilm.fb.docuworks.container": {
	source: "iana"
},
	"application/vnd.fujifilm.fb.jfi+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.fujitsu.oasys": {
	source: "iana",
	extensions: [
		"oas"
	]
},
	"application/vnd.fujitsu.oasys2": {
	source: "iana",
	extensions: [
		"oa2"
	]
},
	"application/vnd.fujitsu.oasys3": {
	source: "iana",
	extensions: [
		"oa3"
	]
},
	"application/vnd.fujitsu.oasysgp": {
	source: "iana",
	extensions: [
		"fg5"
	]
},
	"application/vnd.fujitsu.oasysprs": {
	source: "iana",
	extensions: [
		"bh2"
	]
},
	"application/vnd.fujixerox.art-ex": {
	source: "iana"
},
	"application/vnd.fujixerox.art4": {
	source: "iana"
},
	"application/vnd.fujixerox.ddd": {
	source: "iana",
	extensions: [
		"ddd"
	]
},
	"application/vnd.fujixerox.docuworks": {
	source: "iana",
	extensions: [
		"xdw"
	]
},
	"application/vnd.fujixerox.docuworks.binder": {
	source: "iana",
	extensions: [
		"xbd"
	]
},
	"application/vnd.fujixerox.docuworks.container": {
	source: "iana"
},
	"application/vnd.fujixerox.hbpl": {
	source: "iana"
},
	"application/vnd.fut-misnet": {
	source: "iana"
},
	"application/vnd.futoin+cbor": {
	source: "iana"
},
	"application/vnd.futoin+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.fuzzysheet": {
	source: "iana",
	extensions: [
		"fzs"
	]
},
	"application/vnd.ga4gh.passport+jwt": {
	source: "iana"
},
	"application/vnd.genomatix.tuxedo": {
	source: "iana",
	extensions: [
		"txd"
	]
},
	"application/vnd.genozip": {
	source: "iana"
},
	"application/vnd.gentics.grd+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.gentoo.catmetadata+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.gentoo.ebuild": {
	source: "iana"
},
	"application/vnd.gentoo.eclass": {
	source: "iana"
},
	"application/vnd.gentoo.gpkg": {
	source: "iana"
},
	"application/vnd.gentoo.manifest": {
	source: "iana"
},
	"application/vnd.gentoo.pkgmetadata+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.gentoo.xpak": {
	source: "iana"
},
	"application/vnd.geo+json": {
	source: "apache",
	compressible: true
},
	"application/vnd.geocube+xml": {
	source: "apache",
	compressible: true
},
	"application/vnd.geogebra.file": {
	source: "iana",
	extensions: [
		"ggb"
	]
},
	"application/vnd.geogebra.pinboard": {
	source: "iana"
},
	"application/vnd.geogebra.slides": {
	source: "iana",
	extensions: [
		"ggs"
	]
},
	"application/vnd.geogebra.tool": {
	source: "iana",
	extensions: [
		"ggt"
	]
},
	"application/vnd.geometry-explorer": {
	source: "iana",
	extensions: [
		"gex",
		"gre"
	]
},
	"application/vnd.geonext": {
	source: "iana",
	extensions: [
		"gxt"
	]
},
	"application/vnd.geoplan": {
	source: "iana",
	extensions: [
		"g2w"
	]
},
	"application/vnd.geospace": {
	source: "iana",
	extensions: [
		"g3w"
	]
},
	"application/vnd.gerber": {
	source: "iana"
},
	"application/vnd.globalplatform.card-content-mgt": {
	source: "iana"
},
	"application/vnd.globalplatform.card-content-mgt-response": {
	source: "iana"
},
	"application/vnd.gmx": {
	source: "iana",
	extensions: [
		"gmx"
	]
},
	"application/vnd.gnu.taler.exchange+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.gnu.taler.merchant+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.google-apps.audio": {
},
	"application/vnd.google-apps.document": {
	compressible: false,
	extensions: [
		"gdoc"
	]
},
	"application/vnd.google-apps.drawing": {
	compressible: false,
	extensions: [
		"gdraw"
	]
},
	"application/vnd.google-apps.drive-sdk": {
	compressible: false
},
	"application/vnd.google-apps.file": {
},
	"application/vnd.google-apps.folder": {
	compressible: false
},
	"application/vnd.google-apps.form": {
	compressible: false,
	extensions: [
		"gform"
	]
},
	"application/vnd.google-apps.fusiontable": {
},
	"application/vnd.google-apps.jam": {
	compressible: false,
	extensions: [
		"gjam"
	]
},
	"application/vnd.google-apps.mail-layout": {
},
	"application/vnd.google-apps.map": {
	compressible: false,
	extensions: [
		"gmap"
	]
},
	"application/vnd.google-apps.photo": {
},
	"application/vnd.google-apps.presentation": {
	compressible: false,
	extensions: [
		"gslides"
	]
},
	"application/vnd.google-apps.script": {
	compressible: false,
	extensions: [
		"gscript"
	]
},
	"application/vnd.google-apps.shortcut": {
},
	"application/vnd.google-apps.site": {
	compressible: false,
	extensions: [
		"gsite"
	]
},
	"application/vnd.google-apps.spreadsheet": {
	compressible: false,
	extensions: [
		"gsheet"
	]
},
	"application/vnd.google-apps.unknown": {
},
	"application/vnd.google-apps.video": {
},
	"application/vnd.google-earth.kml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"kml"
	]
},
	"application/vnd.google-earth.kmz": {
	source: "iana",
	compressible: false,
	extensions: [
		"kmz"
	]
},
	"application/vnd.gov.sk.e-form+xml": {
	source: "apache",
	compressible: true
},
	"application/vnd.gov.sk.e-form+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.gov.sk.xmldatacontainer+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xdcf"
	]
},
	"application/vnd.gpxsee.map+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.grafeq": {
	source: "iana",
	extensions: [
		"gqf",
		"gqs"
	]
},
	"application/vnd.gridmp": {
	source: "iana"
},
	"application/vnd.groove-account": {
	source: "iana",
	extensions: [
		"gac"
	]
},
	"application/vnd.groove-help": {
	source: "iana",
	extensions: [
		"ghf"
	]
},
	"application/vnd.groove-identity-message": {
	source: "iana",
	extensions: [
		"gim"
	]
},
	"application/vnd.groove-injector": {
	source: "iana",
	extensions: [
		"grv"
	]
},
	"application/vnd.groove-tool-message": {
	source: "iana",
	extensions: [
		"gtm"
	]
},
	"application/vnd.groove-tool-template": {
	source: "iana",
	extensions: [
		"tpl"
	]
},
	"application/vnd.groove-vcard": {
	source: "iana",
	extensions: [
		"vcg"
	]
},
	"application/vnd.hal+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hal+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"hal"
	]
},
	"application/vnd.handheld-entertainment+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"zmm"
	]
},
	"application/vnd.hbci": {
	source: "iana",
	extensions: [
		"hbci"
	]
},
	"application/vnd.hc+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hcl-bireports": {
	source: "iana"
},
	"application/vnd.hdt": {
	source: "iana"
},
	"application/vnd.heroku+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hhe.lesson-player": {
	source: "iana",
	extensions: [
		"les"
	]
},
	"application/vnd.hp-hpgl": {
	source: "iana",
	extensions: [
		"hpgl"
	]
},
	"application/vnd.hp-hpid": {
	source: "iana",
	extensions: [
		"hpid"
	]
},
	"application/vnd.hp-hps": {
	source: "iana",
	extensions: [
		"hps"
	]
},
	"application/vnd.hp-jlyt": {
	source: "iana",
	extensions: [
		"jlt"
	]
},
	"application/vnd.hp-pcl": {
	source: "iana",
	extensions: [
		"pcl"
	]
},
	"application/vnd.hp-pclxl": {
	source: "iana",
	extensions: [
		"pclxl"
	]
},
	"application/vnd.hsl": {
	source: "iana"
},
	"application/vnd.httphone": {
	source: "iana"
},
	"application/vnd.hydrostatix.sof-data": {
	source: "iana",
	extensions: [
		"sfd-hdstx"
	]
},
	"application/vnd.hyper+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hyper-item+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hyperdrive+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hzn-3d-crossword": {
	source: "iana"
},
	"application/vnd.ibm.afplinedata": {
	source: "apache"
},
	"application/vnd.ibm.electronic-media": {
	source: "iana"
},
	"application/vnd.ibm.minipay": {
	source: "iana",
	extensions: [
		"mpy"
	]
},
	"application/vnd.ibm.modcap": {
	source: "apache",
	extensions: [
		"afp",
		"listafp",
		"list3820"
	]
},
	"application/vnd.ibm.rights-management": {
	source: "iana",
	extensions: [
		"irm"
	]
},
	"application/vnd.ibm.secure-container": {
	source: "iana",
	extensions: [
		"sc"
	]
},
	"application/vnd.iccprofile": {
	source: "iana",
	extensions: [
		"icc",
		"icm"
	]
},
	"application/vnd.ieee.1905": {
	source: "iana"
},
	"application/vnd.igloader": {
	source: "iana",
	extensions: [
		"igl"
	]
},
	"application/vnd.imagemeter.folder+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.imagemeter.image+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.immervision-ivp": {
	source: "iana",
	extensions: [
		"ivp"
	]
},
	"application/vnd.immervision-ivu": {
	source: "iana",
	extensions: [
		"ivu"
	]
},
	"application/vnd.ims.imsccv1p1": {
	source: "iana"
},
	"application/vnd.ims.imsccv1p2": {
	source: "iana"
},
	"application/vnd.ims.imsccv1p3": {
	source: "iana"
},
	"application/vnd.ims.lis.v2.result+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ims.lti.v2.toolconsumerprofile+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ims.lti.v2.toolproxy+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ims.lti.v2.toolproxy.id+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ims.lti.v2.toolsettings+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ims.lti.v2.toolsettings.simple+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.informedcontrol.rms+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.informix-visionary": {
	source: "apache"
},
	"application/vnd.infotech.project": {
	source: "iana"
},
	"application/vnd.infotech.project+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.innopath.wamp.notification": {
	source: "iana"
},
	"application/vnd.insors.igm": {
	source: "iana",
	extensions: [
		"igm"
	]
},
	"application/vnd.intercon.formnet": {
	source: "iana",
	extensions: [
		"xpw",
		"xpx"
	]
},
	"application/vnd.intergeo": {
	source: "iana",
	extensions: [
		"i2g"
	]
},
	"application/vnd.intertrust.digibox": {
	source: "iana"
},
	"application/vnd.intertrust.nncp": {
	source: "iana"
},
	"application/vnd.intu.qbo": {
	source: "iana",
	extensions: [
		"qbo"
	]
},
	"application/vnd.intu.qfx": {
	source: "iana",
	extensions: [
		"qfx"
	]
},
	"application/vnd.ipfs.ipns-record": {
	source: "iana"
},
	"application/vnd.ipld.car": {
	source: "iana"
},
	"application/vnd.ipld.dag-cbor": {
	source: "iana"
},
	"application/vnd.ipld.dag-json": {
	source: "iana"
},
	"application/vnd.ipld.raw": {
	source: "iana"
},
	"application/vnd.iptc.g2.catalogitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.conceptitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.knowledgeitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.newsitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.newsmessage+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.packageitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.planningitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.ipunplugged.rcprofile": {
	source: "iana",
	extensions: [
		"rcprofile"
	]
},
	"application/vnd.irepository.package+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"irp"
	]
},
	"application/vnd.is-xpr": {
	source: "iana",
	extensions: [
		"xpr"
	]
},
	"application/vnd.isac.fcs": {
	source: "iana",
	extensions: [
		"fcs"
	]
},
	"application/vnd.iso11783-10+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.jam": {
	source: "iana",
	extensions: [
		"jam"
	]
},
	"application/vnd.japannet-directory-service": {
	source: "iana"
},
	"application/vnd.japannet-jpnstore-wakeup": {
	source: "iana"
},
	"application/vnd.japannet-payment-wakeup": {
	source: "iana"
},
	"application/vnd.japannet-registration": {
	source: "iana"
},
	"application/vnd.japannet-registration-wakeup": {
	source: "iana"
},
	"application/vnd.japannet-setstore-wakeup": {
	source: "iana"
},
	"application/vnd.japannet-verification": {
	source: "iana"
},
	"application/vnd.japannet-verification-wakeup": {
	source: "iana"
},
	"application/vnd.jcp.javame.midlet-rms": {
	source: "iana",
	extensions: [
		"rms"
	]
},
	"application/vnd.jisp": {
	source: "iana",
	extensions: [
		"jisp"
	]
},
	"application/vnd.joost.joda-archive": {
	source: "iana",
	extensions: [
		"joda"
	]
},
	"application/vnd.jsk.isdn-ngn": {
	source: "iana"
},
	"application/vnd.kahootz": {
	source: "iana",
	extensions: [
		"ktz",
		"ktr"
	]
},
	"application/vnd.kde.karbon": {
	source: "iana",
	extensions: [
		"karbon"
	]
},
	"application/vnd.kde.kchart": {
	source: "iana",
	extensions: [
		"chrt"
	]
},
	"application/vnd.kde.kformula": {
	source: "iana",
	extensions: [
		"kfo"
	]
},
	"application/vnd.kde.kivio": {
	source: "iana",
	extensions: [
		"flw"
	]
},
	"application/vnd.kde.kontour": {
	source: "iana",
	extensions: [
		"kon"
	]
},
	"application/vnd.kde.kpresenter": {
	source: "iana",
	extensions: [
		"kpr",
		"kpt"
	]
},
	"application/vnd.kde.kspread": {
	source: "iana",
	extensions: [
		"ksp"
	]
},
	"application/vnd.kde.kword": {
	source: "iana",
	extensions: [
		"kwd",
		"kwt"
	]
},
	"application/vnd.kdl": {
	source: "iana"
},
	"application/vnd.kenameaapp": {
	source: "iana",
	extensions: [
		"htke"
	]
},
	"application/vnd.keyman.kmp+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.keyman.kmx": {
	source: "iana"
},
	"application/vnd.kidspiration": {
	source: "iana",
	extensions: [
		"kia"
	]
},
	"application/vnd.kinar": {
	source: "iana",
	extensions: [
		"kne",
		"knp"
	]
},
	"application/vnd.koan": {
	source: "iana",
	extensions: [
		"skp",
		"skd",
		"skt",
		"skm"
	]
},
	"application/vnd.kodak-descriptor": {
	source: "iana",
	extensions: [
		"sse"
	]
},
	"application/vnd.las": {
	source: "iana"
},
	"application/vnd.las.las+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.las.las+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"lasxml"
	]
},
	"application/vnd.laszip": {
	source: "iana"
},
	"application/vnd.ldev.productlicensing": {
	source: "iana"
},
	"application/vnd.leap+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.liberty-request+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.llamagraphics.life-balance.desktop": {
	source: "iana",
	extensions: [
		"lbd"
	]
},
	"application/vnd.llamagraphics.life-balance.exchange+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"lbe"
	]
},
	"application/vnd.logipipe.circuit+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.loom": {
	source: "iana"
},
	"application/vnd.lotus-1-2-3": {
	source: "iana",
	extensions: [
		"123"
	]
},
	"application/vnd.lotus-approach": {
	source: "iana",
	extensions: [
		"apr"
	]
},
	"application/vnd.lotus-freelance": {
	source: "iana",
	extensions: [
		"pre"
	]
},
	"application/vnd.lotus-notes": {
	source: "iana",
	extensions: [
		"nsf"
	]
},
	"application/vnd.lotus-organizer": {
	source: "iana",
	extensions: [
		"org"
	]
},
	"application/vnd.lotus-screencam": {
	source: "iana",
	extensions: [
		"scm"
	]
},
	"application/vnd.lotus-wordpro": {
	source: "iana",
	extensions: [
		"lwp"
	]
},
	"application/vnd.macports.portpkg": {
	source: "iana",
	extensions: [
		"portpkg"
	]
},
	"application/vnd.mapbox-vector-tile": {
	source: "iana",
	extensions: [
		"mvt"
	]
},
	"application/vnd.marlin.drm.actiontoken+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.marlin.drm.conftoken+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.marlin.drm.license+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.marlin.drm.mdcf": {
	source: "iana"
},
	"application/vnd.mason+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.maxar.archive.3tz+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.maxmind.maxmind-db": {
	source: "iana"
},
	"application/vnd.mcd": {
	source: "iana",
	extensions: [
		"mcd"
	]
},
	"application/vnd.mdl": {
	source: "iana"
},
	"application/vnd.mdl-mbsdf": {
	source: "iana"
},
	"application/vnd.medcalcdata": {
	source: "iana",
	extensions: [
		"mc1"
	]
},
	"application/vnd.mediastation.cdkey": {
	source: "iana",
	extensions: [
		"cdkey"
	]
},
	"application/vnd.medicalholodeck.recordxr": {
	source: "iana"
},
	"application/vnd.meridian-slingshot": {
	source: "iana"
},
	"application/vnd.mermaid": {
	source: "iana"
},
	"application/vnd.mfer": {
	source: "iana",
	extensions: [
		"mwf"
	]
},
	"application/vnd.mfmp": {
	source: "iana",
	extensions: [
		"mfm"
	]
},
	"application/vnd.micro+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.micrografx.flo": {
	source: "iana",
	extensions: [
		"flo"
	]
},
	"application/vnd.micrografx.igx": {
	source: "iana",
	extensions: [
		"igx"
	]
},
	"application/vnd.microsoft.portable-executable": {
	source: "iana"
},
	"application/vnd.microsoft.windows.thumbnail-cache": {
	source: "iana"
},
	"application/vnd.miele+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.mif": {
	source: "iana",
	extensions: [
		"mif"
	]
},
	"application/vnd.minisoft-hp3000-save": {
	source: "iana"
},
	"application/vnd.mitsubishi.misty-guard.trustweb": {
	source: "iana"
},
	"application/vnd.mobius.daf": {
	source: "iana",
	extensions: [
		"daf"
	]
},
	"application/vnd.mobius.dis": {
	source: "iana",
	extensions: [
		"dis"
	]
},
	"application/vnd.mobius.mbk": {
	source: "iana",
	extensions: [
		"mbk"
	]
},
	"application/vnd.mobius.mqy": {
	source: "iana",
	extensions: [
		"mqy"
	]
},
	"application/vnd.mobius.msl": {
	source: "iana",
	extensions: [
		"msl"
	]
},
	"application/vnd.mobius.plc": {
	source: "iana",
	extensions: [
		"plc"
	]
},
	"application/vnd.mobius.txf": {
	source: "iana",
	extensions: [
		"txf"
	]
},
	"application/vnd.modl": {
	source: "iana"
},
	"application/vnd.mophun.application": {
	source: "iana",
	extensions: [
		"mpn"
	]
},
	"application/vnd.mophun.certificate": {
	source: "iana",
	extensions: [
		"mpc"
	]
},
	"application/vnd.motorola.flexsuite": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.adsi": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.fis": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.gotap": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.kmr": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.ttc": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.wem": {
	source: "iana"
},
	"application/vnd.motorola.iprm": {
	source: "iana"
},
	"application/vnd.mozilla.xul+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xul"
	]
},
	"application/vnd.ms-3mfdocument": {
	source: "iana"
},
	"application/vnd.ms-artgalry": {
	source: "iana",
	extensions: [
		"cil"
	]
},
	"application/vnd.ms-asf": {
	source: "iana"
},
	"application/vnd.ms-cab-compressed": {
	source: "iana",
	extensions: [
		"cab"
	]
},
	"application/vnd.ms-color.iccprofile": {
	source: "apache"
},
	"application/vnd.ms-excel": {
	source: "iana",
	compressible: false,
	extensions: [
		"xls",
		"xlm",
		"xla",
		"xlc",
		"xlt",
		"xlw"
	]
},
	"application/vnd.ms-excel.addin.macroenabled.12": {
	source: "iana",
	extensions: [
		"xlam"
	]
},
	"application/vnd.ms-excel.sheet.binary.macroenabled.12": {
	source: "iana",
	extensions: [
		"xlsb"
	]
},
	"application/vnd.ms-excel.sheet.macroenabled.12": {
	source: "iana",
	extensions: [
		"xlsm"
	]
},
	"application/vnd.ms-excel.template.macroenabled.12": {
	source: "iana",
	extensions: [
		"xltm"
	]
},
	"application/vnd.ms-fontobject": {
	source: "iana",
	compressible: true,
	extensions: [
		"eot"
	]
},
	"application/vnd.ms-htmlhelp": {
	source: "iana",
	extensions: [
		"chm"
	]
},
	"application/vnd.ms-ims": {
	source: "iana",
	extensions: [
		"ims"
	]
},
	"application/vnd.ms-lrm": {
	source: "iana",
	extensions: [
		"lrm"
	]
},
	"application/vnd.ms-office.activex+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.ms-officetheme": {
	source: "iana",
	extensions: [
		"thmx"
	]
},
	"application/vnd.ms-opentype": {
	source: "apache",
	compressible: true
},
	"application/vnd.ms-outlook": {
	compressible: false,
	extensions: [
		"msg"
	]
},
	"application/vnd.ms-package.obfuscated-opentype": {
	source: "apache"
},
	"application/vnd.ms-pki.seccat": {
	source: "apache",
	extensions: [
		"cat"
	]
},
	"application/vnd.ms-pki.stl": {
	source: "apache",
	extensions: [
		"stl"
	]
},
	"application/vnd.ms-playready.initiator+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.ms-powerpoint": {
	source: "iana",
	compressible: false,
	extensions: [
		"ppt",
		"pps",
		"pot"
	]
},
	"application/vnd.ms-powerpoint.addin.macroenabled.12": {
	source: "iana",
	extensions: [
		"ppam"
	]
},
	"application/vnd.ms-powerpoint.presentation.macroenabled.12": {
	source: "iana",
	extensions: [
		"pptm"
	]
},
	"application/vnd.ms-powerpoint.slide.macroenabled.12": {
	source: "iana",
	extensions: [
		"sldm"
	]
},
	"application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
	source: "iana",
	extensions: [
		"ppsm"
	]
},
	"application/vnd.ms-powerpoint.template.macroenabled.12": {
	source: "iana",
	extensions: [
		"potm"
	]
},
	"application/vnd.ms-printdevicecapabilities+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.ms-printing.printticket+xml": {
	source: "apache",
	compressible: true
},
	"application/vnd.ms-printschematicket+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.ms-project": {
	source: "iana",
	extensions: [
		"mpp",
		"mpt"
	]
},
	"application/vnd.ms-tnef": {
	source: "iana"
},
	"application/vnd.ms-visio.viewer": {
	extensions: [
		"vdx"
	]
},
	"application/vnd.ms-windows.devicepairing": {
	source: "iana"
},
	"application/vnd.ms-windows.nwprinting.oob": {
	source: "iana"
},
	"application/vnd.ms-windows.printerpairing": {
	source: "iana"
},
	"application/vnd.ms-windows.wsd.oob": {
	source: "iana"
},
	"application/vnd.ms-wmdrm.lic-chlg-req": {
	source: "iana"
},
	"application/vnd.ms-wmdrm.lic-resp": {
	source: "iana"
},
	"application/vnd.ms-wmdrm.meter-chlg-req": {
	source: "iana"
},
	"application/vnd.ms-wmdrm.meter-resp": {
	source: "iana"
},
	"application/vnd.ms-word.document.macroenabled.12": {
	source: "iana",
	extensions: [
		"docm"
	]
},
	"application/vnd.ms-word.template.macroenabled.12": {
	source: "iana",
	extensions: [
		"dotm"
	]
},
	"application/vnd.ms-works": {
	source: "iana",
	extensions: [
		"wps",
		"wks",
		"wcm",
		"wdb"
	]
},
	"application/vnd.ms-wpl": {
	source: "iana",
	extensions: [
		"wpl"
	]
},
	"application/vnd.ms-xpsdocument": {
	source: "iana",
	compressible: false,
	extensions: [
		"xps"
	]
},
	"application/vnd.msa-disk-image": {
	source: "iana"
},
	"application/vnd.mseq": {
	source: "iana",
	extensions: [
		"mseq"
	]
},
	"application/vnd.msgpack": {
	source: "iana"
},
	"application/vnd.msign": {
	source: "iana"
},
	"application/vnd.multiad.creator": {
	source: "iana"
},
	"application/vnd.multiad.creator.cif": {
	source: "iana"
},
	"application/vnd.music-niff": {
	source: "iana"
},
	"application/vnd.musician": {
	source: "iana",
	extensions: [
		"mus"
	]
},
	"application/vnd.muvee.style": {
	source: "iana",
	extensions: [
		"msty"
	]
},
	"application/vnd.mynfc": {
	source: "iana",
	extensions: [
		"taglet"
	]
},
	"application/vnd.nacamar.ybrid+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.nato.bindingdataobject+cbor": {
	source: "iana"
},
	"application/vnd.nato.bindingdataobject+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.nato.bindingdataobject+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"bdo"
	]
},
	"application/vnd.nato.openxmlformats-package.iepd+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.ncd.control": {
	source: "iana"
},
	"application/vnd.ncd.reference": {
	source: "iana"
},
	"application/vnd.nearst.inv+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.nebumind.line": {
	source: "iana"
},
	"application/vnd.nervana": {
	source: "iana"
},
	"application/vnd.netfpx": {
	source: "iana"
},
	"application/vnd.neurolanguage.nlu": {
	source: "iana",
	extensions: [
		"nlu"
	]
},
	"application/vnd.nimn": {
	source: "iana"
},
	"application/vnd.nintendo.nitro.rom": {
	source: "iana"
},
	"application/vnd.nintendo.snes.rom": {
	source: "iana"
},
	"application/vnd.nitf": {
	source: "iana",
	extensions: [
		"ntf",
		"nitf"
	]
},
	"application/vnd.noblenet-directory": {
	source: "iana",
	extensions: [
		"nnd"
	]
},
	"application/vnd.noblenet-sealer": {
	source: "iana",
	extensions: [
		"nns"
	]
},
	"application/vnd.noblenet-web": {
	source: "iana",
	extensions: [
		"nnw"
	]
},
	"application/vnd.nokia.catalogs": {
	source: "iana"
},
	"application/vnd.nokia.conml+wbxml": {
	source: "iana"
},
	"application/vnd.nokia.conml+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.nokia.iptv.config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.nokia.isds-radio-presets": {
	source: "iana"
},
	"application/vnd.nokia.landmark+wbxml": {
	source: "iana"
},
	"application/vnd.nokia.landmark+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.nokia.landmarkcollection+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.nokia.n-gage.ac+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"ac"
	]
},
	"application/vnd.nokia.n-gage.data": {
	source: "iana",
	extensions: [
		"ngdat"
	]
},
	"application/vnd.nokia.n-gage.symbian.install": {
	source: "apache",
	extensions: [
		"n-gage"
	]
},
	"application/vnd.nokia.ncd": {
	source: "iana"
},
	"application/vnd.nokia.pcd+wbxml": {
	source: "iana"
},
	"application/vnd.nokia.pcd+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.nokia.radio-preset": {
	source: "iana",
	extensions: [
		"rpst"
	]
},
	"application/vnd.nokia.radio-presets": {
	source: "iana",
	extensions: [
		"rpss"
	]
},
	"application/vnd.novadigm.edm": {
	source: "iana",
	extensions: [
		"edm"
	]
},
	"application/vnd.novadigm.edx": {
	source: "iana",
	extensions: [
		"edx"
	]
},
	"application/vnd.novadigm.ext": {
	source: "iana",
	extensions: [
		"ext"
	]
},
	"application/vnd.ntt-local.content-share": {
	source: "iana"
},
	"application/vnd.ntt-local.file-transfer": {
	source: "iana"
},
	"application/vnd.ntt-local.ogw_remote-access": {
	source: "iana"
},
	"application/vnd.ntt-local.sip-ta_remote": {
	source: "iana"
},
	"application/vnd.ntt-local.sip-ta_tcp_stream": {
	source: "iana"
},
	"application/vnd.oai.workflows": {
	source: "iana"
},
	"application/vnd.oai.workflows+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.oai.workflows+yaml": {
	source: "iana"
},
	"application/vnd.oasis.opendocument.base": {
	source: "iana"
},
	"application/vnd.oasis.opendocument.chart": {
	source: "iana",
	extensions: [
		"odc"
	]
},
	"application/vnd.oasis.opendocument.chart-template": {
	source: "iana",
	extensions: [
		"otc"
	]
},
	"application/vnd.oasis.opendocument.database": {
	source: "apache",
	extensions: [
		"odb"
	]
},
	"application/vnd.oasis.opendocument.formula": {
	source: "iana",
	extensions: [
		"odf"
	]
},
	"application/vnd.oasis.opendocument.formula-template": {
	source: "iana",
	extensions: [
		"odft"
	]
},
	"application/vnd.oasis.opendocument.graphics": {
	source: "iana",
	compressible: false,
	extensions: [
		"odg"
	]
},
	"application/vnd.oasis.opendocument.graphics-template": {
	source: "iana",
	extensions: [
		"otg"
	]
},
	"application/vnd.oasis.opendocument.image": {
	source: "iana",
	extensions: [
		"odi"
	]
},
	"application/vnd.oasis.opendocument.image-template": {
	source: "iana",
	extensions: [
		"oti"
	]
},
	"application/vnd.oasis.opendocument.presentation": {
	source: "iana",
	compressible: false,
	extensions: [
		"odp"
	]
},
	"application/vnd.oasis.opendocument.presentation-template": {
	source: "iana",
	extensions: [
		"otp"
	]
},
	"application/vnd.oasis.opendocument.spreadsheet": {
	source: "iana",
	compressible: false,
	extensions: [
		"ods"
	]
},
	"application/vnd.oasis.opendocument.spreadsheet-template": {
	source: "iana",
	extensions: [
		"ots"
	]
},
	"application/vnd.oasis.opendocument.text": {
	source: "iana",
	compressible: false,
	extensions: [
		"odt"
	]
},
	"application/vnd.oasis.opendocument.text-master": {
	source: "iana",
	extensions: [
		"odm"
	]
},
	"application/vnd.oasis.opendocument.text-master-template": {
	source: "iana"
},
	"application/vnd.oasis.opendocument.text-template": {
	source: "iana",
	extensions: [
		"ott"
	]
},
	"application/vnd.oasis.opendocument.text-web": {
	source: "iana",
	extensions: [
		"oth"
	]
},
	"application/vnd.obn": {
	source: "iana"
},
	"application/vnd.ocf+cbor": {
	source: "iana"
},
	"application/vnd.oci.image.manifest.v1+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.oftn.l10n+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.contentaccessdownload+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.contentaccessstreaming+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.cspg-hexbinary": {
	source: "iana"
},
	"application/vnd.oipf.dae.svg+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.dae.xhtml+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.mippvcontrolmessage+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.pae.gem": {
	source: "iana"
},
	"application/vnd.oipf.spdiscovery+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.spdlist+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.ueprofile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.userprofile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.olpc-sugar": {
	source: "iana",
	extensions: [
		"xo"
	]
},
	"application/vnd.oma-scws-config": {
	source: "iana"
},
	"application/vnd.oma-scws-http-request": {
	source: "iana"
},
	"application/vnd.oma-scws-http-response": {
	source: "iana"
},
	"application/vnd.oma.bcast.associated-procedure-parameter+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.drm-trigger+xml": {
	source: "apache",
	compressible: true
},
	"application/vnd.oma.bcast.imd+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.ltkm": {
	source: "iana"
},
	"application/vnd.oma.bcast.notification+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.provisioningtrigger": {
	source: "iana"
},
	"application/vnd.oma.bcast.sgboot": {
	source: "iana"
},
	"application/vnd.oma.bcast.sgdd+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.sgdu": {
	source: "iana"
},
	"application/vnd.oma.bcast.simple-symbol-container": {
	source: "iana"
},
	"application/vnd.oma.bcast.smartcard-trigger+xml": {
	source: "apache",
	compressible: true
},
	"application/vnd.oma.bcast.sprov+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.stkm": {
	source: "iana"
},
	"application/vnd.oma.cab-address-book+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.cab-feature-handler+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.cab-pcc+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.cab-subs-invite+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.cab-user-prefs+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.dcd": {
	source: "iana"
},
	"application/vnd.oma.dcdc": {
	source: "iana"
},
	"application/vnd.oma.dd2+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"dd2"
	]
},
	"application/vnd.oma.drm.risd+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.group-usage-list+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.lwm2m+cbor": {
	source: "iana"
},
	"application/vnd.oma.lwm2m+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.lwm2m+tlv": {
	source: "iana"
},
	"application/vnd.oma.pal+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.poc.detailed-progress-report+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.poc.final-report+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.poc.groups+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.poc.invocation-descriptor+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.poc.optimized-progress-report+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.push": {
	source: "iana"
},
	"application/vnd.oma.scidm.messages+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.xcap-directory+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.omads-email+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/vnd.omads-file+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/vnd.omads-folder+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/vnd.omaloc-supl-init": {
	source: "iana"
},
	"application/vnd.onepager": {
	source: "iana"
},
	"application/vnd.onepagertamp": {
	source: "iana"
},
	"application/vnd.onepagertamx": {
	source: "iana"
},
	"application/vnd.onepagertat": {
	source: "iana"
},
	"application/vnd.onepagertatp": {
	source: "iana"
},
	"application/vnd.onepagertatx": {
	source: "iana"
},
	"application/vnd.onvif.metadata": {
	source: "iana"
},
	"application/vnd.openblox.game+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"obgx"
	]
},
	"application/vnd.openblox.game-binary": {
	source: "iana"
},
	"application/vnd.openeye.oeb": {
	source: "iana"
},
	"application/vnd.openofficeorg.extension": {
	source: "apache",
	extensions: [
		"oxt"
	]
},
	"application/vnd.openstreetmap.data+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"osm"
	]
},
	"application/vnd.opentimestamps.ots": {
	source: "iana"
},
	"application/vnd.openvpi.dspx+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.custom-properties+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.customxmlproperties+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawing+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.chart+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.extended-properties+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.comments+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.presentation": {
	source: "iana",
	compressible: false,
	extensions: [
		"pptx"
	]
},
	"application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.slide": {
	source: "iana",
	extensions: [
		"sldx"
	]
},
	"application/vnd.openxmlformats-officedocument.presentationml.slide+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.slideshow": {
	source: "iana",
	extensions: [
		"ppsx"
	]
},
	"application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.tags+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.template": {
	source: "iana",
	extensions: [
		"potx"
	]
},
	"application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
	source: "iana",
	compressible: false,
	extensions: [
		"xlsx"
	]
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.template": {
	source: "iana",
	extensions: [
		"xltx"
	]
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.theme+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.themeoverride+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.vmldrawing": {
	source: "iana"
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
	source: "iana",
	compressible: false,
	extensions: [
		"docx"
	]
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.template": {
	source: "iana",
	extensions: [
		"dotx"
	]
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-package.core-properties+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-package.relationships+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oracle.resource+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.orange.indata": {
	source: "iana"
},
	"application/vnd.osa.netdeploy": {
	source: "iana"
},
	"application/vnd.osgeo.mapguide.package": {
	source: "iana",
	extensions: [
		"mgp"
	]
},
	"application/vnd.osgi.bundle": {
	source: "iana"
},
	"application/vnd.osgi.dp": {
	source: "iana",
	extensions: [
		"dp"
	]
},
	"application/vnd.osgi.subsystem": {
	source: "iana",
	extensions: [
		"esa"
	]
},
	"application/vnd.otps.ct-kip+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oxli.countgraph": {
	source: "iana"
},
	"application/vnd.pagerduty+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.palm": {
	source: "iana",
	extensions: [
		"pdb",
		"pqa",
		"oprc"
	]
},
	"application/vnd.panoply": {
	source: "iana"
},
	"application/vnd.paos.xml": {
	source: "iana"
},
	"application/vnd.patentdive": {
	source: "iana"
},
	"application/vnd.patientecommsdoc": {
	source: "iana"
},
	"application/vnd.pawaafile": {
	source: "iana",
	extensions: [
		"paw"
	]
},
	"application/vnd.pcos": {
	source: "iana"
},
	"application/vnd.pg.format": {
	source: "iana",
	extensions: [
		"str"
	]
},
	"application/vnd.pg.osasli": {
	source: "iana",
	extensions: [
		"ei6"
	]
},
	"application/vnd.piaccess.application-licence": {
	source: "iana"
},
	"application/vnd.picsel": {
	source: "iana",
	extensions: [
		"efif"
	]
},
	"application/vnd.pmi.widget": {
	source: "iana",
	extensions: [
		"wg"
	]
},
	"application/vnd.poc.group-advertisement+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.pocketlearn": {
	source: "iana",
	extensions: [
		"plf"
	]
},
	"application/vnd.powerbuilder6": {
	source: "iana",
	extensions: [
		"pbd"
	]
},
	"application/vnd.powerbuilder6-s": {
	source: "iana"
},
	"application/vnd.powerbuilder7": {
	source: "iana"
},
	"application/vnd.powerbuilder7-s": {
	source: "iana"
},
	"application/vnd.powerbuilder75": {
	source: "iana"
},
	"application/vnd.powerbuilder75-s": {
	source: "iana"
},
	"application/vnd.preminet": {
	source: "iana"
},
	"application/vnd.previewsystems.box": {
	source: "iana",
	extensions: [
		"box"
	]
},
	"application/vnd.procrate.brushset": {
	extensions: [
		"brushset"
	]
},
	"application/vnd.procreate.brush": {
	extensions: [
		"brush"
	]
},
	"application/vnd.procreate.dream": {
	extensions: [
		"drm"
	]
},
	"application/vnd.proteus.magazine": {
	source: "iana",
	extensions: [
		"mgz"
	]
},
	"application/vnd.psfs": {
	source: "iana"
},
	"application/vnd.pt.mundusmundi": {
	source: "iana"
},
	"application/vnd.publishare-delta-tree": {
	source: "iana",
	extensions: [
		"qps"
	]
},
	"application/vnd.pvi.ptid1": {
	source: "iana",
	extensions: [
		"ptid"
	]
},
	"application/vnd.pwg-multiplexed": {
	source: "iana"
},
	"application/vnd.pwg-xhtml-print+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xhtm"
	]
},
	"application/vnd.qualcomm.brew-app-res": {
	source: "iana"
},
	"application/vnd.quarantainenet": {
	source: "iana"
},
	"application/vnd.quark.quarkxpress": {
	source: "iana",
	extensions: [
		"qxd",
		"qxt",
		"qwd",
		"qwt",
		"qxl",
		"qxb"
	]
},
	"application/vnd.quobject-quoxdocument": {
	source: "iana"
},
	"application/vnd.radisys.moml+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-audit+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-audit-conf+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-audit-conn+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-audit-dialog+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-audit-stream+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-conf+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-base+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-fax-detect+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-fax-sendrecv+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-group+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-speech+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-transform+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.rainstor.data": {
	source: "iana"
},
	"application/vnd.rapid": {
	source: "iana"
},
	"application/vnd.rar": {
	source: "iana",
	extensions: [
		"rar"
	]
},
	"application/vnd.realvnc.bed": {
	source: "iana",
	extensions: [
		"bed"
	]
},
	"application/vnd.recordare.musicxml": {
	source: "iana",
	extensions: [
		"mxl"
	]
},
	"application/vnd.recordare.musicxml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"musicxml"
	]
},
	"application/vnd.relpipe": {
	source: "iana"
},
	"application/vnd.renlearn.rlprint": {
	source: "iana"
},
	"application/vnd.resilient.logic": {
	source: "iana"
},
	"application/vnd.restful+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.rig.cryptonote": {
	source: "iana",
	extensions: [
		"cryptonote"
	]
},
	"application/vnd.rim.cod": {
	source: "apache",
	extensions: [
		"cod"
	]
},
	"application/vnd.rn-realmedia": {
	source: "apache",
	extensions: [
		"rm"
	]
},
	"application/vnd.rn-realmedia-vbr": {
	source: "apache",
	extensions: [
		"rmvb"
	]
},
	"application/vnd.route66.link66+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"link66"
	]
},
	"application/vnd.rs-274x": {
	source: "iana"
},
	"application/vnd.ruckus.download": {
	source: "iana"
},
	"application/vnd.s3sms": {
	source: "iana"
},
	"application/vnd.sailingtracker.track": {
	source: "iana",
	extensions: [
		"st"
	]
},
	"application/vnd.sar": {
	source: "iana"
},
	"application/vnd.sbm.cid": {
	source: "iana"
},
	"application/vnd.sbm.mid2": {
	source: "iana"
},
	"application/vnd.scribus": {
	source: "iana"
},
	"application/vnd.sealed.3df": {
	source: "iana"
},
	"application/vnd.sealed.csf": {
	source: "iana"
},
	"application/vnd.sealed.doc": {
	source: "iana"
},
	"application/vnd.sealed.eml": {
	source: "iana"
},
	"application/vnd.sealed.mht": {
	source: "iana"
},
	"application/vnd.sealed.net": {
	source: "iana"
},
	"application/vnd.sealed.ppt": {
	source: "iana"
},
	"application/vnd.sealed.tiff": {
	source: "iana"
},
	"application/vnd.sealed.xls": {
	source: "iana"
},
	"application/vnd.sealedmedia.softseal.html": {
	source: "iana"
},
	"application/vnd.sealedmedia.softseal.pdf": {
	source: "iana"
},
	"application/vnd.seemail": {
	source: "iana",
	extensions: [
		"see"
	]
},
	"application/vnd.seis+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.sema": {
	source: "iana",
	extensions: [
		"sema"
	]
},
	"application/vnd.semd": {
	source: "iana",
	extensions: [
		"semd"
	]
},
	"application/vnd.semf": {
	source: "iana",
	extensions: [
		"semf"
	]
},
	"application/vnd.shade-save-file": {
	source: "iana"
},
	"application/vnd.shana.informed.formdata": {
	source: "iana",
	extensions: [
		"ifm"
	]
},
	"application/vnd.shana.informed.formtemplate": {
	source: "iana",
	extensions: [
		"itp"
	]
},
	"application/vnd.shana.informed.interchange": {
	source: "iana",
	extensions: [
		"iif"
	]
},
	"application/vnd.shana.informed.package": {
	source: "iana",
	extensions: [
		"ipk"
	]
},
	"application/vnd.shootproof+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.shopkick+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.shp": {
	source: "iana"
},
	"application/vnd.shx": {
	source: "iana"
},
	"application/vnd.sigrok.session": {
	source: "iana"
},
	"application/vnd.simtech-mindmapper": {
	source: "iana",
	extensions: [
		"twd",
		"twds"
	]
},
	"application/vnd.siren+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.sketchometry": {
	source: "iana"
},
	"application/vnd.smaf": {
	source: "iana",
	extensions: [
		"mmf"
	]
},
	"application/vnd.smart.notebook": {
	source: "iana"
},
	"application/vnd.smart.teacher": {
	source: "iana",
	extensions: [
		"teacher"
	]
},
	"application/vnd.smintio.portals.archive": {
	source: "iana"
},
	"application/vnd.snesdev-page-table": {
	source: "iana"
},
	"application/vnd.software602.filler.form+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"fo"
	]
},
	"application/vnd.software602.filler.form-xml-zip": {
	source: "iana"
},
	"application/vnd.solent.sdkm+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"sdkm",
		"sdkd"
	]
},
	"application/vnd.spotfire.dxp": {
	source: "iana",
	extensions: [
		"dxp"
	]
},
	"application/vnd.spotfire.sfs": {
	source: "iana",
	extensions: [
		"sfs"
	]
},
	"application/vnd.sqlite3": {
	source: "iana"
},
	"application/vnd.sss-cod": {
	source: "iana"
},
	"application/vnd.sss-dtf": {
	source: "iana"
},
	"application/vnd.sss-ntf": {
	source: "iana"
},
	"application/vnd.stardivision.calc": {
	source: "apache",
	extensions: [
		"sdc"
	]
},
	"application/vnd.stardivision.draw": {
	source: "apache",
	extensions: [
		"sda"
	]
},
	"application/vnd.stardivision.impress": {
	source: "apache",
	extensions: [
		"sdd"
	]
},
	"application/vnd.stardivision.math": {
	source: "apache",
	extensions: [
		"smf"
	]
},
	"application/vnd.stardivision.writer": {
	source: "apache",
	extensions: [
		"sdw",
		"vor"
	]
},
	"application/vnd.stardivision.writer-global": {
	source: "apache",
	extensions: [
		"sgl"
	]
},
	"application/vnd.stepmania.package": {
	source: "iana",
	extensions: [
		"smzip"
	]
},
	"application/vnd.stepmania.stepchart": {
	source: "iana",
	extensions: [
		"sm"
	]
},
	"application/vnd.street-stream": {
	source: "iana"
},
	"application/vnd.sun.wadl+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"wadl"
	]
},
	"application/vnd.sun.xml.calc": {
	source: "apache",
	extensions: [
		"sxc"
	]
},
	"application/vnd.sun.xml.calc.template": {
	source: "apache",
	extensions: [
		"stc"
	]
},
	"application/vnd.sun.xml.draw": {
	source: "apache",
	extensions: [
		"sxd"
	]
},
	"application/vnd.sun.xml.draw.template": {
	source: "apache",
	extensions: [
		"std"
	]
},
	"application/vnd.sun.xml.impress": {
	source: "apache",
	extensions: [
		"sxi"
	]
},
	"application/vnd.sun.xml.impress.template": {
	source: "apache",
	extensions: [
		"sti"
	]
},
	"application/vnd.sun.xml.math": {
	source: "apache",
	extensions: [
		"sxm"
	]
},
	"application/vnd.sun.xml.writer": {
	source: "apache",
	extensions: [
		"sxw"
	]
},
	"application/vnd.sun.xml.writer.global": {
	source: "apache",
	extensions: [
		"sxg"
	]
},
	"application/vnd.sun.xml.writer.template": {
	source: "apache",
	extensions: [
		"stw"
	]
},
	"application/vnd.sus-calendar": {
	source: "iana",
	extensions: [
		"sus",
		"susp"
	]
},
	"application/vnd.svd": {
	source: "iana",
	extensions: [
		"svd"
	]
},
	"application/vnd.swiftview-ics": {
	source: "iana"
},
	"application/vnd.sybyl.mol2": {
	source: "iana"
},
	"application/vnd.sycle+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.syft+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.symbian.install": {
	source: "apache",
	extensions: [
		"sis",
		"sisx"
	]
},
	"application/vnd.syncml+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"xsm"
	]
},
	"application/vnd.syncml.dm+wbxml": {
	source: "iana",
	charset: "UTF-8",
	extensions: [
		"bdm"
	]
},
	"application/vnd.syncml.dm+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"xdm"
	]
},
	"application/vnd.syncml.dm.notification": {
	source: "iana"
},
	"application/vnd.syncml.dmddf+wbxml": {
	source: "iana"
},
	"application/vnd.syncml.dmddf+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"ddf"
	]
},
	"application/vnd.syncml.dmtnds+wbxml": {
	source: "iana"
},
	"application/vnd.syncml.dmtnds+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/vnd.syncml.ds.notification": {
	source: "iana"
},
	"application/vnd.tableschema+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.tao.intent-module-archive": {
	source: "iana",
	extensions: [
		"tao"
	]
},
	"application/vnd.tcpdump.pcap": {
	source: "iana",
	extensions: [
		"pcap",
		"cap",
		"dmp"
	]
},
	"application/vnd.think-cell.ppttc+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.tmd.mediaflex.api+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.tml": {
	source: "iana"
},
	"application/vnd.tmobile-livetv": {
	source: "iana",
	extensions: [
		"tmo"
	]
},
	"application/vnd.tri.onesource": {
	source: "iana"
},
	"application/vnd.trid.tpt": {
	source: "iana",
	extensions: [
		"tpt"
	]
},
	"application/vnd.triscape.mxs": {
	source: "iana",
	extensions: [
		"mxs"
	]
},
	"application/vnd.trueapp": {
	source: "iana",
	extensions: [
		"tra"
	]
},
	"application/vnd.truedoc": {
	source: "iana"
},
	"application/vnd.ubisoft.webplayer": {
	source: "iana"
},
	"application/vnd.ufdl": {
	source: "iana",
	extensions: [
		"ufd",
		"ufdl"
	]
},
	"application/vnd.uic.osdm+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.uiq.theme": {
	source: "iana",
	extensions: [
		"utz"
	]
},
	"application/vnd.umajin": {
	source: "iana",
	extensions: [
		"umj"
	]
},
	"application/vnd.unity": {
	source: "iana",
	extensions: [
		"unityweb"
	]
},
	"application/vnd.uoml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"uoml",
		"uo"
	]
},
	"application/vnd.uplanet.alert": {
	source: "iana"
},
	"application/vnd.uplanet.alert-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.bearer-choice": {
	source: "iana"
},
	"application/vnd.uplanet.bearer-choice-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.cacheop": {
	source: "iana"
},
	"application/vnd.uplanet.cacheop-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.channel": {
	source: "iana"
},
	"application/vnd.uplanet.channel-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.list": {
	source: "iana"
},
	"application/vnd.uplanet.list-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.listcmd": {
	source: "iana"
},
	"application/vnd.uplanet.listcmd-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.signal": {
	source: "iana"
},
	"application/vnd.uri-map": {
	source: "iana"
},
	"application/vnd.valve.source.material": {
	source: "iana"
},
	"application/vnd.vcx": {
	source: "iana",
	extensions: [
		"vcx"
	]
},
	"application/vnd.vd-study": {
	source: "iana"
},
	"application/vnd.vectorworks": {
	source: "iana"
},
	"application/vnd.vel+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.veraison.tsm-report+cbor": {
	source: "iana"
},
	"application/vnd.veraison.tsm-report+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.verimatrix.vcas": {
	source: "iana"
},
	"application/vnd.veritone.aion+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.veryant.thin": {
	source: "iana"
},
	"application/vnd.ves.encrypted": {
	source: "iana"
},
	"application/vnd.vidsoft.vidconference": {
	source: "iana"
},
	"application/vnd.visio": {
	source: "iana",
	extensions: [
		"vsd",
		"vst",
		"vss",
		"vsw",
		"vsdx",
		"vtx"
	]
},
	"application/vnd.visionary": {
	source: "iana",
	extensions: [
		"vis"
	]
},
	"application/vnd.vividence.scriptfile": {
	source: "iana"
},
	"application/vnd.vocalshaper.vsp4": {
	source: "iana"
},
	"application/vnd.vsf": {
	source: "iana",
	extensions: [
		"vsf"
	]
},
	"application/vnd.wap.sic": {
	source: "iana"
},
	"application/vnd.wap.slc": {
	source: "iana"
},
	"application/vnd.wap.wbxml": {
	source: "iana",
	charset: "UTF-8",
	extensions: [
		"wbxml"
	]
},
	"application/vnd.wap.wmlc": {
	source: "iana",
	extensions: [
		"wmlc"
	]
},
	"application/vnd.wap.wmlscriptc": {
	source: "iana",
	extensions: [
		"wmlsc"
	]
},
	"application/vnd.wasmflow.wafl": {
	source: "iana"
},
	"application/vnd.webturbo": {
	source: "iana",
	extensions: [
		"wtb"
	]
},
	"application/vnd.wfa.dpp": {
	source: "iana"
},
	"application/vnd.wfa.p2p": {
	source: "iana"
},
	"application/vnd.wfa.wsc": {
	source: "iana"
},
	"application/vnd.windows.devicepairing": {
	source: "iana"
},
	"application/vnd.wmc": {
	source: "iana"
},
	"application/vnd.wmf.bootstrap": {
	source: "iana"
},
	"application/vnd.wolfram.mathematica": {
	source: "iana"
},
	"application/vnd.wolfram.mathematica.package": {
	source: "iana"
},
	"application/vnd.wolfram.player": {
	source: "iana",
	extensions: [
		"nbp"
	]
},
	"application/vnd.wordlift": {
	source: "iana"
},
	"application/vnd.wordperfect": {
	source: "iana",
	extensions: [
		"wpd"
	]
},
	"application/vnd.wqd": {
	source: "iana",
	extensions: [
		"wqd"
	]
},
	"application/vnd.wrq-hp3000-labelled": {
	source: "iana"
},
	"application/vnd.wt.stf": {
	source: "iana",
	extensions: [
		"stf"
	]
},
	"application/vnd.wv.csp+wbxml": {
	source: "iana"
},
	"application/vnd.wv.csp+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.wv.ssp+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.xacml+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.xara": {
	source: "iana",
	extensions: [
		"xar"
	]
},
	"application/vnd.xarin.cpj": {
	source: "iana"
},
	"application/vnd.xecrets-encrypted": {
	source: "iana"
},
	"application/vnd.xfdl": {
	source: "iana",
	extensions: [
		"xfdl"
	]
},
	"application/vnd.xfdl.webform": {
	source: "iana"
},
	"application/vnd.xmi+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.xmpie.cpkg": {
	source: "iana"
},
	"application/vnd.xmpie.dpkg": {
	source: "iana"
},
	"application/vnd.xmpie.plan": {
	source: "iana"
},
	"application/vnd.xmpie.ppkg": {
	source: "iana"
},
	"application/vnd.xmpie.xlim": {
	source: "iana"
},
	"application/vnd.yamaha.hv-dic": {
	source: "iana",
	extensions: [
		"hvd"
	]
},
	"application/vnd.yamaha.hv-script": {
	source: "iana",
	extensions: [
		"hvs"
	]
},
	"application/vnd.yamaha.hv-voice": {
	source: "iana",
	extensions: [
		"hvp"
	]
},
	"application/vnd.yamaha.openscoreformat": {
	source: "iana",
	extensions: [
		"osf"
	]
},
	"application/vnd.yamaha.openscoreformat.osfpvg+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"osfpvg"
	]
},
	"application/vnd.yamaha.remote-setup": {
	source: "iana"
},
	"application/vnd.yamaha.smaf-audio": {
	source: "iana",
	extensions: [
		"saf"
	]
},
	"application/vnd.yamaha.smaf-phrase": {
	source: "iana",
	extensions: [
		"spf"
	]
},
	"application/vnd.yamaha.through-ngn": {
	source: "iana"
},
	"application/vnd.yamaha.tunnel-udpencap": {
	source: "iana"
},
	"application/vnd.yaoweme": {
	source: "iana"
},
	"application/vnd.yellowriver-custom-menu": {
	source: "iana",
	extensions: [
		"cmp"
	]
},
	"application/vnd.zul": {
	source: "iana",
	extensions: [
		"zir",
		"zirz"
	]
},
	"application/vnd.zzazz.deck+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"zaz"
	]
},
	"application/voicexml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"vxml"
	]
},
	"application/voucher-cms+json": {
	source: "iana",
	compressible: true
},
	"application/voucher-jws+json": {
	source: "iana",
	compressible: true
},
	"application/vp": {
	source: "iana"
},
	"application/vp+cose": {
	source: "iana"
},
	"application/vp+jwt": {
	source: "iana"
},
	"application/vq-rtcpxr": {
	source: "iana"
},
	"application/wasm": {
	source: "iana",
	compressible: true,
	extensions: [
		"wasm"
	]
},
	"application/watcherinfo+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"wif"
	]
},
	"application/webpush-options+json": {
	source: "iana",
	compressible: true
},
	"application/whoispp-query": {
	source: "iana"
},
	"application/whoispp-response": {
	source: "iana"
},
	"application/widget": {
	source: "iana",
	extensions: [
		"wgt"
	]
},
	"application/winhlp": {
	source: "apache",
	extensions: [
		"hlp"
	]
},
	"application/wita": {
	source: "iana"
},
	"application/wordperfect5.1": {
	source: "iana"
},
	"application/wsdl+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"wsdl"
	]
},
	"application/wspolicy+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"wspolicy"
	]
},
	"application/x-7z-compressed": {
	source: "apache",
	compressible: false,
	extensions: [
		"7z"
	]
},
	"application/x-abiword": {
	source: "apache",
	extensions: [
		"abw"
	]
},
	"application/x-ace-compressed": {
	source: "apache",
	extensions: [
		"ace"
	]
},
	"application/x-amf": {
	source: "apache"
},
	"application/x-apple-diskimage": {
	source: "apache",
	extensions: [
		"dmg"
	]
},
	"application/x-arj": {
	compressible: false,
	extensions: [
		"arj"
	]
},
	"application/x-authorware-bin": {
	source: "apache",
	extensions: [
		"aab",
		"x32",
		"u32",
		"vox"
	]
},
	"application/x-authorware-map": {
	source: "apache",
	extensions: [
		"aam"
	]
},
	"application/x-authorware-seg": {
	source: "apache",
	extensions: [
		"aas"
	]
},
	"application/x-bcpio": {
	source: "apache",
	extensions: [
		"bcpio"
	]
},
	"application/x-bdoc": {
	compressible: false,
	extensions: [
		"bdoc"
	]
},
	"application/x-bittorrent": {
	source: "apache",
	extensions: [
		"torrent"
	]
},
	"application/x-blender": {
	extensions: [
		"blend"
	]
},
	"application/x-blorb": {
	source: "apache",
	extensions: [
		"blb",
		"blorb"
	]
},
	"application/x-bzip": {
	source: "apache",
	compressible: false,
	extensions: [
		"bz"
	]
},
	"application/x-bzip2": {
	source: "apache",
	compressible: false,
	extensions: [
		"bz2",
		"boz"
	]
},
	"application/x-cbr": {
	source: "apache",
	extensions: [
		"cbr",
		"cba",
		"cbt",
		"cbz",
		"cb7"
	]
},
	"application/x-cdlink": {
	source: "apache",
	extensions: [
		"vcd"
	]
},
	"application/x-cfs-compressed": {
	source: "apache",
	extensions: [
		"cfs"
	]
},
	"application/x-chat": {
	source: "apache",
	extensions: [
		"chat"
	]
},
	"application/x-chess-pgn": {
	source: "apache",
	extensions: [
		"pgn"
	]
},
	"application/x-chrome-extension": {
	extensions: [
		"crx"
	]
},
	"application/x-cocoa": {
	source: "nginx",
	extensions: [
		"cco"
	]
},
	"application/x-compress": {
	source: "apache"
},
	"application/x-compressed": {
	extensions: [
		"rar"
	]
},
	"application/x-conference": {
	source: "apache",
	extensions: [
		"nsc"
	]
},
	"application/x-cpio": {
	source: "apache",
	extensions: [
		"cpio"
	]
},
	"application/x-csh": {
	source: "apache",
	extensions: [
		"csh"
	]
},
	"application/x-deb": {
	compressible: false
},
	"application/x-debian-package": {
	source: "apache",
	extensions: [
		"deb",
		"udeb"
	]
},
	"application/x-dgc-compressed": {
	source: "apache",
	extensions: [
		"dgc"
	]
},
	"application/x-director": {
	source: "apache",
	extensions: [
		"dir",
		"dcr",
		"dxr",
		"cst",
		"cct",
		"cxt",
		"w3d",
		"fgd",
		"swa"
	]
},
	"application/x-doom": {
	source: "apache",
	extensions: [
		"wad"
	]
},
	"application/x-dtbncx+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"ncx"
	]
},
	"application/x-dtbook+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"dtb"
	]
},
	"application/x-dtbresource+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"res"
	]
},
	"application/x-dvi": {
	source: "apache",
	compressible: false,
	extensions: [
		"dvi"
	]
},
	"application/x-envoy": {
	source: "apache",
	extensions: [
		"evy"
	]
},
	"application/x-eva": {
	source: "apache",
	extensions: [
		"eva"
	]
},
	"application/x-font-bdf": {
	source: "apache",
	extensions: [
		"bdf"
	]
},
	"application/x-font-dos": {
	source: "apache"
},
	"application/x-font-framemaker": {
	source: "apache"
},
	"application/x-font-ghostscript": {
	source: "apache",
	extensions: [
		"gsf"
	]
},
	"application/x-font-libgrx": {
	source: "apache"
},
	"application/x-font-linux-psf": {
	source: "apache",
	extensions: [
		"psf"
	]
},
	"application/x-font-pcf": {
	source: "apache",
	extensions: [
		"pcf"
	]
},
	"application/x-font-snf": {
	source: "apache",
	extensions: [
		"snf"
	]
},
	"application/x-font-speedo": {
	source: "apache"
},
	"application/x-font-sunos-news": {
	source: "apache"
},
	"application/x-font-type1": {
	source: "apache",
	extensions: [
		"pfa",
		"pfb",
		"pfm",
		"afm"
	]
},
	"application/x-font-vfont": {
	source: "apache"
},
	"application/x-freearc": {
	source: "apache",
	extensions: [
		"arc"
	]
},
	"application/x-futuresplash": {
	source: "apache",
	extensions: [
		"spl"
	]
},
	"application/x-gca-compressed": {
	source: "apache",
	extensions: [
		"gca"
	]
},
	"application/x-glulx": {
	source: "apache",
	extensions: [
		"ulx"
	]
},
	"application/x-gnumeric": {
	source: "apache",
	extensions: [
		"gnumeric"
	]
},
	"application/x-gramps-xml": {
	source: "apache",
	extensions: [
		"gramps"
	]
},
	"application/x-gtar": {
	source: "apache",
	extensions: [
		"gtar"
	]
},
	"application/x-gzip": {
	source: "apache"
},
	"application/x-hdf": {
	source: "apache",
	extensions: [
		"hdf"
	]
},
	"application/x-httpd-php": {
	compressible: true,
	extensions: [
		"php"
	]
},
	"application/x-install-instructions": {
	source: "apache",
	extensions: [
		"install"
	]
},
	"application/x-ipynb+json": {
	compressible: true,
	extensions: [
		"ipynb"
	]
},
	"application/x-iso9660-image": {
	source: "apache",
	extensions: [
		"iso"
	]
},
	"application/x-iwork-keynote-sffkey": {
	extensions: [
		"key"
	]
},
	"application/x-iwork-numbers-sffnumbers": {
	extensions: [
		"numbers"
	]
},
	"application/x-iwork-pages-sffpages": {
	extensions: [
		"pages"
	]
},
	"application/x-java-archive-diff": {
	source: "nginx",
	extensions: [
		"jardiff"
	]
},
	"application/x-java-jnlp-file": {
	source: "apache",
	compressible: false,
	extensions: [
		"jnlp"
	]
},
	"application/x-javascript": {
	compressible: true
},
	"application/x-keepass2": {
	extensions: [
		"kdbx"
	]
},
	"application/x-latex": {
	source: "apache",
	compressible: false,
	extensions: [
		"latex"
	]
},
	"application/x-lua-bytecode": {
	extensions: [
		"luac"
	]
},
	"application/x-lzh-compressed": {
	source: "apache",
	extensions: [
		"lzh",
		"lha"
	]
},
	"application/x-makeself": {
	source: "nginx",
	extensions: [
		"run"
	]
},
	"application/x-mie": {
	source: "apache",
	extensions: [
		"mie"
	]
},
	"application/x-mobipocket-ebook": {
	source: "apache",
	extensions: [
		"prc",
		"mobi"
	]
},
	"application/x-mpegurl": {
	compressible: false
},
	"application/x-ms-application": {
	source: "apache",
	extensions: [
		"application"
	]
},
	"application/x-ms-shortcut": {
	source: "apache",
	extensions: [
		"lnk"
	]
},
	"application/x-ms-wmd": {
	source: "apache",
	extensions: [
		"wmd"
	]
},
	"application/x-ms-wmz": {
	source: "apache",
	extensions: [
		"wmz"
	]
},
	"application/x-ms-xbap": {
	source: "apache",
	extensions: [
		"xbap"
	]
},
	"application/x-msaccess": {
	source: "apache",
	extensions: [
		"mdb"
	]
},
	"application/x-msbinder": {
	source: "apache",
	extensions: [
		"obd"
	]
},
	"application/x-mscardfile": {
	source: "apache",
	extensions: [
		"crd"
	]
},
	"application/x-msclip": {
	source: "apache",
	extensions: [
		"clp"
	]
},
	"application/x-msdos-program": {
	extensions: [
		"exe"
	]
},
	"application/x-msdownload": {
	source: "apache",
	extensions: [
		"exe",
		"dll",
		"com",
		"bat",
		"msi"
	]
},
	"application/x-msmediaview": {
	source: "apache",
	extensions: [
		"mvb",
		"m13",
		"m14"
	]
},
	"application/x-msmetafile": {
	source: "apache",
	extensions: [
		"wmf",
		"wmz",
		"emf",
		"emz"
	]
},
	"application/x-msmoney": {
	source: "apache",
	extensions: [
		"mny"
	]
},
	"application/x-mspublisher": {
	source: "apache",
	extensions: [
		"pub"
	]
},
	"application/x-msschedule": {
	source: "apache",
	extensions: [
		"scd"
	]
},
	"application/x-msterminal": {
	source: "apache",
	extensions: [
		"trm"
	]
},
	"application/x-mswrite": {
	source: "apache",
	extensions: [
		"wri"
	]
},
	"application/x-netcdf": {
	source: "apache",
	extensions: [
		"nc",
		"cdf"
	]
},
	"application/x-ns-proxy-autoconfig": {
	compressible: true,
	extensions: [
		"pac"
	]
},
	"application/x-nzb": {
	source: "apache",
	extensions: [
		"nzb"
	]
},
	"application/x-perl": {
	source: "nginx",
	extensions: [
		"pl",
		"pm"
	]
},
	"application/x-pilot": {
	source: "nginx",
	extensions: [
		"prc",
		"pdb"
	]
},
	"application/x-pkcs12": {
	source: "apache",
	compressible: false,
	extensions: [
		"p12",
		"pfx"
	]
},
	"application/x-pkcs7-certificates": {
	source: "apache",
	extensions: [
		"p7b",
		"spc"
	]
},
	"application/x-pkcs7-certreqresp": {
	source: "apache",
	extensions: [
		"p7r"
	]
},
	"application/x-pki-message": {
	source: "iana"
},
	"application/x-rar-compressed": {
	source: "apache",
	compressible: false,
	extensions: [
		"rar"
	]
},
	"application/x-redhat-package-manager": {
	source: "nginx",
	extensions: [
		"rpm"
	]
},
	"application/x-research-info-systems": {
	source: "apache",
	extensions: [
		"ris"
	]
},
	"application/x-sea": {
	source: "nginx",
	extensions: [
		"sea"
	]
},
	"application/x-sh": {
	source: "apache",
	compressible: true,
	extensions: [
		"sh"
	]
},
	"application/x-shar": {
	source: "apache",
	extensions: [
		"shar"
	]
},
	"application/x-shockwave-flash": {
	source: "apache",
	compressible: false,
	extensions: [
		"swf"
	]
},
	"application/x-silverlight-app": {
	source: "apache",
	extensions: [
		"xap"
	]
},
	"application/x-sql": {
	source: "apache",
	extensions: [
		"sql"
	]
},
	"application/x-stuffit": {
	source: "apache",
	compressible: false,
	extensions: [
		"sit"
	]
},
	"application/x-stuffitx": {
	source: "apache",
	extensions: [
		"sitx"
	]
},
	"application/x-subrip": {
	source: "apache",
	extensions: [
		"srt"
	]
},
	"application/x-sv4cpio": {
	source: "apache",
	extensions: [
		"sv4cpio"
	]
},
	"application/x-sv4crc": {
	source: "apache",
	extensions: [
		"sv4crc"
	]
},
	"application/x-t3vm-image": {
	source: "apache",
	extensions: [
		"t3"
	]
},
	"application/x-tads": {
	source: "apache",
	extensions: [
		"gam"
	]
},
	"application/x-tar": {
	source: "apache",
	compressible: true,
	extensions: [
		"tar"
	]
},
	"application/x-tcl": {
	source: "apache",
	extensions: [
		"tcl",
		"tk"
	]
},
	"application/x-tex": {
	source: "apache",
	extensions: [
		"tex"
	]
},
	"application/x-tex-tfm": {
	source: "apache",
	extensions: [
		"tfm"
	]
},
	"application/x-texinfo": {
	source: "apache",
	extensions: [
		"texinfo",
		"texi"
	]
},
	"application/x-tgif": {
	source: "apache",
	extensions: [
		"obj"
	]
},
	"application/x-ustar": {
	source: "apache",
	extensions: [
		"ustar"
	]
},
	"application/x-virtualbox-hdd": {
	compressible: true,
	extensions: [
		"hdd"
	]
},
	"application/x-virtualbox-ova": {
	compressible: true,
	extensions: [
		"ova"
	]
},
	"application/x-virtualbox-ovf": {
	compressible: true,
	extensions: [
		"ovf"
	]
},
	"application/x-virtualbox-vbox": {
	compressible: true,
	extensions: [
		"vbox"
	]
},
	"application/x-virtualbox-vbox-extpack": {
	compressible: false,
	extensions: [
		"vbox-extpack"
	]
},
	"application/x-virtualbox-vdi": {
	compressible: true,
	extensions: [
		"vdi"
	]
},
	"application/x-virtualbox-vhd": {
	compressible: true,
	extensions: [
		"vhd"
	]
},
	"application/x-virtualbox-vmdk": {
	compressible: true,
	extensions: [
		"vmdk"
	]
},
	"application/x-wais-source": {
	source: "apache",
	extensions: [
		"src"
	]
},
	"application/x-web-app-manifest+json": {
	compressible: true,
	extensions: [
		"webapp"
	]
},
	"application/x-www-form-urlencoded": {
	source: "iana",
	compressible: true
},
	"application/x-x509-ca-cert": {
	source: "iana",
	extensions: [
		"der",
		"crt",
		"pem"
	]
},
	"application/x-x509-ca-ra-cert": {
	source: "iana"
},
	"application/x-x509-next-ca-cert": {
	source: "iana"
},
	"application/x-xfig": {
	source: "apache",
	extensions: [
		"fig"
	]
},
	"application/x-xliff+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"xlf"
	]
},
	"application/x-xpinstall": {
	source: "apache",
	compressible: false,
	extensions: [
		"xpi"
	]
},
	"application/x-xz": {
	source: "apache",
	extensions: [
		"xz"
	]
},
	"application/x-zip-compressed": {
	extensions: [
		"zip"
	]
},
	"application/x-zmachine": {
	source: "apache",
	extensions: [
		"z1",
		"z2",
		"z3",
		"z4",
		"z5",
		"z6",
		"z7",
		"z8"
	]
},
	"application/x400-bp": {
	source: "iana"
},
	"application/xacml+xml": {
	source: "iana",
	compressible: true
},
	"application/xaml+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"xaml"
	]
},
	"application/xcap-att+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xav"
	]
},
	"application/xcap-caps+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xca"
	]
},
	"application/xcap-diff+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xdf"
	]
},
	"application/xcap-el+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xel"
	]
},
	"application/xcap-error+xml": {
	source: "iana",
	compressible: true
},
	"application/xcap-ns+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xns"
	]
},
	"application/xcon-conference-info+xml": {
	source: "iana",
	compressible: true
},
	"application/xcon-conference-info-diff+xml": {
	source: "iana",
	compressible: true
},
	"application/xenc+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xenc"
	]
},
	"application/xfdf": {
	source: "iana",
	extensions: [
		"xfdf"
	]
},
	"application/xhtml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xhtml",
		"xht"
	]
},
	"application/xhtml-voice+xml": {
	source: "apache",
	compressible: true
},
	"application/xliff+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xlf"
	]
},
	"application/xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xml",
		"xsl",
		"xsd",
		"rng"
	]
},
	"application/xml-dtd": {
	source: "iana",
	compressible: true,
	extensions: [
		"dtd"
	]
},
	"application/xml-external-parsed-entity": {
	source: "iana"
},
	"application/xml-patch+xml": {
	source: "iana",
	compressible: true
},
	"application/xmpp+xml": {
	source: "iana",
	compressible: true
},
	"application/xop+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xop"
	]
},
	"application/xproc+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"xpl"
	]
},
	"application/xslt+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xsl",
		"xslt"
	]
},
	"application/xspf+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"xspf"
	]
},
	"application/xv+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mxml",
		"xhvml",
		"xvml",
		"xvm"
	]
},
	"application/yaml": {
	source: "iana"
},
	"application/yang": {
	source: "iana",
	extensions: [
		"yang"
	]
},
	"application/yang-data+cbor": {
	source: "iana"
},
	"application/yang-data+json": {
	source: "iana",
	compressible: true
},
	"application/yang-data+xml": {
	source: "iana",
	compressible: true
},
	"application/yang-patch+json": {
	source: "iana",
	compressible: true
},
	"application/yang-patch+xml": {
	source: "iana",
	compressible: true
},
	"application/yang-sid+json": {
	source: "iana",
	compressible: true
},
	"application/yin+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"yin"
	]
},
	"application/zip": {
	source: "iana",
	compressible: false,
	extensions: [
		"zip"
	]
},
	"application/zip+dotlottie": {
	extensions: [
		"lottie"
	]
},
	"application/zlib": {
	source: "iana"
},
	"application/zstd": {
	source: "iana"
},
	"audio/1d-interleaved-parityfec": {
	source: "iana"
},
	"audio/32kadpcm": {
	source: "iana"
},
	"audio/3gpp": {
	source: "iana",
	compressible: false,
	extensions: [
		"3gpp"
	]
},
	"audio/3gpp2": {
	source: "iana"
},
	"audio/aac": {
	source: "iana",
	extensions: [
		"adts",
		"aac"
	]
},
	"audio/ac3": {
	source: "iana"
},
	"audio/adpcm": {
	source: "apache",
	extensions: [
		"adp"
	]
},
	"audio/amr": {
	source: "iana",
	extensions: [
		"amr"
	]
},
	"audio/amr-wb": {
	source: "iana"
},
	"audio/amr-wb+": {
	source: "iana"
},
	"audio/aptx": {
	source: "iana"
},
	"audio/asc": {
	source: "iana"
},
	"audio/atrac-advanced-lossless": {
	source: "iana"
},
	"audio/atrac-x": {
	source: "iana"
},
	"audio/atrac3": {
	source: "iana"
},
	"audio/basic": {
	source: "iana",
	compressible: false,
	extensions: [
		"au",
		"snd"
	]
},
	"audio/bv16": {
	source: "iana"
},
	"audio/bv32": {
	source: "iana"
},
	"audio/clearmode": {
	source: "iana"
},
	"audio/cn": {
	source: "iana"
},
	"audio/dat12": {
	source: "iana"
},
	"audio/dls": {
	source: "iana"
},
	"audio/dsr-es201108": {
	source: "iana"
},
	"audio/dsr-es202050": {
	source: "iana"
},
	"audio/dsr-es202211": {
	source: "iana"
},
	"audio/dsr-es202212": {
	source: "iana"
},
	"audio/dv": {
	source: "iana"
},
	"audio/dvi4": {
	source: "iana"
},
	"audio/eac3": {
	source: "iana"
},
	"audio/encaprtp": {
	source: "iana"
},
	"audio/evrc": {
	source: "iana"
},
	"audio/evrc-qcp": {
	source: "iana"
},
	"audio/evrc0": {
	source: "iana"
},
	"audio/evrc1": {
	source: "iana"
},
	"audio/evrcb": {
	source: "iana"
},
	"audio/evrcb0": {
	source: "iana"
},
	"audio/evrcb1": {
	source: "iana"
},
	"audio/evrcnw": {
	source: "iana"
},
	"audio/evrcnw0": {
	source: "iana"
},
	"audio/evrcnw1": {
	source: "iana"
},
	"audio/evrcwb": {
	source: "iana"
},
	"audio/evrcwb0": {
	source: "iana"
},
	"audio/evrcwb1": {
	source: "iana"
},
	"audio/evs": {
	source: "iana"
},
	"audio/flac": {
	source: "iana"
},
	"audio/flexfec": {
	source: "iana"
},
	"audio/fwdred": {
	source: "iana"
},
	"audio/g711-0": {
	source: "iana"
},
	"audio/g719": {
	source: "iana"
},
	"audio/g722": {
	source: "iana"
},
	"audio/g7221": {
	source: "iana"
},
	"audio/g723": {
	source: "iana"
},
	"audio/g726-16": {
	source: "iana"
},
	"audio/g726-24": {
	source: "iana"
},
	"audio/g726-32": {
	source: "iana"
},
	"audio/g726-40": {
	source: "iana"
},
	"audio/g728": {
	source: "iana"
},
	"audio/g729": {
	source: "iana"
},
	"audio/g7291": {
	source: "iana"
},
	"audio/g729d": {
	source: "iana"
},
	"audio/g729e": {
	source: "iana"
},
	"audio/gsm": {
	source: "iana"
},
	"audio/gsm-efr": {
	source: "iana"
},
	"audio/gsm-hr-08": {
	source: "iana"
},
	"audio/ilbc": {
	source: "iana"
},
	"audio/ip-mr_v2.5": {
	source: "iana"
},
	"audio/isac": {
	source: "apache"
},
	"audio/l16": {
	source: "iana"
},
	"audio/l20": {
	source: "iana"
},
	"audio/l24": {
	source: "iana",
	compressible: false
},
	"audio/l8": {
	source: "iana"
},
	"audio/lpc": {
	source: "iana"
},
	"audio/matroska": {
	source: "iana"
},
	"audio/melp": {
	source: "iana"
},
	"audio/melp1200": {
	source: "iana"
},
	"audio/melp2400": {
	source: "iana"
},
	"audio/melp600": {
	source: "iana"
},
	"audio/mhas": {
	source: "iana"
},
	"audio/midi": {
	source: "apache",
	extensions: [
		"mid",
		"midi",
		"kar",
		"rmi"
	]
},
	"audio/midi-clip": {
	source: "iana"
},
	"audio/mobile-xmf": {
	source: "iana",
	extensions: [
		"mxmf"
	]
},
	"audio/mp3": {
	compressible: false,
	extensions: [
		"mp3"
	]
},
	"audio/mp4": {
	source: "iana",
	compressible: false,
	extensions: [
		"m4a",
		"mp4a",
		"m4b"
	]
},
	"audio/mp4a-latm": {
	source: "iana"
},
	"audio/mpa": {
	source: "iana"
},
	"audio/mpa-robust": {
	source: "iana"
},
	"audio/mpeg": {
	source: "iana",
	compressible: false,
	extensions: [
		"mpga",
		"mp2",
		"mp2a",
		"mp3",
		"m2a",
		"m3a"
	]
},
	"audio/mpeg4-generic": {
	source: "iana"
},
	"audio/musepack": {
	source: "apache"
},
	"audio/ogg": {
	source: "iana",
	compressible: false,
	extensions: [
		"oga",
		"ogg",
		"spx",
		"opus"
	]
},
	"audio/opus": {
	source: "iana"
},
	"audio/parityfec": {
	source: "iana"
},
	"audio/pcma": {
	source: "iana"
},
	"audio/pcma-wb": {
	source: "iana"
},
	"audio/pcmu": {
	source: "iana"
},
	"audio/pcmu-wb": {
	source: "iana"
},
	"audio/prs.sid": {
	source: "iana"
},
	"audio/qcelp": {
	source: "iana"
},
	"audio/raptorfec": {
	source: "iana"
},
	"audio/red": {
	source: "iana"
},
	"audio/rtp-enc-aescm128": {
	source: "iana"
},
	"audio/rtp-midi": {
	source: "iana"
},
	"audio/rtploopback": {
	source: "iana"
},
	"audio/rtx": {
	source: "iana"
},
	"audio/s3m": {
	source: "apache",
	extensions: [
		"s3m"
	]
},
	"audio/scip": {
	source: "iana"
},
	"audio/silk": {
	source: "apache",
	extensions: [
		"sil"
	]
},
	"audio/smv": {
	source: "iana"
},
	"audio/smv-qcp": {
	source: "iana"
},
	"audio/smv0": {
	source: "iana"
},
	"audio/sofa": {
	source: "iana"
},
	"audio/sp-midi": {
	source: "iana"
},
	"audio/speex": {
	source: "iana"
},
	"audio/t140c": {
	source: "iana"
},
	"audio/t38": {
	source: "iana"
},
	"audio/telephone-event": {
	source: "iana"
},
	"audio/tetra_acelp": {
	source: "iana"
},
	"audio/tetra_acelp_bb": {
	source: "iana"
},
	"audio/tone": {
	source: "iana"
},
	"audio/tsvcis": {
	source: "iana"
},
	"audio/uemclip": {
	source: "iana"
},
	"audio/ulpfec": {
	source: "iana"
},
	"audio/usac": {
	source: "iana"
},
	"audio/vdvi": {
	source: "iana"
},
	"audio/vmr-wb": {
	source: "iana"
},
	"audio/vnd.3gpp.iufp": {
	source: "iana"
},
	"audio/vnd.4sb": {
	source: "iana"
},
	"audio/vnd.audiokoz": {
	source: "iana"
},
	"audio/vnd.celp": {
	source: "iana"
},
	"audio/vnd.cisco.nse": {
	source: "iana"
},
	"audio/vnd.cmles.radio-events": {
	source: "iana"
},
	"audio/vnd.cns.anp1": {
	source: "iana"
},
	"audio/vnd.cns.inf1": {
	source: "iana"
},
	"audio/vnd.dece.audio": {
	source: "iana",
	extensions: [
		"uva",
		"uvva"
	]
},
	"audio/vnd.digital-winds": {
	source: "iana",
	extensions: [
		"eol"
	]
},
	"audio/vnd.dlna.adts": {
	source: "iana"
},
	"audio/vnd.dolby.heaac.1": {
	source: "iana"
},
	"audio/vnd.dolby.heaac.2": {
	source: "iana"
},
	"audio/vnd.dolby.mlp": {
	source: "iana"
},
	"audio/vnd.dolby.mps": {
	source: "iana"
},
	"audio/vnd.dolby.pl2": {
	source: "iana"
},
	"audio/vnd.dolby.pl2x": {
	source: "iana"
},
	"audio/vnd.dolby.pl2z": {
	source: "iana"
},
	"audio/vnd.dolby.pulse.1": {
	source: "iana"
},
	"audio/vnd.dra": {
	source: "iana",
	extensions: [
		"dra"
	]
},
	"audio/vnd.dts": {
	source: "iana",
	extensions: [
		"dts"
	]
},
	"audio/vnd.dts.hd": {
	source: "iana",
	extensions: [
		"dtshd"
	]
},
	"audio/vnd.dts.uhd": {
	source: "iana"
},
	"audio/vnd.dvb.file": {
	source: "iana"
},
	"audio/vnd.everad.plj": {
	source: "iana"
},
	"audio/vnd.hns.audio": {
	source: "iana"
},
	"audio/vnd.lucent.voice": {
	source: "iana",
	extensions: [
		"lvp"
	]
},
	"audio/vnd.ms-playready.media.pya": {
	source: "iana",
	extensions: [
		"pya"
	]
},
	"audio/vnd.nokia.mobile-xmf": {
	source: "iana"
},
	"audio/vnd.nortel.vbk": {
	source: "iana"
},
	"audio/vnd.nuera.ecelp4800": {
	source: "iana",
	extensions: [
		"ecelp4800"
	]
},
	"audio/vnd.nuera.ecelp7470": {
	source: "iana",
	extensions: [
		"ecelp7470"
	]
},
	"audio/vnd.nuera.ecelp9600": {
	source: "iana",
	extensions: [
		"ecelp9600"
	]
},
	"audio/vnd.octel.sbc": {
	source: "iana"
},
	"audio/vnd.presonus.multitrack": {
	source: "iana"
},
	"audio/vnd.qcelp": {
	source: "apache"
},
	"audio/vnd.rhetorex.32kadpcm": {
	source: "iana"
},
	"audio/vnd.rip": {
	source: "iana",
	extensions: [
		"rip"
	]
},
	"audio/vnd.rn-realaudio": {
	compressible: false
},
	"audio/vnd.sealedmedia.softseal.mpeg": {
	source: "iana"
},
	"audio/vnd.vmx.cvsd": {
	source: "iana"
},
	"audio/vnd.wave": {
	compressible: false
},
	"audio/vorbis": {
	source: "iana",
	compressible: false
},
	"audio/vorbis-config": {
	source: "iana"
},
	"audio/wav": {
	compressible: false,
	extensions: [
		"wav"
	]
},
	"audio/wave": {
	compressible: false,
	extensions: [
		"wav"
	]
},
	"audio/webm": {
	source: "apache",
	compressible: false,
	extensions: [
		"weba"
	]
},
	"audio/x-aac": {
	source: "apache",
	compressible: false,
	extensions: [
		"aac"
	]
},
	"audio/x-aiff": {
	source: "apache",
	extensions: [
		"aif",
		"aiff",
		"aifc"
	]
},
	"audio/x-caf": {
	source: "apache",
	compressible: false,
	extensions: [
		"caf"
	]
},
	"audio/x-flac": {
	source: "apache",
	extensions: [
		"flac"
	]
},
	"audio/x-m4a": {
	source: "nginx",
	extensions: [
		"m4a"
	]
},
	"audio/x-matroska": {
	source: "apache",
	extensions: [
		"mka"
	]
},
	"audio/x-mpegurl": {
	source: "apache",
	extensions: [
		"m3u"
	]
},
	"audio/x-ms-wax": {
	source: "apache",
	extensions: [
		"wax"
	]
},
	"audio/x-ms-wma": {
	source: "apache",
	extensions: [
		"wma"
	]
},
	"audio/x-pn-realaudio": {
	source: "apache",
	extensions: [
		"ram",
		"ra"
	]
},
	"audio/x-pn-realaudio-plugin": {
	source: "apache",
	extensions: [
		"rmp"
	]
},
	"audio/x-realaudio": {
	source: "nginx",
	extensions: [
		"ra"
	]
},
	"audio/x-tta": {
	source: "apache"
},
	"audio/x-wav": {
	source: "apache",
	extensions: [
		"wav"
	]
},
	"audio/xm": {
	source: "apache",
	extensions: [
		"xm"
	]
},
	"chemical/x-cdx": {
	source: "apache",
	extensions: [
		"cdx"
	]
},
	"chemical/x-cif": {
	source: "apache",
	extensions: [
		"cif"
	]
},
	"chemical/x-cmdf": {
	source: "apache",
	extensions: [
		"cmdf"
	]
},
	"chemical/x-cml": {
	source: "apache",
	extensions: [
		"cml"
	]
},
	"chemical/x-csml": {
	source: "apache",
	extensions: [
		"csml"
	]
},
	"chemical/x-pdb": {
	source: "apache"
},
	"chemical/x-xyz": {
	source: "apache",
	extensions: [
		"xyz"
	]
},
	"font/collection": {
	source: "iana",
	extensions: [
		"ttc"
	]
},
	"font/otf": {
	source: "iana",
	compressible: true,
	extensions: [
		"otf"
	]
},
	"font/sfnt": {
	source: "iana"
},
	"font/ttf": {
	source: "iana",
	compressible: true,
	extensions: [
		"ttf"
	]
},
	"font/woff": {
	source: "iana",
	extensions: [
		"woff"
	]
},
	"font/woff2": {
	source: "iana",
	extensions: [
		"woff2"
	]
},
	"image/aces": {
	source: "iana",
	extensions: [
		"exr"
	]
},
	"image/apng": {
	source: "iana",
	compressible: false,
	extensions: [
		"apng"
	]
},
	"image/avci": {
	source: "iana",
	extensions: [
		"avci"
	]
},
	"image/avcs": {
	source: "iana",
	extensions: [
		"avcs"
	]
},
	"image/avif": {
	source: "iana",
	compressible: false,
	extensions: [
		"avif"
	]
},
	"image/bmp": {
	source: "iana",
	compressible: true,
	extensions: [
		"bmp",
		"dib"
	]
},
	"image/cgm": {
	source: "iana",
	extensions: [
		"cgm"
	]
},
	"image/dicom-rle": {
	source: "iana",
	extensions: [
		"drle"
	]
},
	"image/dpx": {
	source: "iana",
	extensions: [
		"dpx"
	]
},
	"image/emf": {
	source: "iana",
	extensions: [
		"emf"
	]
},
	"image/fits": {
	source: "iana",
	extensions: [
		"fits"
	]
},
	"image/g3fax": {
	source: "iana",
	extensions: [
		"g3"
	]
},
	"image/gif": {
	source: "iana",
	compressible: false,
	extensions: [
		"gif"
	]
},
	"image/heic": {
	source: "iana",
	extensions: [
		"heic"
	]
},
	"image/heic-sequence": {
	source: "iana",
	extensions: [
		"heics"
	]
},
	"image/heif": {
	source: "iana",
	extensions: [
		"heif"
	]
},
	"image/heif-sequence": {
	source: "iana",
	extensions: [
		"heifs"
	]
},
	"image/hej2k": {
	source: "iana",
	extensions: [
		"hej2"
	]
},
	"image/ief": {
	source: "iana",
	extensions: [
		"ief"
	]
},
	"image/j2c": {
	source: "iana"
},
	"image/jaii": {
	source: "iana",
	extensions: [
		"jaii"
	]
},
	"image/jais": {
	source: "iana",
	extensions: [
		"jais"
	]
},
	"image/jls": {
	source: "iana",
	extensions: [
		"jls"
	]
},
	"image/jp2": {
	source: "iana",
	compressible: false,
	extensions: [
		"jp2",
		"jpg2"
	]
},
	"image/jpeg": {
	source: "iana",
	compressible: false,
	extensions: [
		"jpg",
		"jpeg",
		"jpe"
	]
},
	"image/jph": {
	source: "iana",
	extensions: [
		"jph"
	]
},
	"image/jphc": {
	source: "iana",
	extensions: [
		"jhc"
	]
},
	"image/jpm": {
	source: "iana",
	compressible: false,
	extensions: [
		"jpm",
		"jpgm"
	]
},
	"image/jpx": {
	source: "iana",
	compressible: false,
	extensions: [
		"jpx",
		"jpf"
	]
},
	"image/jxl": {
	source: "iana",
	extensions: [
		"jxl"
	]
},
	"image/jxr": {
	source: "iana",
	extensions: [
		"jxr"
	]
},
	"image/jxra": {
	source: "iana",
	extensions: [
		"jxra"
	]
},
	"image/jxrs": {
	source: "iana",
	extensions: [
		"jxrs"
	]
},
	"image/jxs": {
	source: "iana",
	extensions: [
		"jxs"
	]
},
	"image/jxsc": {
	source: "iana",
	extensions: [
		"jxsc"
	]
},
	"image/jxsi": {
	source: "iana",
	extensions: [
		"jxsi"
	]
},
	"image/jxss": {
	source: "iana",
	extensions: [
		"jxss"
	]
},
	"image/ktx": {
	source: "iana",
	extensions: [
		"ktx"
	]
},
	"image/ktx2": {
	source: "iana",
	extensions: [
		"ktx2"
	]
},
	"image/naplps": {
	source: "iana"
},
	"image/pjpeg": {
	compressible: false,
	extensions: [
		"jfif"
	]
},
	"image/png": {
	source: "iana",
	compressible: false,
	extensions: [
		"png"
	]
},
	"image/prs.btif": {
	source: "iana",
	extensions: [
		"btif",
		"btf"
	]
},
	"image/prs.pti": {
	source: "iana",
	extensions: [
		"pti"
	]
},
	"image/pwg-raster": {
	source: "iana"
},
	"image/sgi": {
	source: "apache",
	extensions: [
		"sgi"
	]
},
	"image/svg+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"svg",
		"svgz"
	]
},
	"image/t38": {
	source: "iana",
	extensions: [
		"t38"
	]
},
	"image/tiff": {
	source: "iana",
	compressible: false,
	extensions: [
		"tif",
		"tiff"
	]
},
	"image/tiff-fx": {
	source: "iana",
	extensions: [
		"tfx"
	]
},
	"image/vnd.adobe.photoshop": {
	source: "iana",
	compressible: true,
	extensions: [
		"psd"
	]
},
	"image/vnd.airzip.accelerator.azv": {
	source: "iana",
	extensions: [
		"azv"
	]
},
	"image/vnd.clip": {
	source: "iana"
},
	"image/vnd.cns.inf2": {
	source: "iana"
},
	"image/vnd.dece.graphic": {
	source: "iana",
	extensions: [
		"uvi",
		"uvvi",
		"uvg",
		"uvvg"
	]
},
	"image/vnd.djvu": {
	source: "iana",
	extensions: [
		"djvu",
		"djv"
	]
},
	"image/vnd.dvb.subtitle": {
	source: "iana",
	extensions: [
		"sub"
	]
},
	"image/vnd.dwg": {
	source: "iana",
	extensions: [
		"dwg"
	]
},
	"image/vnd.dxf": {
	source: "iana",
	extensions: [
		"dxf"
	]
},
	"image/vnd.fastbidsheet": {
	source: "iana",
	extensions: [
		"fbs"
	]
},
	"image/vnd.fpx": {
	source: "iana",
	extensions: [
		"fpx"
	]
},
	"image/vnd.fst": {
	source: "iana",
	extensions: [
		"fst"
	]
},
	"image/vnd.fujixerox.edmics-mmr": {
	source: "iana",
	extensions: [
		"mmr"
	]
},
	"image/vnd.fujixerox.edmics-rlc": {
	source: "iana",
	extensions: [
		"rlc"
	]
},
	"image/vnd.globalgraphics.pgb": {
	source: "iana"
},
	"image/vnd.microsoft.icon": {
	source: "iana",
	compressible: true,
	extensions: [
		"ico"
	]
},
	"image/vnd.mix": {
	source: "iana"
},
	"image/vnd.mozilla.apng": {
	source: "iana"
},
	"image/vnd.ms-dds": {
	compressible: true,
	extensions: [
		"dds"
	]
},
	"image/vnd.ms-modi": {
	source: "iana",
	extensions: [
		"mdi"
	]
},
	"image/vnd.ms-photo": {
	source: "apache",
	extensions: [
		"wdp"
	]
},
	"image/vnd.net-fpx": {
	source: "iana",
	extensions: [
		"npx"
	]
},
	"image/vnd.pco.b16": {
	source: "iana",
	extensions: [
		"b16"
	]
},
	"image/vnd.radiance": {
	source: "iana"
},
	"image/vnd.sealed.png": {
	source: "iana"
},
	"image/vnd.sealedmedia.softseal.gif": {
	source: "iana"
},
	"image/vnd.sealedmedia.softseal.jpg": {
	source: "iana"
},
	"image/vnd.svf": {
	source: "iana"
},
	"image/vnd.tencent.tap": {
	source: "iana",
	extensions: [
		"tap"
	]
},
	"image/vnd.valve.source.texture": {
	source: "iana",
	extensions: [
		"vtf"
	]
},
	"image/vnd.wap.wbmp": {
	source: "iana",
	extensions: [
		"wbmp"
	]
},
	"image/vnd.xiff": {
	source: "iana",
	extensions: [
		"xif"
	]
},
	"image/vnd.zbrush.pcx": {
	source: "iana",
	extensions: [
		"pcx"
	]
},
	"image/webp": {
	source: "iana",
	extensions: [
		"webp"
	]
},
	"image/wmf": {
	source: "iana",
	extensions: [
		"wmf"
	]
},
	"image/x-3ds": {
	source: "apache",
	extensions: [
		"3ds"
	]
},
	"image/x-adobe-dng": {
	extensions: [
		"dng"
	]
},
	"image/x-cmu-raster": {
	source: "apache",
	extensions: [
		"ras"
	]
},
	"image/x-cmx": {
	source: "apache",
	extensions: [
		"cmx"
	]
},
	"image/x-emf": {
	source: "iana"
},
	"image/x-freehand": {
	source: "apache",
	extensions: [
		"fh",
		"fhc",
		"fh4",
		"fh5",
		"fh7"
	]
},
	"image/x-icon": {
	source: "apache",
	compressible: true,
	extensions: [
		"ico"
	]
},
	"image/x-jng": {
	source: "nginx",
	extensions: [
		"jng"
	]
},
	"image/x-mrsid-image": {
	source: "apache",
	extensions: [
		"sid"
	]
},
	"image/x-ms-bmp": {
	source: "nginx",
	compressible: true,
	extensions: [
		"bmp"
	]
},
	"image/x-pcx": {
	source: "apache",
	extensions: [
		"pcx"
	]
},
	"image/x-pict": {
	source: "apache",
	extensions: [
		"pic",
		"pct"
	]
},
	"image/x-portable-anymap": {
	source: "apache",
	extensions: [
		"pnm"
	]
},
	"image/x-portable-bitmap": {
	source: "apache",
	extensions: [
		"pbm"
	]
},
	"image/x-portable-graymap": {
	source: "apache",
	extensions: [
		"pgm"
	]
},
	"image/x-portable-pixmap": {
	source: "apache",
	extensions: [
		"ppm"
	]
},
	"image/x-rgb": {
	source: "apache",
	extensions: [
		"rgb"
	]
},
	"image/x-tga": {
	source: "apache",
	extensions: [
		"tga"
	]
},
	"image/x-wmf": {
	source: "iana"
},
	"image/x-xbitmap": {
	source: "apache",
	extensions: [
		"xbm"
	]
},
	"image/x-xcf": {
	compressible: false
},
	"image/x-xpixmap": {
	source: "apache",
	extensions: [
		"xpm"
	]
},
	"image/x-xwindowdump": {
	source: "apache",
	extensions: [
		"xwd"
	]
},
	"message/bhttp": {
	source: "iana"
},
	"message/cpim": {
	source: "iana"
},
	"message/delivery-status": {
	source: "iana"
},
	"message/disposition-notification": {
	source: "iana",
	extensions: [
		"disposition-notification"
	]
},
	"message/external-body": {
	source: "iana"
},
	"message/feedback-report": {
	source: "iana"
},
	"message/global": {
	source: "iana",
	extensions: [
		"u8msg"
	]
},
	"message/global-delivery-status": {
	source: "iana",
	extensions: [
		"u8dsn"
	]
},
	"message/global-disposition-notification": {
	source: "iana",
	extensions: [
		"u8mdn"
	]
},
	"message/global-headers": {
	source: "iana",
	extensions: [
		"u8hdr"
	]
},
	"message/http": {
	source: "iana",
	compressible: false
},
	"message/imdn+xml": {
	source: "iana",
	compressible: true
},
	"message/mls": {
	source: "iana"
},
	"message/news": {
	source: "apache"
},
	"message/ohttp-req": {
	source: "iana"
},
	"message/ohttp-res": {
	source: "iana"
},
	"message/partial": {
	source: "iana",
	compressible: false
},
	"message/rfc822": {
	source: "iana",
	compressible: true,
	extensions: [
		"eml",
		"mime",
		"mht",
		"mhtml"
	]
},
	"message/s-http": {
	source: "apache"
},
	"message/sip": {
	source: "iana"
},
	"message/sipfrag": {
	source: "iana"
},
	"message/tracking-status": {
	source: "iana"
},
	"message/vnd.si.simp": {
	source: "apache"
},
	"message/vnd.wfa.wsc": {
	source: "iana",
	extensions: [
		"wsc"
	]
},
	"model/3mf": {
	source: "iana",
	extensions: [
		"3mf"
	]
},
	"model/e57": {
	source: "iana"
},
	"model/gltf+json": {
	source: "iana",
	compressible: true,
	extensions: [
		"gltf"
	]
},
	"model/gltf-binary": {
	source: "iana",
	compressible: true,
	extensions: [
		"glb"
	]
},
	"model/iges": {
	source: "iana",
	compressible: false,
	extensions: [
		"igs",
		"iges"
	]
},
	"model/jt": {
	source: "iana",
	extensions: [
		"jt"
	]
},
	"model/mesh": {
	source: "iana",
	compressible: false,
	extensions: [
		"msh",
		"mesh",
		"silo"
	]
},
	"model/mtl": {
	source: "iana",
	extensions: [
		"mtl"
	]
},
	"model/obj": {
	source: "iana",
	extensions: [
		"obj"
	]
},
	"model/prc": {
	source: "iana",
	extensions: [
		"prc"
	]
},
	"model/step": {
	source: "iana",
	extensions: [
		"step",
		"stp",
		"stpnc",
		"p21",
		"210"
	]
},
	"model/step+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"stpx"
	]
},
	"model/step+zip": {
	source: "iana",
	compressible: false,
	extensions: [
		"stpz"
	]
},
	"model/step-xml+zip": {
	source: "iana",
	compressible: false,
	extensions: [
		"stpxz"
	]
},
	"model/stl": {
	source: "iana",
	extensions: [
		"stl"
	]
},
	"model/u3d": {
	source: "iana",
	extensions: [
		"u3d"
	]
},
	"model/vnd.bary": {
	source: "iana",
	extensions: [
		"bary"
	]
},
	"model/vnd.cld": {
	source: "iana",
	extensions: [
		"cld"
	]
},
	"model/vnd.collada+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"dae"
	]
},
	"model/vnd.dwf": {
	source: "iana",
	extensions: [
		"dwf"
	]
},
	"model/vnd.flatland.3dml": {
	source: "iana"
},
	"model/vnd.gdl": {
	source: "iana",
	extensions: [
		"gdl"
	]
},
	"model/vnd.gs-gdl": {
	source: "apache"
},
	"model/vnd.gs.gdl": {
	source: "iana"
},
	"model/vnd.gtw": {
	source: "iana",
	extensions: [
		"gtw"
	]
},
	"model/vnd.moml+xml": {
	source: "iana",
	compressible: true
},
	"model/vnd.mts": {
	source: "iana",
	extensions: [
		"mts"
	]
},
	"model/vnd.opengex": {
	source: "iana",
	extensions: [
		"ogex"
	]
},
	"model/vnd.parasolid.transmit.binary": {
	source: "iana",
	extensions: [
		"x_b"
	]
},
	"model/vnd.parasolid.transmit.text": {
	source: "iana",
	extensions: [
		"x_t"
	]
},
	"model/vnd.pytha.pyox": {
	source: "iana",
	extensions: [
		"pyo",
		"pyox"
	]
},
	"model/vnd.rosette.annotated-data-model": {
	source: "iana"
},
	"model/vnd.sap.vds": {
	source: "iana",
	extensions: [
		"vds"
	]
},
	"model/vnd.usda": {
	source: "iana",
	extensions: [
		"usda"
	]
},
	"model/vnd.usdz+zip": {
	source: "iana",
	compressible: false,
	extensions: [
		"usdz"
	]
},
	"model/vnd.valve.source.compiled-map": {
	source: "iana",
	extensions: [
		"bsp"
	]
},
	"model/vnd.vtu": {
	source: "iana",
	extensions: [
		"vtu"
	]
},
	"model/vrml": {
	source: "iana",
	compressible: false,
	extensions: [
		"wrl",
		"vrml"
	]
},
	"model/x3d+binary": {
	source: "apache",
	compressible: false,
	extensions: [
		"x3db",
		"x3dbz"
	]
},
	"model/x3d+fastinfoset": {
	source: "iana",
	extensions: [
		"x3db"
	]
},
	"model/x3d+vrml": {
	source: "apache",
	compressible: false,
	extensions: [
		"x3dv",
		"x3dvz"
	]
},
	"model/x3d+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"x3d",
		"x3dz"
	]
},
	"model/x3d-vrml": {
	source: "iana",
	extensions: [
		"x3dv"
	]
},
	"multipart/alternative": {
	source: "iana",
	compressible: false
},
	"multipart/appledouble": {
	source: "iana"
},
	"multipart/byteranges": {
	source: "iana"
},
	"multipart/digest": {
	source: "iana"
},
	"multipart/encrypted": {
	source: "iana",
	compressible: false
},
	"multipart/form-data": {
	source: "iana",
	compressible: false
},
	"multipart/header-set": {
	source: "iana"
},
	"multipart/mixed": {
	source: "iana"
},
	"multipart/multilingual": {
	source: "iana"
},
	"multipart/parallel": {
	source: "iana"
},
	"multipart/related": {
	source: "iana",
	compressible: false
},
	"multipart/report": {
	source: "iana"
},
	"multipart/signed": {
	source: "iana",
	compressible: false
},
	"multipart/vnd.bint.med-plus": {
	source: "iana"
},
	"multipart/voice-message": {
	source: "iana"
},
	"multipart/x-mixed-replace": {
	source: "iana"
},
	"text/1d-interleaved-parityfec": {
	source: "iana"
},
	"text/cache-manifest": {
	source: "iana",
	compressible: true,
	extensions: [
		"appcache",
		"manifest"
	]
},
	"text/calendar": {
	source: "iana",
	extensions: [
		"ics",
		"ifb"
	]
},
	"text/calender": {
	compressible: true
},
	"text/cmd": {
	compressible: true
},
	"text/coffeescript": {
	extensions: [
		"coffee",
		"litcoffee"
	]
},
	"text/cql": {
	source: "iana"
},
	"text/cql-expression": {
	source: "iana"
},
	"text/cql-identifier": {
	source: "iana"
},
	"text/css": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"css"
	]
},
	"text/csv": {
	source: "iana",
	compressible: true,
	extensions: [
		"csv"
	]
},
	"text/csv-schema": {
	source: "iana"
},
	"text/directory": {
	source: "iana"
},
	"text/dns": {
	source: "iana"
},
	"text/ecmascript": {
	source: "apache"
},
	"text/encaprtp": {
	source: "iana"
},
	"text/enriched": {
	source: "iana"
},
	"text/fhirpath": {
	source: "iana"
},
	"text/flexfec": {
	source: "iana"
},
	"text/fwdred": {
	source: "iana"
},
	"text/gff3": {
	source: "iana"
},
	"text/grammar-ref-list": {
	source: "iana"
},
	"text/hl7v2": {
	source: "iana"
},
	"text/html": {
	source: "iana",
	compressible: true,
	extensions: [
		"html",
		"htm",
		"shtml"
	]
},
	"text/jade": {
	extensions: [
		"jade"
	]
},
	"text/javascript": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"js",
		"mjs"
	]
},
	"text/jcr-cnd": {
	source: "iana"
},
	"text/jsx": {
	compressible: true,
	extensions: [
		"jsx"
	]
},
	"text/less": {
	compressible: true,
	extensions: [
		"less"
	]
},
	"text/markdown": {
	source: "iana",
	compressible: true,
	extensions: [
		"md",
		"markdown"
	]
},
	"text/mathml": {
	source: "nginx",
	extensions: [
		"mml"
	]
},
	"text/mdx": {
	compressible: true,
	extensions: [
		"mdx"
	]
},
	"text/mizar": {
	source: "iana"
},
	"text/n3": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"n3"
	]
},
	"text/parameters": {
	source: "iana",
	charset: "UTF-8"
},
	"text/parityfec": {
	source: "iana"
},
	"text/plain": {
	source: "iana",
	compressible: true,
	extensions: [
		"txt",
		"text",
		"conf",
		"def",
		"list",
		"log",
		"in",
		"ini"
	]
},
	"text/provenance-notation": {
	source: "iana",
	charset: "UTF-8"
},
	"text/prs.fallenstein.rst": {
	source: "iana"
},
	"text/prs.lines.tag": {
	source: "iana",
	extensions: [
		"dsc"
	]
},
	"text/prs.prop.logic": {
	source: "iana"
},
	"text/prs.texi": {
	source: "iana"
},
	"text/raptorfec": {
	source: "iana"
},
	"text/red": {
	source: "iana"
},
	"text/rfc822-headers": {
	source: "iana"
},
	"text/richtext": {
	source: "iana",
	compressible: true,
	extensions: [
		"rtx"
	]
},
	"text/rtf": {
	source: "iana",
	compressible: true,
	extensions: [
		"rtf"
	]
},
	"text/rtp-enc-aescm128": {
	source: "iana"
},
	"text/rtploopback": {
	source: "iana"
},
	"text/rtx": {
	source: "iana"
},
	"text/sgml": {
	source: "iana",
	extensions: [
		"sgml",
		"sgm"
	]
},
	"text/shaclc": {
	source: "iana"
},
	"text/shex": {
	source: "iana",
	extensions: [
		"shex"
	]
},
	"text/slim": {
	extensions: [
		"slim",
		"slm"
	]
},
	"text/spdx": {
	source: "iana",
	extensions: [
		"spdx"
	]
},
	"text/strings": {
	source: "iana"
},
	"text/stylus": {
	extensions: [
		"stylus",
		"styl"
	]
},
	"text/t140": {
	source: "iana"
},
	"text/tab-separated-values": {
	source: "iana",
	compressible: true,
	extensions: [
		"tsv"
	]
},
	"text/troff": {
	source: "iana",
	extensions: [
		"t",
		"tr",
		"roff",
		"man",
		"me",
		"ms"
	]
},
	"text/turtle": {
	source: "iana",
	charset: "UTF-8",
	extensions: [
		"ttl"
	]
},
	"text/ulpfec": {
	source: "iana"
},
	"text/uri-list": {
	source: "iana",
	compressible: true,
	extensions: [
		"uri",
		"uris",
		"urls"
	]
},
	"text/vcard": {
	source: "iana",
	compressible: true,
	extensions: [
		"vcard"
	]
},
	"text/vnd.a": {
	source: "iana"
},
	"text/vnd.abc": {
	source: "iana"
},
	"text/vnd.ascii-art": {
	source: "iana"
},
	"text/vnd.curl": {
	source: "iana",
	extensions: [
		"curl"
	]
},
	"text/vnd.curl.dcurl": {
	source: "apache",
	extensions: [
		"dcurl"
	]
},
	"text/vnd.curl.mcurl": {
	source: "apache",
	extensions: [
		"mcurl"
	]
},
	"text/vnd.curl.scurl": {
	source: "apache",
	extensions: [
		"scurl"
	]
},
	"text/vnd.debian.copyright": {
	source: "iana",
	charset: "UTF-8"
},
	"text/vnd.dmclientscript": {
	source: "iana"
},
	"text/vnd.dvb.subtitle": {
	source: "iana",
	extensions: [
		"sub"
	]
},
	"text/vnd.esmertec.theme-descriptor": {
	source: "iana",
	charset: "UTF-8"
},
	"text/vnd.exchangeable": {
	source: "iana"
},
	"text/vnd.familysearch.gedcom": {
	source: "iana",
	extensions: [
		"ged"
	]
},
	"text/vnd.ficlab.flt": {
	source: "iana"
},
	"text/vnd.fly": {
	source: "iana",
	extensions: [
		"fly"
	]
},
	"text/vnd.fmi.flexstor": {
	source: "iana",
	extensions: [
		"flx"
	]
},
	"text/vnd.gml": {
	source: "iana"
},
	"text/vnd.graphviz": {
	source: "iana",
	extensions: [
		"gv"
	]
},
	"text/vnd.hans": {
	source: "iana"
},
	"text/vnd.hgl": {
	source: "iana"
},
	"text/vnd.in3d.3dml": {
	source: "iana",
	extensions: [
		"3dml"
	]
},
	"text/vnd.in3d.spot": {
	source: "iana",
	extensions: [
		"spot"
	]
},
	"text/vnd.iptc.newsml": {
	source: "iana"
},
	"text/vnd.iptc.nitf": {
	source: "iana"
},
	"text/vnd.latex-z": {
	source: "iana"
},
	"text/vnd.motorola.reflex": {
	source: "iana"
},
	"text/vnd.ms-mediapackage": {
	source: "iana"
},
	"text/vnd.net2phone.commcenter.command": {
	source: "iana"
},
	"text/vnd.radisys.msml-basic-layout": {
	source: "iana"
},
	"text/vnd.senx.warpscript": {
	source: "iana"
},
	"text/vnd.si.uricatalogue": {
	source: "apache"
},
	"text/vnd.sosi": {
	source: "iana"
},
	"text/vnd.sun.j2me.app-descriptor": {
	source: "iana",
	charset: "UTF-8",
	extensions: [
		"jad"
	]
},
	"text/vnd.trolltech.linguist": {
	source: "iana",
	charset: "UTF-8"
},
	"text/vnd.vcf": {
	source: "iana"
},
	"text/vnd.wap.si": {
	source: "iana"
},
	"text/vnd.wap.sl": {
	source: "iana"
},
	"text/vnd.wap.wml": {
	source: "iana",
	extensions: [
		"wml"
	]
},
	"text/vnd.wap.wmlscript": {
	source: "iana",
	extensions: [
		"wmls"
	]
},
	"text/vnd.zoo.kcl": {
	source: "iana"
},
	"text/vtt": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"vtt"
	]
},
	"text/wgsl": {
	source: "iana",
	extensions: [
		"wgsl"
	]
},
	"text/x-asm": {
	source: "apache",
	extensions: [
		"s",
		"asm"
	]
},
	"text/x-c": {
	source: "apache",
	extensions: [
		"c",
		"cc",
		"cxx",
		"cpp",
		"h",
		"hh",
		"dic"
	]
},
	"text/x-component": {
	source: "nginx",
	extensions: [
		"htc"
	]
},
	"text/x-fortran": {
	source: "apache",
	extensions: [
		"f",
		"for",
		"f77",
		"f90"
	]
},
	"text/x-gwt-rpc": {
	compressible: true
},
	"text/x-handlebars-template": {
	extensions: [
		"hbs"
	]
},
	"text/x-java-source": {
	source: "apache",
	extensions: [
		"java"
	]
},
	"text/x-jquery-tmpl": {
	compressible: true
},
	"text/x-lua": {
	extensions: [
		"lua"
	]
},
	"text/x-markdown": {
	compressible: true,
	extensions: [
		"mkd"
	]
},
	"text/x-nfo": {
	source: "apache",
	extensions: [
		"nfo"
	]
},
	"text/x-opml": {
	source: "apache",
	extensions: [
		"opml"
	]
},
	"text/x-org": {
	compressible: true,
	extensions: [
		"org"
	]
},
	"text/x-pascal": {
	source: "apache",
	extensions: [
		"p",
		"pas"
	]
},
	"text/x-processing": {
	compressible: true,
	extensions: [
		"pde"
	]
},
	"text/x-sass": {
	extensions: [
		"sass"
	]
},
	"text/x-scss": {
	extensions: [
		"scss"
	]
},
	"text/x-setext": {
	source: "apache",
	extensions: [
		"etx"
	]
},
	"text/x-sfv": {
	source: "apache",
	extensions: [
		"sfv"
	]
},
	"text/x-suse-ymp": {
	compressible: true,
	extensions: [
		"ymp"
	]
},
	"text/x-uuencode": {
	source: "apache",
	extensions: [
		"uu"
	]
},
	"text/x-vcalendar": {
	source: "apache",
	extensions: [
		"vcs"
	]
},
	"text/x-vcard": {
	source: "apache",
	extensions: [
		"vcf"
	]
},
	"text/xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xml"
	]
},
	"text/xml-external-parsed-entity": {
	source: "iana"
},
	"text/yaml": {
	compressible: true,
	extensions: [
		"yaml",
		"yml"
	]
},
	"video/1d-interleaved-parityfec": {
	source: "iana"
},
	"video/3gpp": {
	source: "iana",
	extensions: [
		"3gp",
		"3gpp"
	]
},
	"video/3gpp-tt": {
	source: "iana"
},
	"video/3gpp2": {
	source: "iana",
	extensions: [
		"3g2"
	]
},
	"video/av1": {
	source: "iana"
},
	"video/bmpeg": {
	source: "iana"
},
	"video/bt656": {
	source: "iana"
},
	"video/celb": {
	source: "iana"
},
	"video/dv": {
	source: "iana"
},
	"video/encaprtp": {
	source: "iana"
},
	"video/evc": {
	source: "iana"
},
	"video/ffv1": {
	source: "iana"
},
	"video/flexfec": {
	source: "iana"
},
	"video/h261": {
	source: "iana",
	extensions: [
		"h261"
	]
},
	"video/h263": {
	source: "iana",
	extensions: [
		"h263"
	]
},
	"video/h263-1998": {
	source: "iana"
},
	"video/h263-2000": {
	source: "iana"
},
	"video/h264": {
	source: "iana",
	extensions: [
		"h264"
	]
},
	"video/h264-rcdo": {
	source: "iana"
},
	"video/h264-svc": {
	source: "iana"
},
	"video/h265": {
	source: "iana"
},
	"video/h266": {
	source: "iana"
},
	"video/iso.segment": {
	source: "iana",
	extensions: [
		"m4s"
	]
},
	"video/jpeg": {
	source: "iana",
	extensions: [
		"jpgv"
	]
},
	"video/jpeg2000": {
	source: "iana"
},
	"video/jpm": {
	source: "apache",
	extensions: [
		"jpm",
		"jpgm"
	]
},
	"video/jxsv": {
	source: "iana"
},
	"video/lottie+json": {
	source: "iana",
	compressible: true
},
	"video/matroska": {
	source: "iana"
},
	"video/matroska-3d": {
	source: "iana"
},
	"video/mj2": {
	source: "iana",
	extensions: [
		"mj2",
		"mjp2"
	]
},
	"video/mp1s": {
	source: "iana"
},
	"video/mp2p": {
	source: "iana"
},
	"video/mp2t": {
	source: "iana",
	extensions: [
		"ts",
		"m2t",
		"m2ts",
		"mts"
	]
},
	"video/mp4": {
	source: "iana",
	compressible: false,
	extensions: [
		"mp4",
		"mp4v",
		"mpg4"
	]
},
	"video/mp4v-es": {
	source: "iana"
},
	"video/mpeg": {
	source: "iana",
	compressible: false,
	extensions: [
		"mpeg",
		"mpg",
		"mpe",
		"m1v",
		"m2v"
	]
},
	"video/mpeg4-generic": {
	source: "iana"
},
	"video/mpv": {
	source: "iana"
},
	"video/nv": {
	source: "iana"
},
	"video/ogg": {
	source: "iana",
	compressible: false,
	extensions: [
		"ogv"
	]
},
	"video/parityfec": {
	source: "iana"
},
	"video/pointer": {
	source: "iana"
},
	"video/quicktime": {
	source: "iana",
	compressible: false,
	extensions: [
		"qt",
		"mov"
	]
},
	"video/raptorfec": {
	source: "iana"
},
	"video/raw": {
	source: "iana"
},
	"video/rtp-enc-aescm128": {
	source: "iana"
},
	"video/rtploopback": {
	source: "iana"
},
	"video/rtx": {
	source: "iana"
},
	"video/scip": {
	source: "iana"
},
	"video/smpte291": {
	source: "iana"
},
	"video/smpte292m": {
	source: "iana"
},
	"video/ulpfec": {
	source: "iana"
},
	"video/vc1": {
	source: "iana"
},
	"video/vc2": {
	source: "iana"
},
	"video/vnd.cctv": {
	source: "iana"
},
	"video/vnd.dece.hd": {
	source: "iana",
	extensions: [
		"uvh",
		"uvvh"
	]
},
	"video/vnd.dece.mobile": {
	source: "iana",
	extensions: [
		"uvm",
		"uvvm"
	]
},
	"video/vnd.dece.mp4": {
	source: "iana"
},
	"video/vnd.dece.pd": {
	source: "iana",
	extensions: [
		"uvp",
		"uvvp"
	]
},
	"video/vnd.dece.sd": {
	source: "iana",
	extensions: [
		"uvs",
		"uvvs"
	]
},
	"video/vnd.dece.video": {
	source: "iana",
	extensions: [
		"uvv",
		"uvvv"
	]
},
	"video/vnd.directv.mpeg": {
	source: "iana"
},
	"video/vnd.directv.mpeg-tts": {
	source: "iana"
},
	"video/vnd.dlna.mpeg-tts": {
	source: "iana"
},
	"video/vnd.dvb.file": {
	source: "iana",
	extensions: [
		"dvb"
	]
},
	"video/vnd.fvt": {
	source: "iana",
	extensions: [
		"fvt"
	]
},
	"video/vnd.hns.video": {
	source: "iana"
},
	"video/vnd.iptvforum.1dparityfec-1010": {
	source: "iana"
},
	"video/vnd.iptvforum.1dparityfec-2005": {
	source: "iana"
},
	"video/vnd.iptvforum.2dparityfec-1010": {
	source: "iana"
},
	"video/vnd.iptvforum.2dparityfec-2005": {
	source: "iana"
},
	"video/vnd.iptvforum.ttsavc": {
	source: "iana"
},
	"video/vnd.iptvforum.ttsmpeg2": {
	source: "iana"
},
	"video/vnd.motorola.video": {
	source: "iana"
},
	"video/vnd.motorola.videop": {
	source: "iana"
},
	"video/vnd.mpegurl": {
	source: "iana",
	extensions: [
		"mxu",
		"m4u"
	]
},
	"video/vnd.ms-playready.media.pyv": {
	source: "iana",
	extensions: [
		"pyv"
	]
},
	"video/vnd.nokia.interleaved-multimedia": {
	source: "iana"
},
	"video/vnd.nokia.mp4vr": {
	source: "iana"
},
	"video/vnd.nokia.videovoip": {
	source: "iana"
},
	"video/vnd.objectvideo": {
	source: "iana"
},
	"video/vnd.planar": {
	source: "iana"
},
	"video/vnd.radgamettools.bink": {
	source: "iana"
},
	"video/vnd.radgamettools.smacker": {
	source: "apache"
},
	"video/vnd.sealed.mpeg1": {
	source: "iana"
},
	"video/vnd.sealed.mpeg4": {
	source: "iana"
},
	"video/vnd.sealed.swf": {
	source: "iana"
},
	"video/vnd.sealedmedia.softseal.mov": {
	source: "iana"
},
	"video/vnd.uvvu.mp4": {
	source: "iana",
	extensions: [
		"uvu",
		"uvvu"
	]
},
	"video/vnd.vivo": {
	source: "iana",
	extensions: [
		"viv"
	]
},
	"video/vnd.youtube.yt": {
	source: "iana"
},
	"video/vp8": {
	source: "iana"
},
	"video/vp9": {
	source: "iana"
},
	"video/webm": {
	source: "apache",
	compressible: false,
	extensions: [
		"webm"
	]
},
	"video/x-f4v": {
	source: "apache",
	extensions: [
		"f4v"
	]
},
	"video/x-fli": {
	source: "apache",
	extensions: [
		"fli"
	]
},
	"video/x-flv": {
	source: "apache",
	compressible: false,
	extensions: [
		"flv"
	]
},
	"video/x-m4v": {
	source: "apache",
	extensions: [
		"m4v"
	]
},
	"video/x-matroska": {
	source: "apache",
	compressible: false,
	extensions: [
		"mkv",
		"mk3d",
		"mks"
	]
},
	"video/x-mng": {
	source: "apache",
	extensions: [
		"mng"
	]
},
	"video/x-ms-asf": {
	source: "apache",
	extensions: [
		"asf",
		"asx"
	]
},
	"video/x-ms-vob": {
	source: "apache",
	extensions: [
		"vob"
	]
},
	"video/x-ms-wm": {
	source: "apache",
	extensions: [
		"wm"
	]
},
	"video/x-ms-wmv": {
	source: "apache",
	compressible: false,
	extensions: [
		"wmv"
	]
},
	"video/x-ms-wmx": {
	source: "apache",
	extensions: [
		"wmx"
	]
},
	"video/x-ms-wvx": {
	source: "apache",
	extensions: [
		"wvx"
	]
},
	"video/x-msvideo": {
	source: "apache",
	extensions: [
		"avi"
	]
},
	"video/x-sgi-movie": {
	source: "apache",
	extensions: [
		"movie"
	]
},
	"video/x-smv": {
	source: "apache",
	extensions: [
		"smv"
	]
},
	"x-conference/x-cooltalk": {
	source: "apache",
	extensions: [
		"ice"
	]
},
	"x-shader/x-fragment": {
	compressible: true
},
	"x-shader/x-vertex": {
	compressible: true
}
};

/*!
 * mime-db
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015-2022 Douglas Christopher Wilson
 * MIT Licensed
 */

var mimeDb;
var hasRequiredMimeDb;

function requireMimeDb () {
	if (hasRequiredMimeDb) return mimeDb;
	hasRequiredMimeDb = 1;
	/**
	 * Module exports.
	 */

	mimeDb = require$$0;
	return mimeDb;
}

var mimeScore;
var hasRequiredMimeScore;

function requireMimeScore () {
	if (hasRequiredMimeScore) return mimeScore;
	hasRequiredMimeScore = 1;
	// 'mime-score' back-ported to CommonJS

	// Score RFC facets (see https://tools.ietf.org/html/rfc6838#section-3)
	var FACET_SCORES = {
	  'prs.': 100,
	  'x-': 200,
	  'x.': 300,
	  'vnd.': 400,
	  default: 900
	};

	// Score mime source (Logic originally from `jshttp/mime-types` module)
	var SOURCE_SCORES = {
	  nginx: 10,
	  apache: 20,
	  iana: 40,
	  default: 30 // definitions added by `jshttp/mime-db` project?
	};

	var TYPE_SCORES = {
	  // prefer application/xml over text/xml
	  // prefer application/rtf over text/rtf
	  application: 1,

	  // prefer font/woff over application/font-woff
	  font: 2,

	  default: 0
	};

	/**
	 * Get each component of the score for a mime type.  The sum of these is the
	 * total score.  The higher the score, the more "official" the type.
	 */
	mimeScore = function mimeScore (mimeType, source = 'default') {
	  if (mimeType === 'application/octet-stream') {
	    return 0
	  }

	  const [type, subtype] = mimeType.split('/');

	  const facet = subtype.replace(/(\.|x-).*/, '$1');

	  const facetScore = FACET_SCORES[facet] || FACET_SCORES.default;
	  const sourceScore = SOURCE_SCORES[source] || SOURCE_SCORES.default;
	  const typeScore = TYPE_SCORES[type] || TYPE_SCORES.default;

	  // All else being equal prefer shorter types
	  const lengthScore = 1 - mimeType.length / 100;

	  return facetScore + sourceScore + typeScore + lengthScore
	};
	return mimeScore;
}

/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

var hasRequiredMimeTypes;

function requireMimeTypes () {
	if (hasRequiredMimeTypes) return mimeTypes;
	hasRequiredMimeTypes = 1;
	(function (exports) {

		/**
		 * Module dependencies.
		 * @private
		 */

		var db = requireMimeDb();
		var extname = require$$1$3.extname;
		var mimeScore = requireMimeScore();

		/**
		 * Module variables.
		 * @private
		 */

		var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/;
		var TEXT_TYPE_REGEXP = /^text\//i;

		/**
		 * Module exports.
		 * @public
		 */

		exports.charset = charset;
		exports.charsets = { lookup: charset };
		exports.contentType = contentType;
		exports.extension = extension;
		exports.extensions = Object.create(null);
		exports.lookup = lookup;
		exports.types = Object.create(null);
		exports._extensionConflicts = [];

		// Populate the extensions/types maps
		populateMaps(exports.extensions, exports.types);

		/**
		 * Get the default charset for a MIME type.
		 *
		 * @param {string} type
		 * @return {boolean|string}
		 */

		function charset (type) {
		  if (!type || typeof type !== 'string') {
		    return false
		  }

		  // TODO: use media-typer
		  var match = EXTRACT_TYPE_REGEXP.exec(type);
		  var mime = match && db[match[1].toLowerCase()];

		  if (mime && mime.charset) {
		    return mime.charset
		  }

		  // default text/* to utf-8
		  if (match && TEXT_TYPE_REGEXP.test(match[1])) {
		    return 'UTF-8'
		  }

		  return false
		}

		/**
		 * Create a full Content-Type header given a MIME type or extension.
		 *
		 * @param {string} str
		 * @return {boolean|string}
		 */

		function contentType (str) {
		  // TODO: should this even be in this module?
		  if (!str || typeof str !== 'string') {
		    return false
		  }

		  var mime = str.indexOf('/') === -1 ? exports.lookup(str) : str;

		  if (!mime) {
		    return false
		  }

		  // TODO: use content-type or other module
		  if (mime.indexOf('charset') === -1) {
		    var charset = exports.charset(mime);
		    if (charset) mime += '; charset=' + charset.toLowerCase();
		  }

		  return mime
		}

		/**
		 * Get the default extension for a MIME type.
		 *
		 * @param {string} type
		 * @return {boolean|string}
		 */

		function extension (type) {
		  if (!type || typeof type !== 'string') {
		    return false
		  }

		  // TODO: use media-typer
		  var match = EXTRACT_TYPE_REGEXP.exec(type);

		  // get extensions
		  var exts = match && exports.extensions[match[1].toLowerCase()];

		  if (!exts || !exts.length) {
		    return false
		  }

		  return exts[0]
		}

		/**
		 * Lookup the MIME type for a file path/extension.
		 *
		 * @param {string} path
		 * @return {boolean|string}
		 */

		function lookup (path) {
		  if (!path || typeof path !== 'string') {
		    return false
		  }

		  // get the extension ("ext" or ".ext" or full path)
		  var extension = extname('x.' + path)
		    .toLowerCase()
		    .slice(1);

		  if (!extension) {
		    return false
		  }

		  return exports.types[extension] || false
		}

		/**
		 * Populate the extensions and types maps.
		 * @private
		 */

		function populateMaps (extensions, types) {
		  Object.keys(db).forEach(function forEachMimeType (type) {
		    var mime = db[type];
		    var exts = mime.extensions;

		    if (!exts || !exts.length) {
		      return
		    }

		    // mime -> extensions
		    extensions[type] = exts;

		    // extension -> mime
		    for (var i = 0; i < exts.length; i++) {
		      var extension = exts[i];
		      types[extension] = _preferredType(extension, types[extension], type);

		      // DELETE (eventually): Capture extension->type maps that change as a
		      // result of switching to mime-score.  This is just to help make reviewing
		      // PR #119 easier, and can be removed once that PR is approved.
		      const legacyType = _preferredTypeLegacy(
		        extension,
		        types[extension],
		        type
		      );
		      if (legacyType !== types[extension]) {
		        exports._extensionConflicts.push([extension, legacyType, types[extension]]);
		      }
		    }
		  });
		}

		// Resolve type conflict using mime-score
		function _preferredType (ext, type0, type1) {
		  var score0 = type0 ? mimeScore(type0, db[type0].source) : 0;
		  var score1 = type1 ? mimeScore(type1, db[type1].source) : 0;

		  return score0 > score1 ? type0 : type1
		}

		// Resolve type conflict using pre-mime-score logic
		function _preferredTypeLegacy (ext, type0, type1) {
		  var SOURCE_RANK = ['nginx', 'apache', undefined, 'iana'];

		  var score0 = type0 ? SOURCE_RANK.indexOf(db[type0].source) : 0;
		  var score1 = type1 ? SOURCE_RANK.indexOf(db[type1].source) : 0;

		  if (
		    exports.types[extension] !== 'application/octet-stream' &&
		    (score0 > score1 ||
		      (score0 === score1 &&
		        exports.types[extension]?.slice(0, 12) === 'application/'))
		  ) {
		    return type0
		  }

		  return score0 > score1 ? type0 : type1
		} 
	} (mimeTypes));
	return mimeTypes;
}

var mediaTyper = {};

/*!
 * media-typer
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */

var hasRequiredMediaTyper;

function requireMediaTyper () {
	if (hasRequiredMediaTyper) return mediaTyper;
	hasRequiredMediaTyper = 1;

	/**
	 * RegExp to match type in RFC 6838
	 *
	 * type-name = restricted-name
	 * subtype-name = restricted-name
	 * restricted-name = restricted-name-first *126restricted-name-chars
	 * restricted-name-first  = ALPHA / DIGIT
	 * restricted-name-chars  = ALPHA / DIGIT / "!" / "#" /
	 *                          "$" / "&" / "-" / "^" / "_"
	 * restricted-name-chars =/ "." ; Characters before first dot always
	 *                              ; specify a facet name
	 * restricted-name-chars =/ "+" ; Characters after last plus always
	 *                              ; specify a structured syntax suffix
	 * ALPHA =  %x41-5A / %x61-7A   ; A-Z / a-z
	 * DIGIT =  %x30-39             ; 0-9
	 */
	var SUBTYPE_NAME_REGEXP = /^[A-Za-z0-9][A-Za-z0-9!#$&^_.-]{0,126}$/;
	var TYPE_NAME_REGEXP = /^[A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126}$/;
	var TYPE_REGEXP = /^ *([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126}) *$/;

	/**
	 * Module exports.
	 */

	mediaTyper.format = format;
	mediaTyper.parse = parse;
	mediaTyper.test = test;

	/**
	 * Format object to media type.
	 *
	 * @param {object} obj
	 * @return {string}
	 * @public
	 */

	function format (obj) {
	  if (!obj || typeof obj !== 'object') {
	    throw new TypeError('argument obj is required')
	  }

	  var subtype = obj.subtype;
	  var suffix = obj.suffix;
	  var type = obj.type;

	  if (!type || !TYPE_NAME_REGEXP.test(type)) {
	    throw new TypeError('invalid type')
	  }

	  if (!subtype || !SUBTYPE_NAME_REGEXP.test(subtype)) {
	    throw new TypeError('invalid subtype')
	  }

	  // format as type/subtype
	  var string = type + '/' + subtype;

	  // append +suffix
	  if (suffix) {
	    if (!TYPE_NAME_REGEXP.test(suffix)) {
	      throw new TypeError('invalid suffix')
	    }

	    string += '+' + suffix;
	  }

	  return string
	}

	/**
	 * Test media type.
	 *
	 * @param {string} string
	 * @return {object}
	 * @public
	 */

	function test (string) {
	  if (!string) {
	    throw new TypeError('argument string is required')
	  }

	  if (typeof string !== 'string') {
	    throw new TypeError('argument string is required to be a string')
	  }

	  return TYPE_REGEXP.test(string.toLowerCase())
	}

	/**
	 * Parse media type to object.
	 *
	 * @param {string} string
	 * @return {object}
	 * @public
	 */

	function parse (string) {
	  if (!string) {
	    throw new TypeError('argument string is required')
	  }

	  if (typeof string !== 'string') {
	    throw new TypeError('argument string is required to be a string')
	  }

	  var match = TYPE_REGEXP.exec(string.toLowerCase());

	  if (!match) {
	    throw new TypeError('invalid media type')
	  }

	  var type = match[1];
	  var subtype = match[2];
	  var suffix;

	  // suffix after last +
	  var index = subtype.lastIndexOf('+');
	  if (index !== -1) {
	    suffix = subtype.substr(index + 1);
	    subtype = subtype.substr(0, index);
	  }

	  return new MediaType(type, subtype, suffix)
	}

	/**
	 * Class for MediaType object.
	 * @public
	 */

	function MediaType (type, subtype, suffix) {
	  this.type = type;
	  this.subtype = subtype;
	  this.suffix = suffix;
	}
	return mediaTyper;
}

/*!
 * type-is
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */

var hasRequiredTypeIs;

function requireTypeIs () {
	if (hasRequiredTypeIs) return typeIs.exports;
	hasRequiredTypeIs = 1;

	/**
	 * Module dependencies.
	 * @private
	 */

	var contentType = requireContentType();
	var mime = requireMimeTypes();
	var typer = requireMediaTyper();

	/**
	 * Module exports.
	 * @public
	 */

	typeIs.exports = typeofrequest;
	typeIs.exports.is = typeis;
	typeIs.exports.hasBody = hasbody;
	typeIs.exports.normalize = normalize;
	typeIs.exports.match = mimeMatch;

	/**
	 * Compare a `value` content-type with `types`.
	 * Each `type` can be an extension like `html`,
	 * a special shortcut like `multipart` or `urlencoded`,
	 * or a mime type.
	 *
	 * If no types match, `false` is returned.
	 * Otherwise, the first `type` that matches is returned.
	 *
	 * @param {String} value
	 * @param {Array} types
	 * @public
	 */

	function typeis (value, types_) {
	  var i;
	  var types = types_;

	  // remove parameters and normalize
	  var val = tryNormalizeType(value);

	  // no type or invalid
	  if (!val) {
	    return false
	  }

	  // support flattened arguments
	  if (types && !Array.isArray(types)) {
	    types = new Array(arguments.length - 1);
	    for (i = 0; i < types.length; i++) {
	      types[i] = arguments[i + 1];
	    }
	  }

	  // no types, return the content type
	  if (!types || !types.length) {
	    return val
	  }

	  var type;
	  for (i = 0; i < types.length; i++) {
	    if (mimeMatch(normalize(type = types[i]), val)) {
	      return type[0] === '+' || type.indexOf('*') !== -1
	        ? val
	        : type
	    }
	  }

	  // no matches
	  return false
	}

	/**
	 * Check if a request has a request body.
	 * A request with a body __must__ either have `transfer-encoding`
	 * or `content-length` headers set.
	 * http://www.w3.org/Protocols/rfc2616/rfc2616-sec4.html#sec4.3
	 *
	 * @param {Object} request
	 * @return {Boolean}
	 * @public
	 */

	function hasbody (req) {
	  return req.headers['transfer-encoding'] !== undefined ||
	    !isNaN(req.headers['content-length'])
	}

	/**
	 * Check if the incoming request contains the "Content-Type"
	 * header field, and it contains any of the give mime `type`s.
	 * If there is no request body, `null` is returned.
	 * If there is no content type, `false` is returned.
	 * Otherwise, it returns the first `type` that matches.
	 *
	 * Examples:
	 *
	 *     // With Content-Type: text/html; charset=utf-8
	 *     this.is('html'); // => 'html'
	 *     this.is('text/html'); // => 'text/html'
	 *     this.is('text/*', 'application/json'); // => 'text/html'
	 *
	 *     // When Content-Type is application/json
	 *     this.is('json', 'urlencoded'); // => 'json'
	 *     this.is('application/json'); // => 'application/json'
	 *     this.is('html', 'application/*'); // => 'application/json'
	 *
	 *     this.is('html'); // => false
	 *
	 * @param {Object} req
	 * @param {(String|Array)} types...
	 * @return {(String|false|null)}
	 * @public
	 */

	function typeofrequest (req, types_) {
	  // no body
	  if (!hasbody(req)) return null
	  // support flattened arguments
	  var types = arguments.length > 2
	    ? Array.prototype.slice.call(arguments, 1)
	    : types_;
	  // request content type
	  var value = req.headers['content-type'];

	  return typeis(value, types)
	}

	/**
	 * Normalize a mime type.
	 * If it's a shorthand, expand it to a valid mime type.
	 *
	 * In general, you probably want:
	 *
	 *   var type = is(req, ['urlencoded', 'json', 'multipart']);
	 *
	 * Then use the appropriate body parsers.
	 * These three are the most common request body types
	 * and are thus ensured to work.
	 *
	 * @param {String} type
	 * @return {String|false|null}
	 * @public
	 */

	function normalize (type) {
	  if (typeof type !== 'string') {
	    // invalid type
	    return false
	  }

	  switch (type) {
	    case 'urlencoded':
	      return 'application/x-www-form-urlencoded'
	    case 'multipart':
	      return 'multipart/*'
	  }

	  if (type[0] === '+') {
	    // "+json" -> "*/*+json" expando
	    return '*/*' + type
	  }

	  return type.indexOf('/') === -1
	    ? mime.lookup(type)
	    : type
	}

	/**
	 * Check if `expected` mime type
	 * matches `actual` mime type with
	 * wildcard and +suffix support.
	 *
	 * @param {String} expected
	 * @param {String} actual
	 * @return {Boolean}
	 * @public
	 */

	function mimeMatch (expected, actual) {
	  // invalid type
	  if (expected === false) {
	    return false
	  }

	  // split types
	  var actualParts = actual.split('/');
	  var expectedParts = expected.split('/');

	  // invalid format
	  if (actualParts.length !== 2 || expectedParts.length !== 2) {
	    return false
	  }

	  // validate type
	  if (expectedParts[0] !== '*' && expectedParts[0] !== actualParts[0]) {
	    return false
	  }

	  // validate suffix wildcard
	  if (expectedParts[1].slice(0, 2) === '*+') {
	    return expectedParts[1].length <= actualParts[1].length + 1 &&
	      expectedParts[1].slice(1) === actualParts[1].slice(1 - expectedParts[1].length)
	  }

	  // validate subtype
	  if (expectedParts[1] !== '*' && expectedParts[1] !== actualParts[1]) {
	    return false
	  }

	  return true
	}

	/**
	 * Normalize a type and remove parameters.
	 *
	 * @param {string} value
	 * @return {(string|null)}
	 * @private
	 */
	function normalizeType (value) {
	  // Parse the type
	  var type = contentType.parse(value).type;

	  return typer.test(type) ? type : null
	}

	/**
	 * Try to normalize a type and remove parameters.
	 *
	 * @param {string} value
	 * @return {(string|null)}
	 * @private
	 */
	function tryNormalizeType (value) {
	  try {
	    return value ? normalizeType(value) : null
	  } catch (err) {
	    return null
	  }
	}
	return typeIs.exports;
}

var utils$1;
var hasRequiredUtils$1;

function requireUtils$1 () {
	if (hasRequiredUtils$1) return utils$1;
	hasRequiredUtils$1 = 1;

	/**
	 * Module dependencies.
	 */

	var bytes = requireBytes();
	var contentType = requireContentType();
	var typeis = requireTypeIs();

	/**
	 * Module exports.
	 */

	utils$1 = {
	  getCharset,
	  normalizeOptions
	};

	/**
	 * Get the charset of a request.
	 *
	 * @param {object} req
	 * @api private
	 */

	function getCharset (req) {
	  try {
	    return (contentType.parse(req).parameters.charset || '').toLowerCase()
	  } catch {
	    return undefined
	  }
	}

	/**
	 * Get the simple type checker.
	 *
	 * @param {string | string[]} type
	 * @return {function}
	 */

	function typeChecker (type) {
	  return function checkType (req) {
	    return Boolean(typeis(req, type))
	  }
	}

	/**
	 * Normalizes the common options for all parsers.
	 *
	 * @param {object} options options to normalize
	 * @param {string | string[] | function} defaultType default content type(s) or a function to determine it
	 * @returns {object}
	 */
	function normalizeOptions (options, defaultType) {
	  if (!defaultType) {
	    // Parsers must define a default content type
	    throw new TypeError('defaultType must be provided')
	  }

	  var inflate = options?.inflate !== false;
	  var limit = typeof options?.limit !== 'number'
	    ? bytes.parse(options?.limit || '100kb')
	    : options?.limit;
	  var type = options?.type || defaultType;
	  var verify = options?.verify || false;

	  if (verify !== false && typeof verify !== 'function') {
	    throw new TypeError('option verify must be function')
	  }

	  // create the appropriate type checking function
	  var shouldParse = typeof type !== 'function'
	    ? typeChecker(type)
	    : type;

	  return {
	    inflate,
	    limit,
	    verify,
	    shouldParse
	  }
	}
	return utils$1;
}

/*!
 * body-parser
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */

var json_1;
var hasRequiredJson;

function requireJson () {
	if (hasRequiredJson) return json_1;
	hasRequiredJson = 1;

	/**
	 * Module dependencies.
	 * @private
	 */

	var createError = requireHttpErrors();
	var debug = requireSrc()('body-parser:json');
	var isFinished = requireOnFinished().isFinished;
	var read = requireRead();
	var typeis = requireTypeIs();
	var { getCharset, normalizeOptions } = requireUtils$1();

	/**
	 * Module exports.
	 */

	json_1 = json;

	/**
	 * RegExp to match the first non-space in a string.
	 *
	 * Allowed whitespace is defined in RFC 7159:
	 *
	 *    ws = *(
	 *            %x20 /              ; Space
	 *            %x09 /              ; Horizontal tab
	 *            %x0A /              ; Line feed or New line
	 *            %x0D )              ; Carriage return
	 */

	var FIRST_CHAR_REGEXP = /^[\x20\x09\x0a\x0d]*([^\x20\x09\x0a\x0d])/; // eslint-disable-line no-control-regex

	var JSON_SYNTAX_CHAR = '#';
	var JSON_SYNTAX_REGEXP = /#+/g;

	/**
	 * Create a middleware to parse JSON bodies.
	 *
	 * @param {object} [options]
	 * @return {function}
	 * @public
	 */

	function json (options) {
	  var { inflate, limit, verify, shouldParse } = normalizeOptions(options, 'application/json');

	  var reviver = options?.reviver;
	  var strict = options?.strict !== false;

	  function parse (body) {
	    if (body.length === 0) {
	      // special-case empty json body, as it's a common client-side mistake
	      // TODO: maybe make this configurable or part of "strict" option
	      return {}
	    }

	    if (strict) {
	      var first = firstchar(body);

	      if (first !== '{' && first !== '[') {
	        debug('strict violation');
	        throw createStrictSyntaxError(body, first)
	      }
	    }

	    try {
	      debug('parse json');
	      return JSON.parse(body, reviver)
	    } catch (e) {
	      throw normalizeJsonSyntaxError(e, {
	        message: e.message,
	        stack: e.stack
	      })
	    }
	  }

	  return function jsonParser (req, res, next) {
	    if (isFinished(req)) {
	      debug('body already parsed');
	      next();
	      return
	    }

	    if (!('body' in req)) {
	      req.body = undefined;
	    }

	    // skip requests without bodies
	    if (!typeis.hasBody(req)) {
	      debug('skip empty body');
	      next();
	      return
	    }

	    debug('content-type %j', req.headers['content-type']);

	    // determine if request should be parsed
	    if (!shouldParse(req)) {
	      debug('skip parsing');
	      next();
	      return
	    }

	    // assert charset per RFC 7159 sec 8.1
	    var charset = getCharset(req) || 'utf-8';
	    if (charset.slice(0, 4) !== 'utf-') {
	      debug('invalid charset');
	      next(createError(415, 'unsupported charset "' + charset.toUpperCase() + '"', {
	        charset: charset,
	        type: 'charset.unsupported'
	      }));
	      return
	    }

	    // read
	    read(req, res, next, parse, debug, {
	      encoding: charset,
	      inflate,
	      limit,
	      verify
	    });
	  }
	}

	/**
	 * Create strict violation syntax error matching native error.
	 *
	 * @param {string} str
	 * @param {string} char
	 * @return {Error}
	 * @private
	 */

	function createStrictSyntaxError (str, char) {
	  var index = str.indexOf(char);
	  var partial = '';

	  if (index !== -1) {
	    partial = str.substring(0, index) + JSON_SYNTAX_CHAR;

	    for (var i = index + 1; i < str.length; i++) {
	      partial += JSON_SYNTAX_CHAR;
	    }
	  }

	  try {
	    JSON.parse(partial); /* istanbul ignore next */ throw new SyntaxError('strict violation')
	  } catch (e) {
	    return normalizeJsonSyntaxError(e, {
	      message: e.message.replace(JSON_SYNTAX_REGEXP, function (placeholder) {
	        return str.substring(index, index + placeholder.length)
	      }),
	      stack: e.stack
	    })
	  }
	}

	/**
	 * Get the first non-whitespace character in a string.
	 *
	 * @param {string} str
	 * @return {function}
	 * @private
	 */

	function firstchar (str) {
	  var match = FIRST_CHAR_REGEXP.exec(str);

	  return match
	    ? match[1]
	    : undefined
	}

	/**
	 * Normalize a SyntaxError for JSON.parse.
	 *
	 * @param {SyntaxError} error
	 * @param {object} obj
	 * @return {SyntaxError}
	 */

	function normalizeJsonSyntaxError (error, obj) {
	  var keys = Object.getOwnPropertyNames(error);

	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (key !== 'stack' && key !== 'message') {
	      delete error[key];
	    }
	  }

	  // replace stack before message for Node.js 0.10 and below
	  error.stack = obj.stack.replace(error.message, obj.message);
	  error.message = obj.message;

	  return error
	}
	return json_1;
}

/*!
 * body-parser
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */

var raw_1;
var hasRequiredRaw;

function requireRaw () {
	if (hasRequiredRaw) return raw_1;
	hasRequiredRaw = 1;

	/**
	 * Module dependencies.
	 */

	var debug = requireSrc()('body-parser:raw');
	var isFinished = requireOnFinished().isFinished;
	var read = requireRead();
	var typeis = requireTypeIs();
	var { normalizeOptions } = requireUtils$1();

	/**
	 * Module exports.
	 */

	raw_1 = raw;

	/**
	 * Create a middleware to parse raw bodies.
	 *
	 * @param {object} [options]
	 * @return {function}
	 * @api public
	 */

	function raw (options) {
	  var { inflate, limit, verify, shouldParse } = normalizeOptions(options, 'application/octet-stream');

	  function parse (buf) {
	    return buf
	  }

	  return function rawParser (req, res, next) {
	    if (isFinished(req)) {
	      debug('body already parsed');
	      next();
	      return
	    }

	    if (!('body' in req)) {
	      req.body = undefined;
	    }

	    // skip requests without bodies
	    if (!typeis.hasBody(req)) {
	      debug('skip empty body');
	      next();
	      return
	    }

	    debug('content-type %j', req.headers['content-type']);

	    // determine if request should be parsed
	    if (!shouldParse(req)) {
	      debug('skip parsing');
	      next();
	      return
	    }

	    // read
	    read(req, res, next, parse, debug, {
	      encoding: null,
	      inflate,
	      limit,
	      verify
	    });
	  }
	}
	return raw_1;
}

/*!
 * body-parser
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */

var text_1;
var hasRequiredText;

function requireText () {
	if (hasRequiredText) return text_1;
	hasRequiredText = 1;

	/**
	 * Module dependencies.
	 */

	var debug = requireSrc()('body-parser:text');
	var isFinished = requireOnFinished().isFinished;
	var read = requireRead();
	var typeis = requireTypeIs();
	var { getCharset, normalizeOptions } = requireUtils$1();

	/**
	 * Module exports.
	 */

	text_1 = text;

	/**
	 * Create a middleware to parse text bodies.
	 *
	 * @param {object} [options]
	 * @return {function}
	 * @api public
	 */

	function text (options) {
	  var { inflate, limit, verify, shouldParse } = normalizeOptions(options, 'text/plain');

	  var defaultCharset = options?.defaultCharset || 'utf-8';

	  function parse (buf) {
	    return buf
	  }

	  return function textParser (req, res, next) {
	    if (isFinished(req)) {
	      debug('body already parsed');
	      next();
	      return
	    }

	    if (!('body' in req)) {
	      req.body = undefined;
	    }

	    // skip requests without bodies
	    if (!typeis.hasBody(req)) {
	      debug('skip empty body');
	      next();
	      return
	    }

	    debug('content-type %j', req.headers['content-type']);

	    // determine if request should be parsed
	    if (!shouldParse(req)) {
	      debug('skip parsing');
	      next();
	      return
	    }

	    // get charset
	    var charset = getCharset(req) || defaultCharset;

	    // read
	    read(req, res, next, parse, debug, {
	      encoding: charset,
	      inflate,
	      limit,
	      verify
	    });
	  }
	}
	return text_1;
}

var util_inspect;
var hasRequiredUtil_inspect;

function requireUtil_inspect () {
	if (hasRequiredUtil_inspect) return util_inspect;
	hasRequiredUtil_inspect = 1;
	util_inspect = require$$1$2.inspect;
	return util_inspect;
}

var objectInspect;
var hasRequiredObjectInspect;

function requireObjectInspect () {
	if (hasRequiredObjectInspect) return objectInspect;
	hasRequiredObjectInspect = 1;
	var hasMap = typeof Map === 'function' && Map.prototype;
	var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
	var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
	var mapForEach = hasMap && Map.prototype.forEach;
	var hasSet = typeof Set === 'function' && Set.prototype;
	var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
	var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
	var setForEach = hasSet && Set.prototype.forEach;
	var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
	var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
	var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
	var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
	var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
	var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
	var booleanValueOf = Boolean.prototype.valueOf;
	var objectToString = Object.prototype.toString;
	var functionToString = Function.prototype.toString;
	var $match = String.prototype.match;
	var $slice = String.prototype.slice;
	var $replace = String.prototype.replace;
	var $toUpperCase = String.prototype.toUpperCase;
	var $toLowerCase = String.prototype.toLowerCase;
	var $test = RegExp.prototype.test;
	var $concat = Array.prototype.concat;
	var $join = Array.prototype.join;
	var $arrSlice = Array.prototype.slice;
	var $floor = Math.floor;
	var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
	var gOPS = Object.getOwnPropertySymbols;
	var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
	var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
	// ie, `has-tostringtag/shams
	var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol')
	    ? Symbol.toStringTag
	    : null;
	var isEnumerable = Object.prototype.propertyIsEnumerable;

	var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || (
	    [].__proto__ === Array.prototype // eslint-disable-line no-proto
	        ? function (O) {
	            return O.__proto__; // eslint-disable-line no-proto
	        }
	        : null
	);

	function addNumericSeparator(num, str) {
	    if (
	        num === Infinity
	        || num === -Infinity
	        || num !== num
	        || (num && num > -1000 && num < 1000)
	        || $test.call(/e/, str)
	    ) {
	        return str;
	    }
	    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
	    if (typeof num === 'number') {
	        var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
	        if (int !== num) {
	            var intStr = String(int);
	            var dec = $slice.call(str, intStr.length + 1);
	            return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
	        }
	    }
	    return $replace.call(str, sepRegex, '$&_');
	}

	var utilInspect = requireUtil_inspect();
	var inspectCustom = utilInspect.custom;
	var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;

	var quotes = {
	    __proto__: null,
	    'double': '"',
	    single: "'"
	};
	var quoteREs = {
	    __proto__: null,
	    'double': /(["\\])/g,
	    single: /(['\\])/g
	};

	objectInspect = function inspect_(obj, options, depth, seen) {
	    var opts = options || {};

	    if (has(opts, 'quoteStyle') && !has(quotes, opts.quoteStyle)) {
	        throw new TypeError('option "quoteStyle" must be "single" or "double"');
	    }
	    if (
	        has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
	            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
	            : opts.maxStringLength !== null
	        )
	    ) {
	        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
	    }
	    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
	    if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {
	        throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
	    }

	    if (
	        has(opts, 'indent')
	        && opts.indent !== null
	        && opts.indent !== '\t'
	        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
	    ) {
	        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
	    }
	    if (has(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {
	        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
	    }
	    var numericSeparator = opts.numericSeparator;

	    if (typeof obj === 'undefined') {
	        return 'undefined';
	    }
	    if (obj === null) {
	        return 'null';
	    }
	    if (typeof obj === 'boolean') {
	        return obj ? 'true' : 'false';
	    }

	    if (typeof obj === 'string') {
	        return inspectString(obj, opts);
	    }
	    if (typeof obj === 'number') {
	        if (obj === 0) {
	            return Infinity / obj > 0 ? '0' : '-0';
	        }
	        var str = String(obj);
	        return numericSeparator ? addNumericSeparator(obj, str) : str;
	    }
	    if (typeof obj === 'bigint') {
	        var bigIntStr = String(obj) + 'n';
	        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
	    }

	    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
	    if (typeof depth === 'undefined') { depth = 0; }
	    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
	        return isArray(obj) ? '[Array]' : '[Object]';
	    }

	    var indent = getIndent(opts, depth);

	    if (typeof seen === 'undefined') {
	        seen = [];
	    } else if (indexOf(seen, obj) >= 0) {
	        return '[Circular]';
	    }

	    function inspect(value, from, noIndent) {
	        if (from) {
	            seen = $arrSlice.call(seen);
	            seen.push(from);
	        }
	        if (noIndent) {
	            var newOpts = {
	                depth: opts.depth
	            };
	            if (has(opts, 'quoteStyle')) {
	                newOpts.quoteStyle = opts.quoteStyle;
	            }
	            return inspect_(value, newOpts, depth + 1, seen);
	        }
	        return inspect_(value, opts, depth + 1, seen);
	    }

	    if (typeof obj === 'function' && !isRegExp(obj)) { // in older engines, regexes are callable
	        var name = nameOf(obj);
	        var keys = arrObjKeys(obj, inspect);
	        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
	    }
	    if (isSymbol(obj)) {
	        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
	        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
	    }
	    if (isElement(obj)) {
	        var s = '<' + $toLowerCase.call(String(obj.nodeName));
	        var attrs = obj.attributes || [];
	        for (var i = 0; i < attrs.length; i++) {
	            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
	        }
	        s += '>';
	        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
	        s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
	        return s;
	    }
	    if (isArray(obj)) {
	        if (obj.length === 0) { return '[]'; }
	        var xs = arrObjKeys(obj, inspect);
	        if (indent && !singleLineValues(xs)) {
	            return '[' + indentedJoin(xs, indent) + ']';
	        }
	        return '[ ' + $join.call(xs, ', ') + ' ]';
	    }
	    if (isError(obj)) {
	        var parts = arrObjKeys(obj, inspect);
	        if (!('cause' in Error.prototype) && 'cause' in obj && !isEnumerable.call(obj, 'cause')) {
	            return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
	        }
	        if (parts.length === 0) { return '[' + String(obj) + ']'; }
	        return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
	    }
	    if (typeof obj === 'object' && customInspect) {
	        if (inspectSymbol && typeof obj[inspectSymbol] === 'function' && utilInspect) {
	            return utilInspect(obj, { depth: maxDepth - depth });
	        } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {
	            return obj.inspect();
	        }
	    }
	    if (isMap(obj)) {
	        var mapParts = [];
	        if (mapForEach) {
	            mapForEach.call(obj, function (value, key) {
	                mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
	            });
	        }
	        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
	    }
	    if (isSet(obj)) {
	        var setParts = [];
	        if (setForEach) {
	            setForEach.call(obj, function (value) {
	                setParts.push(inspect(value, obj));
	            });
	        }
	        return collectionOf('Set', setSize.call(obj), setParts, indent);
	    }
	    if (isWeakMap(obj)) {
	        return weakCollectionOf('WeakMap');
	    }
	    if (isWeakSet(obj)) {
	        return weakCollectionOf('WeakSet');
	    }
	    if (isWeakRef(obj)) {
	        return weakCollectionOf('WeakRef');
	    }
	    if (isNumber(obj)) {
	        return markBoxed(inspect(Number(obj)));
	    }
	    if (isBigInt(obj)) {
	        return markBoxed(inspect(bigIntValueOf.call(obj)));
	    }
	    if (isBoolean(obj)) {
	        return markBoxed(booleanValueOf.call(obj));
	    }
	    if (isString(obj)) {
	        return markBoxed(inspect(String(obj)));
	    }
	    // note: in IE 8, sometimes `global !== window` but both are the prototypes of each other
	    /* eslint-env browser */
	    if (typeof window !== 'undefined' && obj === window) {
	        return '{ [object Window] }';
	    }
	    if (
	        (typeof globalThis !== 'undefined' && obj === globalThis)
	        || (typeof commonjsGlobal !== 'undefined' && obj === commonjsGlobal)
	    ) {
	        return '{ [object globalThis] }';
	    }
	    if (!isDate(obj) && !isRegExp(obj)) {
	        var ys = arrObjKeys(obj, inspect);
	        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
	        var protoTag = obj instanceof Object ? '' : 'null prototype';
	        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
	        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
	        var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
	        if (ys.length === 0) { return tag + '{}'; }
	        if (indent) {
	            return tag + '{' + indentedJoin(ys, indent) + '}';
	        }
	        return tag + '{ ' + $join.call(ys, ', ') + ' }';
	    }
	    return String(obj);
	};

	function wrapQuotes(s, defaultStyle, opts) {
	    var style = opts.quoteStyle || defaultStyle;
	    var quoteChar = quotes[style];
	    return quoteChar + s + quoteChar;
	}

	function quote(s) {
	    return $replace.call(String(s), /"/g, '&quot;');
	}

	function canTrustToString(obj) {
	    return !toStringTag || !(typeof obj === 'object' && (toStringTag in obj || typeof obj[toStringTag] !== 'undefined'));
	}
	function isArray(obj) { return toStr(obj) === '[object Array]' && canTrustToString(obj); }
	function isDate(obj) { return toStr(obj) === '[object Date]' && canTrustToString(obj); }
	function isRegExp(obj) { return toStr(obj) === '[object RegExp]' && canTrustToString(obj); }
	function isError(obj) { return toStr(obj) === '[object Error]' && canTrustToString(obj); }
	function isString(obj) { return toStr(obj) === '[object String]' && canTrustToString(obj); }
	function isNumber(obj) { return toStr(obj) === '[object Number]' && canTrustToString(obj); }
	function isBoolean(obj) { return toStr(obj) === '[object Boolean]' && canTrustToString(obj); }

	// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
	function isSymbol(obj) {
	    if (hasShammedSymbols) {
	        return obj && typeof obj === 'object' && obj instanceof Symbol;
	    }
	    if (typeof obj === 'symbol') {
	        return true;
	    }
	    if (!obj || typeof obj !== 'object' || !symToString) {
	        return false;
	    }
	    try {
	        symToString.call(obj);
	        return true;
	    } catch (e) {}
	    return false;
	}

	function isBigInt(obj) {
	    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
	        return false;
	    }
	    try {
	        bigIntValueOf.call(obj);
	        return true;
	    } catch (e) {}
	    return false;
	}

	var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
	function has(obj, key) {
	    return hasOwn.call(obj, key);
	}

	function toStr(obj) {
	    return objectToString.call(obj);
	}

	function nameOf(f) {
	    if (f.name) { return f.name; }
	    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
	    if (m) { return m[1]; }
	    return null;
	}

	function indexOf(xs, x) {
	    if (xs.indexOf) { return xs.indexOf(x); }
	    for (var i = 0, l = xs.length; i < l; i++) {
	        if (xs[i] === x) { return i; }
	    }
	    return -1;
	}

	function isMap(x) {
	    if (!mapSize || !x || typeof x !== 'object') {
	        return false;
	    }
	    try {
	        mapSize.call(x);
	        try {
	            setSize.call(x);
	        } catch (s) {
	            return true;
	        }
	        return x instanceof Map; // core-js workaround, pre-v2.5.0
	    } catch (e) {}
	    return false;
	}

	function isWeakMap(x) {
	    if (!weakMapHas || !x || typeof x !== 'object') {
	        return false;
	    }
	    try {
	        weakMapHas.call(x, weakMapHas);
	        try {
	            weakSetHas.call(x, weakSetHas);
	        } catch (s) {
	            return true;
	        }
	        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
	    } catch (e) {}
	    return false;
	}

	function isWeakRef(x) {
	    if (!weakRefDeref || !x || typeof x !== 'object') {
	        return false;
	    }
	    try {
	        weakRefDeref.call(x);
	        return true;
	    } catch (e) {}
	    return false;
	}

	function isSet(x) {
	    if (!setSize || !x || typeof x !== 'object') {
	        return false;
	    }
	    try {
	        setSize.call(x);
	        try {
	            mapSize.call(x);
	        } catch (m) {
	            return true;
	        }
	        return x instanceof Set; // core-js workaround, pre-v2.5.0
	    } catch (e) {}
	    return false;
	}

	function isWeakSet(x) {
	    if (!weakSetHas || !x || typeof x !== 'object') {
	        return false;
	    }
	    try {
	        weakSetHas.call(x, weakSetHas);
	        try {
	            weakMapHas.call(x, weakMapHas);
	        } catch (s) {
	            return true;
	        }
	        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
	    } catch (e) {}
	    return false;
	}

	function isElement(x) {
	    if (!x || typeof x !== 'object') { return false; }
	    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
	        return true;
	    }
	    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
	}

	function inspectString(str, opts) {
	    if (str.length > opts.maxStringLength) {
	        var remaining = str.length - opts.maxStringLength;
	        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
	        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
	    }
	    var quoteRE = quoteREs[opts.quoteStyle || 'single'];
	    quoteRE.lastIndex = 0;
	    // eslint-disable-next-line no-control-regex
	    var s = $replace.call($replace.call(str, quoteRE, '\\$1'), /[\x00-\x1f]/g, lowbyte);
	    return wrapQuotes(s, 'single', opts);
	}

	function lowbyte(c) {
	    var n = c.charCodeAt(0);
	    var x = {
	        8: 'b',
	        9: 't',
	        10: 'n',
	        12: 'f',
	        13: 'r'
	    }[n];
	    if (x) { return '\\' + x; }
	    return '\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));
	}

	function markBoxed(str) {
	    return 'Object(' + str + ')';
	}

	function weakCollectionOf(type) {
	    return type + ' { ? }';
	}

	function collectionOf(type, size, entries, indent) {
	    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
	    return type + ' (' + size + ') {' + joinedEntries + '}';
	}

	function singleLineValues(xs) {
	    for (var i = 0; i < xs.length; i++) {
	        if (indexOf(xs[i], '\n') >= 0) {
	            return false;
	        }
	    }
	    return true;
	}

	function getIndent(opts, depth) {
	    var baseIndent;
	    if (opts.indent === '\t') {
	        baseIndent = '\t';
	    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
	        baseIndent = $join.call(Array(opts.indent + 1), ' ');
	    } else {
	        return null;
	    }
	    return {
	        base: baseIndent,
	        prev: $join.call(Array(depth + 1), baseIndent)
	    };
	}

	function indentedJoin(xs, indent) {
	    if (xs.length === 0) { return ''; }
	    var lineJoiner = '\n' + indent.prev + indent.base;
	    return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev;
	}

	function arrObjKeys(obj, inspect) {
	    var isArr = isArray(obj);
	    var xs = [];
	    if (isArr) {
	        xs.length = obj.length;
	        for (var i = 0; i < obj.length; i++) {
	            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
	        }
	    }
	    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
	    var symMap;
	    if (hasShammedSymbols) {
	        symMap = {};
	        for (var k = 0; k < syms.length; k++) {
	            symMap['$' + syms[k]] = syms[k];
	        }
	    }

	    for (var key in obj) { // eslint-disable-line no-restricted-syntax
	        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
	        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
	        if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
	            // this is to prevent shammed Symbols, which are stored as strings, from being included in the string key section
	            continue; // eslint-disable-line no-restricted-syntax, no-continue
	        } else if ($test.call(/[^\w$]/, key)) {
	            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
	        } else {
	            xs.push(key + ': ' + inspect(obj[key], obj));
	        }
	    }
	    if (typeof gOPS === 'function') {
	        for (var j = 0; j < syms.length; j++) {
	            if (isEnumerable.call(obj, syms[j])) {
	                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
	            }
	        }
	    }
	    return xs;
	}
	return objectInspect;
}

var sideChannelList;
var hasRequiredSideChannelList;

function requireSideChannelList () {
	if (hasRequiredSideChannelList) return sideChannelList;
	hasRequiredSideChannelList = 1;

	var inspect = requireObjectInspect();

	var $TypeError = requireType();

	/*
	* This function traverses the list returning the node corresponding to the given key.
	*
	* That node is also moved to the head of the list, so that if it's accessed again we don't need to traverse the whole list.
	* By doing so, all the recently used nodes can be accessed relatively quickly.
	*/
	/** @type {import('./list.d.ts').listGetNode} */
	// eslint-disable-next-line consistent-return
	var listGetNode = function (list, key, isDelete) {
		/** @type {typeof list | NonNullable<(typeof list)['next']>} */
		var prev = list;
		/** @type {(typeof list)['next']} */
		var curr;
		// eslint-disable-next-line eqeqeq
		for (; (curr = prev.next) != null; prev = curr) {
			if (curr.key === key) {
				prev.next = curr.next;
				if (!isDelete) {
					// eslint-disable-next-line no-extra-parens
					curr.next = /** @type {NonNullable<typeof list.next>} */ (list.next);
					list.next = curr; // eslint-disable-line no-param-reassign
				}
				return curr;
			}
		}
	};

	/** @type {import('./list.d.ts').listGet} */
	var listGet = function (objects, key) {
		if (!objects) {
			return void undefined;
		}
		var node = listGetNode(objects, key);
		return node && node.value;
	};
	/** @type {import('./list.d.ts').listSet} */
	var listSet = function (objects, key, value) {
		var node = listGetNode(objects, key);
		if (node) {
			node.value = value;
		} else {
			// Prepend the new node to the beginning of the list
			objects.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */ ({ // eslint-disable-line no-param-reassign, no-extra-parens
				key: key,
				next: objects.next,
				value: value
			});
		}
	};
	/** @type {import('./list.d.ts').listHas} */
	var listHas = function (objects, key) {
		if (!objects) {
			return false;
		}
		return !!listGetNode(objects, key);
	};
	/** @type {import('./list.d.ts').listDelete} */
	// eslint-disable-next-line consistent-return
	var listDelete = function (objects, key) {
		if (objects) {
			return listGetNode(objects, key, true);
		}
	};

	/** @type {import('.')} */
	sideChannelList = function getSideChannelList() {
		/** @typedef {ReturnType<typeof getSideChannelList>} Channel */
		/** @typedef {Parameters<Channel['get']>[0]} K */
		/** @typedef {Parameters<Channel['set']>[1]} V */

		/** @type {import('./list.d.ts').RootNode<V, K> | undefined} */ var $o;

		/** @type {Channel} */
		var channel = {
			assert: function (key) {
				if (!channel.has(key)) {
					throw new $TypeError('Side channel does not contain ' + inspect(key));
				}
			},
			'delete': function (key) {
				var root = $o && $o.next;
				var deletedNode = listDelete($o, key);
				if (deletedNode && root && root === deletedNode) {
					$o = void undefined;
				}
				return !!deletedNode;
			},
			get: function (key) {
				return listGet($o, key);
			},
			has: function (key) {
				return listHas($o, key);
			},
			set: function (key, value) {
				if (!$o) {
					// Initialize the linked list as an empty node, so that we don't have to special-case handling of the first node: we can always refer to it as (previous node).next, instead of something like (list).head
					$o = {
						next: void undefined
					};
				}
				// eslint-disable-next-line no-extra-parens
				listSet(/** @type {NonNullable<typeof $o>} */ ($o), key, value);
			}
		};
		// @ts-expect-error TODO: figure out why this is erroring
		return channel;
	};
	return sideChannelList;
}

var callBound;
var hasRequiredCallBound;

function requireCallBound () {
	if (hasRequiredCallBound) return callBound;
	hasRequiredCallBound = 1;

	var GetIntrinsic = getIntrinsic;

	var callBindBasic = requireCallBindApplyHelpers();

	/** @type {(thisArg: string, searchString: string, position?: number) => number} */
	var $indexOf = callBindBasic([GetIntrinsic('%String.prototype.indexOf%')]);

	/** @type {import('.')} */
	callBound = function callBoundIntrinsic(name, allowMissing) {
		/* eslint no-extra-parens: 0 */

		var intrinsic = /** @type {(this: unknown, ...args: unknown[]) => unknown} */ (GetIntrinsic(name, !!allowMissing));
		if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
			return callBindBasic(/** @type {const} */ ([intrinsic]));
		}
		return intrinsic;
	};
	return callBound;
}

var sideChannelMap;
var hasRequiredSideChannelMap;

function requireSideChannelMap () {
	if (hasRequiredSideChannelMap) return sideChannelMap;
	hasRequiredSideChannelMap = 1;

	var GetIntrinsic = getIntrinsic;
	var callBound = requireCallBound();
	var inspect = requireObjectInspect();

	var $TypeError = requireType();
	var $Map = GetIntrinsic('%Map%', true);

	/** @type {<K, V>(thisArg: Map<K, V>, key: K) => V} */
	var $mapGet = callBound('Map.prototype.get', true);
	/** @type {<K, V>(thisArg: Map<K, V>, key: K, value: V) => void} */
	var $mapSet = callBound('Map.prototype.set', true);
	/** @type {<K, V>(thisArg: Map<K, V>, key: K) => boolean} */
	var $mapHas = callBound('Map.prototype.has', true);
	/** @type {<K, V>(thisArg: Map<K, V>, key: K) => boolean} */
	var $mapDelete = callBound('Map.prototype.delete', true);
	/** @type {<K, V>(thisArg: Map<K, V>) => number} */
	var $mapSize = callBound('Map.prototype.size', true);

	/** @type {import('.')} */
	sideChannelMap = !!$Map && /** @type {Exclude<import('.'), false>} */ function getSideChannelMap() {
		/** @typedef {ReturnType<typeof getSideChannelMap>} Channel */
		/** @typedef {Parameters<Channel['get']>[0]} K */
		/** @typedef {Parameters<Channel['set']>[1]} V */

		/** @type {Map<K, V> | undefined} */ var $m;

		/** @type {Channel} */
		var channel = {
			assert: function (key) {
				if (!channel.has(key)) {
					throw new $TypeError('Side channel does not contain ' + inspect(key));
				}
			},
			'delete': function (key) {
				if ($m) {
					var result = $mapDelete($m, key);
					if ($mapSize($m) === 0) {
						$m = void undefined;
					}
					return result;
				}
				return false;
			},
			get: function (key) { // eslint-disable-line consistent-return
				if ($m) {
					return $mapGet($m, key);
				}
			},
			has: function (key) {
				if ($m) {
					return $mapHas($m, key);
				}
				return false;
			},
			set: function (key, value) {
				if (!$m) {
					// @ts-expect-error TS can't handle narrowing a variable inside a closure
					$m = new $Map();
				}
				$mapSet($m, key, value);
			}
		};

		// @ts-expect-error TODO: figure out why TS is erroring here
		return channel;
	};
	return sideChannelMap;
}

var sideChannelWeakmap;
var hasRequiredSideChannelWeakmap;

function requireSideChannelWeakmap () {
	if (hasRequiredSideChannelWeakmap) return sideChannelWeakmap;
	hasRequiredSideChannelWeakmap = 1;

	var GetIntrinsic = getIntrinsic;
	var callBound = requireCallBound();
	var inspect = requireObjectInspect();
	var getSideChannelMap = requireSideChannelMap();

	var $TypeError = requireType();
	var $WeakMap = GetIntrinsic('%WeakMap%', true);

	/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => V} */
	var $weakMapGet = callBound('WeakMap.prototype.get', true);
	/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K, value: V) => void} */
	var $weakMapSet = callBound('WeakMap.prototype.set', true);
	/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => boolean} */
	var $weakMapHas = callBound('WeakMap.prototype.has', true);
	/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => boolean} */
	var $weakMapDelete = callBound('WeakMap.prototype.delete', true);

	/** @type {import('.')} */
	sideChannelWeakmap = $WeakMap
		? /** @type {Exclude<import('.'), false>} */ function getSideChannelWeakMap() {
			/** @typedef {ReturnType<typeof getSideChannelWeakMap>} Channel */
			/** @typedef {Parameters<Channel['get']>[0]} K */
			/** @typedef {Parameters<Channel['set']>[1]} V */

			/** @type {WeakMap<K & object, V> | undefined} */ var $wm;
			/** @type {Channel | undefined} */ var $m;

			/** @type {Channel} */
			var channel = {
				assert: function (key) {
					if (!channel.has(key)) {
						throw new $TypeError('Side channel does not contain ' + inspect(key));
					}
				},
				'delete': function (key) {
					if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
						if ($wm) {
							return $weakMapDelete($wm, key);
						}
					} else if (getSideChannelMap) {
						if ($m) {
							return $m['delete'](key);
						}
					}
					return false;
				},
				get: function (key) {
					if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
						if ($wm) {
							return $weakMapGet($wm, key);
						}
					}
					return $m && $m.get(key);
				},
				has: function (key) {
					if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
						if ($wm) {
							return $weakMapHas($wm, key);
						}
					}
					return !!$m && $m.has(key);
				},
				set: function (key, value) {
					if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
						if (!$wm) {
							$wm = new $WeakMap();
						}
						$weakMapSet($wm, key, value);
					} else if (getSideChannelMap) {
						if (!$m) {
							$m = getSideChannelMap();
						}
						// eslint-disable-next-line no-extra-parens
						/** @type {NonNullable<typeof $m>} */ ($m).set(key, value);
					}
				}
			};

			// @ts-expect-error TODO: figure out why this is erroring
			return channel;
		}
		: getSideChannelMap;
	return sideChannelWeakmap;
}

var sideChannel;
var hasRequiredSideChannel;

function requireSideChannel () {
	if (hasRequiredSideChannel) return sideChannel;
	hasRequiredSideChannel = 1;

	var $TypeError = requireType();
	var inspect = requireObjectInspect();
	var getSideChannelList = requireSideChannelList();
	var getSideChannelMap = requireSideChannelMap();
	var getSideChannelWeakMap = requireSideChannelWeakmap();

	var makeChannel = getSideChannelWeakMap || getSideChannelMap || getSideChannelList;

	/** @type {import('.')} */
	sideChannel = function getSideChannel() {
		/** @typedef {ReturnType<typeof getSideChannel>} Channel */

		/** @type {Channel | undefined} */ var $channelData;

		/** @type {Channel} */
		var channel = {
			assert: function (key) {
				if (!channel.has(key)) {
					throw new $TypeError('Side channel does not contain ' + inspect(key));
				}
			},
			'delete': function (key) {
				return !!$channelData && $channelData['delete'](key);
			},
			get: function (key) {
				return $channelData && $channelData.get(key);
			},
			has: function (key) {
				return !!$channelData && $channelData.has(key);
			},
			set: function (key, value) {
				if (!$channelData) {
					$channelData = makeChannel();
				}

				$channelData.set(key, value);
			}
		};
		// @ts-expect-error TODO: figure out why this is erroring
		return channel;
	};
	return sideChannel;
}

var formats;
var hasRequiredFormats;

function requireFormats () {
	if (hasRequiredFormats) return formats;
	hasRequiredFormats = 1;

	var replace = String.prototype.replace;
	var percentTwenties = /%20/g;

	var Format = {
	    RFC1738: 'RFC1738',
	    RFC3986: 'RFC3986'
	};

	formats = {
	    'default': Format.RFC3986,
	    formatters: {
	        RFC1738: function (value) {
	            return replace.call(value, percentTwenties, '+');
	        },
	        RFC3986: function (value) {
	            return String(value);
	        }
	    },
	    RFC1738: Format.RFC1738,
	    RFC3986: Format.RFC3986
	};
	return formats;
}

var utils;
var hasRequiredUtils;

function requireUtils () {
	if (hasRequiredUtils) return utils;
	hasRequiredUtils = 1;

	var formats = requireFormats();

	var has = Object.prototype.hasOwnProperty;
	var isArray = Array.isArray;

	var hexTable = (function () {
	    var array = [];
	    for (var i = 0; i < 256; ++i) {
	        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
	    }

	    return array;
	}());

	var compactQueue = function compactQueue(queue) {
	    while (queue.length > 1) {
	        var item = queue.pop();
	        var obj = item.obj[item.prop];

	        if (isArray(obj)) {
	            var compacted = [];

	            for (var j = 0; j < obj.length; ++j) {
	                if (typeof obj[j] !== 'undefined') {
	                    compacted.push(obj[j]);
	                }
	            }

	            item.obj[item.prop] = compacted;
	        }
	    }
	};

	var arrayToObject = function arrayToObject(source, options) {
	    var obj = options && options.plainObjects ? { __proto__: null } : {};
	    for (var i = 0; i < source.length; ++i) {
	        if (typeof source[i] !== 'undefined') {
	            obj[i] = source[i];
	        }
	    }

	    return obj;
	};

	var merge = function merge(target, source, options) {
	    /* eslint no-param-reassign: 0 */
	    if (!source) {
	        return target;
	    }

	    if (typeof source !== 'object' && typeof source !== 'function') {
	        if (isArray(target)) {
	            target.push(source);
	        } else if (target && typeof target === 'object') {
	            if (
	                (options && (options.plainObjects || options.allowPrototypes))
	                || !has.call(Object.prototype, source)
	            ) {
	                target[source] = true;
	            }
	        } else {
	            return [target, source];
	        }

	        return target;
	    }

	    if (!target || typeof target !== 'object') {
	        return [target].concat(source);
	    }

	    var mergeTarget = target;
	    if (isArray(target) && !isArray(source)) {
	        mergeTarget = arrayToObject(target, options);
	    }

	    if (isArray(target) && isArray(source)) {
	        source.forEach(function (item, i) {
	            if (has.call(target, i)) {
	                var targetItem = target[i];
	                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
	                    target[i] = merge(targetItem, item, options);
	                } else {
	                    target.push(item);
	                }
	            } else {
	                target[i] = item;
	            }
	        });
	        return target;
	    }

	    return Object.keys(source).reduce(function (acc, key) {
	        var value = source[key];

	        if (has.call(acc, key)) {
	            acc[key] = merge(acc[key], value, options);
	        } else {
	            acc[key] = value;
	        }
	        return acc;
	    }, mergeTarget);
	};

	var assign = function assignSingleSource(target, source) {
	    return Object.keys(source).reduce(function (acc, key) {
	        acc[key] = source[key];
	        return acc;
	    }, target);
	};

	var decode = function (str, defaultDecoder, charset) {
	    var strWithoutPlus = str.replace(/\+/g, ' ');
	    if (charset === 'iso-8859-1') {
	        // unescape never throws, no try...catch needed:
	        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
	    }
	    // utf-8
	    try {
	        return decodeURIComponent(strWithoutPlus);
	    } catch (e) {
	        return strWithoutPlus;
	    }
	};

	var limit = 1024;

	/* eslint operator-linebreak: [2, "before"] */

	var encode = function encode(str, defaultEncoder, charset, kind, format) {
	    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
	    // It has been adapted here for stricter adherence to RFC 3986
	    if (str.length === 0) {
	        return str;
	    }

	    var string = str;
	    if (typeof str === 'symbol') {
	        string = Symbol.prototype.toString.call(str);
	    } else if (typeof str !== 'string') {
	        string = String(str);
	    }

	    if (charset === 'iso-8859-1') {
	        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
	            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
	        });
	    }

	    var out = '';
	    for (var j = 0; j < string.length; j += limit) {
	        var segment = string.length >= limit ? string.slice(j, j + limit) : string;
	        var arr = [];

	        for (var i = 0; i < segment.length; ++i) {
	            var c = segment.charCodeAt(i);
	            if (
	                c === 0x2D // -
	                || c === 0x2E // .
	                || c === 0x5F // _
	                || c === 0x7E // ~
	                || (c >= 0x30 && c <= 0x39) // 0-9
	                || (c >= 0x41 && c <= 0x5A) // a-z
	                || (c >= 0x61 && c <= 0x7A) // A-Z
	                || (format === formats.RFC1738 && (c === 0x28 || c === 0x29)) // ( )
	            ) {
	                arr[arr.length] = segment.charAt(i);
	                continue;
	            }

	            if (c < 0x80) {
	                arr[arr.length] = hexTable[c];
	                continue;
	            }

	            if (c < 0x800) {
	                arr[arr.length] = hexTable[0xC0 | (c >> 6)]
	                    + hexTable[0x80 | (c & 0x3F)];
	                continue;
	            }

	            if (c < 0xD800 || c >= 0xE000) {
	                arr[arr.length] = hexTable[0xE0 | (c >> 12)]
	                    + hexTable[0x80 | ((c >> 6) & 0x3F)]
	                    + hexTable[0x80 | (c & 0x3F)];
	                continue;
	            }

	            i += 1;
	            c = 0x10000 + (((c & 0x3FF) << 10) | (segment.charCodeAt(i) & 0x3FF));

	            arr[arr.length] = hexTable[0xF0 | (c >> 18)]
	                + hexTable[0x80 | ((c >> 12) & 0x3F)]
	                + hexTable[0x80 | ((c >> 6) & 0x3F)]
	                + hexTable[0x80 | (c & 0x3F)];
	        }

	        out += arr.join('');
	    }

	    return out;
	};

	var compact = function compact(value) {
	    var queue = [{ obj: { o: value }, prop: 'o' }];
	    var refs = [];

	    for (var i = 0; i < queue.length; ++i) {
	        var item = queue[i];
	        var obj = item.obj[item.prop];

	        var keys = Object.keys(obj);
	        for (var j = 0; j < keys.length; ++j) {
	            var key = keys[j];
	            var val = obj[key];
	            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
	                queue.push({ obj: obj, prop: key });
	                refs.push(val);
	            }
	        }
	    }

	    compactQueue(queue);

	    return value;
	};

	var isRegExp = function isRegExp(obj) {
	    return Object.prototype.toString.call(obj) === '[object RegExp]';
	};

	var isBuffer = function isBuffer(obj) {
	    if (!obj || typeof obj !== 'object') {
	        return false;
	    }

	    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
	};

	var combine = function combine(a, b) {
	    return [].concat(a, b);
	};

	var maybeMap = function maybeMap(val, fn) {
	    if (isArray(val)) {
	        var mapped = [];
	        for (var i = 0; i < val.length; i += 1) {
	            mapped.push(fn(val[i]));
	        }
	        return mapped;
	    }
	    return fn(val);
	};

	utils = {
	    arrayToObject: arrayToObject,
	    assign: assign,
	    combine: combine,
	    compact: compact,
	    decode: decode,
	    encode: encode,
	    isBuffer: isBuffer,
	    isRegExp: isRegExp,
	    maybeMap: maybeMap,
	    merge: merge
	};
	return utils;
}

var stringify_1;
var hasRequiredStringify;

function requireStringify () {
	if (hasRequiredStringify) return stringify_1;
	hasRequiredStringify = 1;

	var getSideChannel = requireSideChannel();
	var utils = requireUtils();
	var formats = requireFormats();
	var has = Object.prototype.hasOwnProperty;

	var arrayPrefixGenerators = {
	    brackets: function brackets(prefix) {
	        return prefix + '[]';
	    },
	    comma: 'comma',
	    indices: function indices(prefix, key) {
	        return prefix + '[' + key + ']';
	    },
	    repeat: function repeat(prefix) {
	        return prefix;
	    }
	};

	var isArray = Array.isArray;
	var push = Array.prototype.push;
	var pushToArray = function (arr, valueOrArray) {
	    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
	};

	var toISO = Date.prototype.toISOString;

	var defaultFormat = formats['default'];
	var defaults = {
	    addQueryPrefix: false,
	    allowDots: false,
	    allowEmptyArrays: false,
	    arrayFormat: 'indices',
	    charset: 'utf-8',
	    charsetSentinel: false,
	    commaRoundTrip: false,
	    delimiter: '&',
	    encode: true,
	    encodeDotInKeys: false,
	    encoder: utils.encode,
	    encodeValuesOnly: false,
	    filter: void undefined,
	    format: defaultFormat,
	    formatter: formats.formatters[defaultFormat],
	    // deprecated
	    indices: false,
	    serializeDate: function serializeDate(date) {
	        return toISO.call(date);
	    },
	    skipNulls: false,
	    strictNullHandling: false
	};

	var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
	    return typeof v === 'string'
	        || typeof v === 'number'
	        || typeof v === 'boolean'
	        || typeof v === 'symbol'
	        || typeof v === 'bigint';
	};

	var sentinel = {};

	var stringify = function stringify(
	    object,
	    prefix,
	    generateArrayPrefix,
	    commaRoundTrip,
	    allowEmptyArrays,
	    strictNullHandling,
	    skipNulls,
	    encodeDotInKeys,
	    encoder,
	    filter,
	    sort,
	    allowDots,
	    serializeDate,
	    format,
	    formatter,
	    encodeValuesOnly,
	    charset,
	    sideChannel
	) {
	    var obj = object;

	    var tmpSc = sideChannel;
	    var step = 0;
	    var findFlag = false;
	    while ((tmpSc = tmpSc.get(sentinel)) !== void undefined && !findFlag) {
	        // Where object last appeared in the ref tree
	        var pos = tmpSc.get(object);
	        step += 1;
	        if (typeof pos !== 'undefined') {
	            if (pos === step) {
	                throw new RangeError('Cyclic object value');
	            } else {
	                findFlag = true; // Break while
	            }
	        }
	        if (typeof tmpSc.get(sentinel) === 'undefined') {
	            step = 0;
	        }
	    }

	    if (typeof filter === 'function') {
	        obj = filter(prefix, obj);
	    } else if (obj instanceof Date) {
	        obj = serializeDate(obj);
	    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
	        obj = utils.maybeMap(obj, function (value) {
	            if (value instanceof Date) {
	                return serializeDate(value);
	            }
	            return value;
	        });
	    }

	    if (obj === null) {
	        if (strictNullHandling) {
	            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
	        }

	        obj = '';
	    }

	    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
	        if (encoder) {
	            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
	            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))];
	        }
	        return [formatter(prefix) + '=' + formatter(String(obj))];
	    }

	    var values = [];

	    if (typeof obj === 'undefined') {
	        return values;
	    }

	    var objKeys;
	    if (generateArrayPrefix === 'comma' && isArray(obj)) {
	        // we need to join elements in
	        if (encodeValuesOnly && encoder) {
	            obj = utils.maybeMap(obj, encoder);
	        }
	        objKeys = [{ value: obj.length > 0 ? obj.join(',') || null : void undefined }];
	    } else if (isArray(filter)) {
	        objKeys = filter;
	    } else {
	        var keys = Object.keys(obj);
	        objKeys = sort ? keys.sort(sort) : keys;
	    }

	    var encodedPrefix = encodeDotInKeys ? String(prefix).replace(/\./g, '%2E') : String(prefix);

	    var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? encodedPrefix + '[]' : encodedPrefix;

	    if (allowEmptyArrays && isArray(obj) && obj.length === 0) {
	        return adjustedPrefix + '[]';
	    }

	    for (var j = 0; j < objKeys.length; ++j) {
	        var key = objKeys[j];
	        var value = typeof key === 'object' && key && typeof key.value !== 'undefined'
	            ? key.value
	            : obj[key];

	        if (skipNulls && value === null) {
	            continue;
	        }

	        var encodedKey = allowDots && encodeDotInKeys ? String(key).replace(/\./g, '%2E') : String(key);
	        var keyPrefix = isArray(obj)
	            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix
	            : adjustedPrefix + (allowDots ? '.' + encodedKey : '[' + encodedKey + ']');

	        sideChannel.set(object, step);
	        var valueSideChannel = getSideChannel();
	        valueSideChannel.set(sentinel, sideChannel);
	        pushToArray(values, stringify(
	            value,
	            keyPrefix,
	            generateArrayPrefix,
	            commaRoundTrip,
	            allowEmptyArrays,
	            strictNullHandling,
	            skipNulls,
	            encodeDotInKeys,
	            generateArrayPrefix === 'comma' && encodeValuesOnly && isArray(obj) ? null : encoder,
	            filter,
	            sort,
	            allowDots,
	            serializeDate,
	            format,
	            formatter,
	            encodeValuesOnly,
	            charset,
	            valueSideChannel
	        ));
	    }

	    return values;
	};

	var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
	    if (!opts) {
	        return defaults;
	    }

	    if (typeof opts.allowEmptyArrays !== 'undefined' && typeof opts.allowEmptyArrays !== 'boolean') {
	        throw new TypeError('`allowEmptyArrays` option can only be `true` or `false`, when provided');
	    }

	    if (typeof opts.encodeDotInKeys !== 'undefined' && typeof opts.encodeDotInKeys !== 'boolean') {
	        throw new TypeError('`encodeDotInKeys` option can only be `true` or `false`, when provided');
	    }

	    if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
	        throw new TypeError('Encoder has to be a function.');
	    }

	    var charset = opts.charset || defaults.charset;
	    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
	        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
	    }

	    var format = formats['default'];
	    if (typeof opts.format !== 'undefined') {
	        if (!has.call(formats.formatters, opts.format)) {
	            throw new TypeError('Unknown format option provided.');
	        }
	        format = opts.format;
	    }
	    var formatter = formats.formatters[format];

	    var filter = defaults.filter;
	    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
	        filter = opts.filter;
	    }

	    var arrayFormat;
	    if (opts.arrayFormat in arrayPrefixGenerators) {
	        arrayFormat = opts.arrayFormat;
	    } else if ('indices' in opts) {
	        arrayFormat = opts.indices ? 'indices' : 'repeat';
	    } else {
	        arrayFormat = defaults.arrayFormat;
	    }

	    if ('commaRoundTrip' in opts && typeof opts.commaRoundTrip !== 'boolean') {
	        throw new TypeError('`commaRoundTrip` must be a boolean, or absent');
	    }

	    var allowDots = typeof opts.allowDots === 'undefined' ? opts.encodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;

	    return {
	        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
	        allowDots: allowDots,
	        allowEmptyArrays: typeof opts.allowEmptyArrays === 'boolean' ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
	        arrayFormat: arrayFormat,
	        charset: charset,
	        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
	        commaRoundTrip: !!opts.commaRoundTrip,
	        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
	        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
	        encodeDotInKeys: typeof opts.encodeDotInKeys === 'boolean' ? opts.encodeDotInKeys : defaults.encodeDotInKeys,
	        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
	        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
	        filter: filter,
	        format: format,
	        formatter: formatter,
	        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
	        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
	        sort: typeof opts.sort === 'function' ? opts.sort : null,
	        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
	    };
	};

	stringify_1 = function (object, opts) {
	    var obj = object;
	    var options = normalizeStringifyOptions(opts);

	    var objKeys;
	    var filter;

	    if (typeof options.filter === 'function') {
	        filter = options.filter;
	        obj = filter('', obj);
	    } else if (isArray(options.filter)) {
	        filter = options.filter;
	        objKeys = filter;
	    }

	    var keys = [];

	    if (typeof obj !== 'object' || obj === null) {
	        return '';
	    }

	    var generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
	    var commaRoundTrip = generateArrayPrefix === 'comma' && options.commaRoundTrip;

	    if (!objKeys) {
	        objKeys = Object.keys(obj);
	    }

	    if (options.sort) {
	        objKeys.sort(options.sort);
	    }

	    var sideChannel = getSideChannel();
	    for (var i = 0; i < objKeys.length; ++i) {
	        var key = objKeys[i];
	        var value = obj[key];

	        if (options.skipNulls && value === null) {
	            continue;
	        }
	        pushToArray(keys, stringify(
	            value,
	            key,
	            generateArrayPrefix,
	            commaRoundTrip,
	            options.allowEmptyArrays,
	            options.strictNullHandling,
	            options.skipNulls,
	            options.encodeDotInKeys,
	            options.encode ? options.encoder : null,
	            options.filter,
	            options.sort,
	            options.allowDots,
	            options.serializeDate,
	            options.format,
	            options.formatter,
	            options.encodeValuesOnly,
	            options.charset,
	            sideChannel
	        ));
	    }

	    var joined = keys.join(options.delimiter);
	    var prefix = options.addQueryPrefix === true ? '?' : '';

	    if (options.charsetSentinel) {
	        if (options.charset === 'iso-8859-1') {
	            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
	            prefix += 'utf8=%26%2310003%3B&';
	        } else {
	            // encodeURIComponent('✓')
	            prefix += 'utf8=%E2%9C%93&';
	        }
	    }

	    return joined.length > 0 ? prefix + joined : '';
	};
	return stringify_1;
}

var parse$7;
var hasRequiredParse;

function requireParse () {
	if (hasRequiredParse) return parse$7;
	hasRequiredParse = 1;

	var utils = requireUtils();

	var has = Object.prototype.hasOwnProperty;
	var isArray = Array.isArray;

	var defaults = {
	    allowDots: false,
	    allowEmptyArrays: false,
	    allowPrototypes: false,
	    allowSparse: false,
	    arrayLimit: 20,
	    charset: 'utf-8',
	    charsetSentinel: false,
	    comma: false,
	    decodeDotInKeys: false,
	    decoder: utils.decode,
	    delimiter: '&',
	    depth: 5,
	    duplicates: 'combine',
	    ignoreQueryPrefix: false,
	    interpretNumericEntities: false,
	    parameterLimit: 1000,
	    parseArrays: true,
	    plainObjects: false,
	    strictDepth: false,
	    strictNullHandling: false,
	    throwOnLimitExceeded: false
	};

	var interpretNumericEntities = function (str) {
	    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
	        return String.fromCharCode(parseInt(numberStr, 10));
	    });
	};

	var parseArrayValue = function (val, options, currentArrayLength) {
	    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
	        return val.split(',');
	    }

	    if (options.throwOnLimitExceeded && currentArrayLength >= options.arrayLimit) {
	        throw new RangeError('Array limit exceeded. Only ' + options.arrayLimit + ' element' + (options.arrayLimit === 1 ? '' : 's') + ' allowed in an array.');
	    }

	    return val;
	};

	// This is what browsers will submit when the ✓ character occurs in an
	// application/x-www-form-urlencoded body and the encoding of the page containing
	// the form is iso-8859-1, or when the submitted form has an accept-charset
	// attribute of iso-8859-1. Presumably also with other charsets that do not contain
	// the ✓ character, such as us-ascii.
	var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

	// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
	var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

	var parseValues = function parseQueryStringValues(str, options) {
	    var obj = { __proto__: null };

	    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
	    cleanStr = cleanStr.replace(/%5B/gi, '[').replace(/%5D/gi, ']');

	    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
	    var parts = cleanStr.split(
	        options.delimiter,
	        options.throwOnLimitExceeded ? limit + 1 : limit
	    );

	    if (options.throwOnLimitExceeded && parts.length > limit) {
	        throw new RangeError('Parameter limit exceeded. Only ' + limit + ' parameter' + (limit === 1 ? '' : 's') + ' allowed.');
	    }

	    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
	    var i;

	    var charset = options.charset;
	    if (options.charsetSentinel) {
	        for (i = 0; i < parts.length; ++i) {
	            if (parts[i].indexOf('utf8=') === 0) {
	                if (parts[i] === charsetSentinel) {
	                    charset = 'utf-8';
	                } else if (parts[i] === isoSentinel) {
	                    charset = 'iso-8859-1';
	                }
	                skipIndex = i;
	                i = parts.length; // The eslint settings do not allow break;
	            }
	        }
	    }

	    for (i = 0; i < parts.length; ++i) {
	        if (i === skipIndex) {
	            continue;
	        }
	        var part = parts[i];

	        var bracketEqualsPos = part.indexOf(']=');
	        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

	        var key;
	        var val;
	        if (pos === -1) {
	            key = options.decoder(part, defaults.decoder, charset, 'key');
	            val = options.strictNullHandling ? null : '';
	        } else {
	            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');

	            val = utils.maybeMap(
	                parseArrayValue(
	                    part.slice(pos + 1),
	                    options,
	                    isArray(obj[key]) ? obj[key].length : 0
	                ),
	                function (encodedVal) {
	                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
	                }
	            );
	        }

	        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
	            val = interpretNumericEntities(String(val));
	        }

	        if (part.indexOf('[]=') > -1) {
	            val = isArray(val) ? [val] : val;
	        }

	        var existing = has.call(obj, key);
	        if (existing && options.duplicates === 'combine') {
	            obj[key] = utils.combine(obj[key], val);
	        } else if (!existing || options.duplicates === 'last') {
	            obj[key] = val;
	        }
	    }

	    return obj;
	};

	var parseObject = function (chain, val, options, valuesParsed) {
	    var currentArrayLength = 0;
	    if (chain.length > 0 && chain[chain.length - 1] === '[]') {
	        var parentKey = chain.slice(0, -1).join('');
	        currentArrayLength = Array.isArray(val) && val[parentKey] ? val[parentKey].length : 0;
	    }

	    var leaf = valuesParsed ? val : parseArrayValue(val, options, currentArrayLength);

	    for (var i = chain.length - 1; i >= 0; --i) {
	        var obj;
	        var root = chain[i];

	        if (root === '[]' && options.parseArrays) {
	            obj = options.allowEmptyArrays && (leaf === '' || (options.strictNullHandling && leaf === null))
	                ? []
	                : utils.combine([], leaf);
	        } else {
	            obj = options.plainObjects ? { __proto__: null } : {};
	            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
	            var decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, '.') : cleanRoot;
	            var index = parseInt(decodedRoot, 10);
	            if (!options.parseArrays && decodedRoot === '') {
	                obj = { 0: leaf };
	            } else if (
	                !isNaN(index)
	                && root !== decodedRoot
	                && String(index) === decodedRoot
	                && index >= 0
	                && (options.parseArrays && index <= options.arrayLimit)
	            ) {
	                obj = [];
	                obj[index] = leaf;
	            } else if (decodedRoot !== '__proto__') {
	                obj[decodedRoot] = leaf;
	            }
	        }

	        leaf = obj;
	    }

	    return leaf;
	};

	var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
	    if (!givenKey) {
	        return;
	    }

	    // Transform dot notation to bracket notation
	    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

	    // The regex chunks

	    var brackets = /(\[[^[\]]*])/;
	    var child = /(\[[^[\]]*])/g;

	    // Get the parent

	    var segment = options.depth > 0 && brackets.exec(key);
	    var parent = segment ? key.slice(0, segment.index) : key;

	    // Stash the parent if it exists

	    var keys = [];
	    if (parent) {
	        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
	        if (!options.plainObjects && has.call(Object.prototype, parent)) {
	            if (!options.allowPrototypes) {
	                return;
	            }
	        }

	        keys.push(parent);
	    }

	    // Loop through children appending to the array until we hit depth

	    var i = 0;
	    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
	        i += 1;
	        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
	            if (!options.allowPrototypes) {
	                return;
	            }
	        }
	        keys.push(segment[1]);
	    }

	    // If there's a remainder, check strictDepth option for throw, else just add whatever is left

	    if (segment) {
	        if (options.strictDepth === true) {
	            throw new RangeError('Input depth exceeded depth option of ' + options.depth + ' and strictDepth is true');
	        }
	        keys.push('[' + key.slice(segment.index) + ']');
	    }

	    return parseObject(keys, val, options, valuesParsed);
	};

	var normalizeParseOptions = function normalizeParseOptions(opts) {
	    if (!opts) {
	        return defaults;
	    }

	    if (typeof opts.allowEmptyArrays !== 'undefined' && typeof opts.allowEmptyArrays !== 'boolean') {
	        throw new TypeError('`allowEmptyArrays` option can only be `true` or `false`, when provided');
	    }

	    if (typeof opts.decodeDotInKeys !== 'undefined' && typeof opts.decodeDotInKeys !== 'boolean') {
	        throw new TypeError('`decodeDotInKeys` option can only be `true` or `false`, when provided');
	    }

	    if (opts.decoder !== null && typeof opts.decoder !== 'undefined' && typeof opts.decoder !== 'function') {
	        throw new TypeError('Decoder has to be a function.');
	    }

	    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
	        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
	    }

	    if (typeof opts.throwOnLimitExceeded !== 'undefined' && typeof opts.throwOnLimitExceeded !== 'boolean') {
	        throw new TypeError('`throwOnLimitExceeded` option must be a boolean');
	    }

	    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

	    var duplicates = typeof opts.duplicates === 'undefined' ? defaults.duplicates : opts.duplicates;

	    if (duplicates !== 'combine' && duplicates !== 'first' && duplicates !== 'last') {
	        throw new TypeError('The duplicates option must be either combine, first, or last');
	    }

	    var allowDots = typeof opts.allowDots === 'undefined' ? opts.decodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;

	    return {
	        allowDots: allowDots,
	        allowEmptyArrays: typeof opts.allowEmptyArrays === 'boolean' ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
	        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
	        allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,
	        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
	        charset: charset,
	        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
	        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
	        decodeDotInKeys: typeof opts.decodeDotInKeys === 'boolean' ? opts.decodeDotInKeys : defaults.decodeDotInKeys,
	        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
	        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
	        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
	        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
	        duplicates: duplicates,
	        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
	        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
	        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
	        parseArrays: opts.parseArrays !== false,
	        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
	        strictDepth: typeof opts.strictDepth === 'boolean' ? !!opts.strictDepth : defaults.strictDepth,
	        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling,
	        throwOnLimitExceeded: typeof opts.throwOnLimitExceeded === 'boolean' ? opts.throwOnLimitExceeded : false
	    };
	};

	parse$7 = function (str, opts) {
	    var options = normalizeParseOptions(opts);

	    if (str === '' || str === null || typeof str === 'undefined') {
	        return options.plainObjects ? { __proto__: null } : {};
	    }

	    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
	    var obj = options.plainObjects ? { __proto__: null } : {};

	    // Iterate over the keys and setup the new object

	    var keys = Object.keys(tempObj);
	    for (var i = 0; i < keys.length; ++i) {
	        var key = keys[i];
	        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
	        obj = utils.merge(obj, newObj, options);
	    }

	    if (options.allowSparse === true) {
	        return obj;
	    }

	    return utils.compact(obj);
	};
	return parse$7;
}

var lib;
var hasRequiredLib;

function requireLib () {
	if (hasRequiredLib) return lib;
	hasRequiredLib = 1;

	var stringify = requireStringify();
	var parse = requireParse();
	var formats = requireFormats();

	lib = {
	    formats: formats,
	    parse: parse,
	    stringify: stringify
	};
	return lib;
}

/*!
 * body-parser
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */

var urlencoded_1;
var hasRequiredUrlencoded;

function requireUrlencoded () {
	if (hasRequiredUrlencoded) return urlencoded_1;
	hasRequiredUrlencoded = 1;

	/**
	 * Module dependencies.
	 * @private
	 */

	var createError = requireHttpErrors();
	var debug = requireSrc()('body-parser:urlencoded');
	var isFinished = requireOnFinished().isFinished;
	var read = requireRead();
	var typeis = requireTypeIs();
	var qs = requireLib();
	var { getCharset, normalizeOptions } = requireUtils$1();

	/**
	 * Module exports.
	 */

	urlencoded_1 = urlencoded;

	/**
	 * Create a middleware to parse urlencoded bodies.
	 *
	 * @param {object} [options]
	 * @return {function}
	 * @public
	 */

	function urlencoded (options) {
	  var { inflate, limit, verify, shouldParse } = normalizeOptions(options, 'application/x-www-form-urlencoded');

	  var defaultCharset = options?.defaultCharset || 'utf-8';
	  if (defaultCharset !== 'utf-8' && defaultCharset !== 'iso-8859-1') {
	    throw new TypeError('option defaultCharset must be either utf-8 or iso-8859-1')
	  }

	  // create the appropriate query parser
	  var queryparse = createQueryParser(options);

	  function parse (body, encoding) {
	    return body.length
	      ? queryparse(body, encoding)
	      : {}
	  }

	  return function urlencodedParser (req, res, next) {
	    if (isFinished(req)) {
	      debug('body already parsed');
	      next();
	      return
	    }

	    if (!('body' in req)) {
	      req.body = undefined;
	    }

	    // skip requests without bodies
	    if (!typeis.hasBody(req)) {
	      debug('skip empty body');
	      next();
	      return
	    }

	    debug('content-type %j', req.headers['content-type']);

	    // determine if request should be parsed
	    if (!shouldParse(req)) {
	      debug('skip parsing');
	      next();
	      return
	    }

	    // assert charset
	    var charset = getCharset(req) || defaultCharset;
	    if (charset !== 'utf-8' && charset !== 'iso-8859-1') {
	      debug('invalid charset');
	      next(createError(415, 'unsupported charset "' + charset.toUpperCase() + '"', {
	        charset: charset,
	        type: 'charset.unsupported'
	      }));
	      return
	    }

	    // read
	    read(req, res, next, parse, debug, {
	      encoding: charset,
	      inflate,
	      limit,
	      verify
	    });
	  }
	}

	/**
	 * Get the extended query parser.
	 *
	 * @param {object} options
	 */

	function createQueryParser (options) {
	  var extended = Boolean(options?.extended);
	  var parameterLimit = options?.parameterLimit !== undefined
	    ? options?.parameterLimit
	    : 1000;
	  var charsetSentinel = options?.charsetSentinel;
	  var interpretNumericEntities = options?.interpretNumericEntities;
	  var depth = extended ? (options?.depth !== undefined ? options?.depth : 32) : 0;

	  if (isNaN(parameterLimit) || parameterLimit < 1) {
	    throw new TypeError('option parameterLimit must be a positive number')
	  }

	  if (isNaN(depth) || depth < 0) {
	    throw new TypeError('option depth must be a zero or a positive number')
	  }

	  if (isFinite(parameterLimit)) {
	    parameterLimit = parameterLimit | 0;
	  }

	  return function queryparse (body, encoding) {
	    var paramCount = parameterCount(body, parameterLimit);

	    if (paramCount === undefined) {
	      debug('too many parameters');
	      throw createError(413, 'too many parameters', {
	        type: 'parameters.too.many'
	      })
	    }

	    var arrayLimit = extended ? Math.max(100, paramCount) : 0;

	    debug('parse ' + (extended ? 'extended ' : '') + 'urlencoding');
	    try {
	      return qs.parse(body, {
	        allowPrototypes: true,
	        arrayLimit: arrayLimit,
	        depth: depth,
	        charsetSentinel: charsetSentinel,
	        interpretNumericEntities: interpretNumericEntities,
	        charset: encoding,
	        parameterLimit: parameterLimit,
	        strictDepth: true
	      })
	    } catch (err) {
	      if (err instanceof RangeError) {
	        throw createError(400, 'The input exceeded the depth', {
	          type: 'querystring.parse.rangeError'
	        })
	      } else {
	        throw err
	      }
	    }
	  }
	}

	/**
	 * Count the number of parameters, stopping once limit reached
	 *
	 * @param {string} body
	 * @param {number} limit
	 * @api private
	 */

	function parameterCount (body, limit) {
	  var len = body.split('&').length;

	  return len > limit ? undefined : len - 1
	}
	return urlencoded_1;
}

/*!
 * body-parser
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */

(function (module, exports) {

	/**
	 * @typedef Parsers
	 * @type {function}
	 * @property {function} json
	 * @property {function} raw
	 * @property {function} text
	 * @property {function} urlencoded
	 */

	/**
	 * Module exports.
	 * @type {Parsers}
	 */

	exports = module.exports = bodyParser;

	/**
	 * JSON parser.
	 * @public
	 */

	Object.defineProperty(exports, 'json', {
	  configurable: true,
	  enumerable: true,
	  get: () => requireJson()
	});

	/**
	 * Raw parser.
	 * @public
	 */

	Object.defineProperty(exports, 'raw', {
	  configurable: true,
	  enumerable: true,
	  get: () => requireRaw()
	});

	/**
	 * Text parser.
	 * @public
	 */

	Object.defineProperty(exports, 'text', {
	  configurable: true,
	  enumerable: true,
	  get: () => requireText()
	});

	/**
	 * URL-encoded parser.
	 * @public
	 */

	Object.defineProperty(exports, 'urlencoded', {
	  configurable: true,
	  enumerable: true,
	  get: () => requireUrlencoded()
	});

	/**
	 * Create a middleware to parse json and urlencoded bodies.
	 *
	 * @param {object} [options]
	 * @return {function}
	 * @deprecated
	 * @public
	 */

	function bodyParser () {
	  throw new Error('The bodyParser() generic has been split into individual middleware to use instead.')
	} 
} (bodyParser$1, bodyParser$1.exports));

var bodyParserExports = bodyParser$1.exports;
var bodyParser = /*@__PURE__*/getDefaultExportFromCjs(bodyParserExports);

var jws$3 = {};

var safeBuffer = {exports: {}};

/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */

(function (module, exports) {
	/* eslint-disable node/no-deprecated-api */
	var buffer = require$$0$4;
	var Buffer = buffer.Buffer;

	// alternative to using Object.keys for old browsers
	function copyProps (src, dst) {
	  for (var key in src) {
	    dst[key] = src[key];
	  }
	}
	if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
	  module.exports = buffer;
	} else {
	  // Copy properties from require('buffer')
	  copyProps(buffer, exports);
	  exports.Buffer = SafeBuffer;
	}

	function SafeBuffer (arg, encodingOrOffset, length) {
	  return Buffer(arg, encodingOrOffset, length)
	}

	SafeBuffer.prototype = Object.create(Buffer.prototype);

	// Copy static methods from Buffer
	copyProps(Buffer, SafeBuffer);

	SafeBuffer.from = function (arg, encodingOrOffset, length) {
	  if (typeof arg === 'number') {
	    throw new TypeError('Argument must not be a number')
	  }
	  return Buffer(arg, encodingOrOffset, length)
	};

	SafeBuffer.alloc = function (size, fill, encoding) {
	  if (typeof size !== 'number') {
	    throw new TypeError('Argument must be a number')
	  }
	  var buf = Buffer(size);
	  if (fill !== undefined) {
	    if (typeof encoding === 'string') {
	      buf.fill(fill, encoding);
	    } else {
	      buf.fill(fill);
	    }
	  } else {
	    buf.fill(0);
	  }
	  return buf
	};

	SafeBuffer.allocUnsafe = function (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('Argument must be a number')
	  }
	  return Buffer(size)
	};

	SafeBuffer.allocUnsafeSlow = function (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('Argument must be a number')
	  }
	  return buffer.SlowBuffer(size)
	}; 
} (safeBuffer, safeBuffer.exports));

var safeBufferExports = safeBuffer.exports;

/*global module, process*/

var Buffer$7 = safeBufferExports.Buffer;
var Stream$2 = stream;
var util$3 = require$$1$2;

function DataStream$2(data) {
  this.buffer = null;
  this.writable = true;
  this.readable = true;

  // No input
  if (!data) {
    this.buffer = Buffer$7.alloc(0);
    return this;
  }

  // Stream
  if (typeof data.pipe === 'function') {
    this.buffer = Buffer$7.alloc(0);
    data.pipe(this);
    return this;
  }

  // Buffer or String
  // or Object (assumedly a passworded key)
  if (data.length || typeof data === 'object') {
    this.buffer = data;
    this.writable = false;
    process.nextTick(function () {
      this.emit('end', data);
      this.readable = false;
      this.emit('close');
    }.bind(this));
    return this;
  }

  throw new TypeError('Unexpected data type ('+ typeof data + ')');
}
util$3.inherits(DataStream$2, Stream$2);

DataStream$2.prototype.write = function write(data) {
  this.buffer = Buffer$7.concat([this.buffer, Buffer$7.from(data)]);
  this.emit('data', data);
};

DataStream$2.prototype.end = function end(data) {
  if (data)
    this.write(data);
  this.emit('end', data);
  this.emit('close');
  this.writable = false;
  this.readable = false;
};

var dataStream = DataStream$2;

/*jshint node:true */
var Buffer$6 = require$$0$4.Buffer; // browserify
var SlowBuffer = require$$0$4.SlowBuffer;

var bufferEqualConstantTime = bufferEq;

function bufferEq(a, b) {

  // shortcutting on type is necessary for correctness
  if (!Buffer$6.isBuffer(a) || !Buffer$6.isBuffer(b)) {
    return false;
  }

  // buffer sizes should be well-known information, so despite this
  // shortcutting, it doesn't leak any information about the *contents* of the
  // buffers.
  if (a.length !== b.length) {
    return false;
  }

  var c = 0;
  for (var i = 0; i < a.length; i++) {
    /*jshint bitwise:false */
    c |= a[i] ^ b[i]; // XOR
  }
  return c === 0;
}

bufferEq.install = function() {
  Buffer$6.prototype.equal = SlowBuffer.prototype.equal = function equal(that) {
    return bufferEq(this, that);
  };
};

var origBufEqual = Buffer$6.prototype.equal;
var origSlowBufEqual = SlowBuffer.prototype.equal;
bufferEq.restore = function() {
  Buffer$6.prototype.equal = origBufEqual;
  SlowBuffer.prototype.equal = origSlowBufEqual;
};

function getParamSize(keySize) {
	var result = ((keySize / 8) | 0) + (keySize % 8 === 0 ? 0 : 1);
	return result;
}

var paramBytesForAlg = {
	ES256: getParamSize(256),
	ES384: getParamSize(384),
	ES512: getParamSize(521)
};

function getParamBytesForAlg$1(alg) {
	var paramBytes = paramBytesForAlg[alg];
	if (paramBytes) {
		return paramBytes;
	}

	throw new Error('Unknown algorithm "' + alg + '"');
}

var paramBytesForAlg_1 = getParamBytesForAlg$1;

var Buffer$5 = safeBufferExports.Buffer;

var getParamBytesForAlg = paramBytesForAlg_1;

var MAX_OCTET = 0x80,
	CLASS_UNIVERSAL = 0,
	PRIMITIVE_BIT = 0x20,
	TAG_SEQ = 0x10,
	TAG_INT = 0x02,
	ENCODED_TAG_SEQ = (TAG_SEQ | PRIMITIVE_BIT) | (CLASS_UNIVERSAL << 6),
	ENCODED_TAG_INT = TAG_INT | (CLASS_UNIVERSAL << 6);

function base64Url(base64) {
	return base64
		.replace(/=/g, '')
		.replace(/\+/g, '-')
		.replace(/\//g, '_');
}

function signatureAsBuffer(signature) {
	if (Buffer$5.isBuffer(signature)) {
		return signature;
	} else if ('string' === typeof signature) {
		return Buffer$5.from(signature, 'base64');
	}

	throw new TypeError('ECDSA signature must be a Base64 string or a Buffer');
}

function derToJose(signature, alg) {
	signature = signatureAsBuffer(signature);
	var paramBytes = getParamBytesForAlg(alg);

	// the DER encoded param should at most be the param size, plus a padding
	// zero, since due to being a signed integer
	var maxEncodedParamLength = paramBytes + 1;

	var inputLength = signature.length;

	var offset = 0;
	if (signature[offset++] !== ENCODED_TAG_SEQ) {
		throw new Error('Could not find expected "seq"');
	}

	var seqLength = signature[offset++];
	if (seqLength === (MAX_OCTET | 1)) {
		seqLength = signature[offset++];
	}

	if (inputLength - offset < seqLength) {
		throw new Error('"seq" specified length of "' + seqLength + '", only "' + (inputLength - offset) + '" remaining');
	}

	if (signature[offset++] !== ENCODED_TAG_INT) {
		throw new Error('Could not find expected "int" for "r"');
	}

	var rLength = signature[offset++];

	if (inputLength - offset - 2 < rLength) {
		throw new Error('"r" specified length of "' + rLength + '", only "' + (inputLength - offset - 2) + '" available');
	}

	if (maxEncodedParamLength < rLength) {
		throw new Error('"r" specified length of "' + rLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
	}

	var rOffset = offset;
	offset += rLength;

	if (signature[offset++] !== ENCODED_TAG_INT) {
		throw new Error('Could not find expected "int" for "s"');
	}

	var sLength = signature[offset++];

	if (inputLength - offset !== sLength) {
		throw new Error('"s" specified length of "' + sLength + '", expected "' + (inputLength - offset) + '"');
	}

	if (maxEncodedParamLength < sLength) {
		throw new Error('"s" specified length of "' + sLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
	}

	var sOffset = offset;
	offset += sLength;

	if (offset !== inputLength) {
		throw new Error('Expected to consume entire buffer, but "' + (inputLength - offset) + '" bytes remain');
	}

	var rPadding = paramBytes - rLength,
		sPadding = paramBytes - sLength;

	var dst = Buffer$5.allocUnsafe(rPadding + rLength + sPadding + sLength);

	for (offset = 0; offset < rPadding; ++offset) {
		dst[offset] = 0;
	}
	signature.copy(dst, offset, rOffset + Math.max(-rPadding, 0), rOffset + rLength);

	offset = paramBytes;

	for (var o = offset; offset < o + sPadding; ++offset) {
		dst[offset] = 0;
	}
	signature.copy(dst, offset, sOffset + Math.max(-sPadding, 0), sOffset + sLength);

	dst = dst.toString('base64');
	dst = base64Url(dst);

	return dst;
}

function countPadding(buf, start, stop) {
	var padding = 0;
	while (start + padding < stop && buf[start + padding] === 0) {
		++padding;
	}

	var needsSign = buf[start + padding] >= MAX_OCTET;
	if (needsSign) {
		--padding;
	}

	return padding;
}

function joseToDer(signature, alg) {
	signature = signatureAsBuffer(signature);
	var paramBytes = getParamBytesForAlg(alg);

	var signatureBytes = signature.length;
	if (signatureBytes !== paramBytes * 2) {
		throw new TypeError('"' + alg + '" signatures must be "' + paramBytes * 2 + '" bytes, saw "' + signatureBytes + '"');
	}

	var rPadding = countPadding(signature, 0, paramBytes);
	var sPadding = countPadding(signature, paramBytes, signature.length);
	var rLength = paramBytes - rPadding;
	var sLength = paramBytes - sPadding;

	var rsBytes = 1 + 1 + rLength + 1 + 1 + sLength;

	var shortLength = rsBytes < MAX_OCTET;

	var dst = Buffer$5.allocUnsafe((shortLength ? 2 : 3) + rsBytes);

	var offset = 0;
	dst[offset++] = ENCODED_TAG_SEQ;
	if (shortLength) {
		// Bit 8 has value "0"
		// bits 7-1 give the length.
		dst[offset++] = rsBytes;
	} else {
		// Bit 8 of first octet has value "1"
		// bits 7-1 give the number of additional length octets.
		dst[offset++] = MAX_OCTET	| 1;
		// length, base 256
		dst[offset++] = rsBytes & 0xff;
	}
	dst[offset++] = ENCODED_TAG_INT;
	dst[offset++] = rLength;
	if (rPadding < 0) {
		dst[offset++] = 0;
		offset += signature.copy(dst, offset, 0, paramBytes);
	} else {
		offset += signature.copy(dst, offset, rPadding, paramBytes);
	}
	dst[offset++] = ENCODED_TAG_INT;
	dst[offset++] = sLength;
	if (sPadding < 0) {
		dst[offset++] = 0;
		signature.copy(dst, offset, paramBytes);
	} else {
		signature.copy(dst, offset, paramBytes + sPadding);
	}

	return dst;
}

var ecdsaSigFormatter = {
	derToJose: derToJose,
	joseToDer: joseToDer
};

var bufferEqual = bufferEqualConstantTime;
var Buffer$4 = safeBufferExports.Buffer;
var crypto = crypto$1;
var formatEcdsa = ecdsaSigFormatter;
var util$2 = require$$1$2;

var MSG_INVALID_ALGORITHM = '"%s" is not a valid algorithm.\n  Supported algorithms are:\n  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".';
var MSG_INVALID_SECRET = 'secret must be a string or buffer';
var MSG_INVALID_VERIFIER_KEY = 'key must be a string or a buffer';
var MSG_INVALID_SIGNER_KEY = 'key must be a string, a buffer or an object';

var supportsKeyObjects = typeof crypto.createPublicKey === 'function';
if (supportsKeyObjects) {
  MSG_INVALID_VERIFIER_KEY += ' or a KeyObject';
  MSG_INVALID_SECRET += 'or a KeyObject';
}

function checkIsPublicKey(key) {
  if (Buffer$4.isBuffer(key)) {
    return;
  }

  if (typeof key === 'string') {
    return;
  }

  if (!supportsKeyObjects) {
    throw typeError(MSG_INVALID_VERIFIER_KEY);
  }

  if (typeof key !== 'object') {
    throw typeError(MSG_INVALID_VERIFIER_KEY);
  }

  if (typeof key.type !== 'string') {
    throw typeError(MSG_INVALID_VERIFIER_KEY);
  }

  if (typeof key.asymmetricKeyType !== 'string') {
    throw typeError(MSG_INVALID_VERIFIER_KEY);
  }

  if (typeof key.export !== 'function') {
    throw typeError(MSG_INVALID_VERIFIER_KEY);
  }
}
function checkIsPrivateKey(key) {
  if (Buffer$4.isBuffer(key)) {
    return;
  }

  if (typeof key === 'string') {
    return;
  }

  if (typeof key === 'object') {
    return;
  }

  throw typeError(MSG_INVALID_SIGNER_KEY);
}
function checkIsSecretKey(key) {
  if (Buffer$4.isBuffer(key)) {
    return;
  }

  if (typeof key === 'string') {
    return key;
  }

  if (!supportsKeyObjects) {
    throw typeError(MSG_INVALID_SECRET);
  }

  if (typeof key !== 'object') {
    throw typeError(MSG_INVALID_SECRET);
  }

  if (key.type !== 'secret') {
    throw typeError(MSG_INVALID_SECRET);
  }

  if (typeof key.export !== 'function') {
    throw typeError(MSG_INVALID_SECRET);
  }
}

function fromBase64(base64) {
  return base64
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

function toBase64(base64url) {
  base64url = base64url.toString();

  var padding = 4 - base64url.length % 4;
  if (padding !== 4) {
    for (var i = 0; i < padding; ++i) {
      base64url += '=';
    }
  }

  return base64url
    .replace(/\-/g, '+')
    .replace(/_/g, '/');
}

function typeError(template) {
  var args = [].slice.call(arguments, 1);
  var errMsg = util$2.format.bind(util$2, template).apply(null, args);
  return new TypeError(errMsg);
}

function bufferOrString(obj) {
  return Buffer$4.isBuffer(obj) || typeof obj === 'string';
}

function normalizeInput(thing) {
  if (!bufferOrString(thing))
    thing = JSON.stringify(thing);
  return thing;
}

function createHmacSigner(bits) {
  return function sign(thing, secret) {
    checkIsSecretKey(secret);
    thing = normalizeInput(thing);
    var hmac = crypto.createHmac('sha' + bits, secret);
    var sig = (hmac.update(thing), hmac.digest('base64'));
    return fromBase64(sig);
  }
}

function createHmacVerifier(bits) {
  return function verify(thing, signature, secret) {
    var computedSig = createHmacSigner(bits)(thing, secret);
    return bufferEqual(Buffer$4.from(signature), Buffer$4.from(computedSig));
  }
}

function createKeySigner(bits) {
 return function sign(thing, privateKey) {
    checkIsPrivateKey(privateKey);
    thing = normalizeInput(thing);
    // Even though we are specifying "RSA" here, this works with ECDSA
    // keys as well.
    var signer = crypto.createSign('RSA-SHA' + bits);
    var sig = (signer.update(thing), signer.sign(privateKey, 'base64'));
    return fromBase64(sig);
  }
}

function createKeyVerifier(bits) {
  return function verify(thing, signature, publicKey) {
    checkIsPublicKey(publicKey);
    thing = normalizeInput(thing);
    signature = toBase64(signature);
    var verifier = crypto.createVerify('RSA-SHA' + bits);
    verifier.update(thing);
    return verifier.verify(publicKey, signature, 'base64');
  }
}

function createPSSKeySigner(bits) {
  return function sign(thing, privateKey) {
    checkIsPrivateKey(privateKey);
    thing = normalizeInput(thing);
    var signer = crypto.createSign('RSA-SHA' + bits);
    var sig = (signer.update(thing), signer.sign({
      key: privateKey,
      padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
      saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
    }, 'base64'));
    return fromBase64(sig);
  }
}

function createPSSKeyVerifier(bits) {
  return function verify(thing, signature, publicKey) {
    checkIsPublicKey(publicKey);
    thing = normalizeInput(thing);
    signature = toBase64(signature);
    var verifier = crypto.createVerify('RSA-SHA' + bits);
    verifier.update(thing);
    return verifier.verify({
      key: publicKey,
      padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
      saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
    }, signature, 'base64');
  }
}

function createECDSASigner(bits) {
  var inner = createKeySigner(bits);
  return function sign() {
    var signature = inner.apply(null, arguments);
    signature = formatEcdsa.derToJose(signature, 'ES' + bits);
    return signature;
  };
}

function createECDSAVerifer(bits) {
  var inner = createKeyVerifier(bits);
  return function verify(thing, signature, publicKey) {
    signature = formatEcdsa.joseToDer(signature, 'ES' + bits).toString('base64');
    var result = inner(thing, signature, publicKey);
    return result;
  };
}

function createNoneSigner() {
  return function sign() {
    return '';
  }
}

function createNoneVerifier() {
  return function verify(thing, signature) {
    return signature === '';
  }
}

var jwa$2 = function jwa(algorithm) {
  var signerFactories = {
    hs: createHmacSigner,
    rs: createKeySigner,
    ps: createPSSKeySigner,
    es: createECDSASigner,
    none: createNoneSigner,
  };
  var verifierFactories = {
    hs: createHmacVerifier,
    rs: createKeyVerifier,
    ps: createPSSKeyVerifier,
    es: createECDSAVerifer,
    none: createNoneVerifier,
  };
  var match = algorithm.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/i);
  if (!match)
    throw typeError(MSG_INVALID_ALGORITHM, algorithm);
  var algo = (match[1] || match[3]).toLowerCase();
  var bits = match[2];

  return {
    sign: signerFactories[algo](bits),
    verify: verifierFactories[algo](bits),
  }
};

/*global module*/

var Buffer$3 = require$$0$4.Buffer;

var tostring = function toString(obj) {
  if (typeof obj === 'string')
    return obj;
  if (typeof obj === 'number' || Buffer$3.isBuffer(obj))
    return obj.toString();
  return JSON.stringify(obj);
};

/*global module*/

var Buffer$2 = safeBufferExports.Buffer;
var DataStream$1 = dataStream;
var jwa$1 = jwa$2;
var Stream$1 = stream;
var toString$1 = tostring;
var util$1 = require$$1$2;

function base64url(string, encoding) {
  return Buffer$2
    .from(string, encoding)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

function jwsSecuredInput(header, payload, encoding) {
  encoding = encoding || 'utf8';
  var encodedHeader = base64url(toString$1(header), 'binary');
  var encodedPayload = base64url(toString$1(payload), encoding);
  return util$1.format('%s.%s', encodedHeader, encodedPayload);
}

function jwsSign(opts) {
  var header = opts.header;
  var payload = opts.payload;
  var secretOrKey = opts.secret || opts.privateKey;
  var encoding = opts.encoding;
  var algo = jwa$1(header.alg);
  var securedInput = jwsSecuredInput(header, payload, encoding);
  var signature = algo.sign(securedInput, secretOrKey);
  return util$1.format('%s.%s', securedInput, signature);
}

function SignStream$1(opts) {
  var secret = opts.secret||opts.privateKey||opts.key;
  var secretStream = new DataStream$1(secret);
  this.readable = true;
  this.header = opts.header;
  this.encoding = opts.encoding;
  this.secret = this.privateKey = this.key = secretStream;
  this.payload = new DataStream$1(opts.payload);
  this.secret.once('close', function () {
    if (!this.payload.writable && this.readable)
      this.sign();
  }.bind(this));

  this.payload.once('close', function () {
    if (!this.secret.writable && this.readable)
      this.sign();
  }.bind(this));
}
util$1.inherits(SignStream$1, Stream$1);

SignStream$1.prototype.sign = function sign() {
  try {
    var signature = jwsSign({
      header: this.header,
      payload: this.payload.buffer,
      secret: this.secret.buffer,
      encoding: this.encoding
    });
    this.emit('done', signature);
    this.emit('data', signature);
    this.emit('end');
    this.readable = false;
    return signature;
  } catch (e) {
    this.readable = false;
    this.emit('error', e);
    this.emit('close');
  }
};

SignStream$1.sign = jwsSign;

var signStream = SignStream$1;

/*global module*/

var Buffer$1 = safeBufferExports.Buffer;
var DataStream = dataStream;
var jwa = jwa$2;
var Stream = stream;
var toString = tostring;
var util = require$$1$2;
var JWS_REGEX = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;

function isObject$3(thing) {
  return Object.prototype.toString.call(thing) === '[object Object]';
}

function safeJsonParse(thing) {
  if (isObject$3(thing))
    return thing;
  try { return JSON.parse(thing); }
  catch (e) { return undefined; }
}

function headerFromJWS(jwsSig) {
  var encodedHeader = jwsSig.split('.', 1)[0];
  return safeJsonParse(Buffer$1.from(encodedHeader, 'base64').toString('binary'));
}

function securedInputFromJWS(jwsSig) {
  return jwsSig.split('.', 2).join('.');
}

function signatureFromJWS(jwsSig) {
  return jwsSig.split('.')[2];
}

function payloadFromJWS(jwsSig, encoding) {
  encoding = encoding || 'utf8';
  var payload = jwsSig.split('.')[1];
  return Buffer$1.from(payload, 'base64').toString(encoding);
}

function isValidJws(string) {
  return JWS_REGEX.test(string) && !!headerFromJWS(string);
}

function jwsVerify(jwsSig, algorithm, secretOrKey) {
  if (!algorithm) {
    var err = new Error("Missing algorithm parameter for jws.verify");
    err.code = "MISSING_ALGORITHM";
    throw err;
  }
  jwsSig = toString(jwsSig);
  var signature = signatureFromJWS(jwsSig);
  var securedInput = securedInputFromJWS(jwsSig);
  var algo = jwa(algorithm);
  return algo.verify(securedInput, signature, secretOrKey);
}

function jwsDecode(jwsSig, opts) {
  opts = opts || {};
  jwsSig = toString(jwsSig);

  if (!isValidJws(jwsSig))
    return null;

  var header = headerFromJWS(jwsSig);

  if (!header)
    return null;

  var payload = payloadFromJWS(jwsSig);
  if (header.typ === 'JWT' || opts.json)
    payload = JSON.parse(payload, opts.encoding);

  return {
    header: header,
    payload: payload,
    signature: signatureFromJWS(jwsSig)
  };
}

function VerifyStream$1(opts) {
  opts = opts || {};
  var secretOrKey = opts.secret||opts.publicKey||opts.key;
  var secretStream = new DataStream(secretOrKey);
  this.readable = true;
  this.algorithm = opts.algorithm;
  this.encoding = opts.encoding;
  this.secret = this.publicKey = this.key = secretStream;
  this.signature = new DataStream(opts.signature);
  this.secret.once('close', function () {
    if (!this.signature.writable && this.readable)
      this.verify();
  }.bind(this));

  this.signature.once('close', function () {
    if (!this.secret.writable && this.readable)
      this.verify();
  }.bind(this));
}
util.inherits(VerifyStream$1, Stream);
VerifyStream$1.prototype.verify = function verify() {
  try {
    var valid = jwsVerify(this.signature.buffer, this.algorithm, this.key.buffer);
    var obj = jwsDecode(this.signature.buffer, this.encoding);
    this.emit('done', valid, obj);
    this.emit('data', valid);
    this.emit('end');
    this.readable = false;
    return valid;
  } catch (e) {
    this.readable = false;
    this.emit('error', e);
    this.emit('close');
  }
};

VerifyStream$1.decode = jwsDecode;
VerifyStream$1.isValid = isValidJws;
VerifyStream$1.verify = jwsVerify;

var verifyStream = VerifyStream$1;

/*global exports*/

var SignStream = signStream;
var VerifyStream = verifyStream;

var ALGORITHMS = [
  'HS256', 'HS384', 'HS512',
  'RS256', 'RS384', 'RS512',
  'PS256', 'PS384', 'PS512',
  'ES256', 'ES384', 'ES512'
];

jws$3.ALGORITHMS = ALGORITHMS;
jws$3.sign = SignStream.sign;
jws$3.verify = VerifyStream.verify;
jws$3.decode = VerifyStream.decode;
jws$3.isValid = VerifyStream.isValid;
jws$3.createSign = function createSign(opts) {
  return new SignStream(opts);
};
jws$3.createVerify = function createVerify(opts) {
  return new VerifyStream(opts);
};

var jws$2 = jws$3;

var decode$1 = function (jwt, options) {
  options = options || {};
  var decoded = jws$2.decode(jwt, options);
  if (!decoded) { return null; }
  var payload = decoded.payload;

  //try parse the payload
  if(typeof payload === 'string') {
    try {
      var obj = JSON.parse(payload);
      if(obj !== null && typeof obj === 'object') {
        payload = obj;
      }
    } catch (e) { }
  }

  //return header if `complete` option is enabled.  header includes claims
  //such as `kid` and `alg` used to select the key within a JWKS needed to
  //verify the signature
  if (options.complete === true) {
    return {
      header: decoded.header,
      payload: payload,
      signature: decoded.signature
    };
  }
  return payload;
};

var JsonWebTokenError$3 = function (message, error) {
  Error.call(this, message);
  if(Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  }
  this.name = 'JsonWebTokenError';
  this.message = message;
  if (error) this.inner = error;
};

JsonWebTokenError$3.prototype = Object.create(Error.prototype);
JsonWebTokenError$3.prototype.constructor = JsonWebTokenError$3;

var JsonWebTokenError_1 = JsonWebTokenError$3;

var JsonWebTokenError$2 = JsonWebTokenError_1;

var NotBeforeError$1 = function (message, date) {
  JsonWebTokenError$2.call(this, message);
  this.name = 'NotBeforeError';
  this.date = date;
};

NotBeforeError$1.prototype = Object.create(JsonWebTokenError$2.prototype);

NotBeforeError$1.prototype.constructor = NotBeforeError$1;

var NotBeforeError_1 = NotBeforeError$1;

var JsonWebTokenError$1 = JsonWebTokenError_1;

var TokenExpiredError$1 = function (message, expiredAt) {
  JsonWebTokenError$1.call(this, message);
  this.name = 'TokenExpiredError';
  this.expiredAt = expiredAt;
};

TokenExpiredError$1.prototype = Object.create(JsonWebTokenError$1.prototype);

TokenExpiredError$1.prototype.constructor = TokenExpiredError$1;

var TokenExpiredError_1 = TokenExpiredError$1;

var ms = ms$1;

var timespan$2 = function (time, iat) {
  var timestamp = iat || Math.floor(Date.now() / 1000);

  if (typeof time === 'string') {
    var milliseconds = ms(time);
    if (typeof milliseconds === 'undefined') {
      return;
    }
    return Math.floor(timestamp + milliseconds / 1000);
  } else if (typeof time === 'number') {
    return timestamp + time;
  } else {
    return;
  }

};

var re$2 = {exports: {}};

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
const SEMVER_SPEC_VERSION = '2.0.0';

const MAX_LENGTH$1 = 256;
const MAX_SAFE_INTEGER$2 = Number.MAX_SAFE_INTEGER ||
/* istanbul ignore next */ 9007199254740991;

// Max safe segment length for coercion.
const MAX_SAFE_COMPONENT_LENGTH = 16;

// Max safe length for a build identifier. The max length minus 6 characters for
// the shortest version with a build 0.0.0+BUILD.
const MAX_SAFE_BUILD_LENGTH = MAX_LENGTH$1 - 6;

const RELEASE_TYPES = [
  'major',
  'premajor',
  'minor',
  'preminor',
  'patch',
  'prepatch',
  'prerelease',
];

var constants$1 = {
  MAX_LENGTH: MAX_LENGTH$1,
  MAX_SAFE_COMPONENT_LENGTH,
  MAX_SAFE_BUILD_LENGTH,
  MAX_SAFE_INTEGER: MAX_SAFE_INTEGER$2,
  RELEASE_TYPES,
  SEMVER_SPEC_VERSION,
  FLAG_INCLUDE_PRERELEASE: 0b001,
  FLAG_LOOSE: 0b010,
};

const debug$1 = (
  typeof process === 'object' &&
  process.env &&
  process.env.NODE_DEBUG &&
  /\bsemver\b/i.test(process.env.NODE_DEBUG)
) ? (...args) => console.error('SEMVER', ...args)
  : () => {};

var debug_1 = debug$1;

(function (module, exports) {
	const {
	  MAX_SAFE_COMPONENT_LENGTH,
	  MAX_SAFE_BUILD_LENGTH,
	  MAX_LENGTH,
	} = constants$1;
	const debug = debug_1;
	exports = module.exports = {};

	// The actual regexps go on exports.re
	const re = exports.re = [];
	const safeRe = exports.safeRe = [];
	const src = exports.src = [];
	const safeSrc = exports.safeSrc = [];
	const t = exports.t = {};
	let R = 0;

	const LETTERDASHNUMBER = '[a-zA-Z0-9-]';

	// Replace some greedy regex tokens to prevent regex dos issues. These regex are
	// used internally via the safeRe object since all inputs in this library get
	// normalized first to trim and collapse all extra whitespace. The original
	// regexes are exported for userland consumption and lower level usage. A
	// future breaking change could export the safer regex only with a note that
	// all input should have extra whitespace removed.
	const safeRegexReplacements = [
	  ['\\s', 1],
	  ['\\d', MAX_LENGTH],
	  [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH],
	];

	const makeSafeRegex = (value) => {
	  for (const [token, max] of safeRegexReplacements) {
	    value = value
	      .split(`${token}*`).join(`${token}{0,${max}}`)
	      .split(`${token}+`).join(`${token}{1,${max}}`);
	  }
	  return value
	};

	const createToken = (name, value, isGlobal) => {
	  const safe = makeSafeRegex(value);
	  const index = R++;
	  debug(name, index, value);
	  t[name] = index;
	  src[index] = value;
	  safeSrc[index] = safe;
	  re[index] = new RegExp(value, isGlobal ? 'g' : undefined);
	  safeRe[index] = new RegExp(safe, isGlobal ? 'g' : undefined);
	};

	// The following Regular Expressions can be used for tokenizing,
	// validating, and parsing SemVer version strings.

	// ## Numeric Identifier
	// A single `0`, or a non-zero digit followed by zero or more digits.

	createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*');
	createToken('NUMERICIDENTIFIERLOOSE', '\\d+');

	// ## Non-numeric Identifier
	// Zero or more digits, followed by a letter or hyphen, and then zero or
	// more letters, digits, or hyphens.

	createToken('NONNUMERICIDENTIFIER', `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);

	// ## Main Version
	// Three dot-separated numeric identifiers.

	createToken('MAINVERSION', `(${src[t.NUMERICIDENTIFIER]})\\.` +
	                   `(${src[t.NUMERICIDENTIFIER]})\\.` +
	                   `(${src[t.NUMERICIDENTIFIER]})`);

	createToken('MAINVERSIONLOOSE', `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
	                        `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
	                        `(${src[t.NUMERICIDENTIFIERLOOSE]})`);

	// ## Pre-release Version Identifier
	// A numeric identifier, or a non-numeric identifier.

	createToken('PRERELEASEIDENTIFIER', `(?:${src[t.NUMERICIDENTIFIER]
	}|${src[t.NONNUMERICIDENTIFIER]})`);

	createToken('PRERELEASEIDENTIFIERLOOSE', `(?:${src[t.NUMERICIDENTIFIERLOOSE]
	}|${src[t.NONNUMERICIDENTIFIER]})`);

	// ## Pre-release Version
	// Hyphen, followed by one or more dot-separated pre-release version
	// identifiers.

	createToken('PRERELEASE', `(?:-(${src[t.PRERELEASEIDENTIFIER]
	}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);

	createToken('PRERELEASELOOSE', `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]
	}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);

	// ## Build Metadata Identifier
	// Any combination of digits, letters, or hyphens.

	createToken('BUILDIDENTIFIER', `${LETTERDASHNUMBER}+`);

	// ## Build Metadata
	// Plus sign, followed by one or more period-separated build metadata
	// identifiers.

	createToken('BUILD', `(?:\\+(${src[t.BUILDIDENTIFIER]
	}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);

	// ## Full Version String
	// A main version, followed optionally by a pre-release version and
	// build metadata.

	// Note that the only major, minor, patch, and pre-release sections of
	// the version string are capturing groups.  The build metadata is not a
	// capturing group, because it should not ever be used in version
	// comparison.

	createToken('FULLPLAIN', `v?${src[t.MAINVERSION]
	}${src[t.PRERELEASE]}?${
	  src[t.BUILD]}?`);

	createToken('FULL', `^${src[t.FULLPLAIN]}$`);

	// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
	// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
	// common in the npm registry.
	createToken('LOOSEPLAIN', `[v=\\s]*${src[t.MAINVERSIONLOOSE]
	}${src[t.PRERELEASELOOSE]}?${
	  src[t.BUILD]}?`);

	createToken('LOOSE', `^${src[t.LOOSEPLAIN]}$`);

	createToken('GTLT', '((?:<|>)?=?)');

	// Something like "2.*" or "1.2.x".
	// Note that "x.x" is a valid xRange identifer, meaning "any version"
	// Only the first item is strictly required.
	createToken('XRANGEIDENTIFIERLOOSE', `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
	createToken('XRANGEIDENTIFIER', `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);

	createToken('XRANGEPLAIN', `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})` +
	                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
	                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
	                   `(?:${src[t.PRERELEASE]})?${
	                     src[t.BUILD]}?` +
	                   `)?)?`);

	createToken('XRANGEPLAINLOOSE', `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})` +
	                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
	                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
	                        `(?:${src[t.PRERELEASELOOSE]})?${
	                          src[t.BUILD]}?` +
	                        `)?)?`);

	createToken('XRANGE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
	createToken('XRANGELOOSE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);

	// Coercion.
	// Extract anything that could conceivably be a part of a valid semver
	createToken('COERCEPLAIN', `${'(^|[^\\d])' +
	              '(\\d{1,'}${MAX_SAFE_COMPONENT_LENGTH}})` +
	              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
	              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
	createToken('COERCE', `${src[t.COERCEPLAIN]}(?:$|[^\\d])`);
	createToken('COERCEFULL', src[t.COERCEPLAIN] +
	              `(?:${src[t.PRERELEASE]})?` +
	              `(?:${src[t.BUILD]})?` +
	              `(?:$|[^\\d])`);
	createToken('COERCERTL', src[t.COERCE], true);
	createToken('COERCERTLFULL', src[t.COERCEFULL], true);

	// Tilde ranges.
	// Meaning is "reasonably at or greater than"
	createToken('LONETILDE', '(?:~>?)');

	createToken('TILDETRIM', `(\\s*)${src[t.LONETILDE]}\\s+`, true);
	exports.tildeTrimReplace = '$1~';

	createToken('TILDE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
	createToken('TILDELOOSE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);

	// Caret ranges.
	// Meaning is "at least and backwards compatible with"
	createToken('LONECARET', '(?:\\^)');

	createToken('CARETTRIM', `(\\s*)${src[t.LONECARET]}\\s+`, true);
	exports.caretTrimReplace = '$1^';

	createToken('CARET', `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
	createToken('CARETLOOSE', `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);

	// A simple gt/lt/eq thing, or just "" to indicate "any version"
	createToken('COMPARATORLOOSE', `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
	createToken('COMPARATOR', `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);

	// An expression to strip any whitespace between the gtlt and the thing
	// it modifies, so that `> 1.2.3` ==> `>1.2.3`
	createToken('COMPARATORTRIM', `(\\s*)${src[t.GTLT]
	}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
	exports.comparatorTrimReplace = '$1$2$3';

	// Something like `1.2.3 - 1.2.4`
	// Note that these all use the loose form, because they'll be
	// checked against either the strict or loose comparator form
	// later.
	createToken('HYPHENRANGE', `^\\s*(${src[t.XRANGEPLAIN]})` +
	                   `\\s+-\\s+` +
	                   `(${src[t.XRANGEPLAIN]})` +
	                   `\\s*$`);

	createToken('HYPHENRANGELOOSE', `^\\s*(${src[t.XRANGEPLAINLOOSE]})` +
	                        `\\s+-\\s+` +
	                        `(${src[t.XRANGEPLAINLOOSE]})` +
	                        `\\s*$`);

	// Star ranges basically just allow anything at all.
	createToken('STAR', '(<|>)?=?\\s*\\*');
	// >=0.0.0 is like a star
	createToken('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$');
	createToken('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$'); 
} (re$2, re$2.exports));

var reExports = re$2.exports;

// parse out just the options we care about
const looseOption = Object.freeze({ loose: true });
const emptyOpts = Object.freeze({ });
const parseOptions$1 = options => {
  if (!options) {
    return emptyOpts
  }

  if (typeof options !== 'object') {
    return looseOption
  }

  return options
};
var parseOptions_1 = parseOptions$1;

const numeric = /^[0-9]+$/;
const compareIdentifiers$1 = (a, b) => {
  const anum = numeric.test(a);
  const bnum = numeric.test(b);

  if (anum && bnum) {
    a = +a;
    b = +b;
  }

  return a === b ? 0
    : (anum && !bnum) ? -1
    : (bnum && !anum) ? 1
    : a < b ? -1
    : 1
};

const rcompareIdentifiers = (a, b) => compareIdentifiers$1(b, a);

var identifiers$1 = {
  compareIdentifiers: compareIdentifiers$1,
  rcompareIdentifiers,
};

const debug = debug_1;
const { MAX_LENGTH, MAX_SAFE_INTEGER: MAX_SAFE_INTEGER$1 } = constants$1;
const { safeRe: re$1, safeSrc: src, t: t$1 } = reExports;

const parseOptions = parseOptions_1;
const { compareIdentifiers } = identifiers$1;
let SemVer$d = class SemVer {
  constructor (version, options) {
    options = parseOptions(options);

    if (version instanceof SemVer) {
      if (version.loose === !!options.loose &&
        version.includePrerelease === !!options.includePrerelease) {
        return version
      } else {
        version = version.version;
      }
    } else if (typeof version !== 'string') {
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`)
    }

    if (version.length > MAX_LENGTH) {
      throw new TypeError(
        `version is longer than ${MAX_LENGTH} characters`
      )
    }

    debug('SemVer', version, options);
    this.options = options;
    this.loose = !!options.loose;
    // this isn't actually relevant for versions, but keep it so that we
    // don't run into trouble passing this.options around.
    this.includePrerelease = !!options.includePrerelease;

    const m = version.trim().match(options.loose ? re$1[t$1.LOOSE] : re$1[t$1.FULL]);

    if (!m) {
      throw new TypeError(`Invalid Version: ${version}`)
    }

    this.raw = version;

    // these are actually numbers
    this.major = +m[1];
    this.minor = +m[2];
    this.patch = +m[3];

    if (this.major > MAX_SAFE_INTEGER$1 || this.major < 0) {
      throw new TypeError('Invalid major version')
    }

    if (this.minor > MAX_SAFE_INTEGER$1 || this.minor < 0) {
      throw new TypeError('Invalid minor version')
    }

    if (this.patch > MAX_SAFE_INTEGER$1 || this.patch < 0) {
      throw new TypeError('Invalid patch version')
    }

    // numberify any prerelease numeric ids
    if (!m[4]) {
      this.prerelease = [];
    } else {
      this.prerelease = m[4].split('.').map((id) => {
        if (/^[0-9]+$/.test(id)) {
          const num = +id;
          if (num >= 0 && num < MAX_SAFE_INTEGER$1) {
            return num
          }
        }
        return id
      });
    }

    this.build = m[5] ? m[5].split('.') : [];
    this.format();
  }

  format () {
    this.version = `${this.major}.${this.minor}.${this.patch}`;
    if (this.prerelease.length) {
      this.version += `-${this.prerelease.join('.')}`;
    }
    return this.version
  }

  toString () {
    return this.version
  }

  compare (other) {
    debug('SemVer.compare', this.version, this.options, other);
    if (!(other instanceof SemVer)) {
      if (typeof other === 'string' && other === this.version) {
        return 0
      }
      other = new SemVer(other, this.options);
    }

    if (other.version === this.version) {
      return 0
    }

    return this.compareMain(other) || this.comparePre(other)
  }

  compareMain (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }

    return (
      compareIdentifiers(this.major, other.major) ||
      compareIdentifiers(this.minor, other.minor) ||
      compareIdentifiers(this.patch, other.patch)
    )
  }

  comparePre (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }

    // NOT having a prerelease is > having one
    if (this.prerelease.length && !other.prerelease.length) {
      return -1
    } else if (!this.prerelease.length && other.prerelease.length) {
      return 1
    } else if (!this.prerelease.length && !other.prerelease.length) {
      return 0
    }

    let i = 0;
    do {
      const a = this.prerelease[i];
      const b = other.prerelease[i];
      debug('prerelease compare', i, a, b);
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  compareBuild (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }

    let i = 0;
    do {
      const a = this.build[i];
      const b = other.build[i];
      debug('build compare', i, a, b);
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc (release, identifier, identifierBase) {
    if (release.startsWith('pre')) {
      if (!identifier && identifierBase === false) {
        throw new Error('invalid increment argument: identifier is empty')
      }
      // Avoid an invalid semver results
      if (identifier) {
        const r = new RegExp(`^${this.options.loose ? src[t$1.PRERELEASELOOSE] : src[t$1.PRERELEASE]}$`);
        const match = `-${identifier}`.match(r);
        if (!match || match[1] !== identifier) {
          throw new Error(`invalid identifier: ${identifier}`)
        }
      }
    }

    switch (release) {
      case 'premajor':
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor = 0;
        this.major++;
        this.inc('pre', identifier, identifierBase);
        break
      case 'preminor':
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor++;
        this.inc('pre', identifier, identifierBase);
        break
      case 'prepatch':
        // If this is already a prerelease, it will bump to the next version
        // drop any prereleases that might already exist, since they are not
        // relevant at this point.
        this.prerelease.length = 0;
        this.inc('patch', identifier, identifierBase);
        this.inc('pre', identifier, identifierBase);
        break
      // If the input is a non-prerelease version, this acts the same as
      // prepatch.
      case 'prerelease':
        if (this.prerelease.length === 0) {
          this.inc('patch', identifier, identifierBase);
        }
        this.inc('pre', identifier, identifierBase);
        break
      case 'release':
        if (this.prerelease.length === 0) {
          throw new Error(`version ${this.raw} is not a prerelease`)
        }
        this.prerelease.length = 0;
        break

      case 'major':
        // If this is a pre-major version, bump up to the same major version.
        // Otherwise increment major.
        // 1.0.0-5 bumps to 1.0.0
        // 1.1.0 bumps to 2.0.0
        if (
          this.minor !== 0 ||
          this.patch !== 0 ||
          this.prerelease.length === 0
        ) {
          this.major++;
        }
        this.minor = 0;
        this.patch = 0;
        this.prerelease = [];
        break
      case 'minor':
        // If this is a pre-minor version, bump up to the same minor version.
        // Otherwise increment minor.
        // 1.2.0-5 bumps to 1.2.0
        // 1.2.1 bumps to 1.3.0
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++;
        }
        this.patch = 0;
        this.prerelease = [];
        break
      case 'patch':
        // If this is not a pre-release version, it will increment the patch.
        // If it is a pre-release it will bump up to the same patch version.
        // 1.2.0-5 patches to 1.2.0
        // 1.2.0 patches to 1.2.1
        if (this.prerelease.length === 0) {
          this.patch++;
        }
        this.prerelease = [];
        break
      // This probably shouldn't be used publicly.
      // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
      case 'pre': {
        const base = Number(identifierBase) ? 1 : 0;

        if (this.prerelease.length === 0) {
          this.prerelease = [base];
        } else {
          let i = this.prerelease.length;
          while (--i >= 0) {
            if (typeof this.prerelease[i] === 'number') {
              this.prerelease[i]++;
              i = -2;
            }
          }
          if (i === -1) {
            // didn't increment anything
            if (identifier === this.prerelease.join('.') && identifierBase === false) {
              throw new Error('invalid increment argument: identifier already exists')
            }
            this.prerelease.push(base);
          }
        }
        if (identifier) {
          // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
          // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
          let prerelease = [identifier, base];
          if (identifierBase === false) {
            prerelease = [identifier];
          }
          if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = prerelease;
            }
          } else {
            this.prerelease = prerelease;
          }
        }
        break
      }
      default:
        throw new Error(`invalid increment argument: ${release}`)
    }
    this.raw = this.format();
    if (this.build.length) {
      this.raw += `+${this.build.join('.')}`;
    }
    return this
  }
};

var semver$4 = SemVer$d;

const SemVer$c = semver$4;
const parse$6 = (version, options, throwErrors = false) => {
  if (version instanceof SemVer$c) {
    return version
  }
  try {
    return new SemVer$c(version, options)
  } catch (er) {
    if (!throwErrors) {
      return null
    }
    throw er
  }
};

var parse_1 = parse$6;

const parse$5 = parse_1;
const valid$2 = (version, options) => {
  const v = parse$5(version, options);
  return v ? v.version : null
};
var valid_1 = valid$2;

const parse$4 = parse_1;
const clean$1 = (version, options) => {
  const s = parse$4(version.trim().replace(/^[=v]+/, ''), options);
  return s ? s.version : null
};
var clean_1 = clean$1;

const SemVer$b = semver$4;

const inc$1 = (version, release, options, identifier, identifierBase) => {
  if (typeof (options) === 'string') {
    identifierBase = identifier;
    identifier = options;
    options = undefined;
  }

  try {
    return new SemVer$b(
      version instanceof SemVer$b ? version.version : version,
      options
    ).inc(release, identifier, identifierBase).version
  } catch (er) {
    return null
  }
};
var inc_1 = inc$1;

const parse$3 = parse_1;

const diff$1 = (version1, version2) => {
  const v1 = parse$3(version1, null, true);
  const v2 = parse$3(version2, null, true);
  const comparison = v1.compare(v2);

  if (comparison === 0) {
    return null
  }

  const v1Higher = comparison > 0;
  const highVersion = v1Higher ? v1 : v2;
  const lowVersion = v1Higher ? v2 : v1;
  const highHasPre = !!highVersion.prerelease.length;
  const lowHasPre = !!lowVersion.prerelease.length;

  if (lowHasPre && !highHasPre) {
    // Going from prerelease -> no prerelease requires some special casing

    // If the low version has only a major, then it will always be a major
    // Some examples:
    // 1.0.0-1 -> 1.0.0
    // 1.0.0-1 -> 1.1.1
    // 1.0.0-1 -> 2.0.0
    if (!lowVersion.patch && !lowVersion.minor) {
      return 'major'
    }

    // If the main part has no difference
    if (lowVersion.compareMain(highVersion) === 0) {
      if (lowVersion.minor && !lowVersion.patch) {
        return 'minor'
      }
      return 'patch'
    }
  }

  // add the `pre` prefix if we are going to a prerelease version
  const prefix = highHasPre ? 'pre' : '';

  if (v1.major !== v2.major) {
    return prefix + 'major'
  }

  if (v1.minor !== v2.minor) {
    return prefix + 'minor'
  }

  if (v1.patch !== v2.patch) {
    return prefix + 'patch'
  }

  // high and low are preleases
  return 'prerelease'
};

var diff_1 = diff$1;

const SemVer$a = semver$4;
const major$1 = (a, loose) => new SemVer$a(a, loose).major;
var major_1 = major$1;

const SemVer$9 = semver$4;
const minor$1 = (a, loose) => new SemVer$9(a, loose).minor;
var minor_1 = minor$1;

const SemVer$8 = semver$4;
const patch$1 = (a, loose) => new SemVer$8(a, loose).patch;
var patch_1 = patch$1;

const parse$2 = parse_1;
const prerelease$1 = (version, options) => {
  const parsed = parse$2(version, options);
  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null
};
var prerelease_1 = prerelease$1;

const SemVer$7 = semver$4;
const compare$b = (a, b, loose) =>
  new SemVer$7(a, loose).compare(new SemVer$7(b, loose));

var compare_1 = compare$b;

const compare$a = compare_1;
const rcompare$1 = (a, b, loose) => compare$a(b, a, loose);
var rcompare_1 = rcompare$1;

const compare$9 = compare_1;
const compareLoose$1 = (a, b) => compare$9(a, b, true);
var compareLoose_1 = compareLoose$1;

const SemVer$6 = semver$4;
const compareBuild$3 = (a, b, loose) => {
  const versionA = new SemVer$6(a, loose);
  const versionB = new SemVer$6(b, loose);
  return versionA.compare(versionB) || versionA.compareBuild(versionB)
};
var compareBuild_1 = compareBuild$3;

const compareBuild$2 = compareBuild_1;
const sort$1 = (list, loose) => list.sort((a, b) => compareBuild$2(a, b, loose));
var sort_1 = sort$1;

const compareBuild$1 = compareBuild_1;
const rsort$1 = (list, loose) => list.sort((a, b) => compareBuild$1(b, a, loose));
var rsort_1 = rsort$1;

const compare$8 = compare_1;
const gt$4 = (a, b, loose) => compare$8(a, b, loose) > 0;
var gt_1 = gt$4;

const compare$7 = compare_1;
const lt$3 = (a, b, loose) => compare$7(a, b, loose) < 0;
var lt_1 = lt$3;

const compare$6 = compare_1;
const eq$2 = (a, b, loose) => compare$6(a, b, loose) === 0;
var eq_1 = eq$2;

const compare$5 = compare_1;
const neq$2 = (a, b, loose) => compare$5(a, b, loose) !== 0;
var neq_1 = neq$2;

const compare$4 = compare_1;
const gte$3 = (a, b, loose) => compare$4(a, b, loose) >= 0;
var gte_1 = gte$3;

const compare$3 = compare_1;
const lte$3 = (a, b, loose) => compare$3(a, b, loose) <= 0;
var lte_1 = lte$3;

const eq$1 = eq_1;
const neq$1 = neq_1;
const gt$3 = gt_1;
const gte$2 = gte_1;
const lt$2 = lt_1;
const lte$2 = lte_1;

const cmp$1 = (a, op, b, loose) => {
  switch (op) {
    case '===':
      if (typeof a === 'object') {
        a = a.version;
      }
      if (typeof b === 'object') {
        b = b.version;
      }
      return a === b

    case '!==':
      if (typeof a === 'object') {
        a = a.version;
      }
      if (typeof b === 'object') {
        b = b.version;
      }
      return a !== b

    case '':
    case '=':
    case '==':
      return eq$1(a, b, loose)

    case '!=':
      return neq$1(a, b, loose)

    case '>':
      return gt$3(a, b, loose)

    case '>=':
      return gte$2(a, b, loose)

    case '<':
      return lt$2(a, b, loose)

    case '<=':
      return lte$2(a, b, loose)

    default:
      throw new TypeError(`Invalid operator: ${op}`)
  }
};
var cmp_1 = cmp$1;

const SemVer$5 = semver$4;
const parse$1 = parse_1;
const { safeRe: re, t } = reExports;

const coerce$1 = (version, options) => {
  if (version instanceof SemVer$5) {
    return version
  }

  if (typeof version === 'number') {
    version = String(version);
  }

  if (typeof version !== 'string') {
    return null
  }

  options = options || {};

  let match = null;
  if (!options.rtl) {
    match = version.match(options.includePrerelease ? re[t.COERCEFULL] : re[t.COERCE]);
  } else {
    // Find the right-most coercible string that does not share
    // a terminus with a more left-ward coercible string.
    // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
    // With includePrerelease option set, '1.2.3.4-rc' wants to coerce '2.3.4-rc', not '2.3.4'
    //
    // Walk through the string checking with a /g regexp
    // Manually set the index so as to pick up overlapping matches.
    // Stop when we get a match that ends at the string end, since no
    // coercible string can be more right-ward without the same terminus.
    const coerceRtlRegex = options.includePrerelease ? re[t.COERCERTLFULL] : re[t.COERCERTL];
    let next;
    while ((next = coerceRtlRegex.exec(version)) &&
        (!match || match.index + match[0].length !== version.length)
    ) {
      if (!match ||
            next.index + next[0].length !== match.index + match[0].length) {
        match = next;
      }
      coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
    }
    // leave it in a clean state
    coerceRtlRegex.lastIndex = -1;
  }

  if (match === null) {
    return null
  }

  const major = match[2];
  const minor = match[3] || '0';
  const patch = match[4] || '0';
  const prerelease = options.includePrerelease && match[5] ? `-${match[5]}` : '';
  const build = options.includePrerelease && match[6] ? `+${match[6]}` : '';

  return parse$1(`${major}.${minor}.${patch}${prerelease}${build}`, options)
};
var coerce_1 = coerce$1;

class LRUCache {
  constructor () {
    this.max = 1000;
    this.map = new Map();
  }

  get (key) {
    const value = this.map.get(key);
    if (value === undefined) {
      return undefined
    } else {
      // Remove the key from the map and add it to the end
      this.map.delete(key);
      this.map.set(key, value);
      return value
    }
  }

  delete (key) {
    return this.map.delete(key)
  }

  set (key, value) {
    const deleted = this.delete(key);

    if (!deleted && value !== undefined) {
      // If cache is full, delete the least recently used item
      if (this.map.size >= this.max) {
        const firstKey = this.map.keys().next().value;
        this.delete(firstKey);
      }

      this.map.set(key, value);
    }

    return this
  }
}

var lrucache = LRUCache;

var range;
var hasRequiredRange;

function requireRange () {
	if (hasRequiredRange) return range;
	hasRequiredRange = 1;
	const SPACE_CHARACTERS = /\s+/g;

	// hoisted class for cyclic dependency
	class Range {
	  constructor (range, options) {
	    options = parseOptions(options);

	    if (range instanceof Range) {
	      if (
	        range.loose === !!options.loose &&
	        range.includePrerelease === !!options.includePrerelease
	      ) {
	        return range
	      } else {
	        return new Range(range.raw, options)
	      }
	    }

	    if (range instanceof Comparator) {
	      // just put it in the set and return
	      this.raw = range.value;
	      this.set = [[range]];
	      this.formatted = undefined;
	      return this
	    }

	    this.options = options;
	    this.loose = !!options.loose;
	    this.includePrerelease = !!options.includePrerelease;

	    // First reduce all whitespace as much as possible so we do not have to rely
	    // on potentially slow regexes like \s*. This is then stored and used for
	    // future error messages as well.
	    this.raw = range.trim().replace(SPACE_CHARACTERS, ' ');

	    // First, split on ||
	    this.set = this.raw
	      .split('||')
	      // map the range to a 2d array of comparators
	      .map(r => this.parseRange(r.trim()))
	      // throw out any comparator lists that are empty
	      // this generally means that it was not a valid range, which is allowed
	      // in loose mode, but will still throw if the WHOLE range is invalid.
	      .filter(c => c.length);

	    if (!this.set.length) {
	      throw new TypeError(`Invalid SemVer Range: ${this.raw}`)
	    }

	    // if we have any that are not the null set, throw out null sets.
	    if (this.set.length > 1) {
	      // keep the first one, in case they're all null sets
	      const first = this.set[0];
	      this.set = this.set.filter(c => !isNullSet(c[0]));
	      if (this.set.length === 0) {
	        this.set = [first];
	      } else if (this.set.length > 1) {
	        // if we have any that are *, then the range is just *
	        for (const c of this.set) {
	          if (c.length === 1 && isAny(c[0])) {
	            this.set = [c];
	            break
	          }
	        }
	      }
	    }

	    this.formatted = undefined;
	  }

	  get range () {
	    if (this.formatted === undefined) {
	      this.formatted = '';
	      for (let i = 0; i < this.set.length; i++) {
	        if (i > 0) {
	          this.formatted += '||';
	        }
	        const comps = this.set[i];
	        for (let k = 0; k < comps.length; k++) {
	          if (k > 0) {
	            this.formatted += ' ';
	          }
	          this.formatted += comps[k].toString().trim();
	        }
	      }
	    }
	    return this.formatted
	  }

	  format () {
	    return this.range
	  }

	  toString () {
	    return this.range
	  }

	  parseRange (range) {
	    // memoize range parsing for performance.
	    // this is a very hot path, and fully deterministic.
	    const memoOpts =
	      (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) |
	      (this.options.loose && FLAG_LOOSE);
	    const memoKey = memoOpts + ':' + range;
	    const cached = cache.get(memoKey);
	    if (cached) {
	      return cached
	    }

	    const loose = this.options.loose;
	    // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
	    const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
	    range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
	    debug('hyphen replace', range);

	    // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
	    range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
	    debug('comparator trim', range);

	    // `~ 1.2.3` => `~1.2.3`
	    range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
	    debug('tilde trim', range);

	    // `^ 1.2.3` => `^1.2.3`
	    range = range.replace(re[t.CARETTRIM], caretTrimReplace);
	    debug('caret trim', range);

	    // At this point, the range is completely trimmed and
	    // ready to be split into comparators.

	    let rangeList = range
	      .split(' ')
	      .map(comp => parseComparator(comp, this.options))
	      .join(' ')
	      .split(/\s+/)
	      // >=0.0.0 is equivalent to *
	      .map(comp => replaceGTE0(comp, this.options));

	    if (loose) {
	      // in loose mode, throw out any that are not valid comparators
	      rangeList = rangeList.filter(comp => {
	        debug('loose invalid filter', comp, this.options);
	        return !!comp.match(re[t.COMPARATORLOOSE])
	      });
	    }
	    debug('range list', rangeList);

	    // if any comparators are the null set, then replace with JUST null set
	    // if more than one comparator, remove any * comparators
	    // also, don't include the same comparator more than once
	    const rangeMap = new Map();
	    const comparators = rangeList.map(comp => new Comparator(comp, this.options));
	    for (const comp of comparators) {
	      if (isNullSet(comp)) {
	        return [comp]
	      }
	      rangeMap.set(comp.value, comp);
	    }
	    if (rangeMap.size > 1 && rangeMap.has('')) {
	      rangeMap.delete('');
	    }

	    const result = [...rangeMap.values()];
	    cache.set(memoKey, result);
	    return result
	  }

	  intersects (range, options) {
	    if (!(range instanceof Range)) {
	      throw new TypeError('a Range is required')
	    }

	    return this.set.some((thisComparators) => {
	      return (
	        isSatisfiable(thisComparators, options) &&
	        range.set.some((rangeComparators) => {
	          return (
	            isSatisfiable(rangeComparators, options) &&
	            thisComparators.every((thisComparator) => {
	              return rangeComparators.every((rangeComparator) => {
	                return thisComparator.intersects(rangeComparator, options)
	              })
	            })
	          )
	        })
	      )
	    })
	  }

	  // if ANY of the sets match ALL of its comparators, then pass
	  test (version) {
	    if (!version) {
	      return false
	    }

	    if (typeof version === 'string') {
	      try {
	        version = new SemVer(version, this.options);
	      } catch (er) {
	        return false
	      }
	    }

	    for (let i = 0; i < this.set.length; i++) {
	      if (testSet(this.set[i], version, this.options)) {
	        return true
	      }
	    }
	    return false
	  }
	}

	range = Range;

	const LRU = lrucache;
	const cache = new LRU();

	const parseOptions = parseOptions_1;
	const Comparator = requireComparator();
	const debug = debug_1;
	const SemVer = semver$4;
	const {
	  safeRe: re,
	  t,
	  comparatorTrimReplace,
	  tildeTrimReplace,
	  caretTrimReplace,
	} = reExports;
	const { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = constants$1;

	const isNullSet = c => c.value === '<0.0.0-0';
	const isAny = c => c.value === '';

	// take a set of comparators and determine whether there
	// exists a version which can satisfy it
	const isSatisfiable = (comparators, options) => {
	  let result = true;
	  const remainingComparators = comparators.slice();
	  let testComparator = remainingComparators.pop();

	  while (result && remainingComparators.length) {
	    result = remainingComparators.every((otherComparator) => {
	      return testComparator.intersects(otherComparator, options)
	    });

	    testComparator = remainingComparators.pop();
	  }

	  return result
	};

	// comprised of xranges, tildes, stars, and gtlt's at this point.
	// already replaced the hyphen ranges
	// turn into a set of JUST comparators.
	const parseComparator = (comp, options) => {
	  debug('comp', comp, options);
	  comp = replaceCarets(comp, options);
	  debug('caret', comp);
	  comp = replaceTildes(comp, options);
	  debug('tildes', comp);
	  comp = replaceXRanges(comp, options);
	  debug('xrange', comp);
	  comp = replaceStars(comp, options);
	  debug('stars', comp);
	  return comp
	};

	const isX = id => !id || id.toLowerCase() === 'x' || id === '*';

	// ~, ~> --> * (any, kinda silly)
	// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
	// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
	// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
	// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
	// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
	// ~0.0.1 --> >=0.0.1 <0.1.0-0
	const replaceTildes = (comp, options) => {
	  return comp
	    .trim()
	    .split(/\s+/)
	    .map((c) => replaceTilde(c, options))
	    .join(' ')
	};

	const replaceTilde = (comp, options) => {
	  const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
	  return comp.replace(r, (_, M, m, p, pr) => {
	    debug('tilde', comp, _, M, m, p, pr);
	    let ret;

	    if (isX(M)) {
	      ret = '';
	    } else if (isX(m)) {
	      ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
	    } else if (isX(p)) {
	      // ~1.2 == >=1.2.0 <1.3.0-0
	      ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
	    } else if (pr) {
	      debug('replaceTilde pr', pr);
	      ret = `>=${M}.${m}.${p}-${pr
	      } <${M}.${+m + 1}.0-0`;
	    } else {
	      // ~1.2.3 == >=1.2.3 <1.3.0-0
	      ret = `>=${M}.${m}.${p
	      } <${M}.${+m + 1}.0-0`;
	    }

	    debug('tilde return', ret);
	    return ret
	  })
	};

	// ^ --> * (any, kinda silly)
	// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
	// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
	// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
	// ^1.2.3 --> >=1.2.3 <2.0.0-0
	// ^1.2.0 --> >=1.2.0 <2.0.0-0
	// ^0.0.1 --> >=0.0.1 <0.0.2-0
	// ^0.1.0 --> >=0.1.0 <0.2.0-0
	const replaceCarets = (comp, options) => {
	  return comp
	    .trim()
	    .split(/\s+/)
	    .map((c) => replaceCaret(c, options))
	    .join(' ')
	};

	const replaceCaret = (comp, options) => {
	  debug('caret', comp, options);
	  const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
	  const z = options.includePrerelease ? '-0' : '';
	  return comp.replace(r, (_, M, m, p, pr) => {
	    debug('caret', comp, _, M, m, p, pr);
	    let ret;

	    if (isX(M)) {
	      ret = '';
	    } else if (isX(m)) {
	      ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
	    } else if (isX(p)) {
	      if (M === '0') {
	        ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
	      } else {
	        ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
	      }
	    } else if (pr) {
	      debug('replaceCaret pr', pr);
	      if (M === '0') {
	        if (m === '0') {
	          ret = `>=${M}.${m}.${p}-${pr
	          } <${M}.${m}.${+p + 1}-0`;
	        } else {
	          ret = `>=${M}.${m}.${p}-${pr
	          } <${M}.${+m + 1}.0-0`;
	        }
	      } else {
	        ret = `>=${M}.${m}.${p}-${pr
	        } <${+M + 1}.0.0-0`;
	      }
	    } else {
	      debug('no pr');
	      if (M === '0') {
	        if (m === '0') {
	          ret = `>=${M}.${m}.${p
	          }${z} <${M}.${m}.${+p + 1}-0`;
	        } else {
	          ret = `>=${M}.${m}.${p
	          }${z} <${M}.${+m + 1}.0-0`;
	        }
	      } else {
	        ret = `>=${M}.${m}.${p
	        } <${+M + 1}.0.0-0`;
	      }
	    }

	    debug('caret return', ret);
	    return ret
	  })
	};

	const replaceXRanges = (comp, options) => {
	  debug('replaceXRanges', comp, options);
	  return comp
	    .split(/\s+/)
	    .map((c) => replaceXRange(c, options))
	    .join(' ')
	};

	const replaceXRange = (comp, options) => {
	  comp = comp.trim();
	  const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
	  return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
	    debug('xRange', comp, ret, gtlt, M, m, p, pr);
	    const xM = isX(M);
	    const xm = xM || isX(m);
	    const xp = xm || isX(p);
	    const anyX = xp;

	    if (gtlt === '=' && anyX) {
	      gtlt = '';
	    }

	    // if we're including prereleases in the match, then we need
	    // to fix this to -0, the lowest possible prerelease value
	    pr = options.includePrerelease ? '-0' : '';

	    if (xM) {
	      if (gtlt === '>' || gtlt === '<') {
	        // nothing is allowed
	        ret = '<0.0.0-0';
	      } else {
	        // nothing is forbidden
	        ret = '*';
	      }
	    } else if (gtlt && anyX) {
	      // we know patch is an x, because we have any x at all.
	      // replace X with 0
	      if (xm) {
	        m = 0;
	      }
	      p = 0;

	      if (gtlt === '>') {
	        // >1 => >=2.0.0
	        // >1.2 => >=1.3.0
	        gtlt = '>=';
	        if (xm) {
	          M = +M + 1;
	          m = 0;
	          p = 0;
	        } else {
	          m = +m + 1;
	          p = 0;
	        }
	      } else if (gtlt === '<=') {
	        // <=0.7.x is actually <0.8.0, since any 0.7.x should
	        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
	        gtlt = '<';
	        if (xm) {
	          M = +M + 1;
	        } else {
	          m = +m + 1;
	        }
	      }

	      if (gtlt === '<') {
	        pr = '-0';
	      }

	      ret = `${gtlt + M}.${m}.${p}${pr}`;
	    } else if (xm) {
	      ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
	    } else if (xp) {
	      ret = `>=${M}.${m}.0${pr
	      } <${M}.${+m + 1}.0-0`;
	    }

	    debug('xRange return', ret);

	    return ret
	  })
	};

	// Because * is AND-ed with everything else in the comparator,
	// and '' means "any version", just remove the *s entirely.
	const replaceStars = (comp, options) => {
	  debug('replaceStars', comp, options);
	  // Looseness is ignored here.  star is always as loose as it gets!
	  return comp
	    .trim()
	    .replace(re[t.STAR], '')
	};

	const replaceGTE0 = (comp, options) => {
	  debug('replaceGTE0', comp, options);
	  return comp
	    .trim()
	    .replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], '')
	};

	// This function is passed to string.replace(re[t.HYPHENRANGE])
	// M, m, patch, prerelease, build
	// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
	// 1.2.3 - 3.4 => >=1.2.0 <3.5.0-0 Any 3.4.x will do
	// 1.2 - 3.4 => >=1.2.0 <3.5.0-0
	// TODO build?
	const hyphenReplace = incPr => ($0,
	  from, fM, fm, fp, fpr, fb,
	  to, tM, tm, tp, tpr) => {
	  if (isX(fM)) {
	    from = '';
	  } else if (isX(fm)) {
	    from = `>=${fM}.0.0${incPr ? '-0' : ''}`;
	  } else if (isX(fp)) {
	    from = `>=${fM}.${fm}.0${incPr ? '-0' : ''}`;
	  } else if (fpr) {
	    from = `>=${from}`;
	  } else {
	    from = `>=${from}${incPr ? '-0' : ''}`;
	  }

	  if (isX(tM)) {
	    to = '';
	  } else if (isX(tm)) {
	    to = `<${+tM + 1}.0.0-0`;
	  } else if (isX(tp)) {
	    to = `<${tM}.${+tm + 1}.0-0`;
	  } else if (tpr) {
	    to = `<=${tM}.${tm}.${tp}-${tpr}`;
	  } else if (incPr) {
	    to = `<${tM}.${tm}.${+tp + 1}-0`;
	  } else {
	    to = `<=${to}`;
	  }

	  return `${from} ${to}`.trim()
	};

	const testSet = (set, version, options) => {
	  for (let i = 0; i < set.length; i++) {
	    if (!set[i].test(version)) {
	      return false
	    }
	  }

	  if (version.prerelease.length && !options.includePrerelease) {
	    // Find the set of versions that are allowed to have prereleases
	    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
	    // That should allow `1.2.3-pr.2` to pass.
	    // However, `1.2.4-alpha.notready` should NOT be allowed,
	    // even though it's within the range set by the comparators.
	    for (let i = 0; i < set.length; i++) {
	      debug(set[i].semver);
	      if (set[i].semver === Comparator.ANY) {
	        continue
	      }

	      if (set[i].semver.prerelease.length > 0) {
	        const allowed = set[i].semver;
	        if (allowed.major === version.major &&
	            allowed.minor === version.minor &&
	            allowed.patch === version.patch) {
	          return true
	        }
	      }
	    }

	    // Version has a -pre, but it's not one of the ones we like.
	    return false
	  }

	  return true
	};
	return range;
}

var comparator;
var hasRequiredComparator;

function requireComparator () {
	if (hasRequiredComparator) return comparator;
	hasRequiredComparator = 1;
	const ANY = Symbol('SemVer ANY');
	// hoisted class for cyclic dependency
	class Comparator {
	  static get ANY () {
	    return ANY
	  }

	  constructor (comp, options) {
	    options = parseOptions(options);

	    if (comp instanceof Comparator) {
	      if (comp.loose === !!options.loose) {
	        return comp
	      } else {
	        comp = comp.value;
	      }
	    }

	    comp = comp.trim().split(/\s+/).join(' ');
	    debug('comparator', comp, options);
	    this.options = options;
	    this.loose = !!options.loose;
	    this.parse(comp);

	    if (this.semver === ANY) {
	      this.value = '';
	    } else {
	      this.value = this.operator + this.semver.version;
	    }

	    debug('comp', this);
	  }

	  parse (comp) {
	    const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
	    const m = comp.match(r);

	    if (!m) {
	      throw new TypeError(`Invalid comparator: ${comp}`)
	    }

	    this.operator = m[1] !== undefined ? m[1] : '';
	    if (this.operator === '=') {
	      this.operator = '';
	    }

	    // if it literally is just '>' or '' then allow anything.
	    if (!m[2]) {
	      this.semver = ANY;
	    } else {
	      this.semver = new SemVer(m[2], this.options.loose);
	    }
	  }

	  toString () {
	    return this.value
	  }

	  test (version) {
	    debug('Comparator.test', version, this.options.loose);

	    if (this.semver === ANY || version === ANY) {
	      return true
	    }

	    if (typeof version === 'string') {
	      try {
	        version = new SemVer(version, this.options);
	      } catch (er) {
	        return false
	      }
	    }

	    return cmp(version, this.operator, this.semver, this.options)
	  }

	  intersects (comp, options) {
	    if (!(comp instanceof Comparator)) {
	      throw new TypeError('a Comparator is required')
	    }

	    if (this.operator === '') {
	      if (this.value === '') {
	        return true
	      }
	      return new Range(comp.value, options).test(this.value)
	    } else if (comp.operator === '') {
	      if (comp.value === '') {
	        return true
	      }
	      return new Range(this.value, options).test(comp.semver)
	    }

	    options = parseOptions(options);

	    // Special cases where nothing can possibly be lower
	    if (options.includePrerelease &&
	      (this.value === '<0.0.0-0' || comp.value === '<0.0.0-0')) {
	      return false
	    }
	    if (!options.includePrerelease &&
	      (this.value.startsWith('<0.0.0') || comp.value.startsWith('<0.0.0'))) {
	      return false
	    }

	    // Same direction increasing (> or >=)
	    if (this.operator.startsWith('>') && comp.operator.startsWith('>')) {
	      return true
	    }
	    // Same direction decreasing (< or <=)
	    if (this.operator.startsWith('<') && comp.operator.startsWith('<')) {
	      return true
	    }
	    // same SemVer and both sides are inclusive (<= or >=)
	    if (
	      (this.semver.version === comp.semver.version) &&
	      this.operator.includes('=') && comp.operator.includes('=')) {
	      return true
	    }
	    // opposite directions less than
	    if (cmp(this.semver, '<', comp.semver, options) &&
	      this.operator.startsWith('>') && comp.operator.startsWith('<')) {
	      return true
	    }
	    // opposite directions greater than
	    if (cmp(this.semver, '>', comp.semver, options) &&
	      this.operator.startsWith('<') && comp.operator.startsWith('>')) {
	      return true
	    }
	    return false
	  }
	}

	comparator = Comparator;

	const parseOptions = parseOptions_1;
	const { safeRe: re, t } = reExports;
	const cmp = cmp_1;
	const debug = debug_1;
	const SemVer = semver$4;
	const Range = requireRange();
	return comparator;
}

const Range$9 = requireRange();
const satisfies$4 = (version, range, options) => {
  try {
    range = new Range$9(range, options);
  } catch (er) {
    return false
  }
  return range.test(version)
};
var satisfies_1 = satisfies$4;

const Range$8 = requireRange();

// Mostly just for testing and legacy API reasons
const toComparators$1 = (range, options) =>
  new Range$8(range, options).set
    .map(comp => comp.map(c => c.value).join(' ').trim().split(' '));

var toComparators_1 = toComparators$1;

const SemVer$4 = semver$4;
const Range$7 = requireRange();

const maxSatisfying$1 = (versions, range, options) => {
  let max = null;
  let maxSV = null;
  let rangeObj = null;
  try {
    rangeObj = new Range$7(range, options);
  } catch (er) {
    return null
  }
  versions.forEach((v) => {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!max || maxSV.compare(v) === -1) {
        // compare(max, v, true)
        max = v;
        maxSV = new SemVer$4(max, options);
      }
    }
  });
  return max
};
var maxSatisfying_1 = maxSatisfying$1;

const SemVer$3 = semver$4;
const Range$6 = requireRange();
const minSatisfying$1 = (versions, range, options) => {
  let min = null;
  let minSV = null;
  let rangeObj = null;
  try {
    rangeObj = new Range$6(range, options);
  } catch (er) {
    return null
  }
  versions.forEach((v) => {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!min || minSV.compare(v) === 1) {
        // compare(min, v, true)
        min = v;
        minSV = new SemVer$3(min, options);
      }
    }
  });
  return min
};
var minSatisfying_1 = minSatisfying$1;

const SemVer$2 = semver$4;
const Range$5 = requireRange();
const gt$2 = gt_1;

const minVersion$1 = (range, loose) => {
  range = new Range$5(range, loose);

  let minver = new SemVer$2('0.0.0');
  if (range.test(minver)) {
    return minver
  }

  minver = new SemVer$2('0.0.0-0');
  if (range.test(minver)) {
    return minver
  }

  minver = null;
  for (let i = 0; i < range.set.length; ++i) {
    const comparators = range.set[i];

    let setMin = null;
    comparators.forEach((comparator) => {
      // Clone to avoid manipulating the comparator's semver object.
      const compver = new SemVer$2(comparator.semver.version);
      switch (comparator.operator) {
        case '>':
          if (compver.prerelease.length === 0) {
            compver.patch++;
          } else {
            compver.prerelease.push(0);
          }
          compver.raw = compver.format();
          /* fallthrough */
        case '':
        case '>=':
          if (!setMin || gt$2(compver, setMin)) {
            setMin = compver;
          }
          break
        case '<':
        case '<=':
          /* Ignore maximum versions */
          break
        /* istanbul ignore next */
        default:
          throw new Error(`Unexpected operation: ${comparator.operator}`)
      }
    });
    if (setMin && (!minver || gt$2(minver, setMin))) {
      minver = setMin;
    }
  }

  if (minver && range.test(minver)) {
    return minver
  }

  return null
};
var minVersion_1 = minVersion$1;

const Range$4 = requireRange();
const validRange$1 = (range, options) => {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range$4(range, options).range || '*'
  } catch (er) {
    return null
  }
};
var valid$1 = validRange$1;

const SemVer$1 = semver$4;
const Comparator$2 = requireComparator();
const { ANY: ANY$1 } = Comparator$2;
const Range$3 = requireRange();
const satisfies$3 = satisfies_1;
const gt$1 = gt_1;
const lt$1 = lt_1;
const lte$1 = lte_1;
const gte$1 = gte_1;

const outside$3 = (version, range, hilo, options) => {
  version = new SemVer$1(version, options);
  range = new Range$3(range, options);

  let gtfn, ltefn, ltfn, comp, ecomp;
  switch (hilo) {
    case '>':
      gtfn = gt$1;
      ltefn = lte$1;
      ltfn = lt$1;
      comp = '>';
      ecomp = '>=';
      break
    case '<':
      gtfn = lt$1;
      ltefn = gte$1;
      ltfn = gt$1;
      comp = '<';
      ecomp = '<=';
      break
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"')
  }

  // If it satisfies the range it is not outside
  if (satisfies$3(version, range, options)) {
    return false
  }

  // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.

  for (let i = 0; i < range.set.length; ++i) {
    const comparators = range.set[i];

    let high = null;
    let low = null;

    comparators.forEach((comparator) => {
      if (comparator.semver === ANY$1) {
        comparator = new Comparator$2('>=0.0.0');
      }
      high = high || comparator;
      low = low || comparator;
      if (gtfn(comparator.semver, high.semver, options)) {
        high = comparator;
      } else if (ltfn(comparator.semver, low.semver, options)) {
        low = comparator;
      }
    });

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return false
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) &&
        ltefn(version, low.semver)) {
      return false
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false
    }
  }
  return true
};

var outside_1 = outside$3;

// Determine if version is greater than all the versions possible in the range.
const outside$2 = outside_1;
const gtr$1 = (version, range, options) => outside$2(version, range, '>', options);
var gtr_1 = gtr$1;

const outside$1 = outside_1;
// Determine if version is less than all the versions possible in the range
const ltr$1 = (version, range, options) => outside$1(version, range, '<', options);
var ltr_1 = ltr$1;

const Range$2 = requireRange();
const intersects$1 = (r1, r2, options) => {
  r1 = new Range$2(r1, options);
  r2 = new Range$2(r2, options);
  return r1.intersects(r2, options)
};
var intersects_1 = intersects$1;

// given a set of versions and a range, create a "simplified" range
// that includes the same versions that the original range does
// If the original range is shorter than the simplified one, return that.
const satisfies$2 = satisfies_1;
const compare$2 = compare_1;
var simplify = (versions, range, options) => {
  const set = [];
  let first = null;
  let prev = null;
  const v = versions.sort((a, b) => compare$2(a, b, options));
  for (const version of v) {
    const included = satisfies$2(version, range, options);
    if (included) {
      prev = version;
      if (!first) {
        first = version;
      }
    } else {
      if (prev) {
        set.push([first, prev]);
      }
      prev = null;
      first = null;
    }
  }
  if (first) {
    set.push([first, null]);
  }

  const ranges = [];
  for (const [min, max] of set) {
    if (min === max) {
      ranges.push(min);
    } else if (!max && min === v[0]) {
      ranges.push('*');
    } else if (!max) {
      ranges.push(`>=${min}`);
    } else if (min === v[0]) {
      ranges.push(`<=${max}`);
    } else {
      ranges.push(`${min} - ${max}`);
    }
  }
  const simplified = ranges.join(' || ');
  const original = typeof range.raw === 'string' ? range.raw : String(range);
  return simplified.length < original.length ? simplified : range
};

const Range$1 = requireRange();
const Comparator$1 = requireComparator();
const { ANY } = Comparator$1;
const satisfies$1 = satisfies_1;
const compare$1 = compare_1;

// Complex range `r1 || r2 || ...` is a subset of `R1 || R2 || ...` iff:
// - Every simple range `r1, r2, ...` is a null set, OR
// - Every simple range `r1, r2, ...` which is not a null set is a subset of
//   some `R1, R2, ...`
//
// Simple range `c1 c2 ...` is a subset of simple range `C1 C2 ...` iff:
// - If c is only the ANY comparator
//   - If C is only the ANY comparator, return true
//   - Else if in prerelease mode, return false
//   - else replace c with `[>=0.0.0]`
// - If C is only the ANY comparator
//   - if in prerelease mode, return true
//   - else replace C with `[>=0.0.0]`
// - Let EQ be the set of = comparators in c
// - If EQ is more than one, return true (null set)
// - Let GT be the highest > or >= comparator in c
// - Let LT be the lowest < or <= comparator in c
// - If GT and LT, and GT.semver > LT.semver, return true (null set)
// - If any C is a = range, and GT or LT are set, return false
// - If EQ
//   - If GT, and EQ does not satisfy GT, return true (null set)
//   - If LT, and EQ does not satisfy LT, return true (null set)
//   - If EQ satisfies every C, return true
//   - Else return false
// - If GT
//   - If GT.semver is lower than any > or >= comp in C, return false
//   - If GT is >=, and GT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the GT.semver tuple, return false
// - If LT
//   - If LT.semver is greater than any < or <= comp in C, return false
//   - If LT is <=, and LT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the LT.semver tuple, return false
// - Else return true

const subset$1 = (sub, dom, options = {}) => {
  if (sub === dom) {
    return true
  }

  sub = new Range$1(sub, options);
  dom = new Range$1(dom, options);
  let sawNonNull = false;

  OUTER: for (const simpleSub of sub.set) {
    for (const simpleDom of dom.set) {
      const isSub = simpleSubset(simpleSub, simpleDom, options);
      sawNonNull = sawNonNull || isSub !== null;
      if (isSub) {
        continue OUTER
      }
    }
    // the null set is a subset of everything, but null simple ranges in
    // a complex range should be ignored.  so if we saw a non-null range,
    // then we know this isn't a subset, but if EVERY simple range was null,
    // then it is a subset.
    if (sawNonNull) {
      return false
    }
  }
  return true
};

const minimumVersionWithPreRelease = [new Comparator$1('>=0.0.0-0')];
const minimumVersion = [new Comparator$1('>=0.0.0')];

const simpleSubset = (sub, dom, options) => {
  if (sub === dom) {
    return true
  }

  if (sub.length === 1 && sub[0].semver === ANY) {
    if (dom.length === 1 && dom[0].semver === ANY) {
      return true
    } else if (options.includePrerelease) {
      sub = minimumVersionWithPreRelease;
    } else {
      sub = minimumVersion;
    }
  }

  if (dom.length === 1 && dom[0].semver === ANY) {
    if (options.includePrerelease) {
      return true
    } else {
      dom = minimumVersion;
    }
  }

  const eqSet = new Set();
  let gt, lt;
  for (const c of sub) {
    if (c.operator === '>' || c.operator === '>=') {
      gt = higherGT(gt, c, options);
    } else if (c.operator === '<' || c.operator === '<=') {
      lt = lowerLT(lt, c, options);
    } else {
      eqSet.add(c.semver);
    }
  }

  if (eqSet.size > 1) {
    return null
  }

  let gtltComp;
  if (gt && lt) {
    gtltComp = compare$1(gt.semver, lt.semver, options);
    if (gtltComp > 0) {
      return null
    } else if (gtltComp === 0 && (gt.operator !== '>=' || lt.operator !== '<=')) {
      return null
    }
  }

  // will iterate one or zero times
  for (const eq of eqSet) {
    if (gt && !satisfies$1(eq, String(gt), options)) {
      return null
    }

    if (lt && !satisfies$1(eq, String(lt), options)) {
      return null
    }

    for (const c of dom) {
      if (!satisfies$1(eq, String(c), options)) {
        return false
      }
    }

    return true
  }

  let higher, lower;
  let hasDomLT, hasDomGT;
  // if the subset has a prerelease, we need a comparator in the superset
  // with the same tuple and a prerelease, or it's not a subset
  let needDomLTPre = lt &&
    !options.includePrerelease &&
    lt.semver.prerelease.length ? lt.semver : false;
  let needDomGTPre = gt &&
    !options.includePrerelease &&
    gt.semver.prerelease.length ? gt.semver : false;
  // exception: <1.2.3-0 is the same as <1.2.3
  if (needDomLTPre && needDomLTPre.prerelease.length === 1 &&
      lt.operator === '<' && needDomLTPre.prerelease[0] === 0) {
    needDomLTPre = false;
  }

  for (const c of dom) {
    hasDomGT = hasDomGT || c.operator === '>' || c.operator === '>=';
    hasDomLT = hasDomLT || c.operator === '<' || c.operator === '<=';
    if (gt) {
      if (needDomGTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length &&
            c.semver.major === needDomGTPre.major &&
            c.semver.minor === needDomGTPre.minor &&
            c.semver.patch === needDomGTPre.patch) {
          needDomGTPre = false;
        }
      }
      if (c.operator === '>' || c.operator === '>=') {
        higher = higherGT(gt, c, options);
        if (higher === c && higher !== gt) {
          return false
        }
      } else if (gt.operator === '>=' && !satisfies$1(gt.semver, String(c), options)) {
        return false
      }
    }
    if (lt) {
      if (needDomLTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length &&
            c.semver.major === needDomLTPre.major &&
            c.semver.minor === needDomLTPre.minor &&
            c.semver.patch === needDomLTPre.patch) {
          needDomLTPre = false;
        }
      }
      if (c.operator === '<' || c.operator === '<=') {
        lower = lowerLT(lt, c, options);
        if (lower === c && lower !== lt) {
          return false
        }
      } else if (lt.operator === '<=' && !satisfies$1(lt.semver, String(c), options)) {
        return false
      }
    }
    if (!c.operator && (lt || gt) && gtltComp !== 0) {
      return false
    }
  }

  // if there was a < or >, and nothing in the dom, then must be false
  // UNLESS it was limited by another range in the other direction.
  // Eg, >1.0.0 <1.0.1 is still a subset of <2.0.0
  if (gt && hasDomLT && !lt && gtltComp !== 0) {
    return false
  }

  if (lt && hasDomGT && !gt && gtltComp !== 0) {
    return false
  }

  // we needed a prerelease range in a specific tuple, but didn't get one
  // then this isn't a subset.  eg >=1.2.3-pre is not a subset of >=1.0.0,
  // because it includes prereleases in the 1.2.3 tuple
  if (needDomGTPre || needDomLTPre) {
    return false
  }

  return true
};

// >=1.2.3 is lower than >1.2.3
const higherGT = (a, b, options) => {
  if (!a) {
    return b
  }
  const comp = compare$1(a.semver, b.semver, options);
  return comp > 0 ? a
    : comp < 0 ? b
    : b.operator === '>' && a.operator === '>=' ? b
    : a
};

// <=1.2.3 is higher than <1.2.3
const lowerLT = (a, b, options) => {
  if (!a) {
    return b
  }
  const comp = compare$1(a.semver, b.semver, options);
  return comp < 0 ? a
    : comp > 0 ? b
    : b.operator === '<' && a.operator === '<=' ? b
    : a
};

var subset_1 = subset$1;

// just pre-load all the stuff that index.js lazily exports
const internalRe = reExports;
const constants = constants$1;
const SemVer = semver$4;
const identifiers = identifiers$1;
const parse = parse_1;
const valid = valid_1;
const clean = clean_1;
const inc = inc_1;
const diff = diff_1;
const major = major_1;
const minor = minor_1;
const patch = patch_1;
const prerelease = prerelease_1;
const compare = compare_1;
const rcompare = rcompare_1;
const compareLoose = compareLoose_1;
const compareBuild = compareBuild_1;
const sort = sort_1;
const rsort = rsort_1;
const gt = gt_1;
const lt = lt_1;
const eq = eq_1;
const neq = neq_1;
const gte = gte_1;
const lte = lte_1;
const cmp = cmp_1;
const coerce = coerce_1;
const Comparator = requireComparator();
const Range = requireRange();
const satisfies = satisfies_1;
const toComparators = toComparators_1;
const maxSatisfying = maxSatisfying_1;
const minSatisfying = minSatisfying_1;
const minVersion = minVersion_1;
const validRange = valid$1;
const outside = outside_1;
const gtr = gtr_1;
const ltr = ltr_1;
const intersects = intersects_1;
const simplifyRange = simplify;
const subset = subset_1;
var semver$3 = {
  parse,
  valid,
  clean,
  inc,
  diff,
  major,
  minor,
  patch,
  prerelease,
  compare,
  rcompare,
  compareLoose,
  compareBuild,
  sort,
  rsort,
  gt,
  lt,
  eq,
  neq,
  gte,
  lte,
  cmp,
  coerce,
  Comparator,
  Range,
  satisfies,
  toComparators,
  maxSatisfying,
  minSatisfying,
  minVersion,
  validRange,
  outside,
  gtr,
  ltr,
  intersects,
  simplifyRange,
  subset,
  SemVer,
  re: internalRe.re,
  src: internalRe.src,
  tokens: internalRe.t,
  SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
  RELEASE_TYPES: constants.RELEASE_TYPES,
  compareIdentifiers: identifiers.compareIdentifiers,
  rcompareIdentifiers: identifiers.rcompareIdentifiers,
};

const semver$2 = semver$3;

var asymmetricKeyDetailsSupported = semver$2.satisfies(process.version, '>=15.7.0');

const semver$1 = semver$3;

var rsaPssKeyDetailsSupported = semver$1.satisfies(process.version, '>=16.9.0');

const ASYMMETRIC_KEY_DETAILS_SUPPORTED = asymmetricKeyDetailsSupported;
const RSA_PSS_KEY_DETAILS_SUPPORTED = rsaPssKeyDetailsSupported;

const allowedAlgorithmsForKeys = {
  'ec': ['ES256', 'ES384', 'ES512'],
  'rsa': ['RS256', 'PS256', 'RS384', 'PS384', 'RS512', 'PS512'],
  'rsa-pss': ['PS256', 'PS384', 'PS512']
};

const allowedCurves = {
  ES256: 'prime256v1',
  ES384: 'secp384r1',
  ES512: 'secp521r1',
};

var validateAsymmetricKey$2 = function(algorithm, key) {
  if (!algorithm || !key) return;

  const keyType = key.asymmetricKeyType;
  if (!keyType) return;

  const allowedAlgorithms = allowedAlgorithmsForKeys[keyType];

  if (!allowedAlgorithms) {
    throw new Error(`Unknown key type "${keyType}".`);
  }

  if (!allowedAlgorithms.includes(algorithm)) {
    throw new Error(`"alg" parameter for "${keyType}" key type must be one of: ${allowedAlgorithms.join(', ')}.`)
  }

  /*
   * Ignore the next block from test coverage because it gets executed
   * conditionally depending on the Node version. Not ignoring it would
   * prevent us from reaching the target % of coverage for versions of
   * Node under 15.7.0.
   */
  /* istanbul ignore next */
  if (ASYMMETRIC_KEY_DETAILS_SUPPORTED) {
    switch (keyType) {
    case 'ec':
      const keyCurve = key.asymmetricKeyDetails.namedCurve;
      const allowedCurve = allowedCurves[algorithm];

      if (keyCurve !== allowedCurve) {
        throw new Error(`"alg" parameter "${algorithm}" requires curve "${allowedCurve}".`);
      }
      break;

    case 'rsa-pss':
      if (RSA_PSS_KEY_DETAILS_SUPPORTED) {
        const length = parseInt(algorithm.slice(-3), 10);
        const { hashAlgorithm, mgf1HashAlgorithm, saltLength } = key.asymmetricKeyDetails;

        if (hashAlgorithm !== `sha${length}` || mgf1HashAlgorithm !== hashAlgorithm) {
          throw new Error(`Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" ${algorithm}.`);
        }

        if (saltLength !== undefined && saltLength > length >> 3) {
          throw new Error(`Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" ${algorithm}.`)
        }
      }
      break;
    }
  }
};

var semver = semver$3;

var psSupported = semver.satisfies(process.version, '^6.12.0 || >=8.0.0');

const JsonWebTokenError = JsonWebTokenError_1;
const NotBeforeError = NotBeforeError_1;
const TokenExpiredError = TokenExpiredError_1;
const decode = decode$1;
const timespan$1 = timespan$2;
const validateAsymmetricKey$1 = validateAsymmetricKey$2;
const PS_SUPPORTED$1 = psSupported;
const jws$1 = jws$3;
const {KeyObject: KeyObject$1, createSecretKey: createSecretKey$1, createPublicKey} = crypto$1;

const PUB_KEY_ALGS = ['RS256', 'RS384', 'RS512'];
const EC_KEY_ALGS = ['ES256', 'ES384', 'ES512'];
const RSA_KEY_ALGS = ['RS256', 'RS384', 'RS512'];
const HS_ALGS = ['HS256', 'HS384', 'HS512'];

if (PS_SUPPORTED$1) {
  PUB_KEY_ALGS.splice(PUB_KEY_ALGS.length, 0, 'PS256', 'PS384', 'PS512');
  RSA_KEY_ALGS.splice(RSA_KEY_ALGS.length, 0, 'PS256', 'PS384', 'PS512');
}

var verify = function (jwtString, secretOrPublicKey, options, callback) {
  if ((typeof options === 'function') && !callback) {
    callback = options;
    options = {};
  }

  if (!options) {
    options = {};
  }

  //clone this object since we are going to mutate it.
  options = Object.assign({}, options);

  let done;

  if (callback) {
    done = callback;
  } else {
    done = function(err, data) {
      if (err) throw err;
      return data;
    };
  }

  if (options.clockTimestamp && typeof options.clockTimestamp !== 'number') {
    return done(new JsonWebTokenError('clockTimestamp must be a number'));
  }

  if (options.nonce !== undefined && (typeof options.nonce !== 'string' || options.nonce.trim() === '')) {
    return done(new JsonWebTokenError('nonce must be a non-empty string'));
  }

  if (options.allowInvalidAsymmetricKeyTypes !== undefined && typeof options.allowInvalidAsymmetricKeyTypes !== 'boolean') {
    return done(new JsonWebTokenError('allowInvalidAsymmetricKeyTypes must be a boolean'));
  }

  const clockTimestamp = options.clockTimestamp || Math.floor(Date.now() / 1000);

  if (!jwtString){
    return done(new JsonWebTokenError('jwt must be provided'));
  }

  if (typeof jwtString !== 'string') {
    return done(new JsonWebTokenError('jwt must be a string'));
  }

  const parts = jwtString.split('.');

  if (parts.length !== 3){
    return done(new JsonWebTokenError('jwt malformed'));
  }

  let decodedToken;

  try {
    decodedToken = decode(jwtString, { complete: true });
  } catch(err) {
    return done(err);
  }

  if (!decodedToken) {
    return done(new JsonWebTokenError('invalid token'));
  }

  const header = decodedToken.header;
  let getSecret;

  if(typeof secretOrPublicKey === 'function') {
    if(!callback) {
      return done(new JsonWebTokenError('verify must be called asynchronous if secret or public key is provided as a callback'));
    }

    getSecret = secretOrPublicKey;
  }
  else {
    getSecret = function(header, secretCallback) {
      return secretCallback(null, secretOrPublicKey);
    };
  }

  return getSecret(header, function(err, secretOrPublicKey) {
    if(err) {
      return done(new JsonWebTokenError('error in secret or public key callback: ' + err.message));
    }

    const hasSignature = parts[2].trim() !== '';

    if (!hasSignature && secretOrPublicKey){
      return done(new JsonWebTokenError('jwt signature is required'));
    }

    if (hasSignature && !secretOrPublicKey) {
      return done(new JsonWebTokenError('secret or public key must be provided'));
    }

    if (!hasSignature && !options.algorithms) {
      return done(new JsonWebTokenError('please specify "none" in "algorithms" to verify unsigned tokens'));
    }

    if (secretOrPublicKey != null && !(secretOrPublicKey instanceof KeyObject$1)) {
      try {
        secretOrPublicKey = createPublicKey(secretOrPublicKey);
      } catch (_) {
        try {
          secretOrPublicKey = createSecretKey$1(typeof secretOrPublicKey === 'string' ? Buffer.from(secretOrPublicKey) : secretOrPublicKey);
        } catch (_) {
          return done(new JsonWebTokenError('secretOrPublicKey is not valid key material'))
        }
      }
    }

    if (!options.algorithms) {
      if (secretOrPublicKey.type === 'secret') {
        options.algorithms = HS_ALGS;
      } else if (['rsa', 'rsa-pss'].includes(secretOrPublicKey.asymmetricKeyType)) {
        options.algorithms = RSA_KEY_ALGS;
      } else if (secretOrPublicKey.asymmetricKeyType === 'ec') {
        options.algorithms = EC_KEY_ALGS;
      } else {
        options.algorithms = PUB_KEY_ALGS;
      }
    }

    if (options.algorithms.indexOf(decodedToken.header.alg) === -1) {
      return done(new JsonWebTokenError('invalid algorithm'));
    }

    if (header.alg.startsWith('HS') && secretOrPublicKey.type !== 'secret') {
      return done(new JsonWebTokenError((`secretOrPublicKey must be a symmetric key when using ${header.alg}`)))
    } else if (/^(?:RS|PS|ES)/.test(header.alg) && secretOrPublicKey.type !== 'public') {
      return done(new JsonWebTokenError((`secretOrPublicKey must be an asymmetric key when using ${header.alg}`)))
    }

    if (!options.allowInvalidAsymmetricKeyTypes) {
      try {
        validateAsymmetricKey$1(header.alg, secretOrPublicKey);
      } catch (e) {
        return done(e);
      }
    }

    let valid;

    try {
      valid = jws$1.verify(jwtString, decodedToken.header.alg, secretOrPublicKey);
    } catch (e) {
      return done(e);
    }

    if (!valid) {
      return done(new JsonWebTokenError('invalid signature'));
    }

    const payload = decodedToken.payload;

    if (typeof payload.nbf !== 'undefined' && !options.ignoreNotBefore) {
      if (typeof payload.nbf !== 'number') {
        return done(new JsonWebTokenError('invalid nbf value'));
      }
      if (payload.nbf > clockTimestamp + (options.clockTolerance || 0)) {
        return done(new NotBeforeError('jwt not active', new Date(payload.nbf * 1000)));
      }
    }

    if (typeof payload.exp !== 'undefined' && !options.ignoreExpiration) {
      if (typeof payload.exp !== 'number') {
        return done(new JsonWebTokenError('invalid exp value'));
      }
      if (clockTimestamp >= payload.exp + (options.clockTolerance || 0)) {
        return done(new TokenExpiredError('jwt expired', new Date(payload.exp * 1000)));
      }
    }

    if (options.audience) {
      const audiences = Array.isArray(options.audience) ? options.audience : [options.audience];
      const target = Array.isArray(payload.aud) ? payload.aud : [payload.aud];

      const match = target.some(function (targetAudience) {
        return audiences.some(function (audience) {
          return audience instanceof RegExp ? audience.test(targetAudience) : audience === targetAudience;
        });
      });

      if (!match) {
        return done(new JsonWebTokenError('jwt audience invalid. expected: ' + audiences.join(' or ')));
      }
    }

    if (options.issuer) {
      const invalid_issuer =
              (typeof options.issuer === 'string' && payload.iss !== options.issuer) ||
              (Array.isArray(options.issuer) && options.issuer.indexOf(payload.iss) === -1);

      if (invalid_issuer) {
        return done(new JsonWebTokenError('jwt issuer invalid. expected: ' + options.issuer));
      }
    }

    if (options.subject) {
      if (payload.sub !== options.subject) {
        return done(new JsonWebTokenError('jwt subject invalid. expected: ' + options.subject));
      }
    }

    if (options.jwtid) {
      if (payload.jti !== options.jwtid) {
        return done(new JsonWebTokenError('jwt jwtid invalid. expected: ' + options.jwtid));
      }
    }

    if (options.nonce) {
      if (payload.nonce !== options.nonce) {
        return done(new JsonWebTokenError('jwt nonce invalid. expected: ' + options.nonce));
      }
    }

    if (options.maxAge) {
      if (typeof payload.iat !== 'number') {
        return done(new JsonWebTokenError('iat required when maxAge is specified'));
      }

      const maxAgeTimestamp = timespan$1(options.maxAge, payload.iat);
      if (typeof maxAgeTimestamp === 'undefined') {
        return done(new JsonWebTokenError('"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
      }
      if (clockTimestamp >= maxAgeTimestamp + (options.clockTolerance || 0)) {
        return done(new TokenExpiredError('maxAge exceeded', new Date(maxAgeTimestamp * 1000)));
      }
    }

    if (options.complete === true) {
      const signature = decodedToken.signature;

      return done(null, {
        header: header,
        payload: payload,
        signature: signature
      });
    }

    return done(null, payload);
  });
};

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY$2 = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991,
    MAX_INTEGER$2 = 1.7976931348623157e+308,
    NAN$2 = 0 / 0;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    stringTag$1 = '[object String]',
    symbolTag$2 = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim$2 = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex$2 = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary$2 = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal$2 = /^0o[0-7]+$/i;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Built-in method references without a dependency on `root`. */
var freeParseInt$2 = parseInt;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg$1(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$6.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$6 = objectProto$6.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg$1(Object.keys, Object),
    nativeMax = Math.max;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray$1(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$1.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$1.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$6;

  return value === proto;
}

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
function includes$1(collection, value, fromIndex, guard) {
  collection = isArrayLike(collection) ? collection : values(collection);
  fromIndex = (fromIndex && !guard) ? toInteger$2(fromIndex) : 0;

  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return isString$2(collection)
    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty$1.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString$6.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray$1 = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike$6(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject$2(value) ? objectToString$6.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject$2(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike$6(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString$2(value) {
  return typeof value == 'string' ||
    (!isArray$1(value) && isObjectLike$6(value) && objectToString$6.call(value) == stringTag$1);
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol$2(value) {
  return typeof value == 'symbol' ||
    (isObjectLike$6(value) && objectToString$6.call(value) == symbolTag$2);
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite$2(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber$2(value);
  if (value === INFINITY$2 || value === -INFINITY$2) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER$2;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger$2(value) {
  var result = toFinite$2(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber$2(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol$2(value)) {
    return NAN$2;
  }
  if (isObject$2(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject$2(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim$2, '');
  var isBinary = reIsBinary$2.test(value);
  return (isBinary || reIsOctal$2.test(value))
    ? freeParseInt$2(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex$2.test(value) ? NAN$2 : +value);
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object ? baseValues(object, keys(object)) : [];
}

var lodash_includes = includes$1;

/**
 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var boolTag = '[object Boolean]';

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$5 = objectProto$5.toString;

/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isBoolean(false);
 * // => true
 *
 * _.isBoolean(null);
 * // => false
 */
function isBoolean$1(value) {
  return value === true || value === false ||
    (isObjectLike$5(value) && objectToString$5.call(value) == boolTag);
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike$5(value) {
  return !!value && typeof value == 'object';
}

var lodash_isboolean = isBoolean$1;

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0,
    MAX_INTEGER$1 = 1.7976931348623157e+308,
    NAN$1 = 0 / 0;

/** `Object#toString` result references. */
var symbolTag$1 = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim$1 = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex$1 = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary$1 = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal$1 = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt$1 = parseInt;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$4 = objectProto$4.toString;

/**
 * Checks if `value` is an integer.
 *
 * **Note:** This method is based on
 * [`Number.isInteger`](https://mdn.io/Number/isInteger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
 * @example
 *
 * _.isInteger(3);
 * // => true
 *
 * _.isInteger(Number.MIN_VALUE);
 * // => false
 *
 * _.isInteger(Infinity);
 * // => false
 *
 * _.isInteger('3');
 * // => false
 */
function isInteger$1(value) {
  return typeof value == 'number' && value == toInteger$1(value);
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject$1(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike$4(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol$1(value) {
  return typeof value == 'symbol' ||
    (isObjectLike$4(value) && objectToString$4.call(value) == symbolTag$1);
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite$1(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber$1(value);
  if (value === INFINITY$1 || value === -INFINITY$1) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER$1;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger$1(value) {
  var result = toFinite$1(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber$1(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol$1(value)) {
    return NAN$1;
  }
  if (isObject$1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject$1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim$1, '');
  var isBinary = reIsBinary$1.test(value);
  return (isBinary || reIsOctal$1.test(value))
    ? freeParseInt$1(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex$1.test(value) ? NAN$1 : +value);
}

var lodash_isinteger = isInteger$1;

/**
 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$3 = objectProto$3.toString;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike$3(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
 * as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber$1(value) {
  return typeof value == 'number' ||
    (isObjectLike$3(value) && objectToString$3.call(value) == numberTag);
}

var lodash_isnumber = isNumber$1;

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto$2.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$2 = objectProto$2.toString;

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike$2(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject$1(value) {
  if (!isObjectLike$2(value) ||
      objectToString$2.call(value) != objectTag || isHostObject(value)) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return (typeof Ctor == 'function' &&
    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
}

var lodash_isplainobject = isPlainObject$1;

/**
 * lodash 4.0.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var stringTag = '[object String]';

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$1 = objectProto$1.toString;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @type Function
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike$1(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString$1(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike$1(value) && objectToString$1.call(value) == stringTag);
}

var lodash_isstring = isString$1;

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {number} n The number of calls at which `func` is no longer invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * jQuery(element).on('click', _.before(5, addContactToList));
 * // => Allows adding up to 4 contacts to the list.
 */
function before(n, func) {
  var result;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  n = toInteger(n);
  return function() {
    if (--n > 0) {
      result = func.apply(this, arguments);
    }
    if (n <= 1) {
      func = undefined;
    }
    return result;
  };
}

/**
 * Creates a function that is restricted to invoking `func` once. Repeat calls
 * to the function return the value of the first invocation. The `func` is
 * invoked with the `this` binding and arguments of the created function.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * var initialize = _.once(createApplication);
 * initialize();
 * initialize();
 * // => `createApplication` is invoked once
 */
function once$1(func) {
  return before(2, func);
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var lodash_once = once$1;

const timespan = timespan$2;
const PS_SUPPORTED = psSupported;
const validateAsymmetricKey = validateAsymmetricKey$2;
const jws = jws$3;
const includes = lodash_includes;
const isBoolean = lodash_isboolean;
const isInteger = lodash_isinteger;
const isNumber = lodash_isnumber;
const isPlainObject = lodash_isplainobject;
const isString = lodash_isstring;
const once = lodash_once;
const { KeyObject, createSecretKey, createPrivateKey } = crypto$1;

const SUPPORTED_ALGS = ['RS256', 'RS384', 'RS512', 'ES256', 'ES384', 'ES512', 'HS256', 'HS384', 'HS512', 'none'];
if (PS_SUPPORTED) {
  SUPPORTED_ALGS.splice(3, 0, 'PS256', 'PS384', 'PS512');
}

const sign_options_schema = {
  expiresIn: { isValid: function(value) { return isInteger(value) || (isString(value) && value); }, message: '"expiresIn" should be a number of seconds or string representing a timespan' },
  notBefore: { isValid: function(value) { return isInteger(value) || (isString(value) && value); }, message: '"notBefore" should be a number of seconds or string representing a timespan' },
  audience: { isValid: function(value) { return isString(value) || Array.isArray(value); }, message: '"audience" must be a string or array' },
  algorithm: { isValid: includes.bind(null, SUPPORTED_ALGS), message: '"algorithm" must be a valid string enum value' },
  header: { isValid: isPlainObject, message: '"header" must be an object' },
  encoding: { isValid: isString, message: '"encoding" must be a string' },
  issuer: { isValid: isString, message: '"issuer" must be a string' },
  subject: { isValid: isString, message: '"subject" must be a string' },
  jwtid: { isValid: isString, message: '"jwtid" must be a string' },
  noTimestamp: { isValid: isBoolean, message: '"noTimestamp" must be a boolean' },
  keyid: { isValid: isString, message: '"keyid" must be a string' },
  mutatePayload: { isValid: isBoolean, message: '"mutatePayload" must be a boolean' },
  allowInsecureKeySizes: { isValid: isBoolean, message: '"allowInsecureKeySizes" must be a boolean'},
  allowInvalidAsymmetricKeyTypes: { isValid: isBoolean, message: '"allowInvalidAsymmetricKeyTypes" must be a boolean'}
};

const registered_claims_schema = {
  iat: { isValid: isNumber, message: '"iat" should be a number of seconds' },
  exp: { isValid: isNumber, message: '"exp" should be a number of seconds' },
  nbf: { isValid: isNumber, message: '"nbf" should be a number of seconds' }
};

function validate(schema, allowUnknown, object, parameterName) {
  if (!isPlainObject(object)) {
    throw new Error('Expected "' + parameterName + '" to be a plain object.');
  }
  Object.keys(object)
    .forEach(function(key) {
      const validator = schema[key];
      if (!validator) {
        if (!allowUnknown) {
          throw new Error('"' + key + '" is not allowed in "' + parameterName + '"');
        }
        return;
      }
      if (!validator.isValid(object[key])) {
        throw new Error(validator.message);
      }
    });
}

function validateOptions(options) {
  return validate(sign_options_schema, false, options, 'options');
}

function validatePayload(payload) {
  return validate(registered_claims_schema, true, payload, 'payload');
}

const options_to_payload = {
  'audience': 'aud',
  'issuer': 'iss',
  'subject': 'sub',
  'jwtid': 'jti'
};

const options_for_objects = [
  'expiresIn',
  'notBefore',
  'noTimestamp',
  'audience',
  'issuer',
  'subject',
  'jwtid',
];

var sign = function (payload, secretOrPrivateKey, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  } else {
    options = options || {};
  }

  const isObjectPayload = typeof payload === 'object' &&
                        !Buffer.isBuffer(payload);

  const header = Object.assign({
    alg: options.algorithm || 'HS256',
    typ: isObjectPayload ? 'JWT' : undefined,
    kid: options.keyid
  }, options.header);

  function failure(err) {
    if (callback) {
      return callback(err);
    }
    throw err;
  }

  if (!secretOrPrivateKey && options.algorithm !== 'none') {
    return failure(new Error('secretOrPrivateKey must have a value'));
  }

  if (secretOrPrivateKey != null && !(secretOrPrivateKey instanceof KeyObject)) {
    try {
      secretOrPrivateKey = createPrivateKey(secretOrPrivateKey);
    } catch (_) {
      try {
        secretOrPrivateKey = createSecretKey(typeof secretOrPrivateKey === 'string' ? Buffer.from(secretOrPrivateKey) : secretOrPrivateKey);
      } catch (_) {
        return failure(new Error('secretOrPrivateKey is not valid key material'));
      }
    }
  }

  if (header.alg.startsWith('HS') && secretOrPrivateKey.type !== 'secret') {
    return failure(new Error((`secretOrPrivateKey must be a symmetric key when using ${header.alg}`)))
  } else if (/^(?:RS|PS|ES)/.test(header.alg)) {
    if (secretOrPrivateKey.type !== 'private') {
      return failure(new Error((`secretOrPrivateKey must be an asymmetric key when using ${header.alg}`)))
    }
    if (!options.allowInsecureKeySizes &&
      !header.alg.startsWith('ES') &&
      secretOrPrivateKey.asymmetricKeyDetails !== undefined && //KeyObject.asymmetricKeyDetails is supported in Node 15+
      secretOrPrivateKey.asymmetricKeyDetails.modulusLength < 2048) {
      return failure(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`));
    }
  }

  if (typeof payload === 'undefined') {
    return failure(new Error('payload is required'));
  } else if (isObjectPayload) {
    try {
      validatePayload(payload);
    }
    catch (error) {
      return failure(error);
    }
    if (!options.mutatePayload) {
      payload = Object.assign({},payload);
    }
  } else {
    const invalid_options = options_for_objects.filter(function (opt) {
      return typeof options[opt] !== 'undefined';
    });

    if (invalid_options.length > 0) {
      return failure(new Error('invalid ' + invalid_options.join(',') + ' option for ' + (typeof payload ) + ' payload'));
    }
  }

  if (typeof payload.exp !== 'undefined' && typeof options.expiresIn !== 'undefined') {
    return failure(new Error('Bad "options.expiresIn" option the payload already has an "exp" property.'));
  }

  if (typeof payload.nbf !== 'undefined' && typeof options.notBefore !== 'undefined') {
    return failure(new Error('Bad "options.notBefore" option the payload already has an "nbf" property.'));
  }

  try {
    validateOptions(options);
  }
  catch (error) {
    return failure(error);
  }

  if (!options.allowInvalidAsymmetricKeyTypes) {
    try {
      validateAsymmetricKey(header.alg, secretOrPrivateKey);
    } catch (error) {
      return failure(error);
    }
  }

  const timestamp = payload.iat || Math.floor(Date.now() / 1000);

  if (options.noTimestamp) {
    delete payload.iat;
  } else if (isObjectPayload) {
    payload.iat = timestamp;
  }

  if (typeof options.notBefore !== 'undefined') {
    try {
      payload.nbf = timespan(options.notBefore, timestamp);
    }
    catch (err) {
      return failure(err);
    }
    if (typeof payload.nbf === 'undefined') {
      return failure(new Error('"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
    }
  }

  if (typeof options.expiresIn !== 'undefined' && typeof payload === 'object') {
    try {
      payload.exp = timespan(options.expiresIn, timestamp);
    }
    catch (err) {
      return failure(err);
    }
    if (typeof payload.exp === 'undefined') {
      return failure(new Error('"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
    }
  }

  Object.keys(options_to_payload).forEach(function (key) {
    const claim = options_to_payload[key];
    if (typeof options[key] !== 'undefined') {
      if (typeof payload[claim] !== 'undefined') {
        return failure(new Error('Bad "options.' + key + '" option. The payload already has an "' + claim + '" property.'));
      }
      payload[claim] = options[key];
    }
  });

  const encoding = options.encoding || 'utf8';

  if (typeof callback === 'function') {
    callback = callback && once(callback);

    jws.createSign({
      header: header,
      privateKey: secretOrPrivateKey,
      payload: payload,
      encoding: encoding
    }).once('error', callback)
      .once('done', function (signature) {
        // TODO: Remove in favor of the modulus length check before signing once node 15+ is the minimum supported version
        if(!options.allowInsecureKeySizes && /^(?:RS|PS)/.test(header.alg) && signature.length < 256) {
          return callback(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`))
        }
        callback(null, signature);
      });
  } else {
    let signature = jws.sign({header: header, payload: payload, secret: secretOrPrivateKey, encoding: encoding});
    // TODO: Remove in favor of the modulus length check before signing once node 15+ is the minimum supported version
    if(!options.allowInsecureKeySizes && /^(?:RS|PS)/.test(header.alg) && signature.length < 256) {
      throw new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`)
    }
    return signature
  }
};

var jsonwebtoken = {
  decode: decode$1,
  verify: verify,
  sign: sign,
  JsonWebTokenError: JsonWebTokenError_1,
  NotBeforeError: NotBeforeError_1,
  TokenExpiredError: TokenExpiredError_1,
};

var jwt = /*@__PURE__*/getDefaultExportFromCjs(jsonwebtoken);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const authCodes = /* @__PURE__ */ new Map();
const refreshTokens = /* @__PURE__ */ new Map();
let database;
let SECRET;
const setDatabase = (db) => {
  database = db;
};
const setSecret = (secret) => {
  SECRET = secret;
};
const getOIDCSetting = async () => {
  try {
    const settings = await database("ext_oidc_settings").select("*").where("id", "1");
    if (settings.length > 0) {
      const {
        issuer,
        code_expires_in,
        token_expires_in,
        refresh_token_expires_in,
        allow_refresh_tokens,
        publicKeyPem,
        privateKeyPem
      } = settings[0];
      return {
        issuer,
        code_expires_in,
        token_expires_in,
        refresh_token_expires_in,
        allow_refresh_tokens,
        publicKeyPem: aesDecrypt(publicKeyPem, SECRET),
        privateKeyPem: aesDecrypt(privateKeyPem, SECRET)
      };
    }
    return {
      issuer: "",
      code_expires_in: 0,
      token_expires_in: 0,
      refresh_token_expires_in: 0,
      allow_refresh_tokens: false,
      publicKeyPem: "",
      privateKeyPem: ""
    };
  } catch (error) {
    console.error("\u4F7F\u7528 knex \u67E5\u8BE2\u6570\u636E\u5E93\u65F6\u53D1\u751F\u9519\u8BEF:", error);
    return {
      issuer: "",
      code_expires_in: 0,
      token_expires_in: 0,
      refresh_token_expires_in: 0,
      allow_refresh_tokens: false,
      publicKeyPem: "",
      privateKeyPem: ""
    };
  }
};
const generateAuthorizationCode = async (clientId, userId) => {
  const code = crypto$1.randomBytes(32).toString("hex");
  const { code_expires_in } = await getOIDCSetting();
  authCodes.set(code, {
    clientId,
    userId,
    expires: Date.now() + code_expires_in * 1e3
  });
  setTimeout(() => authCodes.delete(code), code_expires_in * 1e3);
  return code;
};
const validateAuthorizationCode = async (code) => {
  const record = authCodes.get(code);
  if (!record || record.expires < Date.now()) {
    authCodes.delete(code);
    return null;
  }
  authCodes.delete(code);
  return record;
};
const validateRefreshToken = async (token, clientId) => {
  const record = refreshTokens.get(token);
  if (!record || record.expires < Date.now() || record.clientId !== clientId) {
    refreshTokens.delete(token);
    return null;
  }
  refreshTokens.delete(token);
  return { userId: record.userId };
};
const generateTokens = async (payload) => {
  var _a;
  const { privateKeyPem, token_expires_in } = await getOIDCSetting();
  const accessToken = jwt.sign(
    __spreadProps(__spreadValues({}, payload), {
      exp: Math.floor(Date.now() / 1e3) + token_expires_in,
      iat: Math.floor(Date.now() / 1e3)
    }),
    privateKeyPem,
    { algorithm: "RS256" }
  );
  if ((_a = payload["scope"]) == null ? void 0 : _a.includes("offline_access")) {
    const refreshToken = crypto$1.randomBytes(64).toString("hex");
    return { accessToken, refreshToken };
  }
  return { accessToken };
};
const verifyToken = async (req, res, next) => {
  var _a, _b;
  try {
    const token = (req.headers._authorization || "").split(" ")[1] || ((_a = req.body) == null ? void 0 : _a.access_token) || ((_b = req.query) == null ? void 0 : _b._access_token);
    if (!token) {
      return res.status(401).json({ error: "unauthorized" });
    }
    const { publicKeyPem } = await getOIDCSetting();
    const CLOCK_TOLERANCE_SEC = 5;
    const decoded = jwt.verify(token, publicKeyPem, {
      algorithms: ["RS256"],
      clockTolerance: CLOCK_TOLERANCE_SEC
    });
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: "invalid_token", details: err.message });
  }
};

var e1 = defineEndpoint({
  id: "oidc-provider",
  handler: async (router, context) => {
    const { services, getSchema, env } = context;
    const { ItemsService } = services;
    const { database } = context;
    const schema = await getSchema();
    const { SECRET, PUBLIC_URL } = env;
    setDatabase(database);
    setSecret(SECRET);
    const ENDPOINT_ID = "oidc-provider";
    const baseUrl = (PUBLIC_URL || "").replace(/\/+$/, "");
    const oidcUrl = `${baseUrl}/${ENDPOINT_ID}`;
    const getOIDCClients = async (clientId) => {
      const clientsService = new ItemsService("ext_oidc_clients", { schema });
      const clients = await clientsService.readByQuery({
        filter: {
          client_id: {
            _eq: clientId
          },
          status: {
            _eq: true
          }
        },
        fields: ["client_id", "client_secret", "redirect_uri", "client_name"]
      });
      return clients.map((client) => client);
    };
    const errorHandler = (err, req, res, next) => {
      console.error(`[OIDC Error] ${req.method} ${req.path}:`, err);
      res.status(500).json({ error: "server_error" });
    };
    router.get("/.well-known/openid-configuration", (req, res) => {
      res.json({
        issuer: baseUrl,
        authorization_endpoint: `${oidcUrl}/authorize`,
        token_endpoint: `${oidcUrl}/token`,
        userinfo_endpoint: `${oidcUrl}/userinfo`,
        jwks_uri: `${oidcUrl}/jwks`,
        scopes_supported: ["openid", "email", "profile", "offline_access"],
        response_types_supported: ["code", "id_token token"],
        grant_types_supported: ["authorization_code", "refresh_token"],
        subject_types_supported: ["public"],
        id_token_signing_alg_values_supported: ["RS256"],
        token_endpoint_auth_methods_supported: ["client_secret_basic"],
        claims_supported: [
          "sub",
          "name",
          "email",
          "email_verified",
          "preferred_username",
          "role"
        ]
      });
    });
    router.get("/authorize", async (req, res) => {
      try {
        const { response_type, client_id, redirect_uri, scope, state } = req.query;
        if (response_type !== "code") {
          return res.status(400).json({ error: "unsupported_response_type" });
        }
        const accountability = req.accountability;
        const query = req.query;
        const clients = await getOIDCClients(query.client_id);
        const client = clients.find((c) => c.client_id === String(client_id));
        if (!client || client.redirect_uri !== redirect_uri) {
          return res.status(400).json({ error: "invalid_client" });
        }
        if (!(accountability == null ? void 0 : accountability.user)) {
          return res.redirect(
            `/admin/login?redirect=${encodeURIComponent(req.originalUrl)}`
          );
        }
        const code = await generateAuthorizationCode(
          client_id,
          accountability.user
        );
        const redirectUrl = new URL(redirect_uri);
        redirectUrl.searchParams.set("code", code);
        if (state) redirectUrl.searchParams.set("state", state);
        return res.redirect(redirectUrl.toString());
      } catch (err) {
        errorHandler(err, req, res);
      }
    });
    router.post(
      "/token",
      //@ts-ignore
      bodyParser.urlencoded({ extended: false }),
      async (req, res) => {
        try {
          const { grant_type, code, client_id, client_secret, refresh_token } = req.body;
          if (grant_type !== "authorization_code") {
            return res.status(400).json({ error: "unsupported_grant_type" });
          }
          const { token_expires_in, refresh_token_expires_in } = await getOIDCSetting();
          if (grant_type === "refresh_token") {
            if (!refresh_token) {
              return res.status(400).json({
                error: "invalid_request",
                error_description: "Missing refresh_token"
              });
            }
            const refreshPayload = await validateRefreshToken(
              refresh_token,
              client_id
            );
            if (!refreshPayload) {
              return res.status(400).json({
                error: "invalid_grant",
                error_description: "Invalid refresh token"
              });
            }
            const usersService2 = new ItemsService("directus_users", { schema });
            const user2 = await usersService2.readOne(refreshPayload.userId);
            const { accessToken: accessToken2, refreshToken: refreshToken2 } = await generateTokens({
              sub: user2.id,
              client_id,
              scope: "openid profile email"
            });
            return res.json({
              access_token: accessToken2,
              refresh_token: refreshToken2,
              token_type: "Bearer",
              expires_in: token_expires_in
            });
          }
          const query = req.query;
          const clients = await getOIDCClients(query.client_id);
          const client = clients.find((c) => c.client_id === client_id);
          if (!client || client.client_secret !== client_secret) {
            return res.status(400).json({ error: "invalid_client" });
          }
          const authCode = await validateAuthorizationCode(code);
          if (!authCode) {
            return res.status(400).json({ error: "invalid_grant" });
          }
          const usersService = new ItemsService("directus_users", { schema });
          const user = await usersService.readOne(authCode.userId);
          const scope = req.body.scope || "";
          const includeRefreshToken = scope.includes("offline_access");
          const userLogsService = new ItemsService("ext_oidc_user_logs", {
            schema
          });
          await userLogsService.createOne({
            user_id: user.id,
            client_id,
            client_uri: client.redirect_uri,
            client_name: client.client_name,
            username: user.email,
            ip: req.ip,
            user_agent: req.headers["user-agent"]
          });
          const { accessToken, refreshToken } = await generateTokens({
            sub: user.id,
            client_id,
            scope: "openid profile email" + (includeRefreshToken ? " offline_access" : "")
          });
          if (includeRefreshToken && refreshToken) {
            refreshTokens.set(refreshToken, {
              userId: user.id,
              clientId: client_id,
              expires: Date.now() + refresh_token_expires_in * 1e3
            });
            setTimeout(
              () => refreshTokens.delete(refreshToken),
              refresh_token_expires_in * 1e3
            );
          }
          const idToken = await generateTokens({
            iss: baseUrl,
            sub: user.id,
            aud: client_id,
            preferred_username: user.email.split("@")[0],
            name: `${user.first_name} ${user.last_name}`,
            email: user.email,
            email_verified: user.status === "active",
            role: user.role
          });
          const response = {
            access_token: accessToken,
            token_type: "Bearer",
            expires_in: token_expires_in,
            id_token: idToken.accessToken
          };
          if (refreshToken) {
            response.refresh_token = refreshToken;
            response.refresh_token_expires_in = refresh_token_expires_in;
          }
          res.json(response);
        } catch (err) {
          errorHandler(err, req, res);
        }
      }
    );
    router.get("/userinfo", verifyToken, async (req, res) => {
      try {
        const usersService = new ItemsService("directus_users", { schema });
        const user = await usersService.readOne(req.user.sub);
        res.json({
          sub: user.id,
          preferred_username: user.email.split("@")[0],
          name: `${user.first_name} ${user.last_name}`,
          email: user.email,
          email_verified: user.status === "active",
          role: user.role
        });
      } catch (err) {
        errorHandler(err, req, res);
      }
    });
    router.get("/jwks", async (req, res) => {
      const { publicKeyPem } = await getOIDCSetting();
      res.json({
        keys: [
          {
            kty: "RSA",
            alg: "RS256",
            use: "sig",
            kid: "1",
            n: publicKeyPem,
            e: "AQAB"
          }
        ]
      });
    });
    router.use(errorHandler);
  }
});

const hooks = [{name:'oidc-hook',config:e0}];const endpoints = [{name:'oidc-endpoint',config:e1}];const operations = [];

export { endpoints, hooks, operations };
