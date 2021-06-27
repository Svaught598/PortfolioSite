import HeaderLayout from "components/layout/HeaderLayout"
import { HeroHeader, HeroLayout } from "components/layout/HeroLayout"
import Link from "components/ui/Link";
import clsx from 'clsx';

import styles from '../styles/ProjectLayout.module.css'

export default function ProjectLayout(props) {
  let { children, frontMatter, darkBackground } = props
  const delayEntrance ="animate__animated animate__fadeInUp delay04"
  const cardBackground = (darkBackground) ? "bg-gray" : "bg-charcoal"

    return (
      <div className="main container mx-auto">
        <HeaderLayout { ...props } />
        <main className="md:my-48 sm:my-36 w-11/12 mx-auto">
          <article className="container mx-auto w-full md:w-9/12 lg:w-9/12">
            <HeroLayout>
              <HeroHeader>
                <span>{ frontMatter.title }</span>
              </HeroHeader>
            </HeroLayout>

            <div className={ clsx(cardBackground, delayEntrance, "p-5 rounded-xl shadow-xl color-transition mb-5") }>
              <div className="mb-5">
                <img
                  className="max-h-full rounded-xl rounded-tr-xl object-scale-down mx-auto w-full"
                  src={ require(`../public${ frontMatter.imageLink }`)}
                  width="330" height="250"
                />
              </div>

              <div className={clsx("text-orange-yellow-crayola text-xl", styles.content)}>
                { children }
              </div>
            </div>
          </article>
        </main>
      </div>
    )
}