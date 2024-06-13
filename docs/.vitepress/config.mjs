import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Documentación Apoderados",
  description: "Liceo Experimental Umag",
  base: '/leumag-apoderado-doc/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Sitio Oficial', link: 'https://portal.liceoexperimental.cl/' }
    ],

    sidebar: [
      {
        text: 'Menú',
        items: [
          { text: 'Acceder', link: '/inicio' },
          { text: 'Pantalla Principal', link: '/pantalla' },
          { text: 'Asistencia', link: '/asistencia' },
          { text: 'Atrasos', link: '/atrasos' },
          { text: 'Libreta', link: '/calificaciones' },
          { text: 'Certificados', link: '/certificados' },
          { text: 'ACLES', link: '/acles' },
        ]
      }
    ],
  }
})
