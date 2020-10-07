# Pictogram

A React Component Library that allows you to display your images in a nice way with MetaData

## Summary

Using react I created a library that will alow you pass a unlimited amount of pictures and create a cool looking collage of images. 
Each image has a set of metadata (PropType defined below) that take in props to display the image and the metadata. The user can then scroll over the image
and see the metadata for each image. The user can also click on each picture and a modal with the picture and the metadata will be shown.

## Technical Details:
There are two main components that are used to create this library PictureFrame and PictoGram, they are explained below

### PictureFrame (PictureFrame Component)
Each Picture and it's metadata is shown in a picture frame that is populated from the PictoGram Component. When you scroll over the picutre the metadata is shown.
I used useState hooks to check wheter or not if the cursor is over the pciture.

### Mutiple Picture (PictoGram Component)
Populates mutiple pictureFrame components and shows them in a flex box. This component uses hooks to see if you have clicked on a image, if you have it passes
in the element into a state object which then populates the modal. The modal is being imported from React Bootstrap. 

### Responsive Desgin
Since the PictureFrames are put in a flex box, this allows us to basically move the page around and the pictogram adapts to the new size. 

## ToDo
Add a more indepth description that will be passed into the modal and allow the user to read a more detailed description

## Free To Use and Imporve
If you see a issue or want to make sopmething better, feel free to fork the code or put a PR on it. 
