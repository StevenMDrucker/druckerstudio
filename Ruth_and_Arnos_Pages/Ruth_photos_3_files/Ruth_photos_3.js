// Created by iWeb 3.0.4 local-build-20120106

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,206),url:'Ruth_photos_3_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'Ruth_photos_3_files/stroke_1.png'},{rect:new IWRect(5,-5,278,10),url:'Ruth_photos_3_files/stroke_2.png'},{rect:new IWRect(283,-5,10,10),url:'Ruth_photos_3_files/stroke_3.png'},{rect:new IWRect(283,5,10,206),url:'Ruth_photos_3_files/stroke_4.png'},{rect:new IWRect(283,211,10,10),url:'Ruth_photos_3_files/stroke_5.png'},{rect:new IWRect(5,211,278,10),url:'Ruth_photos_3_files/stroke_6.png'},{rect:new IWRect(-5,211,10,10),url:'Ruth_photos_3_files/stroke_7.png'}],new IWSize(288,216))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Ruth_photos_3_files/Ruth_photos_3Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id4');applyEffects()}
function onPageUnload()
{Widget.onunload();}
