(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{607:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ./node_modules/san/dist/san.spa.min.js\nvar san_spa_min = __webpack_require__(0);\nvar san_spa_min_default = /*#__PURE__*/__webpack_require__.n(san_spa_min);\n\n// CONCATENATED MODULE: ./src/affix/docs/head.md\n/* harmony default export */ var head = ({\n  template: `<section class="markdown"><h1 id="affix固钉"><span>Affix固钉</span><a href="#affix固钉" class="anchor">#</a></h1><p>将页面元素钉在可视范围。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><p>当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。</p><p>页面可视范围过小时，慎用此功能以免遮挡页面内容。</p><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>`\n});\n    if(false){ var moduleDefault, id, hotApi; }\n    \n// CONCATENATED MODULE: ./src/affix/README.md\n/* harmony default export */ var README = ({\n  template: `<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>offsetBottom</td><td>距离窗口底部达到指定偏移量后触发</td><td>number</td><td>-</td></tr><tr><td>offsetTop</td><td>距离窗口顶部达到指定偏移量后触发</td><td>number</td><td>-</td></tr><tr><td>on-change</td><td>固定状态改变时触发的回调函数</td><td>Function(affixed)</td><td>-</td></tr></tbody></table><blockquote><p>注意：Affix 内的元素不要使用绝对定位.如需要绝对定位的效果，可以直接设置 Affix 为绝对定位：</p></blockquote><pre><code class="language-html">&lt;s-affix style=&quot;position: &#39;absolute&#39;; top: y; left: x&quot;&gt;...&lt;/s-affix&gt;</code></pre></section>`\n});\n    if(false){ var README_moduleDefault, README_id, README_hotApi; }\n    \n// EXTERNAL MODULE: ./src/affix/index.js + 1 modules\nvar affix = __webpack_require__(60);\n\n// EXTERNAL MODULE: ./src/button/index.js + 2 modules\nvar src_button = __webpack_require__(10);\n\n// CONCATENATED MODULE: ./node_modules/hulk-san-loader!./node_modules/hulk-markdown-loader/utils/pickFence.js?url=/Users/mayihui/code/santd/src/affix/docs/basic.md!./node_modules/hulk-markdown-loader/utils/_fakemd?mdurl=/Users/mayihui/code/santd/src/affix/docs/basic.md&_t=1574929819471\n\n\n/* harmony default export */ var basic_md_t_1574929819471 = ({\n  components: {\n    \'s-affix\': affix["a" /* default */],\n    \'s-button\': src_button["a" /* default */]\n  },\n\n  initData() {\n    return {\n      top: 10,\n      bottom: 10\n    };\n  },\n\n  handleTopClick() {\n    this.data.set(\'top\', this.data.get(\'top\') + 10);\n  },\n\n  handleBottomClick() {\n    this.data.set(\'bottom\', this.data.get(\'bottom\') + 10);\n  },\n\n  template: `<div><s-affix offsetTop="{{top}}"><s-button type="primary" on-click="handleTopClick">Affix Top</s-button></s-affix><br><br><s-affix offsetBottom="{{bottom}}"><s-button type="primary" on-click="handleBottomClick">Affix Bottom</s-button></s-affix></div>`\n});\n// CONCATENATED MODULE: ./src/affix/docs/basic.md\n\n/* harmony default export */ var basic = ({\n  initData() {\n    return {\n      isExpand: false,\n      code: `\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-affix offsetTop="{{top}}">\n            &lt;s-button type="primary" on-click="handleTopClick">Affix Top&lt;/s-button>\n        &lt;/s-affix>\n        &lt;br />&lt;br />\n        &lt;s-affix offsetBottom="{{bottom}}">\n            &lt;s-button type="primary" on-click="handleBottomClick">Affix Bottom&lt;/s-button>\n        &lt;/s-affix>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Affix from \'santd/affix\';\nimport Button from \'santd/button\';\n\nexport default {\n    components: {\n        \'s-affix\': Affix,\n        \'s-button\': Button\n    },\n    initData() {\n        return {\n            top: 10,\n            bottom: 10\n        }\n    },\n    handleTopClick() {\n        this.data.set(\'top\', this.data.get(\'top\') + 10);\n    },\n    handleBottomClick() {\n        this.data.set(\'bottom\', this.data.get(\'bottom\') + 10);\n    }\n}\n&lt;/script></code></pre>`,\n      text: `\n<h4 id="基本"><span>基本</span><a href="#基本" class="anchor">#</a></h4><p>最简单的用法</p>`\n    };\n  },\n\n  toggleExpand() {\n    this.data.set(\'isExpand\', !this.data.get(\'isExpand\'));\n  },\n\n  components: {\n    \'code-preview\': basic_md_t_1574929819471\n  },\n  template: `<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1574929819471"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>`\n});\n    if(false){ var basic_moduleDefault, basic_id, basic_hotApi; }\n    \n// CONCATENATED MODULE: ./node_modules/hulk-san-loader!./node_modules/hulk-markdown-loader/utils/pickFence.js?url=/Users/mayihui/code/santd/src/affix/docs/offsetTop.md!./node_modules/hulk-markdown-loader/utils/_fakemd?mdurl=/Users/mayihui/code/santd/src/affix/docs/offsetTop.md&_t=1574929819465\n\n\n/* harmony default export */ var offsetTop_md_t_1574929819465 = ({\n  components: {\n    \'s-affix\': affix["a" /* default */],\n    \'s-button\': src_button["a" /* default */]\n  },\n\n  handleChange(affix) {\n    console.log(\'affix: \', affix);\n  },\n\n  template: `<div><s-affix offsetTop="{{120}}" on-change="handleChange"><s-button>120px to affix top</s-button></s-affix></div>`\n});\n// CONCATENATED MODULE: ./src/affix/docs/offsetTop.md\n\n/* harmony default export */ var offsetTop = ({\n  initData() {\n    return {\n      isExpand: false,\n      code: `\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-affix offsetTop="{{120}}" on-change="handleChange">\n            &lt;s-button>120px to affix top&lt;/s-button>\n        &lt;/s-affix>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Affix from \'santd/affix\';\nimport Button from \'santd/button\';\n\nexport default {\n    components: {\n        \'s-affix\': Affix,\n        \'s-button\': Button\n    },\n    handleChange(affix) {\n        console.log(\'affix: \', affix);\n    }\n}\n&lt;/script></code></pre>`,\n      text: `\n<h4 id="固定状态改变的回调"><span>固定状态改变的回调</span><a href="#固定状态改变的回调" class="anchor">#</a></h4><p>可以获得是否固定的状态。</p>`\n    };\n  },\n\n  toggleExpand() {\n    this.data.set(\'isExpand\', !this.data.get(\'isExpand\'));\n  },\n\n  components: {\n    \'code-preview\': offsetTop_md_t_1574929819465\n  },\n  template: `<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1574929819465"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>`\n});\n    if(false){ var offsetTop_moduleDefault, offsetTop_id, offsetTop_hotApi; }\n    \n// CONCATENATED MODULE: ./src/affix/docs/index.js\n/**\n * @file docs入口文件\n */\n\n\n\n\n\n/* harmony default export */ var docs = __webpack_exports__["default"] = (san_spa_min_default.a.defineComponent({\n  components: {\n    head: head,\n    basic: basic,\n    readme: README,\n    offset: offsetTop\n  },\n  template: "\\n        <div>\\n            <head/>\\n            <basic/>\\n            <offset/>\\n            <readme/>\\n        </div>\\n    "\n}));\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjA3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FmZml4L2RvY3MvaGVhZC5tZD9mODAzIiwid2VicGFjazovLy8uL3NyYy9hZmZpeC9SRUFETUUubWQ/YzAyZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHVsay1tYXJrZG93bi1sb2FkZXIvdXRpbHMvX2Zha2VtZD85N2NlIiwid2VicGFjazovLy8uL3NyYy9hZmZpeC9kb2NzL2Jhc2ljLm1kP2E0ZmQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h1bGstbWFya2Rvd24tbG9hZGVyL3V0aWxzL19mYWtlbWQ/MDA0YSIsIndlYnBhY2s6Ly8vLi9zcmMvYWZmaXgvZG9jcy9vZmZzZXRUb3AubWQ/YjE3OSIsIndlYnBhY2s6Ly8vLi9zcmMvYWZmaXgvZG9jcy9pbmRleC5qcz8zODAwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgdGVtcGxhdGU6IGA8c2VjdGlvbiBjbGFzcz1cIm1hcmtkb3duXCI+PGgxIGlkPVwiYWZmaXjlm7rpkolcIj48c3Bhbj5BZmZpeOWbuumSiTwvc3Bhbj48YSBocmVmPVwiI2FmZml45Zu66ZKJXCIgY2xhc3M9XCJhbmNob3JcIj4jPC9hPjwvaDE+PHA+5bCG6aG16Z2i5YWD57Sg6ZKJ5Zyo5Y+v6KeG6IyD5Zu044CCPC9wPjxoMiBpZD1cIuS9leaXtuS9v+eUqFwiPjxzcGFuPuS9leaXtuS9v+eUqDwvc3Bhbj48YSBocmVmPVwiI+S9leaXtuS9v+eUqFwiIGNsYXNzPVwiYW5jaG9yXCI+IzwvYT48L2gyPjxwPuW9k+WGheWuueWMuuWfn+avlOi+g+mVv++8jOmcgOimgea7muWKqOmhtemdouaXtu+8jOi/memDqOWIhuWGheWuueWvueW6lOeahOaTjeS9nOaIluiAheWvvOiIqumcgOimgeWcqOa7muWKqOiMg+WbtOWGheWni+e7iOWxleeOsOOAguW4uOeUqOS6juS+p+i+ueiPnOWNleWSjOaMiemSrue7hOWQiOOAgjwvcD48cD7pobXpnaLlj6/op4bojIPlm7Tov4flsI/ml7bvvIzmhY7nlKjmraTlip/og73ku6XlhY3pga7mjKHpobXpnaLlhoXlrrnjgII8L3A+PGgyIGlkPVwi5Luj56CB5ryU56S6XCI+PHNwYW4+5Luj56CB5ryU56S6PC9zcGFuPjxhIGhyZWY9XCIj5Luj56CB5ryU56S6XCIgY2xhc3M9XCJhbmNob3JcIj4jPC9hPjwvaDI+PC9zZWN0aW9uPmBcbn07XG4gICAgaWYobW9kdWxlLmhvdCl7XG4gICAgICAgIHZhciBob3RBcGkgPSByZXF1aXJlKCdzYW4taG90LXJlbG9hZC1hcGknKVxuXG4gICAgICAgIGhvdEFwaS5pbnN0YWxsKHJlcXVpcmUoJ3NhbicpLCBmYWxzZSlcbiAgICAgICAgaWYoIWhvdEFwaS5jb21wYXRpYmxlKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc2FuLWhvdC1yZWxvYWQtYXBpIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhlIHZlcnNpb24gb2YgVnVlIHlvdSBhcmUgdXNpbmcuJylcbiAgICAgICAgfVxuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgICAgIHZhciBpZCA9ICdzcmMvYWZmaXgvZG9jcy9oZWFkLm1kJ1xuICAgICAgICB2YXIgbW9kdWxlRGVmYXVsdCA9IG1vZHVsZS5leHBvcnRzID8gbW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA6IG1vZHVsZS5fX3Byb3RvX18uZXhwb3J0cy5kZWZhdWx0XG4gICAgICAgIGlmKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgICAgICAgIGhvdEFwaS5jcmVhdGVSZWNvcmQoaWQsIG1vZHVsZURlZmF1bHQpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgaG90QXBpLnJlbG9hZChpZCwgbW9kdWxlRGVmYXVsdClcbiAgICAgICAgfVxuICAgIH1cbiAgICAiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHRlbXBsYXRlOiBgPHNlY3Rpb24gY2xhc3M9XCJtYXJrZG93blwiPjxoMiBpZD1cImFwaVwiPjxzcGFuPkFQSTwvc3Bhbj48YSBocmVmPVwiI2FwaVwiIGNsYXNzPVwiYW5jaG9yXCI+IzwvYT48L2gyPjx0YWJsZT48dGhlYWQ+PHRyPjx0aD7lj4LmlbA8L3RoPjx0aD7or7TmmI48L3RoPjx0aD7nsbvlnos8L3RoPjx0aD7pu5jorqTlgLw8L3RoPjwvdHI+PC90aGVhZD48dGJvZHk+PHRyPjx0ZD5vZmZzZXRCb3R0b208L3RkPjx0ZD7ot53nprvnqpflj6PlupXpg6jovr7liLDmjIflrprlgY/np7vph4/lkI7op6blj5E8L3RkPjx0ZD5udW1iZXI8L3RkPjx0ZD4tPC90ZD48L3RyPjx0cj48dGQ+b2Zmc2V0VG9wPC90ZD48dGQ+6Led56a756qX5Y+j6aG26YOo6L6+5Yiw5oyH5a6a5YGP56e76YeP5ZCO6Kem5Y+RPC90ZD48dGQ+bnVtYmVyPC90ZD48dGQ+LTwvdGQ+PC90cj48dHI+PHRkPm9uLWNoYW5nZTwvdGQ+PHRkPuWbuuWumueKtuaAgeaUueWPmOaXtuinpuWPkeeahOWbnuiwg+WHveaVsDwvdGQ+PHRkPkZ1bmN0aW9uKGFmZml4ZWQpPC90ZD48dGQ+LTwvdGQ+PC90cj48L3Rib2R5PjwvdGFibGU+PGJsb2NrcXVvdGU+PHA+5rOo5oSP77yaQWZmaXgg5YaF55qE5YWD57Sg5LiN6KaB5L2/55So57ud5a+55a6a5L2NLuWmgumcgOimgee7neWvueWumuS9jeeahOaViOaenO+8jOWPr+S7peebtOaOpeiuvue9riBBZmZpeCDkuLrnu53lr7nlrprkvY3vvJo8L3A+PC9ibG9ja3F1b3RlPjxwcmU+PGNvZGUgY2xhc3M9XCJsYW5ndWFnZS1odG1sXCI+Jmx0O3MtYWZmaXggc3R5bGU9JnF1b3Q7cG9zaXRpb246ICYjMzk7YWJzb2x1dGUmIzM5OzsgdG9wOiB5OyBsZWZ0OiB4JnF1b3Q7Jmd0Oy4uLiZsdDsvcy1hZmZpeCZndDs8L2NvZGU+PC9wcmU+PC9zZWN0aW9uPmBcbn07XG4gICAgaWYobW9kdWxlLmhvdCl7XG4gICAgICAgIHZhciBob3RBcGkgPSByZXF1aXJlKCdzYW4taG90LXJlbG9hZC1hcGknKVxuXG4gICAgICAgIGhvdEFwaS5pbnN0YWxsKHJlcXVpcmUoJ3NhbicpLCBmYWxzZSlcbiAgICAgICAgaWYoIWhvdEFwaS5jb21wYXRpYmxlKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc2FuLWhvdC1yZWxvYWQtYXBpIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhlIHZlcnNpb24gb2YgVnVlIHlvdSBhcmUgdXNpbmcuJylcbiAgICAgICAgfVxuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgICAgIHZhciBpZCA9ICdzcmMvYWZmaXgvUkVBRE1FLm1kJ1xuICAgICAgICB2YXIgbW9kdWxlRGVmYXVsdCA9IG1vZHVsZS5leHBvcnRzID8gbW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA6IG1vZHVsZS5fX3Byb3RvX18uZXhwb3J0cy5kZWZhdWx0XG4gICAgICAgIGlmKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgICAgICAgIGhvdEFwaS5jcmVhdGVSZWNvcmQoaWQsIG1vZHVsZURlZmF1bHQpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgaG90QXBpLnJlbG9hZChpZCwgbW9kdWxlRGVmYXVsdClcbiAgICAgICAgfVxuICAgIH1cbiAgICAiLCJpbXBvcnQgQWZmaXggZnJvbSAnc2FudGQvYWZmaXgnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdzYW50ZC9idXR0b24nO1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgJ3MtYWZmaXgnOiBBZmZpeCxcbiAgICAncy1idXR0b24nOiBCdXR0b25cbiAgfSxcblxuICBpbml0RGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiAxMCxcbiAgICAgIGJvdHRvbTogMTBcbiAgICB9O1xuICB9LFxuXG4gIGhhbmRsZVRvcENsaWNrKCkge1xuICAgIHRoaXMuZGF0YS5zZXQoJ3RvcCcsIHRoaXMuZGF0YS5nZXQoJ3RvcCcpICsgMTApO1xuICB9LFxuXG4gIGhhbmRsZUJvdHRvbUNsaWNrKCkge1xuICAgIHRoaXMuZGF0YS5zZXQoJ2JvdHRvbScsIHRoaXMuZGF0YS5nZXQoJ2JvdHRvbScpICsgMTApO1xuICB9LFxuXG4gIHRlbXBsYXRlOiBgPGRpdj48cy1hZmZpeCBvZmZzZXRUb3A9XCJ7e3RvcH19XCI+PHMtYnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb24tY2xpY2s9XCJoYW5kbGVUb3BDbGlja1wiPkFmZml4IFRvcDwvcy1idXR0b24+PC9zLWFmZml4Pjxicj48YnI+PHMtYWZmaXggb2Zmc2V0Qm90dG9tPVwie3tib3R0b219fVwiPjxzLWJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uLWNsaWNrPVwiaGFuZGxlQm90dG9tQ2xpY2tcIj5BZmZpeCBCb3R0b208L3MtYnV0dG9uPjwvcy1hZmZpeD48L2Rpdj5gXG59OyIsImltcG9ydCBjb2RlUHJldmlldyBmcm9tICcvVXNlcnMvbWF5aWh1aS9jb2RlL3NhbnRkL25vZGVfbW9kdWxlcy9odWxrLXNhbi1sb2FkZXIvaW5kZXguanMhL1VzZXJzL21heWlodWkvY29kZS9zYW50ZC9ub2RlX21vZHVsZXMvaHVsay1tYXJrZG93bi1sb2FkZXIvdXRpbHMvcGlja0ZlbmNlLmpzP3VybD0vVXNlcnMvbWF5aWh1aS9jb2RlL3NhbnRkL3NyYy9hZmZpeC9kb2NzL2Jhc2ljLm1kIS9Vc2Vycy9tYXlpaHVpL2NvZGUvc2FudGQvbm9kZV9tb2R1bGVzL2h1bGstbWFya2Rvd24tbG9hZGVyL3V0aWxzL19mYWtlbWQ/bWR1cmw9L1VzZXJzL21heWlodWkvY29kZS9zYW50ZC9zcmMvYWZmaXgvZG9jcy9iYXNpYy5tZCZfdD0xNTc0OTI5ODE5NDcxJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdERhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzRXhwYW5kOiBmYWxzZSxcbiAgICAgIGNvZGU6IGBcbjxwcmU+PGNvZGUgY2xhc3M9XCJsYW5ndWFnZS1odG1sXCI+Jmx0O3RlbXBsYXRlPlxuICAgICZsdDtkaXY+XG4gICAgICAgICZsdDtzLWFmZml4IG9mZnNldFRvcD1cInt7dG9wfX1cIj5cbiAgICAgICAgICAgICZsdDtzLWJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uLWNsaWNrPVwiaGFuZGxlVG9wQ2xpY2tcIj5BZmZpeCBUb3AmbHQ7L3MtYnV0dG9uPlxuICAgICAgICAmbHQ7L3MtYWZmaXg+XG4gICAgICAgICZsdDticiAvPiZsdDticiAvPlxuICAgICAgICAmbHQ7cy1hZmZpeCBvZmZzZXRCb3R0b209XCJ7e2JvdHRvbX19XCI+XG4gICAgICAgICAgICAmbHQ7cy1idXR0b24gdHlwZT1cInByaW1hcnlcIiBvbi1jbGljaz1cImhhbmRsZUJvdHRvbUNsaWNrXCI+QWZmaXggQm90dG9tJmx0Oy9zLWJ1dHRvbj5cbiAgICAgICAgJmx0Oy9zLWFmZml4PlxuICAgICZsdDsvZGl2PlxuJmx0Oy90ZW1wbGF0ZT5cbiZsdDtzY3JpcHQ+XG5pbXBvcnQgQWZmaXggZnJvbSAnc2FudGQvYWZmaXgnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdzYW50ZC9idXR0b24nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czoge1xuICAgICAgICAncy1hZmZpeCc6IEFmZml4LFxuICAgICAgICAncy1idXR0b24nOiBCdXR0b25cbiAgICB9LFxuICAgIGluaXREYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wOiAxMCxcbiAgICAgICAgICAgIGJvdHRvbTogMTBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgaGFuZGxlVG9wQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuZGF0YS5zZXQoJ3RvcCcsIHRoaXMuZGF0YS5nZXQoJ3RvcCcpICsgMTApO1xuICAgIH0sXG4gICAgaGFuZGxlQm90dG9tQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuZGF0YS5zZXQoJ2JvdHRvbScsIHRoaXMuZGF0YS5nZXQoJ2JvdHRvbScpICsgMTApO1xuICAgIH1cbn1cbiZsdDsvc2NyaXB0PjwvY29kZT48L3ByZT5gLFxuICAgICAgdGV4dDogYFxuPGg0IGlkPVwi5Z+65pysXCI+PHNwYW4+5Z+65pysPC9zcGFuPjxhIGhyZWY9XCIj5Z+65pysXCIgY2xhc3M9XCJhbmNob3JcIj4jPC9hPjwvaDQ+PHA+5pyA566A5Y2V55qE55So5rOVPC9wPmBcbiAgICB9O1xuICB9LFxuXG4gIHRvZ2dsZUV4cGFuZCgpIHtcbiAgICB0aGlzLmRhdGEuc2V0KCdpc0V4cGFuZCcsICF0aGlzLmRhdGEuZ2V0KCdpc0V4cGFuZCcpKTtcbiAgfSxcblxuICBjb21wb25lbnRzOiB7XG4gICAgJ2NvZGUtcHJldmlldyc6IGNvZGVQcmV2aWV3XG4gIH0sXG4gIHRlbXBsYXRlOiBgPHNlY3Rpb24gY2xhc3M9XCJjb2RlLWJveCB7e2lzRXhwYW5kPydleHBhbmQnOicnfX1cIiBpZD1cImNvbXBvbmVudHMtZGVtby0xNTc0OTI5ODE5NDcxXCI+PHNlY3Rpb24gY2xhc3M9XCJjb2RlLWJveC1kZW1vXCI+PGNvZGUtcHJldmlldz48L2NvZGUtcHJldmlldz48L3NlY3Rpb24+PHNlY3Rpb24gY2xhc3M9XCJjb2RlLWJveC1tZXRhIG1hcmtkb3duXCI+e3sgdGV4dCB8IHJhd319PHNwYW4gY2xhc3M9XCJjb2RlLWV4cGFuZC1pY29uXCIgb24tY2xpY2s9XCJ0b2dnbGVFeHBhbmRcIj48aW1nIGFsdD1cImV4cGFuZCBjb2RlXCIgc3JjPVwiaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL3dTQWtCdUpGYmR4c29zS0twcXlxLnN2Z1wiIGNsYXNzPVwie3tpc0V4cGFuZD8nY29kZS1leHBhbmQtaWNvbi1oaWRlJzonY29kZS1leHBhbmQtaWNvbi1zaG93J319XCI+PGltZyBhbHQ9XCJleHBhbmQgY29kZVwiIHNyYz1cImh0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9PcFJPUEhZcVdtck1EQkZNWnRLRi5zdmdcIiBjbGFzcz1cInt7aXNFeHBhbmQ/J2NvZGUtZXhwYW5kLWljb24tc2hvdyc6J2NvZGUtZXhwYW5kLWljb24taGlkZSd9fVwiPjwvc3Bhbj48L3NlY3Rpb24+PHNlY3Rpb24gY2xhc3M9XCJoaWdobGlnaHQtd3JhcHBlciB7e2lzRXhwYW5kPydoaWdobGlnaHQtd3JhcHBlci1leHBhbmQnOicnfX1cIj57eyBjb2RlIHwgcmF3fX08L3NlY3Rpb24+PC9zZWN0aW9uPmBcbn07XG4gICAgaWYobW9kdWxlLmhvdCl7XG4gICAgICAgIHZhciBob3RBcGkgPSByZXF1aXJlKCdzYW4taG90LXJlbG9hZC1hcGknKVxuXG4gICAgICAgIGhvdEFwaS5pbnN0YWxsKHJlcXVpcmUoJ3NhbicpLCBmYWxzZSlcbiAgICAgICAgaWYoIWhvdEFwaS5jb21wYXRpYmxlKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc2FuLWhvdC1yZWxvYWQtYXBpIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhlIHZlcnNpb24gb2YgVnVlIHlvdSBhcmUgdXNpbmcuJylcbiAgICAgICAgfVxuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgICAgIHZhciBpZCA9ICdzcmMvYWZmaXgvZG9jcy9iYXNpYy5tZCdcbiAgICAgICAgdmFyIG1vZHVsZURlZmF1bHQgPSBtb2R1bGUuZXhwb3J0cyA/IG1vZHVsZS5leHBvcnRzLmRlZmF1bHQgOiBtb2R1bGUuX19wcm90b19fLmV4cG9ydHMuZGVmYXVsdFxuICAgICAgICBpZighbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICAgICAgICBob3RBcGkuY3JlYXRlUmVjb3JkKGlkLCBtb2R1bGVEZWZhdWx0KVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGhvdEFwaS5yZWxvYWQoaWQsIG1vZHVsZURlZmF1bHQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgIiwiaW1wb3J0IEFmZml4IGZyb20gJ3NhbnRkL2FmZml4JztcbmltcG9ydCBCdXR0b24gZnJvbSAnc2FudGQvYnV0dG9uJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgICdzLWFmZml4JzogQWZmaXgsXG4gICAgJ3MtYnV0dG9uJzogQnV0dG9uXG4gIH0sXG5cbiAgaGFuZGxlQ2hhbmdlKGFmZml4KSB7XG4gICAgY29uc29sZS5sb2coJ2FmZml4OiAnLCBhZmZpeCk7XG4gIH0sXG5cbiAgdGVtcGxhdGU6IGA8ZGl2PjxzLWFmZml4IG9mZnNldFRvcD1cInt7MTIwfX1cIiBvbi1jaGFuZ2U9XCJoYW5kbGVDaGFuZ2VcIj48cy1idXR0b24+MTIwcHggdG8gYWZmaXggdG9wPC9zLWJ1dHRvbj48L3MtYWZmaXg+PC9kaXY+YFxufTsiLCJpbXBvcnQgY29kZVByZXZpZXcgZnJvbSAnL1VzZXJzL21heWlodWkvY29kZS9zYW50ZC9ub2RlX21vZHVsZXMvaHVsay1zYW4tbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9tYXlpaHVpL2NvZGUvc2FudGQvbm9kZV9tb2R1bGVzL2h1bGstbWFya2Rvd24tbG9hZGVyL3V0aWxzL3BpY2tGZW5jZS5qcz91cmw9L1VzZXJzL21heWlodWkvY29kZS9zYW50ZC9zcmMvYWZmaXgvZG9jcy9vZmZzZXRUb3AubWQhL1VzZXJzL21heWlodWkvY29kZS9zYW50ZC9ub2RlX21vZHVsZXMvaHVsay1tYXJrZG93bi1sb2FkZXIvdXRpbHMvX2Zha2VtZD9tZHVybD0vVXNlcnMvbWF5aWh1aS9jb2RlL3NhbnRkL3NyYy9hZmZpeC9kb2NzL29mZnNldFRvcC5tZCZfdD0xNTc0OTI5ODE5NDY1JztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdERhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzRXhwYW5kOiBmYWxzZSxcbiAgICAgIGNvZGU6IGBcbjxwcmU+PGNvZGUgY2xhc3M9XCJsYW5ndWFnZS1odG1sXCI+Jmx0O3RlbXBsYXRlPlxuICAgICZsdDtkaXY+XG4gICAgICAgICZsdDtzLWFmZml4IG9mZnNldFRvcD1cInt7MTIwfX1cIiBvbi1jaGFuZ2U9XCJoYW5kbGVDaGFuZ2VcIj5cbiAgICAgICAgICAgICZsdDtzLWJ1dHRvbj4xMjBweCB0byBhZmZpeCB0b3AmbHQ7L3MtYnV0dG9uPlxuICAgICAgICAmbHQ7L3MtYWZmaXg+XG4gICAgJmx0Oy9kaXY+XG4mbHQ7L3RlbXBsYXRlPlxuJmx0O3NjcmlwdD5cbmltcG9ydCBBZmZpeCBmcm9tICdzYW50ZC9hZmZpeCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3NhbnRkL2J1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICdzLWFmZml4JzogQWZmaXgsXG4gICAgICAgICdzLWJ1dHRvbic6IEJ1dHRvblxuICAgIH0sXG4gICAgaGFuZGxlQ2hhbmdlKGFmZml4KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhZmZpeDogJywgYWZmaXgpO1xuICAgIH1cbn1cbiZsdDsvc2NyaXB0PjwvY29kZT48L3ByZT5gLFxuICAgICAgdGV4dDogYFxuPGg0IGlkPVwi5Zu65a6a54q25oCB5pS55Y+Y55qE5Zue6LCDXCI+PHNwYW4+5Zu65a6a54q25oCB5pS55Y+Y55qE5Zue6LCDPC9zcGFuPjxhIGhyZWY9XCIj5Zu65a6a54q25oCB5pS55Y+Y55qE5Zue6LCDXCIgY2xhc3M9XCJhbmNob3JcIj4jPC9hPjwvaDQ+PHA+5Y+v5Lul6I635b6X5piv5ZCm5Zu65a6a55qE54q25oCB44CCPC9wPmBcbiAgICB9O1xuICB9LFxuXG4gIHRvZ2dsZUV4cGFuZCgpIHtcbiAgICB0aGlzLmRhdGEuc2V0KCdpc0V4cGFuZCcsICF0aGlzLmRhdGEuZ2V0KCdpc0V4cGFuZCcpKTtcbiAgfSxcblxuICBjb21wb25lbnRzOiB7XG4gICAgJ2NvZGUtcHJldmlldyc6IGNvZGVQcmV2aWV3XG4gIH0sXG4gIHRlbXBsYXRlOiBgPHNlY3Rpb24gY2xhc3M9XCJjb2RlLWJveCB7e2lzRXhwYW5kPydleHBhbmQnOicnfX1cIiBpZD1cImNvbXBvbmVudHMtZGVtby0xNTc0OTI5ODE5NDY1XCI+PHNlY3Rpb24gY2xhc3M9XCJjb2RlLWJveC1kZW1vXCI+PGNvZGUtcHJldmlldz48L2NvZGUtcHJldmlldz48L3NlY3Rpb24+PHNlY3Rpb24gY2xhc3M9XCJjb2RlLWJveC1tZXRhIG1hcmtkb3duXCI+e3sgdGV4dCB8IHJhd319PHNwYW4gY2xhc3M9XCJjb2RlLWV4cGFuZC1pY29uXCIgb24tY2xpY2s9XCJ0b2dnbGVFeHBhbmRcIj48aW1nIGFsdD1cImV4cGFuZCBjb2RlXCIgc3JjPVwiaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL3dTQWtCdUpGYmR4c29zS0twcXlxLnN2Z1wiIGNsYXNzPVwie3tpc0V4cGFuZD8nY29kZS1leHBhbmQtaWNvbi1oaWRlJzonY29kZS1leHBhbmQtaWNvbi1zaG93J319XCI+PGltZyBhbHQ9XCJleHBhbmQgY29kZVwiIHNyYz1cImh0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9PcFJPUEhZcVdtck1EQkZNWnRLRi5zdmdcIiBjbGFzcz1cInt7aXNFeHBhbmQ/J2NvZGUtZXhwYW5kLWljb24tc2hvdyc6J2NvZGUtZXhwYW5kLWljb24taGlkZSd9fVwiPjwvc3Bhbj48L3NlY3Rpb24+PHNlY3Rpb24gY2xhc3M9XCJoaWdobGlnaHQtd3JhcHBlciB7e2lzRXhwYW5kPydoaWdobGlnaHQtd3JhcHBlci1leHBhbmQnOicnfX1cIj57eyBjb2RlIHwgcmF3fX08L3NlY3Rpb24+PC9zZWN0aW9uPmBcbn07XG4gICAgaWYobW9kdWxlLmhvdCl7XG4gICAgICAgIHZhciBob3RBcGkgPSByZXF1aXJlKCdzYW4taG90LXJlbG9hZC1hcGknKVxuXG4gICAgICAgIGhvdEFwaS5pbnN0YWxsKHJlcXVpcmUoJ3NhbicpLCBmYWxzZSlcbiAgICAgICAgaWYoIWhvdEFwaS5jb21wYXRpYmxlKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc2FuLWhvdC1yZWxvYWQtYXBpIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhlIHZlcnNpb24gb2YgVnVlIHlvdSBhcmUgdXNpbmcuJylcbiAgICAgICAgfVxuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgICAgIHZhciBpZCA9ICdzcmMvYWZmaXgvZG9jcy9vZmZzZXRUb3AubWQnXG4gICAgICAgIHZhciBtb2R1bGVEZWZhdWx0ID0gbW9kdWxlLmV4cG9ydHMgPyBtb2R1bGUuZXhwb3J0cy5kZWZhdWx0IDogbW9kdWxlLl9fcHJvdG9fXy5leHBvcnRzLmRlZmF1bHRcbiAgICAgICAgaWYoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgICAgICAgaG90QXBpLmNyZWF0ZVJlY29yZChpZCwgbW9kdWxlRGVmYXVsdClcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBob3RBcGkucmVsb2FkKGlkLCBtb2R1bGVEZWZhdWx0KVxuICAgICAgICB9XG4gICAgfVxuICAgICIsIi8qKlxuICogQGZpbGUgZG9jc+WFpeWPo+aWh+S7tlxuICovXG5cbmltcG9ydCBzYW4gZnJvbSAnc2FuJztcbmltcG9ydCBIZWFkIGZyb20gJy4vaGVhZC5tZCc7XG5pbXBvcnQgUmVhZG1lIGZyb20gJy4uL1JFQURNRS5tZCc7XG5pbXBvcnQgQmFzaWMgZnJvbSAnLi9iYXNpYy5tZCc7XG5pbXBvcnQgT2Zmc2V0VG9wIGZyb20gJy4vb2Zmc2V0VG9wLm1kJztcblxuZXhwb3J0IGRlZmF1bHQgc2FuLmRlZmluZUNvbXBvbmVudCh7XG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBoZWFkOiBIZWFkLFxuICAgICAgICBiYXNpYzogQmFzaWMsXG4gICAgICAgIHJlYWRtZTogUmVhZG1lLFxuICAgICAgICBvZmZzZXQ6IE9mZnNldFRvcFxuICAgIH0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoZWFkLz5cbiAgICAgICAgICAgIDxiYXNpYy8+XG4gICAgICAgICAgICA8b2Zmc2V0Lz5cbiAgICAgICAgICAgIDxyZWFkbWUvPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLCtDQWVBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBLG9FQWVBO0FBQ0E7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFlQTtBQUNBOztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFlQTtBQUNBOztBQ3pEQTs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFQQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///607\n')}}]);