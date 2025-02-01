import { TextEncoder, TextDecoder, ReadableStream } from 'node:util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
global.ReadableStream = ReadableStream;