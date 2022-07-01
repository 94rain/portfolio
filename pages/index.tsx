import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
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
      <div className="pt-6 pb-2 space-y-2 md:space-y-5"></div>

      <div className="items-start space-y-2 xl:grid xl:grid-cols-1 xl:gap-x-8 xl:space-y-0">
        <div className="pt-4 pb-8 prose dark:prose-dark max-w-none xl:col-span-1"><h2>Hi, I am Shuyang 👋</h2></div>
          <div className="pt-4 pb-8 prose dark:prose-dark max-w-none xl:col-span-1"><h3>Bio</h3>
            <p>
              Hello, my name is Shuyang. I am a rising senior undergraduate student studying Mathematics and Computer Science at
              the University of Illinois at Urbana-Champaign. I expect to graduate in May 2023.
            </p>
          </div>

          <div className="pt-4 pb-8 prose dark:prose-dark max-w-none xl:col-span-1"><h3>Career interests</h3>
            <p className="text-blue-500 hover:text-blue-600">
              I am actively seeking full-time software engineer opportunties starting between June and August 2023!
            </p>
            <p>
              My interests broadly lie in the field of Systems and networking. I like designing and building systems that address practical problems, ranging from high-level large scale software systems to operating systems and architecture that support them.
            </p>
            <p>
            <div className="prose dark:prose-dark max-w-none xl:col-span-1"><h5>My current projects including:</h5></div>
              <li> An operating system that can run on RISC-V (personal) </li>
              <li> Cross-System Data Plane Testing (research) </li>
              <li> IoT (Internet of Things) virtualization (research) </li>
            </p>
            <p>
            <div className="prose dark:prose-dark max-w-none xl:col-span-1"><h5>Some topics that I am also currently interested in exploring (more info):</h5></div>
            <li> Facilitate the process of production diagnosis and recovery: (Underinvestigated) Enhance the observability of data-intensive software systems? </li>
            <li> Infrastructure as Code: Terraform and Terraformer (reverse Terraform) </li>
            <li> Improve Developer Experience from an HCI Perspective:{' '} <Link href="mailto:sji15@illinois.edu">
              <a className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">sji15@illinois.edu</a>
            </Link> </li>
          </p>
          </div>

        
        <div className="pt-4 pb-4 prose dark:prose-dark max-w-none xl:col-span-1"><h3>Contact</h3></div>
        <li className="dark:hover:text-blue-400">
            Email:{' '}
            <Link className="mr-3 text-blue-500 hover:text-blue-600 dark:hover:text-blue-400" href="mailto:sji15@illinois.edu">
              <a>sji15@illinois.edu</a>
            </Link>
          </li>
          <li className="dark:hover:text-blue-400">
            GitHub:{' '}
            <Link className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400" href="https://github.com/94rain" style={{textDecoration: 'none'}}>
              <a>94rain</a>
            </Link>
          </li>
          <li className="dark:hover:text-blue-400">
            Linkedin:{' '}
            <Link className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400" target="_blank" href="https://www.linkedin.com/in/shuyang-ji/" rel="noreferrer">
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
