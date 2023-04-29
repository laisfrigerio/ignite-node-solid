"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
var User_1 = require("../../model/User");
var UsersRepository = /** @class */ (function () {
    function UsersRepository() {
        this.users = [];
    }
    UsersRepository.getInstance = function () {
        if (!UsersRepository.INSTANCE) {
            UsersRepository.INSTANCE = new UsersRepository();
        }
        return UsersRepository.INSTANCE;
    };
    UsersRepository.prototype.create = function (_a) {
        var name = _a.name, email = _a.email;
        var userAlreadyExists = this.users.some(function (user) { return user.email === email; });
        if (userAlreadyExists) {
            throw new Error("User is already registered");
        }
        var user = new User_1.User();
        Object.assign(user, {
            name: name,
            email: email,
        });
        this.users.push(user);
        return user;
    };
    UsersRepository.prototype.findById = function (id) {
        var user = this.users.find(function (user) { return user.id === id; });
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    };
    UsersRepository.prototype.findByEmail = function (email) {
        var user = this.users.find(function (user) { return user.email === email; });
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    };
    UsersRepository.prototype.turnAdmin = function (receivedUser) {
        var id = receivedUser.id;
        var user = this.findById(id);
        user.admin = true;
        return user;
    };
    UsersRepository.prototype.list = function () {
        return this.users;
    };
    return UsersRepository;
}());
exports.UsersRepository = UsersRepository;
