### This repo is a wrapper around Web-based game.

It acts as a client of [Licesing Server](https://github.com/league55/java-license-server). It asks user for his token (aka. login), if Lisencing Server approves token wrapper provides access to the game.

Then, during the whole session wrapper periodically pings licensing server to make sure there were no other sessions authorized with the same token. If there are sessions authorized - wrapper stops and hides the target application.
