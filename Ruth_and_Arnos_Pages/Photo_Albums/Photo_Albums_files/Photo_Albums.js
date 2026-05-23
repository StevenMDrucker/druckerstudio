// Created by iWeb 3.0.4 local-build-20120106

function createMediaStream_id3()
{return IWCreateMediaCollection("file://localhost/Users/arnodrucker/Documents/A%26R%20Web%20site/Ruth_and_Arnos_Pages/Photo_Albums/Photo_Albums_files/rss.xml",true,255,["No photos yet","%d photo","%d photos"],["","%d clip","%d clips"]);}
function initializeMediaStream_id3()
{createMediaStream_id3().load('file://localhost/Users/arnodrucker/Documents/A%26R%20Web%20site/Ruth_and_Arnos_Pages/Photo_Albums',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget19'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id3',{pageIndex:0}));});}
function layoutMediaGrid_id3(range)
{createMediaStream_id3().load('file://localhost/Users/arnodrucker/Documents/A%26R%20Web%20site/Ruth_and_Arnos_Pages/Photo_Albums',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id3',new IWPhotoGridLayout(3,new IWSize(215,161),new IWSize(215,31),new IWSize(229,207),27,27,0,new IWSize(21,23)),new IWPhotoFrame([IWCreateImage('Photo_Albums_files/ul.png'),IWCreateImage('Photo_Albums_files/top.png'),IWCreateImage('Photo_Albums_files/ur.png'),IWCreateImage('Photo_Albums_files/right.png'),IWCreateImage('Photo_Albums_files/lr.png'),IWCreateImage('Photo_Albums_files/bottom.png'),IWCreateImage('Photo_Albums_files/ll.png'),IWCreateImage('Photo_Albums_files/left.png')],null,0,0.400000,130.000000,10.000000,118.000000,45.000000,147.000000,30.000000,157.000000,83.000000,251.000000,120.000000,260.000000,120.000000,null,null,null,0.300000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget19',null,'widget20',{showTitle:true,showMetric:true})});}
function relayoutMediaGrid_id3(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id3(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id3(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Photo_Albums_files/Photo_AlbumsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');NotificationCenter.addObserver(null,relayoutMediaGrid_id3,'RangeChanged','id3')
Widget.onload();fixAllIEPNGs('../Media/transparent.gif');IMpreload('Photo_Albums_files','shapeimage_1','0');IMpreload('Photo_Albums_files','shapeimage_1','1');fixupAllIEPNGBGs();fixupIECSS3Opacity('id4');initializeMediaStream_id3()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
