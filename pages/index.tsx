import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PostFrontMatter } from 'types/PostFrontMatter'
import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export const getStaticProps: GetStaticProps<{ posts: PostFrontMatter[] }> = async () => {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <div className="items-start space-y-2 xl:grid xl:grid-cols-1 xl:gap-x-8 xl:space-y-0">
        {/* <div className="mb-8 bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-base font-extrabold leading-normal tracking-tight text-transparent dark:bg-gradient-to-l dark:from-emerald-500 dark:to-lime-600 md:text-lg md:leading-normal">
          <h2>
            Hi, I am Shuyang <span style={{ color: '#A5B4FC' }}>👋</span>
          </h2>
        </div> */}
        <div className="mb-8 bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-2xl font-extrabold leading-normal tracking-tight text-transparent dark:bg-gradient-to-l dark:from-emerald-500 dark:to-lime-600 md:text-4xl md:leading-normal">
          <h2>
            Hi, I am Shuyang <span style={{ color: '#A5B4FC' }}>👋</span>
          </h2>
        </div>
        <div className="prose max-w-none pt-4 pb-8 dark:prose-dark xl:col-span-1">
          <h3>Bio</h3>
          <p>
            Hello, my name is Shuyang. I am a senior undergraduate student studying Mathematics and
            Computer Science at the University of Illinois at Urbana-Champaign. I expect to graduate
            in December 2023.
          </p>

          <p>
            During the Spring 2023 semester, I participated in the{' '}
            <a
              className="focusable rounded-sm font-medium text-zinc-800 underline decoration-red-500 decoration-2 underline-offset-2 transition duration-100 hover:text-blue-500 hover:decoration-sky-500/30 focus:text-blue-500 focus:ring-sky-500/40 dark:text-white"
              href="https://cityscholars.engineering.illinois.edu/"
              rel="noreferrer"
              target="_blank"
            >
              Engineering City Scholars Program
            </a>{' '}
            and interned at{' '}
            <a
              className="focusable rounded-sm font-medium text-zinc-800 underline decoration-green-500 decoration-2 underline-offset-2 transition duration-100 hover:text-green-500 hover:decoration-green-500/30 focus:text-lime-500 focus:ring-lime-500/40 dark:text-white"
              href="https://www.here.com/"
              rel="noreferrer"
              target="_blank"
            >
              HERE Technologies
            </a>{' '}
            to contribute to the feature alignment service cloud re-architecture for the{' '}
            <a
              className="focusable rounded-sm font-medium text-zinc-800 underline decoration-orange-500 decoration-2 underline-offset-2 transition duration-100 hover:text-blue-500 hover:decoration-sky-500/30 focus:text-blue-500 focus:ring-sky-500/40 dark:text-white"
              href="https://www.here.com/about/press-releases/en/here-introduces-unimap-to-revolutionize-how-maps-are-created-updated-and"
              rel="noreferrer"
              target="_blank"
            >
              Unimap
            </a>
            , an emerging revolutionary and automated location platform. For the past Summer, I
             interned at{' '}
            <a
              className="focusable rounded-sm font-medium text-zinc-800 underline decoration-orange-500 decoration-2 underline-offset-2 transition duration-100 hover:text-blue-500 hover:decoration-sky-500/30 focus:text-blue-500 focus:ring-sky-500/40 dark:text-white"
              href="https://www.Splunk.com/"
              rel="noreferrer"
              target="_blank"
            >
              Splunk
            </a>{' '}
            working on an Multi-Tenant {' '}
            <a
              className="focusable rounded-sm font-medium text-zinc-800 underline decoration-blue-500 decoration-2 underline-offset-2 transition duration-100 hover:text-blue-500 hover:decoration-sky-500/30 focus:text-blue-500 focus:ring-sky-500/40 dark:text-white"
              href="https://opentelemetry.io/"
              rel="noreferrer"
              target="_blank"
            >
              OpenTelemetry
            </a>
            {' '}Ingest Service.
          </p>
        </div>

        <div className="prose max-w-none pt-4 pb-8 dark:prose-dark xl:col-span-1">
          <h3>Career interests</h3>
          <p className="text-blue-500 hover:text-blue-600">
            I am actively seeking full-time opportunities in software engineering, infrastructure,
            and systems research and development.
          </p>

          <p>
            I am a system and networking enthusiast with a passion for building and revamping
            systems to achieve greater resilience. My primary interests are Distributed Systems,
            Offensive Cybersecurity and Developer Experience (DevEx).
          </p>

          <p>
            Before leaning more towards an industry career, I had the luck to spend some time
            exploring systems research at{' '}
            <a
              className="focusable rounded-sm font-medium text-zinc-800 underline decoration-orange-500 decoration-2 underline-offset-2 transition duration-100 hover:text-blue-500 hover:decoration-sky-500/30 focus:text-blue-500 focus:ring-sky-500/40 dark:text-white"
              href="https://cs.illinois.edu/research/areas/systems-and-networking"
              rel="noreferrer"
              target="_blank"
            >
              CS @ Illinois
            </a>
            , in topics including IoT (Internet of Things) Virtualization, Software Testing,
            System Reliability and Storage Systems.
          </p>

          {/* <p>
            <div className="prose max-w-none dark:prose-dark xl:col-span-1">
              <h5>Some topics that I am particularly interested in exploring (more info):</h5>
            </div>
            <li>
              {' '}
              Facilitate the process of production diagnosis and recovery: (Underinvestigated)
              Enhance the observability of data-intensive software systems?{' '}
            </li>
            <li> Infrastructure as Code: Terraform and Terraformer (reverse Terraform) </li>
            <li>
              {' '}
              Improve Developer Experience from an HCI Perspective{' '} */}
          {/* <Link href="mailto:sji15@illinois.edu">
                <a className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
                  sji15@illinois.edu
                </a>
              </Link>{' '}
            </li>
          </p> */}
        </div>

        {/* <div className="prose max-w-none pt-4 pb-8 dark:prose-dark xl:col-span-1">
          <h3>Prior experience</h3>
        </div>
        TBD */}
        <div className="prose max-w-none pt-4 pb-4 dark:prose-dark xl:col-span-1">
          <h3>Connect</h3>
        </div>
        <div className="mt-8 flex flex-wrap gap-4 text-center">
          <a
            className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-blue-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-blue-500/10 transition selection:bg-white/30 hover:bg-blue-500/80 hover:shadow-blue-500/5 focus:ring-blue-500/40 dark:bg-blue-400 dark:text-zinc-900 dark:shadow-blue-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-blue-400/80 dark:hover:shadow-blue-400/5 dark:focus:ring-blue-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
            href="https://www.linkedin.com/in/shuyang-ji/"
            rel="noreferrer"
            target="_blank"
          >
            <svg height="24" role="presentation" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-indigo-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-indigo-500/10 transition selection:bg-white/30 hover:bg-indigo-500/80 hover:shadow-indigo-500/5 focus:ring-indigo-500/40 dark:bg-indigo-400 dark:text-zinc-900 dark:shadow-indigo-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-indigo-400/80 dark:hover:shadow-indigo-400/5 dark:focus:ring-indigo-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
            href="https://github.com/94rain"
            rel="noreferrer"
            target="_blank"
          >
            <svg height="24" role="presentation" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M12 2C6.475 2 2 6.47 2 11.988c0 4.42 2.862 8.153 6.838 9.476.5.087.687-.212.687-.474 0-.238-.013-1.024-.013-1.86C7 19.59 6.35 18.517 6.15 17.955c-.113-.287-.6-1.174-1.025-1.411-.35-.187-.85-.65-.013-.662.788-.012 1.35.724 1.538 1.024.9 1.51 2.338 1.086 2.912.824.088-.65.35-1.086.638-1.336-2.225-.25-4.55-1.111-4.55-4.931 0-1.087.387-1.986 1.025-2.685-.1-.25-.45-1.273.1-2.646 0 0 .837-.263 2.75 1.023a9.29 9.29 0 0 1 2.5-.337c.85 0 1.7.113 2.5.337 1.912-1.298 2.75-1.023 2.75-1.023.55 1.373.2 2.397.1 2.646.637.7 1.025 1.586 1.025 2.685 0 3.832-2.337 4.681-4.562 4.931.362.312.675.912.675 1.848 0 1.336-.013 2.41-.013 2.747 0 .262.188.574.688.474C19.137 20.141 22 16.395 22 11.988 22 6.47 17.525 2 12 2Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-lime-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-lime-500/10 transition selection:bg-white/30 hover:bg-lime-500/80 hover:shadow-lime-500/5 focus:ring-lime-500/40 dark:bg-lime-400 dark:text-zinc-900 dark:shadow-lime-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-lime-400/80 dark:hover:shadow-lime-400/5 dark:focus:ring-lime-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
            href="mailto:jishuyang@msn.com"
          >
            <svg height="24" role="presentation" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M7.727 2.959A10 10 0 0 1 22 11.999v.9a3.7 3.7 0 0 1-6.642 2.244 4.6 4.6 0 1 1-.741-6.928A1 1 0 0 1 16.6 8.4v4.5a1.7 1.7 0 1 0 3.4 0V12a8 8 0 1 0-3.136 6.353 1 1 0 1 1 1.216 1.587A10 10 0 1 1 7.727 2.96Zm6.873 9.04a2.6 2.6 0 1 0-5.2 0 2.6 2.6 0 0 0 5.2 0Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <span className="hidden sm:inline">Email</span>
          </a>
          <a
            className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-blue-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-blue-500/10 transition selection:bg-white/30 hover:bg-blue-500/80 hover:shadow-blue-500/5 focus:ring-blue-500/40 dark:bg-blue-400 dark:text-zinc-900 dark:shadow-blue-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-blue-400/80 dark:hover:shadow-blue-400/5 dark:focus:ring-blue-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
            href="https://twitter.com/shuyang_j"
            rel="noreferrer"
            target="_blank"
          >
            <svg height="24" role="presentation" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M21.5 5.894a7.571 7.571 0 0 1-2.239.636 4.024 4.024 0 0 0 1.714-2.235 7.646 7.646 0 0 1-2.475.98A3.83 3.83 0 0 0 15.654 4c-2.516 0-4.366 2.433-3.797 4.959-3.239-.168-6.111-1.776-8.034-4.22-1.021 1.816-.53 4.19 1.206 5.393a3.78 3.78 0 0 1-1.765-.505c-.043 1.87 1.252 3.622 3.126 4.011-.548.155-1.15.19-1.76.07.495 1.604 1.934 2.771 3.641 2.804A7.642 7.642 0 0 1 2.5 18.185 10.757 10.757 0 0 0 8.476 20c7.237 0 11.326-6.334 11.079-12.015a8.101 8.101 0 0 0 1.945-2.09Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <span className="hidden sm:inline">Twitter</span>
          </a>
        </div>
        {/* <li className="dark:hover:text-blue-400">
          Email:{' '}
          <Link
            className="mr-3 text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
            href="mailto:sji15@illinois.edu"
          >
            <a>sji15@illinois.edu</a>
          </Link>
        </li>
        <li className="dark:hover:text-blue-400">
          GitHub:{' '}
          <Link
            className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
            href="https://github.com/94rain"
            style={{ textDecoration: 'none' }}
          >
            <a>94rain</a>
          </Link>
        </li>
        <li className="dark:hover:text-blue-400">
          Linkedin:{' '}
          <Link
            className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
            target="_blank"
            href="https://www.linkedin.com/in/shuyang-ji/"
            rel="noreferrer"
          >
            <a>Shuyang Ji</a>
          </Link>
        </li> */}
      </div>
      {/* <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul> */}
      {/* </div> */}
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {/* {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
