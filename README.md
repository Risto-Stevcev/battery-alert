# battery-alert
:battery: A simple library that alerts you when your battery is low.


## Usage

`Usage: battery-alert [remaining] [command]`

`remaining` - The % battery remaining required to trigger the command
`command` - The command to trigger (required)

```bash
$ npm install -g battery-alert
$ battery-alert 15 vlc -R /absolute/path/to/alert.wav
```

## Implementation

 The library uses ACPI to get battery info for Battery 0 and then spawns the command given by the user. It checks the ACPI status in 1 minute intervals.


## License

Licensed under the MIT license.
