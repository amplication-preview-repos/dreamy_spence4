import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";
import { EnvironmentListRelationFilter } from "../environment/EnvironmentListRelationFilter";
import { SnapshotListRelationFilter } from "../snapshot/SnapshotListRelationFilter";
import { StateListRelationFilter } from "../state/StateListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  projects?: ProjectListRelationFilter;
  environments?: EnvironmentListRelationFilter;
  snapshots?: SnapshotListRelationFilter;
  states?: StateListRelationFilter;
};
