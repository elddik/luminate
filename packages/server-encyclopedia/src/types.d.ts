import {GraphQLResolveInfo} from 'graphql'
import {
  CoffeeDocument,
  CountryDocument,
  FarmDocument,
  FarmZoneDocument,
  RegionDocument,
  RoastDocument,
  VarietyDocument,
} from '@luminate/mongo'
import {Context} from './startServer'
export type Maybe<T> = T | null
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type RequireFields<T, K extends keyof T> = {[X in Exclude<keyof T, K>]?: T[X]} & {[P in K]-?: NonNullable<T[P]>}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  _FieldSet: any
}

export type Coffee = {
  __typename?: 'Coffee'
  id: Scalars['ID']
  name: Scalars['String']
  country?: Maybe<Country>
  region?: Maybe<Region>
  varieties: Array<Variety>
  elevation?: Maybe<Scalars['String']>
  createdAt: Scalars['String']
  updatedAt: Scalars['String']
}

export type CoffeeConnection = {
  __typename?: 'CoffeeConnection'
  pageInfo: PageInfo
  edges: Array<CoffeeEdge>
}

export type CoffeeEdge = {
  __typename?: 'CoffeeEdge'
  cursor: Scalars['String']
  node: Coffee
}

export type Country = {
  __typename?: 'Country'
  id: Scalars['ID']
  name: Scalars['String']
  regions?: Maybe<Array<Maybe<Region>>>
  createdAt: Scalars['String']
  updatedAt: Scalars['String']
}

export type CountryConnection = {
  __typename?: 'CountryConnection'
  pageInfo: PageInfo
  edges: Array<CountryEdge>
}

export type CountryEdge = {
  __typename?: 'CountryEdge'
  cursor: Scalars['String']
  node: Country
}

export type CreateCoffeeInput = {
  name: Scalars['String']
  country?: Maybe<Scalars['ID']>
  region?: Maybe<Scalars['ID']>
  farm?: Maybe<Scalars['ID']>
  farmZone?: Maybe<Scalars['ID']>
  varieties?: Maybe<Array<Maybe<Scalars['ID']>>>
  elevation?: Maybe<Scalars['String']>
}

export type CreateCountryInput = {
  name: Scalars['String']
}

export type CreateFarmInput = {
  name?: Maybe<Scalars['String']>
  country?: Maybe<Scalars['ID']>
  region?: Maybe<Scalars['ID']>
}

export type CreateFarmZoneInput = {
  name: Scalars['String']
  farm?: Maybe<Scalars['ID']>
}

export type CreateRegionInput = {
  name: Scalars['String']
  country?: Maybe<Scalars['ID']>
}

export type CreateRoastInput = {
  name: Scalars['String']
}

export type CreateVarietyInput = {
  name: Scalars['String']
}

export type Farm = {
  __typename?: 'Farm'
  id: Scalars['ID']
  name: Scalars['String']
  country?: Maybe<Country>
  region?: Maybe<Region>
  farmZones: Array<FarmZone>
  createdAt: Scalars['String']
  updatedAt: Scalars['String']
}

export type FarmConnection = {
  __typename?: 'FarmConnection'
  pageInfo: PageInfo
  edges: Array<FarmEdge>
}

export type FarmEdge = {
  __typename?: 'FarmEdge'
  cursor: Scalars['String']
  node: Farm
}

export type FarmZone = {
  __typename?: 'FarmZone'
  id: Scalars['ID']
  name: Scalars['String']
  country?: Maybe<Country>
  region?: Maybe<Region>
  farm?: Maybe<Farm>
  createdAt: Scalars['String']
  updatedAt: Scalars['String']
}

export type FarmZoneConnection = {
  __typename?: 'FarmZoneConnection'
  pageInfo: PageInfo
  edges: Array<FarmZoneEdge>
}

export type FarmZoneEdge = {
  __typename?: 'FarmZoneEdge'
  cursor: Scalars['String']
  node: FarmZone
}

export type Mutation = {
  __typename?: 'Mutation'
  createCoffee?: Maybe<Coffee>
  updateCoffee?: Maybe<Coffee>
  deleteCoffee?: Maybe<Coffee>
  updateCoffeePermissionsForAccount?: Maybe<Scalars['Boolean']>
  createCountry?: Maybe<Country>
  updateCountry?: Maybe<Country>
  deleteCountry?: Maybe<Country>
  createFarm?: Maybe<Farm>
  updateFarm?: Maybe<Farm>
  deleteFarm?: Maybe<Farm>
  createFarmZone?: Maybe<FarmZone>
  updateFarmZone?: Maybe<FarmZone>
  deleteFarmZone?: Maybe<FarmZone>
  createRegion?: Maybe<Region>
  updateRegion?: Maybe<Region>
  deleteRegion?: Maybe<Region>
  createRoast?: Maybe<Roast>
  updateRoast?: Maybe<Roast>
  deleteRoast?: Maybe<Roast>
  createVariety?: Maybe<Variety>
  updateVariety?: Maybe<Variety>
  deleteVariety?: Maybe<Variety>
  makeVarietyPublic?: Maybe<Scalars['Boolean']>
}

export type MutationCreateCoffeeArgs = {
  input: CreateCoffeeInput
}

export type MutationUpdateCoffeeArgs = {
  id: Scalars['ID']
  input: UpdateCoffeeInput
}

export type MutationDeleteCoffeeArgs = {
  id: Scalars['ID']
}

export type MutationUpdateCoffeePermissionsForAccountArgs = {
  coffeeId: Scalars['ID']
  accountId: Scalars['ID']
  permissionTypes: Array<PermissionTypeEnum>
}

export type MutationCreateCountryArgs = {
  input: CreateCountryInput
}

export type MutationUpdateCountryArgs = {
  id: Scalars['ID']
  input: UpdateCountryInput
}

export type MutationDeleteCountryArgs = {
  id: Scalars['ID']
}

export type MutationCreateFarmArgs = {
  input: CreateFarmInput
}

export type MutationUpdateFarmArgs = {
  id: Scalars['ID']
  input: UpdateFarmInput
}

export type MutationDeleteFarmArgs = {
  id: Scalars['ID']
}

export type MutationCreateFarmZoneArgs = {
  input: CreateFarmZoneInput
}

export type MutationUpdateFarmZoneArgs = {
  id: Scalars['ID']
  input: UpdateFarmZoneInput
}

export type MutationDeleteFarmZoneArgs = {
  id: Scalars['ID']
}

export type MutationCreateRegionArgs = {
  input: CreateRegionInput
}

export type MutationUpdateRegionArgs = {
  id: Scalars['ID']
  input: UpdateRegionInput
}

export type MutationDeleteRegionArgs = {
  id: Scalars['ID']
}

export type MutationCreateRoastArgs = {
  input: CreateRoastInput
}

export type MutationUpdateRoastArgs = {
  id: Scalars['ID']
  input: UpdateRoastInput
}

export type MutationDeleteRoastArgs = {
  id: Scalars['ID']
}

export type MutationCreateVarietyArgs = {
  input: CreateVarietyInput
}

export type MutationUpdateVarietyArgs = {
  id: Scalars['ID']
  input: UpdateVarietyInput
}

export type MutationDeleteVarietyArgs = {
  id: Scalars['ID']
}

export type MutationMakeVarietyPublicArgs = {
  id: Scalars['ID']
}

export enum OperatorEnum {
  Eq = 'eq',
  Ne = 'ne',
  Gt = 'gt',
  Gte = 'gte',
  Lt = 'lt',
  Lte = 'lte',
  Contains = 'contains',
  ContainsSensitive = 'containsSensitive',
}

export type PageInfo = {
  __typename?: 'PageInfo'
  hasNextPage?: Maybe<Scalars['Boolean']>
  prevCursor?: Maybe<Scalars['String']>
  nextCursor?: Maybe<Scalars['String']>
}

export enum PermissionTypeEnum {
  Read = 'read',
  Write = 'write',
}

export type Query = {
  __typename?: 'Query'
  listCoffees: CoffeeConnection
  getCoffee?: Maybe<Coffee>
  listCountries: CountryConnection
  getCountry?: Maybe<Country>
  listFarms: FarmConnection
  getFarm?: Maybe<Farm>
  listFarmZones: FarmZoneConnection
  getFarmZone?: Maybe<FarmZone>
  listRegions: RegionConnection
  getRegion?: Maybe<Region>
  listRoasts: RoastConnection
  getRoast?: Maybe<Roast>
  listVarieties: VarietyConnection
  getVariety?: Maybe<Variety>
}

export type QueryListCoffeesArgs = {
  cursor?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  query?: Maybe<Array<Maybe<QueryInput>>>
}

export type QueryGetCoffeeArgs = {
  id: Scalars['ID']
}

export type QueryListCountriesArgs = {
  cursor?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  query?: Maybe<Array<Maybe<QueryInput>>>
}

export type QueryGetCountryArgs = {
  id: Scalars['ID']
}

export type QueryListFarmsArgs = {
  cursor?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  query?: Maybe<Array<Maybe<QueryInput>>>
}

export type QueryGetFarmArgs = {
  id: Scalars['ID']
}

export type QueryListFarmZonesArgs = {
  cursor?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  query?: Maybe<Array<Maybe<QueryInput>>>
}

export type QueryGetFarmZoneArgs = {
  id: Scalars['ID']
}

export type QueryListRegionsArgs = {
  cursor?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  query?: Maybe<Array<Maybe<QueryInput>>>
}

export type QueryGetRegionArgs = {
  id: Scalars['ID']
}

export type QueryListRoastsArgs = {
  cursor?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  query?: Maybe<Array<Maybe<QueryInput>>>
}

export type QueryGetRoastArgs = {
  id: Scalars['ID']
}

export type QueryListVarietiesArgs = {
  cursor?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  query?: Maybe<Array<Maybe<QueryInput>>>
}

export type QueryGetVarietyArgs = {
  id: Scalars['ID']
}

export type QueryInput = {
  field: Scalars['String']
  value?: Maybe<Scalars['String']>
  operator?: Maybe<OperatorEnum>
}

export type Region = {
  __typename?: 'Region'
  id: Scalars['ID']
  name: Scalars['String']
  country?: Maybe<Country>
  farms?: Maybe<Array<Maybe<Farm>>>
  createdAt: Scalars['String']
  updatedAt: Scalars['String']
}

export type RegionConnection = {
  __typename?: 'RegionConnection'
  pageInfo: PageInfo
  edges: Array<RegionEdge>
}

export type RegionEdge = {
  __typename?: 'RegionEdge'
  cursor: Scalars['String']
  node: Region
}

export type Roast = {
  __typename?: 'Roast'
  id: Scalars['ID']
  name: Scalars['String']
  createdAt: Scalars['String']
  updatedAt: Scalars['String']
}

export type RoastConnection = {
  __typename?: 'RoastConnection'
  pageInfo: PageInfo
  edges: Array<RoastEdge>
}

export type RoastEdge = {
  __typename?: 'RoastEdge'
  cursor: Scalars['String']
  node: Roast
}

export type UpdateCoffeeInput = {
  name?: Maybe<Scalars['String']>
  country?: Maybe<Scalars['ID']>
  region?: Maybe<Scalars['ID']>
  farm?: Maybe<Scalars['ID']>
  farmZone?: Maybe<Scalars['ID']>
  varieties?: Maybe<Array<Maybe<Scalars['ID']>>>
  elevation?: Maybe<Scalars['String']>
}

export type UpdateCountryInput = {
  name?: Maybe<Scalars['String']>
}

export type UpdateFarmInput = {
  name?: Maybe<Scalars['String']>
  country?: Maybe<Scalars['ID']>
  region?: Maybe<Scalars['ID']>
}

export type UpdateFarmZoneInput = {
  name?: Maybe<Scalars['String']>
  farm?: Maybe<Scalars['ID']>
}

export type UpdateRegionInput = {
  name?: Maybe<Scalars['String']>
  country?: Maybe<Scalars['ID']>
}

export type UpdateRoastInput = {
  name?: Maybe<Scalars['String']>
}

export type UpdateVarietyInput = {
  name?: Maybe<Scalars['String']>
}

export type Variety = {
  __typename?: 'Variety'
  id: Scalars['ID']
  name: Scalars['String']
  background?: Maybe<Scalars['String']>
  coffees?: Maybe<Array<Maybe<Coffee>>>
  createdAt: Scalars['String']
  updatedAt: Scalars['String']
}

export type VarietyConnection = {
  __typename?: 'VarietyConnection'
  pageInfo: PageInfo
  edges: Array<VarietyEdge>
}

export type VarietyEdge = {
  __typename?: 'VarietyEdge'
  cursor: Scalars['String']
  node: Variety
}

export type WithIndex<TObject> = TObject & Record<string, any>
export type ResolversObject<TObject> = WithIndex<TObject>

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult

export type ReferenceResolver<TResult, TReference, TContext> = (
  reference: TReference,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{[key in TKey]: TResult}, TParent, TContext, TArgs>
  resolve?: SubscriptionResolveFn<TResult, {[key in TKey]: TResult}, TContext, TArgs>
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>
  String: ResolverTypeWrapper<Scalars['String']>
  Int: ResolverTypeWrapper<Scalars['Int']>
  QueryInput: QueryInput
  OperatorEnum: OperatorEnum
  CoffeeConnection: ResolverTypeWrapper<Omit<CoffeeConnection, 'edges'> & {edges: Array<ResolversTypes['CoffeeEdge']>}>
  PageInfo: ResolverTypeWrapper<PageInfo>
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  CoffeeEdge: ResolverTypeWrapper<Omit<CoffeeEdge, 'node'> & {node: ResolversTypes['Coffee']}>
  Coffee: ResolverTypeWrapper<CoffeeDocument>
  ID: ResolverTypeWrapper<Scalars['ID']>
  Country: ResolverTypeWrapper<CountryDocument>
  Region: ResolverTypeWrapper<RegionDocument>
  Farm: ResolverTypeWrapper<FarmDocument>
  FarmZone: ResolverTypeWrapper<FarmZoneDocument>
  Variety: ResolverTypeWrapper<VarietyDocument>
  CountryConnection: ResolverTypeWrapper<
    Omit<CountryConnection, 'edges'> & {edges: Array<ResolversTypes['CountryEdge']>}
  >
  CountryEdge: ResolverTypeWrapper<Omit<CountryEdge, 'node'> & {node: ResolversTypes['Country']}>
  FarmConnection: ResolverTypeWrapper<Omit<FarmConnection, 'edges'> & {edges: Array<ResolversTypes['FarmEdge']>}>
  FarmEdge: ResolverTypeWrapper<Omit<FarmEdge, 'node'> & {node: ResolversTypes['Farm']}>
  FarmZoneConnection: ResolverTypeWrapper<
    Omit<FarmZoneConnection, 'edges'> & {edges: Array<ResolversTypes['FarmZoneEdge']>}
  >
  FarmZoneEdge: ResolverTypeWrapper<Omit<FarmZoneEdge, 'node'> & {node: ResolversTypes['FarmZone']}>
  RegionConnection: ResolverTypeWrapper<Omit<RegionConnection, 'edges'> & {edges: Array<ResolversTypes['RegionEdge']>}>
  RegionEdge: ResolverTypeWrapper<Omit<RegionEdge, 'node'> & {node: ResolversTypes['Region']}>
  RoastConnection: ResolverTypeWrapper<Omit<RoastConnection, 'edges'> & {edges: Array<ResolversTypes['RoastEdge']>}>
  RoastEdge: ResolverTypeWrapper<Omit<RoastEdge, 'node'> & {node: ResolversTypes['Roast']}>
  Roast: ResolverTypeWrapper<RoastDocument>
  VarietyConnection: ResolverTypeWrapper<
    Omit<VarietyConnection, 'edges'> & {edges: Array<ResolversTypes['VarietyEdge']>}
  >
  VarietyEdge: ResolverTypeWrapper<Omit<VarietyEdge, 'node'> & {node: ResolversTypes['Variety']}>
  Mutation: ResolverTypeWrapper<{}>
  CreateCoffeeInput: CreateCoffeeInput
  UpdateCoffeeInput: UpdateCoffeeInput
  PermissionTypeEnum: PermissionTypeEnum
  CreateCountryInput: CreateCountryInput
  UpdateCountryInput: UpdateCountryInput
  CreateFarmInput: CreateFarmInput
  UpdateFarmInput: UpdateFarmInput
  CreateFarmZoneInput: CreateFarmZoneInput
  UpdateFarmZoneInput: UpdateFarmZoneInput
  CreateRegionInput: CreateRegionInput
  UpdateRegionInput: UpdateRegionInput
  CreateRoastInput: CreateRoastInput
  UpdateRoastInput: UpdateRoastInput
  CreateVarietyInput: CreateVarietyInput
  UpdateVarietyInput: UpdateVarietyInput
}>

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {}
  String: Scalars['String']
  Int: Scalars['Int']
  QueryInput: QueryInput
  OperatorEnum: OperatorEnum
  CoffeeConnection: Omit<CoffeeConnection, 'edges'> & {edges: Array<ResolversParentTypes['CoffeeEdge']>}
  PageInfo: PageInfo
  Boolean: Scalars['Boolean']
  CoffeeEdge: Omit<CoffeeEdge, 'node'> & {node: ResolversParentTypes['Coffee']}
  Coffee: CoffeeDocument
  ID: Scalars['ID']
  Country: CountryDocument
  Region: RegionDocument
  Farm: FarmDocument
  FarmZone: FarmZoneDocument
  Variety: VarietyDocument
  CountryConnection: Omit<CountryConnection, 'edges'> & {edges: Array<ResolversParentTypes['CountryEdge']>}
  CountryEdge: Omit<CountryEdge, 'node'> & {node: ResolversParentTypes['Country']}
  FarmConnection: Omit<FarmConnection, 'edges'> & {edges: Array<ResolversParentTypes['FarmEdge']>}
  FarmEdge: Omit<FarmEdge, 'node'> & {node: ResolversParentTypes['Farm']}
  FarmZoneConnection: Omit<FarmZoneConnection, 'edges'> & {edges: Array<ResolversParentTypes['FarmZoneEdge']>}
  FarmZoneEdge: Omit<FarmZoneEdge, 'node'> & {node: ResolversParentTypes['FarmZone']}
  RegionConnection: Omit<RegionConnection, 'edges'> & {edges: Array<ResolversParentTypes['RegionEdge']>}
  RegionEdge: Omit<RegionEdge, 'node'> & {node: ResolversParentTypes['Region']}
  RoastConnection: Omit<RoastConnection, 'edges'> & {edges: Array<ResolversParentTypes['RoastEdge']>}
  RoastEdge: Omit<RoastEdge, 'node'> & {node: ResolversParentTypes['Roast']}
  Roast: RoastDocument
  VarietyConnection: Omit<VarietyConnection, 'edges'> & {edges: Array<ResolversParentTypes['VarietyEdge']>}
  VarietyEdge: Omit<VarietyEdge, 'node'> & {node: ResolversParentTypes['Variety']}
  Mutation: {}
  CreateCoffeeInput: CreateCoffeeInput
  UpdateCoffeeInput: UpdateCoffeeInput
  PermissionTypeEnum: PermissionTypeEnum
  CreateCountryInput: CreateCountryInput
  UpdateCountryInput: UpdateCountryInput
  CreateFarmInput: CreateFarmInput
  UpdateFarmInput: UpdateFarmInput
  CreateFarmZoneInput: CreateFarmZoneInput
  UpdateFarmZoneInput: UpdateFarmZoneInput
  CreateRegionInput: CreateRegionInput
  UpdateRegionInput: UpdateRegionInput
  CreateRoastInput: CreateRoastInput
  UpdateRoastInput: UpdateRoastInput
  CreateVarietyInput: CreateVarietyInput
  UpdateVarietyInput: UpdateVarietyInput
}>

export type QueryResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = ResolversObject<{
  listCoffees?: Resolver<ResolversTypes['CoffeeConnection'], ParentType, ContextType, QueryListCoffeesArgs>
  getCoffee?: Resolver<
    Maybe<ResolversTypes['Coffee']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetCoffeeArgs, 'id'>
  >
  listCountries?: Resolver<ResolversTypes['CountryConnection'], ParentType, ContextType, QueryListCountriesArgs>
  getCountry?: Resolver<
    Maybe<ResolversTypes['Country']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetCountryArgs, 'id'>
  >
  listFarms?: Resolver<ResolversTypes['FarmConnection'], ParentType, ContextType, QueryListFarmsArgs>
  getFarm?: Resolver<Maybe<ResolversTypes['Farm']>, ParentType, ContextType, RequireFields<QueryGetFarmArgs, 'id'>>
  listFarmZones?: Resolver<ResolversTypes['FarmZoneConnection'], ParentType, ContextType, QueryListFarmZonesArgs>
  getFarmZone?: Resolver<
    Maybe<ResolversTypes['FarmZone']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetFarmZoneArgs, 'id'>
  >
  listRegions?: Resolver<ResolversTypes['RegionConnection'], ParentType, ContextType, QueryListRegionsArgs>
  getRegion?: Resolver<
    Maybe<ResolversTypes['Region']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetRegionArgs, 'id'>
  >
  listRoasts?: Resolver<ResolversTypes['RoastConnection'], ParentType, ContextType, QueryListRoastsArgs>
  getRoast?: Resolver<Maybe<ResolversTypes['Roast']>, ParentType, ContextType, RequireFields<QueryGetRoastArgs, 'id'>>
  listVarieties?: Resolver<ResolversTypes['VarietyConnection'], ParentType, ContextType, QueryListVarietiesArgs>
  getVariety?: Resolver<
    Maybe<ResolversTypes['Variety']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetVarietyArgs, 'id'>
  >
}>

export type CoffeeConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['CoffeeConnection'] = ResolversParentTypes['CoffeeConnection']
> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>
  edges?: Resolver<Array<ResolversTypes['CoffeeEdge']>, ParentType, ContextType>
}>

export type PageInfoResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']
> = ResolversObject<{
  hasNextPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  prevCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  nextCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
}>

export type CoffeeEdgeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['CoffeeEdge'] = ResolversParentTypes['CoffeeEdge']
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  node?: Resolver<ResolversTypes['Coffee'], ParentType, ContextType>
}>

export type CoffeeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Coffee'] = ResolversParentTypes['Coffee']
> = ResolversObject<{
  __resolveReference?: ReferenceResolver<
    Maybe<ResolversTypes['Coffee']>,
    {__typename: 'Coffee'} & Pick<ParentType, 'id'>,
    ContextType
  >
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>
  region?: Resolver<Maybe<ResolversTypes['Region']>, ParentType, ContextType>
  varieties?: Resolver<Array<ResolversTypes['Variety']>, ParentType, ContextType>
  elevation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
}>

export type CountryResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Country'] = ResolversParentTypes['Country']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  regions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Region']>>>, ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
}>

export type RegionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Region'] = ResolversParentTypes['Region']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>
  farms?: Resolver<Maybe<Array<Maybe<ResolversTypes['Farm']>>>, ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
}>

export type FarmResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Farm'] = ResolversParentTypes['Farm']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>
  region?: Resolver<Maybe<ResolversTypes['Region']>, ParentType, ContextType>
  farmZones?: Resolver<Array<ResolversTypes['FarmZone']>, ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
}>

export type FarmZoneResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['FarmZone'] = ResolversParentTypes['FarmZone']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>
  region?: Resolver<Maybe<ResolversTypes['Region']>, ParentType, ContextType>
  farm?: Resolver<Maybe<ResolversTypes['Farm']>, ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
}>

export type VarietyResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Variety'] = ResolversParentTypes['Variety']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  background?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  coffees?: Resolver<Maybe<Array<Maybe<ResolversTypes['Coffee']>>>, ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
}>

export type CountryConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['CountryConnection'] = ResolversParentTypes['CountryConnection']
> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>
  edges?: Resolver<Array<ResolversTypes['CountryEdge']>, ParentType, ContextType>
}>

export type CountryEdgeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['CountryEdge'] = ResolversParentTypes['CountryEdge']
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  node?: Resolver<ResolversTypes['Country'], ParentType, ContextType>
}>

export type FarmConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['FarmConnection'] = ResolversParentTypes['FarmConnection']
> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>
  edges?: Resolver<Array<ResolversTypes['FarmEdge']>, ParentType, ContextType>
}>

export type FarmEdgeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['FarmEdge'] = ResolversParentTypes['FarmEdge']
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  node?: Resolver<ResolversTypes['Farm'], ParentType, ContextType>
}>

export type FarmZoneConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['FarmZoneConnection'] = ResolversParentTypes['FarmZoneConnection']
> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>
  edges?: Resolver<Array<ResolversTypes['FarmZoneEdge']>, ParentType, ContextType>
}>

export type FarmZoneEdgeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['FarmZoneEdge'] = ResolversParentTypes['FarmZoneEdge']
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  node?: Resolver<ResolversTypes['FarmZone'], ParentType, ContextType>
}>

export type RegionConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['RegionConnection'] = ResolversParentTypes['RegionConnection']
> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>
  edges?: Resolver<Array<ResolversTypes['RegionEdge']>, ParentType, ContextType>
}>

export type RegionEdgeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['RegionEdge'] = ResolversParentTypes['RegionEdge']
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  node?: Resolver<ResolversTypes['Region'], ParentType, ContextType>
}>

export type RoastConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['RoastConnection'] = ResolversParentTypes['RoastConnection']
> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>
  edges?: Resolver<Array<ResolversTypes['RoastEdge']>, ParentType, ContextType>
}>

export type RoastEdgeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['RoastEdge'] = ResolversParentTypes['RoastEdge']
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  node?: Resolver<ResolversTypes['Roast'], ParentType, ContextType>
}>

export type RoastResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Roast'] = ResolversParentTypes['Roast']
> = ResolversObject<{
  __resolveReference?: ReferenceResolver<
    Maybe<ResolversTypes['Roast']>,
    {__typename: 'Roast'} & Pick<ParentType, 'id'>,
    ContextType
  >
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
}>

export type VarietyConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['VarietyConnection'] = ResolversParentTypes['VarietyConnection']
> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>
  edges?: Resolver<Array<ResolversTypes['VarietyEdge']>, ParentType, ContextType>
}>

export type VarietyEdgeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['VarietyEdge'] = ResolversParentTypes['VarietyEdge']
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  node?: Resolver<ResolversTypes['Variety'], ParentType, ContextType>
}>

export type MutationResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = ResolversObject<{
  createCoffee?: Resolver<
    Maybe<ResolversTypes['Coffee']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateCoffeeArgs, 'input'>
  >
  updateCoffee?: Resolver<
    Maybe<ResolversTypes['Coffee']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCoffeeArgs, 'id' | 'input'>
  >
  deleteCoffee?: Resolver<
    Maybe<ResolversTypes['Coffee']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCoffeeArgs, 'id'>
  >
  updateCoffeePermissionsForAccount?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCoffeePermissionsForAccountArgs, 'coffeeId' | 'accountId' | 'permissionTypes'>
  >
  createCountry?: Resolver<
    Maybe<ResolversTypes['Country']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateCountryArgs, 'input'>
  >
  updateCountry?: Resolver<
    Maybe<ResolversTypes['Country']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCountryArgs, 'id' | 'input'>
  >
  deleteCountry?: Resolver<
    Maybe<ResolversTypes['Country']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCountryArgs, 'id'>
  >
  createFarm?: Resolver<
    Maybe<ResolversTypes['Farm']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateFarmArgs, 'input'>
  >
  updateFarm?: Resolver<
    Maybe<ResolversTypes['Farm']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateFarmArgs, 'id' | 'input'>
  >
  deleteFarm?: Resolver<
    Maybe<ResolversTypes['Farm']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteFarmArgs, 'id'>
  >
  createFarmZone?: Resolver<
    Maybe<ResolversTypes['FarmZone']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateFarmZoneArgs, 'input'>
  >
  updateFarmZone?: Resolver<
    Maybe<ResolversTypes['FarmZone']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateFarmZoneArgs, 'id' | 'input'>
  >
  deleteFarmZone?: Resolver<
    Maybe<ResolversTypes['FarmZone']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteFarmZoneArgs, 'id'>
  >
  createRegion?: Resolver<
    Maybe<ResolversTypes['Region']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateRegionArgs, 'input'>
  >
  updateRegion?: Resolver<
    Maybe<ResolversTypes['Region']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateRegionArgs, 'id' | 'input'>
  >
  deleteRegion?: Resolver<
    Maybe<ResolversTypes['Region']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteRegionArgs, 'id'>
  >
  createRoast?: Resolver<
    Maybe<ResolversTypes['Roast']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateRoastArgs, 'input'>
  >
  updateRoast?: Resolver<
    Maybe<ResolversTypes['Roast']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateRoastArgs, 'id' | 'input'>
  >
  deleteRoast?: Resolver<
    Maybe<ResolversTypes['Roast']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteRoastArgs, 'id'>
  >
  createVariety?: Resolver<
    Maybe<ResolversTypes['Variety']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateVarietyArgs, 'input'>
  >
  updateVariety?: Resolver<
    Maybe<ResolversTypes['Variety']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateVarietyArgs, 'id' | 'input'>
  >
  deleteVariety?: Resolver<
    Maybe<ResolversTypes['Variety']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteVarietyArgs, 'id'>
  >
  makeVarietyPublic?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<MutationMakeVarietyPublicArgs, 'id'>
  >
}>

export type Resolvers<ContextType = Context> = ResolversObject<{
  Query?: QueryResolvers<ContextType>
  CoffeeConnection?: CoffeeConnectionResolvers<ContextType>
  PageInfo?: PageInfoResolvers<ContextType>
  CoffeeEdge?: CoffeeEdgeResolvers<ContextType>
  Coffee?: CoffeeResolvers<ContextType>
  Country?: CountryResolvers<ContextType>
  Region?: RegionResolvers<ContextType>
  Farm?: FarmResolvers<ContextType>
  FarmZone?: FarmZoneResolvers<ContextType>
  Variety?: VarietyResolvers<ContextType>
  CountryConnection?: CountryConnectionResolvers<ContextType>
  CountryEdge?: CountryEdgeResolvers<ContextType>
  FarmConnection?: FarmConnectionResolvers<ContextType>
  FarmEdge?: FarmEdgeResolvers<ContextType>
  FarmZoneConnection?: FarmZoneConnectionResolvers<ContextType>
  FarmZoneEdge?: FarmZoneEdgeResolvers<ContextType>
  RegionConnection?: RegionConnectionResolvers<ContextType>
  RegionEdge?: RegionEdgeResolvers<ContextType>
  RoastConnection?: RoastConnectionResolvers<ContextType>
  RoastEdge?: RoastEdgeResolvers<ContextType>
  Roast?: RoastResolvers<ContextType>
  VarietyConnection?: VarietyConnectionResolvers<ContextType>
  VarietyEdge?: VarietyEdgeResolvers<ContextType>
  Mutation?: MutationResolvers<ContextType>
}>

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = Context> = Resolvers<ContextType>
