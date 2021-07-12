import { expect } from "@jest/globals";
import "@testing-library/jest-dom";
import { configureToMatchImageSnapshot } from "jest-image-snapshot";

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  customSnapshotsDir: "jest/snapshots/current_output",
  customDiffDir: "jest/snapshots/diff_output",
});

expect.extend({ toMatchImageSnapshot });
