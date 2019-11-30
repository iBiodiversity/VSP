
# Definition of VSP

VSP is a new file format for biological specimens, and this toolkit provides format definition, encoding, and decoding tools for VSP files. 
- (1) The file extension is set to VSP, V meaning Virtual, SP meaning Specimen, Species, hope to be semantically relevant and easy to remember; Specimens identification information, user comment information, etc., by a specimen all relevant data structuredly stored in a file, to achieve a specimen corresponding to a digital file, the concept is simple and clear, easy to understand. As long as the correct file is verified, you can ensure the integrity and effectiveness of the content, can solve the data format conversion challenges.
- (2) The file is stored in a JSON format encoded by UTF8 and can accommodate complex data objects and data relationships.
- (3) The internal fields refer to the DwC field standard and try to be uniform.
- (4) The fields that are missing in DwC, but commonly used, refer to international databases such as NSII, CVH, GBIF, iDigBio, and user habits, as supplements.
- (5) The specimen photo preservation is divided into two ways, one is to save only the url address of the network image, the VSP file is relatively small, suitable for only attention to the case of specimen data analysis. Another way is to use Base64 encoding to save to the VSP file, can also browse when offline network, the disadvantage is that the VSP file volume will be relatively large, suitable for the need to complete the preservation of specimen information in the application.
- (6) Displayed in a multilingual environment, the VSP decoder is required to implement the accurate display of the field name according to the language configuration, which is not related to the VSP file itself.
