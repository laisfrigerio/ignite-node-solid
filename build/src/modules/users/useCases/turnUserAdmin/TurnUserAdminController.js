"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurnUserAdminController = void 0;
var TurnUserAdminController = /** @class */ (function () {
    function TurnUserAdminController(turnUserAdminUseCase) {
        this.turnUserAdminUseCase = turnUserAdminUseCase;
    }
    TurnUserAdminController.prototype.handle = function (request, response) {
        try {
            var user_id = request.params.user_id;
            var user = this.turnUserAdminUseCase.execute({ user_id: user_id });
            return response.status(200).json(__assign({}, user));
        }
        catch (error) {
            return response.status(404).json({ error: error.message });
        }
    };
    return TurnUserAdminController;
}());
exports.TurnUserAdminController = TurnUserAdminController;
