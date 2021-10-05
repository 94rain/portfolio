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
        <div className="pt-6 pb-14 space-y-2 md:space-y-5">
          
        </div>
        
        <div className="items-start space-y-2 xl:grid xl:grid-cols-1 xl:gap-x-8 xl:space-y-0">

          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-1">
            <h2>
              Shuyang Ji
            </h2>
            <p>
              Hello, my name is Shuyang Ji. I am a junior studying Mathematics and Computer Science at the University of Illinois at Urbana-Champaign.
            </p>
            <p>
              My interests broadly lie in the field of Systems and networking, Software Engineering and Programming languages.
            </p>
          </div>
              <div>
                  <li><a class="mr-3 text-sm font-medium text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 text-decoration: none" href="./blog/biography" data="">More about me</a></li> 
                  <li>Email: <a class="mr-3 text-sm font-medium text-blue-500 hover:text-blue-600 dark:hover:text-blue-400" href="mailto:sji15@illinois.edu" data="">sji15@illinois.edu</a></li> 
                  <li>GitHub: <a class="mr-3 text-sm font-medium text-blue-500 hover:text-blue-600 dark:hover:text-blue-400" target="_blank" href="https://github.com/94rain" data="">94rain</a></li> 
                  <li>Linkedin: <a class="mr-3 text-sm font-medium text-blue-500 hover:text-blue-600 dark:hover:text-blue-400" target="_blank" href="https://www.linkedin.com/in/shuyang-ji/" data="">Shuyang Ji</a></li> 
              </div>
        </div>
    </>
  )
}
