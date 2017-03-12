# Socket.io based HTTP event forwarder

At this moment, AWS doesn't support streaming for serverless applications.
The only options are hacks around the AWS IoT and custom solutions based
on Socket.io. This repository contains a simple server example that accepts
events via HTTP endpoints and sends them to all connected clients via
websockets.

This is not a production-ready solution and should be used only as an example.
Any contributions are highly appreciated.
