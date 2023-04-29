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
exports.CreateUserController = void 0;
var CreateUserController = /** @class */ (function () {
    function CreateUserController(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }
    CreateUserController.prototype.handle = function (request, response) {
        try {
            var _a = request.body, name_1 = _a.name, email = _a.email;
            var user = this.createUserUseCase.execute({ name: name_1, email: email });
            return response.status(201).json(__assign({}, user));
        }
        catch (error) {
            return response.status(400).json({ error: error.message });
        }
    };
    return CreateUserController;
}());
exports.CreateUserController = CreateUserController;
