import { Example } from "../model/example/example";
import { ListExample } from "../model/example/list_example";
import { ExampleRepository } from "../model_repository/example_repository/example_repository";

export class FactoryObjectUtility {
    private constructor() {
    }

    /* ModelRepository */
    public static get getExampleRepository(): ExampleRepository<Example,ListExample<Example>> {
        return new ExampleRepository<Example,ListExample<Example>>();
    }
}