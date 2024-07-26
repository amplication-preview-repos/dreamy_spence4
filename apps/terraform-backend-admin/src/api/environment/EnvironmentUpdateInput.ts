import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { SnapshotUpdateManyWithoutEnvironmentsInput } from "./SnapshotUpdateManyWithoutEnvironmentsInput";
import { StateUpdateManyWithoutEnvironmentsInput } from "./StateUpdateManyWithoutEnvironmentsInput";

export type EnvironmentUpdateInput = {
  name?: string | null;
  description?: string | null;
  user?: UserWhereUniqueInput | null;
  project?: ProjectWhereUniqueInput | null;
  snapshots?: SnapshotUpdateManyWithoutEnvironmentsInput;
  states?: StateUpdateManyWithoutEnvironmentsInput;
};
