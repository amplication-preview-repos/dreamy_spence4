import * as graphql from "@nestjs/graphql";
import { SnapshotResolverBase } from "./base/snapshot.resolver.base";
import { Snapshot } from "./base/Snapshot";
import { SnapshotService } from "./snapshot.service";

@graphql.Resolver(() => Snapshot)
export class SnapshotResolver extends SnapshotResolverBase {
  constructor(protected readonly service: SnapshotService) {
    super(service);
  }
}
