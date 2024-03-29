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
import type { Message } from './Message';
import {
    MessageFromJSON,
    MessageFromJSONTyped,
    MessageToJSON,
} from './Message';

/**
 * 
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * 
     * @type {Array<Message>}
     * @memberof ModelError
     */
    warningMessages?: Array<Message>;
    /**
     * 
     * @type {Array<Message>}
     * @memberof ModelError
     */
    errorMessages?: Array<Message>;
}

/**
 * Check if a given object implements the ModelError interface.
 */
export function instanceOfModelError(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ModelErrorFromJSON(json: any): ModelError {
    return ModelErrorFromJSONTyped(json, false);
}

export function ModelErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'warningMessages': !exists(json, 'warningMessages') ? undefined : ((json['warningMessages'] as Array<any>).map(MessageFromJSON)),
        'errorMessages': !exists(json, 'errorMessages') ? undefined : ((json['errorMessages'] as Array<any>).map(MessageFromJSON)),
    };
}

export function ModelErrorToJSON(value?: ModelError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'warningMessages': value.warningMessages === undefined ? undefined : ((value.warningMessages as Array<any>).map(MessageToJSON)),
        'errorMessages': value.errorMessages === undefined ? undefined : ((value.errorMessages as Array<any>).map(MessageToJSON)),
    };
}

