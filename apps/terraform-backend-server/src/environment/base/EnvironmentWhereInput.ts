/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../../project/base/ProjectWhereUniqueInput";
import { SnapshotListRelationFilter } from "../../snapshot/base/SnapshotListRelationFilter";
import { StateListRelationFilter } from "../../state/base/StateListRelationFilter";

@InputType()
class EnvironmentWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ProjectWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProjectWhereUniqueInput)
  @IsOptional()
  @Field(() => ProjectWhereUniqueInput, {
    nullable: true,
  })
  project?: ProjectWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => SnapshotListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SnapshotListRelationFilter)
  @IsOptional()
  @Field(() => SnapshotListRelationFilter, {
    nullable: true,
  })
  snapshots?: SnapshotListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => StateListRelationFilter,
  })
  @ValidateNested()
  @Type(() => StateListRelationFilter)
  @IsOptional()
  @Field(() => StateListRelationFilter, {
    nullable: true,
  })
  states?: StateListRelationFilter;
}

export { EnvironmentWhereInput as EnvironmentWhereInput };