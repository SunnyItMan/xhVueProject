/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['ui/cellalignpicker.js']) {
  _$jscoverage['ui/cellalignpicker.js'] = [];
  _$jscoverage['ui/cellalignpicker.js'][3] = 0;
  _$jscoverage['ui/cellalignpicker.js'][4] = 0;
  _$jscoverage['ui/cellalignpicker.js'][14] = 0;
  _$jscoverage['ui/cellalignpicker.js'][15] = 0;
  _$jscoverage['ui/cellalignpicker.js'][16] = 0;
  _$jscoverage['ui/cellalignpicker.js'][17] = 0;
  _$jscoverage['ui/cellalignpicker.js'][19] = 0;
  _$jscoverage['ui/cellalignpicker.js'][23] = 0;
  _$jscoverage['ui/cellalignpicker.js'][40] = 0;
  _$jscoverage['ui/cellalignpicker.js'][41] = 0;
  _$jscoverage['ui/cellalignpicker.js'][46] = 0;
  _$jscoverage['ui/cellalignpicker.js'][47] = 0;
  _$jscoverage['ui/cellalignpicker.js'][51] = 0;
  _$jscoverage['ui/cellalignpicker.js'][58] = 0;
  _$jscoverage['ui/cellalignpicker.js'][60] = 0;
  _$jscoverage['ui/cellalignpicker.js'][61] = 0;
  _$jscoverage['ui/cellalignpicker.js'][63] = 0;
  _$jscoverage['ui/cellalignpicker.js'][65] = 0;
  _$jscoverage['ui/cellalignpicker.js'][67] = 0;
  _$jscoverage['ui/cellalignpicker.js'][71] = 0;
  _$jscoverage['ui/cellalignpicker.js'][80] = 0;
  _$jscoverage['ui/cellalignpicker.js'][83] = 0;
  _$jscoverage['ui/cellalignpicker.js'][84] = 0;
  _$jscoverage['ui/cellalignpicker.js'][85] = 0;
  _$jscoverage['ui/cellalignpicker.js'][86] = 0;
  _$jscoverage['ui/cellalignpicker.js'][91] = 0;
  _$jscoverage['ui/cellalignpicker.js'][92] = 0;
}
_$jscoverage['ui/cellalignpicker.js'].source = ["<span class=\"c\">///import core</span>","<span class=\"c\">///import uicore</span>","<span class=\"k\">(</span><span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","    <span class=\"k\">var</span> utils <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>utils<span class=\"k\">,</span>","        Popup <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>ui<span class=\"k\">.</span>Popup<span class=\"k\">,</span>","        Stateful <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>ui<span class=\"k\">.</span>Stateful<span class=\"k\">,</span>","        UIBase <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>ui<span class=\"k\">.</span>UIBase<span class=\"k\">;</span>","","    <span class=\"c\">/**</span>","<span class=\"c\">     * &#35813;&#21442;&#25968;&#23558;&#26032;&#22686;&#19968;&#20010;&#21442;&#25968;&#65306; selected&#65292; &#21442;&#25968;&#31867;&#22411;&#20026;&#19968;&#20010;Object&#65292; &#24418;&#22914;{ 'align': 'center', 'valign': 'top' }&#65292; &#34920;&#31034;&#21333;&#20803;&#26684;&#30340;&#21021;&#22987;</span>","<span class=\"c\">     * &#23545;&#40784;&#29366;&#24577;&#20026;&#65306; &#31446;&#30452;&#23621;&#19978;&#65292;&#27700;&#24179;&#23621;&#20013;; &#20854;&#20013; align&#30340;&#21462;&#20540;&#20026;&#65306;'center', 'left', 'right'; valign&#30340;&#21462;&#20540;&#20026;: 'top', 'middle', 'bottom'</span>","<span class=\"c\">     * @update 2013/4/2 hancong03@baidu.com</span>","<span class=\"c\">     */</span>","    <span class=\"k\">var</span> CellAlignPicker <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>ui<span class=\"k\">.</span>CellAlignPicker <span class=\"k\">=</span> <span class=\"k\">function</span> <span class=\"k\">(</span>options<span class=\"k\">)</span> <span class=\"k\">{</span>","        <span class=\"k\">this</span><span class=\"k\">.</span>initOptions<span class=\"k\">(</span>options<span class=\"k\">);</span>","        <span class=\"k\">this</span><span class=\"k\">.</span>initSelected<span class=\"k\">();</span>","        <span class=\"k\">this</span><span class=\"k\">.</span>initCellAlignPicker<span class=\"k\">();</span>","    <span class=\"k\">}</span><span class=\"k\">;</span>","    CellAlignPicker<span class=\"k\">.</span>prototype <span class=\"k\">=</span> <span class=\"k\">{</span>","        <span class=\"c\">//&#21021;&#22987;&#21270;&#36873;&#20013;&#29366;&#24577;&#65292; &#35813;&#26041;&#27861;&#23558;&#26681;&#25454;&#20256;&#36882;&#36827;&#26469;&#30340;&#21442;&#25968;&#33719;&#21462;&#21040;&#24212;&#35813;&#36873;&#20013;&#30340;&#23545;&#40784;&#26041;&#24335;&#22270;&#26631;&#30340;&#32034;&#24341;</span>","        initSelected<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">()</span><span class=\"k\">{</span>","","            <span class=\"k\">var</span> status <span class=\"k\">=</span> <span class=\"k\">{</span>","","                valign<span class=\"k\">:</span> <span class=\"k\">{</span>","                    top<span class=\"k\">:</span> <span class=\"s\">0</span><span class=\"k\">,</span>","                    middle<span class=\"k\">:</span> <span class=\"s\">1</span><span class=\"k\">,</span>","                    bottom<span class=\"k\">:</span> <span class=\"s\">2</span>","                <span class=\"k\">}</span><span class=\"k\">,</span>","                align<span class=\"k\">:</span> <span class=\"k\">{</span>","                    left<span class=\"k\">:</span> <span class=\"s\">0</span><span class=\"k\">,</span>","                    center<span class=\"k\">:</span> <span class=\"s\">1</span><span class=\"k\">,</span>","                    right<span class=\"k\">:</span> <span class=\"s\">2</span>","                <span class=\"k\">}</span><span class=\"k\">,</span>","                count<span class=\"k\">:</span> <span class=\"s\">3</span>","","                <span class=\"k\">}</span><span class=\"k\">,</span>","                result <span class=\"k\">=</span> <span class=\"k\">-</span><span class=\"s\">1</span><span class=\"k\">;</span>","","            <span class=\"k\">if</span><span class=\"k\">(</span> <span class=\"k\">this</span><span class=\"k\">.</span>selected <span class=\"k\">)</span> <span class=\"k\">{</span>","                <span class=\"k\">this</span><span class=\"k\">.</span>selectedIndex <span class=\"k\">=</span> status<span class=\"k\">.</span>valign<span class=\"k\">[</span> <span class=\"k\">this</span><span class=\"k\">.</span>selected<span class=\"k\">.</span>valign <span class=\"k\">]</span> <span class=\"k\">*</span> status<span class=\"k\">.</span>count <span class=\"k\">+</span> status<span class=\"k\">.</span>align<span class=\"k\">[</span> <span class=\"k\">this</span><span class=\"k\">.</span>selected<span class=\"k\">.</span>align <span class=\"k\">];</span>","            <span class=\"k\">}</span>","","        <span class=\"k\">}</span><span class=\"k\">,</span>","        initCellAlignPicker<span class=\"k\">:</span><span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>initUIBase<span class=\"k\">();</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>Stateful_init<span class=\"k\">();</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        getHtmlTpl<span class=\"k\">:</span><span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","","            <span class=\"k\">var</span> alignType <span class=\"k\">=</span> <span class=\"k\">[</span> <span class=\"s\">'left'</span><span class=\"k\">,</span> <span class=\"s\">'center'</span><span class=\"k\">,</span> <span class=\"s\">'right'</span> <span class=\"k\">],</span>","                COUNT <span class=\"k\">=</span> <span class=\"s\">9</span><span class=\"k\">,</span>","                tempClassName <span class=\"k\">=</span> <span class=\"k\">null</span><span class=\"k\">,</span>","                tempIndex <span class=\"k\">=</span> <span class=\"k\">-</span><span class=\"s\">1</span><span class=\"k\">,</span>","                tmpl <span class=\"k\">=</span> <span class=\"k\">[];</span>","","","            <span class=\"k\">for</span><span class=\"k\">(</span> <span class=\"k\">var</span> i<span class=\"k\">=</span> <span class=\"s\">0</span><span class=\"k\">;</span> i<span class=\"k\">&lt;</span>COUNT<span class=\"k\">;</span> i<span class=\"k\">++</span> <span class=\"k\">)</span> <span class=\"k\">{</span>","","                tempClassName <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>selectedIndex <span class=\"k\">===</span> i <span class=\"k\">?</span> <span class=\"s\">' class=\"edui-cellalign-selected\" '</span> <span class=\"k\">:</span> <span class=\"s\">''</span><span class=\"k\">;</span>","                tempIndex <span class=\"k\">=</span> i <span class=\"k\">%</span> <span class=\"s\">3</span><span class=\"k\">;</span>","","                tempIndex <span class=\"k\">===</span> <span class=\"s\">0</span> <span class=\"k\">&amp;&amp;</span> tmpl<span class=\"k\">.</span>push<span class=\"k\">(</span><span class=\"s\">'&lt;tr&gt;'</span><span class=\"k\">);</span>","","                tmpl<span class=\"k\">.</span>push<span class=\"k\">(</span> <span class=\"s\">'&lt;td index=\"'</span><span class=\"k\">+</span> i <span class=\"k\">+</span><span class=\"s\">'\" '</span> <span class=\"k\">+</span> tempClassName <span class=\"k\">+</span> <span class=\"s\">' stateful&gt;&lt;div class=\"edui-icon edui-'</span><span class=\"k\">+</span> alignType<span class=\"k\">[</span> tempIndex <span class=\"k\">]</span> <span class=\"k\">+</span><span class=\"s\">'\"&gt;&lt;/div&gt;&lt;/td&gt;'</span> <span class=\"k\">);</span>","","                tempIndex <span class=\"k\">===</span> <span class=\"s\">2</span> <span class=\"k\">&amp;&amp;</span> tmpl<span class=\"k\">.</span>push<span class=\"k\">(</span><span class=\"s\">'&lt;/tr&gt;'</span><span class=\"k\">);</span>","","            <span class=\"k\">}</span>","","            <span class=\"k\">return</span> <span class=\"s\">'&lt;div id=\"##\" class=\"edui-cellalignpicker %%\"&gt;'</span> <span class=\"k\">+</span>","                <span class=\"s\">'&lt;div class=\"edui-cellalignpicker-body\"&gt;'</span> <span class=\"k\">+</span>","                <span class=\"s\">'&lt;table onclick=\"$$._onClick(event);\"&gt;'</span> <span class=\"k\">+</span>","                tmpl<span class=\"k\">.</span>join<span class=\"k\">(</span><span class=\"s\">''</span><span class=\"k\">)</span> <span class=\"k\">+</span>","                <span class=\"s\">'&lt;/table&gt;'</span> <span class=\"k\">+</span>","                <span class=\"s\">'&lt;/div&gt;'</span> <span class=\"k\">+</span>","                <span class=\"s\">'&lt;/div&gt;'</span><span class=\"k\">;</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        getStateDom<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">()</span><span class=\"k\">{</span>","            <span class=\"k\">return</span> <span class=\"k\">this</span><span class=\"k\">.</span>target<span class=\"k\">;</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        _onClick<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">(</span>evt<span class=\"k\">)</span><span class=\"k\">{</span>","            <span class=\"k\">var</span> target<span class=\"k\">=</span> evt<span class=\"k\">.</span>target <span class=\"k\">||</span> evt<span class=\"k\">.</span>srcElement<span class=\"k\">;</span>","            <span class=\"k\">if</span><span class=\"k\">(</span><span class=\"s\">/icon/</span><span class=\"k\">.</span>test<span class=\"k\">(</span>target<span class=\"k\">.</span>className<span class=\"k\">))</span><span class=\"k\">{</span>","                <span class=\"k\">this</span><span class=\"k\">.</span>items<span class=\"k\">[</span>target<span class=\"k\">.</span>parentNode<span class=\"k\">.</span>getAttribute<span class=\"k\">(</span><span class=\"s\">\"index\"</span><span class=\"k\">)].</span>onclick<span class=\"k\">();</span>","                Popup<span class=\"k\">.</span>postHide<span class=\"k\">(</span>evt<span class=\"k\">);</span>","            <span class=\"k\">}</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        _UIBase_render<span class=\"k\">:</span>UIBase<span class=\"k\">.</span>prototype<span class=\"k\">.</span>render","    <span class=\"k\">}</span><span class=\"k\">;</span>","    utils<span class=\"k\">.</span>inherits<span class=\"k\">(</span>CellAlignPicker<span class=\"k\">,</span> UIBase<span class=\"k\">);</span>","    utils<span class=\"k\">.</span>extend<span class=\"k\">(</span>CellAlignPicker<span class=\"k\">.</span>prototype<span class=\"k\">,</span> Stateful<span class=\"k\">,</span><span class=\"k\">true</span><span class=\"k\">);</span>","<span class=\"k\">}</span><span class=\"k\">)();</span>","","",""];
_$jscoverage['ui/cellalignpicker.js'][3]++;
(function () {
  _$jscoverage['ui/cellalignpicker.js'][4]++;
  var utils = baidu.editor.utils, Popup = baidu.editor.ui.Popup, Stateful = baidu.editor.ui.Stateful, UIBase = baidu.editor.ui.UIBase;
  _$jscoverage['ui/cellalignpicker.js'][14]++;
  var CellAlignPicker = (baidu.editor.ui.CellAlignPicker = (function (options) {
  _$jscoverage['ui/cellalignpicker.js'][15]++;
  this.initOptions(options);
  _$jscoverage['ui/cellalignpicker.js'][16]++;
  this.initSelected();
  _$jscoverage['ui/cellalignpicker.js'][17]++;
  this.initCellAlignPicker();
}));
  _$jscoverage['ui/cellalignpicker.js'][19]++;
  CellAlignPicker.prototype = {initSelected: (function () {
  _$jscoverage['ui/cellalignpicker.js'][23]++;
  var status = {valign: {top: 0, middle: 1, bottom: 2}, align: {left: 0, center: 1, right: 2}, count: 3}, result = -1;
  _$jscoverage['ui/cellalignpicker.js'][40]++;
  if (this.selected) {
    _$jscoverage['ui/cellalignpicker.js'][41]++;
    this.selectedIndex = ((status.valign[this.selected.valign] * status.count) + status.align[this.selected.align]);
  }
}), initCellAlignPicker: (function () {
  _$jscoverage['ui/cellalignpicker.js'][46]++;
  this.initUIBase();
  _$jscoverage['ui/cellalignpicker.js'][47]++;
  this.Stateful_init();
}), getHtmlTpl: (function () {
  _$jscoverage['ui/cellalignpicker.js'][51]++;
  var alignType = ["left", "center", "right"], COUNT = 9, tempClassName = null, tempIndex = -1, tmpl = [];
  _$jscoverage['ui/cellalignpicker.js'][58]++;
  for (var i = 0; (i < COUNT); (i++)) {
    _$jscoverage['ui/cellalignpicker.js'][60]++;
    tempClassName = ((this.selectedIndex === i)? " class=\"edui-cellalign-selected\" ": "");
    _$jscoverage['ui/cellalignpicker.js'][61]++;
    tempIndex = (i % 3);
    _$jscoverage['ui/cellalignpicker.js'][63]++;
    ((tempIndex === 0) && tmpl.push("<tr>"));
    _$jscoverage['ui/cellalignpicker.js'][65]++;
    tmpl.push(("<td index=\"" + i + "\" " + tempClassName + " stateful><div class=\"edui-icon edui-" + alignType[tempIndex] + "\"></div></td>"));
    _$jscoverage['ui/cellalignpicker.js'][67]++;
    ((tempIndex === 2) && tmpl.push("</tr>"));
}
  _$jscoverage['ui/cellalignpicker.js'][71]++;
  return ("<div id=\"##\" class=\"edui-cellalignpicker %%\">" + "<div class=\"edui-cellalignpicker-body\">" + "<table onclick=\"$$._onClick(event);\">" + tmpl.join("") + "</table>" + "</div>" + "</div>");
}), getStateDom: (function () {
  _$jscoverage['ui/cellalignpicker.js'][80]++;
  return this.target;
}), _onClick: (function (evt) {
  _$jscoverage['ui/cellalignpicker.js'][83]++;
  var target = (evt.target || evt.srcElement);
  _$jscoverage['ui/cellalignpicker.js'][84]++;
  if (/icon/.test(target.className)) {
    _$jscoverage['ui/cellalignpicker.js'][85]++;
    this.items[target.parentNode.getAttribute("index")].onclick();
    _$jscoverage['ui/cellalignpicker.js'][86]++;
    Popup.postHide(evt);
  }
}), _UIBase_render: UIBase.prototype.render};
  _$jscoverage['ui/cellalignpicker.js'][91]++;
  utils.inherits(CellAlignPicker, UIBase);
  _$jscoverage['ui/cellalignpicker.js'][92]++;
  utils.extend(CellAlignPicker.prototype, Stateful, true);
})();
