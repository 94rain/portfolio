import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import SocialIcon from '@/components/social-icons'

const MAX_DISPLAY = 5
const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" />{' '}
            {/* {siteMetadata.image} */}
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">Junior Undergraduate</div>
            <div className="text-gray-500 dark:text-gray-400">UIUC</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="facebook" href={siteMetadata.facebook} />
              {/* <SocialIcon kind="youtube" href={siteMetadata.youtube} /> */}
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              {/* <SocialIcon kind="twitter" href={siteMetadata.twitter} /> */}
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              Hello, my name is Shuyang Ji. I am a junior studying Mathematics and Computer Science at the University of
              Illinois at Urbana-Champaign.
            </p>
            <p>
              My interests broadly lie in the field of Systems and networking, Software Engineering
              and Programming languages.
            </p>
            <p>
              I serve as a SysOp at MediaWiki.org and a global rollbacker on all wikimedia projects.
              These are just fancy ways to say that the community has given me some extra buttons to
              help with uncontroversial maintenance.
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </>
  )
  // return (
  //   <>
  //     <PageSeo
  //       title={siteMetadata.title}
  //       description={siteMetadata.description}
  //       url={siteMetadata.siteUrl}
  //     />
  //     <div className="divide-y divide-gray-200 dark:divide-gray-700">
  //       <div className="pt-6 pb-8 space-y-2 md:space-y-5">
  //         <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
  //           Latest
  //         </h1>
  //         <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
  //           {siteMetadata.description}
  //         </p>
  //       </div>
  //       <ul className="divide-y divide-gray-200 dark:divide-gray-700">
  //         {!posts.length && 'No posts found.'}
  //         {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
  //           const { slug, date, title, summary, tags } = frontMatter
  //           return (
  //             <li key={slug} className="py-12">
  //               <article>
  //                 <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
  //                   <dl>
  //                     <dt className="sr-only">Published on</dt>
  //                     <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
  //                       <time dateTime={date}>
  //                         {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
  //                       </time>
  //                     </dd>
  //                   </dl>
  //                   <div className="space-y-5 xl:col-span-3">
  //                     <div className="space-y-6">
  //                       <div>
  //                         <h2 className="text-2xl font-bold leading-8 tracking-tight">
  //                           <Link
  //                             href={`/blog/${slug}`}
  //                             className="text-gray-900 dark:text-gray-100"
  //                           >
  //                             {title}
  //                           </Link>
  //                         </h2>
  //                         <div className="flex flex-wrap">
  //                           {tags.map((tag) => (
  //                             <Tag key={tag} text={tag} />
  //                           ))}
  //                         </div>
  //                       </div>
  //                       <div className="prose text-gray-500 max-w-none dark:text-gray-400">
  //                         {summary}
  //                       </div>
  //                     </div>
  //                     <div className="text-base font-medium leading-6">
  //                       <Link
  //                         href={`/blog/${slug}`}
  //                         className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
  //                         aria-label={`Read "${title}"`}
  //                       >
  //                         Read more &rarr;
  //                       </Link>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </article>
  //             </li>
  //           )
  //         })}
  //       </ul>
  //     </div>
  //     {posts.length > MAX_DISPLAY && (
  //       <div className="flex justify-end text-base font-medium leading-6">
  //         <Link
  //           href="/blog"
  //           className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
  //           aria-label="all posts"
  //         >
  //           All Posts &rarr;
  //         </Link>
  //       </div>
  //     )}
  //   </>
  // )
}
