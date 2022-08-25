import { object, string, TypeOf } from 'zod';

export const createUserSchema = object({
    body: object({
        name: string({
            required_error: 'name is required'
        }),
        password: string({
            required_error: 'passowrd is required'
        }).min(6, 'Passowrd too short - should be 6 chars minimum'),
        passwordConfirmation: string({
            required_error: 'passowrdConfirmation is required'
        }),
        email: string({
            required_error: 'Email is required'
        }).email('Not a valid email')
    }).refine((data) => data.password === data.passwordConfirmation, {
        message: 'Passwords do not match',
        path: ['passwordConfirmation']
    })
})

export type CreateUserInput = TypeOf<typeof createUserSchema>;
