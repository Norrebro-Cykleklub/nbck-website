import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { useLayoutContext } from '../Layout/Context';
import Dialog from './Dialog';
import windowSafe from '../utils/windowSafe';
import isEmail from '../../helpers/is-email';

export default function ContactFormDialog() {
  const { contactForm } = useLayoutContext();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const clear = useCallback(() => {
    setSuccess(false);
    setError(false);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  }, []);

  const onClose = useCallback(() => {
    contactForm.hide();
    clear();
  }, [clear, contactForm]);

  const onBackButtonClick = useCallback(() => setError(false), []);

  const submit = useCallback(async () => {
    await axios
      .post(windowSafe?.location.origin + '/.netlify/functions/contactForm', {
        name,
        email,
        phone,
        message,
      })
      .then(() => {
        setSuccess(true);
      })
      .catch(err => {
        const data = err?.response?.data;
        console.error(data?.errorMessage);
        setError(true);
      });
  }, [email, message, name, phone]);

  const canSubmit = [name, isEmail(email), phone, message].every(Boolean);

  return (
    <Dialog
      open={contactForm.visible}
      onClose={onClose}
      backButtonTitle={success ? 'Luk' : 'Tilbage'}
      backButtonOnClick={error ? onBackButtonClick : onClose}
    >
      {success && (
        <>
          <h2 className="breakword">Besked afsendt</h2>
          <p>Tak for din henvendelse. Vi har modtaget din besked.</p>
        </>
      )}
      {error && (
        <>
          <h2 className="breakword">Beskeden kan ikke sendes</h2>
          <p>Der opstod en fejl. Prøv venligst igen senere.</p>
        </>
      )}
      {!success && !error && (
        <>
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
                <div className="col-md-6">
                  <div className="kontaktGroup">
                    <input
                      className="kontaktControl"
                      placeholder="Dit navn *"
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </div>
                  <div className="kontaktGroup">
                    <input
                      type="email"
                      className="kontaktControl"
                      placeholder="Din email *"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      style={{
                        border:
                          email.length && !isEmail(email)
                            ? '1px solid red'
                            : '1px solid rgba(0, 0, 0, 0.15)',
                      }}
                    />
                  </div>
                  <div className="kontaktGroup">
                    <input
                      type="phone"
                      className="kontaktControl"
                      placeholder="Dit telefonnummer *"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="kontaktGroup">
                    <textarea
                      className="kontaktControl"
                      placeholder="Din besked *"
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className="clearfix"></div>
                <div className="col-lg-12 text-center">
                  <button
                    className={canSubmit ? 'btn btn-xl' : 'btn btn-xl disabled'}
                    onClick={submit}
                    disabled={!canSubmit}
                  >
                    Send besked
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Dialog>
  );
}
