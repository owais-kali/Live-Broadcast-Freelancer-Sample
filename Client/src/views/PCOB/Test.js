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

const EC_Agent_PCOB_URL = env.HTTP + '://' + env.EC_Agent_URL + "/pcob";

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

    const GetCurrent = ()=>{
        return CurrentInput;
    }

    return (
        <div className="mb-3">
            <CFormLabel htmlFor="exampleFormControlTextarea1">GetTotalPlayerList</CFormLabel>
            <CFormTextarea id="Input" rows="3"></CFormTextarea>
            <CCol xs>
                <CButton onClick={GetDefault}>GetDefault</CButton>
                <CButton onClick={Update}>Update</CButton>
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
                        </CForm>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default Test
