import Mobilelinks from "../common/mobilelinks";
import Serpostbox from "../components/blog/ser-post-box";
import SEO from "../components/seo";
import Banner from "../components/services/service-details/banner";
import serviceinfo from "../components/services/service-details/serviceinfo";
import FooterFour from "../layout/footer/footer-4";
import HeaderTwo from "../layout/header/header-two";
import Wrapper from "../layout/wrapper";

function obg() {
  return (
    <>
      <Wrapper>
        <SEO pageTitle="Blog" />
        <HeaderTwo />
        {serviceinfo.map((elem) => {
          if (elem.id === 1) {
            return (
              <>
                <Banner name={elem.name} banner={elem.banner} />
                <Serpostbox
                  name={elem.name}
                  img={elem.img}
                  tittle={elem.tittle}
                  link={elem.web}
                  service={elem.service}
                  des={elem.content}
                />
              </>
            );
          }
        })}
        <FooterFour />
        <Mobilelinks />
      </Wrapper>
    </>
  );
}

export default obg;
