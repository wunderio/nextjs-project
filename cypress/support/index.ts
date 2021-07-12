import { addMatchImageSnapshotCommand } from "cypress-image-snapshot/command";

addMatchImageSnapshotCommand({
  customSnapshotsDir: "cypress/snapshots/current_output",
  customDiffDir: "cypress/snapshots/diff_output",
});

export {};
