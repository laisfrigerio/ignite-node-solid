"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
var CreateUserUseCase = /** @class */ (function () {
    function CreateUserUseCase(usersRepository) {
        this.usersRepository = usersRepository;
    }
    CreateUserUseCase.prototype.execute = function (_a) {
        var email = _a.email, name = _a.name;
        return this.usersRepository.create({ email: email, name: name });
    };
    return CreateUserUseCase;
}());
exports.CreateUserUseCase = CreateUserUseCase;
