import { InputJsonValue } from "../../types";
import { ProjectUpdateManyWithoutUsersInput } from "./ProjectUpdateManyWithoutUsersInput";
import { EnvironmentUpdateManyWithoutUsersInput } from "./EnvironmentUpdateManyWithoutUsersInput";
import { SnapshotUpdateManyWithoutUsersInput } from "./SnapshotUpdateManyWithoutUsersInput";
import { StateUpdateManyWithoutUsersInput } from "./StateUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  projects?: ProjectUpdateManyWithoutUsersInput;
  environments?: EnvironmentUpdateManyWithoutUsersInput;
  snapshots?: SnapshotUpdateManyWithoutUsersInput;
  states?: StateUpdateManyWithoutUsersInput;
};
