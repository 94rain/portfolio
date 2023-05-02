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
      <div className="space-y-2 pt-6 pb-2 md:space-y-5"></div>

      <div className="items-start space-y-2 xl:grid xl:grid-cols-1 xl:gap-x-8 xl:space-y-0">
        <div className="prose max-w-none pt-4 pb-8 dark:prose-dark xl:col-span-1">
          <h2>Hi, I am Shuyang 👋</h2>
        </div>
        <div className="prose max-w-none pt-4 pb-8 dark:prose-dark xl:col-span-1">
          <h3>Bio</h3>
          <p>
            Hello, my name is Shuyang. I am a senior undergraduate student studying
            Mathematics and Computer Science at the University of Illinois at Urbana-Champaign. I
            expect to graduate in either August or December 2023.
          </p>

          <p>
            During the Spring 2023 semester, I am participating in the Engineering City Scholars
            Program and interning at HERE Technologies to contribute to the feature alignment
            service cloud re-architecture for the Unimap, an unveiled revolutionary and automated location
            platform. For the upcoming Summer, I will intern at Splunk working on stream processing and OpenTelemetry. See you in the Bay Area!
          </p>

          <p>
            Before leaning more towards an industry career, I had the luck to spend some time exploring systems research.
          </p>
        </div>

        <div className="prose max-w-none pt-4 pb-8 dark:prose-dark xl:col-span-1">
          <h3>Career interests</h3>
          <p className="text-blue-500 hover:text-blue-600">
            I am on the job market! I am actively seeking opportunities in
            software engineering, infrastructure, and systems research and development.
          </p>

          <p>
          I am a system and networking enthusiast with a passion for building and revamping systems to achieve greater resilience. I am currently focusing on streaming processing and observability.
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
        <li className="dark:hover:text-blue-400">
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
        </li>
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
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
