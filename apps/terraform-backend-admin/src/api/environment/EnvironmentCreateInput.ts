import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { SnapshotCreateNestedManyWithoutEnvironmentsInput } from "./SnapshotCreateNestedManyWithoutEnvironmentsInput";
import { StateCreateNestedManyWithoutEnvironmentsInput } from "./StateCreateNestedManyWithoutEnvironmentsInput";

export type EnvironmentCreateInput = {
  name?: string | null;
  description?: string | null;
  user?: UserWhereUniqueInput | null;
  project?: ProjectWhereUniqueInput | null;
  snapshots?: SnapshotCreateNestedManyWithoutEnvironmentsInput;
  states?: StateCreateNestedManyWithoutEnvironmentsInput;
};
