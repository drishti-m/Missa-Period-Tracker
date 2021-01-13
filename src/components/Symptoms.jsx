import './Nav.css';
import React, { Component } from 'react';
import './Symptoms.css';
//import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

class Symptoms extends Component {
    constructor() {
        super();
        this.state = {
            sex: false,
            protectedsex: true
        };
    }
    noSex = (e) => {
        this.setState({ sex: false });
    }
    hadProtectedSex = (e) => {
        this.setState({ sex: true, protectedsex: true });
    }
    hadUnprotectedSex = (e) => {
        this.setState({ sex: true, protectedsex: false });
    }
    render() {
        return (
            <div className="symptoms">
                <h2 className="logTitle"> Log Your Symptoms</h2>
                <div class="row row-cols-1 row-cols-md-2 g-4">

                    <div class="col">
                        <div class="card text-dark bg-light mb-3 custom-card">
                            <div class="card-header text-center">Mood</div>
                            <div class="card-body text-center">
                                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                                    <input type="checkbox" class="btn-check" id="calm" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="calm">Calm</label>

                                    <input type="checkbox" class="btn-check" id="happy" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="happy">Happy</label>

                                    <input type="checkbox" class="btn-check" id="energetic" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="energetic">Energetic</label>
                                </div>

                            </div>
                            <div class="card-body text-center">
                                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                                    <input type="checkbox" class="btn-check" id="moodswings" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="moodswings">Moodswings</label>

                                    <input type="checkbox" class="btn-check" id="irritated" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="irritated">Irritated</label>

                                    <input type="checkbox" class="btn-check" id="confused" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="confused">Confused</label>
                                </div>
                            </div>
                            <div class="card-body text-center">
                                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                                    <input type="checkbox" class="btn-check" id="sad" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="sad">Sad</label>

                                    <input type="checkbox" class="btn-check" id="anxious" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="anxious">Anxious</label>

                                    <input type="checkbox" class="btn-check" id="depressed" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="depressed">Depressed</label>
                                </div>
                            </div>
                        </div>
                    </div >


                    <div class="col">
                        <div class="card text-dark bg-light mb-3 custom-card">
                            <div class="card-header text-center">Body Symptoms</div>
                            <div class="card-body text-center">
                                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                                    <input type="checkbox" class="btn-check" id="allgood" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="allgood">All Good</label>

                                    <input type="checkbox" class="btn-check" id="cramps" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="cramps">Cramps</label>

                                    <input type="checkbox" class="btn-check" id="tenderbreasts" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="tenderbreasts">Tender breasts</label>
                                </div>

                            </div>
                            <div class="card-body text-center">
                                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                                    <input type="checkbox" class="btn-check" id="backache" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="backache">Backache</label>

                                    <input type="checkbox" class="btn-check" id="headache" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="headache">Headache</label>

                                    <input type="checkbox" class="btn-check" id="abdominalpain" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="abdominalpain">Abdominal pain</label>
                                </div>
                            </div>
                            <div class="card-body text-center">
                                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                                    <input type="checkbox" class="btn-check" id="insomnia" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="insomnia">Insomnia</label>

                                    <input type="checkbox" class="btn-check" id="cravings" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="cravings">Cravings</label>

                                    <input type="checkbox" class="btn-check" id="constipation" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="constipation">Constipation</label>
                                </div>
                            </div>
                        </div>
                    </div >


                    <div class="col">
                        <div class="card text-dark bg-light mb-3 custom-card">
                            <div class="card-header text-center">Sex Drive</div>
                            <div class="card-body text-center">
                                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" class="btn-check" name="sex" id="nosex" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="nosex">No Sex</label>

                                    <input type="radio" class="btn-check" name="sex" id="protectedsex" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="protectedsex">Protected Sex</label>

                                    <input type="radio" class="btn-check" name="sex" id="unprotectedsex" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="unprotectedsex">Unprotected Sex</label>




                                </div>

                            </div>
                            <div class="card-body text-center">
                                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" class="btn-check" name="sexdrive" id="lowsexdrive" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="lowsexdrive">Low Sex Drive</label>

                                    <input type="radio" class="btn-check" name="sexdrive" id="highsexdrive" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="highsexdrive">High Sex Drive</label>


                                </div>
                            </div>
                        </div>
                    </div >


                    <div class="col">
                        <div class="card text-dark bg-light mb-3 custom-card">
                            <div class="card-header text-center">Vaginal Discharge</div>
                            <div class="card-body text-center">
                                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                                    <input type="checkbox" class="btn-check" id="nodischarge" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="nodischarge">No Discharge</label>

                                    <input type="checkbox" class="btn-check" id="spotting" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="spotting">Spotting</label>

                                    <input type="checkbox" class="btn-check" id="eggwhite" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="eggwhite">Eggwhite</label>
                                </div>

                            </div>

                            <div class="card-body text-center">
                                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                                    <input type="checkbox" class="btn-check" id="watery" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="watery">Watery</label>

                                    <input type="checkbox" class="btn-check" id="sticky" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="sticky">Sticky</label>

                                    <input type="checkbox" class="btn-check" id="unusual" autocomplete="off" />
                                    <label class="btn btn-outline-primary" for="unusual">Unusual</label>

                                </div>
                            </div>

                        </div>
                    </div >
                </div>
            </div>
        );
    }
}


export default Symptoms;
