export const ADWORDS_API_BASE_URL = 'https://googleads.googleapis.com/v0/customers/'
export const ADWORDS_AUTH_URL = 'https://accounts.google.com/o/oauth2/token'

export enum ENDPOINTS {
    search = 'googleAds:search',
    campaigns = 'campaigns',
    campaign_budgets = 'campaignBudgets',
    customers = 'customers',
    adgroups = 'adGroups',
    ads = 'adGroupAds',
    keywords = 'adGroupCriteria',
    shared_sets = 'sharedSets',
}

export enum RESOURCE_NAMES {
    campaign = 'campaign',
    campaign_budget = 'campaign_budget',
    adgroup = 'ad_group',
    ad = 'ad_group_ad',
    keyword = 'ad_group_criterion',
    shared_set = 'shared_set',
}