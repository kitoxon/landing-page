import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { teamMember } from "./teamType";
import { newsType } from "./newsType";
import { clientType } from "./clientType";
import { emailTemplate } from "./emailTemplate";
import { contactType } from "./contactType";
import { topDownloadType } from "./topDownloadType";
import { downloadType } from "./downloadType";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    teamMember,
    newsType,
    clientType,
    emailTemplate,
    contactType,
    topDownloadType,
    downloadType,
  ],
};
