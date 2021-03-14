// MOON_Experience_Variation.js
//=============================================================================

/*:
* @plugindesc How much variation do you want to have in the amount of XP you gain?
* @author Anton Uklein
*
* @param XP Variation
* @desc How much variation do you want?
* Default: 20
* @default 20
*
* @help This plugin assumes variation in the same way that RPG Maker assumes variation
* by default. This means that it's all percent, but do not write in a percent symbol.
*
* A variation of 20 on an enemy that gives 100 XP means that it can give anywhere from
* 90 to 110 experience after a battle.
*/


(function() {


Game_Enemy.prototype.exp = function() {
	var parameters = PluginManager.parameters('MOON_Experience_Variation');
	var multiplier = Number(parameters["XP Variation"]);
	multiplier *= 0.01; //convert percent to float
    return Math.round(this.enemy().exp * (1.0 - (multiplier * 0.5)) + Math.round(Math.random() * multiplier * this.enemy().exp));
};

})();