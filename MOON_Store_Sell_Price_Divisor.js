// MOON_Store_Sell_Price_Divisor.js
//=============================================================================

/*:
* @plugindesc Manages by how much the store offers for your items.
* @author Anton Uklein
*
* @param Store Buy Divisor
* @desc How much will the store undercut you by?
* Default: 2
* @default 2
*
* @help This plugin allows you to specify the divisor by which the store will offer
* to buy your items back from you at. An example would be 2, by which, the store 
* will buy items back from your party at half the price. If set to 4, the store 
* will buy items back from your party at a quarter of the price.
*/


(function() {


	//Adam Smith hates your guts
	Scene_Shop.prototype.sellingPrice = function() {
		var parameters = PluginManager.parameters('MOON_Store_Sell_Price_Divisor');
		var divisor = Number(parameters["Store Buy Divisor"]);
		return Math.floor(this._item.price / divisor);
	};

})();