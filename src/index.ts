import express from 'express'
import  { graphqlHTTP } from 'express-graphql'
import resolver from './modules/graphQl/resolvers'
import schema from './modules/graphQl/schema'

const app = express()

app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: resolver,
        context: [12,3,4,6],
        graphiql: true,
    })
)


const PORT = 3000 // Specify your desired port number
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})