// ============================================
//  ERBILEATS — Footer Component
// ============================================
export function renderFooter() {
  return `
  <footer class="footer" role="contentinfo">
    <div class="footer__pattern" aria-hidden="true"></div>
    <div class="container">
      <div class="footer__main" style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 2rem;">
        <div style="min-width: 250px; max-width: 300px;">
          <div class="footer__brand-name">Erbil<span>Eats</span></div>
          <p class="footer__tagline">
            باشترین ڕێبەرت بۆ دۆزینەوەی باشترین چێشتخانەکان، کافێکان، و شوێنە شاراوەکانی پایتەختی کوردستان.
          </p>
          <div class="footer__socials">
            <a href="#" class="footer__social" aria-label="Instagram"><i data-lucide="instagram"></i></a>
            <a href="#" class="footer__social" aria-label="Facebook"><i data-lucide="facebook"></i></a>
            <a href="#" class="footer__social" aria-label="TikTok"><i data-lucide="music"></i></a>
            <a href="#" class="footer__social" aria-label="X (Twitter)"><i data-lucide="twitter"></i></a>
          </div>
        </div>

        <div style="min-width: 150px;">
          <div class="footer__heading">دۆزینەوە</div>
          <ul class="footer__links">
            <li><a href="#browse" class="footer__link">هەموو چێشتخانەکان</a></li>
            <li><a href="#browse?cat=traditional" class="footer__link">خواردنی کوردی</a></li>
            <li><a href="#browse?cat=finedining" class="footer__link">خواردنی تایبەت (فاین داینینگ)</a></li>
            <li><a href="#browse?cat=coffee" class="footer__link">قاوەی تایبەت</a></li>
            <li><a href="#browse?cat=shisha" class="footer__link">لاونجەکانی نێرگەلە</a></li>
          </ul>
        </div>

        <div style="min-width: 150px;">
          <div class="footer__heading">گەڕەکەکان</div>
          <ul class="footer__links">
            <li><a href="#browse?hood=citadel" class="footer__link">قەڵا</a></li>
            <li><a href="#browse?hood=ankawa" class="footer__link">عەنکاوە</a></li>
            <li><a href="#browse?hood=empire-world" class="footer__link">ئیمپایەر وۆڕڵد</a></li>
            <li><a href="#browse?hood=dream-city" class="footer__link">دریم سیتی</a></li>
            <li><a href="#browse?hood=bakhtiari" class="footer__link">بەختیاری</a></li>
            <li><a href="#browse?hood=iskan" class="footer__link">ئیسکان</a></li>
          </ul>
        </div>

        <div style="min-width: 150px;">
          <div class="footer__heading">دەربارە</div>
          <ul class="footer__links">
            <li><a href="#" class="footer__link">دەربارەی ErbilEats</a></li>
            <li><a href="#" class="footer__link">زیادکردنی چێشتخانەکەت</a></li>
            <li><a href="#" class="footer__link">نووسینی پێداچوونەوە</a></li>
            <li><a href="#" class="footer__link">سیاسەتی تایبەتمەندی</a></li>
            <li><a href="#" class="footer__link">پەیوەندیمان پێوە بکە</a></li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom">
        <div>© 2024 ErbilEats. هەموو مافێک پارێزراوە.</div>
        <div class="footer__made-in" style="display:flex;align-items:center;justify-content:center;gap:4px;">
          <span>دروستکراوە بە</span> <i data-lucide="heart" fill="var(--red-500)" style="color:var(--red-500);width:16px;"></i> <span>لە هەولێر، کوردستان</span>
        </div>
        <div style="display:flex;align-items:center;justify-content:center;gap:4px;"><i data-lucide="map-pin" style="width:16px;"></i> هەولێر، هەرێمی کوردستان، عێراق</div>
      </div>
    </div>
  </footer>`;
}
