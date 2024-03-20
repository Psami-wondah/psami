import { defineConfig } from "cypress";
require("dotenv").config();

export default defineConfig({
  viewportHeight: 820,
  viewportWidth: 1440,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    projectId: process.env.CYPRESS_PROJECT_ID,
  },
});
