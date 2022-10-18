/* eslint-disable max-lines */
import { values } from 'lodash';

import { environment } from '../environments/environment';

export const ROLES: { [key: string]: Role } = {
  MENTOR: 0,
  STUDENT: 1,
};

/* eslint-disable max-lines */
// angular 9 compatibility
const mapTypeControlStyle = {
  DEFAULT: 0,
  DROPDOWN_MENU: 2,
  HORIZONTAL_BAR: 1,
};

const controlPosition = {
  RIGHT_BOTTOM: 0,
  TOP_LEFT: 1,
  TOP_CENTER: 2,
  TOP_RIGHT: 3,
  LEFT_CENTER: 4,
  LEFT_TOP: 5,
  LEFT_BOTTOM: 6,
  RIGHT_TOP: 7,
  RIGHT_CENTER: 8,
  BOTTOM_RIGHT: 9,
  BOTTOM_LEFT: 10,
  BOTTOM_CENTER: 11,
};
// angular 9 compatibility

const WEB_API_URL: string = environment.apiBase;

const buildUrl = (...resources: (string | number)[]) =>
  [WEB_API_URL].concat(resources.map((r) => r.toString())).join('/');

const buildAuthorityUrl = (...resources: (string | number)[]) =>
  [environment.authority].concat(resources.map((r) => r.toString())).join('/');

export const URLS = {
  LOGIN: buildUrl('Users/Login'),
  USERS: buildUrl('users'),
  USER: (userId: string) => buildUrl('users', userId),
  SAVE_USER: buildUrl('Users'),

  LOGOUT: buildUrl('Account/Logout'),
  SIGN_UP: buildUrl('Account/Register'),
  FORGOT_PASSWORD: buildUrl('Account/ForgotPassword'),
  SET_PASSWORD: buildUrl('Account/password'),
  RESET_PASSWORD: buildUrl('Account/password/reset'),
  START_DATE: buildUrl('Account/startDate'),
  CHANGE_PASSWORD: buildUrl('Account/Password'),
  TERMS: (identifier: string) =>
    buildUrl(`Account/Terms?Identifier=${identifier}`),
  SEARCH_POSTCODE: buildUrl('LookUps', 'Postcodes'),
  REPORT: (reportId: number) => buildUrl('reports', reportId),
  POSTCODE_RADII: (postcode: string) => buildUrl(`Postcodes/${postcode}/radii`),
  AVAILABLE_RADII: buildUrl('radii', 'available'),
  COMPARISON_DETAILS: (postcode: string, radius: number) =>
    buildUrl(`Postcodes/${postcode}/radii/${radius}/compare`),
  RADIUS_DETAILS: (postcode: string, radius: number) =>
    buildUrl(`Postcodes/${postcode}/radii/${radius}`),
  CATCHMENTS_DETAILS: (radius: number) =>
    buildUrl('postcodes', 'radii', radius, 'details'),
  MARKET_METRICS: (postcode: string, radius: number) =>
    buildUrl(`Postcodes/${postcode}/radii/${radius}/metrics`),
  HOME_DETAILS: (homeId: number) => buildUrl(`careHomes/${homeId}`),

  USER_AUDIT: (userId: string) => buildUrl('Users', userId, 'Audit'),
  LABELS: buildUrl('labels'),
  PRIORITIES: buildUrl('priorities'),
  DELETE_POSTCODE_LABEL: (postcode: string, type: number) =>
    buildUrl('PostCodes', postcode, 'labels', type),
  COUNTRIES: buildUrl('LookUps', 'Countries'),
  TOKEN: buildAuthorityUrl('connect/token'),
  TOKEN_INFO: buildAuthorityUrl('connect/userinfo'),
  REVOCATION: buildAuthorityUrl('connect/revocation'),
  TRACKER_OPTIONS: buildUrl('searchHistory', 'options', 'notifications'),
  HEATMAP_RANGES: (heatmapMode: number, rangesCount: number) =>
    buildUrl('Heatmap', heatmapMode, 'Ranges', rangesCount),
  POSTCODE_SEARCH_ITEM: (postcode: string) =>
    buildUrl('Lookups', 'Postcodes', postcode),
  HOME_SEARCH_ITEM: (postcode: string, homeId) =>
    buildUrl('Lookups', 'Postcodes', postcode, 'CareHomes', homeId),
  COMPANIES: buildUrl('companies'),
  COMPANY_SEARCHES: (companyId: number) =>
    buildUrl('Companies', companyId, 'searches'),
  COMPANY: (companyId: number) => buildUrl('companies', companyId),
  POSTCODE_SEARCH_HISTORY: (postcode: string) =>
    buildUrl('postcodes', postcode, 'searchHistory'),
  COMPANIES_LOOKUP: buildUrl('Lookups', 'Companies'),
  COMPANY_USERS_LOOKUP: (companyId: number) =>
    buildUrl('Lookups', 'Companies', companyId, 'users'),
  COMPANY_LOOKUP: (companyId: number) =>
    buildUrl('Lookups', 'Companies', companyId),
  COMPANY_USERS: (companyId: number) =>
    buildUrl('companies', companyId, 'users'),
  SUBSCRIPTIONS: buildUrl('Lookups', 'subscriptions'),
  ACCESS_LEVELS: buildUrl('Lookups', 'accessLevels'),
  SUBSCRIPTION_DEFAULTS: (subscriptionType: number) =>
    buildUrl('Lookups', 'subscriptions', subscriptionType),
  COMPANY_AUDIT: (companyId: number) =>
    buildUrl('Companies', companyId, 'Audit'),
  NEAREST_POSTCODES: (lat: number, lng: number) =>
    buildUrl('Postcodes', 'Search', lat, lng),
  AUTHORITY_PDF: (code: string) => buildUrl('authorities', code, 'pdf'),
};

export const ROUTING = {
  SNAPSHOT: {
    path: 'snapshot',
    MAP: { path: 'map' },
    LIST: { path: 'list' },
    FEE_ANALYZER: { path: 'fee-analyser' },
    HEATMAP: { path: 'heatmap' },
    STAFFING: { path: 'staffing' },
    DEMAND: { path: 'demand' },
    OPERATOR_SEARCH: { path: 'operator-search' },
    AUTHORITY_SEARCH: { path: 'authority-search' },
    AUTHORITY_FEES: { path: 'authority-fees' },
  },
};

export const HTTP_STATUSES = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  SERVICE_UNAVAILABLE: 503,
};

const markersPath = '../../assets/markers/';
const markersExt = '.png';
const markersPound = '-pound';
const buildIconsPath = (name: string) => ({
  legendUrl: `${markersPath}legend-${name}${markersExt}`,
  url: `${markersPath}${name}${markersExt}`,
  urlPound: `${markersPath}${name}${markersPound}${markersExt}`,
  hoverUrl: `${markersPath}hover-${name}${markersExt}`,
  hoverUrlPound: `${markersPath}hover-${name}${markersPound}${markersExt}`,
  activeUrl: `${markersPath}active-${name}${markersExt}`,
  activeUrlPound: `${markersPath}active-${name}${markersPound}${markersExt}`,
});

export const FORMATS = {
  DATE: 'dd/MM/yyyy',
  LONG_DATE: 'd MMMM y',
  DATETIME: 'dd/MM/yyyy HH:mm:ss',
  DATE_PICKER: {
    DATE: 'dd/mm/yy',
  },
  MOMENT: {
    DATE: 'D/MM/YYYY',
  },
  YEAR: 'yyyy',
};

export const METRICS_PIPES = {
  NUMBER: 1,
  CURRENCY: 2,
  PERCENT: 3,
  BEDS: 4,
  HOMES: 5,
  DATE: 6,
  BOOL: 7,
  HREF: 8,
  PEOPLE: 9,
  EXTERNAL_LINK: 10,
  YEAR: 11,
  NURSES: 12,
  CARE_ASSISTANTS: 13,
  POUND_PER_WEEK: 14,
};

const getUserStatusStyle = (backgroundColor: string) => ({
  color: 'white',
  background: backgroundColor,
  display: 'inline-block',
  'text-transform': 'uppercase',
  padding: '5px',
  'border-radius': '2px',
});

// export const ACCOUNT_STATUS_TYPES = {
//     NOT_SELECTED: 0 as UserStatusType,
//     NEW: 1 as UserStatusType,
//     TRIAL: 2 as UserStatusType,
//     ACTIVE: 3 as UserStatusType,
//     REJECTED: 4 as UserStatusType,
//     PENDING: 99 as UserStatusType,
//     EXPIRED: 100 as UserStatusType
// };

// export const ACCOUNT_STATUSES: IAccountStatuses = {
//     [ACCOUNT_STATUS_TYPES.NOT_SELECTED]: {
//         nameKey: nameof<IStrings>(s => s.NOT_SELECTED),
//         style: { display: 'none' },
//         class: 'not-selected'
//     },
//     [ACCOUNT_STATUS_TYPES.NEW]: {
//         nameKey: nameof<IStrings>(s => s.NEW),
//         style: getUserStatusStyle('#f0d64b'),
//         class: 'new'
//     },
//     [ACCOUNT_STATUS_TYPES.TRIAL]: {
//         nameKey: nameof<IStrings>(s => s.TRIAL),
//         style: getUserStatusStyle('#cca1cf'),
//         class: 'trial'
//     },
//     [ACCOUNT_STATUS_TYPES.ACTIVE]: {
//         nameKey: nameof<IStrings>(s => s.ACTIVE),
//         style: getUserStatusStyle('#9bcf8f'),
//         class: 'active'
//     },
//     [ACCOUNT_STATUS_TYPES.REJECTED]: {
//         nameKey: nameof<IStrings>(s => s.REJECTED),
//         style: getUserStatusStyle('#f08b74'),
//         class: 'rejected'
//     },
//     [ACCOUNT_STATUS_TYPES.PENDING]: {
//         nameKey: nameof<IStrings>(s => s.PENDING),
//         style: getUserStatusStyle('#979fa6'),
//         class: 'pending'
//     },
//     [ACCOUNT_STATUS_TYPES.EXPIRED]: {
//         nameKey: nameof<IStrings>(s => s.EXPIRED),
//         style: getUserStatusStyle('#d0c9b8'),
//         class: 'expired'
//     }
// };

export const NAVIGATION = [
  { name: 'Snapshot', route: '/snapshot' },
  { name: 'Tracker', route: '/tracker' },
  { name: 'Compare', route: '/compare' },
];

export const FORM_MODES = {
  READONLY: 1,
  EDIT: 2,
  CREATE: 3,
};

export const COMPARABLE_ITEM_CLASSNAME = {
  RED: 'red',
  GREEN: 'green',
  AMBER: 'amber',
};

export const PAGINATOR_SHOW_ALL_CLASSNAME = 'show-all';

export const COMPARISON_ORDER = {
  LARGER_BETTER: 1,
  SMALLER_BETTER: 2,
};

export const URL_PARAMS_SEPARATOR = ',';
export const ACCESS_LEVEL_SEPARATOR = ', ';

export const MESSAGE_SEVERITY = {
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info',
};

export const VALIDATION_PATTERNS = {
  PHONE: '[\\d]*',
  VAT: '[\\da-zA-z ]*',
  POSTCODE: '[\\da-zA-z ]*',
};

export const SET_PASSWORD_MODE = {
  SET: 'set',
  RESET: 'reset',
};

export const SECTOR = {
  P: 'Private',
  V: 'Voluntary / third sector',
  N: 'NHS',
  L: 'Local Authority',
};

export const GEOMETRY = {
  POLYGON: 'Polygon',
  MULTI_POLYGON: 'MultiPolygon',
  MULTI_LINE_STRING: 'MultiLineString',
};

export const MAP_EVENTS = {
  TILES_LOADED: 'tilesloaded',
  VISIBLE_CHANGED: 'visible_changed',
};

export const BED_REQUIREMENT_SUPPLY = {
  EXCESS: 1,
  SHORTFALL: 2,
  EQUILIBRIUM: 3,
};

export const MARKET_SIZE_TYPE = {
  VERY_SMALL: 1,
  SMALL: 2,
  TYPICAL: 3,
  LARGE: 4,
  VERY_LARGE: 5,
};

export const STAFFING_MARKET_SIZE_TYPE = {
  VERY_SMALL: 1,
  SMALL: 2,
  MEDIUM_SMALL: 3,
  MEDIUM: 4,
  MEDIUM_LARGE: 5,
  LARGE: 6,
  VERY_LARGE: 7,
};

// used to force http-error-interceptor to ignore the request
export const IGNORE_GLOBAL_ERROR_HANDLING_HEADER_NAME =
  'Ignore-Global-Error-Handling';
export const IGNORE_GLOBAL_ERROR_HANDLING_HEADER = {
  [IGNORE_GLOBAL_ERROR_HANDLING_HEADER_NAME]: 'true',
};

export const DELAY = {
  SHOW: 500,
  HIDE_QUICKLY: 300,
  HIDE_SLOWLY: 1000,
};

export const SUBSCRIPTION_TYPE = {
  INTERNAL: 0,
  PROFESSIONAL: 1,
  OPERATOR: 2,
  ENTERPRISE: 3,
  TRIAL: 4,
};

// export const SUBSCRIPTION_TYPE_NAME_KEYS = {
//     [SUBSCRIPTION_TYPE.INTERNAL]: nameof<IStrings>(s => s.INTERNAL),
//     [SUBSCRIPTION_TYPE.PROFESSIONAL]: nameof<IStrings>(s => s.SNAPSHOT_25),
//     [SUBSCRIPTION_TYPE.OPERATOR]: nameof<IStrings>(s => s.SNAPSHOT_150),
//     [SUBSCRIPTION_TYPE.ENTERPRISE]: nameof<IStrings>(s => s.SNAPSHOT_UNLIMITED),
//     [SUBSCRIPTION_TYPE.TRIAL]: nameof<IStrings>(s => s.SNAPSHOT_TRIAL)
// };

export const NO_PERMISSION_CLASS_NAME = 'no-permission';

export const DISABLED_CLASS_NAME = 'disabled';

export const DRAWING = {
  CATCHMENT: {
    COLOR: '#dc8f20',
    FILL_OPACITY: 0.2,
    STROKE_WEIGHT_FILLED: 3,
    STROKE_WEIGHT_NOT_FILLED: 4,
  },
  HEATMAP: {
    FILL_OPACITY: 0.4,
    STROKE_WEIGHT: 2,
    STROKE_COLOR: '#ffffff',
    Z_INDEX: 0,
  },
  HOLE: {
    FILL_OPACITY: 0,
    FILL_COLOR: '#888888',
    STROKE_WEIGHT: 2,
    STROKE_COLOR: '#ffffff',
  },
  AUTHORITY: {
    FILL_OPACITY: 0,
    FILL_OPACITY_SELECTED: 0.25,
    FILL_COLOR: '#dc8f20',
    STROKE_WEIGHT: 1,
    STROKE_WEIGHT_HOVERED: 4,
    STROKE_COLOR: '#dc8f20',
    Z_INDEX: 0,
  },
};

export const ACCESS_LEVEL = {
  USER: 1,
  PRIMARY: 2,
  COMPANY: 4,
  ADMIN: 8,
};

// export const ACCESS_LEVELS = {
//     [ACCESS_LEVEL.USER]: {
//         nameKey: nameof<IStrings>(s => s.USER)
//     },
//     [ACCESS_LEVEL.PRIMARY]: {
//         nameKey: nameof<IStrings>(s => s.PRIMARY)
//     },
//     [ACCESS_LEVEL.COMPANY]: {
//         nameKey: nameof<IStrings>(s => s.COMPANY)
//     },
// [ACCESS_LEVEL.ADMIN]: {
//     nameKey: nameof<IStrings>(s => s.ADMIN)
//     }
// };

// export const ACCESS_LEVEL_BY_DEFAULT: IAutocompleteItem = {
//     text: 'User',
//     id: 1,
//     disabled: true
// };

export const TRACKER_MAX_ZOOM = 13;

export const KMI_SECTION = {
  BED_REQUIREMENT_EN_SUITE_BEDS: 1,
  DEMAND_AND_DEMOGRAPHICS: 2,
  HOUSE_PRICES: 3,
  SUPPLY_QUALITY: 4,
  SUPPLY_QUANTITY: 5,
  PLANNED_SUPPLY: 6,
  BED_REQUIREMENT_ALL_ELDERLY_BEDS: 7,
  STAFFING_MARKET_SIZE: 8,
  SOCIAL_GRADE: 9,
  STAFFING_RN_NATIONALITY: 10,
  BED_REQUIREMENT_WETROOM_BEDS: 11,
};

export const KMI_ITEM = {
  EXISTING_ENSUITE_BEDS: 1,
  EXISTING_AND_GRANTED: 2,
  EXISTING_AND_PLANNED: 3,
  TOTAL_POPULATION: 4,
  DEMAND_FOR_CAREHOME_BEDS: 5,
  AGE_PROFILE_85_PLUS: 6,
  CATCHMENT_AREA: 7,
  POSTCODE_SECTOR: 8,
  POSTCODE_DISTRICT: 9,
  ENSUITES_PERCENT: 10,
  WETROOMS_PERCENT: 11,
  DEDICATED_DEMENTIA_BEDS_PERCENT: 12,
  ALL_ELDERLY_BEDS: 13,
  EN_SUITE_BEDS: 14,
  WETROOM_BEDS: 15,
  DEDICATED_DEMENTIA_BEDS: 16,
  GRANTED_PERMISSION: 17,
  PENDING_DECISION: 18,
  TOTAL_PLANNED_BEDS: 19,
  TOTAL_PLANNED_HOMES: 20,
  BOP_ELDERLY_BEDS: 21,
  BOP_ELDERLY_BEDS_INC_GRANTED: 22,
  BOP_ELDERLY_BEDS_INC_ALL: 23,
  STAFFING_RN_MARKET_SIZE: 24,
  STAFFING_CA_MARKET_SIZE: 25,
  SOCIAL_GRADE_AB_PERCENT: 26,
  SOCIAL_GRADE_C1_PERCENT: 27,
  SOCIAL_GRADE_C2_PERCENT: 28,
  SOCIAL_GRADE_DE_PERCENT: 29,
  STAFFING_RN_DOMESTIC_PERCENT: 30,
  STAFFING_RN_EU_PERCENT: 31,
  STAFFING_RN_REST_WORLD_PERCENT: 32,
  BOP_WETROOM_BEDS: 33,
  BOP_WETROOM_BEDS_INC_GRANTED: 34,
  BOP_WETROOM_BEDS_INC_ALL: 35,
};

export const TIME_OUT_BY_DEFAULT = 3000;

export const EXTENDED_TIME_OUT_BY_DEFAULT = 3000;

export const TOASTER_POSITION = {
  TOP_CENTER: 'toast-top-full-width',
};

export const PAGINATOR_PLACEMENT = {
  TOP: 1,
  BOTTOM: 2,
};

export const ASYNC_FILTER_TIMEOUT = 300;

export const CONFIRM_DIALOG_RESULT = {
  YES: 1,
  NO: 2,
  CANCEL: 3,
};

export const SERVER_ERROR_TYPE = {
  LOGIN_FAILED: 1,
  LOGIN_FAILED_BY_LOCK_OUT: 2,
};

// export const SERVER_ERROR_MESSAGE_KEY = {
//     [SERVER_ERROR_TYPE.LOGIN_FAILED]: nameof<IStrings>(s => s.LOGIN_FAILED_MESSAGE),
//     [SERVER_ERROR_TYPE.LOGIN_FAILED_BY_LOCK_OUT]: nameof<IStrings>(s => s.LOGIN_FAILED_BY_LOCK_OUT_MESSAGE)
// };

export const SNAPSHOT_MODE_TYPES = {
  HOMES_MAP: 1,
  HOMES_LIST: 2,
  STAFFING: 3,
  HOUSE_PRICES: 4,
  DEMAND: 5,
  FEE_ANALYZER: 6,
  AUTHORITY_SEARCH: 7,
  AUTHORITY_FEES: 8,
};

export const HEATMAP_RANGES_COUNT = [7, 5, 3];

export const HEATMAP_MODE = {
  HOUSE_PRICES: 1,
  REGISTERED_NURSES: 2,
  CARE_ASSISTANTS: 3,
  DEMAND: 4,
  BASELINE_FEES_NURSING: 5,
  BASELINE_FEES_PERSONAL_CARE: 6,
  PRIVATE_FEES_NURSING: 7,
  PRIVATE_FEES_PERSONAL_CARE: 8,
};

export const STAFFING_MODE_TYPES = {
  REGISTERED_NURSES: 1,
  CARE_ASSISTANTS: 2,
};

export const INPUT_DESCRIPTION = 'input-description';

const HEATMAP_RANGE_NUMBER = 'heatmapRangesNumber';
export const SINGLE_SESSION_STORAGE_KEYS = {
  HEATMAP_TOGGLE: 'heatmapToggle',
  MAP_PARAMS: 'mapParams',
  COMPARISON: 'comparison',
  EXISTING_HOMES_FILTERS: 'existingHomesFilters',
  EXISTING_HOMES_SORTING: 'existingHomesSorting',
  PLANNED_HOMES_FILTERS: 'plannedHomesFilters',
  PLANNED_HOMES_SORTING: 'plannedHomesSorting',
  TRACKER_FILTERS: 'trackerFilters',
  TRACKER_SORTING: 'trackerSorting',
  COMPANIES_SORTING: 'companiesSorting',
  USERS_SORTING: 'usersSorting',
  COMPANY_USERS_SORTING: 'companiesUsersSorting',
  COMPANY_TRACKER_FILTERS: 'companyTrackerFilters',
  COMPANY_TRACKER_SORTING: 'companyTrackerSorting',
  STAFFING_MODE: 'staffingMode',
  HEATMAP_RANGES_NUMBER: 'heatmapRangesNumber',
  HEATMAP_RANGES_NUMBERS: values(HEATMAP_MODE).map(
    (mode) => `${HEATMAP_RANGE_NUMBER}${mode}`
  ),
  SNAPSHOT_MODE: 'snapshotMode',
  AUTHORITY_SEARCH_MODE: 'authoritySearchMode',
  SNAPSHOT_MARKER_GROUPS: 'snapshotMarkerGroups',
  OPERATOR_SEARCH: 'operatorSearch',
  OPERATOR_SEARCH_SELECTION: 'operatorSearchSelection',
  USAGE_SUMMARY_FILTER: 'usageSummaryFilter',
  EXPIRING_COMPANIES_FILTER: 'expiringCompaniesFilter',
  ADMIN_CHART_INTERVAL_FILTER: 'adminChartIntervalFilter',
  ADMIN_CHART_DATA_TYPE_FILTER: 'adminChartDataTypeFilter',
  USERS_SCROLL_STORAGE_KEY: 'usersScroll',
  COMPANIES_SCROLL_STORAGE_KEY: 'companiesScroll',
  COMPANIES_FILTERS: 'companiesFilters',
  USERS_FILTERS: 'usersFilters',
  COMPANIES_PAGINATOR: 'companiesPaginator',
  USERS_PAGINATOR: 'usersPaginator',
  EXISTING_HOMES_GRID: 'existingHomesGrid',
  PLANNED_HOMES_GRID: 'plannedHomesGrid',
  OPERATOR_SEARCH_LEGEND: 'operatorSearchLegend',
  SNAPSHOT_MAP_POSITION: 'snapshotMapPosition',
  AUTHORITY_SEARCH_CODE: 'authoritySearchCode',
  RIGHT_CLICK_HELP_HIDDEN: 'rightClickHelpHidden',
  AUTHORITY_FEE_TYPE: 'authorityFeeType',
  AUTHORITY_MIN_MAX: 'authorityMinMax',
  AUTHORITY_CARE_CATEGORY: 'authorityCareCategory',
};

const ENDLESS_STORAGE_KEYS = {
  BENCHMARKS_EXPANDED_STATE: 'benchmarksExpandedState',
  HISTORY_COMPANY_MODE: 'historyCompanyMode',
  HEATMAP_COMPETITION_VISIBLE: 'heatmapCompetitionVisible',
  AUTHORITY_LEGEND: 'authorityLegend',
};

export const STORAGE_KEYS = {
  ...SINGLE_SESSION_STORAGE_KEYS,
  ...ENDLESS_STORAGE_KEYS,
};

export const BULK_OPERATION = {
  PRIORITY: 1,
  PROJECT: 2,
  PDF: 3,
  TRACK: 4,
};

export const USAGE_SUMMARY_PERIOD = {
  THIS: 1,
  LAST: 2,
  PAST: 3,
};

export const USAGE_METRIC = {
  SEARCHES: 1,
  TRACKED_MARKETS: 2,
  PDF_DOWNLOADS: 3,
};

export const TIME_INTERVAL = {
  QUARTER: 1,
  MONTH: 2,
  WEEK: 3,
  DAY: 4,
};

export const USER_TOUR_EVENTS = {
  TRACKER_CHANGES_SAVED: 'trackerChangesSaved',
};

export const BOOK_DEMO_DIALOGS = {
  FEE_ANALYZER: 1,
  AUTHORITY_SEARCH: 2,
};

export const HEATMAP = 'heatmap';

export const FEE_TYPE = {
  BASELINE: 1,
  PRIVATE: 2,
};

export const MIN_MAX = {
  MIN: 1,
  MAX: 2,
};
