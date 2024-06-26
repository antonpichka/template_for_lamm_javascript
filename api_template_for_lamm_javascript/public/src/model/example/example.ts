import { BaseModel } from "library_architecture_mvvm_modify_javascript";

export class Example extends BaseModel {
    public constructor(uniqueId: string) {
        super(uniqueId);
    }

    public override get getClone(): Example {
        return new Example(this.uniqueId);
    }

    public override toString(): string {
        return "Example(uniqueId: " + this.uniqueId + ")";
    }
}