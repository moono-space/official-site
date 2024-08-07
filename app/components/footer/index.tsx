import * as React from 'react'
import { FooterMenuList } from './menu'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card'
import Link from 'next/link'

function AuthorHoverStatus(): React.ReactElement {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="cursor-pointer font-medium text-foreground">
          @nyomansunima
        </span>
      </HoverCardTrigger>
      <HoverCardContent className="flex w-96 transition-all duration-300 hover:scale-95">
        <div className="flex w-full gap-3 relative group">
          <div className="flex justify-center items-center h-12 w-12 rounded-xl bg-secondary/35">
            🐔
          </div>
          <div className="flex flex-col flex-1 justify-start items-start">
            <h3 className="text-sm font-medium text-foreground">
              Nyoman Sunima
            </h3>
            <span className="text-sm text-foreground/90 text-clip">
              nyomansunima.one
            </span>

            <p className="text-sm text-foreground/60 mt-3 text-start">
              Creative product designer, developer, writer that create solutions
              for people
            </p>
          </div>

          <Link
            href={'https://nyomansunima.one'}
            target="_blank"
            className="hidden w-7 h-7 rounded-lg bg-secondary/30 border border-border group-hover:flex justify-center items-center absolute top-0 right-0"
          >
            <i className="fi fi-rr-arrow-small-right -rotate-45" />
          </Link>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export default function Footer(): React.ReactElement {
  return (
    <footer className="flex">
      <div className="container mx-auto">
        <div className="flex flex-col mx-auto w-full tablet:w-10/12 laptop:w-7/12">
          <div className="flex flex-col items-center tablet:items-start gap-1 text-foreground/60">
            <p>
              Design in{' '}
              <span className="font-medium text-foreground">
                Bali, Indonesia
              </span>{' '}
              for global audiences
            </p>
            <p>
              Connect with the author <AuthorHoverStatus />
            </p>
            <p>
              Support us by feedback, buy a coffee{' '}
              <span className="text-foreground">💖</span>
            </p>
          </div>

          <div className="flex flex-col tablet:flex-row items-center py-7 justify-between mt-6">
            <span className="text-sm">
              Copyright &copy; 2024 - Alright Reserved
            </span>
            <FooterMenuList />
          </div>
        </div>
      </div>
    </footer>
  )
}
