
const dummyData = [{ id: "507f191e810c19729de860ea", name: "john doe", job: "dev" },
{ id: "507f191e810c19729de860eb", name: "jonny doe", job: "dev" },]


const resolvers = {
    Query: {
        user: (parent: any, { id }: { id: String }) => { return dummyData.find(item => item.id == id) },
        users: (parent: any) => { return dummyData },
    },

    Mutation: {
        storeUserFake: (parent: any, { user }: { user: any }) => { return user },
        updateUserFake: (parent: any, { id, user }: { id: String, user: any }) => { return user },
        deleteUserFake: (parent: any, { id }: { id: String }) => { return true },
    },
};

export { resolvers };
