import '../jquery_augmentation';

import {
    dxElement
} from '../core/element';

import {
    event
} from '../events/index';

import Widget, {
    WidgetOptions
} from './widget/ui.widget';

export interface MapLocation {
    /**
     * @docid MapLocation.lat
     * @default 0
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    lat?: number;
    /**
     * @docid MapLocation.lng
     * @default 0
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    lng?: number;
}

export interface dxMapOptions extends WidgetOptions<dxMap> {
    /**
     * @docid dxMapOptions.apiKey
     * @type string|object
     * @default { bing: '', google: '', googleStatic: '' }
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    apiKey?: string | { bing?: string, google?: string, googleStatic?: string };
    /**
     * @docid dxMapOptions.autoAdjust
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    autoAdjust?: boolean;
    /**
     * @docid dxMapOptions.center
     * @extends MapLocationType
     * @fires dxMapOptions.onOptionChanged
     * @inherits MapLocation
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    center?: any | string | Array<number>;
    /**
     * @docid dxMapOptions.controls
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    controls?: boolean;
    /**
     * @docid dxMapOptions.focusStateEnabled
     * @default true [for](desktop)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    focusStateEnabled?: boolean;
    /**
     * @docid dxMapOptions.height
     * @default 300
     * @type_function_return number|string
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    height?: number | string | (() => number | string);
    /**
     * @docid dxMapOptions.key
     * @default { bing: '', google: '', googleStatic: '' }
     * @prevFileNamespace DevExpress.ui
     * @public
     * @deprecated dxMapOptions.apiKey
     */
    key?: string | { bing?: string, google?: string, googleStatic?: string };
    /**
     * @docid dxMapOptions.markerIconSrc
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    markerIconSrc?: string;
    /**
     * @docid dxMapOptions.markers
     * @fires dxMapOptions.onMarkerAdded
     * @fires dxMapOptions.onMarkerRemoved
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    markers?: Array<{ iconSrc?: string, location?: any | string | Array<number>, onClick?: Function, tooltip?: string | { isShown?: boolean, text?: string } }>;
    /**
     * @docid dxMapOptions.onClick
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 location:object
     * @type_function_param1_field5 event:event
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onClick?: ((e: { component?: dxMap, element?: dxElement, model?: any, location?: any, event?: event }) => any) | string;
    /**
     * @docid dxMapOptions.onMarkerAdded
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 options:object
     * @type_function_param1_field5 originalMarker:object
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onMarkerAdded?: ((e: { component?: dxMap, element?: dxElement, model?: any, options?: any, originalMarker?: any }) => any);
    /**
     * @docid dxMapOptions.onMarkerRemoved
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 options:object
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onMarkerRemoved?: ((e: { component?: dxMap, element?: dxElement, model?: any, options?: any }) => any);
    /**
     * @docid dxMapOptions.onReady
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 originalMap:object
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onReady?: ((e: { component?: dxMap, element?: dxElement, model?: any, originalMap?: any }) => any);
    /**
     * @docid dxMapOptions.onRouteAdded
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 options:object
     * @type_function_param1_field5 originalRoute:object
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onRouteAdded?: ((e: { component?: dxMap, element?: dxElement, model?: any, options?: any, originalRoute?: any }) => any);
    /**
     * @docid dxMapOptions.onRouteRemoved
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 options:object
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onRouteRemoved?: ((e: { component?: dxMap, element?: dxElement, model?: any, options?: any }) => any);
    /**
     * @docid dxMapOptions.provider
     * @type Enums.GeoMapProvider
     * @default "google"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    provider?: 'bing' | 'google' | 'googleStatic';
    /**
     * @docid dxMapOptions.routes
     * @fires dxMapOptions.onRouteAdded
     * @fires dxMapOptions.onRouteRemoved
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    routes?: Array<{ color?: string, locations?: Array<any>, mode?: 'driving' | 'walking', opacity?: number, weight?: number }>;
    /**
     * @docid dxMapOptions.type
     * @type Enums.GeoMapType
     * @default "roadmap"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    type?: 'hybrid' | 'roadmap' | 'satellite';
    /**
     * @docid dxMapOptions.width
     * @default 300
     * @type_function_return number|string
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    width?: number | string | (() => number | string);
    /**
     * @docid dxMapOptions.zoom
     * @default 1
     * @fires dxMapOptions.onOptionChanged
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    zoom?: number;
}
/**
 * @docid dxMap
 * @inherits Widget
 * @module ui/map
 * @export default
 * @prevFileNamespace DevExpress.ui
 * @public
 */
export default class dxMap extends Widget {
    constructor(element: Element, options?: dxMapOptions)
    constructor(element: JQuery, options?: dxMapOptions)
    /**
     * @docid dxMap.addmarker
     * @publicName addMarker(markerOptions)
     * @param1 markerOptions:Object|Array<Object>
     * @return Promise<Object>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    addMarker(markerOptions: any | Array<any>): Promise<any> & JQueryPromise<any>;
    /**
     * @docid dxMap.addroute
     * @publicName addRoute(routeOptions)
     * @param1 options:object|Array<Object>
     * @return Promise<Object>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    addRoute(options: any | Array<any>): Promise<any> & JQueryPromise<any>;
    /**
     * @docid dxMap.removemarker
     * @publicName removeMarker(marker)
     * @param1 marker:Object|number|Array<Object>
     * @return Promise<void>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    removeMarker(marker: any | number | Array<any>): Promise<void> & JQueryPromise<void>;
    /**
     * @docid dxMap.removeroute
     * @publicName removeRoute(route)
     * @param1 route:object|number|Array<Object>
     * @return Promise<void>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    removeRoute(route: any | number | Array<any>): Promise<void> & JQueryPromise<void>;
}

declare global {
interface JQuery {
    dxMap(): JQuery;
    dxMap(options: "instance"): dxMap;
    dxMap(options: string): any;
    dxMap(options: string, ...params: any[]): any;
    dxMap(options: dxMapOptions): JQuery;
}
}
export type Options = dxMapOptions;

/** @deprecated use Options instead */
export type IOptions = dxMapOptions;
