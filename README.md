## About

myip.wtf relays information about your public IP address
from
[clean.myip.wtf/json](https://clean.myip.wtf/json)
to your browser. The primary development and runtime
dependencies are
[TypeScript](https://www.typescriptlang.org/),
[preact](https://preactjs.com/),
and
[webpack](https://webpack.js.org/).
The extension can be built locally and installed as a
developer extension / addon on both Chromium and FireFox.
There are XPI files provided for FireFox users as well.

## Example

<p align="center">
  <img src="https://raw.githubusercontent.com/0x1eef/myip.wtf/main/share/myip.wtf/myip.wtf.png">
</p>

## Install

**Chrome**

* Produce the `build/` directory

        $ git clone https://github.com/0x1eef/myip.wtf
        $ cd myip.wtf
        $ npm i
        $ npm run build:production

* Load the extension
    * Visit `chrome://extensions`.
    * Check `Developer mode` (top right hand corner).
    * Click `Load unpacked extension`.
    * Choose the `build/production/` directory from the file dialog.
    * Done.

**Firefox**

The [share/myip.wtf/xpi](share/myip.wtf/xpi) directory contains
signed XPI files for Firefox users. After downloading an XPI file
the extension can be added to the browser from `about:addons`.

## Sources

* [GitHub](https://github.com/0x1eef/myip.wtf#readme)
* [GitLab](https://gitlab.com/0x1eef/myip.wtf#about)

## License

[BSD Zero Clause](https://choosealicense.com/licenses/0bsd/)
<br>
See [LICENSE](./LICENSE)
