# apply-photo-mask
A Photoshop script to bulk apply b&amp;w photos as another photo's alpha mask.

Scenario: You have a photo of the product and mask photo but something went wrong and the only way to make it work as intended (merge every single photo pair and export to png) is to do everything manually. Here comes this script! It may not be perfect but it works (in most cases). 

The script was intended to be used on files generated by the Oribitvu products but with its customization options it should be able to be adapted to whatever situation you are in. My situation was a power failure that caused Orbitvu software to lose all project data, thus not being able to merge photos and masks in any way.

If you have found an error or know how to make the script better, faster or more versatile please let me know using GitHub features.

## how does it work
The script caches all the files inside a specified folder's names and opens those files one by one adding the photo with the exact same name and the specified suffix on top. Then it runs an action that extracts the alpha selection, applies it as a mask and removes unwanted clutter. Next, the file is exported as a PNG to previously specified folder. The script repeats the process until all the files it found matching the specified variables are processed.

## how to install and use
Download script and action files to your computer.  
Install the action and make sure it can be found inside Photoshop.  
To run the script use `File>Scripts>Browse...` in Photoshop and choose the script.  

The script is pretty straightforward and as customizable as I was able to make it.
You can specify:
  * Execution folder,
  * Mask files suffix,
  * Ignored files suffix,
  * Main files extension,
  * Mask files extension,
  * Export folder name.
  
## limitations
* The script will be executed on every single file in the folder with specified extension.
* Files which names do not end with the specified suffix will throw the script (eg. rotcrop).
* `_paint` files will be ignored and not respected when adding a mask file.
* The script will be executed on a whole folder without possibility to choose the starting point.
* The action is necessary for the script to work properly. Its name and folder musn't be changed.
* The script will name exported filed numerically, beginning with 0.
* While selecting an execution folder there is no way to see the files preview.
* The export folder will be always created in the script execution folder.
