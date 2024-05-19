/**
 * Identities.Services
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { QuestionOption } from './questionOption';
import { QuestionType } from './questionType';


export interface QuestionReaderModelContract { 
    id?: string | null;
    title?: string | null;
    questionType?: QuestionType;
    description?: string | null;
    instruction?: string | null;
    answer?: string | null;
    score?: number | null;
    timeLimit?: number | null;
    withLimit?: boolean | null;
    questionOptions?: Array<QuestionOption> | null;
    language?: string | null;
    createdBy?: string | null;
    created?: string | null;
    lastModifiedBy?: string | null;
    lastModified?: string | null;
    organizationId?: string | null;
    visibility?: string | null;
    questionCategory?: any | null;
    level?: any | null;
    skills?: Array<any> | null;
    topics?: Array<any> | null;
}
export namespace QuestionReaderModelContract {
}


