import '../jquery_augmentation';

import {
    dxElement
} from '../core/element';

import DataSource, {
    DataSourceOptions
} from '../data/data_source';

import {
    event
} from '../events/index';

import {
    CollectionWidgetItem
} from './collection/ui.collection_widget.base';

import HierarchicalCollectionWidget, {
    HierarchicalCollectionWidgetOptions
} from './hierarchical_collection/ui.hierarchical_collection_widget';

import {
    SearchBoxMixinOptions
} from './widget/ui.search_box_mixin';

export interface dxTreeViewOptions extends HierarchicalCollectionWidgetOptions<dxTreeView>, SearchBoxMixinOptions<dxTreeView> {
    /**
     * @docid dxTreeViewOptions.animationEnabled
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    animationEnabled?: boolean;
    /**
     * @docid dxTreeViewOptions.createChildren
     * @type_function_param1 parentNode:dxTreeViewNode
     * @type_function_return Promise<any>|Array<Object>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    createChildren?: ((parentNode: dxTreeViewNode) => Promise<any> | JQueryPromise<any> | Array<any>);
    /**
     * @docid  dxTreeViewOptions.dataSource
     * @default null
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    dataSource?: string | Array<dxTreeViewItem> | DataSource | DataSourceOptions;
    /**
     * @docid dxTreeViewOptions.dataStructure
     * @type Enums.TreeViewDataStructure
     * @default 'tree'
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    dataStructure?: 'plain' | 'tree';
    /**
     * @docid dxTreeViewOptions.expandAllEnabled
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    expandAllEnabled?: boolean;
    /**
     * @docid dxTreeViewOptions.expandEvent
     * @type Enums.TreeViewExpandEvent
     * @default "dblclick"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    expandEvent?: 'dblclick' | 'click';
    /**
     * @docid dxTreeViewOptions.expandNodesRecursive
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    expandNodesRecursive?: boolean;
    /**
     * @docid dxTreeViewOptions.expandedExpr
     * @type string|function
     * @default 'expanded'
     * @hidden false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    expandedExpr?: string | Function;
    /**
     * @docid dxTreeViewOptions.hasItemsExpr
     * @type string|function
     * @default 'hasItems'
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    hasItemsExpr?: string | Function;
    /**
     * @docid dxTreeViewOptions.items
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    items?: Array<dxTreeViewItem>;
    /**
     * @docid dxTreeViewOptions.onItemClick
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 itemData:object
     * @type_function_param1_field5 itemElement:dxElement
     * @type_function_param1_field6 itemIndex:number | object
     * @type_function_param1_field7 event:event
     * @type_function_param1_field8 node:dxTreeViewNode
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onItemClick?: ((e: { component?: dxTreeView, element?: dxElement, model?: any, itemData?: any, itemElement?: dxElement, itemIndex?: number | any, event?: event, node?: dxTreeViewNode }) => any);
    /**
     * @docid dxTreeViewOptions.onItemCollapsed
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 itemData:object
     * @type_function_param1_field5 itemElement:dxElement
     * @type_function_param1_field6 itemIndex:Number
     * @type_function_param1_field7 event:event
     * @type_function_param1_field8 node:dxTreeViewNode
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onItemCollapsed?: ((e: { component?: dxTreeView, element?: dxElement, model?: any, itemData?: any, itemElement?: dxElement, itemIndex?: number, event?: event, node?: dxTreeViewNode }) => any);
    /**
     * @docid dxTreeViewOptions.onItemContextMenu
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 itemData:object
     * @type_function_param1_field5 itemElement:dxElement
     * @type_function_param1_field6 itemIndex:number | object
     * @type_function_param1_field7 event:event
     * @type_function_param1_field8 node:dxTreeViewNode
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onItemContextMenu?: ((e: { component?: dxTreeView, element?: dxElement, model?: any, itemData?: any, itemElement?: dxElement, itemIndex?: number | any, event?: event, node?: dxTreeViewNode }) => any);
    /**
     * @docid dxTreeViewOptions.onItemExpanded
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 itemData:object
     * @type_function_param1_field5 itemElement:dxElement
     * @type_function_param1_field6 itemIndex:Number
     * @type_function_param1_field7 event:event
     * @type_function_param1_field8 node:dxTreeViewNode
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onItemExpanded?: ((e: { component?: dxTreeView, element?: dxElement, model?: any, itemData?: any, itemElement?: dxElement, itemIndex?: number, event?: event, node?: dxTreeViewNode }) => any);
    /**
     * @docid dxTreeViewOptions.onItemHold
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 itemData:object
     * @type_function_param1_field5 itemElement:dxElement
     * @type_function_param1_field6 itemIndex:number
     * @type_function_param1_field7 event:event
     * @type_function_param1_field8 node:dxTreeViewNode
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onItemHold?: ((e: { component?: dxTreeView, element?: dxElement, model?: any, itemData?: any, itemElement?: dxElement, itemIndex?: number, event?: event, node?: dxTreeViewNode }) => any);
    /**
     * @docid dxTreeViewOptions.onItemRendered
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 itemData:object
     * @type_function_param1_field5 itemElement:dxElement
     * @type_function_param1_field6 itemIndex:number
     * @type_function_param1_field7 node:dxTreeViewNode
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onItemRendered?: ((e: { component?: dxTreeView, element?: dxElement, model?: any, itemData?: any, itemElement?: dxElement, itemIndex?: number, node?: dxTreeViewNode }) => any);
    /**
     * @docid dxTreeViewOptions.onItemSelectionChanged
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 node:dxTreeViewNode
     * @type_function_param1_field5 itemElement:dxElement
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onItemSelectionChanged?: ((e: { component?: dxTreeView, element?: dxElement, model?: any, node?: dxTreeViewNode, itemElement?: dxElement }) => any);
    /**
     * @docid dxTreeViewOptions.onSelectAllValueChanged
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 value:boolean
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onSelectAllValueChanged?: ((e: { component?: dxTreeView, element?: dxElement, model?: any, value?: boolean }) => any);
    /**
     * @docid dxTreeViewOptions.onSelectionChanged
     * @extends Action
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     * @override
     */
    onSelectionChanged?: ((e: { component?: dxTreeView, element?: dxElement, model?: any }) => any);
    /**
     * @docid dxTreeViewOptions.parentIdExpr
     * @type string|function
     * @default 'parentId'
     * @hidden false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    parentIdExpr?: string | Function;
    /**
     * @docid dxTreeViewOptions.rootValue
     * @default 0
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    rootValue?: any;
    /**
     * @docid dxTreeViewOptions.scrollDirection
     * @type Enums.ScrollDirection
     * @default "vertical"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    scrollDirection?: 'both' | 'horizontal' | 'vertical';
    /**
     * @docid dxTreeViewOptions.selectAllText
     * @default "Select All"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    selectAllText?: string;
    /**
     * @docid dxTreeViewOptions.selectByClick
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    selectByClick?: boolean;
    /**
     * @docid dxTreeViewOptions.selectNodesRecursive
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    selectNodesRecursive?: boolean;
    /**
     * @docid dxTreeViewOptions.selectionMode
     * @type Enums.NavSelectionMode
     * @default "multiple"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    selectionMode?: 'multiple' | 'single';
    /**
     * @docid dxTreeViewOptions.showCheckBoxesMode
     * @type Enums.TreeViewCheckBoxMode
     * @default 'none'
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    showCheckBoxesMode?: 'none' | 'normal' | 'selectAll';
    /**
     * @docid dxTreeViewOptions.virtualModeEnabled
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    virtualModeEnabled?: boolean;
}
/**
 * @docid dxTreeView
 * @inherits HierarchicalCollectionWidget, SearchBoxMixin
 * @module ui/tree_view
 * @export default
 * @prevFileNamespace DevExpress.ui
 * @public
 */
export default class dxTreeView extends HierarchicalCollectionWidget {
    constructor(element: Element, options?: dxTreeViewOptions)
    constructor(element: JQuery, options?: dxTreeViewOptions)
    /**
     * @docid dxTreeView.collapseAll
     * @publicName collapseAll()
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    collapseAll(): void;
    /**
     * @docid dxTreeView.collapseItem
     * @publicName collapseItem(itemData)
     * @param1 itemData:Object
     * @return Promise<void>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    collapseItem(itemData: any): Promise<void> & JQueryPromise<void>;
    /**
     * @docid dxTreeView.collapseItem
     * @publicName collapseItem(itemElement)
     * @param1 itemElement:Element
     * @return Promise<void>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    collapseItem(itemElement: Element): Promise<void> & JQueryPromise<void>;
    /**
     * @docid dxTreeView.collapseItem
     * @publicName collapseItem(key)
     * @param1 key:any
     * @return Promise<void>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    collapseItem(key: any): Promise<void> & JQueryPromise<void>;
    /**
     * @docid dxTreeView.expandAll
     * @publicName expandAll()
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    expandAll(): void;
    /**
     * @docid dxTreeView.expandItem
     * @publicName expandItem(itemData)
     * @param1 itemData:Object
     * @return Promise<void>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    expandItem(itemData: any): Promise<void> & JQueryPromise<void>;
    /**
     * @docid dxTreeView.expandItem
     * @publicName expandItem(itemElement)
     * @param1 itemElement:Element
     * @return Promise<void>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    expandItem(itemElement: Element): Promise<void> & JQueryPromise<void>;
    /**
     * @docid dxTreeView.expandItem
     * @publicName expandItem(key)
     * @param1 key:any
     * @return Promise<void>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    expandItem(key: any): Promise<void> & JQueryPromise<void>;
    /**
     * @docid dxTreeView.getNodes
     * @publicName getNodes()
     * @return Array<dxTreeViewNode>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    getNodes(): Array<dxTreeViewNode>;
    /**
     * @docid dxTreeView.getSelectedNodes
     * @publicName getSelectedNodes()
     * @return Array<dxTreeViewNode>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    getSelectedNodes(): Array<dxTreeViewNode>;
    /**
     * @docid dxTreeView.getSelectedNodeKeys
     * @publicName getSelectedNodeKeys()
     * @return Array<any>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    getSelectedNodeKeys(): Array<any>;
    /**
     * @docid dxTreeView.selectAll
     * @publicName selectAll()
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    selectAll(): void;
    /**
     * @docid dxTreeView.selectItem
     * @publicName selectItem(itemData)
     * @param1 itemData:Object
     * @return boolean
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    selectItem(itemData: any): boolean;
    /**
     * @docid dxTreeView.selectItem
     * @publicName selectItem(itemElement)
     * @param1 itemElement:Element
     * @return boolean
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    selectItem(itemElement: Element): boolean;
    /**
     * @docid dxTreeView.selectItem
     * @publicName selectItem(key)
     * @param1 key:any
     * @return boolean
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    selectItem(key: any): boolean;
    /**
     * @docid dxTreeView.unselectAll
     * @publicName unselectAll()
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    unselectAll(): void;
    /**
     * @docid dxTreeView.unselectItem
     * @publicName unselectItem(itemData)
     * @param1 itemData:Object
     * @return boolean
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    unselectItem(itemData: any): boolean;
    /**
     * @docid dxTreeView.unselectItem
     * @publicName unselectItem(itemElement)
     * @param1 itemElement:Element
     * @return boolean
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    unselectItem(itemElement: Element): boolean;
    /**
     * @docid dxTreeView.unselectItem
     * @publicName unselectItem(key)
     * @param1 key:any
     * @return boolean
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    unselectItem(key: any): boolean;
    /**
     * @docid dxTreeView.updateDimensions
     * @publicName updateDimensions()
     * @return Promise<void>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    updateDimensions(): Promise<void> & JQueryPromise<void>;
    /**
     * @docid dxTreeView.scrollToItem
     * @publicName scrollToItem(itemData)
     * @param1 itemData:Object
     * @return Promise<void>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    scrollToItem(itemData: any): Promise<void> & JQueryPromise<void>;
    /**
     * @docid dxTreeView.scrollToItem
     * @publicName scrollToItem(itemElement)
     * @param1 itemElement:Element
     * @return Promise<void>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    scrollToItem(itemElement: Element): Promise<void> & JQueryPromise<void>;
    /**
     * @docid dxTreeView.scrollToItem
     * @publicName scrollToItem(key)
     * @param1 key:any
     * @return Promise<void>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    scrollToItem(key: any): Promise<void> & JQueryPromise<void>;
}

export interface dxTreeViewItem extends CollectionWidgetItem {
    /**
     * @docid dxTreeViewItem.expanded
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    expanded?: boolean;
    /**
     * @docid dxTreeViewItem.hasItems
     * @default undefined
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    hasItems?: boolean;
    /**
     * @docid dxTreeViewItem.icon
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    icon?: string;
    /**
     * @docid dxTreeViewItem.items
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    items?: Array<dxTreeViewItem>;
    /**
     * @docid dxTreeViewItem.parentId
     * @default undefined
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    parentId?: number | string;
    /**
     * @docid dxTreeViewItem.selected
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    selected?: boolean;
}

export interface dxTreeViewNode {
    /**
     * @docid dxTreeViewNode.children
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    children?: Array<dxTreeViewNode>;
    /**
     * @docid dxTreeViewNode.disabled
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    disabled?: boolean;
    /**
     * @docid dxTreeViewNode.expanded
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    expanded?: boolean;
    /**
     * @docid dxTreeViewNode.itemData
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    itemData?: any;
    /**
     * @docid dxTreeViewNode.key
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    key?: any;
    /**
     * @docid dxTreeViewNode.parent
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    parent?: dxTreeViewNode;
    /**
     * @docid dxTreeViewNode.selected
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    selected?: boolean;
    /**
     * @docid dxTreeViewNode.text
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    text?: string;
}

declare global {
interface JQuery {
    dxTreeView(): JQuery;
    dxTreeView(options: "instance"): dxTreeView;
    dxTreeView(options: string): any;
    dxTreeView(options: string, ...params: any[]): any;
    dxTreeView(options: dxTreeViewOptions): JQuery;
}
}
export type Options = dxTreeViewOptions;

/** @deprecated use Options instead */
export type IOptions = dxTreeViewOptions;
