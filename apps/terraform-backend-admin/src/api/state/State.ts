import { JsonValue } from "type-fest";
import { Environment } from "../environment/Environment";
import { User } from "../user/User";
import { Project } from "../project/Project";

export type State = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  version: number | null;
  stateData: JsonValue;
  environment?: Environment | null;
  user?: User | null;
  project?: Project | null;
};
