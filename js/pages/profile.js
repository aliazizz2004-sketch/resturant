// ============================================
//  ERBILEATS — Profile Page (Kurdish)
// ============================================

export function renderProfile() {
  return `
  <main class="page-container" style="padding-top: var(--space-20); padding-bottom: var(--space-20);">
    <div class="container container-sm">
      <div style="background: var(--color-surface); padding: var(--space-8); border-radius: var(--radius-xl); box-shadow: var(--shadow-md);">
        <div class="flex items-center gap-4 mb-6" style="border-bottom: 1px solid var(--color-border); padding-bottom: var(--space-4);">
          <div style="width: 80px; height: 80px; border-radius: var(--radius-full); background: var(--color-primary); color: white; display: flex; align-items: center; justify-content: center; font-size: 2rem; font-family: var(--font-heading);">
            ئا
          </div>
          <div style="flex: 1; display: flex; flex-direction: column; gap: var(--space-2);">
            <div style="display: flex; gap: var(--space-2); align-items: center;">
              <input type="text" id="profile-name" value="ئەحمەد سەعید" style="padding: var(--space-2); border: 1px solid var(--color-border); border-radius: var(--radius-md); font-size: 1.25rem; font-weight: bold; width: 100%; max-width: 300px; background: var(--color-bg);" />
            </div>
            <div style="display: flex; gap: var(--space-2); align-items: center;">
              <input type="email" id="profile-email" value="ahmed.saeed@example.com" style="padding: var(--space-2); border: 1px solid var(--color-border); border-radius: var(--radius-md); font-size: 1rem; color: var(--color-text-muted); width: 100%; max-width: 300px; background: var(--color-bg);" />
            </div>
          </div>
          <div>
            <button class="btn btn-primary btn-sm" id="save-profile-btn"><i data-lucide="save"></i> پاشەکەوتکردن</button>
          </div>
        </div>
        
        <h3 class="mb-4">شوێنە دڵخوازەکانم</h3>
        <div class="grid grid-2 gap-4 mb-6">
          <div style="padding: var(--space-3); border: 1px solid var(--color-border); border-radius: var(--radius-md);">
            <div class="font-semibold">خانەی کەبابی ئەبو شەهاب</div>
            <p class="text-sm text-muted">تیکەی کوردی</p>
          </div>
          <div style="padding: var(--space-3); border: 1px solid var(--color-border); border-radius: var(--radius-md);">
            <div class="font-semibold">قاوەی ئەنکاوا ڕۆسترز</div>
            <p class="text-sm text-muted">قاوەی تایبەت</p>
          </div>
        </div>

        <h3 class="mb-4">پێداچوونەوەکانم</h3>
        <div style="padding: var(--space-4); background: var(--color-bg); border-radius: var(--radius-md);">
          <div class="flex justify-between items-center mb-2">
            <span class="font-semibold">چێخانەی ماچکۆ</span>
            <span style="color: var(--color-star);">★★★★★</span>
          </div>
          <p class="text-sm">"باشترین چای کوردی لە قەڵا. شوێنێکی پڕ لە مێژوو و کەلتوور."</p>
        </div>
      </div>
    </div>
  </main>
  `;
}

export function initProfile() {
  // Logic for profile page if any
}
