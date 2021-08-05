
import { mergeSchemas } from '@graphql-tools/merge';
import { userSchema } from './user/schema';

export const allSchema = mergeSchemas({
    schemas: [userSchema],
});
