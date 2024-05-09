import { BaseModel } from "library_architecture_mvvm_modify_javascript";

export class SecurityUser extends BaseModel {
    public readonly uniqueIdByUser: string;
    public readonly password: string;

    public constructor(uniqueIdByUser: string, password: string) {
        super(uniqueIdByUser);
        this.uniqueIdByUser = uniqueIdByUser;
        this.password = password;
    }

    public override get getClone(): SecurityUser {
        return new SecurityUser(this.uniqueIdByUser,this.password);
    }

    public override toString(): string {
        return "SecurityUser(uniqueIdByUser: " + this.uniqueIdByUser + ", " 
            + "password: " + this.password + ")";
    }
}