import "whatwg-fetch"; // Fix for fetch-related issues

global.TextEncoder = require("util").TextEncoder; // Fix for TextEncoder error
global.TextDecoder = require("util").TextDecoder;
