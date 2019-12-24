~function anonymous(window) {
    class Tab {
        constructor(container, options = {}) {
            // Validate the first parameter
            if (typeof container === 'undefined' || container.nodeType !== 1) {
                throw new SyntaxError('The first parameter must exist, and it must be an element object type!');
            }

            // Set the default
            let _default = {
                lastIndex: 0,
                eventType: 'mouseover',
                customPageClass: 'option',
                customContentClass: 'con',
                changeEnd: null
            };
            for (let attr in options) {
                if (options.hasOwnProperty(attr)) {
                    _default[attr] = options[attr];
                }
            }
            for (let attr in _default) {
                if (_default.hasOwnProperty(attr)) {
                    this[attr] = _default[attr];
                }
            }

            // Get the elements that need to be operated, and mount the acquired elements to the instance
            this.container = container;
            let children = [...container.children],
                option = null;
            option = children.find(item => this.hasClass(item, this.customPageClass));
            this.optionList = option ? [...option.children] : [];
            this.conList = children.filter(item => this.hasClass(item, this.customContentClass));

            // Make sure the chosen one is added the class of 'active' and the others are not 
            this.optionList.forEach((item, index) => {
                if (index === this.lastIndex) {
                    this.addClass(this.optionList[index], 'active');
                    this.addClass(this.conList[index], 'active');
                    return;
                }
                this.removeClass(this.optionList[index], 'active');
                this.removeClass(this.conList[index], 'active');
            });

            // Implement the function of changing tab
            this.changeTab();
        }

        // Mount public methods to the prototype of class
        hasClass(ele, str) {
            return ele.className.trim().split(/ +/).indexOf(str) >= 0;
        }

        addClass(ele, str) {
            if (this.hasClass(ele, str)) return;
            ele.className += ` ${str}`;
        }

        removeClass(ele, str) {
            if (!this.hasClass(ele, str)) return;
            ele.className = ele.className.trim().split(/ +/).filter(item => item !== str).join(' ');
        }

        changeTab() {
            this.optionList.forEach((item, index) => {
                let _this = this;
                item[`on${this.eventType}`] = function anonymous() {
                    if (_this.lastIndex === index) return;
                    _this.addClass(this, 'active');
                    _this.removeClass(_this.optionList[_this.lastIndex], 'active');
                    _this.addClass(_this.conList[index], 'active');
                    _this.removeClass(_this.conList[_this.lastIndex], 'active');

                    _this.lastIndex = index;

                    _this.changeEnd && _this.changeEnd(this, _this.conList[index], index, _this.lastIndex);
                };
            });
        }
    }

    window.Tab = Tab;
}(window);
// new TabPlugin([container], [options配置项对象]);

/*
 * 不确定项
 *   1.哪个容器实现选项卡
 *   2.默认选中项（参考值：0 第一个选中）
 *   3.切换的事件类型（参考值：mouseover 鼠标滑过切换）
 *   4.可以自定义页卡区域的样式类和内容区域的样式类（参考值：option/con）
 *   5.支持钩子函数(生命周期函数)，例如：我们可以支持切换完成后做什么事，你只需要传递给我一个回调函数，在内部插件每一次切换完成后，我把传递的回调函数执行
 *   ...
 */