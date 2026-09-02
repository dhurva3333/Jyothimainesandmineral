import { test, expect } from "@playwright/test";

test("homepage renders hero and nav", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Vermiculite");
  await expect(page.getByRole("navigation", { name: "Primary" })).toBeVisible();
});

test("navigating to products", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Discover Vermiculite →" }).click();
  await expect(page).toHaveURL(/\/products\/vermiculite/);
});

test("applications page lists application cards", async ({ page }) => {
  await page.goto("/applications");
  await expect(page.getByRole("heading", { name: "Horticulture & Nursery" })).toBeVisible();
});

test("contact form validates required fields", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: "Send enquiry" }).click();
  await expect(page.getByText("Enter your name")).toBeVisible();
});

test("admin route redirects or explains unavailable CMS without Supabase", async ({ page }) => {
  await page.goto("/admin");
  await expect(page.getByText(/Supabase is not configured|Admin Sign In/)).toBeVisible();
});

test("mobile viewport shows hamburger menu", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("button", { name: /menu/i })).toBeVisible();
});
