import { inject } from "@angular/core";
import { GetAllEndPointService } from "@guppy/referenceItems/openapi";
import { getAllDelegate, searchDelegate } from "@guppy/tiveriad/ui";

export function referenceItemGetAll(key:string): getAllDelegate{
  return  ()=> {
    const getAllEndPointService = inject(GetAllEndPointService);
    return getAllEndPointService.referenceItemRouteGet(key);
  }
}

export function referenceItemSearch(key:string): searchDelegate{
  return  (value:string)=> {
    const  getAllEndPointService = inject(GetAllEndPointService);
    return getAllEndPointService.referenceItemRouteGet(key, undefined, undefined, value);
  }
}
