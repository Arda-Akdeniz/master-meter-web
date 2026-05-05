document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');
if (form && statusEl) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusEl.textContent = 'Gönderiliyor...';

    try {
      const data = new FormData(form);
      const res = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        statusEl.textContent = 'Mesajınız başarıyla gönderildi. Teşekkürler!';
        form.reset();
      } else {
        statusEl.textContent = 'Gönderim başarısız. Lütfen tekrar deneyin.';
      }
    } catch {
      statusEl.textContent = 'Bağlantı hatası. Lütfen tekrar deneyin.';
    }
  });
}
