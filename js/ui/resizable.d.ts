import '../jquery_augmentation';

import DOMComponent, {
    DOMComponentOptions
} from '../core/dom_component';

import {
    dxElement
} from '../core/element';

import {
    event
} from '../events/index';

export interface dxResizableOptions extends DOMComponentOptions<dxResizable> {
    /**
     * @docid dxResizableOptions.handles
     * @type Enums.ResizeHandle | string
     * @default "all"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    handles?: 'bottom' | 'left' | 'right' | 'top' | 'all' | string;
    /**
     * @docid dxResizableOptions.height
     * @type_function_return number|string
     * @fires dxResizableOptions.onResize
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    height?: number | string | (() => number | string);
    /**
     * @docid dxResizableOptions.maxHeight
     * @default Infinity
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    maxHeight?: number;
    /**
     * @docid dxResizableOptions.maxWidth
     * @default Infinity
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    maxWidth?: number;
    /**
     * @docid dxResizableOptions.minHeight
     * @default 30
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    minHeight?: number;
    /**
     * @docid dxResizableOptions.minWidth
     * @default 30
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    minWidth?: number;
    /**
     * @docid dxResizableOptions.onResize
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 event:event
     * @type_function_param1_field5 width:number
     * @type_function_param1_field6 height:number
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onResize?: ((e: { component?: dxResizable, element?: dxElement, model?: any, event?: event, width?: number, height?: number }) => any);
    /**
     * @docid dxResizableOptions.onResizeEnd
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 event:event
     * @type_function_param1_field5 width:number
     * @type_function_param1_field6 height:number
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onResizeEnd?: ((e: { component?: dxResizable, element?: dxElement, model?: any, event?: event, width?: number, height?: number }) => any);
    /**
     * @docid dxResizableOptions.onResizeStart
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 event:event
     * @type_function_param1_field5 width:number
     * @type_function_param1_field6 height:number
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onResizeStart?: ((e: { component?: dxResizable, element?: dxElement, model?: any, event?: event, width?: number, height?: number }) => any);
    /**
     * @docid dxResizableOptions.width
     * @type_function_return number|string
     * @fires dxResizableOptions.onResize
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    width?: number | string | (() => number | string);
}
/**
 * @docid dxResizable
 * @inherits DOMComponent
 * @hasTranscludedContent
 * @module ui/resizable
 * @export default
 * @prevFileNamespace DevExpress.ui
 * @public
 */
export default class dxResizable extends DOMComponent {
    constructor(element: Element, options?: dxResizableOptions)
    constructor(element: JQuery, options?: dxResizableOptions)
}

declare global {
interface JQuery {
    dxResizable(): JQuery;
    dxResizable(options: "instance"): dxResizable;
    dxResizable(options: string): any;
    dxResizable(options: string, ...params: any[]): any;
    dxResizable(options: dxResizableOptions): JQuery;
}
}
export type Options = dxResizableOptions;

/** @deprecated use Options instead */
export type IOptions = dxResizableOptions;
