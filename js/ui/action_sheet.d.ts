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

import CollectionWidget, {
    CollectionWidgetItem,
    CollectionWidgetOptions
} from './collection/ui.collection_widget.base';

export interface dxActionSheetOptions extends CollectionWidgetOptions<dxActionSheet> {
    /**
     * @docid dxActionSheetOptions.cancelText
     * @default "Cancel"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    cancelText?: string;
    /**
     * @docid dxActionSheetOptions.dataSource
     * @default null
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    dataSource?: string | Array<string | dxActionSheetItem | any> | DataSource | DataSourceOptions;
    /**
     * @docid dxActionSheetOptions.items
     * @fires dxActionSheetOptions.onOptionChanged
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    items?: Array<string | dxActionSheetItem | any>;
    /**
     * @docid dxActionSheetOptions.onCancelClick
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 cancel:boolean
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onCancelClick?: ((e: { component?: dxActionSheet, element?: dxElement, model?: any, cancel?: boolean }) => any) | string;
    /**
     * @docid dxActionSheetOptions.showCancelButton
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    showCancelButton?: boolean;
    /**
     * @docid dxActionSheetOptions.showTitle
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    showTitle?: boolean;
    /**
     * @docid dxActionSheetOptions.target
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    target?: string | Element | JQuery;
    /**
     * @docid dxActionSheetOptions.title
     * @default ""
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    title?: string;
    /**
     * @docid dxActionSheetOptions.usePopover
     * @default false
     * @default true [for](iPad)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    usePopover?: boolean;
    /**
     * @docid dxActionSheetOptions.visible
     * @default false
     * @fires dxActionSheetOptions.onOptionChanged
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    visible?: boolean;
}
/**
 * @docid dxActionSheet
 * @inherits CollectionWidget
 * @module ui/action_sheet
 * @export default
 * @prevFileNamespace DevExpress.ui
 * @public
 */
export default class dxActionSheet extends CollectionWidget {
    constructor(element: Element, options?: dxActionSheetOptions)
    constructor(element: JQuery, options?: dxActionSheetOptions)
    /**
     * @docid dxActionSheet.hide
     * @publicName hide()
     * @return Promise<void>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    hide(): Promise<void> & JQueryPromise<void>;
    /**
     * @docid dxActionSheet.show
     * @publicName show()
     * @return Promise<void>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    show(): Promise<void> & JQueryPromise<void>;
    /**
     * @docid dxActionSheet.toggle
     * @publicName toggle(showing)
     * @param1 showing:boolean
     * @return Promise<void>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    toggle(showing: boolean): Promise<void> & JQueryPromise<void>;
}

export interface dxActionSheetItem extends CollectionWidgetItem {
    /**
     * @docid dxActionSheetItem.icon
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    icon?: string;
    /**
     * @docid dxActionSheetItem.onClick
     * @default null
     * @type_function_param1 e:object
     * @type_function_param1_field1 component:dxActionSheet
     * @type_function_param1_field2 element:dxElement
     * @type_function_param1_field3 model:object
     * @type_function_param1_field4 event:event
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onClick?: ((e: { component?: dxActionSheet, element?: dxElement, model?: any, event?: event }) => any) | string;
    /**
     * @docid dxActionSheetItem.type
     * @type Enums.ButtonType
     * @default 'normal'
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    type?: 'back' | 'danger' | 'default' | 'normal' | 'success';
}

declare global {
interface JQuery {
    dxActionSheet(): JQuery;
    dxActionSheet(options: "instance"): dxActionSheet;
    dxActionSheet(options: string): any;
    dxActionSheet(options: string, ...params: any[]): any;
    dxActionSheet(options: dxActionSheetOptions): JQuery;
}
}
export type Options = dxActionSheetOptions;

/** @deprecated use Options instead */
export type IOptions = dxActionSheetOptions;
