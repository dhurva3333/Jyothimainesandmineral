import { test, expect } from '@playwright/test'
const routes=['/','/vermiculite','/products','/products/vermiculite','/products/horti-fine','/applications','/applications/horticulture','/applications/insulation','/research','/research/properties','/technical','/technical/testing','/resources','/resources/downloads','/about','/contact']
for(const route of routes){test(`loads ${route}`,async({page})=>{const response=await page.goto(route);expect(response?.ok()).toBeTruthy();await expect(page.locator('body')).toBeVisible()})}
test('homepage exposes primary CTAs',async({page})=>{await page.goto('/');await expect(page.getByRole('link',{name:/Explore Vermiculite/i})).toBeVisible();await expect(page.getByRole('link',{name:/Start an enquiry/i})).toBeVisible()})
