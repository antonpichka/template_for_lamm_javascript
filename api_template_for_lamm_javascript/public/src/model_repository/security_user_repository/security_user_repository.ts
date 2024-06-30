import { BaseModelRepository, EnumGuilty, LocalException, Result } from "library_architecture_mvvm_modify_javascript";
import { SecurityUser } from "../../model/security_user/security_user";
import { ListSecurityUser } from "../../model/security_user/list_security_user";

export class SecurityUserRepository<T extends SecurityUser, Y extends ListSecurityUser<T>> extends BaseModelRepository<T,Y> {
    public constructor() {
        super();
    }

    protected override getBaseModelFromMapAndListKeys(map: Map<string, any>, listKeys: string[]): T {
        return new SecurityUser(
            this.getSafeValueWhereUsedInMethodGetModelFromMapAndListKeysAndIndexAndDefaultValue(map, listKeys, 0, ""),
            this.getSafeValueWhereUsedInMethodGetModelFromMapAndListKeysAndIndexAndDefaultValue(map, listKeys, 1, "")) as T;
    }

    protected override getBaseListModelFromListModel(listModel: T[]): Y {
        return new ListSecurityUser(listModel) as Y;
    }

    public async getSecurityUserFromUniqueIdByUserAndPasswordParameterOne(uniqueIdByUser: string, password: string): Promise<Result> {
        return this.getModeCallbackFromReleaseCallbackAndTestCallbackParameterEnumRWTMode(
            this.getSecurityUserFromUniqueIdByUserAndPasswordParameterOneWReleaseCallback,
            this.getSecurityUserFromUniqueIdByUserAndPasswordParameterOneWTestCallback)(uniqueIdByUser,password);
    }

    protected getSecurityUserFromUniqueIdByUserAndPasswordParameterOneWReleaseCallback = async (uniqueIdByUser: string, password: string): Promise<Result> => {
        throw new LocalException("SecurityUserRepository",EnumGuilty.developer,"SecurityUserRepositoryQQGetSecurityUserFromUniqueIdByUserAndPasswordParameterOneWReleaseCallback");
    };

    protected getSecurityUserFromUniqueIdByUserAndPasswordParameterOneWTestCallback = async (uniqueIdByUser: string, password: string): Promise<Result> => {
        await new Promise(resolve => setTimeout(resolve,1000));
        return Result.success(this.getBaseModelFromMapAndListKeys(
            new Map<string,any>([
                ["uniqueIdByUser", uniqueIdByUser],
                ["password", password]
            ]),
            this.getSecurityUserFromUniqueIdByUserAndPasswordParameterOneWListKeys));
    };

    protected get getSecurityUserFromUniqueIdByUserAndPasswordParameterOneWListKeys(): Array<string> {
        return ["uniqueIdByUser","password"];
    } 
}