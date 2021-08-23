var selectedFolder = Folder.selectDialog ("Please choose script execution folder.");

if (selectedFolder != null){
    if(selectedFolder instanceof Folder){
}
else {
    alert ("Not a folder!", "Error!", "error");
    throw new Error ("Not a folder");
    throw '';
    }
}
else {
    alert ("Please choose a folder!", "Error!", "error");
    throw new Error ("No folder selected");
    throw '';
    }


var maskSuffix = prompt ("Please specify mask files suffix.", "_mask_processed");

if (maskSuffix !=null){
    }
else { 
    alert ("Please specify mask files suffix.", "Error!", "error");
    throw new Error ("No mask suffix specified");
    throw '';
    }


var ignoredSuffix = prompt ("Please specify ignored files suffix.", "_mask");


var fileExtension = prompt ("Please specify input files extension.", "jpg");
var maskFileExtension = prompt ("Please specify mask files extension.", "tiff");

var fileList = selectedFolder.getFiles ("*." + fileExtension);


String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};
var filteredFileList = [];
if (fileList.length > 0){
    for (var i=0; i<fileList.length; i++){
        if (!fileList[i].name.endsWith(maskSuffix + "." + fileExtension) && !fileList[i].name.endsWith(ignoredSuffix + "." + fileExtension)) {
            filteredFileList.push(fileList[i]);
        }
    }
}

 var destinationFolder = prompt("Please set the export folder name.", "fullres");
        if (destinationFolder !=null){
    }
else { 
    alert ("Please set the export folder name!", "Error!", "error");
    throw new Error ("No export folder set");
    throw '';
    }


if (filteredFileList.length > 0){
    for (i=0; i<filteredFileList.length; i++){
        sourceDoc = app.open(filteredFileList[i]);
        
        sourceFileString = filteredFileList[i].toString();
        sourceFileStringLength = sourceFileString.length;
        sourceFileExtensionLength = fileExtension.length + 1;
        sourceFileNoExtensionLength = sourceFileStringLength - sourceFileExtensionLength;
        sourceFileStringNoExtension = sourceFileString.slice(0, sourceFileNoExtensionLength);
        maskFile = sourceFileStringNoExtension + maskSuffix + "." + maskFileExtension;
        
        maskLayer = app.open(new File(maskFile));
        app.activeDocument.activeLayer.copy();
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument.paste();
        
        app.doAction("Apply mask", "Scripts");

        var destination = new Folder(selectedFolder.fullName + "\\" + destinationFolder);
        if(!destination.exists){
            destination.create()
            }
        var destinationFile = File(destination + "\\" + [i] + ".png");
        var pngOptions = new PNGSaveOptions();
        pngOptions.compression = 0;
        pngOptions.interlaced = false;
                
        app.activeDocument.saveAs(destinationFile, pngOptions, true, Extension.LOWERCASE);
        
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        }
    }
else {
    alert ("Couldn't find matching files in the selected folder!", "Error!", "error");
    throw new Error ("No matching files");
    throw '';
    } 