import { ProjectCreateNestedManyWithoutTeamsInput } from "./ProjectCreateNestedManyWithoutTeamsInput";

export type TeamCreateInput = {
  name?: string | null;
  description?: string | null;
  projects?: ProjectCreateNestedManyWithoutTeamsInput;
};
