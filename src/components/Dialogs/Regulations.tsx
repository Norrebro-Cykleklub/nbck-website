import React from 'react';
import Dialog from './Dialog';

interface RegulationsDialogProps {
  visible: boolean;
  onClose: () => void;
}

export default function RegulationsDialog({
  visible,
  onClose,
}: RegulationsDialogProps) {
  return (
    <Dialog open={visible} onClose={onClose}>
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <div id="nbroModalBody" className="modal-body">
            <div className="reglementContent">
              <h2 className="breakword">Reglement</h2>
              <p></p>
              <h5>Reglement for Nørrebro Cykleklub</h5>
              <br />
              Dette reglement er udarbejdet, for at sikre at medlemmerne af
              Nørrebro Cykleklub udviser en adfærd, som er forenelig med
              klubbens overordnede mål, visioner og værdier. Dette reglement
              skal derfor opfattes som en rettesnor for, hvad der er forventet
              og acceptabel adfærd i regi af Nørrebro Cykleklub. Vi vil ikke
              oversvømmes af regler, men for at sikre klubbens omdømme og
              medlemmernes sikkerhed, forventer vi at reglementet overholdes.
              <br />
              <br />
              Medlemmer af Nørrebro Cykleklub:
              <ul>
                <li>
                  <strong>Spænder hjelmen.</strong> Vi kører selvfølgelig altid
                  med hjelm.
                </li>
                <li>
                  <strong>Overholder færdselsreglerne.</strong> Vi holder for
                  rødt og benytter cykelstierne, hvor det er muligt. Vi kører
                  ikke mere end to personer side-om- side, medmindre særlige
                  omstændigheder tillader det.
                </li>
                <li>
                  <strong>Viser hensyn</strong> til vores medtrafikanter. Her er
                  det er god stil at køre med ringeklokke til træning.
                </li>
                <li>
                  <strong>Passer på hinanden.</strong> Vi udviser særligt hensyn
                  til klubbens andre medlemmer – både nye og erfarne.
                </li>
                <li>
                  <strong>Smider ikke affald</strong> i vejkanten og lader
                  vandet med respekt for lokalområdet.
                </li>
                <li>
                  <strong>Råber ikke ukvemsord</strong> eller udviser fagter af
                  andre trafikanter såvel som klubbens egne medlemmer - også
                  selvom man føler sig forurettet. Et lille vink er selvfølgelig
                  okay, men ingen langemand.
                </li>
                <li>
                  <strong>Venter på hinanden</strong> på træningsture efter
                  defekt eller grundet forskelligt styrkeforhold. Der kan
                  selvfølgelig blive behov for at splitte op i løbet af en tur
                  eller et interval, hvilket som udgangspunkt sker efter aftale
                  i gruppen eller med dagens kaptajn/træningsansvarlige.
                </li>
                <li>
                  <strong>Bidrager til klubkulturen.</strong> Ingen er
                  forpligtet til at bruge alt deres fritid med klubben, men
                  vores fællesskab og klub bliver federe, hvis flest bidrager –
                  både med og uden rammen.
                </li>
                <li>
                  <strong>Nørrebro CK er ren</strong> og tager afstand fra brug
                  af ulovlige præstationsfremmende midler.
                </li>
              </ul>
              I tilfælde af grove brud på reglementet forbeholder bestyrelsen
              sig retten til at ekskludere medlemmer tidsbegrænset eller
              permanent fra klubben.
              <p></p>
            </div>
            <button
              className="btn btn-primary"
              data-dismiss="modal"
              type="button"
              onClick={onClose}
            >
              <i className="fa fa-times"></i>
              Tilbage
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
