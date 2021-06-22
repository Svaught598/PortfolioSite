import HeaderLayout from "components/layout/HeaderLayout"
import { HeroHeader, HeroLayout } from "components/layout/HeroLayout"
import clsx from 'clsx';

import styles from '../styles/ProjectLayout.module.css'

export default function ProjectLayout({ children, frontMatter }) {

    return (
      <div className="main container mx-auto w-75">
        <HeaderLayout />
        <main className="xl:my-72 w-11/12 mx-auto">

          <HeroLayout>
            <HeroHeader>
              <span>{ frontMatter.title }</span>
            </HeroHeader>
          </HeroLayout>

          <div className={clsx("text-3 text-xl", styles.content)}>
            { children }
          </div>
        </main>
      </div>
    )
}