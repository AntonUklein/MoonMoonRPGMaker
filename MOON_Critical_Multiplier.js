// MOON_Critical_Multiplier.js
//=============================================================================

/*:
* @plugindesc How much damage do you want your critical hits to do?
* @author Anton Uklein
*
* @param Crit Multiplier
* @desc What's the damage multiplier you want?
* Default: 2.5
* @default 2.5
*
* @help This plugin allows you to specify the multiplier that the game will use for
* your critical hits. The default is set to 2.5, as in 250% damage of a regular hit.
*/


(function() {


	Game_Action.prototype.applyCritical = function(damage) {
		var parameters = PluginManager.parameters('MOON_Critical_Multiplier');
		var multiplier = Number(parameters["Crit Multiplier"]);
		return damage * multiplier;
	};

})();