import { BaseModelRepository, EnumGuilty, LocalException, Result } from "library_architecture_mvvm_modify_javascript";
import { Example } from "../../model/example/example";
import { ListExample } from "../../model/example/list_example";

export class ExampleRepository<T extends Example, Y extends ListExample<T>> extends BaseModelRepository<T,Y> {
    public constructor() {
        super();
    }

    protected override getBaseModelFromMapAndListKeys(map: Map<string, any>, listKeys: string[]): T {
        return new Example(
            this.getSafeValueWhereUsedInMethodGetModelFromMapAndListKeysAndIndexAndDefaultValue(map, listKeys, 0, "")) as T;
    }

    protected override getBaseListModelFromListModel(listModel: T[]): Y {
        return new ListExample(listModel) as Y;
    }

    public async getExampleParameterOne(): Promise<Result> {
        return this.getModeCallbackFromReleaseCallbackAndTestCallbackParameterEnumRWTMode(
            this.getExampleParameterOneWReleaseCallback,
            this.getExampleParameterOneWTestCallback)();
    }

    protected getExampleParameterOneWReleaseCallback = async (): Promise<Result> => {
        throw new LocalException("ExampleRepository",EnumGuilty.developer,"ExampleRepositoryQQGetExampleParameterOneWReleaseCallback");
    };

    protected getExampleParameterOneWTestCallback = async (): Promise<Result> => {
        throw new LocalException("ExampleRepository",EnumGuilty.developer,"ExampleRepositoryQQGetExampleParameterOneWTestCallback");
    };

    protected get getExampleParameterOneWListKeys(): Array<string> {
        throw new LocalException("ExampleRepository",EnumGuilty.developer,"ExampleRepositoryQQGetExampleParameterOneWListKeys");
    } 
}