# VSP文件C#组件包

主要功能包括了C#语言编写的Dll组件包，基于.NET 平台，可用于服务器后台以及桌面应用等环境当中。

## C# 读取数字标本文件
```
static void ReadVSP()
{
    // 加载数字标本文件
    string file = @"E:\iBiodiversity\iBiodiversity.net\App\VSP\file\CSH0062121.vsp";
    VSP mySpecimen = VSP.Load(file);

    // 读取标本文件内容
    Console.WriteLine("GUID:" + mySpecimen.GUID);
    Console.WriteLine("条形码:" + mySpecimen.Specimen.barcode);
    Console.WriteLine("标本类型:" + mySpecimen.Specimen.basisOfRecord);
    Console.WriteLine("国家:" + mySpecimen.Collection.country);
    Console.WriteLine("省份:" + mySpecimen.Collection.stateProvince);
    Console.WriteLine("采集人:" + mySpecimen.Collection.recordedBy);
    Console.WriteLine("采集人编号:" + mySpecimen.Collection.recordNumber);

    // 将标本内容导入自己的记录库 ......

    // 标本图像可以单独保存为文件
    mySpecimen.SavePhoto(@"E:\CSH0062121.jpg");
}   
```
## C# 写入数字标本文件
```
static void WriteVSP()
{
    // 实例化数字标本文件对象
    VSP mySpecimen = new VSP();

    // 将自己的标本数据写入 VSP 对象
    mySpecimen.GUID = "d0fc644b-e945-11e8-a829-f8bc123b8e1e";
    mySpecimen.Specimen.barcode = "CSH0062121";
    mySpecimen.Specimen.basisOfRecord = "PreservedSpecimen";
    mySpecimen.Collection.country = "中国";
    mySpecimen.Collection.stateProvince = "上海";
    mySpecimen.Collection.recordedBy = "李宏庆";
    mySpecimen.Collection.recordNumber = "SDP02138";

    // 将标本照片加入标本图集（可以添加多张）
    mySpecimen.AddPhoto(
      @"E:\CSH0062121.jpg",         // 图像文件地址
      "CSH0062121 李宏庆-SDP02138",  // 图像默认标题
      "李宏庆",                      // 照片作者
      "2012-12-10",                 // 照片时间
      "叶片;果实");                  // 照片标签

    // 保存 VSP 文件
    mySpecimen.SaveFile(@"E:\CSH0062121-Photo.vsp");
}
```
