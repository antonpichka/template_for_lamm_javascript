import { BaseModelRepository, EnumGuilty, EnumRWTMode, LocalException, Result } from "library_architecture_mvvm_modify_javascript";
import { User } from "../../model/user/user";
import { ListUser } from "../../model/user/list_user";

export class UserRepository<T extends User, Y extends ListUser<T>> extends BaseModelRepository<T,Y> {
    public constructor() {
        super();
    }

    protected override getBaseModelFromMapAndListKeys(map: Map<string, any>, listKeys: string[]): T {
        return new User(
            this.getSafeValueWhereUsedInMethodGetModelFromMapAndListKeysAndIndexAndDefaultValue(map, listKeys, 0, ""),
            this.getSafeValueWhereUsedInMethodGetModelFromMapAndListKeysAndIndexAndDefaultValue(map, listKeys, 1, "")) as T;
    }

    protected override getBaseListModelFromListModel(listModel: T[]): Y {
        return new ListUser(listModel) as Y;
    }

    public async getListUserWhereTheSearchWasPerformedFromQParameterOne(q: string): Promise<Result> {
        return this.getModeCallbackFromReleaseCallbackAndTestCallbackParameterEnumRWTMode(
            this.getListUserWhereTheSearchWasPerformedFromQParameterOneWReleaseCallback,
            this.getListUserWhereTheSearchWasPerformedFromQParameterOneWTestCallback)(q);
    }

    public async getUserFromUsernameParameterOne(username: string): Promise<Result> {
        return this.getModeCallbackFromReleaseCallbackAndTestCallbackParameterEnumRWTMode(
            this.getUserFromUsernameParameterOneWReleaseCallback,
            this.getUserFromUsernameParameterOneWTestCallback)(username);
    }

    protected getListUserWhereTheSearchWasPerformedFromQParameterOneWReleaseCallback = async (q: string): Promise<Result> => {
        throw new LocalException("UserRepository",EnumGuilty.developer,"UserRepositoryQQGetListUserWhereTheSearchWasPerformedFromQParameterOneWReleaseCallback");
    };

    protected getListUserWhereTheSearchWasPerformedFromQParameterOneWTestCallback = async (q: string): Promise<Result> => {
        const map = new Map<string,any>(
            [
                ["users",
                    [
                        {
                            "uniqueId" : "b5f9b56a-be60-4732-ba75-e8f4baac8c39",
                            "username" : q,
                        },
                        {
                            "uniqueId" : "d1fe0703-5a4a-469e-9007-734af71224a6",
                            "username" : q+"w",
                        },
                    ],
                ],
            ]);
        const listModel = new Array<T>();
        const users = map.get("users");
        for(const user of users) {
            listModel.push(this.getBaseModelFromMapAndListKeys(
                new Map<string,any>([
                    ["uniqueId", user["uniqueId"]],
                    ["username", user["username"]], 
                ]),
                this.getListUserWhereTheSearchWasPerformedFromQParameterOneWListKeys));
        }
        await new Promise(resolve => setTimeout(resolve,1000));
        return Result.success(this.getBaseListModelFromListModel(listModel));
    };

    protected get getListUserWhereTheSearchWasPerformedFromQParameterOneWListKeys(): Array<string> {
        return ["uniqueId","username"];
    } 

    protected getUserFromUsernameParameterOneWReleaseCallback = async (username: string): Promise<Result> => {
        throw new LocalException("UserRepository",EnumGuilty.developer,"UserRepositoryQQGetUserFromUsernameParameterOneWReleaseCallback");
    };

    protected getUserFromUsernameParameterOneWTestCallback = async (username: string): Promise<Result> => {
        await new Promise(resolve => setTimeout(resolve,1000));
        return Result.success(this.getBaseModelFromMapAndListKeys(
            new Map<string,any>([
                ["uniqueId","62d2ff5d-af0f-46bd-87db-990284b140e2"],
                ["username",username]
            ]),
            this.getUserFromUsernameParameterOneWListKeys));
    };

    protected get getUserFromUsernameParameterOneWListKeys(): Array<string> {
        return ["uniqueId","username"];
    } 
}