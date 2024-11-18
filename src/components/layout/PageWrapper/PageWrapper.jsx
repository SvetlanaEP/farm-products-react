import { headerContent } from "../../../mocks/data"
import { advantagesSection } from "../../../mocks/data"
import Header from "../Header/Header"

import { Fragment, useState } from "react"
import MainHeaderSection from "../../blocks/MainHeaderSection"
import AdvantagesSection from "../../blocks/AdvantagesSection"
import Footer from "../Footer/Footer"


function PageWrapper() {

  return (
    <Fragment>
      <Header />
      <main>
        <MainHeaderSection  title={headerContent.title} subtitle={headerContent.subtitle}/>
        <AdvantagesSection title={advantagesSection.title} />
      </main>
      <Footer />
    </Fragment>
  )
}

export default PageWrapper
