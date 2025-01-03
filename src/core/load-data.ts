import { LIST_PATH } from "@/type/list-content";
import type { PathKeys } from "@/type/list-content";
import loadJsonFile from "@/utils/load-json";

const listContent = await Promise.all(
  Object.keys(LIST_PATH).map(async (key: string) => ({
    [key as PathKeys]: await loadJsonFile(LIST_PATH[key as PathKeys]),
  }))
);

export default listContent;
