// ─────────────────────────────────────────────────────────────────────────────
// lang.js  –  Autoescola Paral·lel  –  CA / ES switcher
// ─────────────────────────────────────────────────────────────────────────────

const TRANSLATIONS = {
  ca: {
    // ── Nav ──────────────────────────────────────────────────────────────────
    "nav.permisos":   "Permisos",
    "nav.preus":      "Preus",
    "nav.nosaltres":  "Nosaltres",
    "nav.contacte":   "Contacte",
    "nav.cta":        "Demana informació",

    // ── Footer ───────────────────────────────────────────────────────────────
    "footer.brand":        "Autoescola Paral·lel",
    "footer.desc":         "Formem conductors segurs i responsables des de 1970. La teva autoescola de barri amb estàndards professionals.",
    "footer.legal_title":  "Informació Legal",
    "footer.avis":         "Avís Legal",
    "footer.privacitat":   "Privacitat",
    "footer.cookies":      "Cookies",
    "footer.contact_title":"Contacte & Ubicació",
    "footer.copy":         "© 2024 Autoescola Paral·lel. Tots els drets reservats.",

    // ── index.html ────────────────────────────────────────────────────────────
    "index.badge":      "Autoescola de confiança des de 1970",
    "index.h1":         "Treu el carnet amb l'autoescola de confiança del <span class=\"text-primary\">Paral·lel</span>",
    "index.subtitle":   "Aprèn a conduir amb seguretat, sense estrès i al teu ritme. Som la tercera generació formant conductors a Barcelona amb un enfocament proper i professional.",
    "index.cta1":       "Comença ara",
    "index.cta2":       "Veure preus",
    "index.t1a":        "+40 anys",
    "index.t1b":        "D'experiència",
    "index.t2a":        "Escola familiar",
    "index.t2b":        "Tracte proper",
    "index.t3a":        "Alt índex",
    "index.t3b":        "D'aprovats",

    // ── permisos.html ─────────────────────────────────────────────────────────
    "perm.h1":          "Tria el teu camí cap a la llibertat",
    "perm.subtitle":    "Explora la nostra àmplia gamma de permisos de conduir. Des de la teva primera moto fins al transport professional, t'acompanyem en cada quilòmetre.",
    "perm.b_title":     "Cotxe",
    "perm.b_desc":      "El carnet més popular. Permet conduir automòbils fins a 3.500 kg.",
    "perm.b_cta":       "Veure Preus",
    "perm.am_title":    "Ciclomotor",
    "perm.am_desc":     "La teva primera entrada a la mobilitat urbana fins a 50cc.",
    "perm.am_age":      "Edat: 15 anys",
    "perm.am_t1":       "Teòrica Específica",
    "perm.am_t2":       "Pista tancada",
    "perm.am_cta":      "Detalls de preus",
    "perm.a_title":     "Motocicletes",
    "perm.a1_label":    "Permís A1",
    "perm.a1_desc":     "Fins a 125cc. Mínim 16 anys. Teòrica + Pista + Circulació.",
    "perm.a2_label":    "Permís A2",
    "perm.a2_desc":     "Fins a 35kW. Mínim 18 anys. El pas previ al carnet A.",
    "perm.a_cta":       "Informació detallada A1/A2",
    "perm.c_title":     "Camions",
    "perm.c_desc":      "Professionalitza la teva conducció. Transport de mercaderies sense límit de pes.",
    "perm.c_r1":        "Edat mínima 21 anys (18 amb CAP)",
    "perm.c_r2":        "Teòrica específica",
    "perm.c_cta":       "Inicia la teva carrera professional",
    "perm.footer_l1":   "Permisos de conduir",
    "perm.footer_l2":   "Llistat de Preus",
    "perm.footer_l3":   "Reserva la teva plaça",

    // ── precios.html ──────────────────────────────────────────────────────────
    "preus.h1":         "Tarifes Transparents",
    "preus.subtitle":   "Troba el pack que millor s'adapti al teu ritme. Sense lletra petita, tot inclòs per a la teva seguretat al volant.",
    "preus.basic":      "Bàsic",
    "preus.basic_sub":  "Per als que volen començar.",
    "preus.basic_cta":  "Triar Bàsic",
    "preus.std":        "Estàndard",
    "preus.std_sub":    "L'opció equilibrada per l'èxit.",
    "preus.std_cta":    "Triar Estàndard",
    "preus.prem":       "Premium",
    "preus.prem_sub":   "Sense preocupacions fins al carnet.",
    "preus.prem_cta":   "Triar Premium",
    "preus.other":      "Altres Permisos",
    "preus.moto":       "Moto (A/A1/A2)",
    "preus.ciclo":      "Ciclomotor (AM)",
    "preus.camio":      "Camió (C)",
    "preus.refresc":    "Conducció de refresc",
    "preus.more":       "Veure més",
    "preus.faq_title":  "Preguntes Freqüents",
    "preus.faq1_q":     "Quan triga a treure's el carnet B?",
    "preus.faq1_a":     "El temps mitjà és de 3 a 6 mesos, depenent de la disponibilitat de l'alumne i el ritme d'aprenentatge.",
    "preus.faq2_q":     "Puc pagar a terminis?",
    "preus.faq2_a":     "Sí, oferim facilitats de pagament sense interessos. Consulta les condicions a la nostra oficina.",
    "preus.faq3_q":     "Que passa si suspenc l'examen?",
    "preus.faq3_a":     "Amb el pack Estàndard i Premium, inclou classes de reforç i nova convocatòria sense cost addicional.",
    "preus.contact_title": "Tens dubtes sobre els preus?",
    "preus.contact_sub":   "El nostre equip t'assessorarà sense compromís.",
    "preus.call":       "Truca'ns ara",
    "preus.whatsapp":   "Envia un WhatsApp",

    // ── nosaltres.html ────────────────────────────────────────────────────────
    "nos.badge":        "Des de 1970",
    "nos.h1":           "Més de mig segle formant conductors a Barcelona",
    "nos.subtitle":     "L'Autoescola Paral·lel no és només un centre de formació; és el llegat d'una família compromesa amb la seguretat viària i el barri de Poble-sec.",
    "nos.team_title":   "Dues generacions, una mateixa passió",
    "nos.team_sub":     "L'experiència del passat i la innovació del present s'uneixen per oferir-te la millor formació.",
    "nos.founder":      "Fundador (1970)",
    "nos.founder_q":    "\"Vaig fundar aquesta escola amb la visió que conduir no és només moure un vehicle, sinó una responsabilitat social. Avui, em sento orgullós de veure com el llegat continua amb la mateixa integritat.\"",
    "nos.years":        "Anys d'història",
    "nos.dir_role":     "Direcció Acadèmica",
    "nos.dir_desc":     "Experta en pedagogia viària i gestió del centre.",
    "nos.cap_role":     "Cap d'Instructors",
    "nos.cap_desc":     "Especialista en tècniques de conducció i seguretat.",
    "nos.pillar":       "\"Proximitat i Confiança\"",
    "nos.pillar_sub":   "Els nostres pilars des del primer dia a l'Avinguda Paral·lel.",
    "nos.timeline":     "La nostra línia del temps",
    "nos.y1970":        "Fundació",
    "nos.y1970d":       "Joan Vallverdú obre les portes de l'Autoescola Paral·lel 190.",
    "nos.y1995":        "Digitalització",
    "nos.y1995d":       "Primers ordinadors per a tests teòrics, pioners al barri.",
    "nos.y2015":        "Nova Generació",
    "nos.y2015d":       "Gemma i Albert assumeixen la gestió, modernitzant la flota i mètodes.",
    "nos.today":        "Avui",
    "nos.todayt":       "Líders al Poble-sec",
    "nos.todayd":       "Innovació constant amb el mateix tracte familiar de sempre.",

    // ── contacte.html ─────────────────────────────────────────────────────────
    "cont.h1":          "Estem a la teva disposició",
    "cont.subtitle":    "Vols treure't el carnet? Tens dubtes sobre els nostres cursos? Contacta amb nosaltres o vine a veure'ns a la nostra autoescola.",
    "cont.form_title":  "Envia'ns un missatge",
    "cont.name":        "Nom Complet",
    "cont.email":       "Correu Electrònic",
    "cont.phone":       "Telèfon",
    "cont.interest":    "Interès",
    "cont.opt1":        "Permís B (Cotxe)",
    "cont.opt2":        "Permís A2/A (Moto)",
    "cont.opt3":        "Pràctiques de reciclatge",
    "cont.opt4":        "Altres consultes",
    "cont.msg":         "Missatge",
    "cont.submit":      "Enviar sol·licitud",
    "cont.call":        "Trucar",
    "cont.whatsapp":    "WhatsApp",
    "cont.hours":       "Horaris",
    "cont.hours_title": "Horari d'Oficina",
    "cont.mth":         "Dl - Dj",
    "cont.mth_h":       "10:00 - 13:30 | 16:00 - 20:30",
    "cont.fri":         "Divendres",
    "cont.fri_h":       "10:00 - 13:30 | 16:00 - 19:00",
    "cont.theory":      "Classes Teòriques",
    "cont.theory_m":    "Matins: 11:00 - 12:00",
    "cont.theory_e":    "Tardes: 19:00 - 20:00",
    "cont.loc":         "Ubicació",
    "cont.address":     "Av. Paral·lel 190, 08015 Barcelona",
    "cont.faq_cta":     "Preguntes Freqüents",
    "cont.price_cta":   "Ver Precios",
  },

  es: {
    // ── Nav ──────────────────────────────────────────────────────────────────
    "nav.permisos":   "Permisos",
    "nav.preus":      "Precios",
    "nav.nosaltres":  "Nosotros",
    "nav.contacte":   "Contacto",
    "nav.cta":        "Pide información",

    // ── Footer ───────────────────────────────────────────────────────────────
    "footer.brand":        "Autoescola Paral·lel",
    "footer.desc":         "Formamos conductores seguros y responsables desde 1970. Tu autoescuela de barrio con estándares profesionales.",
    "footer.legal_title":  "Información Legal",
    "footer.avis":         "Aviso Legal",
    "footer.privacitat":   "Privacidad",
    "footer.cookies":      "Cookies",
    "footer.contact_title":"Contacto & Ubicación",
    "footer.copy":         "© 2024 Autoescola Paral·lel. Todos los derechos reservados.",

    // ── index.html ────────────────────────────────────────────────────────────
    "index.badge":      "Autoescuela de confianza desde 1970",
    "index.h1":         "Saca el carnet con la autoescuela de confianza del <span class=\"text-primary\">Paral·lel</span>",
    "index.subtitle":   "Aprende a conducir con seguridad, sin estrés y a tu ritmo. Somos la tercera generación formando conductores en Barcelona con un enfoque cercano y profesional.",
    "index.cta1":       "Empieza ahora",
    "index.cta2":       "Ver precios",
    "index.t1a":        "+40 años",
    "index.t1b":        "De experiencia",
    "index.t2a":        "Escuela familiar",
    "index.t2b":        "Trato cercano",
    "index.t3a":        "Alto índice",
    "index.t3b":        "De aprobados",

    // ── permisos.html ─────────────────────────────────────────────────────────
    "perm.h1":          "Elige tu camino hacia la libertad",
    "perm.subtitle":    "Explora nuestra amplia gama de permisos de conducir. Desde tu primera moto hasta el transporte profesional, te acompañamos en cada kilómetro.",
    "perm.b_title":     "Coche",
    "perm.b_desc":      "El carnet más popular. Permite conducir automóviles hasta 3.500 kg.",
    "perm.b_cta":       "Ver Precios",
    "perm.am_title":    "Ciclomotor",
    "perm.am_desc":     "Tu primera entrada a la movilidad urbana hasta 50cc.",
    "perm.am_age":      "Edad: 15 años",
    "perm.am_t1":       "Teórica Específica",
    "perm.am_t2":       "Pista cerrada",
    "perm.am_cta":      "Detalles de precios",
    "perm.a_title":     "Motocicletas",
    "perm.a1_label":    "Permiso A1",
    "perm.a1_desc":     "Hasta 125cc. Mínimo 16 años. Teórica + Pista + Circulación.",
    "perm.a2_label":    "Permiso A2",
    "perm.a2_desc":     "Hasta 35kW. Mínimo 18 años. El paso previo al carnet A.",
    "perm.a_cta":       "Información detallada A1/A2",
    "perm.c_title":     "Camiones",
    "perm.c_desc":      "Profesionaliza tu conducción. Transporte de mercancías sin límite de peso.",
    "perm.c_r1":        "Edad mínima 21 años (18 con CAP)",
    "perm.c_r2":        "Teórica específica",
    "perm.c_cta":       "Inicia tu carrera profesional",
    "perm.footer_l1":   "Permisos de conducir",
    "perm.footer_l2":   "Lista de Precios",
    "perm.footer_l3":   "Reserva tu plaza",

    // ── precios.html ──────────────────────────────────────────────────────────
    "preus.h1":         "Tarifas Transparentes",
    "preus.subtitle":   "Encuentra el pack que mejor se adapte a tu ritmo. Sin letra pequeña, todo incluido para tu seguridad al volante.",
    "preus.basic":      "Básico",
    "preus.basic_sub":  "Para los que quieren empezar.",
    "preus.basic_cta":  "Elegir Básico",
    "preus.std":        "Estándar",
    "preus.std_sub":    "La opción equilibrada para el éxito.",
    "preus.std_cta":    "Elegir Estándar",
    "preus.prem":       "Premium",
    "preus.prem_sub":   "Sin preocupaciones hasta el carnet.",
    "preus.prem_cta":   "Elegir Premium",
    "preus.other":      "Otros Permisos",
    "preus.moto":       "Moto (A/A1/A2)",
    "preus.ciclo":      "Ciclomotor (AM)",
    "preus.camio":      "Camión (C)",
    "preus.refresc":    "Conducción de reciclaje",
    "preus.more":       "Ver más",
    "preus.faq_title":  "Preguntas Frecuentes",
    "preus.faq1_q":     "¿Cuánto tarda en sacarse el carnet B?",
    "preus.faq1_a":     "El tiempo medio es de 3 a 6 meses, según la disponibilidad del alumno y el ritmo de aprendizaje.",
    "preus.faq2_q":     "¿Puedo pagar a plazos?",
    "preus.faq2_a":     "Sí, ofrecemos facilidades de pago sin intereses. Consulta las condiciones en nuestra oficina.",
    "preus.faq3_q":     "¿Qué pasa si suspendo el examen?",
    "preus.faq3_a":     "Con el pack Estándar y Premium, incluye clases de refuerzo y nueva convocatoria sin coste adicional.",
    "preus.contact_title": "¿Tienes dudas sobre los precios?",
    "preus.contact_sub":   "Nuestro equipo te asesorará sin compromiso.",
    "preus.call":       "Llámanos ahora",
    "preus.whatsapp":   "Enviar WhatsApp",

    // ── nosaltres.html ────────────────────────────────────────────────────────
    "nos.badge":        "Desde 1970",
    "nos.h1":           "Más de medio siglo formando conductores en Barcelona",
    "nos.subtitle":     "La Autoescola Paral·lel no es solo un centro de formación; es el legado de una familia comprometida con la seguridad vial y el barrio de Poble-sec.",
    "nos.team_title":   "Dos generaciones, una misma pasión",
    "nos.team_sub":     "La experiencia del pasado y la innovación del presente se unen para ofrecerte la mejor formación.",
    "nos.founder":      "Fundador (1970)",
    "nos.founder_q":    "\"Fundé esta escuela con la visión de que conducir no es solo mover un vehículo, sino una responsabilidad social. Hoy me siento orgulloso de ver cómo el legado continúa con la misma integridad.\"",
    "nos.years":        "Años de historia",
    "nos.dir_role":     "Dirección Académica",
    "nos.dir_desc":     "Experta en pedagogía vial y gestión del centro.",
    "nos.cap_role":     "Jefe de Instructores",
    "nos.cap_desc":     "Especialista en técnicas de conducción y seguridad.",
    "nos.pillar":       "\"Proximidad y Confianza\"",
    "nos.pillar_sub":   "Nuestros pilares desde el primer día en la Avenida Paral·lel.",
    "nos.timeline":     "Nuestra línea del tiempo",
    "nos.y1970":        "Fundación",
    "nos.y1970d":       "Joan Vallverdú abre las puertas de la Autoescola Paral·lel 190.",
    "nos.y1995":        "Digitalización",
    "nos.y1995d":       "Primeros ordenadores para tests teóricos, pioneros en el barrio.",
    "nos.y2015":        "Nueva Generación",
    "nos.y2015d":       "Gemma y Albert asumen la gestión, modernizando la flota y los métodos.",
    "nos.today":        "Hoy",
    "nos.todayt":       "Líderes en Poble-sec",
    "nos.todayd":       "Innovación constante con el mismo trato familiar de siempre.",

    // ── contacte.html ─────────────────────────────────────────────────────────
    "cont.h1":          "Estamos a tu disposición",
    "cont.subtitle":    "¿Quieres sacarte el carnet? ¿Tienes dudas sobre nuestros cursos? Contáctanos o ven a visitarnos en nuestra autoescuela.",
    "cont.form_title":  "Envíanos un mensaje",
    "cont.name":        "Nombre Completo",
    "cont.email":       "Correo Electrónico",
    "cont.phone":       "Teléfono",
    "cont.interest":    "Interés",
    "cont.opt1":        "Permiso B (Coche)",
    "cont.opt2":        "Permiso A2/A (Moto)",
    "cont.opt3":        "Prácticas de reciclaje",
    "cont.opt4":        "Otras consultas",
    "cont.msg":         "Mensaje",
    "cont.submit":      "Enviar solicitud",
    "cont.call":        "Llamar",
    "cont.whatsapp":    "WhatsApp",
    "cont.hours":       "Horarios",
    "cont.hours_title": "Horario de Oficina",
    "cont.mth":         "Lu - Ju",
    "cont.mth_h":       "10:00 - 13:30 | 16:00 - 20:30",
    "cont.fri":         "Viernes",
    "cont.fri_h":       "10:00 - 13:30 | 16:00 - 19:00",
    "cont.theory":      "Clases Teóricas",
    "cont.theory_m":    "Mañanas: 11:00 - 12:00",
    "cont.theory_e":    "Tardes: 19:00 - 20:00",
    "cont.loc":         "Ubicación",
    "cont.address":     "Av. Paral·lel 190, 08015 Barcelona",
    "cont.faq_cta":     "Preguntas Frecuentes",
    "cont.price_cta":   "Ver Precios",
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// Engine
// ─────────────────────────────────────────────────────────────────────────────

function applyLang(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) {
      // Use innerHTML for keys that contain HTML (spans, etc.)
      if (t[key].includes("<")) {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });

  // Sync dropdown label + flag
  const FLAGS = {
    ca: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6" width="20" height="13" style="border-radius:2px"><rect width="9" height="6" fill="#FCDD09"/><rect y="1" width="9" height="1" fill="#DA121A"/><rect y="3" width="9" height="1" fill="#DA121A"/><rect y="5" width="9" height="1" fill="#DA121A"/></svg>`,
    es: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" width="20" height="13" style="border-radius:2px"><rect width="3" height="2" fill="#c60b1e"/><rect y="0.5" width="3" height="1" fill="#ffc400"/></svg>`
  };
  document.querySelectorAll(".lang-btn-label").forEach(el => { el.textContent = lang.toUpperCase(); });
  document.querySelectorAll(".lang-btn-flag").forEach(el => { el.innerHTML = FLAGS[lang] || ""; });

  // Update <html lang>
  document.documentElement.lang = lang;

  localStorage.setItem("lang", lang);
}

function initLang() {
  const saved = localStorage.getItem("lang") || "ca";
  applyLang(saved);
}

// ─────────────────────────────────────────────────────────────────────────────
// Dropdown  –  injected once the DOM is ready
// ─────────────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  // Replace every .lang-toggle placeholder with a real dropdown
  document.querySelectorAll(".lang-toggle").forEach(btn => {
    const current = localStorage.getItem("lang") || "ca";

    const wrapper = document.createElement("div");
    wrapper.className = "relative";
    wrapper.innerHTML = `
      <button
        class="flex items-center gap-1 font-button-text text-button-text text-on-surface-variant hover:text-primary transition-colors px-2 py-1 rounded-lg hover:bg-surface-container-high"
        aria-haspopup="true" aria-expanded="false" id="lang-dropdown-btn"
      >
        <span class="lang-btn-flag" style="line-height:0;display:inline-flex"></span>
        <span class="lang-btn-label" style="font-size:13px">${current.toUpperCase()}</span>
        <span class="material-symbols-outlined text-[18px] transition-transform duration-200" id="lang-chevron">expand_more</span>
      </button>
      <div
        id="lang-menu"
        class="absolute right-0 mt-1 w-28 bg-surface border border-outline-variant rounded-xl shadow-lg overflow-hidden hidden z-50"
      >
        <button data-lang="ca" class="lang-option w-full text-left px-4 py-2 font-button-text text-button-text hover:bg-surface-container-high transition-colors flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6" width="22" height="15" style="border-radius:2px;flex-shrink:0">
            <rect width="9" height="6" fill="#FCDD09"/>
            <rect y="1" width="9" height="1" fill="#DA121A"/>
            <rect y="3" width="9" height="1" fill="#DA121A"/>
            <rect y="5" width="9" height="1" fill="#DA121A"/>
          </svg>
          Català
        </button>
        <button data-lang="es" class="lang-option w-full text-left px-4 py-2 font-button-text text-button-text hover:bg-surface-container-high transition-colors flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" width="22" height="15" style="border-radius:2px;flex-shrink:0">
            <rect width="3" height="2" fill="#c60b1e"/>
            <rect y="0.5" width="3" height="1" fill="#ffc400"/>
          </svg>
          Español
        </button>
      </div>
    `;

    btn.replaceWith(wrapper);

    const dropBtn  = wrapper.querySelector("#lang-dropdown-btn");
    const menu     = wrapper.querySelector("#lang-menu");
    const chevron  = wrapper.querySelector("#lang-chevron");

    dropBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = !menu.classList.contains("hidden");
      menu.classList.toggle("hidden", open);
      chevron.style.transform = open ? "" : "rotate(180deg)";
      dropBtn.setAttribute("aria-expanded", String(!open));
    });

    wrapper.querySelectorAll(".lang-option").forEach(opt => {
      opt.addEventListener("click", () => {
        applyLang(opt.dataset.lang);
        menu.classList.add("hidden");
        chevron.style.transform = "";
      });
    });

    document.addEventListener("click", () => {
      menu.classList.add("hidden");
      chevron.style.transform = "";
    });
  });

  // Apply saved language
  initLang();
});
