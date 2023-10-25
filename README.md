## About

Photon is a Chromium extension that provides information about
the public IP address you are using to connect to the internet. When
the extension's icon is clicked, the extension makes a request to the
[clean.wtfismyip.com](https://clean.wtfismyip.com)
web service to discover information about your public IP address, and
then displays that information in a simple HTML view.

## Features

* Displays a public IP address.
* Displays the Internet Service Provider (ISP) associated with a public IP address.
* Displays the city associated with a public IP address.
* Displays the country associated with a public IP address.
* Displays whether or not a public IP address is a Tor exit node.

## Install

Produce the "build" directory:

    git clone https://github.com/0x1eef/photon.git
    cd photon
    npm i
    npm run build

Add the extension to Chrome:

* Visit `chrome://extensions`.
* Check "Developer mode" (top right hand corner).
* Click "Load unpacked extension".
* Choose the "build/" directory from the file dialog.
* Done.

## Sources

* [Source code (GitHub)](https://github.com/0x1eef/photon#readme)
* [Source code (GitLab)](https://gitlab.com/0x1eef/photon#about)

## Screenshots

<p>
  <img src="https://raw.githubusercontent.com/0x1eef/photon/main/share/photon/photon.png">
</p>

## <a id="license"> License </a>

[BSD Zero Clause](https://choosealicense.com/licenses/0bsd/).
<br>
See [LICENSE](./LICENSE).


