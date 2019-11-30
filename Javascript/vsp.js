function VSP(config){
    this.ID = config.ID;
    this.Language = "zh";
    this.RenderEngine = 'Html';
    this.currentVSP = null;
    this.Sections = ["Metadata","Specimen","Taxon","Collection","Identifications",
    "Storage","SyncSites","Copyright"];
    this.fieldDictionary = {
        zh:{
            Metadata:"元数据",
            Specimen:"标本信息",
            Collection:"采集信息",
            Taxon:"物种信息",
            Copyright:"版权信息",
            Storage:"保藏信息",
            SyncSites:"数据镜像",
            basisOfRecord:"记录类型",
            downloadTime:"下载时间",
            language:"语言",
            datasetName:"数据集",
            barcode:"条形码",
            Identifications:"鉴定信息",
            identifiedBy:"鉴定人",
            dateIdentified:"鉴定时间",
            url:"网址",
            websiteID:"网站ID",
            title:"名称",
            integrity:"标本完整性",
            state:"标本状态",
            kingdom:"界",
            phylum:"门",
            class:"纲",
            order:"目",
            family:"科",
            genus:"属",
            species:"种",
            taxonRank:"分类阶元",
            scientificName:"学名",
            commonName:"俗名",
            recordedBy:"采集人",
            recordNumber:"采集人编号",
            countryCode:"国别代码",
            country:"国家",
            stateProvince:"州省",
            county:"市县",
            locality:"地名",
            decimalLatitude:"纬度",
            decimalLongitude:"经度",
            Day:"日",
            Month:"月",
            Year:"年",
            eventDate:"日期",
            identificationRemarks:"鉴定备注",
            institution:"机构",
            website:"网站",
            accessRights:"访问权限",
            bibliographicCitation:"引用",
            rightsHolder:"权利所有",
            contact:"联系人",
            email:"电子邮件"
        },
        en:{
            Metadata:"Metadata",
            Specimen:"Specimen Info",
            Collection:"Collection Info",
            Taxon:"Taxonomy",
            Copyright:"Copyright",
            Storage:"Storage Info",
            SyncSites:"Data Sync Sites", 
            basisOfRecord:"Record Type",
            barcode:"Barcode",
            Identifications:"Identification",
            identifiedBy:"Identified By",
            dateIdentified:"Identified Date"
        }
    };
}

VSP.prototype = { 
    constructor:VSP,
    version:'VPS 1.0',
    showVersion:function(){
        console.log(this.version);
        $("#js_version").html("JS Ver:"+this.version);
    },
    getFieldTitle:function(field){
        if (typeof(this.Language)=="string" && this.Language.length>0 
            && this.fieldDictionary[this.Language]){
            if (this.fieldDictionary[this.Language][field]){
                return this.fieldDictionary[this.Language][field];
            } 
        }
        return field;
    },
    getFieldValue:function(field,value){
        var self = this;
        if (typeof(value)=="object"){
            return self.getObjectView(value);
        }
        if (field.toLowerCase().substr(field.length-3)=="url"){
            return '<a href="' + value + '">' + value + '</a>';
        }
        return value;
    },
    getObjectCSharpCode:function(obj){
        var self = this;
        var code = '';
        for(var fld in obj){
            code += 'public ';
            var fld_type = typeof(obj[fld]);
            if (fld_type=="number"){
                fld_type = "double";
            }
            if (fld_type=="boolean"){
                fld_type = "bool";
            }
            code += fld_type + ' '+fld+' { get; set; }\r\n';
        }
        return code;
    },
    getObjectView:function(obj){
        console.log("getObjectView:");
        console.log(obj);
        if (obj==null || obj==undefined){
            return '';
        }
        var self = this;
        var code = '';
        if (self.RenderEngine=='Markdown'){
            code += '| **Title** | Value |\r\n|----|----|\r\n';
        }
        for(var fld in obj){
            if (obj[fld]){
                if (typeof(obj[fld])=="object"){
                    code += self.getFieldValue(fld,obj[fld]);
                }else{
                    switch(self.RenderEngine){
                        case "Html":
                            code += '<div class="vsp_field">'
                            + '<div class="title">'
                            + self.getFieldTitle(fld)
                            + '</div>'
                            + '<div class="value">'
                            + self.getFieldValue(fld,obj[fld])
                            + '</div>' 
                            + '</div><!--field END-->'; 
                            break;
                        case "Markdown":
                            code += '| '
                            + ' **'
                            + self.getFieldTitle(fld)
                            + '** | '
                            + self.getFieldValue(fld,obj[fld])
                            + ' |' 
                            + '\r\n'; 
                            break;
                        case "CSV":
                            code += self.getFieldValue(fld,obj[fld]) + '\t';
                            break;
                    }
                }
            }
        }
        return code;
    },
    buildIdentifications:function(list){
        var self = this;
        var code = '';
        for(var i=0;i<list.length;i++){
            var ident = list[i];
            switch(this.RenderEngine){
                case "Html":
                    code += '<div class="vsp_ident">'
                    + '<div class="lname">'
                    + ident.scientificName
                    + '</div>'
                    + '<div class="cname">'
                    + ident.commonName
                    + '</div>'
                    + '<div class="user">'
                    + ident.identifiedBy
                    + '</div>'
                    + '<div class="date">'
                    + ident.dateIdentified
                    + '</div>'
                    + '</div><!--vsp_ident END-->';
                    break;
                case "Markdown":
                    code += '**Identification:** '
                        + ident.scientificName
                        + ' '
                        + ident.commonName
                        + ' ('
                        + ident.identifiedBy
                        + ' @'
                        + ident.dateIdentified
                        + '\r\n\r\n';
                case "CSV":
                    code += ident.scientificName
                    + '\t'
                    + ident.commonName
                    + '\t'
                    + ident.identifiedBy
                    + '\t'
                    + ident.dateIdentified
                    + '\t'
                    break;
            }
            
        }
        return code;
    },
    getImageSource:function(photo){
        if (!photo){
            return '';
        }
        if (photo.url){
            return photo.url;
        }else{
            if (photo.data){
                var b64header = 'data:image/jpg;base64,';
                if (photo.data.indexOf(b64header)!=0){
                    return b64header+photo.data;
                }
                return photo.data; 
            }
        }
        return '';
    },
    renderVSPHeader:function(){
        var self = this;
        switch(self.RenderEngine){
            case "Html":
                return '<div class="vsp">';
            case "Markdown":
                return self.renderTitle(1,this.currentVSP.Specimen.barcode);
            default:
                return '';
        }
    },
    repeatChar:function(char,n){
        var x = '';
        for(var i=0;i<n;i++){
            x += char;
        }
        return x;
    },
    renderTitle:function(n,title){
        var self = this;
        switch(self.RenderEngine){
            case "Html":
                return '<h'+n+'>'+title+'</h'+n+'>\r\n';
            case "Markdown":
                return self.repeatChar("#",n)+' '+ title +'\r\n';
            default:
                return '';
        }
    },
    renderVSPTailer:function(){
        var self = this;
        switch(self.RenderEngine){
            case "Html":
                return '</div><!--vsp END-->\r\n';
            case "Markdown":
                return '[^_^]: # VSP File End.\r\n';
            default:
                return '';
        }
    },
    renderImage:function(){
        var self = this;
        var code = '';
        switch(self.RenderEngine){
            case "Html":
                if (self.currentVSP.Photos && self.currentVSP.Photos.length>0){
                    // 默认显示第一张图
                    code += '<div class="vsp_photo">'
                        + '<img src="'
                        + self.getImageSource(self.currentVSP.Photos[0])
                        + '">'
                        + '</div>';
                }
                break;
            case "Markdown":
                if (self.currentVSP.Photos && self.currentVSP.Photos.length>0){
                    // 默认显示第一张图
                    code += '![]('
                        + self.getImageSource(self.currentVSP.Photos[0])
                        + ')\r\n';
                }
                break;
            default:
                return '';
        }
        return code;
    },
    render:function(callback){
        var self = this;
        var htm = self.renderVSPHeader();
        htm += self.renderImage();       
        htm += (self.RenderEngine=='Html')?'<div class="vsp_data">\r\n':'';
        for(var i=0;i<self.Sections.length;i++){
            var sec = self.Sections[i];
            console.log(i+"->"+self.getFieldTitle(sec));
            htm += self.renderTitle(2, self.getFieldTitle(sec));
            if (sec=="Identification"){
                htm += self.buildIdentifications(self.currentVSP[sec]);
                continue;
            }
            htm += self.getObjectView(self.currentVSP[sec]);
        }
        htm += (self.RenderEngine=='Html')?'</div><!-- vsp_data END -->\r\n':'';
        htm += self.renderVSPTailer();
        if (typeof(callback)=="function"){
            callback(htm);
        }
    },
    loadSpecimen:function(vsp_file,callback){
        var self = this;
        $.getJSON(vsp_file,function(vsp){
            console.log(vsp); 
            self.currentVSP = vsp;
            if (typeof(callback)=="function"){
                callback(vsp);
                return; 
            }
            if (typeof(callback)=="string"){
                self.render(function(data){
                    // console.log(data); 
                    $("#"+callback).html(data);
                });
            }
        });        
    }, 
    download:function(content, filename) {
        var eleLink = document.createElement('a');
        eleLink.download = filename;
        eleLink.style.display = 'none';
        // 字符内容转变成blob地址
        var blob = new Blob([content]);
        eleLink.href = URL.createObjectURL(blob);
        // 触发点击
        document.body.appendChild(eleLink);
        eleLink.click();
        // 然后移除
        document.body.removeChild(eleLink);
    }
}