import { User } from "../user/User";
import { Project } from "../project/Project";
import { Snapshot } from "../snapshot/Snapshot";
import { State } from "../state/State";

export type Environment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  user?: User | null;
  project?: Project | null;
  snapshots?: Array<Snapshot>;
  states?: Array<State>;
};
