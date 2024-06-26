import { BaseModelRepository, EnumGuilty, EnumRWTMode, LocalException, Result } from "library_architecture_mvvm_modify_javascript";
import { Example } from "../../model/example/example";
import { ListExample } from "../../model/example/list_example";

export class ExampleRepository<T extends Example, Y extends ListExample<T>> extends BaseModelRepository<T,Y> {
    public constructor(enumRWTMode: EnumRWTMode) {
        super(enumRWTMode);
    }

    protected override getBaseModelFromMapAndListKeys(map: Map<string, any>, listKeys: string[]): T {
        if(listKeys.length <= 0) {
            return new Example("") as T;
        }
        return new Example(map.has(listKeys[0]) ? map.get(listKeys[0]) : "") as T;
    }

    protected override getBaseListModelFromListModel(listModel: T[]): Y {
        return new ListExample(listModel) as Y;
    }

    public async getExampleParameterQweService(): Promise<Result> {
        return this.getModeCallbackFromReleaseCallbackAndTestCallbackParameterEnumRWTMode(
            this.getExampleParameterQweServiceWReleaseCallback,
            this.getExampleParameterQweServiceWTestCallback)();
    }

    private getExampleParameterQweServiceWReleaseCallback = async (): Promise<Result> => {
        throw new LocalException("ExampleRepository",EnumGuilty.developer,"ExampleRepositoryQQGetExampleParameterQweServiceWReleaseCallback");
    };

    private getExampleParameterQweServiceWTestCallback = async (): Promise<Result> => {
        throw new LocalException("ExampleRepository",EnumGuilty.developer,"ExampleRepositoryQQGetExampleParameterQweServiceWTestCallback");
    };
}