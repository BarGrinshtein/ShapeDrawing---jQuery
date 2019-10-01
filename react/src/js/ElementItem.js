var ElementItem = function (_container,_type) {
    var container = _container , type = _type;

    this.getContainer = function () {
        return container;
    };

    this.getType = function () {
        return type;
    };

};

export default ElementItem;