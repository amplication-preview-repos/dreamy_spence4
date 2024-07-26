import { ProjectUpdateManyWithoutTeamsInput } from "./ProjectUpdateManyWithoutTeamsInput";

export type TeamUpdateInput = {
  name?: string | null;
  description?: string | null;
  projects?: ProjectUpdateManyWithoutTeamsInput;
};
