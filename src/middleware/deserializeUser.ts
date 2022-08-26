import { Request, Response, NextFunction } from "express";
import { get } from "lodash";
import { reIssureAccessToken } from "../service/session.service";
import { verifyJwt } from "../utils/jwt.utils";

export const deserializeUser = async (req: Request, res: Response, next: NextFunction) => {
    const accessToken = get(req, "headers.authorization", '').replace(/^Bearer\s/, '');
    
    const refreshToken = get(req, 'headers.x-refresh');

    if (!accessToken) {
        return next();
    }

    const { decoded, expired } = verifyJwt(accessToken);
    
    if (decoded) {
        res.locals.user = decoded;
        return next();
    }

    console.log('Expired: ', expired, refreshToken)
    if (expired && refreshToken) {
        const newAccessToken = await reIssureAccessToken({ refreshToken });
        console.log('newAccessToken: ', newAccessToken);

        if (newAccessToken) {
            res.setHeader('x-access-token', newAccessToken);
        }
    
        const result = verifyJwt(newAccessToken as string);

        console.log(result)
        res.locals.user = result.decoded;
        return next();
    }

    return next();
}