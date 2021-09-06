import express from "express"

export const samleMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log("Middleware called!!");
    // do something
    next()
}