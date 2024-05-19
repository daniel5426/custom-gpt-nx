/**
 * Admin.Services
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { AppReduceModelContract } from './appReduceModelContract';
import { TranslationReduceModelContract } from './translationReduceModelContract';


export interface TermReaderModelContract { 
    id?: string | null;
    key?: string | null;
    resourceName?: string | null;
    createdBy?: string | null;
    created?: string | null;
    lastModifiedBy?: string | null;
    lastModified?: string | null;
    app?: AppReduceModelContract;
    translations?: Array<TranslationReduceModelContract> | null;
}

