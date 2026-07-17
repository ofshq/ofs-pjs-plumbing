(function () {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
})();

(function () {
  const brand = document.querySelector('.brand');
  if (!brand) return;

  brand.classList.add('brand-lockup');
  brand.setAttribute('aria-label', "PJ's Plumbing Service LLC home");

  brand.innerHTML = `
    <span class="brand-mark" aria-hidden="true">
      <img src="/assets/images/pjs-plumbing-logo-transparent.png" alt="">
    </span>

    <span class="brand-wordmark" aria-hidden="true">
      <strong>PJ'S PLUMBING</strong>
      <span>SERVICE LLC</span>
      <small>518-596-2777</small>
    </span>
  `;

  const style = document.createElement('style');

  style.textContent = `
    .brand.brand-lockup {
      display: inline-flex;
      align-items: center;
      gap: 13px;
      width: auto;
      flex: 0 0 auto;
      padding: 0;
      background: transparent;
      border-radius: 0;
      box-shadow: none;
      line-height: 1;
      text-decoration: none;
    }

    .brand-lockup .brand-mark {
      display: block;
      width: 118px;
      height: 86px;
      flex: 0 0 118px;
      overflow: hidden;
    }

    .brand-lockup .brand-mark img {
      display: block;
      width: 118px;
      height: auto;
      max-width: none;
      object-fit: initial;
      transform: translateY(-1px);
      filter: drop-shadow(0 2px 2px rgba(0, 0, 0, .3));
    }

    .brand-wordmark {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: white;
      white-space: nowrap;
      font-family: Georgia, "Times New Roman", serif;
      text-shadow: 0 2px 3px rgba(0, 0, 0, .3);
    }

    .brand-wordmark strong {
      font-size: 1.42rem;
      line-height: .92;
      letter-spacing: .025em;
    }

    .brand-wordmark > span {
      margin-top: 5px;
      font-size: 1.08rem;
      line-height: .92;
      letter-spacing: .08em;
    }

    .brand-wordmark small {
      margin-top: 7px;
      color: #ffd39a;
      font-family: Arial, Helvetica, sans-serif;
      font-size: .76rem;
      font-weight: 800;
      letter-spacing: .12em;
    }

    .navigation {
      min-height: 108px;
    }

    @media (max-width: 760px) {
      .navigation {
        min-height: 94px;
      }

      .brand.brand-lockup {
        gap: 8px;
      }

      .brand-lockup .brand-mark {
        width: 78px;
        height: 57px;
        flex-basis: 78px;
      }

      .brand-lockup .brand-mark img {
        width: 78px;
      }

      .brand-wordmark strong {
        font-size: 1rem;
      }

      .brand-wordmark > span {
        margin-top: 3px;
        font-size: .79rem;
      }

      .brand-wordmark small {
        margin-top: 4px;
        font-size: .58rem;
        letter-spacing: .08em;
      }

      .menu-toggle-label {
        display: none;
      }

      .primary-nav {
        top: 94px;
      }
    }

    @media (max-width: 390px) {
      .brand-lockup .brand-mark {
        width: 68px;
        height: 50px;
        flex-basis: 68px;
      }

      .brand-lockup .brand-mark img {
        width: 68px;
      }

      .brand-wordmark strong {
        font-size: .88rem;
      }

      .brand-wordmark > span {
        font-size: .7rem;
      }

      .brand-wordmark small {
        font-size: .52rem;
      }
    }
  `;

  document.head.appendChild(style);
})();
