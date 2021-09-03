/// <reference types="cypress" />
import { addMatchImageSnapshotPlugin } from "cypress-image-snapshot/plugin";

export default (on, config) => {
  addMatchImageSnapshotPlugin(on, config);
  return config;
};
