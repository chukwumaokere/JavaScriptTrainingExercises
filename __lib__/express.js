/**
 * @typedef {Object} Request
 * @property {Object} params
 * @property {Object} query
 * @property {Object} body
 * @property {Object} headers
 */

/**
 * @typedef {Object} Response
 * @property {function(string): Response} send
 * @property {function(Object): Response} sendFile
 * @property {function(number): Response} status
 * @property {function(Object): Response} json
 */
function express() {
    const routes = {
        GET: {},
        POST: {},
        DELETE: {},
        PUT: {},
        PATCH: {},
        OPTIONS: {},
    };

    const middlewares = {
        json: false,
        static: false,
    };

    return {
        registeredMiddlewares: middlewares,
        /**
         * Registers a GET route handler.
         * @param {string} route - The route that this hander should intercept
         * @param {(request: Request, response: Response) => void} handler - a callback that runs when this route is triggered. This handler provides `(request, response)`.
         */
        get(route, handler) {
            routes.GET[route] = handler;
        },
        /**
         * Registers a POST route handler.
         * @param {string} route - The route that this hander should intercept
         * @param {(request: Request, response: Response) => void} handler - a callback that runs when this route is triggered. This handler provides `(request, response)`.
         */
        post(route, handler) {
            routes.POST[route] = handler;
        },
        /**
         * Registers a middleware.
         * @param {function} middleware
         */
        use(middleware) {
            if (middleware.name === express.json().name) {
                middlewares.json = true;
            } else if (middleware.name === express.static('public').name) {
                middlewares.static = true;
            }
        },
        /**
         * Starts the server.
         * @param {number} port
         * @param {(port) => void} callback
         */
        listen(port, callback) {
            if (!port) {
                port = 3000;
            }
            callback(port);
        },
        // Mock method to simulate a request
        /**
         * Simulates a request to the server.
         * @param {string} method
         * @param {string} route
         * @param {Request} request
         * @param {Response} response
         */
        simulateRequest(method, route, req = createMockRequest(), res = createMockResponse(method, route)) {
            // Process middlewares
            if (middlewares.json && req.body) {
                try {
                    req.body = JSON.parse(req.body);
                } catch (e) {
                    console.error('Invalid JSON body');
                }
            } else if (!middlewares.json && req.body) {
                req.body = undefined;
            }
            if (routes[method] && routes[method][route]) {
                const handler = routes[method][route];
                return handler(req, res);
            } else {
                console.log(`No handler for ${method} ${route}`);
                return `No handler for ${method} ${route}`;
            }
        },
    };
}

/**
 * Middleware to parse JSON bodies
 * @returns {function}
 */
express.json = function() {
    return function jsonMiddleware(req, res, next) {
        next();
    };
};

/**
 * Middleware to serve static files
 * @param {string} path
 * @returns {function}
 */
express.static = function(path) {
    return function staticMiddleware(req, res, next) {
        next();
    };
};

/**
 * Creates a mock request object.
 * @returns {Request}
 */
function createMockRequest() {
    return {
        params: {},
        query: {},
        body: {},
        headers: {},
    };
}

/**
 * Creates a mock response object.
 * @param {string} method
 * @param {string} route
 * @returns {Response}
 */
function createMockResponse(method, route) {
    const res = {};
    res.headersSent = false;

    res.status = (code) => {
        res.statusCode = code;
        return res;
    };
    res.send = (body) => {
        if (res.headersSent) {
            throw new Error("Can't render headers after they are sent to the client.");
        }
        res.body = body;
        res.headersSent = true;
        if (!res.statusCode)  {
            res.status(200);
        }
        console.log(`${method} ${route} responded with:\n   Status: ${res.statusCode} - Body: ${res.body}`);
        return res;
    };
    res.json = (body) => {
        if (res.headersSent) {
            throw new Error("Can't render headers after they are sent to the client.");
        }
        res.body = JSON.stringify(body);
        res.headersSent = true;
        if (!res.statusCode)  {
            res.status(200);
        }
        console.log(`${method} ${route} responded with:\n   Status: ${res.statusCode} - Body: ${res.body}`);
        return res;
    };
    return res;
}


module.exports = express;