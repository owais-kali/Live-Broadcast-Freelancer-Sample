import React, { useState } from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormInput,
    CFormLabel,
    CFormTextarea,
    CRow,
} from '@coreui/react'

import { env } from 'src/configs/env'

import axios from 'axios'

import jsoneditor from 'jsoneditor';
import locale from 'react-json-editor-ajrm/locale/en';

import { PCOB_Handler } from 'src/services/PCOB/PCOB-Handler';
import {PlayElimination} from 'src/views/Vmix/Elimination'

const EC_Agent_PCOB_URL = env.HTTP + '://' + env.EC_Agent_URL + "/pcob";
const PCOB_URL = env.PCOB_URL;

function StartPCOBDummy() {
    axios.get(EC_Agent_PCOB_URL + '/start', (res) => {

    }).catch((e) => {

    })
}


function StopPCOBDummy() {
    axios.get(EC_Agent_PCOB_URL + '/stop').then((res) => {

    }).catch((e) => {

    })
}

function GetTotalPlayerList() {
    const url = EC_Agent_PCOB_URL + '/gettotalplayerlist';
    let CurrentInput = "";

    const GetDefault = () => {
        axios.get(url + '/default').then((res) => {
            CurrentInput = JSON.stringify(res.data)

            const input = document.getElementById('Input');
            input.value = CurrentInput;

        }).catch((e) => {
            console.log(e);
        })
    }

    const Update = () => {
        const input = document.getElementById('Input');
        CurrentInput = input.value
        axios.post(url + '/update', JSON.parse(CurrentInput)).then((res) => {
        }).catch((e) => {
            console.log(e);
        })
    }

    return (
        <div>
            <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlTextarea1">GetTotalPlayerList</CFormLabel>
                <CFormTextarea id="Input" rows="3" ></CFormTextarea>
            </div>
            <div className="mb-3">
                <CCol xs>
                    <CButton onClick={GetDefault}>GetDefault</CButton>
                    <CButton onClick={Update}>Update</CButton>
                </CCol>
            </div>
        </div>
    )
}

function ConsoleLog() {
    return (
        <div>
            <div className="mb-3">
                <CFormLabel htmlFor="Console">Console</CFormLabel>
                <CFormTextarea id="Input" rows="3" readOnly ></CFormTextarea>
            </div>
        </div>
    )
}

function Handler() {
    const pcob_handler = new PCOB_Handler(PCOB_URL);
    pcob_handler.OnEliminated = Play_Elimination
    
    const Start = () => {
        pcob_handler.Start();
        
    }

    const Stop = () => {
        pcob_handler.Stop();
    }

    function Play_Elimination(playerinfo){
        PlayElimination(playerinfo.killNum,playerinfo.rank,playerinfo.teamName);
    }

    return (
        <div className="mb-3">
            <CCol xs>
                <CButton onClick={Start}>Start Streaming</CButton>
                <CButton onClick={Stop}>Stop Streaming</CButton>
                <CButton onClick={PlayElimination}>Play Elimination</CButton>
            </CCol>
        </div>
    )
}

const Test = () => {
    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>PCOB Dummy</strong>
                    </CCardHeader>

                    <CCardBody>
                        <CForm>
                            <div className="mb-3">
                                <CCol xs>
                                    <CButton onClick={StartPCOBDummy}>StartPCOBDummy</CButton>
                                    <CButton onClick={StopPCOBDummy}>StopPCOBDummy</CButton>
                                </CCol>
                            </div>
                            <GetTotalPlayerList />

                            <ConsoleLog />

                            <Handler />
                        </CForm>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default Test
