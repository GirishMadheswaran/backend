import { SpaceStack } from "./SpaceStack";
import { App } from "aws-cdk-lib";

const app = new App();
new SpaceStack(app, "space-finder", {
  stackName: "SpaceFinder",
});
