// @ts-ignore
import { CampaignBudget } from 'google-ads-node/build/lib/resources'

import Service, { Mutation } from './service'
import { ServiceListOptions, ServiceCreateOptions } from '../types'

/**
 * @constants
 */
const RESOURCE_URL_NAME = 'campaignBudgets'
const MUTATE_METHOD = 'mutateCampaignBudgets'
const MUTATE_REQUEST = 'MutateCampaignBudgetsRequest'
const OPERATION_REQUEST = 'CampaignBudgetOperation'
const GET_METHOD = 'getCampaignBudget'
const GET_REQUEST = 'GetCampaignBudgetRequest'
const RESOURCE = 'CampaignBudget'

export default class CampaignBudgetService extends Service {
    public async get(id: number | string): Promise<CampaignBudget> {
        return this.serviceGet({
            request: GET_REQUEST,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            method: GET_METHOD,
            entity_id: id,
        }) as CampaignBudget
    }

    public async list(options?: ServiceListOptions): Promise<Array<{ campaign_budget: CampaignBudget }>> {
        return this.getListResults('campaign_budget', options)
    }

    public async create(
        campaign_budget: CampaignBudget | Array<CampaignBudget>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceCreate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, campaign_budget],
            ...options,
        })
    }

    public async update(
        campaign_budget: CampaignBudget | Array<CampaignBudget>,
        options?: ServiceCreateOptions
    ): Promise<Mutation> {
        return this.serviceUpdate({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            entity: [RESOURCE, campaign_budget],
            ...options,
        })
    }

    public async delete(id: number | string, options?: ServiceCreateOptions) {
        return this.serviceDelete({
            request: MUTATE_REQUEST,
            operation: OPERATION_REQUEST,
            mutate: MUTATE_METHOD,
            resource: `${RESOURCE_URL_NAME}/${id}`,
            entity_id: id,
            ...options,
        })
    }
}
