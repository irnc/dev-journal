---
title: chrome-dev-tools-compatibility
date: 2017-09-25 15:23:59
tags:
  - Chrome
  - Dev Tools
---

# Issue

Enter key doesn't execute code typed in Console.

https://developer.tizen.org/forums/web-application-development/enter-key-suddelny-doesnt-work-web-inspector-console-window-execute-commands.

Alex Kalinin found out that issue is due to `keyIdentifier` property usage in remote inspector JS code. Problem is that `keyIdentifier` was deprecated and remove from Chrome 54.

```js
function isEnterKey(event) {
  return event.keyCode !== 229 && event.keyIdentifier === "Enter";
}
```

https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyIdentifier

# New devtools

New devtools use `key` instead of `keyIdentifier`. They even contain code which adds support for legacy (&lt;M53) frontends.

https://github.com/ChromeDevTools/devtools-frontend/commit/e43f713f530b8e6fd724d77de747379670938350

... when `remoteFrontend` is set in query string.

Open `chrome://inspect` in Chrome to see modern DevTools.

chrome-devtools://devtools/bundled/inspector.html code of a modern DevTools right in browser.

# How devtool backend and fronend communicate?

https://chromedevtools.github.io/devtools-protocol/

# Remove frontend

https://chrome-devtools-frontend.appspot.com/serve_rev/@180642/devtools.html?host=localhost:9222
https://chrome-devtools-frontend.appspot.com/static/27.0.1453.93/devtools.html

# DevTools sources

- https://github.com/ChromeDevTools/devtools-frontend
- https://chromium.googlesource.com/chromium/src/+/master/third_party/WebKit/Source/devtools/

# Remote devices

- http://172.29.200.14:2998/json/list

# Issues

- https://github.com/continuationlabs/node-v8-inspector/issues/27
