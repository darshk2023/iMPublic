import { ClientOperation, ClientOrchestration, IClientOrchestration } from '@orcha/angular';
import { ICommentOrchestration, InvolvemintOrchestrations } from '@involvemint/shared/domain';

@ClientOrchestration(InvolvemintOrchestrations.comment)
export class CommentOrchestration implements IClientOrchestration<ICommentOrchestration> {
    @ClientOperation()
    list!: IClientOrchestration<ICommentOrchestration>['list'];

    @ClientOperation()
    create!: IClientOrchestration<ICommentOrchestration>['create'];

    @ClientOperation()
    hide!: IClientOrchestration<ICommentOrchestration>['hide'];

    @ClientOperation()
    unhide!: IClientOrchestration<ICommentOrchestration>['unhide'];
}
