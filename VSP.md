# VSP 文件格式定义

VSP 是一个全新的用于生物标本的文件格式。本套工具包提供了 VSP 文件的格式说明、编码、解码工具。

[TOC]

## VSP文件格式定义
1. 文件扩展名设定为VSP，V 寓意 Virtual，SP 寓意 Specimen、Species，希望做到语义相关，方便记忆；
2. 文件采用UTF8编码的JSON格式保存；
3. 内部字段参照了DwC字段标准：Darwin Core quick reference guide
4. DwC当中缺失，但是常用的字段，参考了NSII、CVH、GBIF、iDigBio等国际数据库，以及用户习惯，做了增补；
5. 照片保存分两种方式，一种是仅保存网络图像的url地址，VSP 文件比较小；另一种方式是将图像编码后保存到 VSP文件当中，编码方式采用Base64编码方案，便于离线断网时也能浏览，缺点是VSP文件体积会比较大；
6. 数字标本的内部字段根据情况选用，没有数据的、应用中没有必要的、没有意义的字段可以不用赋值，也不用在 VSP 文件当中出现；VSP解码与显示程序只会显示有数据有意义的字段内部。

## VSP数字标本文件总体结构说明：

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
	
## VSP文件实例

```
{
  "GUID": "d0fc644b-e945-11e8-a829-f8bc123b8e1e",
  "modified": "", 
  "Metadata": {
      "language": "zh",   
      "datasetName": "CSH Specimen Database",   
      "datasetID":"",
      "url": "http://www.ibiodiversity.net/eherbarium/Specimen.html?museum=CSH&barcode=CSH0062121", 
      "downloadTime": "2019-11-21"
  },
  "SyncSites":[
          {
              "websiteID":"CVH",
              "title":"中国数字植物标本馆",
              "url":"http://www.cvh.ac.cn/spm/CSH/CSH0062121"
          },
          {
              "websiteID":"NSII",
              "title":"国家标本资源共享平台",
              "url":"http://www.nsii.org.cn/2017/specimen.php?id=16878069"
          }
      ],
  "Copyright": {
      "institution": "上海辰山植物标本馆(CSH Herbarium)", 
      "website": "http://www.ibiodiversity.net/",
      "url": "http://www.ibiodiversity.net/eherbarium/Specimen.html?museum=CSH&barcode=CSH0062121",

      "accessRights": "保留所有版权",
      "bibliographicCitation": "CSH0062121:李宏庆 SDP02138(2011/06/04)",
      "rightsHolder": "上海辰山植物园",
      "license": "",

      "contact": "葛斌杰",
      "email": "gebinjie@csnbgsh.cn"
  },
  "Collection": {
      "occurrenceID": "",
      "catalogNumber": "",

      "recordedBy": "李宏庆",
      "recordNumber": "SDP02138",
      "fieldNumber":"",

      "countryCode": "CN",
      "country": "中国",
      "stateProvince": "上海市",
      "county": "普陀区",
      "municipality": "",
      "locality": "长风公园",
      "verbatimLocality":"",

      "habitat":"",

      "minimumElevationInMeters":"",
      "maximumElevationInMeters":"",
      "verbatimElevation":"",

      "minimumDepthInMeters":"",
      "maximumDepthInMeters":"",
      "verbatimDepth":"",

      "decimalLatitude": 31.2166667,
      "decimalLongitude": 121.0333333,
      "verbatimLatitude":"",
      "verbatimLongitude":"",

      "locationRemarks":"",

      "Day": "04",
      "Month": "06",
      "Year": "2011",
      "eventDate": "2011-06-04",
      "verbatimEventDate":"",

      "fieldNotes":""
  },
  "Specimen": {
      "id": "d0fc644b-e945-11e8-a829-f8bc123b8e1e",
      "barcode": "CSH0062121",
      "basisOfRecord": "PreservedSpecimen",
      "state": "良好",
      "typeStatus": "",
      "integrity": "有果"
  },
  "Taxon": {
      "kingdom": "Plantae",
      "phylum": "Gymnospermae",
      "class": "Gymonospermopsida",
      "order": "Ginkgoales",
      "family": "Ginkgoaceae",
      "genus": "Ginkgo",
      "species": "Ginkgo biloba",
      "infraSpecificEpithet": "",
      "taxonRank": "SPECIES",
      "scientificName": "Ginkgo biloba",
      "commonName": "银杏"
  },
  "Identifications": [
      {
          "identificationID": "",
          "scientificName": "Ginkgo biloba L.",
          "commonName":"银杏",
          "identifiedBy": "李宏庆",
          "dateIdentified":"2011/06/04",
          "identificationRemarks":""
      },{
          "identificationID": "",
          "scientificName": "Ginkgo biloba L.",
          "commonName":"银杏",
          "identifiedBy": "葛斌杰",
          "dateIdentified":"2011/06/05",
          "identificationRemarks":"测试"
      }
  ],
  "Photos": [
      {
      "url": "http://www.ibiodiversity.net/Data/CSH/Normal/d0fc644b-e945-11e8-a829-f8bc123b8e1e.JPG",
      "data": "",
      "category": "Specimen",
      "tags": ""
      }
  ],
  "Storage": {
      "storageID": "081-11"
  },
  "Comments": [
      {
      "id":"",
      "userID": "chinaontology",
      "comment": "这份标本的经纬度格式未转换",
      "time": "2018-11-20 18:00:00"
      }, 
      {
      "id":"",
      "userID": "gebinjie",
      "comment": "已经处理",
      "time": "2018-11-20 23:15:00"
      }
  ]
}
```
