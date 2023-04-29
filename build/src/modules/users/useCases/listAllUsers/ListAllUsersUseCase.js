"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAllUsersUseCase = void 0;
var ListAllUsersUseCase = /** @class */ (function () {
    function ListAllUsersUseCase(usersRepository) {
        this.usersRepository = usersRepository;
    }
    ListAllUsersUseCase.prototype.execute = function (_a) {
        var user_id = _a.user_id;
        var user = this.usersRepository.findById(user_id);
        if (!user.admin) {
            throw new Error("User is not admin");
        }
        return this.usersRepository.list();
    };
    return ListAllUsersUseCase;
}());
exports.ListAllUsersUseCase = ListAllUsersUseCase;
