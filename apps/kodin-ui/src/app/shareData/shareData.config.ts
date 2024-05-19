import { ShareDataServiceConfigurations as ShareDataServiceConfigurations } from "@guppy/tiveriad/ui";
import { referenceItemGetAll, referenceItemSearch } from "./referenceItem.delegate";

export const shareDataServiceConfigurations: ShareDataServiceConfigurations = {
  repositories: [
    {
      key:'skills',
      getAll:referenceItemGetAll('skills'),
      search:referenceItemSearch('skills')
    },
    {
      key:'levels',
      getAll:referenceItemGetAll('levels'),
      search:referenceItemSearch('levels')
    }
  ]
  }
