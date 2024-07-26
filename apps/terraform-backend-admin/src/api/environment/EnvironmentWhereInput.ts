import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { SnapshotListRelationFilter } from "../snapshot/SnapshotListRelationFilter";
import { StateListRelationFilter } from "../state/StateListRelationFilter";

export type EnvironmentWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  project?: ProjectWhereUniqueInput;
  snapshots?: SnapshotListRelationFilter;
  states?: StateListRelationFilter;
};
