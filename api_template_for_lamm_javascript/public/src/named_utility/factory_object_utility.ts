import { Example } from "../model/example/example";
import { ListExample } from "../model/example/list_example";
import { ListSecurityUser } from "../model/security_user/list_security_user";
import { SecurityUser } from "../model/security_user/security_user";
import { ListUser } from "../model/user/list_user";
import { User } from "../model/user/user";
import { ExampleRepository } from "../model_repository/example_repository/example_repository";
import { SecurityUserRepository } from "../model_repository/security_user_repository/security_user_repository";
import { UserRepository } from "../model_repository/user_repository/user_repository";

export class FactoryObjectUtility {
    private constructor() {
    }

    /* ModelRepository */
    public static get getExampleRepository(): ExampleRepository<Example,ListExample<Example>> {
        return new ExampleRepository<Example,ListExample<Example>>();
    }

    public static get getSecurityUserRepository(): SecurityUserRepository<SecurityUser,ListSecurityUser<SecurityUser>> {
        return new SecurityUserRepository<SecurityUser,ListSecurityUser<SecurityUser>>();
    }

    public static get getUserRepository(): UserRepository<User,ListUser<User>> {
        return new UserRepository<User,ListUser<User>>();
    }
}