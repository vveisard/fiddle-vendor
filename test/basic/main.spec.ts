import * as Path from "node:path";
import { describe, it } from "bun:test";
import { main } from "../../src/main";
import importMap from "./input/example/src/import-map.json" assert { type: "json" };

describe("a", async () => {
  it("b", async () => {
    const entryModulePath = import.meta.resolveSync(
      "./input/example/src/main.ts"
    );

    const importMapPath = import.meta.resolveSync(
      "./input/example/src/import-map.json"
    );

    const outputDirectoryPath = Path.join(import.meta.dir, "./output/vendor");

    const result = await main({
      importMap: importMap,
      importMapFileUrl: Bun.pathToFileURL(importMapPath),
      mainEntryModuleInfo: {
        entryKey: "basic",
        url: Bun.pathToFileURL(entryModulePath),
        isEntryModule: true,
      },
      outputDirectoryPath: outputDirectoryPath,
    });
  });
});
