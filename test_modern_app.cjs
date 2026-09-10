const path = require('path');
const fs = require('fs');

async function testApp() {
  const playwrightPath = 'C:\\Users\\home\\.gemini\\antigravity-ide\\scratch\\universal-form-agent\\node_modules\\playwright';
  const { chromium } = require(playwrightPath);

  const outDir = 'C:\\Users\\home\\.gemini\\antigravity-ide\\brain\\7148efd7-4ae8-4f4a-8e6e-a69b59002262';
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

  console.log('Launching browser with Chrome executable...');
  const browser = await chromium.launch({
    executablePath: fs.existsSync(chromePath) ? chromePath : undefined,
    headless: true
  });

  // 1. Desktop Test (1440x900)
  console.log('Testing Desktop Viewport (1440x900)...');
  const contextDesktop = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
  });
  const pageDesktop = await contextDesktop.newPage();

  // Listen for console errors
  const consoleErrors = [];
  pageDesktop.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  await pageDesktop.goto('http://127.0.0.1:5180/', { waitUntil: 'networkidle' });
  await pageDesktop.waitForTimeout(1000);

  // Take Desktop Viewport screenshot
  await pageDesktop.screenshot({ path: path.join(outDir, 'modern_desktop_hero.png') });
  console.log('Saved modern_desktop_hero.png');

  // Test Duration click on first treatment card
  console.log('Testing duration toggle on treatment card...');
  const durationPill90 = pageDesktop.locator('.duration-pill:has-text("90 Min")').first();
  await durationPill90.click();
  await pageDesktop.waitForTimeout(500);

  // Verify price changed
  const priceNumber = await pageDesktop.locator('.treatment-card .price-amount .number').first().textContent();
  console.log(`Updated price for 90 min: THB ${priceNumber}`);

  // Scroll to Treatment section and capture
  await pageDesktop.locator('#treatments').scrollIntoViewIfNeeded();
  await pageDesktop.waitForTimeout(500);
  await pageDesktop.screenshot({ path: path.join(outDir, 'modern_desktop_treatments.png') });
  console.log('Saved modern_desktop_treatments.png');

  // Scroll to Branches section and capture
  await pageDesktop.locator('#branches').scrollIntoViewIfNeeded();
  await pageDesktop.waitForTimeout(500);
  await pageDesktop.screenshot({ path: path.join(outDir, 'modern_desktop_branches.png') });
  console.log('Saved modern_desktop_branches.png');

  // Open booking modal
  console.log('Testing Booking Modal...');
  const bookBtn = pageDesktop.locator('.book-treatment-btn').first();
  await bookBtn.click();
  await pageDesktop.waitForTimeout(600);

  // Select Couple (2 guests)
  const coupleBtn = pageDesktop.locator('.guest-opt-btn:has-text("Couple (2)")');
  if (await coupleBtn.isVisible()) {
    await coupleBtn.click();
    await pageDesktop.waitForTimeout(300);
  }

  await pageDesktop.screenshot({ path: path.join(outDir, 'modern_booking_modal.png') });
  console.log('Saved modern_booking_modal.png');

  // Close modal
  await pageDesktop.locator('.modal-close-btn').click();
  await pageDesktop.waitForTimeout(400);

  // Full page desktop screenshot
  await pageDesktop.screenshot({ path: path.join(outDir, 'modern_desktop_full.png'), fullPage: true });
  console.log('Saved modern_desktop_full.png');

  await contextDesktop.close();

  // 2. Mobile Test (iPhone 14 / 390x844)
  console.log('Testing Mobile Viewport (390x844)...');
  const contextMobile = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1'
  });
  const pageMobile = await contextMobile.newPage();
  await pageMobile.goto('http://127.0.0.1:5180/', { waitUntil: 'networkidle' });
  await pageMobile.waitForTimeout(1000);

  // Verify no horizontal overflow
  const overflowCheck = await pageMobile.evaluate(() => {
    return {
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      hasOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth
    };
  });
  console.log('Mobile horizontal overflow check:', overflowCheck);

  // Capture Mobile Hero with sticky dock
  await pageMobile.screenshot({ path: path.join(outDir, 'modern_mobile_viewport.png') });
  console.log('Saved modern_mobile_viewport.png');

  // Test Mobile Navigation Drawer
  console.log('Testing Mobile Drawer...');
  const hamburger = pageMobile.locator('.mobile-hamburger-btn');
  await hamburger.click();
  await pageMobile.waitForTimeout(500);
  await pageMobile.screenshot({ path: path.join(outDir, 'modern_mobile_drawer.png') });
  console.log('Saved modern_mobile_drawer.png');

  // Close drawer
  await hamburger.click();
  await pageMobile.waitForTimeout(400);

  // Full page mobile screenshot
  await pageMobile.screenshot({ path: path.join(outDir, 'modern_mobile_full.png'), fullPage: true });
  console.log('Saved modern_mobile_full.png');

  await contextMobile.close();
  await browser.close();

  console.log('=== Playwright Verification Finished Successfully! ===');
  console.log('Console Errors:', consoleErrors);
}

testApp().catch(err => {
  console.error('Playwright Test Failed:', err);
  process.exit(1);
});
