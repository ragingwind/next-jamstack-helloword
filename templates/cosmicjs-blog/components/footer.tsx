import Container from './container'

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-400">
      <Container>
        <div className="py-24 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl font-bold text-center lg:text-left mb-10 lg:mb-0 lg:w-1/2">
            Statically Generated with Next.js.
          </h3>
          <div className="flex flex-col lg:flex-row justify-end items-center pl-4 w-1/2">
            <a href={'https://github.com/ragingwind/next-templates/templates'} className="mx-3 font-medium hover:underline">
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
