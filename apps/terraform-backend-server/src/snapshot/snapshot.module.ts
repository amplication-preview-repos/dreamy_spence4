import { Module } from "@nestjs/common";
import { SnapshotModuleBase } from "./base/snapshot.module.base";
import { SnapshotService } from "./snapshot.service";
import { SnapshotController } from "./snapshot.controller";
import { SnapshotResolver } from "./snapshot.resolver";

@Module({
  imports: [SnapshotModuleBase],
  controllers: [SnapshotController],
  providers: [SnapshotService, SnapshotResolver],
  exports: [SnapshotService],
})
export class SnapshotModule {}
