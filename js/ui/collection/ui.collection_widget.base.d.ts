import '../../jquery_augmentation';

import {
    dxElement
} from '../../core/element';

import {
    template
} from '../../core/templates/template';

import DataSource, {
    DataSourceOptions
} from '../../data/data_source';

import {
    event
} from '../../events/index';

import Widget, {
    WidgetOptions
} from '../widget/ui.widget';

export interface CollectionWidgetOptions<T = CollectionWidget> extends WidgetOptions<T> {
    /**
     * @docid CollectionWidgetOptions.dataSource
     * @default null
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    dataSource?: string | Array<string | CollectionWidgetItem> | DataSource | DataSourceOptions;
    /**
     * @docid CollectionWidgetOptions.itemHoldTimeout
     * @default 750
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    itemHoldTimeout?: number;
    /**
     * @docid CollectionWidgetOptions.itemTemplate
     * @default "item"
     * @type_function_param1 itemData:object
     * @type_function_param2 itemIndex:number
     * @type_function_param3 itemElement:dxElement
     * @type_function_return string|Element|jQuery
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    itemTemplate?: template | ((itemData: any, itemIndex: number, itemElement: dxElement) => string | Element | JQuery);
    /**
     * @docid CollectionWidgetOptions.items
     * @fires CollectionWidgetOptions.onOptionChanged
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    items?: Array<string | CollectionWidgetItem | any>;
    /**
     * @docid CollectionWidgetOptions.keyExpr
     * @type string|function
     * @default null
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    keyExpr?: string | Function;
    /**
     * @docid CollectionWidgetOptions.noDataText
     * @default "No data to display"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    noDataText?: string;
    /**
     * @docid CollectionWidgetOptions.onItemClick
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 itemData:object
     * @type_function_param1_field5 itemElement:dxElement
     * @type_function_param1_field6 itemIndex:number
     * @type_function_param1_field7 event:event
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onItemClick?: ((e: { component?: T, element?: dxElement, model?: any, itemData?: any, itemElement?: dxElement, itemIndex?: number, event?: event }) => any) | string;
    /**
     * @docid CollectionWidgetOptions.onItemContextMenu
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 itemData:object
     * @type_function_param1_field5 itemElement:dxElement
     * @type_function_param1_field6 itemIndex:number
     * @type_function_param1_field7 event:event
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onItemContextMenu?: ((e: { component?: T, element?: dxElement, model?: any, itemData?: any, itemElement?: dxElement, itemIndex?: number, event?: event }) => any);
    /**
     * @docid CollectionWidgetOptions.onItemHold
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 itemData:object
     * @type_function_param1_field5 itemElement:dxElement
     * @type_function_param1_field6 itemIndex:number
     * @type_function_param1_field7 event:event
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onItemHold?: ((e: { component?: T, element?: dxElement, model?: any, itemData?: any, itemElement?: dxElement, itemIndex?: number, event?: event }) => any);
    /**
     * @docid CollectionWidgetOptions.onItemRendered
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 itemData:object
     * @type_function_param1_field5 itemElement:dxElement
     * @type_function_param1_field6 itemIndex:number
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onItemRendered?: ((e: { component?: T, element?: dxElement, model?: any, itemData?: any, itemElement?: dxElement, itemIndex?: number }) => any);
    /**
     * @docid CollectionWidgetOptions.onSelectionChanged
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 addedItems:array<any>
     * @type_function_param1_field5 removedItems:array<any>
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onSelectionChanged?: ((e: { component?: T, element?: dxElement, model?: any, addedItems?: Array<any>, removedItems?: Array<any> }) => any);
    /**
     * @docid CollectionWidgetOptions.selectedIndex
     * @default -1
     * @fires CollectionWidgetOptions.onSelectionChanged
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    selectedIndex?: number;
    /**
     * @docid CollectionWidgetOptions.selectedItem
     * @default null
     * @fires CollectionWidgetOptions.onSelectionChanged
     * @ref
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    selectedItem?: any;
    /**
     * @docid CollectionWidgetOptions.selectedItemKeys
     * @fires CollectionWidgetOptions.onSelectionChanged
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    selectedItemKeys?: Array<any>;
    /**
     * @docid CollectionWidgetOptions.selectedItems
     * @fires CollectionWidgetOptions.onSelectionChanged
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    selectedItems?: Array<any>;
}
/**
 * @docid CollectionWidget
 * @inherits Widget, DataHelperMixin
 * @module ui/collection/ui.collection_widget.base
 * @export default
 * @hidden
 * @prevFileNamespace DevExpress.ui
 */
export default class CollectionWidget extends Widget {
    constructor(element: Element, options?: CollectionWidgetOptions)
    constructor(element: JQuery, options?: CollectionWidgetOptions)
    getDataSource(): DataSource;
}

export interface CollectionWidgetItem {
    /**
     * @docid CollectionWidgetItem.disabled
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    disabled?: boolean;
    /**
     * @docid CollectionWidgetItem.html
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    html?: string;
    /**
     * @docid CollectionWidgetItem.template
     * @type_function_return string|Element|jQuery
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    template?: template | (() => string | Element | JQuery);
    /**
     * @docid CollectionWidgetItem.text
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    text?: string;
    /**
     * @docid CollectionWidgetItem.visible
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    visible?: boolean;
}
