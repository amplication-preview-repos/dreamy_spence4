/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { SnapshotWhereUniqueInput } from "../../snapshot/base/SnapshotWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SnapshotUpdateManyWithoutEnvironmentsInput {
  @Field(() => [SnapshotWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SnapshotWhereUniqueInput],
  })
  connect?: Array<SnapshotWhereUniqueInput>;

  @Field(() => [SnapshotWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SnapshotWhereUniqueInput],
  })
  disconnect?: Array<SnapshotWhereUniqueInput>;

  @Field(() => [SnapshotWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SnapshotWhereUniqueInput],
  })
  set?: Array<SnapshotWhereUniqueInput>;
}

export { SnapshotUpdateManyWithoutEnvironmentsInput as SnapshotUpdateManyWithoutEnvironmentsInput };