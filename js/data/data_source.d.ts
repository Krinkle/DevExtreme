import '../jquery_augmentation';

import Store, {
    StoreOptions
} from './abstract_store';

import {
    CustomStoreOptions
} from './custom_store';

export interface DataSourceOptions {
    /**
     * @docid DataSourceOptions.customQueryParams
     * @prevFileNamespace DevExpress.data
     * @public
     */
    customQueryParams?: any;
    /**
     * @docid DataSourceOptions.expand
     * @prevFileNamespace DevExpress.data
     * @public
     */
    expand?: Array<string> | string;
    /**
     * @docid DataSourceOptions.filter
     * @type Filter expression
     * @prevFileNamespace DevExpress.data
     * @public
     */
    filter?: string | Array<any> | Function;
    /**
     * @docid DataSourceOptions.group
     * @type Group expression
     * @prevFileNamespace DevExpress.data
     * @public
     */
    group?: string | Array<any> | Function;
    /**
     * @docid DataSourceOptions.map
     * @type_function_param1 dataItem:object
     * @type_function_return object
     * @prevFileNamespace DevExpress.data
     * @public
     */
    map?: ((dataItem: any) => any);
    /**
     * @docid DataSourceOptions.onChanged
     * @type_function_param1 e:Object
     * @type_function_param1_field1 changes:Array<any>
     * @action
     * @prevFileNamespace DevExpress.data
     * @public
     */
    onChanged?: ((e: { changes?: Array<any> }) => any);
    /**
     * @docid DataSourceOptions.onLoadError
     * @type_function_param1 error:Object
     * @type_function_param1_field1 message:string
     * @action
     * @prevFileNamespace DevExpress.data
     * @public
     */
    onLoadError?: ((error: { message?: string }) => any);
    /**
     * @docid DataSourceOptions.onLoadingChanged
     * @type_function_param1 isLoading:boolean
     * @action
     * @prevFileNamespace DevExpress.data
     * @public
     */
    onLoadingChanged?: ((isLoading: boolean) => any);
    /**
     * @docid DataSourceOptions.pageSize
     * @default 20
     * @prevFileNamespace DevExpress.data
     * @public
     */
    pageSize?: number;
    /**
     * @docid DataSourceOptions.paginate
     * @default undefined
     * @prevFileNamespace DevExpress.data
     * @public
     */
    paginate?: boolean;
    /**
     * @docid DataSourceOptions.postProcess
     * @type_function_param1 data:Array<any>
     * @type_function_return Array<any>
     * @prevFileNamespace DevExpress.data
     * @public
     */
    postProcess?: ((data: Array<any>) => Array<any>);
    /**
     * @docid DataSourceOptions.pushAggregationTimeout
     * @default undefined
     * @prevFileNamespace DevExpress.data
     * @public
     */
    pushAggregationTimeout?: number;
    /**
     * @docid DataSourceOptions.requireTotalCount
     * @prevFileNamespace DevExpress.data
     * @public
     */
    requireTotalCount?: boolean;
    /**
     * @docid DataSourceOptions.reshapeOnPush
     * @default false
     * @prevFileNamespace DevExpress.data
     * @public
     */
    reshapeOnPush?: boolean;
    /**
     * @docid DataSourceOptions.searchExpr
     * @type getter|Array<getter>
     * @prevFileNamespace DevExpress.data
     * @public
     */
    searchExpr?: string | Function | Array<string | Function>;
    /**
     * @docid DataSourceOptions.searchOperation
     * @default "contains"
     * @prevFileNamespace DevExpress.data
     * @public
     */
    searchOperation?: string;
    /**
     * @docid DataSourceOptions.searchValue
     * @default null
     * @prevFileNamespace DevExpress.data
     * @public
     */
    searchValue?: any;
    /**
     * @docid DataSourceOptions.select
     * @type Select expression
     * @prevFileNamespace DevExpress.data
     * @public
     */
    select?: string | Array<any> | Function;
    /**
     * @docid DataSourceOptions.sort
     * @type Sort expression
     * @prevFileNamespace DevExpress.data
     * @public
     */
    sort?: string | Array<any> | Function;
    /**
     * @docid DataSourceOptions.store
     * @prevFileNamespace DevExpress.data
     * @public
     */
    store?: Store | StoreOptions | Array<any> | any;
}
/**
 * @docid DataSource
 * @module data/data_source
 * @export default
 * @prevFileNamespace DevExpress.data
 * @public
 */
export default class DataSource {
    constructor(data: Array<any>);
    constructor(options: CustomStoreOptions | DataSourceOptions);
    constructor(store: Store);
    constructor(url: string);
    /**
     * @docid DataSource.cancel
     * @publicName cancel(operationId)
     * @return boolean
     * @prevFileNamespace DevExpress.data
     * @public
     */
    cancel(): boolean;
    /**
     * @docid DataSource.dispose
     * @publicName dispose()
     * @prevFileNamespace DevExpress.data
     * @public
     */
    dispose(): void;
    /**
     * @docid DataSource.filter
     * @publicName filter()
     * @return object
     * @prevFileNamespace DevExpress.data
     * @public
     */
    filter(): any;
    /**
     * @docid DataSource.filter
     * @publicName filter(filterExpr)
     * @param1 filterExpr:object
     * @prevFileNamespace DevExpress.data
     * @public
     */
    filter(filterExpr: any): void;
    /**
     * @docid DataSource.group
     * @publicName group()
     * @return object
     * @prevFileNamespace DevExpress.data
     * @public
     */
    group(): any;
    /**
     * @docid DataSource.group
     * @publicName group(groupExpr)
     * @param1 groupExpr:object
     * @prevFileNamespace DevExpress.data
     * @public
     */
    group(groupExpr: any): void;
    /**
     * @docid DataSource.isLastPage
     * @publicName isLastPage()
     * @return boolean
     * @prevFileNamespace DevExpress.data
     * @public
     */
    isLastPage(): boolean;
    /**
     * @docid DataSource.isLoaded
     * @publicName isLoaded()
     * @return boolean
     * @prevFileNamespace DevExpress.data
     * @public
     */
    isLoaded(): boolean;
    /**
     * @docid DataSource.isLoading
     * @publicName isLoading()
     * @return boolean
     * @prevFileNamespace DevExpress.data
     * @public
     */
    isLoading(): boolean;
    /**
     * @docid DataSource.items
     * @publicName items()
     * @return Array<any>
     * @prevFileNamespace DevExpress.data
     * @public
     */
    items(): Array<any>;
    /**
     * @docid DataSource.key
     * @publicName key()
     * @return object|string|number
     * @prevFileNamespace DevExpress.data
     * @public
     */
    key(): any & string & number;
    /**
     * @docid DataSource.load
     * @publicName load()
     * @return Promise<any>
     * @prevFileNamespace DevExpress.data
     * @public
     */
    load(): Promise<any> & JQueryPromise<any>;
    /**
     * @docid DataSource.loadOptions
     * @publicName loadOptions()
     * @return object
     * @prevFileNamespace DevExpress.data
     * @public
     */
    loadOptions(): any;
    /**
     * @docid DataSource.off
     * @publicName off(eventName)
     * @param1 eventName:string
     * @return this
     * @prevFileNamespace DevExpress.data
     * @public
     */
    off(eventName: string): this;
    /**
     * @docid DataSource.off
     * @publicName off(eventName, eventHandler)
     * @param1 eventName:string
     * @param2 eventHandler:function
     * @return this
     * @prevFileNamespace DevExpress.data
     * @public
     */
    off(eventName: string, eventHandler: Function): this;
    /**
     * @docid DataSource.on
     * @publicName on(eventName, eventHandler)
     * @param1 eventName:string
     * @param2 eventHandler:function
     * @return this
     * @prevFileNamespace DevExpress.data
     * @public
     */
    on(eventName: string, eventHandler: Function): this;
    /**
     * @docid DataSource.on
     * @publicName on(events)
     * @param1 events:object
     * @return this
     * @prevFileNamespace DevExpress.data
     * @public
     */
    on(events: any): this;
    /**
     * @docid DataSource.pageIndex
     * @publicName pageIndex()
     * @return numeric
     * @prevFileNamespace DevExpress.data
     * @public
     */
    pageIndex(): number;
    /**
     * @docid DataSource.pageIndex
     * @publicName pageIndex(newIndex)
     * @param1 newIndex:numeric
     * @prevFileNamespace DevExpress.data
     * @public
     */
    pageIndex(newIndex: number): void;
    /**
     * @docid DataSource.pageSize
     * @publicName pageSize()
     * @return numeric
     * @prevFileNamespace DevExpress.data
     * @public
     */
    pageSize(): number;
    /**
     * @docid DataSource.pageSize
     * @publicName pageSize(value)
     * @param1 value:numeric
     * @prevFileNamespace DevExpress.data
     * @public
     */
    pageSize(value: number): void;
    /**
     * @docid DataSource.paginate
     * @publicName paginate()
     * @return Boolean
     * @prevFileNamespace DevExpress.data
     * @public
     */
    paginate(): boolean;
    /**
     * @docid DataSource.paginate
     * @publicName paginate(value)
     * @param1 value:Boolean
     * @prevFileNamespace DevExpress.data
     * @public
     */
    paginate(value: boolean): void;
    /**
     * @docid DataSource.reload
     * @publicName reload()
     * @return Promise<any>
     * @prevFileNamespace DevExpress.data
     * @public
     */
    reload(): Promise<any> & JQueryPromise<any>;
    /**
     * @docid DataSource.requireTotalCount
     * @publicName requireTotalCount()
     * @return boolean
     * @prevFileNamespace DevExpress.data
     * @public
     */
    requireTotalCount(): boolean;
    /**
     * @docid DataSource.requireTotalCount
     * @publicName requireTotalCount(value)
     * @param1 value:boolean
     * @prevFileNamespace DevExpress.data
     * @public
     */
    requireTotalCount(value: boolean): void;
    /**
     * @docid DataSource.searchExpr
     * @publicName searchExpr()
     * @return getter|Array<getter>
     * @prevFileNamespace DevExpress.data
     * @public
     */
    searchExpr(): string & Function & Array<string | Function>;
    /**
     * @docid DataSource.searchExpr
     * @publicName searchExpr(expr)
     * @param1 expr:getter|Array<getter>
     * @prevFileNamespace DevExpress.data
     * @public
     */
    searchExpr(expr: string | Function | Array<string | Function>): void;
    /**
     * @docid DataSource.searchOperation
     * @publicName searchOperation()
     * @return string
     * @prevFileNamespace DevExpress.data
     * @public
     */
    searchOperation(): string;
    /**
     * @docid DataSource.searchOperation
     * @publicName searchOperation(op)
     * @param1 op:string
     * @prevFileNamespace DevExpress.data
     * @public
     */
    searchOperation(op: string): void;
    /**
     * @docid DataSource.searchValue
     * @publicName searchValue()
     * @return any
     * @prevFileNamespace DevExpress.data
     * @public
     */
    searchValue(): any;
    /**
     * @docid DataSource.searchValue
     * @publicName searchValue(value)
     * @param1 value:any
     * @prevFileNamespace DevExpress.data
     * @public
     */
    searchValue(value: any): void;
    /**
     * @docid DataSource.select
     * @publicName select()
     * @return any
     * @prevFileNamespace DevExpress.data
     * @public
     */
    select(): any;
    /**
     * @docid DataSource.select
     * @publicName select(expr)
     * @param1 expr:any
     * @prevFileNamespace DevExpress.data
     * @public
     */
    select(expr: any): void;
    /**
     * @docid DataSource.sort
     * @publicName sort()
     * @return any
     * @prevFileNamespace DevExpress.data
     * @public
     */
    sort(): any;
    /**
     * @docid DataSource.sort
     * @publicName sort(sortExpr)
     * @param1 sortExpr:any
     * @prevFileNamespace DevExpress.data
     * @public
     */
    sort(sortExpr: any): void;
    /**
     * @docid DataSource.store
     * @publicName store()
     * @return object
     * @prevFileNamespace DevExpress.data
     * @public
     */
    store(): any;
    /**
     * @docid DataSource.totalCount
     * @publicName totalCount()
     * @return numeric
     * @prevFileNamespace DevExpress.data
     * @public
     */
    totalCount(): number;
}
