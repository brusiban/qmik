(function($) {
	var data = {
		list: [{
			name: "core",
			class: "am-nav-header",
			list: [{
				"name": "encode",
				"url": "#core/encode"
			}, {
				"name": "decode",
				"url": "#core/decode"
			}, {
				"name": "now",
				"url": "#core/now"
			}, {
				"name": "delay",
				"url": "#core/delay"
			}, {
				"name": "cycle",
				"url": "#core/cycle"
			}, {
				"name": "isBool",
				"url": "#core/isBool"
			}, {
				"name": "isString",
				"url": "#core/isString"
			}, {
				"name": "isFunction",
				"url": "#core/isFunction"
			}, {
				"name": "isNumber",
				"url": "#core/isNumber"
			}, {
				"name": "isArray",
				"url": "#core/isArray"
			}, {
				"name": "isNull",
				"url": "#core/isNull"
			}, {
				"name": "isError",
				"url": "#core/isError"
			}, {
				"name": "isDate",
				"url": "#core/isDate"
			}, {
				"name": "isObject",
				"url": "#core/isObject"
			}, {
				"name": "isPlainObject",
				"url": "#core/isPlainObject"
			}, {
				"name": "likeArray",
				"url": "#core/likeArray"
			}, {
				"name": "likeNull",
				"url": "#core/likeNull"
			}, {
				"name": "isIphone",
				"url": "#core/isIphone"
			}, {
				"name": "isWP",
				"url": "#core/isWP"
			}, {
				"name": "isIE",
				"url": "#core/isIE"
			}, {
				"name": "isFF",
				"url": "#core/isFF"
			}, {
				"name": "isWK",
				"url": "#core/isWK"
			}, {
				"name": "isOpera",
				"url": "#core/isOpera"
			}, {
				"name": "isRetinal",
				"url": "#core/isRetinal"
			}, {
				"name": "each",
				"url": "#core/each"
			}, {
				"name": "trim",
				"url": "#core/trim"
			}, {
				"name": "merge",
				"url": "#core/merge"
			}, {
				"name": "inArray",
				"url": "#core/inArray"
			}, {
				"name": "unique",
				"url": "#core/unique"
			}, {
				"name": "map",
				"url": "#core/map"
			}, {
				"name": "getScript",
				"url": "#core/getScript"
			}, {
				"name": "getCss",
				"url": "#core/getCss"
			}, {
				"name": "grep",
				"url": "#core/grep"
			}, {
				"name": "param",
				"url": "#core/param"
			}, {
				"name": "log",
				"url": "#core/log"
			}, {
				"name": "warn",
				"url": "#core/warn"
			}, {
				"name": "error",
				"url": "#core/error"
			}, {
				"name": "inherit",
				"url": "#core/inherit"
			}, {
				"name": "config",
				"url": "#core/config"
			}, {
				"name": "execCatch",
				"url": "#core/execCatch"
			}, {
				"name": "cssPrefix",
				"url": "#core/cssPrefix"
			}]
		}, {
			name: "query",
			class: "am-nav-header",
			list: [{
				"name": "find",
				"url": "#query/find"
			}, {
				"name": "each",
				"url": "#query/each"
			}, {
				"name": "append",
				"url": "#query/append"
			}, {
				"name": "appendTo",
				"url": "#query/appendTo"
			}, {
				"name": "remove",
				"url": "#query/remove"
			}, {
				"name": "before",
				"url": "#query/before"
			}, {
				"name": "after",
				"url": "#query/after"
			}, {
				"name": "beforeTo",
				"url": "#query/beforeTo"
			}, {
				"name": "afterTo",
				"url": "#query/afterTo"
			}, {
				"name": "html",
				"url": "#query/html"
			}, {
				"name": "empty",
				"url": "#query/empty"
			}, {
				"name": "text",
				"url": "#query/text"
			}, {
				"name": "addClass",
				"url": "#query/addClass"
			}, {
				"name": "removeClass",
				"url": "#query/rmClass"
			}, {
				"name": "show",
				"url": "#query/show"
			}, {
				"name": "hide",
				"url": "#query/hide"
			}, {
				"name": "animate",
				"url": "#query/animate"
			}, {
				"name": "toggle",
				"url": "#query/toggle"
			}, {
				"name": "map",
				"url": "#query/map"
			}, {
				"name": "css",
				"url": "#query/css"
			}, {
				"name": "attr",
				"url": "#query/attr"
			}, {
				"name": "removeAttr",
				"url": "#query/rmAttr"
			}, {
				"name": "data",
				"url": "#query/data"
			}, {
				"name": "removeData",
				"url": "#query/rmData"
			}, {
				"name": "val",
				"url": "#query/val"
			}, {
				"name": "next",
				"url": "#query/next"
			}, {
				"name": "prev",
				"url": "#query/prev"
			}, {
				"name": "clone",
				"url": "#query/clone"
			}, {
				"name": "hasClass",
				"url": "#query/hasClass"
			}, {
				"name": "closest",
				"url": "#query/closest"
			}, {
				"name": "parents",
				"url": "#query/parents"
			}, {
				"name": "parents",
				"url": "#query/parents"
			}, {
				"name": "children",
				"url": "#query/children"
			}, {
				"name": "last",
				"url": "#query/last"
			}, {
				"name": "eq",
				"url": "#query/eq"
			}, {
				"name": "first",
				"url": "#query/first"
			}, {
				"name": "filter",
				"url": "#query/filter"
			}, {
				"name": "even",
				"url": "#query/even"
			}, {
				"name": "odd",
				"url": "#query/odd"
			}, {
				"name": "gt",
				"url": "#query/gt"
			}, {
				"name": "lt",
				"url": "#query/lti"
			}]
		}, {
			name: "sun",
			class: "am-nav-header",
			list: [{
				"name": "define",
				"url": "#core/define"
			}, {
				"name": "use",
				"url": "#core/use"
			}, {
				"name": "config",
				"url": "#core/config"
			}, {
				"name": "require",
				"url": "#core/require"
			}]
		}, {
			name: "mvc",
			class: "am-nav-header",
			list: [{
				"name": "app",
				"url": "#core/app"
			}, {
				"name": "ctrl",
				"url": "#core/ctrl"
			}, {
				"name": "scope",
				"url": "#core/scope"
			}]
		}, {
			name: "ajax",
			class: "am-nav-header",
			list: [{
				"name": "ajax",
				"url": "#core/ajax"
			}, {
				"name": "get",
				"url": "#core/get"
			}, {
				"name": "getJSON",
				"url": "#core/getJSON"
			}, {
				"name": "post",
				"url": "#core/post"
			}]
		}, {
			name: "event",
			class: "am-nav-header",
			list: [{
				"name": "on",
				"url": "#core/on"
			}, {
				"name": "off",
				"url": "#core/off"
			}, {
				"name": "live",
				"url": "#core/live"
			}, {
				"name": "die",
				"url": "#core/die"
			}, {
				"name": "once",
				"url": "#core/once"
			}]
		}]
	};
	//导出对象
	define(function() {
		return data;
	});
	//
})(Qmik);