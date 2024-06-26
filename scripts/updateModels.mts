import {
  CustomType,
  SharedSlice,
} from "@prismicio/types-internal/lib/customtypes";
import { createClient, createBulkTransaction } from "@prismicio/custom-types-client";
import { Environment, createSliceMachineManager } from "@slicemachine/manager";
import * as fs from "node:fs/promises";

import 'dotenv/config'
import path from "path";

// This function diff local and remote models, and then pushes updates from local to remote, it does not handle screenshots

async function main(repo: string) {

  // Get User Session Token
  const token = await getAuthToken()

  // Init Custom Types api Client
  const client = createClient({
    repositoryName: repo, //process.env.REPO || "",
    token: "", //process.env.CT_API_TOKEN not needed
    fetchOptions: {
      headers: {
        "User-Agent": "sm-api",
        Authorization: `Bearer ${token}`
      }
    }
  });

  // Read local slices
  const { customTypes, slices } = await extractModels();

  // Fetch remote slices
  const [existingCustomTypes, existingSharedSlices] = await Promise.all([
    client.getAllCustomTypes(),
    client.getAllSharedSlices(),
  ]);

  // Create Diff and transaction
  const bulkTransaction = createBulkTransaction();
  bulkTransaction.fromDiff(
    {
      customTypes: existingCustomTypes,
      slices: existingSharedSlices,
    },
    {
      customTypes: customTypes,
      slices: slices,
    },
  );

  // Push changes in bulk
  await client.bulk(bulkTransaction);
}

/**
   * Returns the Prismic content models stored in the Git repository.
   *
   */

async function extractModels(): Promise<{ slices: SharedSlice[]; customTypes: CustomType[] }> {

  try {
    const manager = createSliceMachineManager({ cwd: process.cwd() });

    const config = await manager.project.getSliceMachineConfig();
    const adapterName = await manager.project.getAdapterName();

    switch (adapterName) {
      case "@slicemachine/adapter-next":
      case "@slicemachine/adapter-nuxt":
      case "@slicemachine/adapter-sveltekit": {
        const customTypes = await readModels<CustomType>({
          path: path.join(process.cwd(), "./customtypes"),
          fileName: "index.json",
        });
        const slices = (
          await Promise.all(
            (config.libraries || []).map(async (library) => {
              return await readModels<SharedSlice>({
                path: path.join(process.cwd(), library),
                fileName: "model.json",
              });
            }),
          )
        ).flat();

        return { customTypes, slices };
      }

      default: {
        throw new UnsupportedAdapterError(adapterName);
      }
    }
  } catch {
    throw new Error("An error occured reading local models")
  }
}

const readModels = async <TType extends CustomType | SharedSlice>(args: {
  path: string;
  fileName: string;
}): Promise<TType[]> => {
  const entries = await fs.readdir(args.path, {
    recursive: true,
    withFileTypes: true,
  });

  const results: TType[] = [];

  for (const entry of entries) {
    if (entry.name !== args.fileName || entry.isDirectory()) {
      continue;
    }

    const contents = await fs.readFile(
      path.join(entry.path, entry.name),
      "utf8",
    );

    results.push(JSON.parse(contents));
  }

  return results;
};

class UnsupportedAdapterError extends Error {
  name = "UnsupportedAdapterError";
  adapterName: string;

  constructor(adapterName: string) { //, options?: ErrorOptions
    super("Slice Machine adapter is not supported."); //, options

    this.adapterName = adapterName;
  }
}

// Get an auth token, could use SliceMachineAuthManager instead
const getAuthToken = async () => {
  const email = process.env.CMSRP_EMAIL
  const password = process.env.CMSRP_PWD
  const authResponse = await fetch('https://auth.prismic.io/login', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const token = await authResponse.text();

  return token
}


const repos = ["acme-inc-website-1", "acme-inc-website-2"]
for (const repo of repos) {
  main(repo)
}
