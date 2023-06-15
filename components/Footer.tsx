import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { BuiltWith } from './BuiltWith'
import { DevIcon } from './DevIcon'

const isProduction = process.env.NODE_ENV === 'production'

export default function Footer() {
  return (
    <footer>
      <div className="mb-8 mt-16 items-center justify-between space-y-4 md:mb-10 md:flex md:space-y-0">
        <BuiltWith />
        <div className="my-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`Licensed under CC-BY-SA 4.0`}</div>
          <Link href="https://creativecommons.org/licenses/by-sa/4.0/" className="pl-px">
            <DevIcon type="CreativeCommons" className="h-5 w-5" />
          </Link>
          {/* <span>{` • `}</span> */}
          {/* <span>{siteMetadata.footerTitle}</span> */}
        </div>
      </div>
      {isProduction && (
        <div style={{ display: 'none' }}>
          <a href="https://clustrmaps.com/site/1bkv6" title="Visit tracker">
            <img src="//www.clustrmaps.com/map_v2.png?d=0KyBA0hHgu2NUQjPjlIMWsMIM-tfQA7W2X_o3OA7NW8&cl=ffffff" />
          </a>
        </div>
      )}
    </footer>
    // <footer>
    //   <div className="mt-16 flex flex-col items-center">
    //     <div className="mb-3 flex space-x-4">
    //       <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
    //       <SocialIcon kind="github" href={siteMetadata.github} size={6} />
    //       {/* <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} /> */}
    //       {/* <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} /> */}
    //       <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
    //       <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
    //     </div>
    //     <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
    //       <div>{siteMetadata.author}</div>
    //       <div>{` • `}</div>
    //       <div>{`© ${new Date().getFullYear()}`}</div>
    //       <div>{` • `}</div>
    //       <Link href="/">{siteMetadata.title}</Link>
    //     </div>
    //     <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
    //       <Link href="https://github.com/94rain/portfolio">
    //         Built upon Next.js and Tailwind CSS, deployed with Github Actions (Last Updated:{' '}
    //         {new Date().toLocaleDateString()})
    //       </Link>
    //     </div>
    //     {isProduction && (
    //       <div style={{ display: 'none' }}>
    //         <a href="https://clustrmaps.com/site/1bkv6" title="Visit tracker">
    //           <img src="//www.clustrmaps.com/map_v2.png?d=0KyBA0hHgu2NUQjPjlIMWsMIM-tfQA7W2X_o3OA7NW8&cl=ffffff" />
    //         </a>
    //       </div>
    //     )}
    //   </div>
    // </footer>
  )
}
