export default function* (): Generator<*, *, *> {
  yield all([
    eventStream(),
    windowSagas(),
    TimerSagas(),
    fetchResource(),
    PlayerSaga(),
    requestItems(),
    requestItemDetails(),
    requestFeedContent(),
    uiInteraction(),
    notify(),
    command(),
    message(),
  ]);
}
