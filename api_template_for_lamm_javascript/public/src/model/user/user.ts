import { BaseModel } from "library_architecture_mvvm_modify_javascript";

export class User extends BaseModel {
    public readonly username: string;

    public constructor(uniqueId: string, username: string) {
        super(uniqueId);
        this.username = username;
    }

    public override get getClone(): User {
        return new User(this.uniqueId,this.username);
    }

    public override toString(): string {
        return "User(uniqueId: " + this.uniqueId + ", " 
            + "username: " + this.username + ")";
    }
}