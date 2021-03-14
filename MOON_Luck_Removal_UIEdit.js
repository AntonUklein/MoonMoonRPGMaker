// MOON_Luck_Removal_UIEdit.js
//=============================================================================

/*:
 * @plugindesc Removes the luck stat from being drawn in the status menu.
 * @author Anton Uklein
 * *
 * @help This plugin does not provide plugin commands.
 * 
 */


(function() {

	Window_Status.prototype.drawParameters = function(x, y) {
		var lineHeight = this.lineHeight();
		for (var i = 0; i < 5; i++) { //Note: Original file was 'i < 6'
			var paramId = i + 2;
			var y2 = y + lineHeight * i;
			this.changeTextColor(this.systemColor());
			this.drawText(TextManager.param(paramId), x, y2, 160);
			this.resetTextColor();
			this.drawText(this._actor.param(paramId), x + 160, y2, 60, 'right');
		}
	};

})();