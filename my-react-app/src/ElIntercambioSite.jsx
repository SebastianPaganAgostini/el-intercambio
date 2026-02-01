import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import "./ElIntercambio.css"; // your CSS file

export default function ElIntercambioSite() {
  const lastVideoUrl = "https://www.youtube.com/embed/VIDEO_ID";

  return (
    <div className="site-container">
      {/* HERO */}
      <header className="hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">EL INTERCAMBIO</h1>
          <p className="hero-subtitle">Barra × Cocina</p>

          <p className="hero-description">
            Plataforma de entrevistas que conecta la cocina con la barra,
            resaltando la técnica, la cultura y las historias reales detrás del
            servicio.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="latest-episode-card"
        >
          <p className="section-label">Último episodio</p>

          <div className="video-wrapper">
            <iframe
              className="video-frame"
              src={lastVideoUrl}
              title="Último video"
              allowFullScreen
            />
          </div>
        </motion.div>
      </header>

      {/* CONCEPTO */}
      <section className="concept-section">
        <div className="section-inner">
          <h2 className="section-title">🖤 El Intercambio — Concepto</h2>

          <p className="section-text">
            El Intercambio nace del ritual no escrito entre bartender y
            cocinero: intercambiarse comida y bebida al final del servicio.
            Un plato sale de la cocina. Un trago cruza la barra.
            Y en ese cruce se cuentan historias, se prueban ideas y se respetan
            los oficios.
          </p>

          <p className="section-text">
            La página documenta ese momento: entrevistas reales entre colegas,
            conversaciones sin pose, técnica, cultura y vida detrás del
            servicio.
          </p>

          <p className="concept-quote">
            Donde la cocina bebe y la barra come.
          </p>
        </div>
      </section>

      {/* FUNDADOR */}
      <section className="founder-section">
        <div className="founder-grid">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">¿Quién creó la página?</h2>
            <p className="section-text">
              Creada por <span className="highlight">Sebastián García</span>,
              joven chef y bartender de 20 años, con el propósito de reconocer
              el talento de sus colegas y de los jóvenes dentro de la industria
              de barra y cocina.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="founder-card"
          >
            <PlayCircle className="founder-icon" />
            <p className="founder-label">Entrevistas reales</p>
            <p className="founder-text">
              Historias auténticas desde la cocina y la barra, contadas por
              quienes viven el servicio todos los días.
            </p>
          </motion.div>
        </div>
      </section>

      {/* REDES */}
      <section className="social-section">
        <div className="section-inner">
          <h2 className="section-title">Síguenos</h2>
          <p className="section-text">
            Contenido real desde la cocina y la barra — entrevistas, técnica y cultura.
          </p>

          <div className="social-buttons">
            <a href="https://instagram.com/elintercambiopr" target="_blank" className="btn instagram">
              Instagram
            </a>
            <a href="https://tiktok.com/@elintercambiopr" target="_blank" className="btn tiktok">
              TikTok
            </a>
            <a href="mailto:elintercambiopr@gmail.com" className="btn contact">
              Contacto
            </a>
          </div>
        </div>
      </section>

      {/* EPISODIOS */}
      <section className="episodes-section">
        <div className="section-inner">
          <h2 className="section-title">Episodios</h2>

          <div className="episodes-grid">
            {[1, 2, 3].map((ep) => (
              <motion.div
                key={ep}
                whileHover={{ scale: 1.03 }}
                className="episode-card"
              >
                <div className="episode-thumbnail" />
                <div className="episode-content">
                  <p className="episode-label">Episodio {ep}</p>
                  <h3 className="episode-title">Conversaciones entre barra y cocina</h3>
                  <p className="episode-description">
                    Invitado especial de la industria compartiendo técnica,
                    historias y visión.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} EL INTERCAMBIO — Barra × Cocina</p>
        <p>Creado en Puerto Rico</p>
      </footer>
    </div>
  );
}
