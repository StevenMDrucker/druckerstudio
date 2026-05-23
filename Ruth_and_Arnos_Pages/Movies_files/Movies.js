// Created by iWeb 3.0.4 local-build-20120106

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id3" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="376" height="298" style="height: 298px; left: 30px; position: absolute; top: 17px; width: 376px; z-index: 1; "><param name="src" value="Media/Bowing%20Deer.mov" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id3" type="video/quicktime" width="376" height="298" style="height: 298px; left: 30px; position: absolute; top: 17px; width: 376px; z-index: 1; "><param name="src" value="Movies_files/Bowing%20Deer-1.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/Bowing%20Deer.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id3" type="video/quicktime" width="376" height="298" data="Media/Bowing%20Deer.mov" style="height: 298px; left: 30px; position: absolute; top: 17px; width: 376px; z-index: 1; "><param name="src" value="Media/Bowing%20Deer.mov"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
function writeMovie2()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id4" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="376" height="298" style="height: 298px; left: 34px; position: absolute; top: 338px; width: 376px; z-index: 1; "><param name="src" value="Media/Maiko%20%26%20Geisha%20dance%20%20%231.mov" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id4" type="video/quicktime" width="376" height="298" style="height: 298px; left: 34px; position: absolute; top: 338px; width: 376px; z-index: 1; "><param name="src" value="Movies_files/Maiko%20%26%20Geisha%20dance%20%201-1.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/Maiko%20%26%20Geisha%20dance%20%20%231.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id4" type="video/quicktime" width="376" height="298" data="Media/Maiko%20%26%20Geisha%20dance%20%20%231.mov" style="height: 298px; left: 34px; position: absolute; top: 338px; width: 376px; z-index: 1; "><param name="src" value="Media/Maiko%20%26%20Geisha%20dance%20%20%231.mov"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Movies_files/MoviesMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id7');performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
