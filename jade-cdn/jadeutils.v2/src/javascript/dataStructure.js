(function ($) {
	net.jadedungeon.dataStructure = function () { init(); return this; };
	var proto = net.jadedungeon.dataStructure.prototype;
	var init = function (cfg) {
	};

	/*
	 * MAP对象，实现MAP功能
	 *
	 * 接口：
	 * size()     获取MAP元素个数
	 * isEmpty()    判断MAP是否为空
	 * removeAll()     删除MAP所有元素
	 * put(key, value)   向MAP中增加元素（key, value) 
	 * remove(key)    删除指定KEY的元素，成功返回True，失败返回False
	 * get(key)    获取指定KEY的元素值VALUE，失败返回NULL
	 * element(index)   获取指定索引的元素（使用element.key，element.value获取KEY和VALUE），失败返回NULL
	 * containsKey(key)  判断MAP中是否含有指定KEY的元素
	 * containsValue(value) 判断MAP中是否含有指定VALUE的元素
	 * values()    获取MAP中所有VALUE的数组（ARRAY）
	 * keys()     获取MAP中所有KEY的数组（ARRAY）
	 *
	 * 例子：
	 * var map = new Map();
	 *
	 * map.put("key", "value");
	 * var val = map.get("key")
	 * ……
	 *
	 */
	(function ($) {
		net.jadedungeon.dataStructure.Map = function () { init(); return this; };
		var mapProto = net.jadedungeon.dataStructure.Map.prototype;
		var init = function (initData) {
			mapProto.elements = initData || [];
		};

		//获取MAP元素个数
		mapProto.size = function() { return mapProto.elements.length; };

		//判断MAP是否为空
		mapProto.isEmpty = function() { return (mapProto.elements.length < 1); };

		//删除MAP所有元素
		mapProto.removeAll = function() { mapProto.elements = []; };

		//向MAP中增加元素（key, value) 
		mapProto.put = function(_key, _value) {
			mapProto.elements.push({ key : _key, value : _value });
		};

		//删除指定KEY的元素，成功返回True，失败返回False
		mapProto.remove = function(_key) {
			var bln = false;
			try {
				for (i = 0; i < mapProto.elements.length; i++) {
					if (mapProto.elements[i].key == _key) {
						mapProto.elements.splice(i, 1);
						return true;
					}
				}
			} catch (e) { bln = false; }
			return bln;
		};

		//获取指定KEY的元素值VALUE，失败返回NULL
		mapProto.get = function(_key) {
			try {
				for (i = 0; i < mapProto.elements.length; i++) {
					if (mapProto.elements[i].key == _key) {
						return mapProto.elements[i].value;
					}
				}
			} catch (e) { return null; }
		};

		//获取指定索引的元素（使用element.key，element.value获取KEY和VALUE），
		//失败返回NULL
		mapProto.element = function(_index) {
			if (_index < 0 || _index >= mapProto.elements.length) {
				return null;
			}
			return mapProto.elements[_index];
		};

		//判断MAP中是否含有指定KEY的元素
		mapProto.containsKey = function(_key) {
			var bln = false;
			try {
				for (i = 0; i < mapProto.elements.length; i++) {
					if (mapProto.elements[i].key == _key) { bln = true; }
				}
			} catch (e) { bln = false; }
			return bln;
		};

		//判断MAP中是否含有指定VALUE的元素
		mapProto.containsValue = function(_value) {
			var bln = false;
			try {
				for (i = 0; i < mapProto.elements.length; i++) {
					if (mapProto.elements[i].value == _value) { bln = true; }
				}
			} catch (e) { bln = false; }
			return bln;
		};

		//获取MAP中所有VALUE的数组（ARRAY）
		mapProto.values = function() {
			var arr = [];
			for (i = 0; i < mapProto.elements.length; i++) {
				arr.push(mapProto.elements[i].value);
			}
			return arr;
		};

		//获取MAP中所有KEY的数组（ARRAY）
		mapProto.keys = function() {
			var arr = [];
			for (i = 0; i < mapProto.elements.length; i++) {
				arr.push(mapProto.elements[i].key);
			}
			return arr;
		};

	})(jQuery);

	/**
	 * 定义堆栈类 实现堆栈基本功能
	 */
	(function ($) {
		net.jadedungeon.dataStructure.Stack = function () { init(); return this; };
		var stackProto = net.jadedungeon.dataStructure.Stack.prototype;
		var init = function (initData) {
			stackProto.aElement = initData || []; // 存储元素数组
		};

		/**
		 * 元素入栈 1.Push方法参数可以多个 2.参数为空时返回-1
		 * 
		 * @param: 入栈元素列表
		 * @return: 堆栈元素个数
		 */
		stackProto.push = function(vElement) {
			if (arguments.length === 0) return -1;
			// 元素入栈
			for ( var i = 0; i < arguments.length; i += 1) {
				stackProto.aElement.push(arguments[i]);
			}
			return stackProto.aElement.length;
		};

		/**
		 * 元素出栈 当堆栈元素为空时,返回null
		 * 
		 * @return: vElement
		 */
		stackProto.pop = function() {
			if (stackProto.aElement.length === 0)
				return null;
			else
				return stackProto.aElement.pop();
		};

		/**
		 * 获取堆栈元素个数
		 * 
		 * @return: 元素个数
		 */
		stackProto.size = function() { return stackProto.aElement.length; };

		/**
		 * 返回栈顶元素值 若堆栈为空则返回null
		 * 
		 * @return: vElement
		 */
		stackProto.getTop = function() {
			if (stackProto.aElement.length === 0)
				return null;
			else
				return stackProto.aElement[stackProto.aElement.length - 1];
		};

		/**
		 * 将堆栈置空
		 */
		stackProto.removeAll = function() { stackProto.aElement.length = 0; };

		/**
		 * 判断堆栈是否为空
		 * 
		 * @return: 堆栈为空返回true,否则返回false
		 */
		stackProto.isEmpty = function() {
			if (stackProto.aElement.length === 0)
				return true;
			else
				return false;
		};

		/**
		 * 将堆栈元素转化为字符串
		 * 
		 * @return: 堆栈元素字符串
		 */
		stackProto.toString = function() {
			var sResult = (stackProto.aElement.reverse()).toString();
			stackProto.aElement.reverse();
			return sResult;
		};
	})(jQuery);


	/**
	 * 定义队列类 实现队列基本功能
	 */
	(function ($) {
		net.jadedungeon.dataStructure.Queue = function () { init(); return this; };
		var queueProto = net.jadedungeon.dataStructure.Queue.prototype;
		var init = function (cfg) {
			queueProto.aElement = []; // 存储元素数组
		};

		/**
		 * 元素入队 1.EnQueue方法参数可以多个 2.参数为空时返回-1
		 * 
		 * @param: vElement元素列表
		 * @return: 返回当前队列元素个数
		 */
		queueProto.push = function(vElement) {
			if (arguments.length === 0) return -1;
			// 元素入队
			for ( var i = 0; i < arguments.length; i += 1) { queueProto.aElement.push(arguments[i]); }
			return queueProto.aElement.length;
		};

		/**
		 * 元素出队 当队列元素为空时,返回null
		 * 
		 * @return: vElement
		 */
		queueProto.pop = function() {
			if (queueProto.aElement.length === 0)
				return null;
			else
				return queueProto.aElement.shift();
		};

		/**
		 * 获取队列元素个数
		 * 
		 * @return: 元素个数
		 */
		queueProto.size = function() { return queueProto.aElement.length; };

		/**
		 * 返回队头素值 若队列为空则返回null
		 * 
		 * @return: vElement
		 */
		queueProto.GetHead = function() {
			if (queueProto.aElement.length === 0)
				return null;
			else
				return queueProto.aElement[0];
		};

		/**
		 * 返回队尾素值 若队列为空则返回null
		 * 
		 * @return: vElement
		 */
		queueProto.GetEnd = function() {
			if (queueProto.aElement.length === 0)
				return null;
			else
				return queueProto.aElement[queueProto.aElement.length - 1];
		};

		/**
		 * 将队列置空
		 */
		queueProto.removeAll = function() { queueProto.aElement.length = 0; };

		/**
		 * 判断队列是否为空
		 * 
		 * @return: 队列为空返回true,否则返回false
		 */
		queueProto.isEmpty = function() {
			if (queueProto.aElement.length === 0)
				return true;
			else
				return false;
		};

		/**
		 * 将队列元素转化为字符串
		 * 
		 * @return: 队列元素字符串
		 */
		queueProto.toString = function() {
			var sResult = (queueProto.aElement.reverse()).toString();
			queueProto.aElement.reverse();
			return sResult;
		};
	})(jQuery);


	(function () {
		net.jadedungeon.dataStructure.TreeNode = function () { init(); return this; };
		var treeNodeProto = net.jadedungeon.dataStructure.TreeNode.prototype;
		var init = function (cfg) {
		};

	})();

})(jQuery);
