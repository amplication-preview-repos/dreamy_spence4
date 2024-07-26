/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { StateService } from "../state.service";
import { StateCreateInput } from "./StateCreateInput";
import { State } from "./State";
import { StateFindManyArgs } from "./StateFindManyArgs";
import { StateWhereUniqueInput } from "./StateWhereUniqueInput";
import { StateUpdateInput } from "./StateUpdateInput";

export class StateControllerBase {
  constructor(protected readonly service: StateService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: State })
  async createState(@common.Body() data: StateCreateInput): Promise<State> {
    return await this.service.createState({
      data: {
        ...data,

        environment: data.environment
          ? {
              connect: data.environment,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,

        project: data.project
          ? {
              connect: data.project,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        version: true,
        stateData: true,

        environment: {
          select: {
            id: true,
          },
        },

        user: {
          select: {
            id: true,
          },
        },

        project: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [State] })
  @ApiNestedQuery(StateFindManyArgs)
  async states(@common.Req() request: Request): Promise<State[]> {
    const args = plainToClass(StateFindManyArgs, request.query);
    return this.service.states({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        version: true,
        stateData: true,

        environment: {
          select: {
            id: true,
          },
        },

        user: {
          select: {
            id: true,
          },
        },

        project: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: State })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async state(
    @common.Param() params: StateWhereUniqueInput
  ): Promise<State | null> {
    const result = await this.service.state({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        version: true,
        stateData: true,

        environment: {
          select: {
            id: true,
          },
        },

        user: {
          select: {
            id: true,
          },
        },

        project: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: State })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateState(
    @common.Param() params: StateWhereUniqueInput,
    @common.Body() data: StateUpdateInput
  ): Promise<State | null> {
    try {
      return await this.service.updateState({
        where: params,
        data: {
          ...data,

          environment: data.environment
            ? {
                connect: data.environment,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,

          project: data.project
            ? {
                connect: data.project,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          version: true,
          stateData: true,

          environment: {
            select: {
              id: true,
            },
          },

          user: {
            select: {
              id: true,
            },
          },

          project: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: State })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteState(
    @common.Param() params: StateWhereUniqueInput
  ): Promise<State | null> {
    try {
      return await this.service.deleteState({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          version: true,
          stateData: true,

          environment: {
            select: {
              id: true,
            },
          },

          user: {
            select: {
              id: true,
            },
          },

          project: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}