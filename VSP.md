# VSP 文件格式定义

VSP文件格式定义，以常用的字段为例，展示文件的结构。
<table>
  <tr><th>模块</th><th>内部字段名</th><th>解释</th></tr>
  <tr><td colspan='2'>GUID</td><td>唯一编码</td></tr>
  <tr><td colspan='2'>modified</td><td>更新时间</td></tr>
  <tr><td rowspan='6'>Metadata</td><td colspan='2'>元数据信息块</td></tr>
	<tr><td>language</td><td>界面语言</td></tr>
	<tr><td>datasetName</td><td>数据集名称</td></tr>
	<tr><td>datasetID</td><td>数据集ID</td></tr>
	<tr><td>url</td><td>数字标本来源的URL</td></tr>
	<tr><td>downloadTime</td><td>数字标本下载时间</td></tr>
  <tr><td rowspan='4'>SyncSites</td><td colspan='2'>数据镜像网站与网址信息</td></tr>
	<tr><td>websiteID</td><td>网站ID</td></tr>
	<tr><td>title</td><td>网站名称</td></tr>
	<tr><td>url</td><td>网址</td></tr>
<tr><td rowspan='10'>Copyright</td><td colspan='2'>版权信息</td></tr>
	<tr><td>institution</td><td>网址</td></tr>
	<tr><td>website</td><td>网址</td></tr>
	<tr><td>url</td><td>网址</td></tr>
	<tr><td>accessRights</td><td>访问权限</td></tr>
	<tr><td>bibliographicCitation</td><td>引用格式</td></tr>
	<tr><td>rightsHolder</td><td>版权所有</td></tr>
	<tr><td>license</td><td>用户协议</td></tr>
	<tr><td>contact</td><td>联系人</td></tr>
	<tr><td>email</td><td>电子邮件</td></tr>
  <tr><td rowspan='20'>Collection</td><td colspan='2'>采集信息</td></tr>	
	<tr><td>occurrenceID</td><td>编号</td></tr>
	<tr><td>recordedBy</td><td>采集人</td></tr>
	<tr><td>recordNumber</td><td>采集人编号</td></tr>
	<tr><td>fieldNumber</td><td>野外编号</td></tr>
	<tr><td>countryCode</td><td>国家代码</td></tr>
	<tr><td>country</td><td>国家</td></tr>
	<tr><td>stateProvince</td><td>州省</td></tr>
	<tr><td>county</td><td>市县</td></tr>
	<tr><td>locality</td><td>地名</td></tr>
	<tr><td>verbatimLocality</td><td>地名原始记录</td></tr>
	<tr><td>locationRemarks</td><td>地名备注</td></tr>
	<tr><td>decimalLatitude</td><td>十进制纬度</td></tr>
	<tr><td>decimalLongitude</td><td>十进制经度</td></tr>
	<tr><td>verbatimLatitude</td><td>纬度原始记录</td></tr>
	<tr><td>verbatimLongitude</td><td>经度原始记录</td></tr>
	<tr><td>verbatimElevation</td><td>海拔记录</td></tr>
	<tr><td>habitat</td><td>生境</td></tr>
	<tr><td>eventDate</td><td>日期</td></tr>
	<tr><td>verbatimEventDate</td><td>日期原始记录</td></tr>
	<tr><td>fieldNotes</td><td>野外备注</td></tr>
<tr><td rowspan='7'>Specimen</td><td colspan='2'>标本信息</td></tr>
	<tr><td>id</td><td>标本编号</td></tr>
	<tr><td>barcode</td><td>标本条形码</td></tr>
	<tr><td>basisOfRecord</td><td>标本类别</td></tr>
	<tr><td>state</td><td>标本状态</td></tr>
	<tr><td>typeStatus</td><td>模式类别</td></tr>
	<tr><td>integrity</td><td>标本完整性</td></tr>
<tr><td rowspan='12'>Taxon</td><td colspan='2'>物种分类信息</td></tr>
	<tr><td>kingdom</td><td>界</td></tr>
	<tr><td>phylum</td><td>门</td></tr>
	<tr><td>class</td><td>纲</td></tr>
	<tr><td>order</td><td>目</td></tr>
	<tr><td>family</td><td>科</td></tr>
	<tr><td>genus</td><td>属</td></tr>
	<tr><td>species</td><td>种</td></tr>
	<tr><td>infraSpecificEpithet</td><td>种下等级</td></tr>
	<tr><td>taxonRank</td><td>分类阶元</td></tr>
	<tr><td>scientificName</td><td>拉丁学名</td></tr>
	<tr><td>commonName</td><td>俗名</td></tr>
<tr><td rowspan='7'>Identifications</td><td colspan='2'>鉴定信息</td></tr>	
	<tr><td>identificationID</td><td>鉴定记录ID</td></tr>
	<tr><td>scientificName</td><td>学名</td></tr>
	<tr><td>commonName</td><td>俗名</td></tr>
	<tr><td>identifiedBy</td><td>鉴定人</td></tr>
	<tr><td>dateIdentified</td><td>鉴定时间</td></tr>
	<tr><td>identificationRemarks</td><td>鉴定备注</td></tr>
<tr><td rowspan='7'>Photos</td><td colspan='2'>照片信息</td></tr>
	<tr><td>title</td><td>图像标题</td></tr>
	<tr><td>author</td><td>图像作者</td></tr>
	<tr><td>url</td><td>图像网络地址</td></tr>
	<tr><td>data</td><td>图像Base64编码</td></tr>
	<tr><td>catagory</td><td>图像类别</td></tr>
	<tr><td>tags</td><td>图像标签</td></tr>
<tr><td rowspan='2'>Storage</td><td colspan='2'>馆藏存储信息</td></tr>	
	<tr><td>storageID</td><td>馆藏位置编号</td></tr>
<tr><td rowspan='5'>Comments</td><td colspan='2'>用户互动评论信息</td></tr>	
	<tr><td>id</td><td>评论编号</td></tr>
	<tr><td>userID</td><td>用户ID</td></tr>
	<tr><td>comment</td><td>评论内容</td></tr>
	<tr><td>time</td><td>评论时间</td></tr>
</table>
	
