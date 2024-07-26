import { Environment } from "../environment/Environment";
import { User } from "../user/User";

export type Snapshot = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  environment?: Environment | null;
  user?: User | null;
};
