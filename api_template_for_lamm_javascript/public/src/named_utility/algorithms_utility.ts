export class AlgorithmsUtility {
    private constructor() {
    }

    public static getStringWhereReplaceBearerFromAuthorization(authorization: string): string {
        return authorization.replace("Bearer ", "");
    }
}