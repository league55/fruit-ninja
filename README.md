### This repo is a wrapper around my browser [game](https://github.com/league55/FruitNinjaGame/tree/master).

It acts as a client of [Licesing Server](https://github.com/league55/java-license-server). 
Before letting to play it asks user for his token (aka. login), if the Lisencing Server approves the token - wrapper provides access to the game.

Then, during the whole session wrapper periodically pings licensing server to make sure there were no other sessions authorized with the same token. 
If there are sessions authorized - wrapper stops older sessions unless reauthorized.

This project is can be tesed [here](https://league55.github.io/fruit-ninja/). 
There are several valid tokens: 
* very-secret-1
* very-secret-2
* asdf

For this system to work you may need to warm up Heroku with backend first (Limitations of free tier deplouments). 
To do that go to the link: https://fast-tor-84943.herokuapp.com/ and wait until website loads.

![alt demo](fruit-ninja-2.gif)
