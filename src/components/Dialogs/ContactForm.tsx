import React from 'react';
import { useLayoutContext } from '../Layout/Context';
import Dialog from './Dialog';

export default function ContactFormDialog() {
  const { contactForm } = useLayoutContext();

  return (
    <Dialog open={contactForm.visible} onClose={contactForm.hide}>
      {({ closeButton }) => (
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div id="nbroModalBody" className="modal-body">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="breakword">Kontakt os</h2>
                  <p className="item-intro text-muted">
                    Hvis du ønsker at vide mere, så send os en besked.
                  </p>
                </div>
              </div>
              <div className="row" id="kontaktModal">
                <div className="col-lg-12">
                  <div className="row">
                    <div id="tokenKontakt">
                      <input
                        name="__RequestVerificationToken"
                        type="hidden"
                        value="gwcWldOOJdqufn3Sy7bPq6G8enTK_98UuSIfuXJLJ24JSBA_PI7aYN-n41r70kZfJ-1v598QlwE8ZQCnv2jwjbsgrxBRSboVM97BdrPBSgw1"
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="kontaktGroup">
                        <input
                          className="kontaktControl"
                          id="nameKontakt"
                          placeholder="Dit navn *"
                        />
                      </div>
                      <div className="kontaktGroup">
                        <input
                          className="kontaktControl"
                          id="emailKontakt"
                          placeholder="Din email *"
                        />
                      </div>
                      <div className="kontaktGroup">
                        <input
                          className="kontaktControl"
                          id="phoneKontakt"
                          placeholder="Dit telefonnummer *"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="kontaktGroup">
                        <textarea
                          className="kontaktControl"
                          id="messageKontakt"
                          placeholder="Din besked *"
                        ></textarea>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-lg-12 text-center">
                      <button id="sendMessageButton" className="btn btn-xl">
                        Send besked
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {closeButton}
            </div>
          </div>
        </div>
      )}
    </Dialog>
  );
}
