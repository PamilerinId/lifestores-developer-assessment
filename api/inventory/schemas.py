import graphene

from graphene_django.types import DjangoObjectType

from graphql_auth.schema import UserQuery
from graphql_auth import mutations

from .models import Product

class ProductType(DjangoObjectType):
    class Meta:
        model = Product
        field = ("sku", "name", "description", "price", "image")


class Query(UserQuery, graphene.ObjectType):
    product_list = graphene.List(ProductType)
    product = graphene.Field(ProductType, id=graphene.Int())

    def resolve_product_list(self, info):
        return Product.objects.all()
    
    def resolve_product(self, info, id):
    	    return Product.objects.get(id=id)
    

class ProductMutation(graphene.Mutation):
    class Arguments:
        id = graphene.ID()
        name = graphene.String()
        description = graphene.String()
        price = graphene.Float()
        image = graphene.String()
        sku = graphene.String()
          
    product = graphene.Field(ProductType)

    @classmethod
    def mutate(cls, root, info, name, description, price, image, sku):
        new_product = Product(name=name, description=description, 
                              price=price, image=image, sku=sku)
        new_product.save()

        # ########Update##############
        get_product = Product.objects.get(id=id)
        get_product.name = name
        get_product.description = description
        get_product.price = price
        get_product.sku = sku
        get_product.image = image
        get_product.save()

class ProductDelete(graphene.Mutation):
    class Arguments:
        id = graphene.ID()

    product = graphene.Field(ProductType)

    @classmethod   
    def mutate(cls, root, info, id):
        product = Product(id=id) 
        #########Delete##############
        product.delete()

# avoiding creating a new auth app for this
class AuthMutation(graphene.ObjectType):
   register = mutations.Register.Field()
   verify_account = mutations.VerifyAccount.Field()
   token_auth = mutations.ObtainJSONWebToken.Field()


class Mutation(AuthMutation, graphene.ObjectType):
    create_product= ProductMutation.Field()
    update_product = ProductMutation.Field()
    

schema = graphene.Schema(query=Query, mutation=Mutation)

