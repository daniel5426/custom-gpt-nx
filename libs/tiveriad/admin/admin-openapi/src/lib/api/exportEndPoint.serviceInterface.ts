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
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { TermTranslationModelContract } from '../model/models';


import { AdminApiConfiguration }                                     from '../admin.api.configuration';



export interface ExportEndPointServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: AdminApiConfiguration;

    /**
     *
     *
     * @param appId
     * @param language
     */
    appsAppIdTermsExportGet(appId: string, language: string, extraHttpRequestParams?: any): Observable<Array<TermTranslationModelContract>>;

}
