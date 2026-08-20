// ===== EDIT YOUR COMMON DETAILS ONLY HERE =====
const SITE = {
  name: "Faizan Khalid",
  email: "Faizankhalid1666@gmail.com",
  phone: "+92 304 5279635",
  whatsapp: "923045279635",
  location: "Rawalpindi, Pakistan"
};

document.addEventListener("DOMContentLoaded", () => {
  const header=document.getElementById("site-header");
  const footer=document.getElementById("site-footer");
  if(header) header.innerHTML=`
    <header class="site-common-header"><nav class="common-nav">
      <a class="common-brand" href="index.html">FAIZAN <span>KHALID</span></a>
      <div class="common-links">
        <a href="index.html">Home</a>
        <a href="graphic-design.html">Graphic Design</a>
        <a href="data-analytics.html">Data Analytics</a>
        <a href="autocad.html">AutoCAD</a>
        <a href="virtual-assistant.html">Virtual Assistant</a>
      </div>
    </nav></header>`;
  if(footer) footer.innerHTML=`
    <footer class="site-common-footer">
      <strong>${SITE.name}</strong>
      <div class="common-contact">
        <a href="https://wa.me/${SITE.whatsapp}" target="_blank" rel="noopener" title="Chat on WhatsApp">💬 WhatsApp: ${SITE.phone}</a>
        <a href="mailto:${SITE.email}" title="Send an email">✉️ ${SITE.email}</a>
        <span>${SITE.location}</span>
      </div>
      <small>© ${new Date().getFullYear()} ${SITE.name} • Professional Portfolio</small>
    </footer>`;
});
