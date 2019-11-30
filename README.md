# VSP

VSP is a new file format for biological specimens, and this toolkit provides format definition, encoding, and decoding tools for VSP files. 

## Definition of VSP
- (1) The file extension is set to VSP, V meaning Virtual, SP meaning Specimen, Species, hope to be semantically relevant and easy to remember; Specimens identification information, user comment information, etc., by a specimen all relevant data structuredly stored in a file, to achieve a specimen corresponding to a digital file, the concept is simple and clear, easy to understand. As long as the correct file is verified, you can ensure the integrity and effectiveness of the content, can solve the data format conversion challenges.
- (2) The file is stored in a JSON format encoded by UTF8 and can accommodate complex data objects and data relationships.
- (3) The internal fields refer to the DwC field standard and try to be uniform.
- (4) The fields that are missing in DwC, but commonly used, refer to international databases such as NSII, CVH, GBIF, iDigBio, and user habits, as supplements.
- (5) The specimen photo preservation is divided into two ways, one is to save only the url address of the network image, the VSP file is relatively small, suitable for only attention to the case of specimen data analysis. Another way is to use Base64 encoding to save to the VSP file, can also browse when offline network, the disadvantage is that the VSP file volume will be relatively large, suitable for the need to complete the preservation of specimen information in the application.
- (6) Displayed in a multilingual environment, the VSP decoder is required to implement the accurate display of the field name according to the language configuration, which is not related to the VSP file itself.

VSP 是一个全新的用于生物标本的文件格式。本套工具包提供了 VSP 文件的格式说明、编码、解码工具。

## VSP文件格式定义
1. 文件采用UTF8编码的JSON格式保存；
2. 文件扩展名设定为VSP，V 寓意 Virtual，SP 寓意 Specimen、Species，希望做到语义相关，方便记忆；
3. 内部字段参照了DwC字段标准：Darwin Core quick reference guide
4. DwC当中缺失，但是常用的字段，参考了NSII、CVH、GBIF、iDigBio等国际数据库，以及用户习惯，做了增补；
5. 照片保存分两种方式，一种是仅保存网络图像的url地址，VSP 文件比较小；另一种方式是将图像编码后保存到 VSP文件当中，编码方式采用Base64编码方案，便于离线断网时也能浏览，缺点是VSP文件体积会比较大；
6. 数字标本文件字段总体结构说明：
