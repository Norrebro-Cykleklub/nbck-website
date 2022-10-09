import React from 'react';
import Dialog from './Dialog';

interface PriceBenefitsDialogProps {
  visible: boolean;
  onClose: () => void;
}

export default function PriceBenefitsDialog({
  visible,
  onClose,
}: PriceBenefitsDialogProps) {
  return (
    <Dialog open={visible} onClose={onClose}>
      <h2 className="breakword">Medlemsfordele og pris</h2>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-3x">
            <i className="fa fa-plus fa-stack-1x"></i>
          </span>
          <p className="text-muted">
            Som medlem i Nørrebro Cykleklub får du adgang til alle klubbens
            aktiviteter, træninger, klubtøj og andre medlemsfordele. Medlemmer
            kan tegne både motions- og elitelicens gennem klubben. Du er
            velkommen til at træne med os et par gange inden du melder dig ind,
            for at se om det er noget for dig.
          </p>
        </div>
        <div className="col-md-8">
          <span className="fa-stack fa-3x">
            <i className="fa fa-money fa-stack-1x"></i>
          </span>
          <p className="text-muted">
            Det koster 200 kr. hvert halve år at være medlem, og
            betalingsperioderne løber fra 1. januer til 30. juni og fra 1. juli
            til 31. december. Melder du dig ind med under 2 måneder tilbage af
            en betalingsperiode, skal du ikke betale for den igangværende
            periode. Hvis du vil køre licenscykelløb, skal du også betale et
            licensgebyr, én gang årligt, på 200 kr til klubben. Pengene går til
            at dække klubbens begrænsede omkostninger og investeres i at skabe
            de bedste rammer for vores medlemmer - dette er fx medlemskab hos
            Danmarks Cykle Union, fællesarrangementer og indkøb af ekstra
            klubtøj.
          </p>
        </div>
      </div>
    </Dialog>
  );
}
