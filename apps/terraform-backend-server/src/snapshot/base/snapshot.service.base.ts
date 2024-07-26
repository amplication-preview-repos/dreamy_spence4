/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Snapshot as PrismaSnapshot,
  Environment as PrismaEnvironment,
  User as PrismaUser,
} from "@prisma/client";

export class SnapshotServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SnapshotCountArgs, "select">): Promise<number> {
    return this.prisma.snapshot.count(args);
  }

  async snapshots(
    args: Prisma.SnapshotFindManyArgs
  ): Promise<PrismaSnapshot[]> {
    return this.prisma.snapshot.findMany(args);
  }
  async snapshot(
    args: Prisma.SnapshotFindUniqueArgs
  ): Promise<PrismaSnapshot | null> {
    return this.prisma.snapshot.findUnique(args);
  }
  async createSnapshot(
    args: Prisma.SnapshotCreateArgs
  ): Promise<PrismaSnapshot> {
    return this.prisma.snapshot.create(args);
  }
  async updateSnapshot(
    args: Prisma.SnapshotUpdateArgs
  ): Promise<PrismaSnapshot> {
    return this.prisma.snapshot.update(args);
  }
  async deleteSnapshot(
    args: Prisma.SnapshotDeleteArgs
  ): Promise<PrismaSnapshot> {
    return this.prisma.snapshot.delete(args);
  }

  async getEnvironment(parentId: string): Promise<PrismaEnvironment | null> {
    return this.prisma.snapshot
      .findUnique({
        where: { id: parentId },
      })
      .environment();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.snapshot
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}