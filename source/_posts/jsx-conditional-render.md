---
title: jsx-conditional-render
date: 2017-09-29 12:14:05
tags:
  - JSX
---

```js
class A extends Component {
  render() {
    return (
      <div>
        { isVolumeBarVisible ?
          <VolumeBar
            volume={volume}
            muted={muted}
          /> : null }
      </div>
    );
  }
}
```

or

```js
class A extends Component {
  render() {
    return (
      <div>
        { isVolumeBarVisible &&
          <VolumeBar
            volume={volume}
            muted={muted}
          />
        }
      </div>
    );
  }
}
```
