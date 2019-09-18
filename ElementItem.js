/*var ElementItem = (function () {
    var container , type;

    function ElementItem(_container,_type) {
        container = _container;
        type = _type;
    }

    ElementItem.prototype.getContainer = function () {
        return container;
    };

    ElementItem.prototype.getType = function () {
        return type;
    };

    return ElementItem;
})();*/

var ElementItem = function (_container,_type) {
    var container = _container , type = _type;

    this.getContainer = function () {
        return container;
    };

    this.getType = function () {
        return type;
    };

};