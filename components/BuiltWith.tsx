import siteMetadata from '~/data/siteMetadata'
import { DevIcon } from './DevIcon'
import Link from './Link'

export function BuiltWith() {
  return (
    <div className="flex items-center space-x-1">
      <span className="mr-1 text-gray-500 dark:text-gray-400">Built with</span>
      <div className="flex space-x-1.5">
        <Link href="https://nextjs.org?ref=sji15.web.illinois.edu">
          <DevIcon type="NextJS" className="h-5 w-5" />
        </Link>
        <Link href="https://tailwindcss.com?ref=sji15.web.illinois.edu">
          <DevIcon type="TailwindCSS" className="h-5 w-5" />
        </Link>
        <Link href="https://www.prisma.io?ref=sji15.web.illinois.edu">
          <DevIcon type="Prisma" className="h-5 w-5" />
        </Link>
        <Link href="https://www.typescriptlang.org?ref=sji15.web.illinois.edu">
          <DevIcon type="Typescript" className="h-5 w-5" />
        </Link>
        <Link href="https://umami.is?ref=sji15.web.illinois.edu" className="pl-px">
          <DevIcon type="Umami" className="h-5 w-5" />
        </Link>
        {/* <Link href="https://github.com" className="pl-px">
          <DevIcon type="Git" className="h-5 w-5" />
        </Link>
        <Link href="https://github.com" className="pl-px">
          <DevIcon type="Github" className="h-5 w-5" />
        </Link> */}
        <Link href="https://github.com/features/actions" className="pl-px">
          <DevIcon type="Actions" className="h-5 w-5" />
        </Link>
      </div>
      <span className="px-1 text-gray-400 dark:text-gray-500">-</span>
      <Link
        href={siteMetadata.siteRepo}
        className="text-gray-500 underline underline-offset-4 dark:text-gray-400"
      >
        <span className="umami--click--view-source">
          Last Updated: {new Date().toLocaleDateString()}
        </span>
      </Link>
    </div>
  )
}
