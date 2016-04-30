(function ($) {
	net.jadedungeon.dataStructure = function () { init(); return this; };
	var self = net.jadedungeon.dataStructure.prototype;
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
		var mapSelf = net.jadedungeon.dataStructure.Map.prototype;
		var init = function (initData) {
			mapSelf.elements = initData || [];
		};

		//获取MAP元素个数
		mapSelf.size = function() { return mapSelf.elements.length; };

		//判断MAP是否为空
		mapSelf.isEmpty = function() { return (mapSelf.elements.length < 1); };

		//删除MAP所有元素
		mapSelf.removeAll = function() { mapSelf.elements = []; };

		//向MAP中增加元素（key, value) 
		mapSelf.put = function(_key, _value) {
			mapSelf.elements.push({ key : _key, value : _value });
		};

		//删除指定KEY的元素，成功返回True，失败返回False
		mapSelf.remove = function(_key) {
			var bln = false;
			try {
				for (i = 0; i < mapSelf.elements.length; i++) {
					if (mapSelf.elements[i].key == _key) {
						mapSelf.elements.splice(i, 1);
						return true;
					}
				}
			} catch (e) { bln = false; }
			return bln;
		};

		//获取指定KEY的元素值VALUE，失败返回NULL
		mapSelf.get = function(_key) {
			try {
				for (i = 0; i < mapSelf.elements.length; i++) {
					if (mapSelf.elements[i].key == _key) {
						return mapSelf.elements[i].value;
					}
				}
			} catch (e) { return null; }
		};

		//获取指定索引的元素（使用element.key，element.value获取KEY和VALUE），
		//失败返回NULL
		mapSelf.element = function(_index) {
			if (_index < 0 || _index >= mapSelf.elements.length) {
				return null;
			}
			return mapSelf.elements[_index];
		};

		//判断MAP中是否含有指定KEY的元素
		mapSelf.containsKey = function(_key) {
			var bln = false;
			try {
				for (i = 0; i < mapSelf.elements.length; i++) {
					if (mapSelf.elements[i].key == _key) { bln = true; }
				}
			} catch (e) { bln = false; }
			return bln;
		};

		//判断MAP中是否含有指定VALUE的元素
		mapSelf.containsValue = function(_value) {
			var bln = false;
			try {
				for (i = 0; i < mapSelf.elements.length; i++) {
					if (mapSelf.elements[i].value == _value) { bln = true; }
				}
			} catch (e) { bln = false; }
			return bln;
		};

		//获取MAP中所有VALUE的数组（ARRAY）
		mapSelf.values = function() {
			var arr = [];
			for (i = 0; i < mapSelf.elements.length; i++) {
				arr.push(mapSelf.elements[i].value);
			}
			return arr;
		};

		//获取MAP中所有KEY的数组（ARRAY）
		mapSelf.keys = function() {
			var arr = [];
			for (i = 0; i < mapSelf.elements.length; i++) {
				arr.push(mapSelf.elements[i].key);
			}
			return arr;
		};

	})(jQuery);

	/**
	 * 定义堆栈类 实现堆栈基本功能
	 */
	(function ($) {
		net.jadedungeon.dataStructure.Stack = function () { init(); return this; };
		var stackSelf = net.jadedungeon.dataStructure.Stack.prototype;
		var init = function (initData) {
			stackSelf.aElement = initData || []; // 存储元素数组
		};

		/**
		 * 元素入栈 1.Push方法参数可以多个 2.参数为空时返回-1
		 * 
		 * @param: 入栈元素列表
		 * @return: 堆栈元素个数
		 */
		stackSelf.push = function(vElement) {
			if (arguments.length === 0) return -1;
			// 元素入栈
			for ( var i = 0; i < arguments.length; i += 1) {
				stackSelf.aElement.push(arguments[i]);
			}
			return stackSelf.aElement.length;
		};

		/**
		 * 元素出栈 当堆栈元素为空时,返回null
		 * 
		 * @return: vElement
		 */
		stackSelf.pop = function() {
			if (stackSelf.aElement.length === 0)
				return null;
			else
				return stackSelf.aElement.pop();
		};

		/**
		 * 获取堆栈元素个数
		 * 
		 * @return: 元素个数
		 */
		stackSelf.size = function() { return stackSelf.aElement.length; };

		/**
		 * 返回栈顶元素值 若堆栈为空则返回null
		 * 
		 * @return: vElement
		 */
		stackSelf.getTop = function() {
			if (stackSelf.aElement.length === 0)
				return null;
			else
				return stackSelf.aElement[stackSelf.aElement.length - 1];
		};

		/**
		 * 将堆栈置空
		 */
		stackSelf.removeAll = function() { stackSelf.aElement.length = 0; };

		/**
		 * 判断堆栈是否为空
		 * 
		 * @return: 堆栈为空返回true,否则返回false
		 */
		stackSelf.isEmpty = function() {
			if (stackSelf.aElement.length === 0)
				return true;
			else
				return false;
		};

		/**
		 * 将堆栈元素转化为字符串
		 * 
		 * @return: 堆栈元素字符串
		 */
		stackSelf.toString = function() {
			var sResult = (stackSelf.aElement.reverse()).toString();
			stackSelf.aElement.reverse();
			return sResult;
		};
	})(jQuery);


	/**
	 * 定义队列类 实现队列基本功能
	 */
	(function ($) {
		net.jadedungeon.dataStructure.Queue = function () { init(); return this; };
		var queueSelf = net.jadedungeon.dataStructure.Queue.prototype;
		var init = function (cfg) {
			queueSelf.aElement = []; // 存储元素数组
		};

		/**
		 * 元素入队 1.EnQueue方法参数可以多个 2.参数为空时返回-1
		 * 
		 * @param: vElement元素列表
		 * @return: 返回当前队列元素个数
		 */
		queueSelf.push = function(vElement) {
			if (arguments.length === 0) return -1;
			// 元素入队
			for ( var i = 0; i < arguments.length; i += 1) { queueSelf.aElement.push(arguments[i]); }
			return queueSelf.aElement.length;
		};

		/**
		 * 元素出队 当队列元素为空时,返回null
		 * 
		 * @return: vElement
		 */
		queueSelf.pop = function() {
			if (queueSelf.aElement.length === 0)
				return null;
			else
				return queueSelf.aElement.shift();
		};

		/**
		 * 获取队列元素个数
		 * 
		 * @return: 元素个数
		 */
		queueSelf.size = function() { return queueSelf.aElement.length; };

		/**
		 * 返回队头素值 若队列为空则返回null
		 * 
		 * @return: vElement
		 */
		queueSelf.GetHead = function() {
			if (queueSelf.aElement.length === 0)
				return null;
			else
				return queueSelf.aElement[0];
		};

		/**
		 * 返回队尾素值 若队列为空则返回null
		 * 
		 * @return: vElement
		 */
		queueSelf.GetEnd = function() {
			if (queueSelf.aElement.length === 0)
				return null;
			else
				return queueSelf.aElement[queueSelf.aElement.length - 1];
		};

		/**
		 * 将队列置空
		 */
		queueSelf.removeAll = function() { queueSelf.aElement.length = 0; };

		/**
		 * 判断队列是否为空
		 * 
		 * @return: 队列为空返回true,否则返回false
		 */
		queueSelf.isEmpty = function() {
			if (queueSelf.aElement.length === 0)
				return true;
			else
				return false;
		};

		/**
		 * 将队列元素转化为字符串
		 * 
		 * @return: 队列元素字符串
		 */
		queueSelf.toString = function() {
			var sResult = (queueSelf.aElement.reverse()).toString();
			queueSelf.aElement.reverse();
			return sResult;
		};
	})(jQuery);


	(function () {
		net.jadedungeon.dataStructure.TreeNode = function () { init(); return this; };
		var treeNodeSelf = net.jadedungeon.dataStructure.TreeNode.prototype;
		var init = function (cfg) {
		};

	})();

})(jQuery);
