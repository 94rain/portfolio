import React from '~/icons/react.svg'
import Git from '~/icons/git.svg'
import Javascript from '~/icons/javascript.svg'
import Typescript from '~/icons/typescript.svg'
import Node from '~/icons/nodejs.svg'
import Bash from '~/icons/bash.svg'
import Liquid from '~/icons/liquid.svg'
import Markdown from '~/icons/markdown.svg'
import NextJS from '~/icons/nextjs.svg'
import TailwindCSS from '~/icons/tailwind.svg'
import Prisma from '~/icons/prisma.svg'
import Umami from '~/icons/umami.svg'
import Vercel from '~/icons/vercel.svg'
import Railway from '~/icons/railway.svg'
import Spotify from '~/icons/spotify.svg'
import Github from '~/icons/github.svg'
import Actions from '~/icons/actions.svg'
import CreativeCommons from '~/icons/creative-commons.svg'

export const DevIconsMap = {
  React,
  Git,
  Javascript,
  Typescript,
  Node,
  Bash,
  Liquid,
  Markdown,
  NextJS,
  TailwindCSS,
  Prisma,
  Umami,
  Vercel,
  Railway,
  Spotify,
  Github,
  Actions,
  CreativeCommons
}

export function DevIcon(props: { type: keyof typeof DevIconsMap; className?: string }) {
  const { type, className } = props
  const Icon = DevIconsMap[type]
  if (!Icon) return <div>Missing icon</div>

  const defaultClass = 'h-16 w-16 lg:h-14 lg:w-14 xl:h-24 xl:w-24'
  return <Icon className={className || defaultClass} fill="currentColor" />
}
