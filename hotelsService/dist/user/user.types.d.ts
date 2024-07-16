export declare class CreateUserInput {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    adress: string;
    role: string;
}
export declare class AuthCredentials {
    email: string;
    password: string;
}
export declare class SharedUser {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    adress: string;
    role: string;
}
export declare class SignInResult {
    accessToken: string;
    user: SharedUser;
}
