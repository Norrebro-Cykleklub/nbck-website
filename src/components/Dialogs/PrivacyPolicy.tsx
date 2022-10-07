import React from 'react';
import Dialog from './Dialog';

interface PrivacyPolicyDialogProps {
  visible: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyDialog({
  visible,
  onClose,
}: PrivacyPolicyDialogProps) {
  return (
    <Dialog open={visible} onClose={onClose}>
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <div id="nbroModalBody" className="modal-body">
            <div className="privatlivspolitikContent">
              <h2 className="breakword">Privatlivspolitik</h2>
              <p></p>
              <h5>Privatlivspolitik for Nørrebro Cykleklub</h5>
              <h6>24. maj 2018</h6>
              <br />
              <strong>Nørrebro Cykleklubs dataansvar</strong> <br />
              Vi behandler personoplysninger og har derfor vedtaget denne
              privatlivspolitik, der kort fortæller dig, hvordan vi behandler
              dine personoplysninger til sikring af en fair og gennemsigtig
              behandling.
              <br />
              <br />
              Gennemgående for vores databehandling er, at vi kun behandler
              personoplysninger til bestemte formål og ud fra berettigede
              (legitime) interesser. Vi behandler kun personoplysninger, der er
              relevante og nødvendige til opfyldelse af de angivne formål, og vi
              sletter dine oplysninger, når de ikke længere er nødvendige.
              <br />
              <br />
              <strong>Kontaktoplysninger på den dataansvarlige</strong> <br />
              Nørrebro Cykleklub er dataansvarlig, og vi sikrer, at dine
              personoplysninger behandles i overensstemmelse med lovgivningen.
              Kontaktoplysninger:
              <ul>
                <li>Kontaktperson: Tobias Johan Sørensen</li>
                <li>Adresse: Struenseegade 23, 3. tv., 2200 København N</li>
                <li>CVR: 39018187</li>
                <li>Telefonnr.: 22 88 62 18</li>
                <li>Mail: norrebrock@gmail.com</li>
                <li>Website: http://norrebrock.dk/</li>
              </ul>
              <strong>Behandling af personoplysninger</strong> <br />
              Vi behandler følgende personoplysninger:
              <ul>
                <li>
                  Medlemsoplysninger - almindelige personoplysninger i form af
                  registrerings- og kontaktoplysninger som navn, telefonnummer
                  og e-mailadresse.
                </li>
              </ul>
              <strong>Her indsamler vi oplysninger fra</strong> <br />
              Vi får udelukkende oplysningerne fra dig.
              <br />
              <br />
              <strong>
                Foreningens formål med behandling af dine personoplysninger
              </strong>{' '}
              <br />
              Vi behandler dine personoplysninger til bestemte formål, når vi
              har en lovlig grund.
              <br />
              <br />
              Lovlige grunde til behandling er særligt:
              <ul>
                <li>
                  Foreningens berettigede (legitime) interesser i at behandle
                  dine oplysninger (interesseafvejningsreglen)
                </li>
                <li>Behandling efter lovkrav</li>
                <li>Behandling med samtykke</li>
              </ul>
              Formålene med behandling af medlemsoplysninger:
              <ul>
                <li>
                  Foreningens medlemshåndtering, herunder kontingentopkrævning
                </li>
                <li>
                  Som led i foreningens idrætsaktiviteter og andre aktiviteter,
                  herunder planlægning, gennemførelse og opfølgning
                </li>
                <li>Opfyldelse af lovkrav, herunder folkeoplysningsloven</li>
                <li>Levering af varer og ydelser du har bestilt</li>
                <li>Administration af din relation til os</li>
              </ul>
              <strong>
                Vi behandler kun personoplysninger ud fra legitime interesser
              </strong>{' '}
              <br />I det omfang vi behandler dine medlemsoplysninger på
              baggrund af interesseafvejningsreglen, vil denne behandling
              udelukkende være motiveret af berettigede (legitime) interesser
              som:
              <ul>
                <li>
                  Udøvelse af idrætsaktivitet, herunder udfærdigelse af
                  holdkort, holdopstillinger, interne resultatlister m.v.
                </li>
                <li>
                  Håndtering af dine medlemsrettigheder i henhold til
                  vedtægterne m.v., herunder i forhold til generalforsamling
                </li>
                <li>
                  Opfyldelse af medlemspligter, herunder opkrævning og betaling
                  af kontingent m.v.
                </li>
                <li>
                  Afholdelse af sociale arrangementer, sportslige aktiviteter
                  samt andre aktiviteter
                </li>
                <li>
                  Brug af situationsbilleder taget i foreningen, der afbilder en
                  konkret aktivitet eller situation i foreningen
                </li>
                <li>
                  Af praktiske og administrative hensyn opbevarer vi dine
                  almindelige medlemsoplysninger også i en periode efter din
                  udmeldelse af foreningen
                </li>
                <li>
                  Bevaring af oplysninger med historisk værdi til statistik og
                  lignende
                </li>
              </ul>
              <strong>Samtykke</strong> <br />
              Oftest vil vores behandling af dine personoplysninger basere sig
              på et andet lovligt grundlag end samtykke. Vi indhenter derfor kun
              dit samtykke, når det i sjældne tilfælde er nødvendigt for at
              behandle dine personoplysninger til de formål, der er beskrevet
              ovenfor.
              <br />
              <br />
              Hvis vi indhenter dit samtykke, er det frivilligt, om du vil give
              samtykke, og du kan til enhver tid trække det tilbage ved at give
              os besked om det.
              <br />
              <br />
              Når vi indhenter personoplysninger om børn og unge, foretager vi
              en vurdering af, om barnet selv er i stand til at afgive de
              pågældende personoplysninger. Hvis ikke, indhenter vi samtykke fra
              en forælder. Vores udgangspunkt er 15 år.
              <br />
              <br />
              <strong>Videregivelse af dine personoplysninger</strong> <br />
              Vi videregiver ikke personoplysninger til firmaer til
              markedsføring uden dit samtykke.
              <br />
              <br />
              <strong>
                Opbevaring og sletning af dine personoplysninger
              </strong>{' '}
              <br />
              Vi vil opbevare dine personoplysninger i en periode fra
              medlemskabets ophør og i overensstemmelse med følgende kriterier:
              <ul>
                <li>
                  Af praktiske og administrative hensyn opbevarer vi dine
                  almindelige medlemsoplysninger i op til 3 år efter
                  kalenderåret for din udmeldelse af foreningen
                </li>
              </ul>
              Vi opbevarer dog oplysninger på medlemmer til statistik og
              lignende, så længe de har historisk værdi.
              <br />
              <br />
              <strong>Dine rettigheder</strong> <br />
              Du har en række særlige rettigheder efter persondataforordningen,
              når vi behandler personoplysninger om dig:
              <ul>
                <li>Retten til at blive oplyst om behandlingen af data</li>
                <li>Retten til indsigt i egne personoplysninger</li>
                <li>Retten til berigtigelse</li>
                <li>Retten til sletning</li>
                <li>Retten til begrænsning af behandling</li>
                <li>
                  Retten til dataportabilitet (udlevering af data i et
                  almindeligt anvendt format)
                </li>
                <li>Retten til indsigelse</li>
              </ul>
              Du kan gøre brug af dine rettigheder, herunder gøre indsigelse mod
              vores behandling, ved at henvende dig til os. Vores
              kontaktoplysninger finder du øverst.
              <br />
              <br />
              Hvis du f.eks. henvender dig med en anmodning om at få rettet
              eller slettet dine personoplysninger, undersøger vi, om
              betingelserne er opfyldt, og gennemfører i så fald ændringer eller
              sletning så hurtigt som muligt.
              <br />
              <br />
              Du kan altid indgive en klage til en
              databeskyttelsestilsynsmyndighed, f.eks. Datatilsynet.
              <br />
              <br />
              <strong>Revidering af privatlivspolitikken </strong> <br />
              Vi forbeholder os retten til at foretage ændringer i denne
              privatlivspolitik fra tid til anden. Ved ændringer vil datoen
              øverst i privatlivspolitikken blive ændret. Den til enhver tid
              gældende privatlivspolitik vil være tilgængelig på vores websted.
              Ved væsentlige ændringer vil du modtage meddelelse herom.
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
