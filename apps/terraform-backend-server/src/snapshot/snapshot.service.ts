import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SnapshotServiceBase } from "./base/snapshot.service.base";

@Injectable()
export class SnapshotService extends SnapshotServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
