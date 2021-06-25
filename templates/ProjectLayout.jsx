import HeaderLayout from "components/layout/HeaderLayout"
import { HeroHeader, HeroLayout } from "components/layout/HeroLayout"
import clsx from 'clsx';

import styles from '../styles/ProjectLayout.module.css'

export default function ProjectLayout(props) {
  let { children, frontMatter } = props

    return (
      <div className="main container mx-auto w-75">
        <HeaderLayout { ...props } />
        <main className="xl:my-72 w-11/12 mx-auto">
          <article>
            <HeroLayout>
              <HeroHeader>
                <span>{ frontMatter.title }</span>
              </HeroHeader>
            </HeroLayout>

            <div className="max-h-64 mx-auto mb-5">
              <img
                className="max-h-full rounded-xl rounded-tr-xl max-h-full min-h-full object-scale-down"
                src={ require(`../public${ frontMatter.imageLink }`)}
                width="330" height="250"
              />
            </div>

            <div className={clsx("text-3 text-xl w-full md:w-9/12 mx-auto", styles.content)}>
              { children }
            </div>
          </article>
        </main>
      </div>
    )
}