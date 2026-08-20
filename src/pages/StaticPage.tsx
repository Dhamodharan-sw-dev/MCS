import { Link, useParams } from 'react-router-dom'
import { staticPages } from '../data/footerContent'
import { NotFound } from './NotFound'

export function StaticPage() {
  const { slug } = useParams<{ slug: string }>()
  const content = slug ? staticPages[slug] : undefined

  if (!content) return <NotFound />

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Link to="/" className="text-sm text-[#4a4a4a] hover:text-[#212121]">
        ← Back to home
      </Link>
      <h1 className="mt-4 text-3xl font-medium text-[#212121] sm:text-4xl">{content.title}</h1>
      {content.intro && <p className="mt-4 text-base text-[#4a4a4a]">{content.intro}</p>}

      <div className="mt-10 flex flex-col gap-8">
        {content.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-lg font-medium text-[#212121]">{section.heading}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph} className="mt-2 text-sm leading-relaxed text-[#4a4a4a]">
                {paragraph}
              </p>
            ))}
            {section.list && (
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-[#4a4a4a]">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  )
}
