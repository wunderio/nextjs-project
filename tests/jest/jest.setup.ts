import { expect } from "@jest/globals";
import "@testing-library/jest-dom";
import { configureToMatchImageSnapshot } from "jest-image-snapshot";
import { setDefaultOptions } from "jsdom-screenshot";

setDefaultOptions({
  launch: {},
});

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  customSnapshotsDir: "tests/jest/snapshots/current_output",
  customDiffDir: "tests/jest/snapshots/diff_output",
});

expect.extend({ toMatchImageSnapshot });
