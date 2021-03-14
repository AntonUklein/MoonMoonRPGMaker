// MOON_Luck_Removal.js
//=============================================================================

/*:
 * @plugindesc Removes any modification from luck.
 * @author Anton Uklein
 * *
 * @help This plugin does not provide plugin commands.
 * 
 */


(function() {

	
	Game_Action.prototype.lukEffectRate = function(target) {
        return 1.0;
    };


})();