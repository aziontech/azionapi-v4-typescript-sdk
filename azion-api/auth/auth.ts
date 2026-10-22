import { RequestContext } from "../http/http";

/**
 * Interface authentication schemes.
 */
export interface SecurityAuthentication {
    /*
     * @return returns the name of the security authentication as specified in OAI
     */
    getName(): string;

    /**
     * Applies the authentication scheme to the request context
     *
     * @params context the request context which should use this authentication scheme
     */
    applySecurityAuthentication(context: RequestContext): void | Promise<void>;
}

export interface TokenProvider {
  getToken(): Promise<string> | string;
}

/**
 * Applies http authentication to the request context.
 */
export class BearerAuthAuthentication implements SecurityAuthentication {
    /**
     * Configures the http authentication with the required details.
     *
     * @param tokenProvider service that can provide the up-to-date token when needed
     */
    public constructor(private tokenProvider: TokenProvider) {}

    public getName(): string {
        return "BearerAuth";
    }

    public async applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("Authorization", "Bearer " + await this.tokenProvider.getToken());
    }
}

/**
 * Applies apiKey authentication to the request context.
 */
export class TokenAuthAuthentication implements SecurityAuthentication {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    public constructor(private apiKey: string) {}

    public getName(): string {
        return "TokenAuth";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("Authorization", this.apiKey);
    }
}

/**
 * Applies http authentication to the request context.
 */
export class JwtMfaAuthenticationAuthentication implements SecurityAuthentication {
    /**
     * Configures the http authentication with the required details.
     *
     * @param tokenProvider service that can provide the up-to-date token when needed
     */
    public constructor(private tokenProvider: TokenProvider) {}

    public getName(): string {
        return "JwtMfaAuthentication";
    }

    public async applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("Authorization", "Bearer " + await this.tokenProvider.getToken());
    }
}

/**
 * Applies http authentication to the request context.
 */
export class JwtRefreshAuthenticationAuthentication implements SecurityAuthentication {
    /**
     * Configures the http authentication with the required details.
     *
     * @param tokenProvider service that can provide the up-to-date token when needed
     */
    public constructor(private tokenProvider: TokenProvider) {}

    public getName(): string {
        return "JwtRefreshAuthentication";
    }

    public async applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("Authorization", "Bearer " + await this.tokenProvider.getToken());
    }
}

/**
 * Applies apiKey authentication to the request context.
 */
export class TokenAuthAuthentication implements SecurityAuthentication {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    public constructor(private apiKey: string) {}

    public getName(): string {
        return "tokenAuth";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("Authorization", this.apiKey);
    }
}

export type AuthMethods = {
    "default"?: SecurityAuthentication,
    "BearerAuth"?: SecurityAuthentication,
    "TokenAuth"?: SecurityAuthentication,
    "JwtMfaAuthentication"?: SecurityAuthentication,
    "JwtRefreshAuthentication"?: SecurityAuthentication,
    "tokenAuth"?: SecurityAuthentication
}

export type ApiKeyConfiguration = string;
export type HttpBasicConfiguration = { "username": string, "password": string };
export type HttpBearerConfiguration = { tokenProvider: TokenProvider };
export type OAuth2Configuration = { accessToken: string };
export type HttpSignatureConfiguration = unknown; // TODO: Implement

export type AuthMethodsConfiguration = {
    "default"?: SecurityAuthentication,
    "BearerAuth"?: HttpBearerConfiguration,
    "TokenAuth"?: ApiKeyConfiguration,
    "JwtMfaAuthentication"?: HttpBearerConfiguration,
    "JwtRefreshAuthentication"?: HttpBearerConfiguration,
    "tokenAuth"?: ApiKeyConfiguration
}

/**
 * Creates the authentication methods from a swagger description.
 *
 */
export function configureAuthMethods(config: AuthMethodsConfiguration | undefined): AuthMethods {
    let authMethods: AuthMethods = {}

    if (!config) {
        return authMethods;
    }
    authMethods["default"] = config["default"]

    if (config["BearerAuth"]) {
        authMethods["BearerAuth"] = new BearerAuthAuthentication(
            config["BearerAuth"]["tokenProvider"]
        );
    }

    if (config["TokenAuth"]) {
        authMethods["TokenAuth"] = new TokenAuthAuthentication(
            config["TokenAuth"]
        );
    }

    if (config["JwtMfaAuthentication"]) {
        authMethods["JwtMfaAuthentication"] = new JwtMfaAuthenticationAuthentication(
            config["JwtMfaAuthentication"]["tokenProvider"]
        );
    }

    if (config["JwtRefreshAuthentication"]) {
        authMethods["JwtRefreshAuthentication"] = new JwtRefreshAuthenticationAuthentication(
            config["JwtRefreshAuthentication"]["tokenProvider"]
        );
    }

    if (config["tokenAuth"]) {
        authMethods["tokenAuth"] = new TokenAuthAuthentication(
            config["tokenAuth"]
        );
    }

    return authMethods;
}