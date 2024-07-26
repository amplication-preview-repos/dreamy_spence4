import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SnapshotService } from "./snapshot.service";
import { SnapshotControllerBase } from "./base/snapshot.controller.base";

@swagger.ApiTags("snapshots")
@common.Controller("snapshots")
export class SnapshotController extends SnapshotControllerBase {
  constructor(protected readonly service: SnapshotService) {
    super(service);
  }
}
