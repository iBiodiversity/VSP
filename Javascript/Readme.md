# VSP Javascript Package

## 1. VSP文件的Javascript工具包基本使用方法：   
1. 引用 vsp.js 与 vsp.css 文件  
2. 加载并显示数字标本, 形如：  
```
var vsp = new VSP();  // 初始化vsp组件
vsp.Language = "zh";  // 显示语言设定为中文，en为英文，留空在显示内置字段名
vsp.RenderEngine = 'Html'; // 将vsp文件显示为html
vsp.loadSpecimen("file/CSH0062121.vsp","vsp_viewer"); // 显示id=vsp_viewer的 Div中  
```
## 2. 界面语言定制 
VSP 的 JavaScript 组件已经内置了中文、英文的字段，如果网站是多语言环境，可以在显示时决定字段显示语言。如果需要将字段显示为其他语言，或者做个性化显示，只需要加载自己的语言配置，对需要的字段做出翻译即可，简单方便。除了字段以外，如果需要修改显示的样式效果，可以修改 vsp.css 样式表。因为 VSP 文件格式简单透明，用户也可以完全重写自己的显示效果代码，既高效又灵活。

**应用实例1：**    
将界面语言修改为日文，在加载前给vsp组件传递日文的字段名称配置
```
// 设定新的显示语言，以日语为例
var vsp = new VSP({language:"jp", fields:{
            Metadata:"メタデータ",
            Specimen:"標本情報",
            Collection:"情報収集", 
            /** 更多的字段设置（略） **/
    }}); 
```

**应用实例2：**    
如果想在活植物记录管理中使用vsp，此时标本常用的采集人字段一般对应为引种人，也可以通过简单配置实现显示效果的改变。   
```
// 在活植物引种应用中，字段一般不显示为采集人，而是引种人
var vsp = new VSP({language:"zh", fields:{
       recordedBy:"引种人",
       recordNumber:"引种人编号"
    }}); 
```
