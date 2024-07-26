import { User } from "../user/User";
import { Team } from "../team/Team";
import { Environment } from "../environment/Environment";
import { State } from "../state/State";

export type Project = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  user?: User | null;
  team?: Team | null;
  environments?: Array<Environment>;
  states?: Array<State>;
};
