const { safeImport, safeCall } = require('../__lib__/utils');
const app = safeImport('../Express');

describe('All Tests Should Pass', () => {
    it('has a get route at root that returns OK', () => {
        const simulatedRequest = safeCall(app.simulateRequest, 'GET', '/');
        expect(simulatedRequest.body).toEqual('OK');
        expect(simulatedRequest.statusCode).toEqual(200);
        expect(simulatedRequest.headersSent).toEqual(true);
    })

    it('has has POST route that responds with the body sent in the request', () => {
        const simulatedRequest = safeCall(app.simulateRequest, 'POST', '/', {body: {"testing": "testing"}});
        expect(JSON.parse(simulatedRequest.body)).toEqual({"testing": "testing"});
        expect(app.registeredMiddlewares.json).toEqual(true);
        expect(simulatedRequest.statusCode).toEqual(200);
        expect(simulatedRequest.headersSent).toEqual(true);
    })

    it('does not trigger for missing routes', () => {
        const simulatedRequest = safeCall(app.simulateRequest, 'GET', '/non-existent-route');
        expect(simulatedRequest).toEqual('No handler for GET /non-existent-route');
    })
})