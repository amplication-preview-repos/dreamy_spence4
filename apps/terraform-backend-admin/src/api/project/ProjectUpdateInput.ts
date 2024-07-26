import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { EnvironmentUpdateManyWithoutProjectsInput } from "./EnvironmentUpdateManyWithoutProjectsInput";
import { StateUpdateManyWithoutProjectsInput } from "./StateUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  name?: string | null;
  description?: string | null;
  user?: UserWhereUniqueInput | null;
  team?: TeamWhereUniqueInput | null;
  environments?: EnvironmentUpdateManyWithoutProjectsInput;
  states?: StateUpdateManyWithoutProjectsInput;
};
