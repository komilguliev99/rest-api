import { query } from "express";
import { get } from "lodash";
import { FilterQuery, UpdateQuery } from "mongoose";
import SessionModel, { SessionDocument } from "../models/session.model";
import { signJwt, verifyJwt } from "../utils/jwt.utils";
import { findUser } from "./user.service";
import config from 'config';

const accessTokenTtl = config.get<string>('accessTokenTtl');
const refreshTokenTtl = config.get<string>('refreshTokenTtl');

export async function createSession (userId: string, userAgent: string) {
    const session = await SessionModel.create({ user: userId, userAgent });

    return session;
}

export async function findSessions(query: FilterQuery<SessionDocument>) {
    return SessionModel.find(query).lean();
}

export async function updateSession(query: FilterQuery<SessionDocument>,
    update: UpdateQuery<SessionDocument>) {
        return SessionModel.updateOne(query, update);
}

export async function reIssureAccessToken({ refreshToken } : { refreshToken: string}) {
    const { decoded } = verifyJwt(refreshToken);

    console.log('Decode: ', decoded);
    if (!decoded || !get(decoded, 'session')) return false;

    const session = await SessionModel.findById(get(decoded, 'session'));

    console.log(session)
    if (!session || !session.valid) return false;

    const user = await findUser({ _id: session.user });

    if (!user) return false;

    const accessToken = signJwt(
        {...user, session: session._id},
        { expiresIn: accessTokenTtl }
    )

    return accessToken;
}
