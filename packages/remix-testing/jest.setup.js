const JSDOMFormData = global.FormData;
global.TextDecoder = require("util").TextDecoder;
global.TextEncoder = require("util").TextEncoder;
global.ReadableStream = require("stream/web").ReadableStream;
global.WritableStream = require("stream/web").WritableStream;

require("@react-router/node").installGlobals();
global.FormData = JSDOMFormData;
