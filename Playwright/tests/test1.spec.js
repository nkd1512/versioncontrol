// Playwright/tests/test1.spec.js

const { test, expect } = require('@playwright/test');

test.describe('Quasar App Basic Functionality Test', () => {

  test('should load the home page and verify main elements', async ({ page }) => {

    // 1. ไปที่หน้าหลัก (Playwright จะใช้ baseURL จาก playwright.config.ts)
    await page.goto('/');

    // 2. ตรวจสอบ Title ของหน้าเว็บ
    // 💡 เปลี่ยน 'Your App Name' ให้เป็น Title ที่คุณตั้งไว้ใน Quasar App
    await expect(page).toHaveTitle(/Your App Name/);

    // 3. ตรวจสอบว่ามี Element สำคัญปรากฏอยู่
    // 💡 เปลี่ยน '.q-page' หรือ 'h1' ให้เป็น Selector ที่ถูกต้องของ Element แรกใน Quasar App ของคุณ
    await expect(page.locator('.q-page')).toBeVisible();

    // 4. (ตัวอย่างการทดสอบคลิกปุ่ม)
    // ถ้าคุณมีปุ่มที่ชื่อ 'Start'
    // await page.getByRole('button', { name: 'Start' }).click();

  });

  // เพิ่ม test case อื่น ๆ สำหรับการล็อกอิน, การกรอกฟอร์ม, ฯลฯ
});
