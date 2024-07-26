import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { EnvironmentCreateNestedManyWithoutProjectsInput } from "./EnvironmentCreateNestedManyWithoutProjectsInput";
import { StateCreateNestedManyWithoutProjectsInput } from "./StateCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  name?: string | null;
  description?: string | null;
  user?: UserWhereUniqueInput | null;
  team?: TeamWhereUniqueInput | null;
  environments?: EnvironmentCreateNestedManyWithoutProjectsInput;
  states?: StateCreateNestedManyWithoutProjectsInput;
};
