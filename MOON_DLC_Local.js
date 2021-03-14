//=============================================================================
// MOON_DLC_Local.js
//=============================================================================

/*:
 * @plugindesc Insecure method of obtaining DLC information, but it works.
 * @author Anton Uklein
 * *
 * @help Remember to have a DLC folder in your game directory to make this work!
 *
 * Please note that this is supposed to be an internal plugin, so it has
 * almost no error correction involved in any way,
 * and your project might break if called improperly.
 *
 *
 * Call a Script DLC_Check() to check for all the variables in the array
 * dlc_filenames.
 * If you call it this way, it checks for ALL the files at once
 * and flips switches in the order the files are detected, starting at 100.
 *
 * Alternatively, you can call a Script
 * DLC_CheckS(filename, switchValue),
 * which will look for a file with the name that's
 * the same as filename, and set the switch at switchValue
 * to true or false, depending on whether or not it's found.
 *
 * Note that filenames do not have to end in .txt and
 * switchValue begins with a 1, not a 0.
 *
 * @param dlc_filenames
 * @type Text[]
 * @text DLC
 * @desc Load your dlc filenames here!
 * @default ["debug.txt"]
 *
 * 
 */


(function() {


//Thanks to gotofritz and Ilyich from StackOverflow
//for this nice and clean regex solution!
function extractAllText(str){
  const re = /"(.*?)"/g;
  const result = [];
  var current;
  while (current = re.exec(str)) {
    result.push(current.pop());
  }
  return result.length > 0
    ? result
    : [str];
}

DLC_CheckS = function(str, switchv) {
    var textArray = extractAllText(str);

    var fs = require('fs');
    var path = process.mainModule.filename;
    var ret = path.replace('index.html','');
    var files = fs.readdirSync(ret);
    //console.log(files);
    for (i in textArray)
    {
    if(fs.existsSync(ret + "dlc/" + textArray[i])) {
        //console.log("Detected " + textArray[i]);
        $gameSwitches.setValue(parseInt(switchv), true);
    }
    else {
        //console.log("Not detected " + textArray[i]);
        $gameSwitches.setValue(parseInt(switchv), false);
    }
    }
    return true;
};

DLC_Check = function() {
    var parameters = PluginManager.parameters('MOON_DLC_LOCAL');
    var textArray = extractAllText(String(parameters['dlc_filenames']));

    var fs = require('fs');
    var path = process.mainModule.filename;
    var ret = path.replace('index.html','');
    var files = fs.readdirSync(ret);
    //console.log(files);
    for (i in textArray)
    {
    if(fs.existsSync(ret + "dlc/" + textArray[i])) {
        //console.log("Detected " + textArray[i]);
        $gameSwitches.setValue(100 + parseInt(i), true);
    }
    else {
        //console.log("Not detected " + textArray[i]);
        $gameSwitches.setValue(100 + parseInt(i), false);
    }
    }
    return true;
};

})();