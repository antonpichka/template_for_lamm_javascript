const { BaseModel }  = require("library_architecture_mvvm_modify_javascript");

class User extends BaseModel {
    #id;
    #username;
    #createdAt

    constructor(uniqueId, id, username, createdAt) {
        super(uniqueId);
        this.#id = id;
        this.#username = username;
        this.#createdAt = createdAt;
    }

    get getClone() {
        return new User(this.uniqueId,this.id,this.username,this.createdAt);
    }

    toString() {
        return "User(uniqueId: " + this.uniqueId + ", " 
            + "id: " + this.id + ", "
            + "username: " + this.username + ", "
            + "createdAt: " + this.createdAt.toLocaleString() + ")";
    }

    get id() {
        return this.#id;
    }

    get username() {
        return this.#username;
    }

    get createdAt() {
        return this.#createdAt;
    }
}

module.exports = User;