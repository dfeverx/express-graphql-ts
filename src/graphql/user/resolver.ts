

const resolvers = {
    Query: {
        User: (parent: any, { id }: { id: String }) => { return { id: "", name: "john doe", occupation: ["dev"] } },
        // Users: (parent: any) => findAll(),
    },

    // Mutation: {
    //     storeUser: (parent: any, { User }: { User: IUser }) => store(User),
    //     updateUser: (parent: any, { id, User }: { id: Schema.Types.ObjectId, User: IUser }) => update(id, User),
    //     deleteUser: (parent: any, { id }: { id: Schema.Types.ObjectId }) => deleteOne(id),
    // },
};

export { resolvers };
