import Link from 'next/link'
import { Button } from '~/components/ui/button'

function PillItem({ href, children }) {
  return (
    <Button
      asChild
      variant={'outline'}
      size={'lg'}
      className="h-16 px-7 transition-all duration-500 hover:scale-95 bg-ambient hover:bg-ambient"
    >
      <Link href={href} target="_blank">
        {children}
      </Link>
    </Button>
  )
}

export default function ContactList() {
  const contacts = [
    { label: 'Send Me Email', href: 'mailto:nyomansunima@gmail.com' },
    {
      label: 'Schedule Meeting',
      href: 'https://cal.com/nyomansunima/build-opportunity',
    },
    { label: 'Github', href: 'https://github.com/moono-space' },
    { label: 'Dribbble', href: 'https://dribbble.com/nyomansunima' },
    { label: 'Layers', href: 'https://layers.to/nyomansunima' },
    { label: 'Twitter', href: 'https://twitter.com/nyomansunima' },
    { label: 'Instagram', href: 'https://instagram.com/nyomansunima' },
    { label: 'Facebook', href: 'https://facebook.com/nyomansunima' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/nyomansunima' },
  ]

  return (
    <div className="flex flex-wrap justify-center items-center mt-16 gap-4 tablet:w-10/12 laptop:w-6/12">
      {contacts.map((item, index) => (
        <PillItem href={item.href} key={index}>
          {item.label}
        </PillItem>
      ))}
    </div>
  )
}
