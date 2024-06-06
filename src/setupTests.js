import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

import { server } from './mocks/server';
import '@testing-library/jest-dom/extend-expect';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
// Reset any request handlers that are declared as a part of our tests (i.e. for testing one-time error scenarios).
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());


