// MOON_Remove_Optimize.js
//=============================================================================

/*:
 * @plugindesc Removes the "optimize" option when equipping items.
 * @author Anton Uklein
 * *
 * @help This plugin does not provide plugin commands.
 * 
 */


(function() {

	//There's no optimization in real life.
	Window_EquipCommand.prototype.makeCommandList = function() {
		this.addCommand(TextManager.equip2,   'equip');
		this.addCommand(TextManager.clear,    'clear');
	};

})();