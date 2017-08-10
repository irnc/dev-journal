---
title: To wrap or not to wrap when writing notes
date: 2017-08-10 15:00:00
categories:
  - Editing
tags:
  - Atom
  - Markdown
---

Note: Hexo preserves line feeds by default, i.e. it adds `<br />` tags. This results in short lines not aligned with container when rendered in HTML.

## Some tools don't support soft wrap

- `git gui` shows long lines in diff as is and there is no option to soft wrap them

## Enable soft wrapping in Atom

- open Settings > Editor
- enable _Soft Wrap At Preferred Line Length_

My settings:

- _Soft Wrap At Preferred Line Length_ instead of _Soft Wrap_
- _Preferred Line Length_ set to 100
- _Soft Wrap Hanging Indent_ set to 0, the default, because I could misinterpret the indentation

TODO checkout https://github.com/sindresorhus/atom-editorconfig to set _Preferred Line Length_ on per-project basis.
