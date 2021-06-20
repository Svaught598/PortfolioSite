import HeaderLayout from "components/layout/HeaderLayout"
import { HeroHeader, HeroLayout } from "components/layout/HeroLayout"

export default function ProjectLayout({ children, frontMatter }) {

    return (
        <div className="main container mx-auto w-75">
        <main className="xl:my-72 w-11/12 mx-auto">

          <HeroLayout>
            <HeroHeader>
              <span>{ frontMatter.title }</span>
            </HeroHeader>
          </HeroLayout>

          <div className="text-3 text-xl">
            { children }
          </div>
        </main>
      </div>
    )
}