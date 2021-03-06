/// <reference types="node" />
import { CreateElement, VNode } from 'vue';
import InputOptions from '../types/InputOptions';
import NormalizedOption from '../types/NormalizedOption';
import NormalizedOptions from '../types/NormalizedOptions';
declare type AjaxResults = Promise<{
    results: InputOptions;
    hasMorePages?: boolean;
}>;
declare const TRichSelect: import("vue/types/vue").ExtendedVue<{
    localValue: string | number;
} & {
    guessOptionValue(option: import("../types/InputOption").default): any;
    guessOptionText(option: import("../types/InputOption").default): any;
    normalizeOptions(options: InputOptions): NormalizedOptions;
    normalizeOption(option: import("../types/InputOption").default): NormalizedOption;
} & {
    normalizedOptions: NormalizedOptions;
    flattenedOptions: NormalizedOptions;
} & {
    value: string | number;
    valueAttribute: string;
    textAttribute: string;
    options: any;
} & {
    id: string;
    name: string;
    disabled: boolean;
    readonly: boolean;
    autofocus: boolean;
    required: boolean;
    tabindex: string | number;
} & {
    getElementCssClass(elementName?: string | undefined, defaultClasses?: import("../types/CssClass").default): import("../types/CssClass").default;
} & {
    componentClass: import("../types/CssClass").default;
    activeVariant: string | undefined;
} & {
    classes: any;
    fixedClasses: any;
    variants: any;
    variant: any;
} & import("vue").default, {
    hasFocus: boolean;
    show: boolean;
    localValue: string | number | boolean | symbol | null;
    highlighted: number | null;
    query: string;
    filteredOptions: NormalizedOptions;
    selectedOption: NormalizedOption | undefined;
    searching: boolean;
    delayTimeout: NodeJS.Timeout | undefined;
    nextPage: number | undefined;
}, {
    findOptionByValue(value: string | number | boolean | symbol | null): undefined | NormalizedOption;
    optionHasValue(option: NormalizedOption, value: string | number | boolean | symbol | null): boolean;
    createSelect(createElement: CreateElement): VNode;
    filterOptions(query: string): Promise<void>;
    getFilterPromise(query: string): AjaxResults;
    listEndReached(): void;
    queryFilter(options: NormalizedOptions): NormalizedOptions;
    hideOptions(): void;
    showOptions(): void;
    toggleOptions(): void;
    focusSearchBox(): Promise<void>;
    blurHandler(e: FocusEvent): void;
    focusHandler(e: FocusEvent): void;
    clickHandler(e: MouseEvent): void;
    arrowUpHandler(e: KeyboardEvent): Promise<void>;
    arrowDownHandler(e: KeyboardEvent): void;
    listScrollHandler(e: Event): void;
    scrollToHighlightedOption(behavior?: 'auto' | 'smooth'): void;
    escapeHandler(e: KeyboardEvent): void;
    enterHandler(e: KeyboardEvent): void;
    searchInputHandler(e: Event): void;
    getButton(): HTMLButtonElement;
    getSearchBox(): HTMLInputElement;
    selectOption(option: NormalizedOption, focus?: boolean): Promise<void>;
    clearButtonClickHandler(e: MouseEvent): void;
    blur(): void;
    focus(options?: FocusOptions | undefined): void;
}, {
    usesAJax: boolean;
    shouldShowSearchbox: boolean;
    hasMinimumInputLength: boolean;
    filteredflattenedOptions: NormalizedOptions;
    normalizedHeight: string;
    selectedOptionIndex: number | undefined;
    highlightedOption: NormalizedOption | undefined;
}, {
    delay: number;
    fetchOptions: Function;
    minimumResultsForSearch: number;
    minimumInputLength: number;
    minimumInputLengthText: TimerHandler;
    value: string | number;
    hideSearchBox: boolean;
    openOnFocus: boolean;
    closeOnSelect: boolean;
    selectOnClose: boolean;
    clearable: boolean;
    placeholder: string;
    searchBoxPlaceholder: string;
    noResultsText: string;
    searchingText: string;
    loadingMoreResultsText: string;
    maxHeight: string | number;
    fixedClasses: any;
    classes: any;
}>;
export default TRichSelect;
