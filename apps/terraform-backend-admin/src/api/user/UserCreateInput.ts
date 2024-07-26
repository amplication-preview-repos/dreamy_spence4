import { InputJsonValue } from "../../types";
import { ProjectCreateNestedManyWithoutUsersInput } from "./ProjectCreateNestedManyWithoutUsersInput";
import { EnvironmentCreateNestedManyWithoutUsersInput } from "./EnvironmentCreateNestedManyWithoutUsersInput";
import { SnapshotCreateNestedManyWithoutUsersInput } from "./SnapshotCreateNestedManyWithoutUsersInput";
import { StateCreateNestedManyWithoutUsersInput } from "./StateCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  projects?: ProjectCreateNestedManyWithoutUsersInput;
  environments?: EnvironmentCreateNestedManyWithoutUsersInput;
  snapshots?: SnapshotCreateNestedManyWithoutUsersInput;
  states?: StateCreateNestedManyWithoutUsersInput;
};
