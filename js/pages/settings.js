// ============================================
//  ERBILEATS — Settings Page (Kurdish)
// ============================================

export function renderSettings() {
  return `
  <main class="page-container" style="padding-top: var(--space-20); padding-bottom: var(--space-20);">
    <div class="container container-sm">
      <div style="background: var(--color-surface); padding: var(--space-8); border-radius: var(--radius-xl); box-shadow: var(--shadow-md);">
        <h2 class="mb-6" style="border-bottom: 1px solid var(--color-border); padding-bottom: var(--space-4);">ڕێکخستنەکان</h2>
        
        <div class="mb-6">
          <h3 class="mb-3">هەژمار</h3>
          <div class="flex flex-col gap-3">
            <div class="flex justify-between items-center bg-bg" style="padding: var(--space-3); border: 1px solid var(--color-border); border-radius: var(--radius-md);">
              <span>نوێکردنەوەی زانیاریەکان</span>
              <button class="btn btn-sm" style="background: var(--color-border); border-radius: var(--radius-sm);">گۆڕین</button>
            </div>
            <div class="flex justify-between items-center" style="padding: var(--space-3); border: 1px solid var(--color-border); border-radius: var(--radius-md);">
              <span>گۆڕینی تێپەڕەوشە (پاسۆرد)</span>
              <button class="btn btn-sm" style="background: var(--color-border); border-radius: var(--radius-sm);">گۆڕین</button>
            </div>
          </div>
        </div>

        <div class="mb-6">
          <h3 class="mb-3">ڕووکار و زمان</h3>
          <div class="flex flex-col gap-3">
            <div class="flex justify-between items-center" style="padding: var(--space-3); border: 1px solid var(--color-border); border-radius: var(--radius-md);">
              <span>زمان</span>
              <select style="padding: 0.2rem; border-radius: 4px; border: 1px solid var(--color-border);">
                <option value="ku" selected>کوردی (سۆرانی)</option>
                <option value="en" disabled>English (بەمزووانە)</option>
              </select>
            </div>
            <div class="flex justify-between items-center" style="padding: var(--space-3); border: 1px solid var(--color-border); border-radius: var(--radius-md);">
              <span>شێوازی تاقیکردنەوە (دۆخی تاریک)</span>
              <input type="checkbox" id="dark-mode-toggle" style="width: 20px; height: 20px;">
            </div>
          </div>
        </div>

        <div class="mt-8 pt-4" style="border-top: 1px solid var(--color-border);">
          <button class="btn" style="background: var(--color-danger); color: white; width: 100%;">چوونەدەرەوە</button>
        </div>
      </div>
    </div>
  </main>
  `;
}

export function initSettings() {
  const toggle = document.getElementById('dark-mode-toggle');
  if(toggle) {
    toggle.addEventListener('change', (e) => {
      if(e.target.checked) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    });
  }
}
