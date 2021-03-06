import '../jquery_augmentation';

import {
    dxValidationGroupResult
} from './validation_group';

/**
 * @docid validationEngine
 * @section Core
 * @namespace DevExpress
 * @module ui/validation_engine
 * @export default
 * @prevFileNamespace DevExpress.ui
 * @public
 */
export default class validationEngine {
    /**
     * @docid validationEngine.getGroupConfig
     * @section Core
     * @publicName getGroupConfig()
     * @return object
     * @static
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    static getGroupConfig(): any;
    /**
     * @docid validationEngine.getGroupConfig
     * @section Core
     * @publicName getGroupConfig(group)
     * @param1 group:string|object
     * @return object
     * @static
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    static getGroupConfig(group: string | any): any;
    /**
     * @docid validationEngine.registerModelForValidation
     * @publicName registerModelForValidation(model)
     * @param1 model:object
     * @static
     * @prevFileNamespace DevExpress.integration
     * @public
     */
    static registerModelForValidation(model: any): void;
    /**
     * @docid validationEngine.resetGroup
     * @section Core
     * @publicName resetGroup()
     * @static
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    static resetGroup(): void;
    /**
     * @docid validationEngine.resetGroup
     * @section Core
     * @publicName resetGroup(group)
     * @param1 group:string|object
     * @static
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    static resetGroup(group: string | any): void;
    /**
     * @docid validationEngine.unregisterModelForValidation
     * @publicName unregisterModelForValidation(model)
     * @param1 model:object
     * @static
     * @prevFileNamespace DevExpress.integration
     * @public
     */
    static unregisterModelForValidation(model: any): void;
    /**
     * @docid validationEngine.validateGroup
     * @section Core
     * @publicName validateGroup()
     * @return dxValidationGroupResult
     * @static
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    static validateGroup(): dxValidationGroupResult;
    /**
     * @docid validationEngine.validateGroup
     * @section Core
     * @publicName validateGroup(group)
     * @param1 group:string|object
     * @return dxValidationGroupResult
     * @static
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    static validateGroup(group: string | any): dxValidationGroupResult;
    /**
     * @docid validationEngine.validateModel
     * @publicName validateModel(model)
     * @param1 model:object
     * @return object
     * @static
     * @prevFileNamespace DevExpress.integration
     * @public
     */
    static validateModel(model: any): any;
}

export interface AsyncRule {
    /**
     * @docid AsyncRule.ignoreEmptyValue
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    ignoreEmptyValue?: boolean;
    /**
     * @docid AsyncRule.message
     * @default 'Value is invalid'
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    message?: string;
    /**
     * @docid AsyncRule.reevaluate
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    reevaluate?: boolean;
    /**
     * @docid AsyncRule.type
     * @type Enums.ValidationRuleType
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    type?: 'required' | 'numeric' | 'range' | 'stringLength' | 'custom' | 'compare' | 'pattern' | 'email' | 'async';
    /**
     * @docid AsyncRule.validationCallback
     * @type_function_return Promise<any>
     * @type_function_param1 options:object
     * @type_function_param1_field1 value:string|number
     * @type_function_param1_field2 rule:object
     * @type_function_param1_field3 validator:object
     * @type_function_param1_field4 data:object
     * @type_function_param1_field5 column:object
     * @type_function_param1_field6 formItem:object
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    validationCallback?: ((options: { value?: string | number, rule?: any, validator?: any, data?: any, column?: any, formItem?: any }) => Promise<any> | JQueryPromise<any>);
}

export interface CompareRule {
    /**
     * @docid CompareRule.comparisonTarget
     * @type_function_return object
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    comparisonTarget?: (() => any);
    /**
     * @docid CompareRule.comparisonType
     * @type Enums.ComparisonOperator
     * @default '=='
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    comparisonType?: '!=' | '!==' | '<' | '<=' | '==' | '===' | '>' | '>=';
    /**
     * @docid CompareRule.ignoreEmptyValue
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    ignoreEmptyValue?: boolean;
    /**
     * @docid CompareRule.message
     * @default 'Values do not match'
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    message?: string;
    /**
     * @docid CompareRule.reevaluate
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    reevaluate?: boolean;
    /**
     * @docid CompareRule.type
     * @type Enums.ValidationRuleType
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    type?: 'required' | 'numeric' | 'range' | 'stringLength' | 'custom' | 'compare' | 'pattern' | 'email' | 'async';
}

export interface CustomRule {
    /**
     * @docid CustomRule.ignoreEmptyValue
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    ignoreEmptyValue?: boolean;
    /**
     * @docid CustomRule.message
     * @default 'Value is invalid'
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    message?: string;
    /**
     * @docid CustomRule.reevaluate
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    reevaluate?: boolean;
    /**
     * @docid CustomRule.type
     * @type Enums.ValidationRuleType
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    type?: 'required' | 'numeric' | 'range' | 'stringLength' | 'custom' | 'compare' | 'pattern' | 'email' | 'async';
    /**
     * @docid CustomRule.validationCallback
     * @type_function_return boolean
     * @type_function_param1 options:object
     * @type_function_param1_field1 value:string|number
     * @type_function_param1_field2 rule:object
     * @type_function_param1_field3 validator:object
     * @type_function_param1_field4 data:object
     * @type_function_param1_field5 column:object
     * @type_function_param1_field6 formItem:object
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    validationCallback?: ((options: { value?: string | number, rule?: any, validator?: any, data?: any, column?: any, formItem?: any }) => boolean);
}

export interface EmailRule {
    /**
     * @docid EmailRule.ignoreEmptyValue
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    ignoreEmptyValue?: boolean;
    /**
     * @docid EmailRule.message
     * @default 'Email is invalid'
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    message?: string;
    /**
     * @docid EmailRule.type
     * @type Enums.ValidationRuleType
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    type?: 'required' | 'numeric' | 'range' | 'stringLength' | 'custom' | 'compare' | 'pattern' | 'email' | 'async';
}

export interface NumericRule {
    /**
     * @docid NumericRule.ignoreEmptyValue
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    ignoreEmptyValue?: boolean;
    /**
     * @docid NumericRule.message
     * @default 'Value should be a number'
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    message?: string;
    /**
     * @docid NumericRule.type
     * @type Enums.ValidationRuleType
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    type?: 'required' | 'numeric' | 'range' | 'stringLength' | 'custom' | 'compare' | 'pattern' | 'email' | 'async';
}

export interface PatternRule {
    /**
     * @docid PatternRule.ignoreEmptyValue
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    ignoreEmptyValue?: boolean;
    /**
     * @docid PatternRule.message
     * @default 'Value does not match pattern'
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    message?: string;
    /**
     * @docid PatternRule.pattern
     * @type regexp|string
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    pattern?: RegExp | string;
    /**
     * @docid PatternRule.type
     * @type Enums.ValidationRuleType
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    type?: 'required' | 'numeric' | 'range' | 'stringLength' | 'custom' | 'compare' | 'pattern' | 'email' | 'async';
}

export interface RangeRule {
    /**
     * @docid RangeRule.ignoreEmptyValue
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    ignoreEmptyValue?: boolean;
    /**
     * @docid RangeRule.max
     * @type datetime|number
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    max?: Date | number;
    /**
     * @docid RangeRule.message
     * @default 'Value is out of range'
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    message?: string;
    /**
     * @docid RangeRule.min
     * @type datetime|number
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    min?: Date | number;
    /**
     * @docid RangeRule.reevaluate
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    reevaluate?: boolean;
    /**
     * @docid RangeRule.type
     * @type Enums.ValidationRuleType
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    type?: 'required' | 'numeric' | 'range' | 'stringLength' | 'custom' | 'compare' | 'pattern' | 'email' | 'async';
}

export interface RequiredRule {
    /**
     * @docid RequiredRule.message
     * @default 'Required'
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    message?: string;
    /**
     * @docid RequiredRule.trim
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    trim?: boolean;
    /**
     * @docid RequiredRule.type
     * @type Enums.ValidationRuleType
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    type?: 'required' | 'numeric' | 'range' | 'stringLength' | 'custom' | 'compare' | 'pattern' | 'email' | 'async';
}

export interface StringLengthRule {
    /**
     * @docid StringLengthRule.ignoreEmptyValue
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    ignoreEmptyValue?: boolean;
    /**
     * @docid StringLengthRule.max
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    max?: number;
    /**
     * @docid StringLengthRule.message
     * @default 'The length of the value is not correct'
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    message?: string;
    /**
     * @docid StringLengthRule.min
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    min?: number;
    /**
     * @docid StringLengthRule.trim
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    trim?: boolean;
    /**
     * @docid StringLengthRule.type
     * @type Enums.ValidationRuleType
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    type?: 'required' | 'numeric' | 'range' | 'stringLength' | 'custom' | 'compare' | 'pattern' | 'email' | 'async';
}
