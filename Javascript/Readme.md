# VSP Javascript Package

VSP文件的Javascript工具包使用方法：   
1. 引用 vsp.js 与 vsp.css 文件  
2. 加载并显示数字标本, 形如：  
```
var vsp = new VSP();  // 初始化vsp组件
vsp.Language = "zh";  // 显示语言设定为中文，en为英文，留空在显示内置字段名
vsp.RenderEngine = 'Html'; // 将vsp文件显示为html
vsp.loadSpecimen("file/CSH0062121.vsp","vsp_viewer"); // 显示id=vsp_viewer的 Div中  
```
