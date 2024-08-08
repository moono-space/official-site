import * as React from 'react'

export function HeroSection(): React.ReactElement {
  return (
    <section className="flex flex-col w-full tablet:w-10/12 laptop:w-7/12 mx-auto py-20 laptop:py-36 gap-16">
      <h2 className="text-2xl laptop:text-3xl font-medium !leading-normal">
        <span className="text-foreground/60">Hello,</span>
        <br />
        We craft & build software, apps, and products to solve people problems.
        Really the world class problems.
      </h2>

      <h2 className="text-2xl laptop:text-3xl font-medium !leading-normal">
        We start from{' '}
        <span className="text-fuchsia-600 cursor-pointer">research</span>,
        <span className="text-orange-600 cursor-pointer"> design</span>, and{' '}
        <span className="text-blue-600 cursor-pointer"> develop</span> small
        application and focus on improve the apps along the way
      </h2>
    </section>
  )
}
