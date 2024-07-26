/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnvironmentCreateInput } from "./EnvironmentCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateEnvironmentArgs {
  @ApiProperty({
    required: true,
    type: () => EnvironmentCreateInput,
  })
  @ValidateNested()
  @Type(() => EnvironmentCreateInput)
  @Field(() => EnvironmentCreateInput, { nullable: false })
  data!: EnvironmentCreateInput;
}

export { CreateEnvironmentArgs as CreateEnvironmentArgs };