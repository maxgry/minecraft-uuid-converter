# minecraft-uuid-converter
This script converts Minecraft playerdata when switching online-mode from true to false.

i.e. for BungeeCord/Waterfall to work, you need to set the online mode to false. This script renames all the playerdata files from the online uuid to the [corresponding offline uuid](http://tools.glowingmines.eu/convertor/uuid/) in order to keep the inventory etc. of the players.


## How to use:
1. Place your world into the root dir of this project or change the path to your playerdata (".../world/playerdata) in `config.json`.
2. Execute!

##### Feb 2021
