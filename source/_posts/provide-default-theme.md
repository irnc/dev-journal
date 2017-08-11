---
title: provide-default-theme
date: 2017-08-11 13:54:31
tags:
  - styled-components
---

Testing components which use styled-components is hard because theme should be provided from context.

- https://github.com/styled-components/styled-components/issues/624

While it is possible to provide context, it requires to add unrelated code to tests. Better solution would be to provide default theme to each styled component on definition time. It is done by assigning `Component.defaultProps.theme`.

- https://github.com/styled-components/styled-components/blob/v2.1.2/src/models/StyledComponent.js#L94

```js
import defaultTheme from './themes/default'

const View = styled.main``
View.defaultProps = { theme: defaultTheme }

export default View
```
