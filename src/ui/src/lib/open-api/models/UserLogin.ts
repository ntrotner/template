/* tslint:disable */
/* eslint-disable */
/**
 * Swagger - OpenAPI 3.0
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: nikita@ttnr.me
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UserLogin
 */
export interface UserLogin {
    /**
     * 
     * @type {string}
     * @memberof UserLogin
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof UserLogin
     */
    password: string;
}

/**
 * Check if a given object implements the UserLogin interface.
 */
export function instanceOfUserLogin(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "password" in value;

    return isInstance;
}

export function UserLoginFromJSON(json: any): UserLogin {
    return UserLoginFromJSONTyped(json, false);
}

export function UserLoginFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserLogin {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': json['email'],
        'password': json['password'],
    };
}

export function UserLoginToJSON(value?: UserLogin | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'password': value.password,
    };
}

