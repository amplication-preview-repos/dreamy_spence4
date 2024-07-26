import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { EnvironmentListRelationFilter } from "../environment/EnvironmentListRelationFilter";
import { StateListRelationFilter } from "../state/StateListRelationFilter";

export type ProjectWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  team?: TeamWhereUniqueInput;
  environments?: EnvironmentListRelationFilter;
  states?: StateListRelationFilter;
};
