import { projects } from './content/projects.ts'
import { Contact } from './components/Contact.tsx'
import { Experience } from './components/Experience.tsx'
import { Hero } from './components/Hero.tsx'
import { ProjectField } from './components/ProjectField.tsx'
import { SiteHeader } from './components/SiteHeader.tsx'
import { TechSpecimen } from './components/TechSpecimen.tsx'
import { useLocale } from './i18n/useLocale.ts'

function App() {
  const { t } = useLocale()

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skipLink}
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />

        <section id="projects" aria-labelledby="projects-title">
          <h2 className="visually-hidden" id="projects-title">
            {t.work.title}
          </h2>
          {projects.map((project, index) => (
            <ProjectField key={project.slug} project={project} index={index} />
          ))}
        </section>

        <TechSpecimen />
        <Experience />
      </main>
      <Contact />
    </>
  )
}

export default App
