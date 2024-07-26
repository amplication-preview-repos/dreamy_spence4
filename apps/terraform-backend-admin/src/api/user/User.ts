import { JsonValue } from "type-fest";
import { Project } from "../project/Project";
import { Environment } from "../environment/Environment";
import { Snapshot } from "../snapshot/Snapshot";
import { State } from "../state/State";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  projects?: Array<Project>;
  environments?: Array<Environment>;
  snapshots?: Array<Snapshot>;
  states?: Array<State>;
};
