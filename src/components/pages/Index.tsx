import React from 'react';

interface IndexProps {
  documents: StaticImage[];
  images: StaticImage[];
}

export default function Index({ documents, images }: IndexProps) {
  const headerBg = images.find(img => img.name === 'header-bg');
  const logoSimple = images.find(img => img.name === 'logo_simple');
  const nbckLogo = images.find(img => img.name === 'Norrebro_logo');
  const training = images.find(img => img.name === 'training');
  const races = images.find(img => img.name === 'races');
  const travels = images.find(img => img.name === 'travels');

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" href="index.html#page-top">
            <img
              className="logo-responsive"
              src={logoSimple?.childImageSharp.fluid.srcWebp}
              srcSet={logoSimple?.childImageSharp.fluid.srcSetWebp}
              sizes={logoSimple?.childImageSharp.fluid.sizes}
            />
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a
                  className="nav-link js-menu-trigger"
                  href="index.html#koncept"
                >
                  Koncept
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-menu-trigger"
                  href="index.html#foelgos"
                >
                  Følg
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-menu-trigger"
                  href="index.html#klubliv"
                >
                  Klubliv
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-menu-trigger"
                  href="index.html#medlem"
                >
                  Medlem
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-menu-trigger" href="index.html#omOs">
                  Om os
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <img
              className="img-responsive"
              src={nbckLogo?.childImageSharp.fluid.src}
            />
          </div>
        </div>
        <div className="circleButtonDiv">
          <a
            className="btn btn-circle js-scroll-trigger"
            href="index.html#koncept"
          >
            <i className="fa fa-angle-double-down animated"></i>
          </a>
        </div>
      </header>
      <section className="bg-light" id="koncept">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Koncept</h2>
              <hr />
              <h3 className="section-subheading text-muted">
                Nørrebro Cykleklub bygger på tre grundlæggende idéer:
              </h3>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4 konceptvalue">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-users fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Cykelfællesskab</h4>
              <p className="text-muted">
                Nørrebro Cykleklub er først og fremmest et{' '}
                <span className="highlighted">fællesskab</span> for alle, der
                elsker at cykle. Vi favner eliterytteren, der træner mange timer
                om ugen og kører væddeløb i weekenden, og motionisten, der
                gennem struktureret træning vil blive en endnu bedre rytter i
                godt selskab. Har du lyst til at blive medlem?{' '}
                <a href="index.html#medlem">Læs mere her</a>{' '}
              </p>
            </div>
            <div className="col-md-4 konceptvalue">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-coffee fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Hygge</h4>
              <p className="text-muted">
                Vi har det godt med hinanden, holder en{' '}
                <span className="highlighted">god tone</span> og opfører os
                ordentlig overfor hinanden og andre. I Nørrebro Cykleklub
                handler det i høj grad også om at have det sjovt, når vi ikke
                sidder på cyklen. Det er lirens at være en god kammerat.
              </p>
            </div>
            <div className="col-md-4 konceptvalue">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-rocket fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Nytænkende</h4>
              <p className="text-muted">
                I Nørrebro Cykleklub er det muligt at føre sine{' '}
                <span className="highlighted">idéer</span> ud i livet. Der er
                plads til nytænkning, og vi er ikke bundet af normer for hvordan
                en cykleklub skal fungere. Fokus er altid at skabe de bedste
                betingelser for et sjovt og spændende cykelfællesskab.
                Interesseret i et samarbejde? Så{' '}
                <a href="index.html#" className="kontaktOsLink">
                  skriv
                </a>{' '}
                til os.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <ul className="list-inline quicklinks">
                <li className="list-inline-item">
                  <a href="index.html#omOs">Læs mere om os</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark" id="foelgos">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Følg os</h2>
              <hr />
              <h3 className="section-subheading text-muted">
                Følg Nørrebro Cykleklub der hvor det passer dig:
              </h3>
            </div>
          </div>
          <div className="row text-center foelgOsButtons">
            <div className="col-12">
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a
                    className="facebook"
                    target="_blank"
                    href="https://www.facebook.com/NorrebroCK"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="instagram"
                    target="_blank"
                    href="https://www.instagram.com/norrebro_ck"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    target="_blank"
                    href="https://www.strava.com/clubs/NorrebroCK"
                  >
                    <i className="fa-brands fa-strava"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light" id="klubliv">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Klubliv</h2>
              <hr />
              <h3 className="section-subheading text-muted">
                Herunder kan du læse om, hvad der sker sig i Nørrebro Cykleklub
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6 klubliv-item">
              <a className="klubliv-link" data-val="0">
                <div className="klubliv-hover">
                  <div className="klubliv-hover-content">
                    <h4>Fællestræning</h4>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src={training?.childImageSharp.fluid.src}
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-4 col-sm-6 klubliv-item">
              <a className="klubliv-link" data-val="1">
                <div className="klubliv-hover">
                  <div className="klubliv-hover-content">
                    <h4>Cykelløb</h4>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src={races?.childImageSharp.fluid.src}
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-4 col-sm-6 klubliv-item">
              <a className="klubliv-link" data-val="2">
                <div className="klubliv-hover">
                  <div className="klubliv-hover-content">
                    <h4>Rejser</h4>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src={travels?.childImageSharp.fluid.src}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="row interestedProjects">
            <div className="col-md-12 text-center">
              <p className="projects-interested text-muted">
                Interesseret i et samarbejde? Så{' '}
                <a href="index.html#" className="kontaktOsLink">
                  skriv
                </a>{' '}
                til os.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark" id="medlem">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Medlem</h2>
              <hr />
              <h3 className="section-subheading text-muted-white">
                Bliv en del af Nørrebro Cykleklub
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <p className="text-muted-white">
                <strong>Overvejer du at blive medlem?</strong> Nørrebro
                Cykleklub er en klub for engagerede ryttere, der allerede har
                erfaring med at cykle på landvejen. Måske har du i længere tid
                cyklet faste ture med en flok venner eller knoklet på alene, og
                kunne godt tænke dig at blive en bedre rytter gennem træning med
                klubkammerater. Hvis du kan genkende dig selv i nedenstående, så
                er du måske vores nye klubkammerat:
                <ul className="text-muted-white ">
                  <li>
                    En cykeltur på 2-3 timer med indlagte intervaller er lige
                    dig (vi kører selvfølgelig også både kort rolige turer og
                    langfart indimellem)
                  </li>
                  <li>
                    Du ønsker at blive en bedre, hurtigere og klogere
                    cykelrytter – eller bare holde en god form i godt selskab
                  </li>
                  <li>
                    Du er tryg ved at køre i en større gruppe eller vil gerne
                    lære det
                  </li>
                  <li>
                    Du kender eller vil gerne lære de forskellige tegn og
                    signaler, man benytter, når man cykler i en gruppe
                  </li>
                </ul>
              </p>
            </div>
            <div className="col-md-4">
              <div className="row text-center">
                <div className="col-md-12">
                  <p className="text-muted-white">
                    Vil du gerne være medlem af Nørrebro Cykleklub kan du melde
                    dig ind her:
                  </p>
                  <a
                    href="https://www.holdsport.dk/team_invitation/210786/c68090cb68c48920a7f58ebfffa79a0c3ddda228"
                    target="_blank"
                    className="btn btn-xl"
                  >
                    Meld mig ind!
                  </a>
                </div>
                <div className="col-md-12 medlemInfoSection">
                  <a href="index.html#" id="mereMedlemInfoLink">
                    Medlemsfordele og pris
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light" id="omOs">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Om os</h2>
              <hr />
              <h3 className="section-subheading text-muted">
                Hvem er Nørrebro Cykleklub?
              </h3>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-6 konceptvalue">
              <h4 className="service-heading">Fødslen</h4>
              <p className="text-muted">
                Nørrebro Cykleklub blev stiftet i efteråret 2017 af en blandet
                flok cykelentusiaster, alle med lysten til at skabe et
                inkluderende cykelfællesskab.
              </p>
            </div>
            <div className="col-md-6 konceptvalue">
              <h4 className="service-heading">Formål</h4>
              <p className="text-muted">
                Nørrebro Cykleklub er et cykelfællesskab med base i København.
                Klubben er en frivillig forening, der har til formål at skabe de
                bedste rammer for cykling for dens medlemmer. Vi dyrker primært
                landevejscykling, men der er også åbent for andre former for
                cykling, fx MTB og cross.
              </p>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-6 kontaktOsSection">
              <h4 className="service-heading">Kontakt</h4>
              <p className="text-muted">
                Vi vil meget gerne høre fra dig, hvis du har spørgsmål eller
                noget andet på hjerte. Åben kontakt formularen her:
              </p>
              <button className="btn btn-xl kontaktOsButton">Kontakt</button>
            </div>
            <div className="col-md-6 text-center kontaktOsSection">
              <h4 className="service-heading">Andet</h4>
              <p className="text-muted">
                Er du interesseret i uddybning og detaljerne om Nørrebro
                Cykleklub, så læs vores reglement eller vedtægter her:
              </p>
              <ul className="list-inline quicklinks">
                <li className="list-inline-item">
                  <a href="index.html#" id="reglementLink">
                    Reglement
                  </a>
                </li>

                <li className="list-inline-item">
                  <a href="index.html#" id="vedtaegterLinks">
                    Vedtægter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <span className="copyright">Nørrebro Cykleklub 2022</span>
            </div>
            <div className="col-md-2">
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/norrebro_ck"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a target="_blank" href="https://www.facebook.com/NorrebroCK">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-5">
              <ul className="list-inline quicklinks">
                <li className="list-inline-item">
                  <a href="index.html#" id="privatlivspolitikLink">
                    Privatlivspolitik
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="index.html#" id="vilkaarForBrugLink">
                    Vilkår for brug
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div
        className="nbro-modal modal fade"
        id="nbroModal"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                <div className="rl"></div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-10 mx-auto">
                  <div id="nbroModalBody" className="modal-body"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="nbro-slim-modal modal fade"
        id="nbroSlimModal"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                <div className="rl"></div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-10 mx-auto">
                  <div id="nbroSlimModalBody" className="modal-body"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
