import React from 'react';
import line from '../assets/images/line.png';
import dots from '../assets/images/dots.png';
import msg from '../assets/images/msg.png';
import phone from '../assets/images/phone.png';
import person1 from '../assets/images/testoni.png';
import person2 from '../assets/images/Gavioli.png';
import person3 from '../assets/images/Massimo.png';
import sq from '../assets/images/sq.png';
import eq from '../assets/images/eq.png';
import donald from '../assets/images/donald.png';
import splash from '../assets/images/splash.png'
import G1 from '../assets/images/G1.png';
import G2 from '../assets/images/G2.png';
import G3 from '../assets/images/G3.png';
import G4 from '../assets/images/G4.png';
import V1 from '../assets/images/V1.png';
import V2 from '../assets/images/V2.png';
import V3 from '../assets/images/V3.png';
import V4 from '../assets/images/V4.png';
import V5 from '../assets/images/V5.png';
import V6 from '../assets/images/V6.png';
import V7 from '../assets/images/V7.png';
import V8 from '../assets/images/V8.png';
import location from '../assets/images/location.png';
import minus from '../assets/images/minus.png';
import plus from '../assets/images/plus.png';
import V9 from '../assets/images/V9.png';
import V10 from '../assets/images/V10.png';
import V11 from '../assets/images/V11.png';
import V12 from '../assets/images/V12.png';
import V13 from '../assets/images/V13.png';
import V14 from '../assets/images/V14.png';
import V15 from '../assets/images/V15.png';
import light from '../assets/images/light.png';
import bulb from '../assets/images/bulb.png';
import dot from '../assets/images/dot.png';
import arrow from '../assets/images/arrow-dot.png';
// import pattern1 from '../assets/images/pattern1.png';


function Home() {
    return (
        <>
            <div>
                <div className='container g-0'>
                    <ul className=' d-flex justify-content-between'>
                        <li className='font-regular font-14 text-success'>Home</li>
                        <li className='font-regular font-14'>Chai Siamo</li>
                        <li className='font-regular font-14'>S.I.R.E</li>
                        <li className='font-regular font-14'>Why SIRE</li>
                        <li className='font-regular font-14'>SIRE Features</li>
                        <li className='font-regular font-14'>SIRE Product</li>
                        <li className='font-regular font-14'>How it works?</li>
                    </ul>
                </div>
                <div className='first-pg d-flex justify-content-center'>
                    <div className=' d-block text-center text-light'>
                        <h2 className='font-bold font-48'><b>ll tuo accesso al sole</b></h2>
                        <p className='font-regular font-14'>Sistemi fotovoltaivci intelligenti ad uso residenziale, anche in assenza di tetto.<br /> La tua fonte d'energia, gratuita e sostenibile</p>

                    </div>
                </div>
                <div className='second-main'>
                    <div className='second-pg mt-5 text-center'>
                        <h2 className='font-medium heading2'>
                            CHI SIAMO
                        </h2>
                        <div>
                            <img className='bottom-bar' src={line} alt="" />
                        </div>
                        <div className='d-flex justify-content-center'>
                            <p className='mx-5 font-regular font-14 heading2'>
                                Solar Innovatio è una PMI innovativa italiana specializzata nella progettazione e realizzazione di sistemi fotovoltaici intelligenti. Solar Innovatio unisce alla decennale esperienza maturata nel panorama italiano nell'ambito delle soluzioni fotovoltaiche un approccio ingegneristico, innovativo, digitale alla principale fonte di energia rinnovabile.
                            </p>
                        </div>
                    </div>
                    <div className='container'>
                        <img className='dot-img' src={dots} alt="" />
                    </div>
                </div>
                <div className='third-main'>
                    <div className='third-pg container d-flex justify-content-around'>
                        <div className='row g-0'>
                            <div className='third-main-one col-xl-4 col-lg-6 text-center'>
                                <div className='third-main-child-one mx-2'>
                                    <img src={person1} alt="" />
                                    <h5 className='heading5 font-regular'>Cristian Testoni</h5>
                                    <p>Ingegnere Meccanico, MBA. Ho ricoperto cariche di consulente e progettista in aziende meccaniche. Ho avviato come imprenditore svariate iniziative in ambito Automotive e mobilità elettrica. </p>
                                </div>
                            </div>

                            <div className='third-main-two col-xl-4 col-lg-6 text-center'>
                                <div className='third-main-child-two mx-2'>

                                    <img src={person2} alt="" />
                                    <h5 className='heading5 font-regular'>Fransico Gavioli</h5>
                                    <p>Nel corso degli anni ho maturato una profonda conoscenza nella progettazione e realizzazione di impianti elettrici e di energia rinnovabile. Dal 2020 sono fondatore di Gavioli Impianti, azienda all’avanguardia nell’installazione di impianti fotovoltaici </p>
                                </div>
                            </div>
                            <div className='third-main-three col-xl-4 col-lg-6 text-center'>
                                <div className='third-main-child-three mx-2'>
                                    <img src={person3} alt="" />
                                    <h5 className='heading5 font-regular'>Massimo Fabi</h5>
                                    <p>Laurato in Economia e Commercio mi sono occupato per anni di Business Development sia in multinazionali che PMI italiane in differenti settori</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div><br />
                <div className='forth-main px-5'>
                    <div className='row g-0'>
                        <div className='col text-end'><img src={sq} alt='' /></div>
                        <div className='forth-pg col-10 text-center font-medium'>
                            Non sviluppiamo pannelli fotovoltaici. Il pannello è solo una componente di una soluzione ingegneristica più completa che comprende sensoristiche avanzate e l'integrazione con i sistemi domotici di casa.
                        </div>
                        <div className='col-1 text-start'><img src={eq} alt='' /></div>
                    </div>
                    <div className='text-green text-center font-medium mt-4'>-- Cristian Testoni --</div>
                </div>
                <div className='fifth-main container'>
                    <div className='row g-0'>
                            <div className='dots'><img src={dots} alt="" /></div>
                        <div className='col-xl-6 col-lg-12 text-center'>
                            <div className='first-image'><img className='fImage' src={donald} alt="" /></div>
                            <div className='second-image'><img className='sImage' src={splash} alt="" /></div>
                        </div>
                        <div className='col-xl-6 col-lg-12'>
                            <div><img className='head-dots' src={dots} /></div>
                            <h3 className='text-green font-regular fifth-heading'>S.I.R.E</h3>
                            <h3 className='font-regular fifth-heading2'>Smart Integrated Renewable Energy</h3>
                            <img src={line} alt="" />
                            <p className='font-regular fifth-para'>
                                S.I.R.E. è il primo sistema fotovoltaico intelligente al mondo per la produzione, conversione e gestione dell'energia solare, studiato specificatamente per installazioni all'interno di condomini.
                            </p>

                        </div>
                    </div>
                </div>
                <div className='sixth'>
                <div className='sixth-main container mt-4 mb-5'>
                    <div className='heading-sixth text-center'>
                        <h3 className='font-medium'>Connesso, Intelligente, Resistente</h3>
                        <img src={line} alt=""></img>
                    </div>
                    <div className='row mt-4 g-0'>
                        <div className='col-xl-6 col-lg-12'>
                            <div className='row g-0'>
                                <div className='col-1'>
                                    <img src={V10} />
                                </div>
                                <div className='col-11'>
                                    <h6 className='font-medium'>Versetile</h6>
                                    <p className='font-regular'>
                                        Installabile in qualsiasi balcone anche all'interno del condominio. Non richiede autorizzazioni ne opere murarie. Utile anche come schermatura solare
                                    </p>
                                </div>
                            </div>
                            <div className='row g-0'>
                                <div className='col-1'>
                                    <img src={V11} />
                                </div>
                                <div className='col-11'>
                                    <h6 className='font-medium'>Automatizzato</h6>
                                    <p className='font-regular'>
                                        Totalmente automatico e retraibile, S.I.R.E regola la quantità di sole in casa in base alle necessità. Un perfetto connubio tra sole e ombra. I suoi sensori regolano l'esposizione in base alle condizioni atmosferiche.
                                    </p>
                                </div>
                            </div><br />
                            <div className='row g-0'>
                                <div className='col-1'>
                                    <img src={V12} />
                                </div>
                                <div className='col-11'>
                                    <h6 className='font-medium'>Efficiente</h6>
                                    <p className='font-regular'>
                                        Il sistema di accumulo permette di conservare l'energia generata in eccesso e renderla disponibile quando serve, per esempio di sera o in giornate nuvolose.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-6 col-lg-12'>
                            <div className='row'>
                                <div className='col-1'>
                                    <img src={V13} />
                                </div>
                                <div className='col-11'>
                                    <h6 className='font-medium'>Indipendente e Green</h6>
                                    <p className='font-regular'>
                                        dalle fonte non rinnovabili non è più un’utopia. S.i.r.e. fornisce l’accesso a fonti energetiche green anche a chi non ha un tetto di proprietà.
                                    </p>
                                </div>
                            </div><br />
                            <div className='row'>
                                <div className='col-1'>
                                    <img src={V14} />
                                </div>
                                <div className='col-11'>
                                    <h6 className='font-medium'>Connesso</h6>
                                    <p className='font-regular'>
                                        Il sistema si connette ai dispositivi Alexa, Google, elettrodomestici 2.0 wi-fi. Tramite l’app accedi ai dati di produzione dell’energia e ricevi notifiche e suggerimenti per l’utilizzo ottimale dell’energia autoprodotta.
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-1'>
                                    <img src={V15} />
                                </div>
                                <div className='col-11'>
                                    <h6 className='font-medium'>Resistente</h6>
                                    <p className='font-regular'>
                                        Il sistema è realizzato con un rivestimento protettivo, impermeabile, isolante e resistente a fenomeni atmosferici aggressivi, all’abrasione, urti e graffi.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className='seventh-main mt-4'>
                    <div className='heading-seventh text-center mb-4'>
                        <h3 className='font-medium'>Perchè S.I.R.E.</h3>
                        <img src={line} alt=""></img>
                    </div>
                    <div className="container seventh-container">
                    <div className='row seventh-row text-center g-0'>
                        <div className='col-xl col-lg-6 col-md-12 mx-3 shadow p-3 mb-5 bg-white rounded'>
                            <img src={G1} />
                            <h6 className='my-3 font-medium seventh-h6'>Risparmio Energetico</h6>
                            <p className='font-regular'>Risparmia da un minimo del 60% sulla bolletta fino all'indipendenza energetica anche grazie alla schermatura solare che consente una riduzione fino al 95% dei raggi UV e quindi un minor utilizzo del condizionatore.</p>
                        </div>
                        <div className='col-xl col-lg-5 col-md-12 mx-3 shadow p-3 mb-5 bg-white rounded'>
                            <img src={G2} />
                            <h6 className='my-3 font-medium seventh-h6'>Mobilità Elettrica</h6>
                            <p className='font-regular'>L'unica soluzione che rende l’utilizzo di un’auto elettrica veramente economico.  L’efficienza dei pannelli e le batterie di accumulo garantiscono fino a 29.000 chilometri annui a emissioni zero.</p>
                        </div>
                        <div className='col-xl mx-3 shadow p-3 mb-5 bg-white rounded'>
                            <img src={G3} />
                            <h6 className='my-3 font-medium seventh-h6'>Comunità Energetica</h6>
                            <p className='font-regular'>Dal concetto di condominio al concetto di comunità energetica: Si.Re. è il sistema che rende possibile realizzare una Comunità Energetica Rinnovabile senza acquisto di energia elettrica dalla rete.</p>
                        </div>

                    </div>
                    </div>
                    <div className='seventh-child d-flex justify-content-around'>
                        <div className='row text-center container g-0 px-3 py-2'>
                            <div className='col-xl col-lg-6 col-md-12 shadow p-3 mb-2 bg-white rounded mx-2'>
                                <img src={V1} />
                                <h6 className='font-medium my-2'>110%</h6>
                                <p className='font-regular seventh-para'>SUPERBONUS</p>
                            </div>
                            <div className='col-xl col-lg-5 col-md-12 shadow p-3 mb-2 bg-white rounded mx-2'>
                                <img src={V2} />
                                <h6 className='font-medium my-2'>65%</h6>
                                <p className='font-regular seventh-para'>DETRAZIONE DOMOTICA</p>

                            </div>
                            <div className='col-xl col-lg-6 col-md-12 shadow p-3 mb-2 bg-white rounded mx-2'>
                                <img src={V3} />
                                
                                <p className='font-regular mt-3 seventh-para'>PROGETTAZIONE <br /> PERSONALIZZETA</p>

                            </div>
                            <div className='col shadow p-3 mb-2 bg-white rounded mx-2'>
                                <img src={V4} />
                                <p className='font-regular mt-3 seventh-para'>CONULENZA FISCALE SUI<br /> BONUS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='eighth-main container mt-5'>
                    <div className='heading-8th text-center mb-4'>
                        <h3 className='font-medium eighth-h3'>Scegli il tuo SIRE</h3>
                        <img src={line} alt=""></img>
                    </div>
                    <div className='row'>
                        <div className='col-xl col-lg-12 mx-4 shadow p-3 mb-2 bg-white rounded'>
                            <img className='light-image w-100' src={light} />
                            <h6 className='text-green font-medium my-4 eighth-h6'>S.I.R.E Direct</h6>
                            <img className='my-2' src={arrow} /> <span className='font-regular'>Sistema Plugin</span><br />
                            <img className='my-2' src={arrow} /> <span className='font-regular'>Struttura meccanizzata in poliuera e sensoristica intelligente</span><br />
                            <img className='my-2' src={arrow} /> <span className='font-regular'>Pannelli alta efficienza da 1KW</span><br />
                            <img className='my-2' src={arrow} /> <span className='font-regular'>Inverter e conne ssione aII'impianto domestico</span><br />
                            <img className='my-2' src={arrow} /> <span className='font-regular'>App di controllo e gesti one</span><br /><br />
                            <h6 className='font-regular mb-3'><b>CONSIGLIATO PER:</b> </h6>
                            <div className='row'>
                                <div className='col-2 text-center'>
                                    <div className=''>
                                        <img className='vector2' src={V2} />
                                    </div>
                                    <p>Devices</p>
                                </div>
                                <div className='col-2 text-center'>
                                    <img className='vector5' src={V5} />
                                    <p>Families</p>
                                </div>
                            </div>
                            <h6 className='font-medium'>Scopri le caratteristiche tecniche</h6>
                            <img src={dot} /> <span className='font-regular'>Te mpo di ricarica medio in estate</span><br />
                            <img src={dot} /> <span className='font-regular'>TBD Tempo di scarica a 16A.</span><br />
                            <img src={dot} /> <span className='font-regular'>TBD Autonomia dalla rete elettrica.</span><br />
                            <img src={dot} /> <span className='font-regular'>TBD Autonomia in casa di blackout.</span><br />
                            <img src={dot} /> <span className='font-regular'>2gg Immissione di CO2 da 1.022 kg a SOO kg annui</span><br />
                            <img src={dot} /> <span className='font-regular'>Te mpo di ricarica medio in estate.</span><br />
                        </div>
                        <div className='col-xl col-lg-12 shadow p-3 mb-2 bg-white rounded'>
                            <img className='bulb-image w-100 ' src={bulb} />
                            <h6 className='text-green font-medium my-4 eighth-h6'>S.I.R.E Full</h6>
                            <img className='my-2' src={arrow} /> <span className='font-regular'>Struttura meccanizzata in poliuera e sensoristica intelligente</span><br />
                            <img className='my-2' src={arrow} /> <span className='font-regular'>Pannelli alta efficienza da 1KW</span><br />
                            <img className='my-2' src={arrow} /> <span className='font-regular'>Inverter e conne ssione aII'impianto domestico</span><br />
                            <img className='my-2' src={arrow} /> <span className='font-regular'>App di controllo e gesti one</span><br /><br /><br />
                            <h6 className='font-regular mb-3'><b> CONSIGLIATO PER:</b></h6>
                            <div className='row'>
                                <div className='col-2 text-center'>
                                    <div className=''>
                                        <img className='vector2' src={V2} />
                                    </div>
                                    <p>Devices</p>
                                </div>
                                <div className='col-2 text-center'>
                                    <img className='vector5' src={V5} />
                                    <p>Families</p>
                                </div>
                            </div>
                            <h6 className='font-medium'>Title here if they have othervise remove this</h6>
                            <img src={dot} /> <span className='font-regular'>Siste ma 2 kW con accumuIo.</span><br />
                            <img src={dot} /> <span className='font-regular'>Tempo di ricarica medio in estate is 5 ore e 30 minuti</span><br />
                            <img src={dot} /> <span className='font-regular'>Te mpo di scarica a 16A is 8 ore.</span><br />
                            <img src={dot} /> <span className='font-regular'>Autonomia dalla rete eIettrica 62Po.</span><br />

                        </div>
                    </div>
                </div>
                <div className='nineth-main my-5'>
                    <div className='text-center'>
                        <h4 className='pt-4 font-medium ninth-h4'>Connettiti al sole anche tu</h4>
                        <img src={line} />
                    </div>
                    <div className='container mt-3 mb-5'>
                        <div className='row text-center '>
                            <div className='col-xl mx-3 p-4 col-lg-6 col-md-12 nineth-child'>
                                <img src={V9} />
                                <h6><b>Richiedi un Preventivo</b></h6>
                                <p>Senza impegno un nostro Solar expert ti contatterâ per verificare Ie tue esirenze
                                    ditilizzn</p>
                            </div>
                            <div className='col-xl mx-3 p-4 col-lg-6 col-md-12 nineth-child'>
                                <img src={V6} />
                                <h6><b>Verifica la compatibilitâ</b></h6>
                                <p>Verifica immediata della necessitâ tecniche di installazione</p>
                            </div>
                            <div className='col-xl mx-3 p-4 col-lg-6 col-md-12 nineth-child'>
                                <img src={V7} />
                                <h6><b>Installazione</b></h6>
                                <p>Un instalIatore qualificato Solar Innovatio posizionerâ il SIRE in massimo 2 ore</p>
                            </div>
                            <div className='col-xl mx-3 p-4 col-lg-6 col-md-12 nineth-child'>
                                <img src={V8} />
                                <h6><b>Enjoy your Sun Power</b></h6>
                                <p>Connettiti alla APP e  goditi la tua energia  solare</p>
                            </div>

                        </div>
                        <div className='text-center'>
                            <button className='nineth-btn font-regular'>Collegati al sole</button>
                        </div>

                    </div>
                </div>
                <div className='tenth-main container'>
                    <div className='text-center'>
                        <h4 className='font-medium'>Frequently Asked Questions</h4>
                        <img src={line} />
                    </div>
                    <div className='shadow p-1 my-3'>
                        <img className='m-3' src={minus} /> <span><b>Dove si monta S.I.R.E.?</b></span>
                        <p className='mx-3'>S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra </p>
                    </div>
                    <div className='shadow p-1 my-3'>
                        <img className='m-3' src={plus} /> <span><b>Chi monta l’impianto S.I.R.E.?</b></span>
                    </div>
                    <div className='shadow p-1 my-3'>
                        <img className='m-3' src={plus} /> <span><b>Quanto tempo impiega l’installazione?</b></span>
                    </div>
                    <div className='shadow p-1 my-3'>
                        <img className='m-3' src={plus} /> <span><b>E’ necessario richiedere autorizzazioni al condominio?</b></span>
                    </div>
                    <div className='shadow p-1 my-3'>
                        <img className='m-3' src={plus} /> <span><b>E’ necessario predisporre pratiche per il GSE? </b></span>
                    </div>
                    <div className='shadow p-1 my-3'>
                        <img className='m-3' src={plus} /> <span><b>L’impianto è garantito?</b></span>
                    </div>
                    <div className='shadow p-1 my-3'>
                        <img className='m-3' src={plus} /> <span><b>E’ possibile usufruire di bonus fiscali?</b></span>
                    </div>
                    <div className='text-center my-5 '>
                        <button className='tenth-btn font-regular'>Collegati al sole</button>
                    </div>
                </div>
                <div className='eleventh-main mt-5 mb-5 mx-5 px-5'>
                    <div className='text-center mb-5'>
                        <h4 className='font-medium eleventh-h4'>CONTATTACI</h4>
                        <img src={line} />
                    </div>
                    <div className='row g-0'>
                        <div className='col-1'></div>
                        <div className='col-xl-3 col-lg-12 shadow rounded p-3'>
                            <div className='container '>
                                <div className='row'>
                                    <div className='col-2'><img src={location} /></div>
                                    <div className='col-10'><p>Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae orci</p></div>
                                </div>
                                <div className='row'>
                                    <div className='col-2'><img src={msg} /></div>
                                    <div className='col-10'><p>email@email.com</p><p>support@email.com</p></div>
                                </div>
                                <div className='row'>
                                    <div className='col-2'><img src={phone} /></div>
                                    <div className='col-10'><p>+29 98595 8998</p></div>
                                </div>
                                <div className="container"><hr /></div>
                                <div className=''><h6 className='font-regular'>We Will get back to you within <br /> 24 hours. Or Call us Now</h6></div>

                            </div>
                        </div>
                        <div className='col-xl-7 col-lg-12 px-5 shadow rounded py-4 mx-3'>
                            <div class="row">
                                <div class="col-6">
                                    <input type="text" class="form-control" placeholder="First name" />
                                </div>
                                <div class="col-6">
                                    <input type="text" class="form-control" placeholder="Last name" />
                                </div>
                            </div>
                            <input className='mt-2 mb-2 form-control' placeholder='Email' />
                            <textarea className='form-control h-50' placeholder='Message' />
                        <div className='text-end my-2'><button className='form-btn'>Send</button></div>
                        </div>

                    </div>
                </div>
                <div className='twelve-main'>
                    <div className='row py-3 g-0'>
                        <div className='col-1'></div>
                        <div className='col-xl-4  col-lg-12'>
                            <div className='container p-2'>
                                <h6 className='text-light font-regular'><b>Subscribe for Newsletter</b></h6>
                                <p className='text-light font-regular'>Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae orci maecenas tortor odio</p>
                            </div>
                        </div>
                        <div className='col-xl col-lg-12 text-center mt-4'>
                            <input className='search-input w-50 font-regular ' placeholder='Inserisci la tua email' />

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;