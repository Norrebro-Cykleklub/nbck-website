import React from 'react';
import Link from './Link';

export default function MemberSection() {
  const openPriceBenefits = (event: OnClickAnchorEvent) => {};

  return (
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
              <strong>Overvejer du at blive medlem?</strong> Nørrebro Cykleklub
              er en klub for engagerede ryttere, der allerede har erfaring med
              at cykle på landvejen. Måske har du i længere tid cyklet faste
              ture med en flok venner eller knoklet på alene, og kunne godt
              tænke dig at blive en bedre rytter gennem træning med
              klubkammerater. Hvis du kan genkende dig selv i nedenstående, så
              er du måske vores nye klubkammerat:
              <ul className="text-muted-white" style={{ marginTop: '1rem' }}>
                <li>
                  En cykeltur på 2-3 timer med indlagte intervaller er lige dig
                  (vi kører selvfølgelig også både kort rolige turer og langfart
                  indimellem)
                </li>
                <li>
                  Du ønsker at blive en bedre, hurtigere og klogere cykelrytter
                  – eller bare holde en god form i godt selskab
                </li>
                <li>
                  Du er tryg ved at køre i en større gruppe eller vil gerne lære
                  det
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
                <Link
                  href="https://www.holdsport.dk/team_invitation/210786/c68090cb68c48920a7f58ebfffa79a0c3ddda228"
                  target="_blank"
                  className="btn btn-xl"
                >
                  Meld mig ind!
                </Link>
              </div>
              <div className="col-md-12 medlemInfoSection">
                <Link onClick={openPriceBenefits} style={{ color: '#1b9400' }}>
                  Medlemsfordele og pris
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
