import GoogleAdsApi from '..'
import config from '../config'
jest.setTimeout(30000)

describe('Customer', async () => {
    const lib_instance = new GoogleAdsApi({
        client_id: config.client_id,
        client_secret: config.client_secret,
        developer_token: config.developer_token,
    })

    const customer = lib_instance.Customer({
        customer_account_id: config.cid,
        refresh_token: config.refresh_token,
    })

    it('Retrieves Customer Data', async () => {
        expect.assertions(1)
        const customer_data = await customer.retrieve()

        expect(customer_data).toEqual({
            resource_name: expect.any(String),
            id: expect.any(String),
            descriptive_name: expect.any(String),
            currency_code: expect.any(String),
            time_zone: expect.any(String),
            auto_tagging_enabled: expect.any(Boolean),
            has_partners_badge: expect.any(Boolean),
        })
    })

    it('Queries data using search method', async () => {
        expect.assertions(1)
        const data = await customer.query(`
            SELECT 
                campaign.id, 
                campaign.name, 
                ad_group.id, 
                ad_group.name 
            FROM ad_group
        `)
        // console.log(data)
        expect(data).toBeInstanceOf(Array)
    })
})
