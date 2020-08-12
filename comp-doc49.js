(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{606:function(t,n,e){"use strict";e.r(n);var s=e(0),a=e.n(s),o={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><h4 id="statistic"><span>Statistic</span><a href="#statistic" class="anchor">#</a></h4><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>decimalSeparator</td><td>设置小数点</td><td>string</td><td>.</td></tr><tr><td>formatter</td><td>自定义数值展示</td><td>(value) =&gt; String</td><td>-</td></tr><tr><td>groupSeparator</td><td>设置千分位标识符</td><td>string</td><td>,</td></tr><tr><td>precision</td><td>数值精度</td><td>number</td><td>-</td></tr><tr><td>prefix</td><td>设置数值的前缀</td><td>string | Slot</td><td>-</td></tr><tr><td>suffix</td><td>设置数值的后缀</td><td>string | Slot</td><td>-</td></tr><tr><td>title</td><td>数值的标题</td><td>string</td><td>-</td></tr><tr><td>value</td><td>数值内容</td><td>string | number</td><td>-</td></tr><tr><td>valueStyle</td><td>设置数值的样式</td><td>style</td><td>-</td></tr></tbody></table><h4 id="statisticcountdown"><span>Statistic.Countdown</span><a href="#statisticcountdown" class="anchor">#</a></h4><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>format</td><td>格式化倒计时展示，参考 <a href="http://momentjs.com/">moment</a></td><td>string</td><td>&#39;HH:mm:ss&#39;</td></tr><tr><td>onFinish</td><td>倒计时完成时触发</td><td>() =&gt; void</td><td>-</td></tr><tr><td>prefix</td><td>设置数值的前缀</td><td>string | Slot</td><td>-</td></tr><tr><td>suffix</td><td>设置数值的后缀</td><td>string | Slot</td><td>-</td></tr><tr><td>title</td><td>数值的标题</td><td>string</td><td>-</td></tr><tr><td>value</td><td>数值内容</td><td>number | moment</td><td>-</td></tr><tr><td>valueStyle</td><td>设置数值的样式</td><td>style</td><td>-</td></tr></tbody></table></section>'},i=e(616),c=e(56),r=e(57),l={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;div>\n    &lt;s-row gutter="{{16}}">\n        &lt;s-col span="{{12}}">\n            &lt;s-statistic\n                title="Active Users" value="{{112893}}"/>\n        &lt;/s-col>\n        &lt;s-col span="{{12}}">\n            &lt;s-statistic\n                title="Account Balance (CNY)" value="{{112893}}" precision="{{2}}"/>\n        &lt;/s-col>\n    &lt;/s-row>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport statistic from \'santd/statistic\';\nimport col from \'santd/col\';\nimport row from \'santd/row\';\nexport default {\n    components: {\n        \'s-statistic\': statistic,\n        \'s-col\': col,\n        \'s-row\': row\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="基本"><span>基本</span><a href="#基本" class="anchor">#</a></h4><p>简单的展示。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-statistic":i.a,"s-col":c.a,"s-row":r.a},template:'<div><s-row gutter="{{16}}"><s-col span="{{12}}"><s-statistic title="Active Users" value="{{112893}}"></s-statistic></s-col><s-col span="{{12}}"><s-statistic title="Account Balance (CNY)" value="{{112893}}" precision="{{2}}"></s-statistic></s-col></s-row></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1597202125644"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},d=e(3),p=e(100),u={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;div>\n    &lt;s-row gutter="{{16}}">\n        &lt;s-col span="{{12}}">\n            &lt;s-card>\n                &lt;s-statistic\n                    title="Active"\n                    value="{{11.28}}"\n                    precision="{{2}}"\n                    valueStyle="{{valueStyle}}">\n                    &lt;s-icon type="arrow-up" slot="prefix"/>\n                    &lt;template slot="suffix">%&lt;/template>\n                &lt;/s-statistic>\n            &lt;/s-card>\n        &lt;/s-col>\n        &lt;s-col span="{{12}}">\n            &lt;s-card>\n                &lt;s-statistic\n                    title="Idle"\n                    value="{{9.3}}"\n                    precision="{{2}}"\n                    valueStyle="{{valueStyle2}}">\n                    &lt;s-icon type="arrow-down" slot="prefix"/>\n                    &lt;template slot="suffix">%&lt;/template>\n                &lt;/s-statistic>\n            &lt;/s-card>\n        &lt;/s-col>\n    &lt;/s-row>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport statistic from \'santd/statistic\';\nimport icon from \'santd/icon\';\nimport col from \'santd/col\';\nimport row from \'santd/row\';\nimport card from \'santd/card\';\nexport default {\n    components: {\n        \'s-statistic\': statistic,\n        \'s-icon\': icon,\n        \'s-col\': col,\n        \'s-row\': row,\n        \'s-card\': card\n    },\n    initData() {\n        return {\n            valueStyle: {\n                color: \'#3f8600\'\n            },\n            valueStyle2: {\n                color: \'#cf1322\'\n            }\n        };\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="在卡片中使用"><span>在卡片中使用</span><a href="#在卡片中使用" class="anchor">#</a></h4><p>在卡片中展示统计数值。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-statistic":i.a,"s-icon":d.a,"s-col":c.a,"s-row":r.a,"s-card":p.a},initData:()=>({valueStyle:{color:"#3f8600"},valueStyle2:{color:"#cf1322"}}),template:'<div><s-row gutter="{{16}}"><s-col span="{{12}}"><s-card><s-statistic title="Active" value="{{11.28}}" precision="{{2}}" valueStyle="{{valueStyle}}"><s-icon type="arrow-up" slot="prefix"></s-icon><template slot="suffix">%</template></s-statistic></s-card></s-col><s-col span="{{12}}"><s-card><s-statistic title="Idle" value="{{9.3}}" precision="{{2}}" valueStyle="{{valueStyle2}}"><s-icon type="arrow-down" slot="prefix"></s-icon><template slot="suffix">%</template></s-statistic></s-card></s-col></s-row></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1597202125652"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},m={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;div>\n    &lt;s-row gutter="{{16}}">\n        &lt;s-col span="{{12}}">\n            &lt;s-statistic\n                title="Feedback"\n                value="{{1128}}">\n                &lt;s-icon type="like" slot="prefix"/>\n            &lt;/s-statistic>\n        &lt;/s-col>\n        &lt;s-col span="{{12}}">\n            &lt;s-statistic\n                title="Unmerged"\n                value="{{93}}">\n                &lt;template slot="suffix">/ 100&lt;/template>\n            &lt;/s-statistic>\n        &lt;/s-col>\n    &lt;/s-row>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport statistic from \'santd/statistic\';\nimport icon from \'santd/icon\';\nimport col from \'santd/col\';\nimport row from \'santd/row\';\nexport default {\n    components: {\n        \'s-statistic\': statistic,\n        \'s-icon\': icon,\n        \'s-col\': col,\n        \'s-row\': row\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="单位"><span>单位</span><a href="#单位" class="anchor">#</a></h4><p>通过前缀和后缀添加单位。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-statistic":i.a,"s-icon":d.a,"s-col":c.a,"s-row":r.a},template:'<div><s-row gutter="{{16}}"><s-col span="{{12}}"><s-statistic title="Feedback" value="{{1128}}"><s-icon type="like" slot="prefix"></s-icon></s-statistic></s-col><s-col span="{{12}}"><s-statistic title="Unmerged" value="{{93}}"><template slot="suffix">/ 100</template></s-statistic></s-col></s-row></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1597202125648"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},h={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;div>\n    &lt;s-row gutter="{{16}}">\n        &lt;s-col span="{{12}}">\n            &lt;s-countdown\n                title="Countdown" value="{{deadline}}" on-finish="handleFinish"/>\n        &lt;/s-col>\n        &lt;s-col span="{{12}}">\n            &lt;s-countdown\n                title="Million Seconds" value="{{deadline}}" format="HH:mm:ss:SSS"/>\n        &lt;/s-col>\n        &lt;s-col span="{{24}}" style="margin-top: 32px">\n            &lt;s-countdown\n                title="Day Level" value="{{deadline}}" format="D 天 H 时 m 分 s 秒"/>\n        &lt;/s-col>\n    &lt;/s-row>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport statistic from \'santd/statistic\';\nimport col from \'santd/col\';\nimport row from \'santd/row\';\nexport default {\n    components: {\n        \'s-statistic\': statistic,\n        \'s-countdown\': statistic.Countdown,\n        \'s-col\': col,\n        \'s-row\': row\n    },\n    initData() {\n        return {\n            deadline: Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30\n        };\n    },\n    handleFinish() {\n        console.log(\'on-finish\');\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="倒计时"><span>倒计时</span><a href="#倒计时" class="anchor">#</a></h4><p>倒计时组件。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-statistic":i.a,"s-countdown":i.a.Countdown,"s-col":c.a,"s-row":r.a},initData:()=>({deadline:Date.now()+1728e5+3e4}),handleFinish(){console.log("on-finish")},template:'<div><s-row gutter="{{16}}"><s-col span="{{12}}"><s-countdown title="Countdown" value="{{deadline}}" on-finish="handleFinish"></s-countdown></s-col><s-col span="{{12}}"><s-countdown title="Million Seconds" value="{{deadline}}" format="HH:mm:ss:SSS"></s-countdown></s-col><s-col span="{{24}}" style="margin-top: 32px"><s-countdown title="Day Level" value="{{deadline}}" format="D 天 H 时 m 分 s 秒"></s-countdown></s-col></s-row></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1597202125639"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},f={template:'<section class="markdown"><h1 id="statistic-统计数值"><span>Statistic 统计数值</span><a href="#statistic-统计数值" class="anchor">#</a></h1><p>展示统计数值。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><ul><li>当需要突出某个或某组数字时。</li><li>当需要展示带描述的统计类数据时使用。</li></ul><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'};n.default=a.a.defineComponent({components:{readme:o,basic:l,unit:m,card:u,countdown:h,head:f},template:"\n        <div>\n            <head/>\n            <basic/>\n            <card/>\n            <unit/>\n            <countdown/>\n            <readme/>\n        </div>\n    "})},616:function(t,n,e){"use strict";e(617);var s=e(0),a=e.n(s),o=e(1),i=Object(o.b)("statistic")();var c=a.a.defineComponent({dataTypes:{decimalSeparator:s.DataTypes.string,formatter:s.DataTypes.func,groupSeparator:s.DataTypes.string,precision:s.DataTypes.number,prefix:s.DataTypes.string,suffix:s.DataTypes.string,title:s.DataTypes.string,value:s.DataTypes.oneOfType([s.DataTypes.string,s.DataTypes.number])},template:'\n        <div class="'.concat(i,'">\n            <div class="').concat(i,'-title" s-if="title">{{title}}</div>\n            <div class="').concat(i,'-content" style="{{valueStyle}}">\n                <span s-if="hasPrefix" class="').concat(i,'-content-prefix">\n                    <slot name="prefix" />{{prefix}}\n                </span>\n                <span class="').concat(i,'-content-value">\n                    <span class="').concat(i,'-content-value-int">{{showValue.int}}</span>\n                    <span class="').concat(i,'-content-value-decimal"\n                        s-if="{{showValue.decimal}}"\n                    >{{showValue.decimal}}</span>\n                </span>\n                <span s-if="hasSuffix" class="').concat(i,'-content-suffix">\n                    <slot name="suffix" />{{suffix}}\n                </span>\n            </div>\n        </div>\n    '),initData:function(){return{groupSeparator:",",value:0,decimalSeparator:"."}},inited:function(){this.data.set("hasPrefix",this.data.get("prefix")||!!this.sourceSlots.named.prefix),this.data.set("hasSuffix",this.data.get("suffix")||!!this.sourceSlots.named.suffix)},computed:{showValue:function(){var t=this.data.get("value"),n=this.data.get("formatter"),e=this.data.get("groupSeparator"),s=this.data.get("precision"),a=this.data.get("decimalSeparator");if(n&&"function"==typeof n)return{int:n(t)};var o=(t=String(t)).match(/^(-?)(\d*)(\.(\d+))?$/);if(!o)return{int:t};var i=o[1],c=o[2]||"0",r=o[4]||"";return c=c.replace(/\B(?=(\d{3})+(?!\d))/g,e),"number"==typeof s&&(r=function(t,n,e){for(var s=n?t.length:0,a=n-s,o="";a--;)o+=e;return n&&s<n?t+o:t}(r,s,"0").slice(0,s)),r&&(r="".concat(a).concat(r)),{int:i+c,decimal:r}}}}),r=e(2),l=e.n(r);function d(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,s)}return e}function p(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?d(Object(e),!0).forEach((function(n){u(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function u(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function m(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],s=!0,a=!1,o=void 0;try{for(var i,c=t[Symbol.iterator]();!(s=(i=c.next()).done)&&(e.push(i.value),!n||e.length!==n);s=!0);}catch(t){a=!0,o=t}finally{try{s||null==c.return||c.return()}finally{if(a)throw o}}return e}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return h(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return h(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,s=new Array(n);e<n;e++)s[e]=t[e];return s}var f=[[/Y+/g,31536e6],[/M+/g,2592e6],[/D+/g,864e5],[/H+/g,36e5],[/m+/g,6e4],[/s+/g,1e3],[/S+/g,1]];var g=a.a.defineComponent({initData:function(){return p(p({},c.prototype.initData()),{},{format:"HH:mm:ss"})},inited:function(){c.prototype.inited.bind(this)(),this.data.set("deadline",this.data.get("value")),this.data.set("value",this.getFormatValue()),this.syncTimer()},getFormatValue:function(){var t,n,e,s=l()(this.data.get("deadline")).valueOf(),a=l()().valueOf(),o=Math.max(s-a,0);return t=o,n=this.data.get("format"),e=t,f.forEach((function(t){var s=m(t,2),a=s[0],o=s[1];n=n.replace(a,(function(t){var n=Math.floor(e/o);return e-=n*o,function(t,n,e){for(var s=n?t.length:0,a=n-s,o="";a-- >0;)o+=e;return n&&s<n?o+t:t}(""+n,t.length,"0")}))})),n},syncTimer:function(){var t=this.data.get("deadline");l()(t).valueOf()>=Date.now()?this.startTimer():(this.stopTimer(),this.fire("finish"))},startTimer:function(){var t=this;this.countdownId||(this.countdownId=window.setInterval((function(){t.data.set("value",t.getFormatValue()),t.syncTimer()}),33))},stopTimer:function(){this.countdownId&&(window.clearInterval(this.countdownId),this.countdownId=null)}},c);c.Countdown=g;n.a=c},617:function(t,n,e){var s=e(4),a=e(618);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var o={insert:"head",singleton:!1};s(a,o);t.exports=a.locals||{}},618:function(t,n,e){(n=e(5)(!1)).push([t.i,'/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.santd-statistic {\n  font-family: "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.santd-statistic-title {\n  margin-bottom: 4px;\n  font-size: 14px;\n}\n.santd-statistic-content {\n  font-size: 24px;\n  font-family: Tahoma, \'Helvetica Neue\', "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n}\n.santd-statistic-content-value-decimal {\n  font-size: 16px;\n}\n.santd-statistic-content-prefix,\n.santd-statistic-content-suffix {\n  display: inline-block;\n}\n.santd-statistic-content-prefix {\n  margin-right: 4px;\n}\n.santd-statistic-content-suffix {\n  margin-left: 4px;\n  font-size: 16px;\n}\n',""]),t.exports=n}}]);