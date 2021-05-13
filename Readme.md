## Overview

Taking the user’s location and returning a list of the three closest coffee shops.


## How to run

### Install packages
You need to install packages by running
`npm install` or `npm i`.

### Start application
You can run application by running
`npm start -- <input>`
or
`node index.js -- <input>`.

To avoid issue with negative value and url argument, you need to add -- before input and wrap the shop data url with quote(' ' or " ").

### Input

Program will be executed directly from the command line and will need to input three
arguments in the following order:
`<user x coordinate> <user y coordinate> <shop data url>`

Shop data url should be full url to the CSV file.

### Example
`npm start -- 47.6 -122.4 "https://raw.githubusercontent.com/allinfra-ltd/test_oop/master/coffee_shops.csv?token=AA5HVELWEJRKDGHELZ6232DAOHE54"`


## CSV file format

The coffee shop list is a comma separated file with rows of the following form:
`Name,Y Coordinate,X Coordinate`
