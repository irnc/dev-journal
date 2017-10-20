// Snippet from store.js module which configures and creates a redux store.

  const sagaMiddleware = createSagaMiddleware({
    sagaMonitor: {
      // https://github.com/redux-saga/redux-saga/tree/master/docs/api#sagamonitor
      effectTriggered(options) {
        if ('CALL' in options.effect) {
          const { CALL } = options.effect;
          console.log('effectTriggered CALL', options, CALL.fn.name, CALL.args);
        } else if ('SELECT' in options.effect) {
          const { SELECT } = options.effect;
          console.log('effectTriggered SELECT', options, SELECT.selector.name, SELECT.args);
        } else {
          console.log('effectTriggered', options, options.effect);
        }
      },
      effectResolved(...args) { console.log('effectResolved', ...args); },
      effectRejected(...args) { console.log('effectRejected', ...args); },
      effectCancelled(...args) { console.log('effectCancelled', ...args); },
      actionDispatched(...args) { console.log('actionDispatched', ...args); },
    },
  });
