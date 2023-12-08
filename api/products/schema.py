import graphene

import inventory.schemas

class Query(inventory.schemas.Query, graphene.ObjectType):
    pass

class Mutation(inventory.schemas.Mutation, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)
