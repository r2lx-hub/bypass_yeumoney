(function () {
  'use strict';
  const h2 = document.querySelector("h2");
  const el3 = document.querySelector('a[href="#videohd"]');
  if (h2) h2.innerHTML = "𝗕𝗬𝗣𝗔𝗦𝗦 𝗬𝗘𝗨𝗠𝗢𝗡𝗘𝗬";
  if (el3) el3.innerHTML = `<a href="https://t.me/" target="_blank">©Copyright 2025 by R2lx</a>`;
  function toigiandemYeumoney() {
    const el1 = document.querySelector('.box-video-title');
    if (el1) el1.textContent = "🚀 Bураѕѕ đã khởi động đợi!";
    window.scrollTo(0, document.body.scrollHeight);

    const selectors = [
      "iframe",
      'img[src*="img-get-code.webp"]',
      'img[src*="img-tim-kiem-03.webp"]',
      'img[src*="icn-search.svg"]',
      'img[src*="img-tim-kiem-04.webp"]',
      'img[src*="icn-copy.svg"]',
      'img[src*="footer-bg-sp.webp"]',
      ".box-google-text",
      ".box-google-note",
      "header",
      "footer", ".footer", ".bg-footer", ".container-footer",
      '#copyCode',
      'img[src*="traffic-user.net/mem/hinh-nv/User-traffic.com"]'
    ];

    selectors.forEach(sel => {
      const nodes = document.querySelectorAll(sel);
      nodes.forEach(node => node.style.display = "none");
    });

    const pTags = document.querySelectorAll('p.fadeInUp.visible');
    pTags.forEach((el, i) => {
      if (i > 0 && i < pTags.length - 1) el.style.display = "none";
    });

    ['#TK1', '#TK3', 'form#gt-form', '#btn-xac-nhan', '#btn-baoloi'].forEach(id => {
      const el = document.querySelector(id);
      if (el) el.style.display = "none";
    });

    Object.assign(document.body.style, {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      minHeight: "100vh"
    });
  }
  function isVisibleOnScreen(el) {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return (
      rect.width > 0 &&
      rect.height > 0 &&
      rect.bottom > 0 &&
      rect.right > 0 &&
      rect.top < window.innerHeight &&
      rect.left < window.innerWidth
    );
  }
  const missionList = {
    "36": {
      urlChinh: "https://vn88ie.com/",
      urlBaiViet: "https://vn88ie.com/cach-choi-power-6-55/"
    },
    "66": {
      urlChinh: "https://w88xlm.com/",
      urlBaiViet: "https://w88xlm.com/cach-choi-bai-solitaire/"
    },
    "67": {
      urlChinh: "https://fun88op.com/",
      urlBaiViet: "https://fun88op.com/thuat-ngu-ca-do-bong-da-truc-tuyen/"
    },
    "23": {
      urlChinh: "https://v9betlg.com/",
      urlBaiViet: "https://v9betlg.com/cach-choi-ca-cuoc-dua-mo-to-gia-lap/"
    },
    "30": {
      urlChinh: "https://188.166.185.213/",
      urlBaiViet: "https://188.166.185.213/bai-rac-trong-poker/"
    },
    "37": {
      urlChinh: "https://fb88mg.com/",
      urlBaiViet: "https://fb88mg.com/cach-choi-ca-cuoc-dien-kinh/"
    },
    "41": {
      urlChinh: "https://bk8xo.com/",
      urlBaiViet: "https://bk8xo.com/cach-choi-domino-qq/"
    },
    "44": {
      urlChinh: "https://bet88ec.com/",
      urlBaiViet: "https://bet88ec.com/kinh-nghiem-lo-de/"
    },
    "42": {
      urlChinh: "https://88betag.com/",
      urlBaiViet: "https://88betag.com/keo-chau-a-la-gi/"
    }
    // ➕ Thêm nhiệm vụ khác tại đây
  };
  function Random(charset) {
    let result = '';
    for (let i = 0; i < 10; i++) {
      const index = Math.floor(Math.random() * charset.length);
      result += charset[index];
    }
    return result;
  }
  const clk = Random('0123456789');
  function getIdFromImage() {
    const img = document.querySelector("img[src*='traffic-user.net/mem/hinh-nv']");
    if (!img) return null;
    const match = img.src.match(/User-traffic\.com-(\d+)-/);
    return match ? match[1] : null;
  }

  function guiRequestLan1(cfg) {
    const token = Date.now() + "," + cfg.urlChinh + ",https://www.google.com/,IOS900,hidden,nullNO";
    const body = `url_order=${encodeURIComponent(cfg.urlChinh)}&ref=${encodeURIComponent("https://www.google.com/")}&TOP_NUT=34&LEFT_NUT=42&NO_NUT=NO`;
    return fetch(`https://traffic-user.net/GET_VUATRAFFIC.php?token=${token}&clk=${clk}`, {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: body
    });
  }

  function guiRequestLan2(cfg) {
    const token = Date.now() + "," + cfg.urlBaiViet + "," + cfg.urlChinh + ",IOS900,hidden,nullNO";
    const body = `url_order=${encodeURIComponent(cfg.urlBaiViet)}&ref=${encodeURIComponent(cfg.urlChinh)}&TOP_NUT=38&LEFT_NUT=3&NO_NUT=NO`;
    return fetch(`https://traffic-user.net/GET_VUATRAFFIC.php?token=${token}&clk=${clk}`, {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: body
    });
  }

  function layMa(cfg) {
    const url = `https://traffic-user.net/GET_MA.php?codexn=${Random('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789')}&url=${encodeURIComponent(cfg.urlBaiViet)}&loai_traffic=${encodeURIComponent(cfg.urlChinh)}&clk=${clk}`;
    return fetch(url, { method: "POST" })
      .then(res => res.text())
      .then(html => {
        const match = html.match(/<span[^>]*id=["']layma_me_vuatraffic["'][^>]*>\s*([\d]{4,})\s*<\/span>/i);
        return match ? match[1].trim() : null;
      });
  }

  function batDauDemNguoc(cfg) {
    const input = document.querySelector('form#gt-form input[name="code"]');
    const btn = document.querySelector("#btn-xac-nhan");
  
    let ma = null;
    const startTime = Date.now();
    const waitTime = 75 * 1000; // 75 giây
  
    const timer = setInterval(() => {
      const el1 = document.querySelector('.box-video-title');
      const elapsed = Date.now() - startTime;
      const remaining = Math.ceil((waitTime - elapsed) / 1000);
  
      if (el1 && remaining > 0) {
        el1.textContent = `⏳ Vui lòng đợi ${remaining} giây...`;
      }
  
      if (remaining <= 0) {
        clearInterval(timer);
        if (el1) el1.textContent = "Đang chuyển trang tiếp...";
  
        // ⚠️ Không giới hạn thời gian chờ mã nữa
        const waitForMa = setInterval(async () => {
          if (!ma) {
            try {
              ma = await layMa(cfg);
              if (ma && input) input.value = ma;
            } catch (e) {
              console.error("❌ Lỗi khi gọi lại lấy Mã:", e);
            }
          }
  
          if (ma && input && input.value) {
            clearInterval(waitForMa);
  
            if (document.hidden) {
              const waitUntilVisible = setInterval(() => {
                if (!document.hidden) {
                  clearInterval(waitUntilVisible);
                  if (btn) btn.click();
                }
              }, 500);
            } else {
              if (btn) btn.click();
            }
          }
          // ❌ Không còn timeout hay reload ở đây nữa
        }, 300);
      }
  
      // 🧠 Gọi mã sớm khi còn ≤ 7 giây mà chưa gọi
      if (remaining <= 7 && !ma) {
        layMa(cfg).then(result => {
          ma = result;
          if (ma && input) input.value = ma;
        }).catch(e => console.error("❌ Lỗi khi lấy mã ban đầu:", e));
      }
    }, 1000);
  }

  async function startBypass() {
    const id = getIdFromImage();
    if (typeof id !== "string" || !(id in missionList)) {
      const el1 = document.querySelector('.box-video-title');
      if (el1) el1.textContent = "Ko thích làm nhiệm vụ này đâu🙃";
      setTimeout(() => {
        location.reload();
      }, 600);
      return;
    }
    const cfg = missionList[id];
    try {
      await guiRequestLan1(cfg);
      await new Promise(r => setTimeout(r, 1000));
      await guiRequestLan2(cfg);
      await new Promise(r => setTimeout(r, 1000));
      batDauDemNguoc(cfg);
    } catch (e) {
      console.error("❌ Error Lỗi trong quá trình xử lý:", e);
    }
  }

  window.addEventListener("load", () => {
    const interval = setInterval(() => {
      const img = document.querySelector("img[src*='traffic-user.net/mem/hinh-nv']");
      const imgred = document.querySelector("img[src*='img-get-code-dr.webp']");
      if (isVisibleOnScreen(img) || isVisibleOnScreen(imgred)) {
        toigiandemYeumoney();
        if (img) {
          clearInterval(interval);
          startBypass();
        } else {
          const el1 = document.querySelector('.box-video-title');
          if (el1) el1.textContent = "Ko thích làm nhiệm vụ này đâu🙃";
          setTimeout(() => {
            location.reload();
          }, 600);
        }
      }
    }, 500);
  });
})();